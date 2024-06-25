import axios from "axios";

const API_URL = "https://localhost:7219/api/Users";

export const getUsers = () => {
  return axios.get(`${API_URL}/getUsers`);
};

// export const registerUsers = async (userData) => {
//   return await axios.post(`${API_URL}/register`, userData);
// };
export const registerUsers = async (userData) => {
  try {
    const response = await axios.post(
      "https://localhost:7219/api/Users/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
export const loginUsers = () => {
  return axios.post(`${API_URL}/login`);
};
