#!/home/dd/anaconda3/bin/python
# yn - YouTube first result new (arbitrary no. results & piping) 
# v0.6 (Juli 24th 2020)

# Searches youtube.com and returns search result URLs.

# What's New: update for new YouTube results page (href -> url)

import sys, requests, re
from more_itertools import unique_everseen
from . import yt_stepper
from . import cnf

logger = logging.getLogger("yn_logger")
fn_fh = logging.FileHandler('mb_func.log', mode='a')
fn_fh.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s:%(name)s:%(levelname)s:%(message)s')
fn_fh.setFormatter(formatter)
logger.addHandler(fn_fh)
logger.setLevel(logging.DEBUG)


def return_results(args, count=1):
    
    """Takes args string, returns YouTube search result(s),
    1-2 digit trailing integer values in args interpreted as count, 
    default count 1."""

    # NB: checks args string for trailing OVERRIDDING results count integer
    #      (overridding a count argument if passed)

    m = re.search(' (\d+)$', args)
    if m:
    
        count = int(m.group(1))
        args = args[:-(len(m.group(1))+1)]  # remove result count arg

    m2 = re.search(', (today|week|month|year)', args)
    if m2:
        today = True
        args = args.replace(m2.group(0),'')
    else:
        today = False


    # result count limitation
    if not cnf.version_number[-3:]:
        if count > 20:
            raise ValueError("maximum 20 search results in community version")


    search_string = args.replace(" ","+")
    youtube_string = 'https://www.youtube.com/results?search_query=' + search_string
    if today:
        youtube_string += '%2C+' + m2.group(1)
        # https://www.youtube.com/results?search_query=hak5%2C+month
   urls = []
    while count > 0:
        # use 'OMM v0.9.0.4'-style user-agent
        headers = {'User-Agent': cnf.header_str}
        r = requests.get(youtube_string, headers=headers)
        m = re.findall('href=\"\/watch\?v=([a-zA-Z_\-0-9]{11})\"', r.text)
        uniqued = []
        for item in m:
            if item not in uniqued:
                uniqued.append(item)
        m_unique = uniqued

        [urls.append('https://www.youtube.com/watch?v=' + url) for url in (m_unique)[:count]]

        count = count - len(m_unique)
        youtube_string = yt_stepper.next_page(youtube_string)

    logger.debug(f"downloaded YouTube '{args}' search results, returning {len(urls)} results")

    return(urls)


if __name__ == '__main__':

    if len(sys.argv) == 1:       # no arguments, piping mode
        args = sys.stdin.read()  # if no piped input,
        result = main(args)  # reads from keyboard
    
    else:
        args = ""
        for item in sys.argv[1:]:
            args = args + item
            args += " "
        args = args.rstrip()
        if args:
            result = main(args)

    for url in result:
        print(url)

