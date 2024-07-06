// src/SpinningImage.js

import React from 'react';
import './SpinningImage.css';

const SpinningImage = ({ imageUrl }) => {
  return (
    <div className="spinning-border">
      <img src={imageUrl} alt="Spinning" className="spinning-image" />
    </div>
  );
};

export default SpinningImage;
