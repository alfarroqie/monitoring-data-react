import React from 'react';
import { Table } from 'antd';

import {getModuleVisitData} from './UserModuleVisit'

//Get Module Visit Data, Sort and limit to top ten module visit
const topTenModuleVisitData = getModuleVisitData.apply();
topTenModuleVisitData.sort(function(a,b){return a.visit < b.visit ? 1 : -1;}).slice(0,10);

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

    return (
        <>
        <div className="TopTenModule">
        <Table columns={columns} dataSource={topTenModuleVisitData} size="middle"/>
        </div>
        </>
    );
}
export default TopTenModuleVisit;