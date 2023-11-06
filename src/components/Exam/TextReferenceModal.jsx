import Modal from "react-modal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { postExamTake } from "api/exams";
import { useAuth } from "context/AuthContext";
import FormButton from "./FormButton";

const TextReferenceModal = ({ questionBlocks, currentQuestionBlock }) => {
  // Handles modal
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClickOpenModal = () => {
    setIsOpenModal(true);
  };
  const onClickCloseModal = () => {
    setIsOpenModal(false);
  };

  Modal.setAppElement("#root");

  return (
    <>
      {questionBlocks[currentQuestionBlock].content ? (
        <div className="">
          <button onClick={onClickOpenModal} className="
            bg-cyan-200
            rounded-lg
            py-2 
          ">
            <span className="font-bold text-base px-1 sm:px-3">
              Ver texto de referencia
            </span>
          </button>
          <Modal
            isOpen={isOpenModal}
            onRequestClose={onClickCloseModal}
            contentLabel="Finish Exam Modal"
            className="flex min-h-full justify-center p-4 text-center items-center sm:p-0 bg-zinc-300 bg-opacity-30 backdrop-blur-[1.3px]"
          >
            <div className="relative transform overflow-hidden bg-transparent rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:h-full max-h-2xl">
              <div className="bg-white sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="font-semibold leading-6 text-gray-900 text-xl"
                      id="modal-title"
                    >
                      Responde de acuerdo al texto
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {questionBlocks[currentQuestionBlock].content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default TextReferenceModal;
