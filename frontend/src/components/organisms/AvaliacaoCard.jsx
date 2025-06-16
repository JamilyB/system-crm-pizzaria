import React from 'react';
import RatingStars from '../molecules/RatingStars';

const AvaliacaoCard = ({ autor, alvo, tipo, nota, texto }) => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title text-primary">{tipo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{autor} → {alvo}</h6>
        <RatingStars nota={nota} />
        <p className="card-text mt-2">{texto}</p>
      </div>
    </div>
  );
};

export default AvaliacaoCard;
