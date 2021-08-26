import React, {useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import {getModuleVisitData} from './UserModuleVisit'

function ChartModuleVisit () {
  am4core.options.autoDispose = true;
  am4core.useTheme(am4themes_animated);

  useEffect(() => {
    //set style and data
    let chart = am4core.create("chartModuleVisit", am4charts.PieChart);
    chart.innerRadius = am4core.percent(40);
    chart.data = getModuleVisitData.apply();
    //set value
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "visit";
    pieSeries.dataFields.category = "name";
    pieSeries.slices.template.stroke = am4core.color("#fff");

    // Disable ticks and give labels
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.tooltipText = `{category}[/] Visit : {value}`;
  });

  return (
    <>
        <div id="chartModuleVisit" style={{ width: "100%", height: "300px" }}></div>
    </>
  );
}

export default ChartModuleVisit