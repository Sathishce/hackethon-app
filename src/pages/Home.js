import React, { useState } from 'react';
import UploadControl from '../components/UploadControl';
import ChatBox from '../components/ChatBox';
import ResultDisplay from '../components/ResultDisplay';
import FilePreview from '../components/FilePreview';
import Layout from '../components/Layout';
import { uploadImage } from '../services/s3Service';
import { analyzeImage } from '../services/rekognitionService';

const Home = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [rekognitionResults, setRekognitionResults] = useState([]);

  const handleUploadSuccess = async (file) => {
    try {
      const uploadedFile = await uploadImage(file);
      setUploadedFile(uploadedFile); // Instance of UploadedFile
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed.');
    }
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) {
      alert('No file uploaded to analyze.');
      return;
    }
    try {
      const results = await analyzeImage(uploadedFile.key);
      setRekognitionResults(results); // Array of RekognitionResult
    } catch (error) {
      console.error('Analysis failed:', error);
      alert('Analysis failed.');
    }
  };

  return (
    <Layout>
      <div className="upload-section">
        <UploadControl onUploadSuccess={handleUploadSuccess} />
      </div>
      <div className="content-grid">
        <div className="file-preview">
          <FilePreview file={uploadedFile} />
          {uploadedFile && (
            <button className="analyze-button" onClick={handleAnalyze}>
              Analyze
            </button>
          )}
        </div>
        <ResultDisplay results={rekognitionResults} />
        <ChatBox />
      </div>
    </Layout>
  );
};

export default Home;
