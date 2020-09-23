import React from 'react';

import '../Modal/modalCard.css';
// Manage global dark mode
import Theme from '../../hooks/Theme';
const ModalCard = ({ info, showmodal }) => {
  // Dark theme manager hook
  const [darkMode] = Theme();
  return (
    <div className={`${darkMode} cardmodal`}>
      <div className="cardmodal-header">
        <img
          className="cardmodal-img"
          src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
          alt={info.name}
        />
      </div>
      <div className="cardmodal-body">
        <div className="cardmodal-title">{info.name}</div>
        <p>{info.description}</p>
        <a
          href={info.urls[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Ver todo
        </a>
        <button className="cardmodal-button" onClick={() => showmodal()}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalCard;
