import React, { useState, useEffect } from 'react';
import a from './img/a.jpg';
import b from './img/b.jpg';
import c from './img/c.jpg';
import d from './img/d.jpg';
import e from './img/e.jpg';
import f from './img/f.jpg';

const images = [a, b, c, d, e, f];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default ImageSlider;