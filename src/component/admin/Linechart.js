import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const options = {
  maintainAspectRatio: false, // ปิดการใช้งาน aspect ratio ที่เป็น default
  responsive: true, // ทำให้กราฟ responsive
  scales: {
    // คุณสามารถปรับตั้งค่า scales ต่างๆ ที่นี่
  }
};

const LineChart = () => {
  return (
    <div style={{width: '60vw', height: '60vh'}}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;