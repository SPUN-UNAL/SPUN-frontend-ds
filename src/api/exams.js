import axios from "./axios";

export const getExam = async  (id) => {
    return axios.get(`/exam/${id}`);
};

export const postExamTake = async (
  exam_id,
  answers,
  startExam,
  endExam,
  email,
  score
) => {
  const data = {
    answers: answers,
    startExam: startExam,
    endExam: endExam,
    email: email,
    score: score,
  }
  try {
    axios.post(`/exam/take/${exam_id}`, data);
  } catch (error) {
    console.log(error);
  }
};
