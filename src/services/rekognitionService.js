import axios from 'axios';

export const analyzeImage = async (fileKey) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_GATEWAY_URL}/analyze`,
    { key: fileKey }
  );
  return response.data; // Contains labels from Rekognition
};
