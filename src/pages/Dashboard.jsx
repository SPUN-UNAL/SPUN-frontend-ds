import React from "react";
import StatisticWidget from "../components/Widget/Statistic.jsx";
import AchievementWidget from "../components/Widget/Achievement.jsx";
import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import ScrolledCard from "../components/Widget/ScrolledCard.jsx";
import { useOutletContext } from "react-router-dom";
function Dashboard() {
  const avatar ="/images/male_avatar.svg";

  // Card color available at /src/index.css
  const dataOS = [
    {
      title: "Examen Matemáticas",
      date: "12/Mayo/2023",
      score: 200.01,
      max: 300,
      color: "cardMath",
    },
    {
      title: "Examen Análisis textual",
      date: "11/Mayo/2023",
      score: 120.03,
      max: 200,
      color: "cardTextAnalysis",
    },
    {
      title: "Examen Análisis de Imágen",
      date: "10/Mayo/2023",
      score: 20.01,
      max: 300,
      color: "cardImageAnalysis",
    },
    {
      title: "Examen Ciencias Naturales",
      date: "9/Mayo/2023",
      score: 145.04,
      max: 300,
      color: "cardNaturalScience",
    },
    {
      title: "Examen Ciencias Sociales",
      date: "1/Mayo/2023",
      score: 230.01,
      max: 300,
      color: "cardSocialScience",
    },
  ];

  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <main className="h-full">
        {/* Welcome Header */}
        <DashboardHeader
          toggle={sidebarToggle}
          avatar={avatar}
          user={{ name: "Dani Diaz" }}
        />

        {/* Laba */}
        <div className="px-2 mx-auto mainCard">
          <div className="w-full overflow-hidden text-slate-700 md:grid gap-4 grid md:grid-cols-6">
            <StatisticWidget className="col-span-4 col-start-1 bg-white" />
            <AchievementWidget />
          </div>
        </div>

        {/* OS Kredit */}
        <div className="px-2 mx-auto mainCard">
          <h1 className="text-slate-500 pb-3 text-base md:text-lg">
            Simulacros tomados
          </h1>

          <div className="flex flex-row gap-x-4 overflow-hidden overflow-x-auto justify-between no-scrollbar">
            {dataOS?.map((data, index) => (
              <ScrolledCard key={index} data={data} />
            ))}
          </div>

          <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
