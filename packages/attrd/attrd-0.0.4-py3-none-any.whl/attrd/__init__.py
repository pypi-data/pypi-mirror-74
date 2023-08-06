class AttrDict(dict):
    def __process_args(self, obj):
        if isinstance(obj, dict):
            for k, v in obj.items():
                if isinstance(v, dict):
                    obj[k] = AttrDict(v)
                elif isinstance(v, (tuple, list)):
                    obj[k] = self.__process_args(v)
        elif isinstance(obj, (tuple, list)):
            for i, v in enumerate(obj):
                if isinstance(v, dict):
                    obj[i] = AttrDict(v)

        return obj

    def __init__(self, obj=None, **kwargs):
        obj = self.__process_args(obj)
        kwargs = self.__process_args(kwargs)
        super().__init__(obj or {}, **kwargs)

    def __getattr__(self, item: str):
        if item in self:
            return self[item]
        else:
            return super().__getattribute__(item)

    def __getattribute__(self, item: str):
        if item != 'items' and item in self:
            return self[item]
        else:
            return super().__getattribute__(item)

    def __setattr__(self, key, value):
        self[key] = value

    def __delattr__(self, item):
        del self[item]

    def __getstate__(self):
        return dict(self)

    @staticmethod
    def __setstate__(obj):
        return obj


# if __name__ == '__main__':
#     a = AttrDict(key1=123)

#     # Set value by attribute
#     a.key2 = 123

#     # Set value by key
#     a['key3'] = 123

#     # Set and delete value by attribute
#     a.key4 = 123
#     del a.key4

#     # Set and delete value by key
#     a['key5'] = 123
#     del a['key5']

#     print('a:', a)
#     assert a.key1 == 123
#     assert a.key2 == 123
#     assert a.key3 == 123

#     # Convert existed dict to AttrDict
#     b = AttrDict({'key1': 123, 'key2': 123})
#     print('b:', b)
#     assert b.key1 == 123
#     assert b.key2 == 123

#     c = AttrDict(**{'key1': 123, 'key2': 123})
#     print('c:', c)
#     assert c.key1 == 123
#     assert c.key2 == 123

#     # Nested level
#     print('-'*100)
#     d = {
#         'key1': {
#             'sub_key1': 123,
#             'sub_key2': {
#                 'deep_key': 'abc'
#             }
#         }
#     }
#     d = AttrDict(d)
#     assert d.key1.sub_key1 == 123
#     assert d.key1.sub_key2.deep_key == 'abc'

#     d.key1.sub_key3 = 123
#     assert d.key1.sub_key3 == 123

#     print('d:', d.key1, d.key1.__class__, id(d.key1), id(d['key1']))
#     print(' '*3, 'd.key1.sub_key1:', d.key1.sub_key1)
#     print(' '*3, 'd.key1.sub_key2.deep_key:', d.key1.sub_key2.deep_key)
#     del d.key1.sub_key2
#     print('d:', d)

#     # Nested values with kwargs
#     print('-'*100)
#     e = AttrDict(key1={'sub_key1': 123, 'sub_key2': 123})
#     assert e.key1.sub_key1 == 123
#     assert e.key1.sub_key2 == 123

#     print('e:', e)
#     print(' '*3, 'e.key1.sub_key1:', e.key1.sub_key1)
#     del e.key1.sub_key2
#     print('e:', e)

#     # Dicts in lists
#     print('-'*100)
#     f = AttrDict({
#         'key1': [
#             {'sub_key1': 123, 'sub_key2': 456},
#             {'sub_key1': 321, 'sub_key2': 654},
#         ]
#     })
#     assert f.key1[0].sub_key1 == 123
#     assert f.key1[0].sub_key2 == 456
#     assert f.key1[1].sub_key1 == 321
#     assert f.key1[1].sub_key2 == 654
#     del f.key1[0].sub_key2, f.key1[1].sub_key1
#     print('f:', f)
#     print(' '*3, 'f.key1[0].sub_key1:', f.key1[0].sub_key1)

#     # Iterate items
#     print('-'*100)
#     g = AttrDict(a=1, b=2, c=3, items=[10, 11, 12])

#     print(g.items)
#     assert callable(g.items)

#     print(g.get('items'))
#     assert isinstance(g.get('items'), list)

#     for k, v in g.items():
#         print(k, v)