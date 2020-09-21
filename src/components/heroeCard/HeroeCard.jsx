import React from 'react';
import '../heroeCard/heroeCard.css';
const Heroecard = (props) => {
  return (
    <div className="card">
      <div className="card-img">Imagen del heroe</div>
      <div className="card-title">Thor</div>
      <div className="card-details">
        Es un dios nórdico que tiene un martillo la mar de chulo la verdad
      </div>
    </div>
  );
};

export default Heroecard;
