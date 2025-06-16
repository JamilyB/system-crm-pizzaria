import React, { useState } from 'react';

const tipos = ['motoboy', 'cliente', 'pizzaria'];

const CardHistorico = ({ pedido, avaliador }) => {
  const [avaliacoes, setAvaliacoes] = useState({
    motoboy: 0,
    cliente: 0,
    pizzaria: 0,
  });

  const podeAvaliar = tipos.filter((tipo) => tipo !== avaliador);

  const handleAvaliar = (tipoAvaliado, nota) => {
    setAvaliacoes((prev) => ({ ...prev, [tipoAvaliado]: nota }));
    alert(`Avaliado ${tipoAvaliado} com ${nota} estrela(s) no pedido ${pedido.id}`);
  };

  const StatusTag = ({ avaliado }) => (
    <span
      className={`ml-2 badge ${avaliado ? 'bg-success' : 'bg-danger'} text-white`}
      style={{
        fontSize: '0.65rem',
        minWidth: '100px',
        fontWeight: 'bold',
        padding: '5px',
        borderRadius: '10px',
      }}
    >
      {avaliado ? 'Avaliado' : 'Avaliação pendente'}
    </span>
  );

  const renderBloco = (tipo, label, nome, exibirLabel = true) => {
    if (tipo === avaliador) return null;

    return (
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ minWidth: '120px' }}>
            {exibirLabel ? (
              <strong>{label}:</strong>
            ) : (
              <strong className="text-dark">{nome}</strong>
            )}{' '}
            {exibirLabel && nome}
          </div>
          <div className="d-flex align-items-center">
            {podeAvaliar.includes(tipo) &&
              [1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleAvaliar(tipo, star)}
                  className="btn p-0 border-0"
                  style={{
                    color: star <= avaliacoes[tipo] ? '#260101' : '#ccc',
                    fontSize: '1.25rem',
                    background: 'none',
                    marginLeft: '5px',
                  }}
                >
                  ★
                </button>
              ))}
            {podeAvaliar.includes(tipo) && (
              <StatusTag avaliado={avaliacoes[tipo] > 0} />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="card shadow-sm mx-auto mb-4"
      style={{ borderColor: '#260101', maxWidth: '480px', background: '#fff5f2' }}
    >
      <div className="card-body">
        <h5 className="card-title text-dark mb-3">Pedido #{pedido.id}</h5>

        {renderBloco('motoboy', 'Motoboy', pedido.motoboy)}
        {renderBloco('cliente', 'Cliente', pedido.cliente)}
        {renderBloco('pizzaria', '', pedido.pizzaria, false)}

        <div className="text-muted text-right" style={{ fontSize: '0.8rem' }}>
          {pedido.dataHora}
        </div>
      </div>
    </div>
  );
};

export default CardHistorico;
