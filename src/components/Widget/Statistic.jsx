import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./widget.css";

Chart.register();

function Statistic({ ...props }) {
  const data = {
    labels: ["Simulacro 1", "Simulacro 2", "Simulacro 3", "Simulacro 4", "Simulacro 5", "Simulacro 6"],
    datasets: [
      {
        label: "2023",
        data: ["12", "22", "90", "150", "145", "120", "190"],
      },
      {
        label: "Objetivo",
        data: ["11", "20", "89", "149", "150"],
        type: "line",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
  };
  return (
    <div className={`widgetCard p-3 md:py-4 md:px-6 ${props.className}`}>
      <h1 className="text-medium font-semibold pb-4">Tu rendimiento</h1>
      <div className="">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Statistic;
