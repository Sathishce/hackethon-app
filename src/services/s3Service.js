import axios from 'axios';

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(
    `${process.env.REACT_APP_API_GATEWAY_URL}/upload`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );

  return response.data; // Contains `key` and `url` from S3
};
