import React, { useState } from 'react';

const CardPedido = ({ pedido, onAvaliar }) => {
  const [avaliacao, setAvaliacao] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = () => {
    onAvaliar(pedido.id, avaliacao, comentario);
    setAvaliacao('');
    setComentario('');
  };

  return (
    <div className="card mb-3 p-3 shadow-sm">
      <p><strong>Pedido:</strong> {pedido.descricao}</p>
      <p><strong>Status:</strong> {pedido.status}</p>
      <textarea
        className="form-control mb-2"
        placeholder="Deixe sua avaliação..."
        value={avaliacao}
        onChange={(e) => setAvaliacao(e.target.value)}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Deixe um comentário..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSubmit}>Enviar Avaliação</button>
    </div>
  );
};

export default CardPedido;