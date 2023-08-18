import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
export default function PieChart() {
  const data = {
    labels: ["PV", "Gird", "Batt",],
    datasets: [
      {
        data: [35, 25, 22,],
        label: "%",
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
        ],
        // borderColor: [
        //   "rgba(255,99,132,1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        // ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ width: 600, textAlign: "center" }}>
      <h1 style={{ fontFamily: "monospace" }}>
        Data
      </h1>
      <Pie data={data} width={50} height={50} />
    </div>
  );
}