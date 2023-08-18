import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "kWh/Month",
        backgroundColor:[
          "#FADCDC",
        ],
        // borderColor: "rgb(100, 192, 192)",
        data: [100, 10, 5, 3, 20, 30, 45, 55],
      },
      {
        label: "kWh/Month2",
        backgroundColor:[
          "#A8D1E7",
        ],
        data: [90, 9, 4, 4, 30, 40, 55, 45],
      },
      {
        label: "kWh/Month3",
        backgroundColor:[
          "#92CEA8",
        ],
        data: [80, 8, 3, 5, 40, 50, 65, 35],
      },
      {
        label: "kWh/Month4",
        backgroundColor:[
          "#FCEE9E",
        ],
        data: [70, 7, 2, 6, 50, 60, 75, 25],
      },
      {
        label: "kWh/Month5",
        backgroundColor:[
          "#BFCED6",
        ],
        data: [60, 6, 1, 7, 60, 70, 85, 15],
      }
    ],
  };
  
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;