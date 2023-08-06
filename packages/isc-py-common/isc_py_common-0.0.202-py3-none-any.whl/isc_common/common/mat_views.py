import logging
import sys
import uuid
from typing import Text

from django.conf import settings
from django.db import connection, OperationalError

from isc_common.common import blinkString

logger = logging.getLogger(__name__)


def exists_base_object(table_name, schem_aname='public'):
    sql_text = '''SELECT n.nspname, c.relname
                    FROM pg_catalog.pg_class c
                             JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
                    WHERE c.relname = %s
                      AND n.nspname = %s'''

    with connection.cursor() as cursor:
        cursor.execute(sql_text, [table_name, schem_aname])
        rows = cursor.fetchone()
        if rows == None:
            return False
        else:
            return len(rows) > 0


def create_tmp_mat_view(sql_str, params=[], indexes=[], mat_view_name=None) -> Text:
    if exists_base_object(mat_view_name):
        return mat_view_name

    key = f'create_tmp_mat_view_{mat_view_name}'
    if mat_view_name != None:
        settings.LOCKS.acquire(key)
    else:
        mat_view_name = f'tmp_{str(uuid.uuid4()).replace("-", "_")}'

    if isinstance(indexes, list):
        indexes = [f'''CREATE INDEX {mat_view_name}_{index}_idx ON {mat_view_name} USING btree ("{index}")''' for index in indexes]
        suffix = ';'.join(indexes)
    sql_txt = f'''CREATE MATERIALIZED VIEW {mat_view_name} AS {sql_str} WITH DATA; {suffix}'''
    try:
        with connection.cursor() as cursor:
            logger.debug(f'Creating: {mat_view_name}')
            cursor.execute(sql_txt, params)
            logger.debug(f'Created: {mat_view_name}')
        if mat_view_name != None:
            settings.LOCKS.release(key)
        return mat_view_name
    except Exception as ex:
        exc_info = sys.exc_info()
        logger.error(msg=ex, exc_info=exc_info)
        if mat_view_name != None:
            settings.LOCKS.release(key)
        return None


def create_view(sql_str, params=[], view_name=None) -> None:
    if view_name == None:
        raise Exception(f'View must have name')

    if exists_base_object(view_name):
        return view_name

    key = f'createt_view_{view_name}'
    settings.LOCKS.acquire(key)

    sql_txt = f'''DROP VIEW IF EXISTS {view_name} CASCADE;'''
    sql_txt += f'''CREATE VIEW {view_name} AS {sql_str};'''
    try:
        with connection.cursor() as cursor:
            logger.debug(f'Creating: {view_name}')
            cursor.execute(sql_txt, params)
            logger.debug(f'Created: {view_name}')
        settings.LOCKS.release(key)
    except Exception as ex:
        exc_info = sys.exc_info()
        logger.error(msg=ex, exc_info=exc_info)
        settings.LOCKS.release(key)


def create_table(fields_str=None, sql_str=None, temporary='', on_commit=None, params=[], indexes=[], unique_indexes=[], primary_key=None, table_name=None, drop=True) -> None:
    if table_name == None:
        raise Exception(f'Table must have name')

    key = f'create_tmp_table{table_name}'
    settings.LOCKS.acquire(key)

    pk_str = ''
    if primary_key != None:
        if not isinstance(primary_key, list):
            primary_key = [primary_key]

        pk_str = f'''ALTER TABLE {table_name}
                    ADD CONSTRAINT {table_name}_pk
                        PRIMARY KEY ({','.join(primary_key)});'''

    indexes_str = ''
    if isinstance(indexes, list):
        indexes = [f'''CREATE INDEX {table_name}_{index}_idx ON {table_name} USING btree ("{index}")''' for index in indexes]
        indexes_str = ';'.join(indexes)

    unique_indexes_str = ''
    if isinstance(unique_indexes, list):
        indexes = [f'''CREATE INDEX {table_name}_{index[0]}_idx ON {table_name} USING btree ("{index[0]}") WHERE ({index[1] if index[1] else "1=1"});''' for index in unique_indexes]
        unique_indexes_str = ';'.join(indexes)

    sql_txt = ''
    if drop:
        sql_txt = f'''DROP TABLE IF EXISTS {table_name} CASCADE;'''

    on_commit_str = f'ON COMMIT {on_commit}'
    if on_commit == None:
        on_commit_str = ''

    if sql_str == None:
        sql_txt += f'''CREATE {temporary} TABLE {table_name} ({fields_str}) {on_commit_str};'''
    else:
        sql_txt += f'''CREATE {temporary} TABLE {table_name} as ({sql_str}); {on_commit_str};'''

    sql_txt += pk_str
    sql_txt += indexes_str
    sql_txt += unique_indexes_str

    try:
        with connection.cursor() as cursor:
            logger.debug(f'Creating: {table_name}')
            cursor.execute(sql_txt, params)
            logger.debug(f'Created: {table_name}')
        settings.LOCKS.release(key)
    except Exception as ex:
        exc_info = sys.exc_info()
        logger.error(msg=ex, exc_info=exc_info)
        settings.LOCKS.release(key)


def create_tmp_table(fields_str=None, sql_str=None, on_commit='delete rows', params=[], indexes=[], unique_indexes=[], table_name=None, drop=True) -> None:
    create_table(
        drop=drop,
        fields_str=fields_str,
        indexes=indexes,
        on_commit=on_commit,
        params=params,
        sql_str=sql_str,
        table_name=table_name,
        temporary='TEMPORARY',
        unique_indexes=unique_indexes,
    )


def drop_mat_view(mat_view_name) -> bool:
    if not exists_base_object(mat_view_name):
        return False

    sql_txt = f'DROP MATERIALIZED VIEW IF EXISTS {mat_view_name} CASCADE;'
    try:
        if exists_base_object(mat_view_name) == False:
            return False

        key = f'drop_mat_view_{mat_view_name}'
        settings.LOCKS.acquire(key)
        with connection.cursor() as cursor:
            logger.debug(f'Droping: {mat_view_name}')
            cursor.execute(sql_txt)
        settings.LOCKS.release(key)
        logger.debug(f'Droped: {mat_view_name}')
        return True
    except Exception as ex:
        exc_info = sys.exc_info()
        logger.error(msg=ex, exc_info=exc_info)
        settings.LOCKS.release(key)
        return False


def refresh_mat_view(mat_view_name, progressStack=None):
    if not exists_base_object(mat_view_name):
        return

    sql_txt = f'REFRESH MATERIALIZED VIEW CONCURRENTLY {mat_view_name};'
    key = f'refresh_mat_view_{mat_view_name}'
    settings.LOCKS.acquire(key)
    try:
        with connection.cursor() as cursor:
            if progressStack != None:
                progressStack.setContentsLabel(blinkString(f'Обновление материализованного преставления {mat_view_name}', bold=True))
            cursor.execute(sql_txt)
        settings.LOCKS.release(key)
        if progressStack != None:
            progressStack.close()
        return True

    except OperationalError:
        sql_txt = f'REFRESH MATERIALIZED VIEW  {mat_view_name};'
        key = f'refresh_mat_view_{mat_view_name}'
        settings.LOCKS.acquire(key)
        try:
            with connection.cursor() as cursor:
                if progressStack != None:
                    progressStack.setContentsLabel(blinkString(f'Обновление материализованного преставления {mat_view_name}', bold=True))
                cursor.execute(sql_txt)
            settings.LOCKS.release(key)
            if progressStack != None:
                progressStack.close()
            return True

        except Exception as ex:
            exc_info = sys.exc_info()
            logger.error(msg=ex, exc_info=exc_info)
            settings.LOCKS.release(key)
            if progressStack != None:
                progressStack.close()
            return False

    except Exception as ex:
        exc_info = sys.exc_info()
        logger.error(msg=ex, exc_info=exc_info)
        settings.LOCKS.release(key)
        if progressStack != None:
            progressStack.close()
        return False
