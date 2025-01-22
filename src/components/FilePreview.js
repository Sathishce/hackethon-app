import React from 'react';
import PropTypes from 'prop-types';
import AnalyzeButton from './AnalyzeButton';

const FilePreview = ({ fileUrl, fileKey }) => {
  return (
    <div className="file-preview">
      {fileUrl ? (
        fileUrl.endsWith('.mp4') || fileUrl.endsWith('.webm') ? (
          <video controls width="100%">
            <source src={fileUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={fileUrl} alt="Uploaded File" width="100%" />
        )
      ) : (
        <p>No file uploaded yet.</p>
      )}
      {fileKey && <AnalyzeButton fileKey={fileKey} />}
    </div>
  );
};

FilePreview.propTypes = {
  fileUrl: PropTypes.string,
  fileKey: PropTypes.string,
};

export default FilePreview;
