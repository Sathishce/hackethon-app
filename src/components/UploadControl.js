import React, { useState } from 'react';
import { uploadImage } from '../services/s3Service';

const UploadControl = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }
    try {
      const response = await uploadImage(file);
      onUploadSuccess(response); // Pass the uploaded file details back to parent
    } catch (error) {
      console.error('File upload failed:', error);
    }
  };

  return (
    <div className="upload-control">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadControl;
