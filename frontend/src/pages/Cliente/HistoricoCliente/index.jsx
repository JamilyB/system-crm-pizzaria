import React, { useState } from 'react';
import CardHistorico from '../../../components/molecules/CardHistorico';
import dadosPedidos from '../../../data/pedidos.json';
import usePost from '../../../hooks/usePost';

const HistoricoCliente = () => {

  const { post } = usePost('/api/avaliacoes');

  const handleAvaliar = async (pedido, avaliacao) => {
      await post(avaliacao);
    };

  return (
    <div className="container mt-4">
      <h2 style={{ color: '#260101' }}>Histórico de Pedidos</h2>
      {dadosPedidos.map((pedido) => (
        <CardHistorico key={pedido.id} pedido={pedido} avaliador="cliente" onAvaliar={handleAvaliar} />
      ))}
    </div>
  );
};

export default HistoricoCliente;
