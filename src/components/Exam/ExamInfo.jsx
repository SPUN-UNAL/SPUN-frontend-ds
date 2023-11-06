const ExamInfo = ({ data, currentQuestionNumber, questionNumber }) => {
  return (
    <>
      <div className="flex justify-center items-center w-screen md:pt-8 p-4 text-slate-800">
        <div className="">
          <div className="bg-slate-800 p-2 rounded-xl">
            <h1 className="text-5xl font-extrabold text-center text-gray-100">{data.title} </h1>
          </div>
          <p
            className="text-xl text-center py-2" 
          >{data.description}</p>
          <p className="text-center text-lg">
            <span>
              Pregunta : {currentQuestionNumber} / {questionNumber}{" "}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default ExamInfo;
