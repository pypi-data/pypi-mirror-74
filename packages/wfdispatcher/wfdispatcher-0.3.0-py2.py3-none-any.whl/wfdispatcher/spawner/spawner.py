'''This is a class to give to the namespace manager (or really its
parent) so when it looks to see whether quotas are enabled it won't explode.
'''


class MockSpawner(object):

    def __init__(self, *args, **kwargs):
        self.enable_namespace_quotas = kwargs.pop(
            'enable_namespace_quotas', True)
        self.user = None  # Volume manager will want user.escaped_name so
        # we'd better update this before we ask for it.
