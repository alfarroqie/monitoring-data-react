import React, { useEffect, useState } from "react";
import { Table } from "antd";
import userlogs from '../data/userModuleLogs.json';

const { Column } = Table;

function TopTen() {
    const [tabledata, setTabledata] = useState([]);

    function countTopTenLogs(thelog){
        var countmodule = [];
        for(let log of thelog){
            if(countmodule.find(data => data.module === log.module_name) !== undefined){
                let theindex = countmodule.findIndex(data => data.module === log.module_name);
                let theamount = countmodule[theindex].amount;
                countmodule[theindex].amount = theamount + 1;
            }else{
                countmodule.push({
                    "module": log.module_name,
                    "amount": 1
                })
            }
        }
        let sortedcountedlogs = countmodule.sort((l1, l2) => (l1.amount<l2.amount) ? 1 : (l1.amount>l2.amount) ? -1 : 0);
        let toptenlogs = sortedcountedlogs.splice(0,10);
        console.log(countmodule)
        return toptenlogs;
    }

    useEffect(() => {
        let thetabledata = countTopTenLogs(userlogs.data.user_module_logs);
        setTabledata(thetabledata);
    }, [userlogs]);

    return(
        <div>
            <Table dataSource={tabledata} pagination={{ disabled:true, hideOnSinglePage:true}}>
            <Column title="Module Name" dataIndex="module"/>
            <Column title="Visit Amount" dataIndex="amount"/>
            </Table>
        </div>
    )

}

export default TopTen;