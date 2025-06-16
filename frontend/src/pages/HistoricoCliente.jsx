import React, { useState } from 'react';
import HistoricoTemplate from '../components/templates/HistoricoTemplate';
import CardHistorico from '../components/molecules/CardHistorico';


const HistoricoCliente = () => {
  const [pedidos, setPedidos] = useState([
    { id: 101, cliente: 'João Silva', motoboy: 'Carlos', pizzaria: 'Pizza Express', dataHora: '05/06/2025 19:30' },
    { id: 102, cliente: 'Maria Oliveira', motoboy: 'Pedro', pizzaria: 'Pizza Express', dataHora: '06/06/2025 20:15' },
    { id: 103, cliente: 'Lucas Santos', motoboy: 'Ana', pizzaria: 'Pizza Express', dataHora: '07/06/2025 18:45' },
    { id: 104, cliente: 'Bruna Costa', motoboy: 'Diego', pizzaria: 'Pizza Express', dataHora: '08/06/2025 21:00' },
    { id: 105, cliente: 'Felipe Souza', motoboy: 'Larissa', pizzaria: 'Pizza Express', dataHora: '09/06/2025 17:20' },
  ]);


  const handleAvaliar = (pedidoId, avaliacao) => {
    console.log(`Avaliação para pedido ${pedidoId}: ${avaliacao}`);
    // enviar a avaliação para a API
  };

  return (
    <div className="container mt-4">
         <h2 style={{ color: '#260101' }}>Histórico de Pedidos</h2>
         {pedidos.map((pedido) => (
           <CardHistorico pedido={pedido} avaliador="cliente" />
         ))}
     </div>
  );
};

export default HistoricoCliente;
