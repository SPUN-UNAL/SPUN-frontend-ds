import React from "react";
import dayjs from "dayjs";
function Achievement(props) {
  const lastScore = props.lastScore * 100;
  const date = props.date;
  return (
    <div className="widgetCard relative block md:flex col-span-2 md:px-6 py-4 text-center flex-col justify-between bg-cyan-700 text-slate-50 mr-3">
      <div className="font-semibold text-slate-800 bg-white max-w-fit mx-auto pt-5 pb-2 px-6 absolute -top-3 rounded-lg left-1/2 -translate-x-1/2 whitespace-nowrap">
        SPUN
      </div>
      {date ? (
        <>
          <div className="font-semibold m-auto pt-4">
            <span className="text-lg lg:text-[80px]">
              {Math.floor(lastScore)}
            </span>
            .
            <span className="text-[14px]">
              {Number.parseFloat(lastScore).toFixed(2).toString().split(".")[1]}
            </span>
            %
          </div>
          <p className="text-sm font-semibold">
            Tu promedio en los ultimos examenes
          </p>
          {/* Date from first exam taken to last exam taken */}
          <p className="text-xs">Desde: {dayjs(date).format("DD/MM/YYYY")}</p>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center my-auto mx-auto">
            <p className="text-lg font-semibold">
              Todavía no has tomado tu primer examen
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Achievement;
