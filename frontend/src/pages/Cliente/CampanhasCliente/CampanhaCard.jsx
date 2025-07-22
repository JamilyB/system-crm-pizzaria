import React from 'react';

const CampanhaCard = ({ campanha, aceita, onCativar }) => {
  return (
    <div className="col-12 col-md-6">
      <div
        className="card shadow"
        style={{
          border: '2px solid #260101',
          background: 'linear-gradient(135deg, #fff7e6 60%, #ffe0b2 100%)',
          borderRadius: '18px'
        }}
      >
        <div className="card-body">
          <h5 className="card-title" style={{ color: '#b30000', fontWeight: 'bold' }}>
            <span role="img" aria-label="megafone">📣</span> {campanha.descricao}
          </h5>
          <div
            className="mb-3 p-2"
            style={{
              background: '#fff3cd',
              borderRadius: '8px',
              color: '#856404',
              fontWeight: 'bold',
              fontSize: '1.1em',
              boxShadow: '0 1px 4px #ffe082'
            }}
          >
            <span role="img" aria-label="presente">🎁</span> Benefício: {campanha.beneficio}
          </div>
          <button
            className="btn btn-success"
            disabled={!!aceita}
            style={aceita ? { backgroundColor: '#28a745', opacity: 0.7 } : {}}
            onClick={() => onCativar(campanha.id)}
          >
            {aceita ? 'Aceito' : 'Aceitar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampanhaCard;
