import React from "react";
import dayjs from 'dayjs';

function ScrolledCard({ data, ...props }) {
  return (
    <div className={`scrolledCard cardNaturalScience text-slate-50 flex flex-col my-3 md:my-1`}>
      <h1 className="pb-3 font-semibold">{data.exam.title}</h1>
      <div className="text-[0.6rem] text-slate-700 font-semibold">
        Tomado en: {dayjs(data.createdAt).format("DD/MM/YYYY")}
      </div>
      <div className="flex flex-row justify-between items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-full bg-white">
          Porcentaje: {(data.score * 100).toFixed(2)}%
        </span>
      </div>
    </div>
  );
}

export default ScrolledCard;
