const ExamInfo = ({ data, currentQuestionNumber, questionNumber,  }) => {
  return (
    <>
      <div className="flex justify-center items-center w-screen 2xl:pt-8 md:pt-4 text-slate-800">
        <div className="">
          <div className="bg-slate-800 p-2 rounded-xl">
            <h1 className="2xl:text-5xl lg:text-4xl font-extrabold text-center text-gray-100">{data.title} </h1>
          </div>
          <p
            className="2xl:text-xl lg:text-lg text-center py-2" 
          >{data.description}</p>
          <p className="text-center 2xl:text-lg lg:text-base">
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
