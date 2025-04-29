import React from 'react';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="loader-section">
      <div className="loader-glow">
        <div className="inner-yellow-glow"></div>
      </div>
      <div className="loading-text">Loading Movies...</div>
    </div>
  );
};
