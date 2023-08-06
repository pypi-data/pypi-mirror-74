def _safe_int(string):
    try:
        return int(string)
    except ValueError:
        return string


__version__ = '2.2.32'
VERSION = tuple(_safe_int(x) for x in __version__.split('.'))
