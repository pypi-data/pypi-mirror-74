# -*- coding: utf-8 -*-

__title__ = 'scraper'
__author__ = 'Lucas Ou-Yang'
__license__ = 'MIT'
__copyright__ = 'Copyright 2014, Lucas Ou-Yang'
__maintainer__ = "The Stimson Center"
__maintainer_email = "cooper@pobox.com"

VIDEOS_TAGS = ['iframe', 'embed', 'object', 'video']
VIDEO_PROVIDERS = ['youtube', 'youtu.be', 'twitch', 'vimeo', 'dailymotion', 'kewego']


class Video(object):
    """Video object
    """

    def __init__(self):
        # type of embed
        # embed, object, iframe
        self.embed_type = None
        # video provider name
        self.provider = None
        # width
        self.width = None
        # height
        self.height = None
        # embed code
        self.embed_code = None
        # src
        self.src = None


class VideoExtractor(object):
    """Extracts a list of video from Article top node
    """

    def __init__(self, config, top_node):
        self.config = config
        self.parser = self.config.get_parser()
        self.top_node = top_node
        self.candidates = []
        self.movies = []

    def get_embed_code(self, node):
        return "".join([
            line.strip()
            for line in self.parser.node_to_string(node).splitlines()])

    def get_embed_type(self, node):
        return self.parser.get_tag(node)

    def get_width(self, node):
        return self.parser.get_attribute(node, 'width')

    def get_height(self, node):
        return self.parser.get_attribute(node, 'height')

    def get_src(self, node):
        return self.parser.get_attribute(node, 'src')

    # noinspection PyMethodMayBeStatic
    def get_provider(self, src):
        if src:
            for provider in VIDEO_PROVIDERS:
                if provider in src:
                    return provider
        return None

    def get_video(self, node):
        """Create a video object from a video embed
        """
        video = Video()
        video.embed_code = self.get_embed_code(node)
        video.embed_type = self.get_embed_type(node)
        video.width = self.get_width(node)
        video.height = self.get_height(node)
        video.src = self.get_src(node)
        video.provider = self.get_provider(video.src)
        return video

    def get_iframe_tag(self, node):
        return self.get_video(node)

    # noinspection PyUnusedLocal,PyMethodMayBeStatic
    def get_video_tag(self, node):
        """Extract html video tags
        """
        return Video()

    def get_embed_tag(self, node):
        # embed node may have an object node as parent
        # in this case we want to retrieve the object node
        # instead of the embed
        parent = self.parser.get_parent(node)
        if parent is not None:
            parent_tag = self.parser.get_tag(parent)
            if parent_tag == 'object':
                return self.get_object_tag(node)
        return self.get_video(node)

    def get_object_tag(self, node):
        # test if object tag has en embed child
        # in this case we want to remove the embed from
        # the candidate list to avoid parsing it twice
        child_embed_tag = self.parser.get_elements_by_tag(node, 'embed')
        if child_embed_tag and child_embed_tag[0] in self.candidates:
            self.candidates.remove(child_embed_tag[0])

        # get the object source
        # if we don't have a src node don't coninue
        src_node = self.parser.get_elements_by_tag(
            node, tag="param", attr="name", value="movie")
        if not src_node:
            return None

        src = self.parser.get_attribute(src_node[0], "value")

        # check provider
        provider = self.get_provider(src)
        if not provider:
            return None

        video = self.get_video(node)
        video.provider = provider
        video.src = src
        return video

    def get_videos(self):
        self.candidates = self.parser.get_elements_by_tags(
            self.top_node, VIDEOS_TAGS)
        # loop all candidates
        # and check if src attribute belongs to a video provider
        for candidate in self.candidates:
            tag = self.parser.get_tag(candidate)
            attr = "get_%s_tag" % tag
            if hasattr(self, attr):
                movie = getattr(self, attr)(candidate)
                if movie is not None and movie.provider is not None:
                    self.movies.append(movie)

        return list(self.movies)
        # append movies list to article
        # self.article.movies = list(self.movies)
