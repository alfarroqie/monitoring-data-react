import React from 'react';
import { Table } from 'antd';
import dataLog from '../data/userModuleLogs.json'

//function to return data visit module counted
export const moduleVisitData = () => {
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

function TopTenModuleVisit() {
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
    //Sort and limit to top ten module visi
    const topTenModuleVisitData = moduleVisitData().sort(function(a,b){return a.visit < b.visit ? 1 : -1;}).slice(0,10);

    return (
        <>
        <div className="TopTenModule">
        <Table columns={columns} dataSource={topTenModuleVisitData} size="middle"/>
        </div>
        </>
    );
}
export default TopTenModuleVisit;