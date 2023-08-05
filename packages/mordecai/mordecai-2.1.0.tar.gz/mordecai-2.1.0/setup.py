from setuptools import setup

setup(name='mordecai',
      version='2.1.0',
      description='Full text geoparsing and event geocoding',
      url='http://github.com/openeventdata/mordecai/',
      author='Andy Halterman',
      author_email='ahalterman0@gmail.com',
      license='MIT',
      packages=['mordecai'],
      keywords = ['geoparsing', 'nlp', 'geocoding', 'toponym resolution'],
      install_requires = ['editdistance>=0.5.3',
                          'elasticsearch==5.4.0',
                          'elasticsearch-dsl==5.3.0',
                          'h5py>=2.10.0',
                          'pandas>=0.24.2',
                          'spacy>=2.3,<3.0',
                          'tensorflow>=2.2.0',
                          'tqdm>=4.28.1',
                          'numpy>=1.12'], 
      dependency_links=['https://github.com/explosion/spacy-models/releases/download/en_core_web_lg-2.3.1/en_core_web_lg-2.3.1.tar.gz'],
      include_package_data=True,
      package_data = {'data': ['admin1CodesASCII.json',
                             'countries.json',
                             'nat_df.csv',
                             'stopword_country_names.json'],
                    'models' : ['country_model.h5',
                                'rank_model.h5']}
     )
