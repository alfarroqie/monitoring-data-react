import React, {useState} from 'react';
import { Table, Input, Card } from 'antd';

import dataLog from '../data/userModuleLogs.json'
import ChartModuleVisit from './ChartModuleVisit'

//function to get data visit module counted
export const getModuleVisitData = () => {
  const result = [];
   //Mapping data for module visit count
  const userModuleLogsData = dataLog.data.user_module_logs.map((item) => {
    return {
        id: item.module_id,
        name: item.module_name,
        type: item.module_type,
        visit: 1
    }
  })
  //Count Module Visit Berdasarkan module id
    userModuleLogsData.reduce(function(res, value) {
      if (!res[value.id]) {
        res[value.id] = { id: value.id, name: value.name, type: value.type, visit: 0 };
        result.push(res[value.id])
      }
      res[value.id].visit += value.visit;
      return res;
  }, {});
  
  return result;
}

const moduleVisitData = getModuleVisitData.apply();

function UserModuleVisit() {
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

    const [dataSource, setDataSource] = useState(moduleVisitData);
    const [valueSearch, setValueSearch] = useState('');

    function handleSearch (key) {
        const currValue = key;
        setValueSearch(currValue);
        const filterTable = moduleVisitData.filter(o =>
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
            <Card bordered={true}>
                <p style={{ fontWeight: 600, fontSize: "18px",}}>
                Chart Module Visit
                </p>
                <ChartModuleVisit />
            </Card>
            <Card bordered={true}>
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

export default UserModuleVisit;