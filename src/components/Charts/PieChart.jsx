import React, { Component } from "react";
import Chart from "react-apexcharts";
import { formatearDinero } from "../../helpers/currency";

export default function PieChart(props) {

    let state = {
        series:  props.series,
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: props.labels,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
          yaxis: {
            labels: {
                formatter: (value) => {
                  return formatearDinero(value);
                }
              }
            }
        },
      
      
      };

    return (
      <div>
        <Chart
          options={state.options}
          series={state.series}
          type="pie"
          height="350"
        />
      </div>
    );

}