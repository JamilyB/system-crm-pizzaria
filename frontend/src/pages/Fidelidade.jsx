import React, { useState } from 'react';

const itensTroca = [
  { id: 1, nome: 'Pizza Média', pontos: 300 },
  { id: 2, nome: 'Refrigerante 2L', pontos: 150 },
  { id: 3, nome: 'Calzone', pontos: 250 },
  { id: 4, nome: 'Sobremesa', pontos: 200 },
];

const Fidelidade = () => {
  const [pontosCliente, setPontosCliente] = useState(280); // pontos fixos no componente

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4" style={{ color: '#260101' }}>
        Programa de Fidelidade
      </h2>

      <div
        className="card mb-4 p-3 text-center"
        style={{ borderColor: '#FF6F61', backgroundColor: '#fff3f0' }}
      >
        <h4 style={{ color: '#FF6F61' }}>Seus pontos</h4>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#260101' }}>
          {pontosCliente}
        </p>
      </div>

      <h5 style={{ color: '#260101', marginBottom: '1rem' }}>
        Itens para troca
      </h5>

      <div className="list-group mb-4">
        {itensTroca.map((item) => (
          <div
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{
              borderColor: '#FF6F61',
              cursor: pontosCliente >= item.pontos ? 'pointer' : 'not-allowed',
              backgroundColor: pontosCliente >= item.pontos ? '#fff3f0' : '#f8d7da',
              color: pontosCliente >= item.pontos ? '#260101' : '#842029',
            }}
          >
            <span>{item.nome}</span>
            <span>
              {item.pontos} <small>pontos</small>
            </span>
          </div>
        ))}
      </div>

      <div
        className="card p-3"
        style={{ borderColor: '#FF6F61', backgroundColor: '#fff3f0' }}
      >
        <h5 style={{ color: '#260101' }}>Como adquirir pontos</h5>
        <p style={{ color: '#260101', fontSize: '0.9rem' }}>
          Ganhe pontos a cada pedido realizado, cada R$10 em compras vale 10 pontos.
          Também acumulamos pontos em promoções especiais e eventos. Use seus pontos para
          trocar por deliciosos produtos no nosso cardápio!
        </p>
      </div>
    </div>
  );
};

export default Fidelidade;
