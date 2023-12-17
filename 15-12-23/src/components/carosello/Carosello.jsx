// Carosello.jsx
import React, { useState } from 'react';
import './index.css';

const Carosello = ({ galleryList }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const back = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + galleryList.length) % galleryList.length);
  };

  const next = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % galleryList.length);
  };

  return (
    
    <div className="carosello__container">
      <button className="carosello__button" onClick={back}>
      ⬅️
      </button>
      <img
        className="carosello__image"
        src={galleryList[currentImage].img}
        alt={galleryList[currentImage].title}
      />
      <button className="carosello__button" onClick={next}>
      ➡️
      </button>
    </div>
  );
};

export default Carosello;
