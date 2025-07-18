import React from 'react';
import '../../../styles/main.css';

const AvaliacaoCard = ({ autor, alvo, tipo, nota, texto }) => (
  <div className="card mb-3 shadow-sm border-0" style={{ background: '#fff8f0' }}>
    <div className="card-body">
      <div className="mb-2">
        <span className="badge bg-primary" style={{ fontSize: '0.95rem' }}>{tipo}</span>
      </div>
      <div className="d-flex align-items-center mb-2">
        <div className=" avaliacao-card d-flex flex-column justify-content-center align-items-center me-3">
          <span>Nota</span>
          <span>{nota}</span>
        </div>
        <div>
          <div style={{ fontWeight: 600, color: '#260101' }}>
            <span style={{ fontWeight: 400, color: '#555' }}>Autor: </span>{autor}
          </div>
          <div className="text-muted" style={{ fontSize: '0.95rem' }}>
            Avaliado: {alvo}
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <p className="card-text" style={{ fontStyle: 'italic', color: '#333' }}>
        "{texto}"
      </p>
    </div>
  </div>
);

export default AvaliacaoCard;