import React, {useRef} from 'react'  
import * as am4core from "@amcharts/amcharts4/core";  
import * as am4charts from "@amcharts/amcharts4/charts";  
import am4themes_animated from "@amcharts/amcharts4/themes/animated";  

import chardData from '../data/chartDummy.json'  
import { useLayoutEffect } from "react";
  
function ChartQualityMonitoring() {
    const c = useRef(null);
    useLayoutEffect(() => {
        am4core.useTheme(am4themes_animated);  
        let chart = am4core.create("DataChart", am4charts.XYChart);
        
        //filter 30 days
        const date = new Date();
        console.log(date)
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        console.log(month)
        const lastMonth = ((month-1) >= 10 ? (month-1) : "0"+(month-1));
        const day = date.getDate();  
        const lastDate = year+"-"+lastMonth+"-"+day;
        const dataFilter = chardData.filter(data => data.date > lastDate);
        console.log(lastDate)

        // Add data to chart  
        chart.data = dataFilter;

        //formatting date
        chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
        chart.numberFormatter.numberFormat = "#.##";

        //Create Axis
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.dataFields.category = "date";
        dateAxis.title.text = "Week";

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "PB";

        //make interval Axis per week
        dateAxis.dateFormats.setKey("week", "ww");
        dateAxis.gridIntervals.setAll([
            { timeUnit: "day", count: 1 },
            { timeUnit: "day", count: 7 },
        ]);

        //create Series
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";
        series.name = "TEST";
        series.strokeWidth = 1;
        
        //Make Label Bullet
        var labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.text = "{valueY}";

        // Make a panning cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "panXY";
        chart.cursor.xAxis = dateAxis;
        chart.cursor.snapToSeries = series;

        // // Create vertical scrollbar and place it before the value axis
        // chart.scrollbarY = new am4core.Scrollbar();
        // chart.scrollbarY.parent = chart.leftAxesContainer;
        // chart.scrollbarY.toBack();

        // // Create a horizontal scrollbar with previe and place it underneath the date axis
        // chart.scrollbarX = new am4charts.XYChartScrollbar();
        // chart.scrollbarX.series.push(series);
        // chart.scrollbarX.parent = chart.bottomAxesContainer;

        c.current = chart;

        return () => {
            chart.dispose();
        };

    }, [])

    return (
        <div id="DataChart" style={{ width: "100%", height: "300px" }}></div>
    )
}

export default ChartQualityMonitoring