from datetime import datetime, timedelta
import os
import shutil
import sys
import tarfile
import urllib.request
import csv
import subprocess

from bs4 import BeautifulSoup, SoupStrainer
from dateutil import parser
from deb_pkg_tools.control import deb822_from_string
from deb_pkg_tools.control import parse_control_fields
from deb_pkg_tools.deps import parse_depends
import requests
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, update

import cran_diff
from .cran_diff import NotFoundError
from .models import Packages
from .models import Imports
from .models import Suggests
from .models import Exports
from .models import Arguments
from .models import News
from .models import Tags
from .models import TagMembers






def convert_encoding(filename):
    """Use UTF-8 encoding in file

    :param: filename: file to decode using latin1
    :return: name of new file that uses UTF-8 encoding
    """
    BLOCKSIZE = 1024*1024
    converted_file = f"{filename}_utf-8"
    with open(filename, 'rb') as inf:
        with open(converted_file, 'wb') as ouf:
            while True:
                data = inf.read(BLOCKSIZE)
                if not data:
                    break
                converted = data.decode('latin1').encode('utf-8')
                ouf.write(converted)
    return converted_file



def remove_comments(string, comment_char = "#"):
    starts = [i for i, char in enumerate(string) if char == comment_char]
    quotes = [i for i, char in enumerate(string) if char == '"']
    #Ignore quotes preceded by escape character \\
    for q_id, quote in enumerate(quotes):
        if quote - 2 >= 0:
            if string[quote - 2: quote] == "\\\\":
                #Make sure no escape character \\ before escape character
                if quote - 4 >= 0:
                    if string[quote - 4: quote - 2] == "\\\\":
                        continue
                quotes.pop(q_id)
                continue
        #Also check for single '\' escape
        if quote - 1 >= 0:
            if string[quote - 1: quote] == "\\":
                quotes.pop(q_id)
    pairs = []
    #Search for '#' symbol within quote pairs
    if len(quotes) % 2 != 0:
        print("Warning: uneven number of quote pairs in # search")
        print(string)
    else:
        #Only add quote pairs if even number
        quote_pairs = [quotes[i:i+2] for i in range(0, len(quotes), 2)]
        pairs.extend(quote_pairs)
    length_rm = 0
    while len(starts) > 0:
        if True in [pairs[i][0] < starts[0] < pairs[i][1] for i in range(len(pairs))]:
            #Hash '#' symbol is found within a set of brackets or quotes: not a comment
            starts.pop(0)
            continue
        #Want to delete any preceding spaces as well
        if starts[0] - length_rm - 1 >= 0:
            if string[starts[0] - length_rm - 1] == " ":
                while string[starts[0] - length_rm - 1] == " ":
                    starts[0] = starts[0] - 1
        comment = string[starts[0] - length_rm:]
        #Comment should run only until '\n' if this exists
        comment_end = comment.find("\n")
        if comment_end != -1:
            comment = comment[:comment_end]
        comment = comment[:comment_end]
        string = string[:starts[0] - length_rm] + string[starts[0] - length_rm + len(comment):]
        #Check for '#' signs within cut comment and remove from potential starts
        num_starts = len([i for i, char in enumerate(comment) if char == comment_char])
        starts = starts[num_starts:]
        length_rm += len(comment)
    return(string)


def read_namespace_file(package):
    """Parses NAMESPACE file for exports

    :param: package: string for the package name
    :return: list of exports
    """
    inner_list = []
    type_list = []
    namespace_file = f"{package}/NAMESPACE"
    try:
        #Extract contents of NAMESPACE file
        try:
            with open(namespace_file, "r", encoding ='utf-8') as nmspc_file:
                nmspc = nmspc_file.read()
        except UnicodeDecodeError:
            #Need to convert to UTF-8
            namespace_file = convert_encoding(namespace_file)
            with open(namespace_file, "r", encoding ='utf-8') as nmspc_file:
                nmspc = nmspc_file.read()
        #Remove R-like '#' comments from NAMESPACE
        if "#" in nmspc:
            nmspc = remove_comments(nmspc)
        # replace all ";" with "\n"
        nmspc = nmspc.replace(";","\n")
        #Find all exported functions, patterns and S4 methods / classes
        directives = ["export", "exportMethods", "exportClasses", "exportPattern"]
        types = ["function", "S4method", "S4class", "pattern"]
        for dir_id, directive in enumerate(directives):
            while f"{directive}(" in nmspc:
                exports_start = nmspc.find(f"{directive}(")
                exports = nmspc[exports_start + len(f"{directive}("):]
                exports_end = exports.find(")\n")
                exports = exports[:exports_end]
                export_list = exports.split(",")
                for i in range(len(export_list)):
                    #Remove leading and trailing whitespace (spaces, tabs, newlines)
                    export = export_list[i].strip("\t\n ")
                    inner_list.append(export)
                    type_list.append(types[dir_id])
                #Remove this directive from our string
                nmspc = nmspc[:exports_start] + nmspc[exports_start + len(f"{directive}(") + len(exports) + 1:]
        #Find all exported S3 methods
        while "S3method(" in nmspc:
            method_start = nmspc.find("S3method(")
            method = nmspc[method_start + len("S3method("):]
            method_end = method.find(")\n")
            method = method[:method_end]
            parts = method.split(",")
            #Remove leading and trailing whitespace (spaces, tabs, newlines) from generic and class names
            gen = parts[0].strip("\t\n ")
            cls = parts[1].strip("\t\n ")
            #Check for and remove double-quotes surrounding generic and class (e.g., "[")
            if gen[0] == '"' and gen[-1] == '"':
                gen = gen.strip('"')
            if cls[0] == '"' and cls[-1] == '"':
                cls = cls.strip('"')
            inner_list.append(f"{gen}.{cls}")
            type_list.append("S3method")
            #Remove this directive from our string
            nmspc = nmspc[:method_start] + nmspc[method_start + len("S3method(") + len(method) + 1:]
    except FileNotFoundError:
        return (inner_list, type_list)
    return (inner_list, type_list)


def match_brackets(string, bracket_type = "("):
    if bracket_type == "(":
        opens = [i for i, letter in enumerate(string) if letter == "("]
        closes = [i for i, letter in enumerate(string) if letter == ")"]
    if bracket_type == "{":
        opens = [i for i, letter in enumerate(string) if letter == "{"]
        closes = [i for i, letter in enumerate(string) if letter == "}"]
    if len(opens) != len(closes):
        #Uneven bracket pairs: return with flag -1
        pairs = -1
    else:
        pairs = []
        #Find the corresponding opening bracket for each closing bracket
        for i in closes:
            open_id = [j for j in opens if j < i][-1]
            pairs.append([open_id, i])
            opens.remove(open_id)
        #Sort in order of the opening bracket
        pairs = sorted(pairs, key = lambda x: x[0])
    return(pairs)


def split_arguments(string):
    #Locate pairs of brackets and double-quotes
    pairs = match_brackets(string)
    if pairs == -1:
        #Do not check for commas within bracket pairs
        pairs = []
    quotes = [i for i, char in enumerate(string) if char == '"']
    #Ignore quotes preceded by escape character \\
    for q_id, quote in enumerate(quotes):
        if quote - 2 >= 0:
            if string[quote - 2: quote] == "\\\\":
                #Make sure no escape character before escape character
                if quote - 4 >= 0:
                    if string[quote - 4: quote - 2] == "\\\\":
                        continue
                quotes.pop(q_id)
                continue
        #Also check for single '\' escape
        if quote - 1 >= 0:
            if string[quote - 1: quote] == "\\":
                quotes.pop(q_id)

    if len(quotes) % 2 != 0:
        print("Warning: uneven number of quotes in arg splitting")
        print(string)
    else:
        #Search for commas within quote pairs as well as bracket pairs
        quote_pairs = [quotes[i:i+2] for i in range(0, len(quotes), 2)]
        pairs.extend(quote_pairs)
    commas = [i for i, char in enumerate(string) if char == ","]
    #Split up arguments only using commas outside () and "" pairs
    segments = []
    remainder = string
    length_removed = 0
    for loc in commas:
        if True in [pairs[i][0] < loc < pairs[i][1] for i in range(len(pairs))]:
            #Comma is found within a set of brackets or quotes
            continue
        segments.append(string[length_removed:loc]) 
        remainder = string[loc+1:]
        length_removed = len(string) - len(remainder)
    #Remaining string is also an argument
    segments.append(remainder)
    return(segments)


def read_doc_files(package):
    #First, check if there is a man folder
    if not os.path.exists(f"{package}/man"):
        #This package has no docs- return empty lists
        function_list = []
        argument_list = []
        default_list = []
        return(function_list, argument_list, default_list)
    #If man exists, read doc files
    file_list = os.listdir(f"{package}/man")
    function_list = []
    argument_list = []
    default_list = []
    for filename in file_list:
        if filename[-3:] != ".Rd":
            continue
        rd_file = f"{package}/man/{filename}"
        try:
            with open(rd_file, "r", encoding ='utf-8') as doc_file:
                docs = doc_file.read()
        except UnicodeDecodeError:
            #Need to convert to UTF-8
            rd_file = convert_encoding(rd_file)
            with open(rd_file, "r", encoding ='utf-8') as doc_file:
                docs = doc_file.read()

        doc_sections = ['name','alias','title','description','usage','arguments','details', 'value', 'examples', 'keyword']
        doc_sections = ['name', 'alias', 'usage']
        # joined_sections = '|'.join(doc_sections)
        # match_string = '\\\\(' + joined_sections + "){((?:[^\\\\]|\\\\(?!(" + joined_sections + ")))+)}"


        # comment = re.compile("^%.+$")
        # not_comments = "\n".join(l for l in docs.split("\n") if not comment.match(l))

        # matcher = re.compile(match_string)
        # matcher = re.compile('\\\\(name|alias|title|description|usage|arguments|details|value|examples){((?:[^\\\\]|\\\\(?!(name|alias|title|description|usage|arguments|details|value|examples)))+)}')
        # res = matcher.findall(docs)

        # aliases = list(set(map(lambda x: x[1], filter(lambda x: x[0] == 'alias' or x[0] == 'name', res))))
        # args = list(map(lambda x: x[1], filter(lambda x: x[0] == 'usage', res)))[0]
        # arg_list = list(map(lambda x: x[1], filter(lambda x: x[0] == 'arguments', res)))[0]

        # matcher = re.compile('\\\\item{(.*)}')
        # arg_names = matcher.findall(arg_list)
        # re.split('(' + '|'.join(arg_names) + ')', args)

        # matcher = re.compile('.*\( (.*) \).*', re.MULTILINE)
        # matcher.findall(args)
        
        # args.replace(',','\n').split('\n')
        # matcher.sub(args, "\n").split('\n')

        # matcher = re.compile("\((.+)\)", re.MULTILINE)
        # [m.start() for m in re.finditer('\(', args)]
        # [m.start() for m in re.finditer('\)', args)]
        # matcher.findall(args)



        if "\\usage{" not in docs :
            #No 'usage' documentation
            continue
        #Use aliases to create a list of potential functions
        doc_functions = []
        with open(rd_file, "r", encoding ='utf-8') as doc_file:
            for i in doc_file:
                if i.startswith("\\alias{"):
                    function = i[len("\\alias{"):]
                    function = function.rstrip("}\n")
                    doc_functions.append(function)
        #Extract 'usage' section contents
        usage_start = docs.find("\\usage{")
        usage = docs[usage_start:]
        try:
            bracket_pairs = match_brackets(usage, bracket_type="{")
        except IndexError:
            print(f"Warning: IndexError for match_brackets in {rd_file}")
            print(usage)
            bracket_pairs = -1
        if bracket_pairs == -1:
            end = usage.find("}\n")
            usage = usage[len("\\usage{"): end]
        else:
            [start, end] = bracket_pairs[0]
            usage = usage[start + 1: end]
        #Check for and delete comments in usage
        if "%" in usage:
            #Remove Rd comments '%' (like LaTeX)
            starts = [i for i, char in enumerate(usage) if char == "%"]
            length_rm = 0
            while len(starts) > 0:
                if usage[starts[0] - length_rm - 1] == "\\":
                    #Escape character- not a comment
                    starts.pop(0)
                    continue
                #Want to delete any preceding spaces as well
                if starts[0] - length_rm - 1 >= 0:
                    if usage[starts[0] - length_rm - 1] == " ":
                        while usage[starts[0] - length_rm - 1] == " ":
                            starts[0] = starts[0] - 1
                comment = usage[starts[0] - length_rm:]
                #Comment should run only until '\n' if this exists
                comment_end = comment.find("\n")
                if comment_end != -1:
                    comment = comment[:comment_end]
                usage = usage[:starts[0] - length_rm] + usage[starts[0] - length_rm + len(comment):]
                #Check for % signs within cut comment and remove from potential starts
                num_starts = [i for i, char in enumerate(comment) if char == "%"]
                starts = starts[len(num_starts):]
                length_rm += len(comment)
        if "#" in usage:
            #Remove R-like '#' comments (including #ifdef statements- technically not comments!)
            usage = remove_comments(usage)

        #Iterate through each potential function
        for f in doc_functions:
            function_arguments = []
            function_defaults = []
            function_str = "\n" + f + "("
            if function_str in usage:
                #Confirms that f is a function
                function_start = usage.find(function_str)
                function_list.append(f)
                string_length = len(function_str)
            elif "\\method{" in usage:
                #Check for S3 method
                dots = [i for i, char in enumerate(f) if char == "."]
                found_method = False
                for d in dots:
                    method_str = "\\method{%s}{%s}(" % (f[:d], f[d + 1:])
                    if method_str in usage:
                        #Confirms that f is a S3 method
                        function_start = usage.find(method_str)
                        found_method = True
                        function_list.append(f)
                        string_length = len(method_str)
                        break
                if not found_method:
                    #No documentation for method with name f
                    continue            
            elif f in usage:
                #f is not a function or method (could be data)
                continue            
            else:
                #No documentation for function with name f
                continue
            #Extract contents of function parentheses
            arguments = usage[function_start:]
            bracket_pairs = match_brackets(arguments)
            if bracket_pairs == -1:
                end = arguments.find(")\n")
                arguments = arguments[string_length: end]
            else:
                [start, end] = bracket_pairs[0]
                arguments = arguments[start + 1: end]
            #Use 'free' commas (outside () and "") to get a list of arguments
            arguments = split_arguments(arguments)
            for i in arguments:
                argument = i.replace("\n  ", " ")
                #Split into argument name and default using '=' sign
                argument = argument.split("=", maxsplit = 1)
                argname = argument[0].strip("\t\n ")
                function_arguments.append(argname)
                if len(argument) == 1:  
                    #No default value: store empty string
                    function_defaults.append('')
                else:  
                    #Default exists
                    argval = argument[1].strip("\t\n ")
                    argval = ' '.join(argval.split())
                    function_defaults.append(argval)
            #Append list of function arguments to the arguments list 
            argument_list.append(function_arguments)
            default_list.append(function_defaults)
    return(function_list, argument_list, default_list) 


# def read_news(package, version, path_to_r = '.'):
#     #Use utils::news R function to extract news
#     subprocess.call(["Rscript", "--vanilla", path_to_r+"/get_news.R", package, version])
#     #If news exists, this has been added to a csv file
#     news_file = f"./{package}_{version}.csv"
#     categories = []
#     text_list = []
#     if os.path.exists(news_file):
#         with open(news_file, newline = '') as File:
#             reader = csv.reader(File)
#             for row in reader:
#                 if row[1] == version:
#                     category = row[3].replace('NA', '')
#                     categories.append(category)
#                     text = ' '.join(row[4].split())
#                     text_list.append(text)
#         os.remove(news_file)
#     return(categories, text_list)


# def database_insert(session, package, version, date, title, description, url, bugreport, maintainer, imports, suggests, exports, types, functions, arguments, defaults, categories, text, package_type):
#     """Creates SQLAlchemy engine and starts database session. Adds package information to database.

#     :params: 
#     session: SQLAlchemy session
#     package: string for the package name
#     version: string for the version number
#     date: datetime object for package publication date
#     title: string for package title
#     description: string for package description
#     url: string for package URL
#     bugreport: string for package bugreport
#     maintainer: string for package maintainer
#     imports: dict of import, version number pairs
#     suggests: dict of suggests, version number pairs
#     exports: list of exports
#     """

#     package_info = Packages(name=package, version=version, date=date, title=title, description=description, maintainer=maintainer, url=url, bugreport=bugreport, package_type=package_type)
#     session.add(package_info)
#     # rather than query the db, flush refresh and get the recently added package
#     session.flush()
#     session.refresh(package_info)
#     id_num = package_info.id
#     # id_num = (session.query(Packages.id)
#     #                  .filter(Packages.name == package, Packages.version == version)
#     #                  .first()[0])
#     for k, v in imports.items():
#         import_info = Imports(package_id=id_num, name=k, version=v)
#         session.add(import_info)

#     for k, v in suggests.items():
#         suggest_info = Suggests(package_id=id_num, name=k, version=v)
#         session.add(suggest_info)

#     for i in range(len(exports)):
#         export_info = Exports(package_id=id_num, name=exports[i], type=types[i])
#         session.add(export_info)

#     for i in range(len(functions)):
#         for j in range(len(arguments[i])):
#             argument_info = Arguments(package_id=id_num, function=functions[i], name=arguments[i][j], default=defaults[i][j])
#             session.add(argument_info)

#     for i in range(len(categories)):
#         news_info = News(package_id=id_num, category=categories[i], text=text[i])
#         session.add(news_info)

#     #Commit all database entries for this package version
#     session.commit()


# def download_tar_file(package, version, target_path = "r_packages"):
#     #Download tar file
#     path = 'https://cran.r-project.org/src/contrib/'
#     tar_file = f'{package}_{version}.tar.gz'
#     src = f'{path}{tar_file}'
#     os.path.exists(target_path) or os.mkdir(target_path)
#     target = f'{target_path}/{tar_file}'
#     try:
#         urllib.request.urlretrieve(src, target)
#     except urllib.error.HTTPError:
#         try:
#             path = f'https://cran.r-project.org/src/contrib/Archive/{package}/'
#             src = f'{path}{tar_file}'
#             urllib.request.urlretrieve(src, target)
#         except urllib.error.HTTPError:
#             raise ValueError(f'Could not download package archive for {package} v{version}')
#     return(target)


# def download_and_insert(session, package, version, package_type, path_to_r = '.', target_path = "r_packages"):
#     """Checks if package with version number is already in database. If not,
#     it downloads package tar file from CRAN, unpacks the tar file, extracts 
#     necessary information from the DESCRIPTION and NAMESPACE file and inserts 
#     the information into the database. It then deletes the tar file and package directory.

#     :params: 
#     session: SQLAlchemy session
#     package: string for the package name
#     version: string for the version number
#     """

#     #Download tar file
#     tar_file = download_tar_file(package, version, target_path)
#     tar = tarfile.open(tar_file, "r:gz")
#     tar.extractall(target_path)
#     tar.close()
#     #Extract necessary package info
#     package_location = f'{target_path}/{package}'
#     data = read_description_file(package_location)
#     title, description, url, bugreport, version, maintainer, date, imports, suggests = parse_description_file(data)
#     exports, types = read_namespace_file(package_location)
#     functions, arguments, defaults = read_doc_files(package_location)
#     categories, text = read_news(package_location, version, path_to_r)
#     database_insert(session, package, version, date, title, description, url, bugreport, maintainer, imports, suggests, exports, types, functions, arguments, defaults, categories, text, package_type)
#     #Delete package and tarfile
#     shutil.rmtree(package_location)
#     os.remove(tar_file)


# def get_archive_name_versions(package):
#     """Scrapes package archive page to get previous version numbers
#     within the last two years

#     :param: package: string for the package name
#     :return: list of archived versions within past two years
#     """
#     html_page = requests.get(f'https://cran.r-project.org/src/contrib/Archive/{package}/')
#     soup = BeautifulSoup(html_page.text, 'html.parser')
#     dates = [x.string.strip() for x in soup.select('body > table > tr > td:nth-child(3)') if len(x.string.strip()) > 0]
#     version_list = []
#     i = 0
#     for link in BeautifulSoup(html_page.text, parse_only=SoupStrainer('a'), features="html.parser"):
#         if link.has_attr('href'):
#             if link['href'].startswith(package) and link['href'].endswith('.tar.gz'):
#                 date = dates[i]
#                 i += 1
#                 #Check if package older than 2 years
#                 date = parser.parse(date)
#                 two_years_ago = datetime.now() - timedelta(weeks=104)
#                 if two_years_ago > date:
#                     continue
#                 version = link['href'].split('_')[1]
#                 version = version.rstrip('.tar.gz')
#                 version_list.append(version)
#     return version_list


# def chunk_metadata(cran_metadata):
#     """
#     Create an enumerate object from cran metadata

#     returns enumerate object, together with its length
#     """
#     #Split metadata into separate chunk for each package
#     chunks = cran_metadata.split("\n\n")
#     return enumerate(chunks), len(chunks)


# def get_package_and_version(chunk):
#     """Extracts the package and version from CRAN metadata chunk
    
#     :params:
#     chunk: A single string chunk of CRAN metadata

#     """
#     unparsed_fields = deb822_from_string(chunk)
#     parsed_fields = parse_control_fields(unparsed_fields)
#     package = parsed_fields['Package']
#     version = parsed_fields['Version']
#     return package, version


def download_and_insert_all_packages(session, cran_metadata, path_to_r = ".", target_path = "r_packages"): 
    """Downloads and inserts package data into database, if not already there.
    Prints to stderr if exception is thrown.

    :params: 
    session: SQLAlchemy session
    cran_metadata: package metadata from 'https://cran.rstudio.com/src/contrib/PACKAGES'
    """
    #Get all package versions currently stored in database
    stored_versions = session.query(Packages.name, Packages.version).all()
    #Split metadata into separate chunk for each package
    chunks, n_chunks = chunk_metadata(cran_metadata)
    print("Number of packages:", n_chunks)
    for chunk_id, chunk in chunks:
        if chunk_id % 50 == 0:
            percent = (chunk_id / n_chunks) * 100
            print("Completion: "+str(percent)+"%")
        try:
            package, version = get_package_and_version(chunk)
            print("Checking package: ", package, " ", version)
            #Download and insert if not currently stored in database
            if not (package, version) in stored_versions:
                # implies it is the current package
                print("Downloading ", package, " ", version)
                download_and_insert(session, package, version, package_type="current", path_to_r=path_to_r, target_path=target_path)
                stored_versions.append((package, version))
                #Check archive to get previous version numbers within last 2 years
            print("Checking archived versions of ", package)
            previous_versions = get_archive_name_versions(package)
            print("Found ", previous_versions)
            for version in previous_versions:
                #Download and insert if not currently stored in database
                if not (package, version) in stored_versions:
                    print("Downlading ", package, " ", version)
                    download_and_insert(session, package, version, package_type="archived", path_to_r = path_to_r, target_path=target_path)
        except Exception as ex:
            print("#########################################################", file=sys.stderr, flush=True)
            print(f'Exception: {type(ex)}', file=sys.stderr, flush=True)
            print(ex, file=sys.stderr, flush=True)
            print('---', file=sys.stderr, flush=True)
            print('Package:', file=sys.stderr, flush=True)
            print('---', file=sys.stderr, flush=True)
            print(chunk, file=sys.stderr, flush=True)
            print('---', file=sys.stderr, flush=True)
            print("#########################################################", file=sys.stderr, flush=True)
            session.rollback()

            

def remove_table(connection_string, table):
    engine = create_engine(connection_string)
    if table == "arguments":
        Arguments.__table__.drop(engine)
    if table == "exports":
        Exports.__table__.drop(engine)
    if table == "news":
        News.__table__.drop(engine)
    if table == "tags":
        Tags.__table__.drop(engine)
    if table == "tag_members":
        TagMembers.__table__.drop(engine)


def populate_tables(connection_string):
    # create a configured "Session" class
    engine = create_engine(connection_string)

    Session = sessionmaker(bind=engine)

    # create a Session
    session = Session()

    query_maker = cran_diff.make_querymaker(connection_string)

    #Check which tables are empty
    empty_tables = []
    argument_id = session.query(Arguments.id).distinct()
    argument_id = [element for tupl in argument_id for element in tupl]
    if len(argument_id) == 0:
        empty_tables.append("arguments")
    export_id = session.query(Exports.id).distinct()
    export_id = [element for tupl in export_id for element in tupl]
    if len(export_id) == 0:
        empty_tables.append("exports")
    #Populate the empty tables for all package versions listed in packages table
    print("Populate empty tables: ", empty_tables)
    packages = query_maker.get_names()
    print("%d packages total" % (len(packages)))
    for pid, package in enumerate(packages):
        print(package)
        percent = (pid / len(packages)) * 100
        print("Completion: "+str(percent)+"%")
        versions = query_maker.get_latest_versions(package)
        for version in versions:
            #Download tar file
            tar_file = download_tar_file(package, version)
            tar = tarfile.open(tar_file, "r:gz")
            tar.extractall()
            tar.close()
            #Extract package ID
            id_num = (session.query(Packages.id)
                     .filter(Packages.name == package, Packages.version == version)
                     .first()[0])
            if "arguments" in empty_tables:
                #Extract argument data
                functions, arguments, defaults = read_doc_files(package)
                #Update arguments table
                for i in range(len(functions)):
                    for j in range(len(arguments[i])):
                        argument_info = Arguments(package_id=id_num, function=functions[i], name=arguments[i][j], default=defaults[i][j])
                        session.add(argument_info)
                session.commit()
            if "exports" in empty_tables:
                #Extract export data
                exports, types = read_namespace_file(package)
                #Update arguments table
                for i in range(len(exports)):
                    export_info = Exports(package_id=id_num, name=exports[i], type=types[i])
                    session.add(export_info)
                session.commit()
            #Delete package and tarfile
            shutil.rmtree(package)
            os.remove(tar_file)

    session.close()


def update_db(connection_string, path_to_r = ".", target_path = "r_packages"):
    print("Updating packages")
    # create a Session
    engine = create_engine(connection_string)
    Session = sessionmaker(bind=engine)
    session = Session()

    # grab the CRAN data
    r = requests.get('https://cran.rstudio.com/src/contrib/PACKAGES')
    output = r.text
    chunks, n_chunks = chunk_metadata(output)

    #Get all current package versions stored in database
    stored_packages = session.query(Packages.name, Packages.version, Packages.package_type, Packages.id).filter(Packages.package_type == "current").all()

    existing_names = set(map(lambda x: x[0], stored_packages))

    print("Looking for R files in ", os.path.abspath(path_to_r))
    if os.path.exists(path_to_r + "/get_news.R") and os.path.exists(path_to_r + "/get_task_views.R"):
        print("Found R files")
    else:
        Exception("Could not find R files")
    
    print("Downloading packages to ", os.path.abspath(target_path))
    os.path.exists(target_path) or os.mkdir(target_path)

    for chunk_id, chunk in chunks:
        try:
            package, version = get_package_and_version(chunk)
            # filter the stored packages to those matching the same name
            filtered = list(filter(lambda x: package == x[0], stored_packages))
            # specific match
            specific_match = list(filter(lambda x: (package, version) == (x[0], x[1]), filtered))
            if len(filtered) == 0:
                print("New package: ", package, " ", version)
                # implies a brand new package
                download_and_insert(session, package, version, package_type="current", path_to_r=path_to_r, target_path=target_path)
            elif len(specific_match) == 0:
                print("Updated package: ", package, " ",filtered[0][1], " -> ", version)
                # implies a new version of a package
                # need to make the old one archived, then add the new one
                id_to_update = filtered[0][3]
                updater = update(Packages).where(Packages.id == id_to_update).values(package_type = "archived")
                session.execute(updater)
                session.commit()
                download_and_insert(session, package, version, package_type = "current", path_to_r=path_to_r, target_path=target_path)
                # remove it from the list of existing names
                existing_names.remove(package)                
            elif len(specific_match) == 1:
                # implies that the same one is already current
                existing_names.remove(package)
        except Exception as e:
            print(e)
    # what about those that are removed
    # those left in existing names are ones we found no metadata for
    ids_to_remove = list(map(lambda x: x[3], filter(lambda x: x[0] in existing_names, stored_packages)))
    if ids_to_remove:
        print("Archiving removed packages: ", existing_names)
        updater = update(Packages).where(Packages.id.in_(ids_to_remove)).values(package_type = "archived")
        session.execute(updater)
        session.commit()

                
    


def populate_db(connection_string, test=True, path_to_r = ".", target_path = "r_packages"):
    """Populates the database with package info from CRAN

    :params: 
    connection_string: connection string for database
    
    Note: Running the lines below will download ALL 
    packages (including archives within last 2 years) and insert 
    these into database
    """
    # create a configured "Session" class
    engine = create_engine(connection_string)

    Session = sessionmaker(bind=engine)

    # create a Session
    session = Session()

    #Test example
    if test:
        with open("../data/yesterday.txt", "r") as f:
            output = f.read()
            download_and_insert_all_packages(session, output, path_to_r, target_path)
        with open("../data/today.txt", "r") as f:
            output = f.read()
            download_and_insert_all_packages(session, output, path_to_r, target_path)
    else: 
        r = requests.get('https://cran.rstudio.com/src/contrib/PACKAGES')
        output = r.text
        download_and_insert_all_packages(session, output, path_to_r, target_path)

    session.close()


def tag_packages(connection_string, path_to_r = "."):
    #Create a configured "Session" class
    engine = create_engine(connection_string)
    Session = sessionmaker(bind=engine)
    #Create a Session
    session = Session()
    #Get package names and IDs
    result = session.query(Packages.id, Packages.name).all()
    #Create a tags folder
    os.makedirs('./tags')
    #Download task views file
    url = "https://cran.r-project.org/src/contrib/"
    views_file = "Views.rds"
    urllib.request.urlretrieve(f'{url}{views_file}', views_file)
    #Use R script to write task views to tags folder
    subprocess.call(["Rscript", "--vanilla", path_to_r + "/get_task_views.R"])
    #Get tags from folder
    tags = os.listdir('./tags')
    for tag in tags:
        name = f'ctv:{tag}'
        #Extract tag topic and member packages
        with open(f'./tags/{tag}') as reader:
            packages = reader.read().split('\n')
        topic = packages.pop(0)
        #Enter tag into database
        tag_info = Tags(name=name, topic=topic)
        session.add(tag_info)
        #Retrieve ID of stored tag
        tag_id = (session.query(Tags.id)
                .filter(Tags.name == name)
                .first()[0])
        for package in packages:
            #Find ID matching package name and add to tag members
            package_id = [i[0] for i in result if i[1] == package]
            if len(package_id) > 0:
                package_id = package_id[0]
                tag_member_info = TagMembers(tag_id=tag_id, package_id=package_id)
                session.add(tag_member_info)
    session.commit()
    shutil.rmtree('./tags')
    session.close()
