import React from "react";
import StatisticWidget from "../components/Widget/Statistic.jsx";
import AchievementWidget from "../components/Widget/Achievement.jsx";
import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import ScrolledCard from "../components/Widget/ScrolledCard.jsx";
import { useOutletContext } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect, useState } from "react";
import { getExamTakes } from "api/exams.js";
import { Link } from "react-router-dom";

function Dashboard() {
  const { user } = useAuth();

  const avatar = "/images/male_avatar.svg";

  const [data, setData] = useState(null);
  const [lastScore, setLastScore] = useState(null);
  const [dateFirstExamtake, setDateFirstExamTake] = useState(null);

  useEffect(() => {
    const setExamsData = async () => {
      const dump = await getExamTakes(user?.id);
      setData(dump.data.examTakes.slice(0, 5));

      let tempscore = 0;
      for (let x in data) {
        tempscore += data[x].score;
      }
      tempscore = tempscore / data?.length;

      setLastScore(tempscore);

      try {
        setDateFirstExamTake(data[data?.length - 1].createdAt);
      } catch {}
    };
    setExamsData();
  });

  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <main className="h-full">
        {/* Welcome Header */}
        <DashboardHeader
          toggle={sidebarToggle}
          avatar={avatar}
          user={{ name: user.username }}
        />

        <div className="px-2 mx-auto mainCard">
          <div className="w-full overflow-hidden text-slate-700 md:grid gap-4 grid md:grid-cols-6">
            <StatisticWidget
              className="md:col-span-4 md:col-start-1 bg-white px-2"
              exams={data}
            />
            <AchievementWidget lastScore={lastScore} date={dateFirstExamtake} />
          </div>
        </div>

        <div className="px-2 mx-auto mainCard">
          <h1 className="text-slate-500 pb-3 text-base md:text-lg">
            Simulacros tomados
          </h1>

          {data ? (
            <>
              <div className="flex flex-wrap flex-row md:flex-nowrap gap-x-4 justify-between no-scrollbar">
                {data?.map((data, index) => (
                  <ScrolledCard key={index} data={data} />
                ))}
              </div>
              <div className="py-6 block">
                <Link to="/auth/profile/">
                  <p className="font-semibold text-blue-800 hover:text-blue-500">
                    Ve todos los examenes que has tomado!
                  </p>
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-600 text-lg">
                No has tomado tu primer examen!
                <div className="py-6">
                  <Link to="/dashboard/exams">
                    <p className="font-semibold text-blue-800 hover:text-blue-500">
                      Ve todos los examenes con los que puedes practicar!
                    </p>
                  </Link>
                </div>
              </p>
            </>
          )}

          <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
