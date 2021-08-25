import React, {useState} from 'react';
import { Table, Space, Button, Modal, Input } from 'antd';

import dataQualityDummy from '../data/qualityDummy.json'
import Chart from '../chart/ChartQualityMonitoring'

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
      sorter: (a, b) => a.current_value - b.current_value,
      sortDirections: ['ascend', 'descend']
    },
    {
      title: 'Threshold',
      dataIndex: 'threshold',
      key: 'threshold',
      sorter: (a, b) => a.threshold - b.threshold,
      sortDirections: ['ascend', 'descend'],
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
      sorter: (a, b) => a.aging - b.aging,
      sortDirections: ['ascend', 'descend'],
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

  const [dataSource, setDataSource] = useState(dataQualityDummy);
  const [valueSearch, setValueSearch] = useState('');
  
  function handleSearch (key) {
    const currValue = key;
    setValueSearch(currValue);
    const filterTable = dataQualityDummy.filter(o =>
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
    <div className="QualityMonitoring">
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