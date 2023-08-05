import contextlib
import unittest
import os
import pandas as pd
import nordypy
import textwrap
from teradatasql import TeradataConnection
from sqlalchemy.engine.base import Engine
from psycopg2.extensions import connection

class TeradataTests(unittest.TestCase):
    def test_teradata_get_data(self):
        # pull some data from data
        sql = nordypy._get_secret('nordypy_teradata')['get_data']
        data = nordypy.database_get_data(database_key=database_key_teradata, yaml_filepath=yaml_filepath, sql=sql, as_pandas=True)  
        assert len(data) == 10 

    def test_teradata_execute(self):
        # create temp table from select and pull the data and check the length
        sql = nordypy._get_secret('nordypy_teradata')['execute']
        data = nordypy.database_execute(database_key=database_key_teradata, yaml_filepath=yaml_filepath, sql=sql, 
                                         return_data=True, as_pandas=True)  
        assert len(data) == 10 

    def test_teradata_connect(self):
        # test connection to teradata
        conn = nordypy.database_connect(database_key=database_key_teradata, yaml_filepath=yaml_filepath)
        assert isinstance(conn, TeradataConnection)
        conn.close()

class PrestoTest(unittest.TestCase):
    # presto needs aws-okta to be
    def test_presto_get_data(self):
        sql = nordypy._get_secret('nordypy_presto')['get_data']
        data = nordypy.database_get_data(database_key=database_key_presto, yaml_filepath=yaml_filepath, sql=sql, as_pandas=True)  
        assert len(data) == 10 

    def test_presto_execute(self):
        sql = nordypy._get_secret('nordypy_presto')['execute']
        data = nordypy.database_execute(database_key=database_key_presto, yaml_filepath=yaml_filepath, sql=sql, as_pandas=True, return_data=True)
        assert data.shape == (0, 2)

    def test_presto_connect(self):
        conn = nordypy.database_connect(database_key=database_key_presto, yaml_filepath=yaml_filepath)
        assert conn.dbtype == 'presto'
        conn.dispose()

# class RedshiftTest(unittest.TestCase):
#     def test_redshift_get_data(self):
#         sql = nordypy._get_secret('nordypy_redshift')['get_data']
#         data = nordypy.database_get_data(database_key=database_key_redshift, yaml_filepath=yaml_filepath, sql=sql, as_pandas=True)  
#         assert len(data) == 10 

#     def test_redshift_execute(self):
#         pass

#     def test_redshift_connect(self):
#         conn = nordypy.database_connect(database_key=database_key_redshift, yaml_filepath=yaml_filepath)
#         assert isinstance(conn, connection)
#         conn.close()

class DatabaseTests(unittest.TestCase):
    def test_sql_stripper(self):
        SQL = """
        /*
        select * from jimbo.jones;
        */

        -- select * from nelson.muntz'

        
        select * from waylon.smithers
        """

        sql = nordypy._datasource._strip_sql(textwrap.dedent(SQL))

        assert sql == '\nselect * from waylon.smithers\n'

    # def test_autocommit(self):
    #     conn = nordypy.database_connect(database_key=database_key_redshift, yaml_filepath=yaml_filepath)
    #     self.assertTrue(conn.autocommit)

if __name__ == '__main__':
    database_key_redshift = 'redshift'
    database_key_teradata = 'teradata'
    database_key_presto = 'presto'
    yaml_filepath = 'config.yaml'
    unittest.main(warnings='ignore')
