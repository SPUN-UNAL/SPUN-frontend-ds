import Modal from "react-modal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { postExamTake } from "api/exams";
import { useAuth } from "context/AuthContext";
import FormButton from "./FormButton";

const SendModal = ({
  questionNumber,
  answeredQuestions,
  questionBlocks,
  choicesVector,
  indexMap,
  startdate,
  navigate,
}) => {
  const { user } = useAuth();

  const { id } = useParams();
  // Handles modal
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClickOpenModal = () => {
    setIsOpenModal(true);
  };
  const onClickCloseModal = () => {
    setIsOpenModal(false);
  };

  const onClickSubmitExam = async () => {
    // Sumbit date
    const enddate = Date.now();
    // get answers with questions
    let dump = [];

    let score = 0;

    for (let i = 0; i < questionNumber; i++) {
      // question
      dump[i] = String(choicesVector[i] + 1);
      if (
        questionBlocks[indexMap[i][0]].questions[indexMap[i][1]].answer ===
        dump[i]
      ) {
        score++;
      }
    }

    score = score / questionNumber;

    postExamTake(id, dump, startdate, enddate, user.email, score);

    navigate("/dashboard");
  };

  Modal.setAppElement("#root");

  return (
    <>
      <FormButton
        onClick={onClickOpenModal}
        extraClassNames="sm:ml-12"
      >
        Enviar
      </FormButton>
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
                        {"Te falta" +
                          (questionNumber - 1 !== answeredQuestions
                            ? "n "
                            : " ") +
                          String(questionNumber - answeredQuestions) +
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
    </>
  );
};

export default SendModal;
