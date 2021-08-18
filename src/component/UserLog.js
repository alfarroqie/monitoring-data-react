import React, {useState} from 'react';
import { Table, Space, Button, Modal, Input } from 'antd';
// import { SearchOutlined } from '@ant-design/icons'

import dataUserLog from '../data/userlog.json'
// import Chart from '../chart/ChartQualityMonitoring'

function UserLog() {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [modalKey, setModalKey] = useState("1");
      
//   function showModal(id){
//     setModalKey(id);
//     setIsModalVisible(true);
//   };
      
//   const handleOk = () => {
//     setIsModalVisible(false);
//   };
      
//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

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
    },
    {
      title: 'Module Name',
      dataIndex: 'module_name',
      key: 'module_name',
    },
    // {
    //   title: 'Actions',
    //   dataIndex: '_id',
    //   key: '_id',
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <Button type="link" onClick={() => showModal(record._id)}>Last 30 Days</Button>
    //     </Space>
    //   ),
    // },
  ]

  const [dataSource, setDataSource] = useState(dataUserLog);
  const [valueSearch, setValueSearch] = useState('');

  function handleSearch(key){
    const currValue = key;
    setValueSearch(currValue);
    const filteredData = dataUserLog.filter(entry =>
      entry.date.includes(currValue.toLowerCase()) ||
      entry.module_id.toString().includes(currValue.toLowerCase()) ||
      entry.module_type.toLowerCase().includes(currValue.toLowerCase()) ||
      entry.username.toLowerCase().includes(currValue.toLowerCase()) ||
    //   entry.roles.includes(currValue.toLowerCase()) ||
      entry.module_name.toLowerCase().includes(currValue.toLowerCase())
    );
    setDataSource(filteredData);
  }
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
    {/* <Modal 
      title="Basic Modal" 
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel} 
      width={1200}>
      <div>
        id : {modalKey}
      </div>
      <Chart />
    </Modal> */}
    </>
  );
}

export default UserLog;