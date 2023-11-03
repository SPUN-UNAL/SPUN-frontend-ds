import questionBlocks from "data/questionBlocksSample";
import Exam from "components/Exam/Exam";

function ExamTake() {
  // Fetch exam
  return (
    <>
      <main className="h-full">
        {/* Main Content */}
        <div className="mainCard">
          <div className="container">
            {/* Fetch of questions */}
            <Exam questionBlocks={questionBlocks}></Exam>
          </div>
        </div>
      </main>
    </>
  );
}

export default ExamTake;
