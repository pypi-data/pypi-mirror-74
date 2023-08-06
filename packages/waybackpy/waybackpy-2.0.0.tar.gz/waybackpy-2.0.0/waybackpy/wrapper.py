# -*- coding: utf-8 -*-

import re
import sys
import json
from datetime import datetime
from waybackpy.exceptions import WaybackError

if sys.version_info >= (3, 0):  # If the python ver >= 3
    from urllib.request import Request, urlopen
    from urllib.error import HTTPError, URLError
else: # For python2.x
    from urllib2 import Request, urlopen, HTTPError, URLError

default_UA = "waybackpy python package - https://github.com/akamhy/waybackpy"

class Url():
    """waybackpy Url object"""


    def __init__(self, url, user_agent=default_UA):
        self.url = url
        self.user_agent = user_agent
        self.url_check() # checks url validity on init.

    def __repr__(self):
        """Representation of the object."""
        return "waybackpy.Url(url=%s, user_agent=%s)" % (self.url, self.user_agent)

    def __str__(self):
        """String representation of the object."""
        return "%s" % self.clean_url()

    def __len__(self):
        """Length of the URL."""
        return len(self.clean_url())

    def url_check(self):
        """Check for common URL problems."""
        if "." not in self.url:
            raise URLError("'%s' is not a vaild url." % self.url)
        return True

    def clean_url(self):
        """Fix the URL, if possible."""
        return str(self.url).strip().replace(" ","_")

    def wayback_timestamp(self, **kwargs):
        """Return the formatted the timestamp."""
        return (
          str(kwargs["year"])
          +
          str(kwargs["month"]).zfill(2)
          +
          str(kwargs["day"]).zfill(2)
          +
          str(kwargs["hour"]).zfill(2)
          +
          str(kwargs["minute"]).zfill(2)
          )

    def handle_HTTPError(self, e):
        """Handle some common HTTPErrors."""
        if e.code == 404:
            raise HTTPError(e)
        if e.code >= 400:
            raise WaybackError(e)

    def save(self):
        """Create a new archives for an URL on the Wayback Machine."""
        request_url = ("https://web.archive.org/save/" + self.clean_url())
        hdr = { 'User-Agent' : '%s' % self.user_agent } #nosec
        req = Request(request_url, headers=hdr) #nosec
        try:
            response = urlopen(req, timeout=30) #nosec
        except Exception:
            try:
                response = urlopen(req, timeout=300) #nosec
            except Exception as e:
                raise WaybackError(e)
        header = response.headers
        try:
            arch = re.search(r"rel=\"memento.*?web\.archive\.org(/web/[0-9]{14}/.*?)>", str(header)).group(1)
        except KeyError as e:
            raise WaybackError(e)
        return "https://web.archive.org" + arch

    def get(self, url=None, user_agent=None, encoding=None):
        """Returns the source code of the supplied URL. Auto detects the encoding if not supplied."""
        if not url:
            url = self.clean_url()
        if not user_agent:
            user_agent = self.user_agent
        hdr = { 'User-Agent' : '%s' % user_agent }
        req = Request(url, headers=hdr) #nosec
        try:
            resp=urlopen(req) #nosec
        except URLError:
            try:
                resp=urlopen(req) #nosec
            except URLError as e:
                raise HTTPError(e)
        if not encoding:
            try:
                encoding= resp.headers['content-type'].split('charset=')[-1]
            except AttributeError:
                encoding = "UTF-8"
        return resp.read().decode(encoding.replace("text/html", "UTF-8", 1))

    def near(self, **kwargs):
        """ Returns the archived from Wayback Machine for an URL closest to the time supplied.
            Supported params are year, month, day, hour and minute.
            The non supplied parameters are default to the runtime time.
        """
        year=kwargs.get("year", datetime.utcnow().strftime('%Y'))
        month=kwargs.get("month", datetime.utcnow().strftime('%m'))
        day=kwargs.get("day", datetime.utcnow().strftime('%d'))
        hour=kwargs.get("hour", datetime.utcnow().strftime('%H'))
        minute=kwargs.get("minute", datetime.utcnow().strftime('%M'))
        timestamp = self.wayback_timestamp(year=year,month=month,day=day,hour=hour,minute=minute)
        request_url = "https://archive.org/wayback/available?url=%s&timestamp=%s" % (self.clean_url(), str(timestamp))
        hdr = { 'User-Agent' : '%s' % self.user_agent }
        req = Request(request_url, headers=hdr) # nosec
        try:
            response = urlopen(req) #nosec
        except Exception as e:
            self.handle_HTTPError(e)
        data = json.loads(response.read().decode("UTF-8"))
        if not data["archived_snapshots"]:
            raise WaybackError("'%s' is not yet archived." % url)
        archive_url = (data["archived_snapshots"]["closest"]["url"])
        # wayback machine returns http sometimes, idk why? But they support https
        archive_url = archive_url.replace("http://web.archive.org/web/","https://web.archive.org/web/",1)
        return archive_url

    def oldest(self, year=1994):
        """Returns the oldest archive from Wayback Machine for an URL."""
        return self.near(year=year)

    def newest(self):
        """Returns the newest archive on Wayback Machine for an URL, sometimes you may not get the newest archive because wayback machine DB lag."""
        return self.near()

    def total_archives(self):
        """Returns the total number of archives on Wayback Machine for an URL."""
        hdr = { 'User-Agent' : '%s' % self.user_agent }
        request_url = "https://web.archive.org/cdx/search/cdx?url=%s&output=json&fl=statuscode" % self.clean_url()
        req = Request(request_url, headers=hdr) # nosec
        try:
            response = urlopen(req) #nosec
        except Exception as e:
            self.handle_HTTPError(e)
        return str(response.read()).count(",") # Most efficient method to count number of archives (yet)
