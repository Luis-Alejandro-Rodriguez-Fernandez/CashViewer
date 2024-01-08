import React, { Component } from "react";
import Chart from "react-apexcharts";
import { formatearDinero } from "../../helpers/currency";

export default function LineChart(props) {
  let state = {
    series: props.series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: props.categories
      },
      tooltip: {
        y: {
            formatter: function (text, {series, seriesIndex, dataPointIndex, w}) {
                let value = series[seriesIndex][dataPointIndex];
                return formatearDinero(value);
            },
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        height="350"
      />
    </div>
  );

}
