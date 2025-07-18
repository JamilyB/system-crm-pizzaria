import React from 'react';

const CampanhaCard = ({ campanha, onDelete }) => {
  return (
    <div className="card mb-3" style={{ border: '2px solid #260101' }}>
      <div className="card-body">
        <h5 className="card-title">📣 {campanha.nome}</h5>
        <p className="card-text"><strong>Mídia:</strong> {campanha.midia}</p>
        <p className="card-text"><strong>Benefício:</strong> {campanha.beneficio || '-'}</p>
        <p className="card-text"><strong>Clientes atingidos:</strong> {campanha.atingidos ?? '-'}</p>
        <p className="card-text">
          <strong>Taxa de retorno:</strong> {campanha.retorno !== undefined ? `${(campanha.retorno * 100).toFixed(1)}%` : '-'}
        </p>
        <button
          className="btn btn-danger mt-2"
          onClick={() => onDelete(campanha.id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default CampanhaCard;
