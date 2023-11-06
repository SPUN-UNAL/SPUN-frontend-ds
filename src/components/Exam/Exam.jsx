// Functional component
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Panel from "./Panel";
import SendModal from "./SendModal";
import FormButton from "./FormButton";
import TextReferenceModal from "./TextReferenceModal";

const Exam = (props) => {
  // Not modified here
  const questionBlocks = props.questionBlocks;
  const indexMap = props.indexMap;
  const questionNumber = props.questionNumber;

  // Modified here
  const currentQuestionNumber = props.currentQuestionNumber;
  const setCurrentQuestionNumber = props.setCurrentQuestionNumber;

  const navigate = useNavigate();
  // get date as soon as entered page
  const startdate = Date.now();
  // name, setName

  const initialChoices = Array(questionNumber).fill(-1);

  const [currentQuestionBlock, setCurrentQuestionBlock] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Chosen answer
  const [choiceIndex, setChoiceIndex] = useState(null);
  // 1: Correct, 0: Uncorrect: 1
  const [choiceStatus, setChoiceStatus] = useState(0);

  // Vector with all the choices made by the user
  const [choicesVector, setChoicesVector] = useState(initialChoices);

  // Score
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  if (!questionBlocks[currentQuestionBlock]) {
    return (
      <>
        <p>No this</p>
      </>
    );
  }

  const { text, choices, answer } =
    questionBlocks[currentQuestionBlock].questions[currentQuestion];

  const isFinished = () => {
    return currentQuestionNumber === questionNumber;
  };
  const isStart = () => {
    return currentQuestionNumber === 1;
  };

  const toLetter = (index) => {
    return String.fromCharCode(65 + index);
  };

  const onClickChoice = (index) => {
    setChoiceIndex(index);
    const answerInIndex = parseInt(answer) - 1;
    let newChoices = choicesVector;

    if (newChoices[currentQuestion] === -1) {
      setAnsweredQuestions(answeredQuestions + 1);
    }
    newChoices[currentQuestionNumber - 1] = index;
    setChoicesVector(newChoices);

    let curStatus = choiceStatus;
    if (answerInIndex === index) {
      setChoiceStatus(1);
      setScore(score + 1 - curStatus);
    } else {
      setChoiceStatus(0);
      setScore(score - curStatus);
    }
  };

  const onClickNext = (questionBlockPos, questionPos) => {
    let numberOfQuestions = questionBlocks[questionBlockPos].questions?.length;
    if (isFinished()) {
      // Finish the exam
      return;
    } else {
      // Continue with the exam
      if (questionPos === numberOfQuestions - 1) {
        // Next questionBlock
        setCurrentQuestionBlock(questionBlockPos + 1);
        setCurrentQuestion(0);
      } else {
        // Next question in current questionBlock
        setCurrentQuestion(questionPos + 1);
      }
      if (choicesVector[currentQuestionNumber] === -1) {
        setChoiceIndex(null);
      } else {
        setChoiceIndex(choicesVector[currentQuestion]);
      }

      setCurrentQuestionNumber(currentQuestionNumber + 1);
    }
  };

  const onClickPrev = (questionBlockPos, questionPos) => {
    if (isStart()) {
      // Do nothing
    } else {
      // Continue with the exam
      if (questionPos === 0) {
        // Prev questionBlock
        setCurrentQuestionBlock(questionBlockPos - 1);
        setCurrentQuestion(
          questionBlocks[questionBlockPos - 1].questions?.length - 1
        );
      } else {
        // Next question in current questionBlock
        setCurrentQuestion(questionPos - 1);
      }

      if (choicesVector[currentQuestionNumber - 2] === -1) {
        setChoiceIndex(null);
      } else {
        setChoiceIndex(choicesVector[currentQuestionNumber - 2]);
      }

      setCurrentQuestionNumber(currentQuestionNumber - 1);
    }
  };

  return (
    <>
      <div className="grid-cols-1 grid place-content-center">
        <div className="md:px-16 px-2 sm:px-8 lg:px-28">
          <TextReferenceModal
            questionBlocks={questionBlocks}
            currentQuestionBlock={currentQuestionBlock}
          ></TextReferenceModal>
          {/* Panel */}
          <Panel
            questionNumber={questionNumber}
            choicesVector={choicesVector}
            setCurrentQuestionBlock={setCurrentQuestionBlock}
            setCurrentQuestion={setCurrentQuestion}
            currentQuestionNumber={currentQuestionNumber}
            setCurrentQuestionNumber={setCurrentQuestionNumber}
            setChoiceIndex={setChoiceIndex}
            indexMap={indexMap}
            otherClassNames={""}
          ></Panel>

          <div className="">
            <div
              href="#"
              className="p-2 md:p-8 bg-white border border-gray-200 rounded-lg shadow "
            >
              <h5 className="mb-2 md:mb-6 text-2xl font-bold tracking-tight text-gray-900 ">
                {currentQuestionNumber + "."}
                <span className="md:ml-4 sm:ml-2 text-xl font-medium">
                  {" "}
                  {text}
                </span>
              </h5>
              <ul className="font-normal text-gray-800 text-lg">
                {choices.map((text, index) => (
                  <li
                    onClick={() => onClickChoice(index)}
                    key={index}
                    className={`${
                      index === choiceIndex
                        ? "bg-emerald-400"
                        : "hover:bg-emerald-200"
                    } my-3 container md:p-2 rounded-md md:rounded-xl cursor-pointer`}
                  >
                    <span className="font-semibold pr-2 pl-2 md:pl-0 text-lg md:text-xl">
                      {toLetter(index) + ") "}
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sm:flex">
            <FormButton
              onClick={() => onClickPrev(currentQuestionBlock, currentQuestion)}
              extraClassNames={`${
                isStart()
                  ? "cursor-not-allowed bg-gray-500 hover:bg-gray-400"
                  : ""
              }
                  sm:mr-12
            `}
            >
              Anterior
            </FormButton>

            {!isFinished() ? (
              <FormButton
                onClick={() =>
                  onClickNext(currentQuestionBlock, currentQuestion)
                }
                extraClassNames="sm:ml-12"
              >
                Siguiente
              </FormButton>
            ) : (
              <SendModal
                questionNumber={questionNumber}
                answeredQuestions={answeredQuestions}
                questionBlocks={questionBlocks}
                choicesVector={choicesVector}
                indexMap={indexMap}
                startdate={startdate}
                navigate={navigate}
              ></SendModal>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Exam;
