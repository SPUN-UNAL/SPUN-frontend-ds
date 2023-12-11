import React from "react";
import dayjs from "dayjs";

function ResultCard({ data, ...props }) {
  return (
    <>
      <div className="">
        <div
          className={` flex flex-col rounded-lg bg-teal-50 my-3 px-3 py-3 border-2 border-emerald-400 shadow-md`}
        >
          <h1 className="pb-2 font-semibold text-lg">{data.exam.title}</h1>
          {data.exam.description ? (
            <p className="py-1 font-light">{data.exam.description}</p>
          ) : (
            <></>
          )}
          <span className="py-2 rounded-full text-md">
            Porcentaje: {(data.score * 100).toFixed(2)}%
          </span>
          <div className=" text-slate-700 font-semibold text-sm">
            Tomado en: {dayjs(data.startExam).format("DD/MM/YYYY")}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultCard;
