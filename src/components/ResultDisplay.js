import React from 'react';
import PropTypes from 'prop-types';

const ResultDisplay = ({ results }) => {
  return (
    <div className="result-display">
      <h3>Analysis Results</h3>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {result.name} - {result.getFormattedConfidence()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results available.</p>
      )}
    </div>
  );
};

ResultDisplay.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired, // Array of RekognitionResult
};

export default ResultDisplay;
