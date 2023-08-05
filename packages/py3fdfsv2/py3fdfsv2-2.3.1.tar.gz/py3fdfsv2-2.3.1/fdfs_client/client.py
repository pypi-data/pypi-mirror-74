#!/usr/bin/env python
# -*- coding: utf-8 -*-
# filename: client.py

'''
  Client module for Fastdfs 3.08
  author: scott yuan scottzer8@gmail.com
  date: 2012-06-21
'''

import logging

from fdfs_client.storage_client import *
from fdfs_client.tracker_client import *

log = logging.getLogger('py3fdfs')


def get_tracker_conf(conf_path='client.conf'):
    conf_path = os.path.expanduser(conf_path)
    cf = Fdfs_ConfigParser()
    tracker = {}
    try:
        cf.read(conf_path)
        timeout = cf.getint('__config__', 'connect_timeout')
        tracker_list = cf.get('__config__', 'tracker_server')
        use_storage_id = cf.get('__config__', 'use_storage_id', fallback='false')
        use_storage_id = use_storage_id == 'true'
        tracker['use_storage_id'] = use_storage_id

        if use_storage_id:
            group_ids_conf_path = os.path.join(os.path.dirname(conf_path), 'storage_ids.conf')
            groups = {}
            with open(group_ids_conf_path) as fin:
                for line in fin.readlines():
                    if line.startswith('#') or 'group' not in line:
                        continue
                    gid, group_name, ips = line.split()
                    ips = ips.encode()
                    groups[group_name] = ips.split(b',')
            tracker['groups'] = groups

        if isinstance(tracker_list, str):
            tracker_list = [tracker_list]
        tracker_ip_list = []
        for tr in tracker_list:
            tracker_ip, tracker_port = tr.split(':')
            tracker_ip_list.append(tracker_ip)
        tracker['host_tuple'] = tuple(tracker_ip_list)
        tracker['port'] = int(tracker_port)
        tracker['timeout'] = timeout
        tracker['name'] = 'Tracker Pool'
    except:
        raise
    return tracker


class Fdfs_client(object):
    """
    Class Fdfs_client implemented Fastdfs client protol ver 3.08.

    It's useful upload, download, delete file to or from fdfs server, etc. It's uses
    connection pool to manage connection to server.
    """

    def __init__(self, trackers, poolclass=ConnectionPool):
        self.trackers = trackers
        self.tracker_pool = poolclass(**self.trackers)
        self.timeout = self.trackers['timeout']
        self.appender_ret_obj = None

    def __del__(self):
        try:
            self.pool.destroy()
            self.pool = None
        except:
            pass

    def upload_by_filename(self, filename, meta_dict=None, file_crypt=None):
        """
        Upload a file to Storage server.
        arguments:
        @filename: string, name of file that will be uploaded
        @meta_dict: dictionary e.g.:{
            'ext_name'  : 'jpg',
            'file_size' : '10240B',
            'width'     : '160px',
            'hight'     : '80px'
        } meta_dict can be null
        @return dict {
            'Group name'      : group_name,
            'Remote file_id'  : remote_file_id,
            'Status'          : 'Upload successed.',
            'Local file name' : local_file_name,
            'Uploaded size'   : upload_size,
            'Storage IP'      : storage_ip
        } if success else None
        """
        isfile, errmsg = fdfs_check_file(filename)
        if not isfile:
            raise DataError(errmsg + '(uploading)')
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_stor_without_group()

        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_upload_by_filename(tc, store_serv, filename, meta_dict, file_crypt)

    def upload_by_file(self, filename, meta_dict=None):
        isfile, errmsg = fdfs_check_file(filename)
        if not isfile:
            raise DataError(errmsg + '(uploading)')
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_stor_without_group()
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_upload_by_file(tc, store_serv, filename, meta_dict)

    def upload_by_buffer(self, filebuffer, file_ext_name=None, meta_dict=None):
        """
        Upload a buffer to Storage server.
        arguments:
        @filebuffer: string, buffer
        @file_ext_name: string, file extend name
        @meta_dict: dictionary e.g.:{
            'ext_name'  : 'jpg',
            'file_size' : '10240B',
            'width'     : '160px',
            'hight'     : '80px'
        }
        @return dict {
            'Group name'      : group_name,
            'Remote file_id'  : remote_file_id,
            'Status'          : 'Upload successed.',
            'Local file name' : '',
            'Uploaded size'   : upload_size,
            'Storage IP'      : storage_ip
        } if success else None
        """
        if not filebuffer:
            raise DataError('[-] Error: argument filebuffer can not be null.')
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_stor_without_group()
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_upload_by_buffer(tc, store_serv, filebuffer, file_ext_name, meta_dict)

    def upload_slave_by_filename(self, filename, remote_file_id, prefix_name, meta_dict=None):
        """
        Upload slave file to Storage server.
        arguments:
        @filename: string, local file name
        @remote_file_id: string, remote file id
        @prefix_name: string
        @meta_dict: dictionary e.g.:{
            'ext_name'  : 'jpg',
            'file_size' : '10240B',
            'width'     : '160px',
            'hight'     : '80px'
        }
        @return dictionary {
            'Status'        : 'Upload slave successed.',
            'Local file name' : local_filename,
            'Uploaded size'   : upload_size,
            'Remote file id'  : remote_file_id,
            'Storage IP'      : storage_ip
        }
        """
        isfile, errmsg = fdfs_check_file(filename)
        if not isfile:
            raise DataError(errmsg + '(uploading slave)')
        tmp = split_remote_fileid(remote_file_id)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(uploading slave)')
        if not prefix_name:
            raise DataError('[-] Error: prefix_name can not be null.')
        group_name, remote_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_stor_with_group(group_name)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        try:
            ret_dict = store.storage_upload_slave_by_filename(tc, store_serv, filename, prefix_name, remote_filename,
                                                              meta_dict=None)
        except:
            raise
        ret_dict['Status'] = 'Upload slave file successed.'
        return ret_dict

    def upload_slave_by_file(self, filename, remote_file_id, prefix_name, meta_dict=None):
        """
        Upload slave file to Storage server.
        arguments:
        @filename: string, local file name
        @remote_file_id: string, remote file id
        @prefix_name: string
        @meta_dict: dictionary e.g.:{
            'ext_name'  : 'jpg',
            'file_size' : '10240B',
            'width'     : '160px',
            'hight'     : '80px'
        }
        @return dictionary {
            'Status'        : 'Upload slave successed.',
            'Local file name' : local_filename,
            'Uploaded size'   : upload_size,
            'Remote file id'  : remote_file_id,
            'Storage IP'      : storage_ip
        }
        """
        isfile, errmsg = fdfs_check_file(filename)
        if not isfile:
            raise DataError(errmsg + '(uploading slave)')
        tmp = split_remote_fileid(remote_file_id)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(uploading slave)')
        if not prefix_name:
            raise DataError('[-] Error: prefix_name can not be null.')
        group_name, remote_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_stor_with_group(group_name)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        try:
            ret_dict = store.storage_upload_slave_by_file(tc, store_serv, filename, prefix_name, remote_filename,
                                                          meta_dict=None)
        except:
            raise
        ret_dict['Status'] = 'Upload slave file successed.'
        return ret_dict

    def upload_slave_by_buffer(self, filebuffer, remote_file_id, meta_dict=None, file_ext_name=None):
        """
        Upload slave file by buffer
        arguments:
        @filebuffer: string
        @remote_file_id: string
        @meta_dict: dictionary e.g.:{
            'ext_name'  : 'jpg',
            'file_size' : '10240B',
            'width'     : '160px',
            'hight'     : '80px'
        }
        @return dictionary {
            'Status'        : 'Upload slave successed.',
            'Local file name' : local_filename,
            'Uploaded size'   : upload_size,
            'Remote file id'  : remote_file_id,
            'Storage IP'      : storage_ip
        }
        """
        if not filebuffer:
            raise DataError('[-] Error: argument filebuffer can not be null.')
        tmp = split_remote_fileid(remote_file_id)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(uploading slave)')
        group_name, remote_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_update(group_name, remote_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_upload_slave_by_buffer(tc, store_serv, filebuffer, remote_filename, meta_dict,
                                                    file_ext_name)

    def upload_appender_by_filename(self, local_filename, meta_dict=None):
        """
        Upload an appender file by filename.
        arguments:
        @local_filename: string
        @meta_dict: dictionary e.g.:{
            'ext_name'  : 'jpg',
            'file_size' : '10240B',
            'width'     : '160px',
            'hight'     : '80px'
        }    Notice: it can be null
        @return dict {
            'Group name'      : group_name,
            'Remote file_id'  : remote_file_id,
            'Status'          : 'Upload successed.',
            'Local file name' : '',
            'Uploaded size'   : upload_size,
            'Storage IP'      : storage_ip
        } if success else None
        """
        isfile, errmsg = fdfs_check_file(local_filename)
        if not isfile:
            raise DataError(errmsg + '(uploading appender)')
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_stor_without_group()
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_upload_appender_by_filename(tc, store_serv, local_filename, meta_dict)

    def upload_appender_by_file(self, local_filename, meta_dict=None):
        """
        Upload an appender file by file.
        arguments:
        @local_filename: string
        @meta_dict: dictionary e.g.:{
            'ext_name'  : 'jpg',
            'file_size' : '10240B',
            'width'     : '160px',
            'hight'     : '80px'
        }    Notice: it can be null
        @return dict {
            'Group name'      : group_name,
            'Remote file_id'  : remote_file_id,
            'Status'          : 'Upload successed.',
            'Local file name' : '',
            'Uploaded size'   : upload_size,
            'Storage IP'      : storage_ip
        } if success else None
        """
        isfile, errmsg = fdfs_check_file(local_filename)
        if not isfile:
            raise DataError(errmsg + '(uploading appender)')
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_stor_without_group()
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_upload_appender_by_file(tc, store_serv, local_filename, meta_dict)

    def upload_appender_by_buffer(self, filebuffer, file_ext_name=None, meta_dict=None):
        """
        Upload a buffer to Storage server.
        arguments:
        @filebuffer: string
        @file_ext_name: string, can be null
        @meta_dict: dictionary, can be null
        @return dict {
            'Group name'      : group_name,
            'Remote file_id'  : remote_file_id,
            'Status'          : 'Upload successed.',
            'Local file name' : '',
            'Uploaded size'   : upload_size,
            'Storage IP'      : storage_ip
        } if success else None
        """
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_stor_without_group()
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_upload_appender_by_buffer(tc, store_serv, filebuffer, meta_dict, file_ext_name)

    def delete_file(self, remote_file_id):
        """
        Delete a file from Storage server.
        arguments:
        @remote_file_id: string, file_id of file that is on storage server
        @return tuple ('Delete file successed.', remote_file_id, storage_ip)
        """
        tmp = split_remote_fileid(remote_file_id)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(in delete file)')
        group_name, remote_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_update(group_name, remote_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_delete_file(tc, store_serv, remote_filename)

    def download_to_file(self, local_filename, remote_file_id, offset=0, down_bytes=0, file_crypt=None):
        """
        Download a file from Storage server.
        arguments:
        @local_filename: string, local name of file
        @remote_file_id: string, file_id of file that is on storage server
        @offset: long
        @downbytes: long
        @return dict {
            'Remote file_id'  : remote_file_id,
            'Content'         : local_filename,
            'Download size'   : downloaded_size,
            'Storage IP'      : storage_ip
        }
        """
        tmp = split_remote_fileid(remote_file_id)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(in download file)')
        group_name, remote_filename = tmp
        if not offset:
            file_offset = int(offset)
        if not down_bytes:
            download_bytes = int(down_bytes)
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_fetch(group_name, remote_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_download_to_file(tc, store_serv, local_filename, file_offset, download_bytes,
                                              remote_filename, file_crypt)

    def download_to_buffer(self, remote_file_id, offset=0, down_bytes=0):
        """
        Download a file from Storage server and store in buffer.
        arguments:
        @remote_file_id: string, file_id of file that is on storage server
        @offset: long
        @down_bytes: long
        @return dict {
            'Remote file_id'  : remote_file_id,
            'Content'         : file_buffer,
            'Download size'   : downloaded_size,
            'Storage IP'      : storage_ip
        }
        """
        tmp = split_remote_fileid(remote_file_id)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(in download file)')
        group_name, remote_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_fetch(group_name, remote_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        file_buffer = None
        return store.storage_download_to_buffer(tc, store_serv, file_buffer, offset, down_bytes,
                                                remote_filename)

    def list_one_group(self, group_name):
        """
        List one group information.
        arguments:
        @group_name: string, group name will be list
        @return Group_info,  instance
        """
        tc = Tracker_client(self.tracker_pool, self.trackers)
        return tc.tracker_list_one_group(group_name)

    def list_servers(self, group_name, storage_ip=None):
        """
        List all storage servers information in a group
        arguments:
        @group_name: string
        @return dictionary {
            'Group name' : group_name,
            'Servers'    : server list,
        }
        """
        tc = Tracker_client(self.tracker_pool, self.trackers)
        return tc.tracker_list_servers(group_name, storage_ip)

    def list_all_groups(self):
        """
        List all group information.
        @return dictionary {
            'Groups count' : group_count,
            'Groups'       : list of groups
        }
        """
        tc = Tracker_client(self.tracker_pool, self.trackers)
        return tc.tracker_list_all_groups()

    def get_meta_data(self, remote_file_id):
        """
        Get meta data of remote file.
        arguments:
        @remote_fileid: string, remote file id
        @return dictionary, meta data
        """
        tmp = split_remote_fileid(remote_file_id)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(in get meta data)')
        group_name, remote_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_update(group_name, remote_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_get_metadata(tc, store_serv, remote_filename)

    def set_meta_data(self, remote_file_id, meta_dict, op_flag=STORAGE_SET_METADATA_FLAG_OVERWRITE):
        """
        Set meta data of remote file.
        arguments:
        @remote_file_id: string
        @meta_dict: dictionary
        @op_flag: char, 'O' for overwrite, 'M' for merge
        @return dictionary {
            'Status'     : status,
            'Storage IP' : storage_ip
        }
        """
        tmp = split_remote_fileid(remote_file_id)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(in set meta data)')
        group_name, remote_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        try:
            store_serv = tc.tracker_query_storage_update(group_name, remote_filename)
            store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
            status = store.storage_set_metadata(tc, store_serv, remote_filename, meta_dict)
        except (ConnectionError, ResponseError, DataError):
            raise
        # if status == 2:
        #    raise DataError('[-] Error: remote file %s is not exist.' % remote_file_id)
        if status != 0:
            raise DataError('[-] Error: %d, %s' % (status, os.strerror(status)))
        ret_dict = {}
        ret_dict['Status'] = 'Set meta data success.'
        ret_dict['Storage IP'] = store_serv.ip_addr
        return ret_dict

    def append_by_filename(self, local_filename, remote_fileid):
        isfile, errmsg = fdfs_check_file(local_filename)
        if not isfile:
            raise DataError(errmsg + '(append)')
        tmp = split_remote_fileid(remote_fileid)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(append)')
        group_name, appended_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_update(group_name, appended_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_append_by_filename(tc, store_serv, local_filename, appended_filename)

    def append_by_file(self, local_filename, remote_fileid):
        isfile, errmsg = fdfs_check_file(local_filename)
        if not isfile:
            raise DataError(errmsg + '(append)')
        tmp = split_remote_fileid(remote_fileid)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(append)')
        group_name, appended_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_update(group_name, appended_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_append_by_file(tc, store_serv, local_filename, appended_filename)

    def append_by_buffer(self, file_buffer, remote_fileid):
        if not file_buffer:
            raise DataError('[-] Error: file_buffer can not be null.')
        tmp = split_remote_fileid(remote_fileid)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(append)')
        group_name, appended_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_update(group_name, appended_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_append_by_buffer(tc, store_serv, file_buffer, appended_filename)

    def truncate_file(self, truncated_filesize, appender_fileid):
        '''
        Truncate file in Storage server.
        arguments:
        @truncated_filesize: long
        @appender_fileid: remote_fileid
        @return: dictionary {
            'Status'     : 'Truncate successed.',
            'Storage IP' : storage_ip
        }
        '''
        trunc_filesize = int(truncated_filesize)
        tmp = split_remote_fileid(appender_fileid)
        if not tmp:
            raise DataError('[-] Error: appender_fileid is invalid.(truncate)')
        group_name, appender_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_update(group_name, appender_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_truncate_file(tc, store_serv, trunc_filesize, appender_filename)

    def modify_by_filename(self, filename, appender_fileid, offset=0):
        """
        Modify a file in Storage server by file.
        arguments:
        @filename: string, local file name
        @offset: long, file offset
        @appender_fileid: string, remote file id
        @return: dictionary {
            'Status'     : 'Modify successed.',
            'Storage IP' : storage_ip
        }
        """
        isfile, errmsg = fdfs_check_file(filename)
        if not isfile:
            raise DataError(errmsg + '(modify)')
        filesize = os.stat(filename).st_size
        tmp = split_remote_fileid(appender_fileid)
        if not tmp:
            raise DataError('[-] Error: remote_fileid is invalid.(modify)')
        group_name, appender_filename = tmp
        if not offset:
            file_offset = int(offset)
        else:
            file_offset = 0
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_update(group_name, appender_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_modify_by_filename(tc, store_serv, filename, file_offset, filesize, appender_filename)

    def modify_by_file(self, filename, appender_fileid, offset=0):
        """
        Modify a file in Storage server by file.
        arguments:
        @filename: string, local file name
        @offset: long, file offset
        @appender_fileid: string, remote file id
        @return: dictionary {
            'Status'     : 'Modify successed.',
            'Storage IP' : storage_ip
        }
        """
        isfile, errmsg = fdfs_check_file(filename)
        if not isfile:
            raise DataError(errmsg + '(modify)')
        filesize = os.stat(filename).st_size
        tmp = split_remote_fileid(appender_fileid)
        if not tmp:
            raise DataError('[-] Error: remote_fileid is invalid.(modify)')
        group_name, appender_filename = tmp
        if not offset:
            file_offset = int(offset)
        else:
            file_offset = 0
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_update(group_name, appender_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_modify_by_file(tc, store_serv, filename, file_offset, filesize, appender_filename)

    def modify_by_buffer(self, filebuffer, appender_fileid, offset=0):
        """
        Modify a file in Storage server by buffer.
        arguments:
        @filebuffer: string, file buffer
        @offset: long, file offset
        @appender_fileid: string, remote file id
        @return: dictionary {
            'Status'     : 'Modify successed.',
            'Storage IP' : storage_ip
        }
        """
        if not filebuffer:
            raise DataError('[-] Error: filebuffer can not be null.(modify)')
        filesize = len(filebuffer)
        tmp = split_remote_fileid(appender_fileid)
        if not tmp:
            raise DataError('[-] Error: remote_fileid is invalid.(modify)')
        group_name, appender_filename = tmp
        if not offset:
            file_offset = int(offset)
        else:
            file_offset = 0
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_update(group_name, appender_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.storage_modify_by_buffer(tc, store_serv, filebuffer, file_offset, filesize, appender_filename)

    def smart_upload_by_filename(self, filename: str, file_size_to_toggle=1024 * 1024 * 20, chunk_size=1024 * 1024 * 2):
        """
        根据文件大小，判断是直接上传还是切片上传

        :param filename: 上传的文件名
        :param file_size_to_toggle: 临界文件大小。大于这个值使用分片上传。否则直接上传
        :param chunk_size: 分片大小
        :return:
        """
        self.appender_ret_obj = None
        assert isinstance(filename, str), 'filename should be str type.'
        if not os.path.isfile(filename):
            raise FDFSError('It is not a file %s' % filename)
        file_size = os.path.getsize(filename)
        if file_size < file_size_to_toggle:
            self.upload_by_filename(filename)
        else:
            self.upload_chunks_by_filename(filename, chunk_size)

    def upload_chunks_by_filename(self, filename: str, chunk_size=1024 * 1024 * 2):
        ext_name = os.path.splitext(filename)[-1]
        ext_name = ext_name.replace('.', '')
        with open(filename, 'rb') as fin:
            buffer = fin.read(chunk_size)
            ret = self.upload_appender_by_buffer(buffer, ext_name)
            remote_fileid = ret['Remote file_id']
            buffer = fin.read(chunk_size)
            while buffer:
                try:
                    self.appender_ret_obj = self.append_by_buffer(buffer, remote_fileid)
                    # todo 若fin.read 报错，则会导致文件上传错误。
                    buffer = fin.read(chunk_size)
                except Exception as e:
                    log.exception('smart upload fail, retry now. fileid: %s, exception: %s',
                                  remote_fileid, e)
                    ret = self.delete_file(remote_fileid)
                    raise FDFSError('smart upload failed', remote_fileid, ret)

    def query_file_info(self, remote_file_id):
        tmp = split_remote_fileid(remote_file_id)
        if not tmp:
            raise DataError('[-] Error: remote_file_id is invalid.(in get meta data)')
        group_name, remote_filename = tmp
        tc = Tracker_client(self.tracker_pool, self.trackers)
        store_serv = tc.tracker_query_storage_update(group_name, remote_filename)
        store = Storage_client(store_serv.ip_addr, store_serv.port, self.timeout)
        return store.query_file_info(group_name.encode(), remote_filename.encode())
