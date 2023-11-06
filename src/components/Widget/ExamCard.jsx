import React from "react";
import { Link } from "react-router-dom";

const colorMap = new Map([
  ["Matemáticas", "cardMath"],
  ["Ciencias Sociales", "cardSocialScience"],
  ["Ciencias Naturales", "cardNaturalScience"],
  ["Análisis textual", "cardTextAnalysis"],
  ["Análisis de imagen", "cardImageAnalysis"],
]);

function ExamCard({ data, ...props }) {
  return (
    <div
      className={`examCard ${colorMap.get(
        data.subject
      )}  text-slate-50 flex flex-col ${props.className} `}
    >
      <div className="mx-auto text-center">
        <h1 className="pb-3 font-semibold">{data.title}</h1>
        <div className="flex flex-row justify-between items-center gap-3">
          <span className="text-xs px-2 py-1 rounded-full bg-white">
            Último puntaje: {12}%
          </span>
        </div>
      </div>
      <div className="mx-auto">
        <Link to={"/exam/take/" + data._id}>
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
