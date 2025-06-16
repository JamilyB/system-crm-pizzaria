import React from 'react';
import CardPedido from '../molecules/CardPedido';

const HistoricoTemplate = ({ title, pedidos, onAvaliar }) => {
  return (
    <div className="container p-4">
      <h2 className="mb-4">{title}</h2>
      {pedidos.map(pedido => (
        <CardPedido key={pedido.id} pedido={pedido} onAvaliar={onAvaliar} />
      ))}
    </div>
  );
};

export default HistoricoTemplate;
