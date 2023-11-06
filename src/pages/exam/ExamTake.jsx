import { useEffect, useState } from "react";
import Exam from "components/Exam/Exam";
import { useParams } from "react-router-dom";
import { getExam } from "api/exams";
import ExamInfo from "components/Exam/ExamInfo";

function ExamTake() {
  // Fetch exam
  let { id } = useParams();

  const [data, setData] = useState(null);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  useEffect(() => {
    const setExam = async () => {
      const dump = await getExam(id);
      setData(dump.data.exam);
    };
    setExam();
  });

  if (!data) {
    return (
      <>
        <div>
          <p>Error 404: No encontrado</p>
        </div>
      </>
    );
  }

  const questionBlocks = data.questionBlocks;
  let indexMap = {};
  let questionNumber = 0;

  for (let i = 0; i < questionBlocks?.length; i++) {
    for (let j = 0; j < questionBlocks[i].questions?.length; j++) {
      indexMap[questionNumber] = [i, j];
      questionNumber++;
    }
  }

  return (
    <>
      <main className="h-screen w-full bg-slate-100 ">
        <ExamInfo
          data={data}
          questionNumber={questionNumber}
          currentQuestionNumber={currentQuestionNumber}
        ></ExamInfo>

        {/* Main Content */}
        {/* Fetch of questions */}
        <Exam
          questionBlocks={questionBlocks}
          questionNumber={questionNumber}
          currentQuestionNumber={currentQuestionNumber}
          setCurrentQuestionNumber={setCurrentQuestionNumber}
          indexMap={indexMap}
        ></Exam>
      </main>
    </>
  );
}

export default ExamTake;
