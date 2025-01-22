import React from 'react';
import PropTypes from 'prop-types';

const FilePreview = ({ file }) => {
  if (!file) return <p>No file uploaded yet.</p>;

  if (file.isImage()) {
    return <img src={file.url} alt="Uploaded File" width="100%" />;
  }

  if (file.isVideo()) {
    return (
      <video controls width="100%">
        <source src={file.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return <p>Unsupported file format.</p>;
};

FilePreview.propTypes = {
  file: PropTypes.object, // Instance of UploadedFile
};

export default FilePreview;
