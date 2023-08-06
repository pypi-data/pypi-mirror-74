from collections import defaultdict


class ListLookup(list):
    def __init__(self, *args, **kwargs):
        """
        Initialize just like regular list
        """
        super().__init__(*args, **kwargs)
        self._indexes = dict()  #
        self._unique_indexes = set()

    def index(self, name, callback, unique=False, multiple=False):
        """
        Create index with given name. Callback must return value for future lookups
        :param name: unique name of the index
        :param callback: function that extract value(s) you are going to search by
        :param unique: indicates that values are unique
        :param multiple: indicates that each item can be found by multiple values
        """
        if name in self._indexes:
            raise ValueError("Index %s already exists" % name)
        if name == 'preserve_order':
            raise ValueError("%s cannot be used as index name" % name)

        if unique is True:
            self._indexes[name] = self._unique_index_multiple(callback) if multiple else self._unique_index(callback)
            self._unique_indexes.add(name)
            return

        if multiple is True:
            self._indexes[name] = self._nonunique_index_multiple(callback)
            return

        pointers = defaultdict(set)
        for i, it in enumerate(self):
            val = callback(it)
            # store pointers in lists
            pointers[val].add(i)
        self._indexes[name] = pointers

    def _unique_index(self, callback):
        """
        Unique index contains only one pointer per value
        """
        return {
            callback(it): i
            for i, it in enumerate(self)
        }

    def _unique_index_multiple(self, callback):
        """
        Build unique index contains only one pointer per value
        Unlike `.unique_index` this supports multiple values
        """
        result = dict()
        for i, it in enumerate(self):
            for value in callback(it):
                result[value] = i
        return result

    def _nonunique_index_multiple(self, callback):
        """
        Build index that contains multiple pointers per value
        """
        pointers = defaultdict(set)
        for i, it in enumerate(self):
            try:
                for v in callback(it):
                    pointers[v].add(i)
            except TypeError:
                raise ValueError("Callback must return iterable")

        return pointers

    def lookup(self, preserve_order=True, **kwargs):
        pointers = None
        for index_name, value in kwargs.items():
            try:
                index = self._indexes[index_name]
            except KeyError:
                raise ValueError("Index %s does not exist" % index_name)

            unique = (index_name in self._unique_indexes)

            if callable(value):
                res = self._lookup_index_callable(index, value, unique, pointers)
            else:
                res = self._lookup_index(index, value, unique)

            if res is None:
                return  # terminate if any index returned nothing

            if pointers is None:
                pointers = res
            else:
                # `pointers &= res` cannot be used because the variable sometimes
                # points to the index and should not be modified
                pointers = pointers.intersection(res)
                if not pointers:
                    return  # terminate if intersection returned nothing

        if preserve_order:
            pointers = sorted(pointers)
        for i in pointers:
            yield self[i]

    def _lookup_index(self, index, value, unique):
        try:
            pointers = index[value]
        except KeyError:
            return None

        if unique:
            return set([pointers])
        return pointers

    def _lookup_index_callable(self, index, func, unique, subset):
        pointers = set()
        for val, idx in index.items():
            # Skip items that do not intersect with subset of items from
            # other indexes
            if subset and bool(subset & idx) is False:
                continue
            if func(val) is True:
                pointers |= idx
                if unique:
                    break
        return pointers
