import React, { useState, useEffect } from 'react';

const tipos = ['motoboy', 'cliente', 'pizzaria'];

const getAvaliacoesSalvas = (pedidoId, avaliador) => {
  const data = localStorage.getItem(`avaliacoes_${pedidoId}_${avaliador}`);
  return data
    ? JSON.parse(data)
    : { motoboy: 0, cliente: 0, pizzaria: 0 };
};

const CardHistorico = ({ pedido, avaliador, onAvaliar }) => {
  const [avaliacoes, setAvaliacoes] = useState(() =>
    getAvaliacoesSalvas(pedido.id, avaliador)
  );
  const [comentarios, setComentarios] = useState({
    motoboy: '',
    cliente: '',
    pizzaria: '',
  });

  const podeAvaliar = tipos.filter((tipo) => tipo !== avaliador);

  useEffect(() => {
    localStorage.setItem(
      `avaliacoes_${pedido.id}_${avaliador}`,
      JSON.stringify(avaliacoes)
    );
  }, [avaliacoes, pedido.id, avaliador]);

  const handleAvaliar = (tipoAvaliado, nota) => {
    setAvaliacoes((prev) => ({ ...prev, [tipoAvaliado]: nota }));
    if (onAvaliar) {
      onAvaliar(pedido, {
        tipoAvaliador: avaliador,
        tipoAvaliado,
        nota,
        descricao: comentarios[tipoAvaliado],
        idAvaliador: 1,
        idAvaliado: 1,
      });
    }
    setComentarios((prev) => ({ ...prev, [tipoAvaliado]: '' }));
  };

  const StatusTag = ({ avaliado }) => (
    <span
      className={`badge ${avaliado ? 'bg-success' : 'bg-danger'} text-white`}
      style={{
        fontSize: '0.7rem',
        minWidth: '100px',
        fontWeight: 'bold',
        padding: '5px 10px',
        borderRadius: '10px',
        marginLeft: '10px',
      }}
    >
      {avaliado ? 'Avaliado' : 'Avaliação pendente'}
    </span>
  );

  const renderBloco = (tipo, label, nome) => {
    if (tipo === avaliador) return null;

    return (
      <div
        className="mb-3 p-3"
        style={{
          background: '#fff8f0',
          borderRadius: '12px',
          border: '1px solid #f3e0d6',
          boxShadow: '0 1px 2px #0001',
        }}
      >
        <div className="d-flex align-items-center mb-2">
          <div style={{ fontWeight: 600, color: '#260101', minWidth: 120 }}>
            {label}: {nome}
          </div>
          <div className="ms-auto">
            <StatusTag avaliado={avaliacoes[tipo] > 0} />
          </div>
        </div>
        {podeAvaliar.includes(tipo) && (
          <>
            <div className="mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleAvaliar(tipo, star)}
                  className="btn p-0 border-0"
                  style={{
                    color: star <= avaliacoes[tipo] ? '#ffc107' : '#ccc',
                    fontSize: '1.3rem',
                    background: 'none',
                    marginLeft: '5px',
                  }}
                  disabled={avaliacoes[tipo] > 0}
                >
                  ★
                </button>
              ))}
            </div>
            {avaliacoes[tipo] === 0 && (
              <textarea
                className="form-control"
                placeholder="Deixe um comentário..."
                value={comentarios[tipo]}
                onChange={(e) =>
                  setComentarios((prev) => ({
                    ...prev,
                    [tipo]: e.target.value,
                  }))
                }
                rows={1}
              />
            )}
          </>
        )}
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
        {renderBloco('pizzaria', 'Pizzaria', pedido.pizzaria)}
        <div className="text-muted text-end" style={{ fontSize: '0.8rem' }}>
          {pedido.dataHora}
        </div>
      </div>
    </div>
  );
};

export default CardHistorico;