import React from 'react';

const ResultDisplay = ({ results }) => {
  return (
    <div className="result-display">
      <h3>Analysis Results</h3>
      <ul>
        {results.map((item, index) => (
          <li key={index}>
            {item.Name} - {item.Confidence.toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultDisplay;
