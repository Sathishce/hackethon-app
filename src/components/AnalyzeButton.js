import React from 'react';
import { analyzeImage } from '../services/rekognitionService';

const AnalyzeButton = ({ fileKey, onAnalyzeSuccess }) => {
  const handleAnalyze = async () => {
    try {
      const response = await analyzeImage(fileKey);
      onAnalyzeSuccess(response);
    } catch (error) {
      console.error('Image analysis failed:', error);
    }
  };

  return <button onClick={handleAnalyze}>Analyze</button>;
};

export default AnalyzeButton;
