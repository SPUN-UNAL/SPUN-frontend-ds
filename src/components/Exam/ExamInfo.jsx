const ExamInfo = ({data, currentQuestionNumber, questionNumber})=>{
  return(
    <>
      <div className="">
        <p>Estas tomando el examen: {data.title} </p>
        <p>{data.description}</p>
        <p>
          <span>
            Current question: {currentQuestionNumber} / {questionNumber}{" "}
          </span>
        </p>
      </div>
    </>
  )
}
export default ExamInfo;