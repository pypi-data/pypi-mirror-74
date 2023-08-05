from datetime import date
from functools import cached_property

import requests
from bs4 import BeautifulSoup

from . import utils


class Work:
    """
    AO3 work object
    """

    def __init__(self, workid):
        """Creates a new AO3 work object

        Args:
            workid (int): AO3 work ID

        Raises:
            requests.HTTPError: Raised if the work wasn't found
        """

        self.chapter_ids = []
        self.chapter_names = []
        self.workid = workid
        self.soup = self.request("https://archiveofourown.org/works/%i?view_adult=true"%workid)
        if "Error 404" in self.soup.text:
            raise requests.HTTPError("Error 404: cannot find work")
        

    def get_chapter_text(self, chapter):
        """Gets the chapter text from the specified chapter.
        Work.load_chapters() must be called first.

        Args:
            chapter (int): Work chapter

        Raises:
            utils.UnloadedError: Raises this error if the chapters aren't loaded

        Returns:
            str: Chapter text
        """
        
        if chapter > 0 and chapter <= self.chapters and self.chapters > 1:
            if len(self.chapter_ids) == self.chapters:
                chapter_html = self.request("https://archiveofourown.org/works/%i/chapters/%s?view_adult=true"%(self.workid, self.chapter_ids[chapter-1]))
                div = chapter_html.find("div", {'role': 'article'})
                return str(BeautifulSoup.getText(div))
            else:
                raise utils.UnloadedError("Work.load_chapters() must be called first")

        elif chapter == 1:
            div = self.soup.find("div", {'role': 'article'})
            return str(BeautifulSoup.getText(div))
        else:
            raise utils.UnloadedError("Work.load_chapters() must be called first")
    
    def load_chapters(self):
        """
        Loads the urls for all chapters
        """
        
        if self.chapters > 1:
            navigate = self.request("https://archiveofourown.org/works/%i/navigate?view_adult=true"%self.workid)
            all_chapters = navigate.find("ol", {'class': 'chapter index group'})
            self.chapter_ids = []
            self.chapter_names = []
            for chapter in all_chapters.find_all("li"):
                self.chapter_ids.append(chapter.a['href'].split("/")[-1])
                self.chapter_names.append(chapter.a.string)
        else:
            self.chapter_ids = [""]
            self.chapter_names = [self.title]

    @cached_property
    def authors(self):
        """Returns the list of the work's author

        Returns:
            list: list of authors
        """

        authors = self.soup.find_all("a", {'rel': 'author'})
        author_list = []
        if authors is not None:
            for author in authors:
                author_list.append(author.string.strip())
            
        return author_list

    @cached_property
    def chapters(self):
        """Returns the number of chapters of this work

        Returns:
            int: number of chapters
        """
        
        chapters = self.soup.find("dd", {'class': 'chapters'})
        if chapters is not None:
            return int(self.str_format(chapters.string.split("/")[0]))
        return 0

    @cached_property
    def hits(self):
        """Returns the number of hits this work has

        Returns:
            int: number of hits
        """

        hits = self.soup.find("dd", {'class': 'hits'})
        if hits is not None:
            return int(self.str_format(hits.string))
        return 0

    @cached_property
    def kudos(self):
        """Returns the number of kudos this work has

        Returns:
            int: number of kudos
        """

        kudos = self.soup.find("dd", {'class': 'kudos'})
        if kudos is not None:
            return int(self.str_format(kudos.string))
        return 0

    @cached_property
    def comments(self):
        """Returns the number of comments this work has

        Returns:
            int: number of comments
        """

        comments = self.soup.find("dd", {'class': 'comments'})
        if comments is not None:
            return int(self.str_format(comments.string))
        return 0

    @cached_property
    def words(self):
        """Returns the this work's word count

        Returns:
            int: number of words
        """

        words = self.soup.find("dd", {'class': 'words'})
        if words is not None:
            return int(self.str_format(words.string))
        return 0

    @cached_property
    def language(self):
        """Returns this work's language

        Returns:
            str: Language
        """

        language = self.soup.find("dd", {'class': 'language'})
        if language is not None:
            return language.string.strip()
        else:
            return "Unknown"

    @cached_property
    def bookmarks(self):
        """Returns the number of bookmarks this work has

        Returns:
            int: number of bookmarks
        """

        bookmarks = self.soup.find("dd", {'class': 'bookmarks'})
        if bookmarks is not None:
            return int(self.str_format(bookmarks.string))
        return 0

    @cached_property
    def title(self):
        """Returns the title of this work

        Returns:
            str: work title
        """

        title = self.soup.find("div", {'class': 'preface group'})
        if title is not None:
            return str(title.h2.string.strip())
        return ""
    
    @cached_property
    def date_published(self):
        """Returns the date this work was published

        Returns:
            datetime.date: publish date
        """

        dp = self.soup.find("dd", {'class': 'published'}).string
        return date(*list(map(int, dp.split("-"))))

    @cached_property
    def date_updated(self):
        """Returns the date this work was last updated

        Returns:
            datetime.date: update date
        """

        if self.chapters > 1:
            du = self.soup.find("dd", {'class': 'status'}).string
            return date(*list(map(int, du.split("-"))))
        else:
            return self.date_published
    
    @cached_property
    def tags(self):
        """Returns all the work's tags

        Returns:
            list: List of tags
        """

        html = self.soup.find("dd", {'class': 'freeform tags'})
        tags = []
        if html is not None:
            for tag in html.find_all("li"):
                tags.append(tag.a.string)
        return tags

    @cached_property
    def characters(self):
        """Returns all the work's characters

        Returns:
            list: List of characters
        """

        html = self.soup.find("dd", {'class': 'character tags'})
        characters = []
        if html is not None:
            for character in html.find_all("li"):
                characters.append(character.a.string)
        return characters

    @cached_property
    def relationships(self):
        """Returns all the work's relationships

        Returns:
            list: List of relationships
        """
        
        html = self.soup.find("dd", {'class': 'relationship tags'})
        relationships = []
        if html is not None:
            for relationship in html.find_all("li"):
                relationships.append(relationship.a.string)
        return relationships

    @cached_property
    def fandoms(self):
        """Returns all the work's fandoms

        Returns:
            list: List of fandoms
        """

        html = self.soup.find("dd", {'class': 'fandom tags'})
        fandoms = []
        if html is not None:
            for fandom in html.find_all("li"):
                fandoms.append(fandom.a.string)
        return fandoms

    @cached_property
    def categories(self):
        """Returns all the work's categories

        Returns:
            list: List of categories
        """

        html = self.soup.find("dd", {'class': 'category tags'})
        categories = []
        if html is not None:
            for category in html.find_all("li"):
                categories.append(category.a.string)
        return categories

    @cached_property
    def warnings(self):
        """Returns all the work's warnings

        Returns:
            list: List of warnings
        """

        html = self.soup.find("dd", {'class': 'warning tags'})
        warnings = []
        if html is not None:
            for warning in html.find_all("li"):
                warnings.append(warning.a.string)
        return warnings

    @cached_property
    def rating(self):
        """Returns this work's rating

        Returns:
            str: Rating
        """

        html = self.soup.find("dd", {'class': 'rating tags'})
        if html is not None:
            rating = html.a.string
            return rating
        return "Unknown"

    @cached_property
    def summary(self):
        """Returns this work's summary

        Returns:
            str: Summary
        """

        div = self.soup.find("div", {'class': 'preface group'})
        if div is None:
            return ""
        html = div.find("blockquote", {'class': 'userstuff'})
        if html is None:
            return ""
        return str(BeautifulSoup.getText(html))
    
    @cached_property
    def url(self):
        """Returns the URL to this work

        Returns:
            str: work URL
        """    

        return "https://archiveofourown.org/works/%i"%self.workid      

    @staticmethod
    def request(url):
        """Request a web page and return a BeautifulSoup object.

        Args:
            url (str): Url to request
            data (dict, optional): Optional data to send in the request. Defaults to {}.

        Returns:
            bs4.BeautifulSoup: BeautifulSoup object representing the requested page's html
        """

        req = requests.get(url)
        content = req.content
        soup = BeautifulSoup(content, "html.parser")
        return soup

    @staticmethod
    def str_format(string):
        """Formats a given string

        Args:
            string (str): String to format

        Returns:
            str: Formatted string
        """

        return string.replace(",", "")
