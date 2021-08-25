import React, {useState} from 'react';
import { Table, Input, Tag } from 'antd';

import dataLog from '../data/userModuleLogs.json'


function UserLog() {
  const dataUserModuleLog = dataLog.data.user_module_logs;

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: ((date) => date.substr(0,10)),
    },
    {
      title: 'Module Id',
      dataIndex: 'module_id',
      key: 'module_id',
    },
    {
      title: 'Module Type',
      dataIndex: 'module_type',
      key: 'module_type',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Roles',
      dataIndex: 'roles',
      key: 'roles',
      render: roles => (
        <>
          {roles.map(role => {
            return (
              <Tag color='blue' key={role}>
                {role.replace('_', ' ').replace('_', ' ').toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Module Name',
      dataIndex: 'module_name',
      key: 'module_name',
    },
  ]

  const [dataSource, setDataSource] = useState(dataUserModuleLog);
  const [valueSearch, setValueSearch] = useState('');

  function handleSearch (key) {
    const currValue = key;
    setValueSearch(currValue);
    const filterTable = dataUserModuleLog.filter(o =>
      Object.keys(o).some(k =>
        String(o[k])
          .toLowerCase()
          .includes(currValue.toLowerCase())
      )
    );
    setDataSource(filterTable);
  };

  return (
    <>
    <div className="UserLog">
      <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search`}
            value={valueSearch}
            onChange={e => handleSearch(e.target.value)}
            style={{ marginBottom: 8, display: 'block' }}
          />
      </div>
      <Table columns={columns} dataSource={dataSource} size="middle"/>
    </div>
    </>
  );
}

export default UserLog;