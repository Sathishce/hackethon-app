import React, { useState } from 'react';
import UploadControl from '../components/UploadControl';
import ChatBox from '../components/ChatBox';
import ResultDisplay from '../components/ResultDisplay';
import FilePreview from '../components/FilePreview';
import { analyzeImage } from '../services/rekognitionService';
import Layout from '../components/Layout';

const Home = () => {
  const [fileKey, setFileKey] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [results, setResults] = useState([]);

  const handleUploadSuccess = (response) => {
    setFileKey(response.key); // Set the file key (from S3) in state
    setFileUrl(response.url); // Display the uploaded file
  };

  const handleAnalyze = async () => {
    if (!fileKey) {
      alert('No file uploaded to analyze.');
      return;
    }
    try {
      const response = await analyzeImage(fileKey);
      setResults(response.labels); // Update Rekognition results
    } catch (error) {
      console.error('Image analysis failed:', error);
      alert('Image analysis failed.');
    }
  };

  return (
    <Layout>
      <div className="upload-section">
        <UploadControl onUploadSuccess={handleUploadSuccess} />
      </div>
      <div className="content-grid">
        {/* First Column: File Preview */}
        <div className="file-preview">
          <FilePreview fileUrl={fileUrl} />
          {fileKey && (
            <button className="analyze-button" onClick={handleAnalyze}>
              Analyze
            </button>
          )}
        </div>

        {/* Second Column: Rekognition Results */}
        <ResultDisplay results={results} />

        {/* Third Column: Chat Box */}
        <ChatBox />
      </div>
    </Layout>
  );
};

export default Home;
