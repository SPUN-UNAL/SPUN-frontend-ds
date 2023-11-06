// Functional component
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Panel from "./Panel";
import SendModal from "./SendModal";

const Exam = (props) => {
  const questionBlocks = props.questionBlocks;

  const questionNumber = props.questionNumber;
  const setQuestionNumber = props.setQuestionNumber;

  const currentQuestionNumber = props.currentQuestionNumber;
  const setCurrentQuestionNumber = props.setCurrentQuestionNumber;

  const navigate = useNavigate();
  // get date as soon as entered page
  const startdate = Date.now();
  // name, setName
  let tempQuestionNumber = 0;
  let indexMap = {};

  for (let i = 0; i < questionBlocks?.length; i++) {
    for (let j = 0; j < questionBlocks[i].questions?.length; j++) {
      indexMap[tempQuestionNumber] = [i, j];
      tempQuestionNumber++;
    }
  }

  setQuestionNumber(tempQuestionNumber);

  const initialChoices = Array(tempQuestionNumber).fill(-1);

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
    console.log(questionBlocks);
    console.log("Cur question inside block", currentQuestion);
    console.log("Cur question Block", currentQuestionBlock);
    console.log("Question Number", questionNumber);
    return (
      <>
        <p>No this</p>
      </>
    );
  }

  const { text, choices, answer } =
    questionBlocks[currentQuestionBlock].questions[currentQuestion];

  const isFinished = () => {
    return currentQuestionNumber === tempQuestionNumber;
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

  // console.log("BLOQUES", questionBlocks[currentQuestionBlock]);
  // console.log(
  //   "Questions",
  //   questionBlocks[currentQuestionBlock].questions[currentQuestion]
  // );
  // console.log(text, choices, answer);
  // console.log(
  //   "QUESTION BLOCK",
  //   currentQuestionBlock,
  //   "CURRENT QUESTION BLOCK",
  //   currentQuestion
  // );
  // console.log("index map", indexMap);

  return (
    <div className="container">
      {/* Panel */}
      <Panel
        questionNumber={questionNumber}
        choicesVector={choicesVector}
        setCurrentQuestionBlock={setCurrentQuestionBlock}
        setCurrentQuestion={setCurrentQuestion}
        setCurrentQuestionNumber={setCurrentQuestionNumber}
        setChoiceIndex={setChoiceIndex}
        indexMap={indexMap}
      ></Panel>

      <div className="grid place-self-center">
        <div
          href="#"
          className="p-2 md:p-8 bg-white border border-gray-200 rounded-lg shadow "
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {questionNumber + "."}
            <span className="md:ml-4 sm:ml-2 text-xl font-medium"> {text}</span>
          </h5>
          <ul className="font-normal text-gray-800 text-lg">
            {choices.map((text, index) => (
              <li
                onClick={() => onClickChoice(index)}
                key={index}
                className={`${index === choiceIndex ? "bg-slate-400" : ""} my-3`}
              >
                <span className="font-semibold">{toLetter(index) + ") "}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <div className="w-full">
            <button
              onClick={() => onClickPrev(currentQuestionBlock, currentQuestion)}
              className="" 
            >
              Prev
            </button>
            {!isFinished() ? (
              <button
                onClick={onClickNext(currentQuestionBlock, currentQuestion)}
              >
                Next
              </button>
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
    </div>
  );
};

export default Exam;
