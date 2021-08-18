import React, {useState} from 'react';
import { Table, Space, Button, Modal } from 'antd';

import dataDummy from '../data/dataQualityDummy.json'
import Chart from '../chart/chart'

function QualityMonitoring() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalKey, setModalKey] = useState("1");
      
  function showModal(id){
    setModalKey(id);
    setIsModalVisible(true);
  };
      
  const handleOk = () => {
    setIsModalVisible(false);
  };
      
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: ((date) => date.substr(0,10)),
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group',
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: 'PIC',
      dataIndex: 'pic',
      key: 'pic',
      sorter: (a, b) => a.pic - b.pic,
      sortDirections: ['descend']
    },
    {
      title: 'Dependents',
      dataIndex: 'dependents',
      key: 'dependents',
    },
    {
      title: 'KPI',
      dataIndex: 'kpi',
      key: 'kpi',
    },
    {
      title: 'Current Value',
      dataIndex: 'current_value',
      key: 'current_value',
    },
    {
      title: 'Treshold',
      dataIndex: 'treshold',
      key: 'treshold',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Remark',
      dataIndex: 'remark',
      key: 'remark',
    },
    {
      title: 'Aging',
      dataIndex: 'aging',
      key: 'aging',
    },
    {
      title: 'Actions',
      dataIndex: '_id',
      key: '_id',
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => showModal(record._id)}>Last 30 Days</Button>
        </Space>
      ),
    },
  ]
  return (
    <>
    <div className="App">
      <Table columns={columns} dataSource={dataDummy} size="middle"/>
    </div>
    <Modal 
      title="Basic Modal" 
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel} 
      width={1200}>
      <div>
        id : {modalKey}
      </div>
      <Chart />
    </Modal>
    </>
  );
}

export default QualityMonitoring;