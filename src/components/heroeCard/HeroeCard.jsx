import React from 'react';
import './heroeCard.css';
// Manage global dark mode
import Theme from '../../hooks/Theme';
const Heroecard = ({ info, fillmodal }) => {
  // Dark theme manager hook
  const [darkMode] = Theme();
  return (
    <div className={`${darkMode} card`}>
      <div className="card-header">
        <img
          className="card-img"
          src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
          alt={info.name}
        />
      </div>
      <div className="card-body">
        <div className="card-title">{info.name}</div>
        <button className="card-button" onClick={() => fillmodal(info)}>
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default Heroecard;
