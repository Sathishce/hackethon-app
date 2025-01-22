import axios from 'axios';
const API_URL = process.env.REACT_APP_API_GATEWAY_URL;

export const chatWithBot = async (message) => {
  const response = await axios.post(`${API_URL}/chat`, { message });
  return response.data;
};
