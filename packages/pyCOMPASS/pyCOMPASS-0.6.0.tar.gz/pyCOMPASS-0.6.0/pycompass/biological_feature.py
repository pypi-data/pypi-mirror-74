from pycompass.utils import get_compendium_object
from pycompass.query import query_getter, run_query


class BiologicalFeature:
    '''
    A BiologicalFeature object represent the measured biological entity (tipically gene expression)
    '''

    def __init__(self, *args, **kwargs):
        for k, v in kwargs.items():
            if k == 'biofeaturevaluesSet':
                for n in v['edges']:
                    field = n['node']['bioFeatureField']['name']
                    value = n['node']['value']
                    setattr(self, field, value)
            else:
                setattr(self, k, v)

    def by(self, *args, **kwargs):
        '''
        Get BiolgicalFeature list from other high level objects

        :param args:
        :param kwargs: sparql="SELECT ?s ?p ?o ..."
        :return:
        '''
        if 'sparql' in kwargs:
            sparql = kwargs['sparql']
            query = '''{{
                        sparql(compendium:"{compendium}", version:"{version}", database:"{database}", normalization:"{normalization}",
                            query:"{query}", target:"biofeature") {{
                            rdfTriples
                      }}
                    }}'''.format(compendium=self.compendium.compendium_name,
                                 version=self.compendium.version,
                                 database=self.compendium.database,
                                 normalization=self.compendium.normalization,
                                 query=sparql)
            json = run_query(self.compendium.connection.url, query)
            ids = set()
            for triple in json['data']['sparql']['rdfTriples']:
                ids.update(triple)
            ids.remove(None)
            filter = {'id_In': list(ids)}
            return self.get(filter=filter)

    def get(self, filter=None, fields=None):
        '''
        Get biological feature

        :param filter: return results that match only filter values
        :param fields: return only specific fields
        :return: list of BiologicalFeature objects
        '''
        @query_getter('biofeatures',
                      ['id', 'name', 'description', 'biofeaturevaluesSet { edges { node { bioFeatureField { name }, value } } }'])
        def _get_biological_features(obj, filter=None, fields=None):
            pass
        bf_ids = _get_biological_features(self.compendium, filter=filter, fields=['id'])
        if len(bf_ids) <= 500:
            for bf in  _get_biological_features(self.compendium, filter=filter, fields=fields):
                yield BiologicalFeature(**dict({'compendium': self.compendium}, **bf))
        else:
            for bf_id in bf_ids:
                bf = _get_biological_features(self.compendium, filter=bf_id, fields=fields)
                yield BiologicalFeature(**dict({'compendium': self.compendium}, **bf[0]))

    def __hash__(self):
        return hash(self.id)

    def __eq__(self, other):
        return self.id == other.id

    @staticmethod
    def using(compendium):
        cls = get_compendium_object(BiologicalFeature, aggregate_class='biofeatures')
        return cls(compendium=compendium)
