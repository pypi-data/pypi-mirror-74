from collections import OrderedDict

from . import TomlDecoder, TomlEncoder


class TomlOrderedDecoder(TomlDecoder):
    def __init__(self):
        super(self.__class__, self).__init__(_dict=OrderedDict)


class TomlOrderedEncoder(TomlEncoder):
    def __init__(self):
        super(self.__class__, self).__init__(_dict=OrderedDict)
