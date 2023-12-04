import axios from "./axios";

export const getProfile = async (id) => {
  try {
    return axios.get(`/auth/profile/${id}`);
  } catch (error) {
    console.log(error);
  }
};
