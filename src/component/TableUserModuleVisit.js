import React, {useState} from 'react';
import { Table, Input, Card } from 'antd';

import {moduleVisitData} from './TableTopTenModuleVisit'
import ChartModuleVisit from '../chart/ChartModuleVisit'

const dataModuleVisit = moduleVisitData.apply();

function ModuleVisit() {
    const columns = [
      {
          title: 'Module Id',
          dataIndex: 'id',
          key: 'id',
      },
      {
          title: 'Module Type',
          dataIndex: 'type',
          key: 'type',
      },
      {
        title: 'Module Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
          title: 'Visit',
          dataIndex: 'visit',
          key: 'visit',
      },
  ]

    const [dataSource, setDataSource] = useState(dataModuleVisit);
    const [valueSearch, setValueSearch] = useState('');

    function handleSearch (key) {
        const currValue = key;
        setValueSearch(currValue);
        const filterTable = dataModuleVisit.filter(o =>
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
        <div className="ModuleVisit">
            <Card bordered={false}>
                <p style={{ fontWeight: 600, fontSize: "18px",}}>
                Chart Module Visit
                </p>
                <ChartModuleVisit />
            </Card>
            <Card bordered={false}>
                <p style={{ fontWeight: 600, fontSize: "18px",}}>
                Table Module Visit
                </p>
                <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search`}
                    value={valueSearch}
                    onChange={e => handleSearch(e.target.value)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                </div>
                <Table columns={columns} dataSource={dataSource} size="middle"/>
            </Card>
        </div>
        </>
      );
  }
  export default ModuleVisit;