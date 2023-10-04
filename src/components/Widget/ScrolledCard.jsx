import React from "react";

function ScrolledCard({ data, ...props }) {
  return (
    <div className={`scrolledCard ${data.color} text-slate-50 flex flex-col`}>
      <h1 className="pb-3 font-semibold">{data.title}</h1>
      <div className="text-[0.6rem] text-slate-700 font-semibold">
        {data.date} (YtD)
      </div>
      <div className="text-small md:text-medium">Puntaje: {data.score} / {data.max}</div>
      <div className="flex flex-row justify-between items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-full bg-white">
          Porcentaje: {(data.score * 100 / data.max).toFixed(2)}%
        </span>
      </div>
    </div>
  );
}

export default ScrolledCard;
