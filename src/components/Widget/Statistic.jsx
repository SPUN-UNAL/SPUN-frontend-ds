import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./widget.css";

Chart.register();

function Statistic({ ...props }) {
  
  const exams = props.exams;
  let labels = [] 
  let scoreData = [] 
  for (let i in exams){
    labels.push(exams[i].exam.title);
    scoreData.push(Math.round(exams[i].score * 100));
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Puntaje Obtenido",
        data: scoreData,
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
