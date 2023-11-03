// Functional component
import { useState } from "react";

const Exam = ({ questionBlocks }) => {
  // name, setName
  let questionNumber = 0;
  let indexMap = {}

  for (let i = 0; i < questionBlocks.length; i++) {
    for (let j = 0; j < questionBlocks[i].questions.length; j++){
      indexMap[questionNumber] = [i,j];
      questionNumber++;
    }
  }

  const initialChoices = Array(questionNumber).fill(-1);
  const panel = Array.from({ length: questionNumber }, (_, i) => i + 1);

  const [currentQuestionBlock, setCurrentQuestionBlock] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  // Chosen answer
  const [choiceIndex, setChoiceIndex] = useState(null);
  // 1: Correct, 0: Uncorrect: 1
  const [choiceStatus, setChoiceStatus] = useState(0);

  // Number of correct answers
  const [choicesVector, setChoicesVector] = useState(initialChoices);

  // Score
  const [score, setScore] = useState(0);
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
    let numberOfQuestions = questionBlocks[questionBlockPos].questions.length;
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
      if ( choicesVector[currentQuestionNumber] === -1){
        setChoiceIndex(null);
      }
      else{
        setChoiceIndex(choicesVector[currentQuestion]);
      }
      setCurrentQuestionNumber(currentQuestionNumber + 1);
    }
  };

  const onClickPrev = (questionBlockPos, questionPos) => {
    if (isStart()) {
      // Do nothing
    } else {
      console.log(questionBlockPos);
      console.log(questionPos);
      // Continue with the exam
      if (questionPos === 0) {
        // Prev questionBlock
        setCurrentQuestionBlock(questionBlockPos - 1);
        setCurrentQuestion(
          questionBlocks[questionBlockPos - 1].questions.length - 1
        );
      } else {
        // Next question in current questionBlock
        setCurrentQuestion(questionPos - 1);
      }
      if ( choicesVector[currentQuestionNumber - 2] === -1){
        setChoiceIndex(null);
      }
      else{
        setChoiceIndex(choicesVector[currentQuestionNumber - 2]);
      }
      setCurrentQuestionNumber(currentQuestionNumber - 1);
    }
  };

  const onClickPanel = (index) => {
    // Go to question of the index
    setCurrentQuestionBlock(indexMap[index][0]);
    setCurrentQuestion(indexMap[index][1]);
    setCurrentQuestionNumber(index + 1);
    if ( choicesVector[index] === -1){
      setChoiceIndex(null);
    }
    else{
      setChoiceIndex(choicesVector[index]);
    }
  };

  return (
    <div className="container">
      {/* Panel */}
      <div className="">
        Panel:
        {panel.map((element) => (
          <span key={element} onClick={() => onClickPanel(element - 1)}  className={choicesVector[element - 1] !== -1 ? "bg-green-600" : ""} >
            {" " + element}
          </span>
        ))}
      </div>
      <p>
        <span>
          Current question: {currentQuestionNumber} / {questionNumber}{" "}
        </span>
      </p>

      <p>
        <span>Question:{text}</span>
      </p>

      <ul>
        {choices.map((text, index) => (
          <li
            onClick={() => onClickChoice(index)}
            key={index}
            className={index === choiceIndex ? "bg-slate-400" : ""}
          >
            {toLetter(index) + ") "}
            {text}
          </li>
        ))}
      </ul>

      <p>
        <span>
          Choose answer: {choiceIndex + 1}: Correct: {choiceStatus}
        </span>
      </p>
      <div className="">
        <button
          onClick={() => onClickPrev(currentQuestionBlock, currentQuestion)}
        >
          Prev
        </button>
        <button
          onClick={() => onClickNext(currentQuestionBlock, currentQuestion)}
        >
          {isFinished() ? "Finish" : "Next"}
        </button>

        <p>Correct answers:</p>
        <p>
          {choicesVector.map((element) => (
            <span> {element}</span>
          ))}
          <p>SCORE: {score}</p>
        </p>
        <p>
          CURRENT BLOCK: {currentQuestionBlock}
          CURRENT Question: {currentQuestion}
        </p>
      </div>
    </div>
  );
};

export default Exam;
