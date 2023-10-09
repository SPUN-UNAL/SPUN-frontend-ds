import React from "react";
import { Link } from "react-router-dom";
function ExamCard({ data, ...props }) {
  return (
    <div className={`examCard ${data.color} text-slate-50 flex flex-col ${props.className} `}>
        <div className="mx-auto">
            <h1 className="pb-3 font-semibold">{data.title}</h1>
            <div className="flex flex-row justify-between items-center gap-3">
                <span className="text-xs px-2 py-1 rounded-full bg-white">
                Máximo puntaje: {(data.max).toFixed(2)}%
                </span>
            </div>
        </div>
      <div className="mx-auto">
        <Link to={"/take-exam" + (data.id)}>
            <button type=""></button>
            <button className="bg-transparent  hover:transition-all py-4  hover:border-transparent rounded">
                <span className="hover:font-bold hover:transition-all">
                    Tomar Examen
                </span>
            </button>
        </Link>
      </div>
    </div>
  );
}

export default ExamCard;
