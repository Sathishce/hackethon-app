import axios from 'axios';
import UploadedFile from '../models/FileModel';

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(
    `${process.env.REACT_APP_API_GATEWAY_URL}/upload`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );

  return new UploadedFile(response.data); // Return an instance of UploadedFile
};
