import React from 'react';
import { Table } from 'antd';
import dataLog from '../data/userModuleLogs.json'

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

     //Mapping data for module visit count
    const moduleVisitData = dataLog.data.user_module_logs.map((item) => {
      return {
          id: item.module_id,
          name: item.module_name,
          type: item.module_type,
          visit: 1
      }
    })
    //Count Module Visit
      //  Berdasarkan module id
    var moduleVisitCountData = [];
    moduleVisitData.reduce(function(res, value) {
        if (!res[value.id]) {
          res[value.id] = { id: value.id, name: value.name, type: value.type, visit: 0 };
          moduleVisitCountData.push(res[value.id])
        }
        res[value.id].visit += value.visit;
        return res;
    }, {});
         //Berdasarkan module name
    // var moduleVisitCountData = [];
    // moduleVisitData.reduce(function(res, value) {
    //     if (!res[value.name]) {
    //       res[value.name] = { id: value.id, name: value.name, type: value.type, visit: 0 };
    //       moduleVisitCountData.push(res[value.name])
    //     }
    //     res[value.name].visit += value.visit;
    //     return res;
    // }, {});

    //Sort and limit to top ten module visi
    const topTenModuleVisitData = moduleVisitCountData.sort(function(a,b){return a.visit < b.visit ? 1 : -1;}).slice(0,10);

    //Set Data Source for Table
    // const [dataSource, setDataSource] = useState(topTenModuleVisitData);
    return (
        <>
        <div className="TopTenModule">
        <Table columns={columns} dataSource={topTenModuleVisitData} size="middle"/>
        </div>
        </>
    );
}
export default TopTenModuleVisit;