import {useEffect, useState} from 'react';
import Exam from "components/Exam/Exam";
import { useParams } from "react-router-dom";
import { getExam } from "api/exams";
import ExamInfo from "components/Exam/ExamInfo";


function ExamTake() {
  // Fetch exam
  let { id } = useParams();

  const [data, setData] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
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
          questionBlocks={data.questionBlocks}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          currentQuestionNumber={currentQuestionNumber}
          setCurrentQuestionNumber={setCurrentQuestionNumber}
        ></Exam>
      </main>
    </>
  );
}

export default ExamTake;
