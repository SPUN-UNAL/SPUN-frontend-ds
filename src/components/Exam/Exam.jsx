// Functional component
import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:4000/api/";

const Exam = ({ questionBlocks }) => {

  // get date as soon as entered page
  const startDate = Date.now();
  // name, setName
  let questionNumber = 0;
  let indexMap = {};

  for (let i = 0; i < questionBlocks?.length; i++) {
    for (let j = 0; j < questionBlocks[i].questions?.length; j++) {
      indexMap[questionNumber] = [i, j];
      questionNumber++;
    }
  }

  const initialChoices = Array(questionNumber).fill(-1);
  const panel = Array.from({ length: questionNumber }, (_, i) => i + 1);

  const navigate = useNavigate();

  const [currentQuestionBlock, setCurrentQuestionBlock] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  // Chosen answer
  const [choiceIndex, setChoiceIndex] = useState(null);
  // 1: Correct, 0: Uncorrect: 1
  const [choiceStatus, setChoiceStatus] = useState(0);

  // Vector with all the choices made by the user
  const [choicesVector, setChoicesVector] = useState(initialChoices);

  // Score
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const { text, choices, answer } =
    questionBlocks[currentQuestionBlock].questions[currentQuestion];

  // Handles modal
  const [isOpenModal, setIsOpenModal] = useState(false);

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

  const onClickPanel = (index) => {
    // Go to question of the index
    setCurrentQuestionBlock(indexMap[index][0]);
    setCurrentQuestion(indexMap[index][1]);
    setCurrentQuestionNumber(index + 1);
    if (choicesVector[index] === -1) {
      setChoiceIndex(null);
    } else {
      setChoiceIndex(choicesVector[index]);
    }
  };

  const onClickOpenModal = () => {
    setIsOpenModal(true);
  };
  const onClickCloseModal = () => {
    setIsOpenModal(false);
  };

  const onClickSubmitExam = async () => {
    // Sumbit date 
    const endDate = Date.now();
    // get answers with questions
    let dump = [];
    for (let i = 0 ;i < questionNumber; i++){
      // question
      dump[i] = [questionBlocks[indexMap[i][0]].questions[indexMap[i][1]]._id, choicesVector[i]]
    }
    // console.log(dump);

    navigate("/dashboard");
  };
  
  
  Modal.setAppElement("#root");


  return (
    <div className="container">
      {/* Panel */}
      <div className="">
        Panel:
        {panel.map((element, index) => (
          <span
            key={index}
            onClick={() => onClickPanel(index)}
            className={choicesVector[index] !== -1 ? "bg-green-600" : ""}
          >
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
          onClick={() =>
            isFinished()
              ? onClickOpenModal()
              : onClickNext(currentQuestionBlock, currentQuestion)
          }
        >
          {isFinished() ? "Finish" : "Next"}
        </button>

        <Modal
          isOpen={isOpenModal}
          onRequestClose={onClickCloseModal}
          contentLabel="Finish Exam Modal"
          className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-zinc-300 bg-opacity-30 backdrop-blur-[1.3px]"
        >
          <div className="relative transform overflow-hidden bg-transparent rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Finalizar Examen
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      ¿Estás seguro de que quieres finalizar el examen?
                      {questionNumber === answeredQuestions ? (
                        ""
                      ) : (
                        <span>
                          <br></br>
                          {"Te falta " +
                            (questionNumber - 1 !== answeredQuestions
                              ? "n"
                              : "") +
                            String(questionNumber - answeredQuestions)
                            +
                            " pregunta por responder"}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={onClickSubmitExam}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Enviar
              </button>
              <button
                onClick={onClickCloseModal}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Volver
              </button>
            </div>
          </div>
        </Modal>

        <p>Correct answers:</p>
        <p>
          {choicesVector.map((element, index) => (
            <span key={index}> {element}</span>
          ))}
          <span>
            <br></br>SCORE: {score}
          </span>
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
