import axios from 'axios';
import RekognitionResult from '../models/RekognitionModel';

export const analyzeImage = async (fileKey) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_GATEWAY_URL}/analyze`,
      { key: fileKey }
    );

    // Map raw Rekognition results to model instances
    const labels = response.data.labels.map(
      (label) => new RekognitionResult(label)
    );

    return labels; // Return an array of RekognitionResult objects
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
};
