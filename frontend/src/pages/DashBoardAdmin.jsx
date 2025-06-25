import React from 'react';

const DashboardAdmin = () => {
  const indicadores = {
    satisfacao: 4.2,
    retorno: 18,
    pedidos: 320,
    reclamacoes: 8,
    ranking: [
      { tipo: 'Pizzaria', nome: 'Pizzaria do João', nota: 4.8 },
      { tipo: 'Motoboy', nome: 'Lucas', nota: 4.7 },
      { tipo: 'Cliente', nome: 'Ana', nota: 4.6 },
    ]
  };

  return (
    <div className="container">
      <h2 className="mb-4" style={{ color: '#260101' }}>Dashboard</h2>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Satisfação</h5>
              <p className="card-text">{'★'.repeat(Math.round(indicadores.satisfacao))} ({indicadores.satisfacao})</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">Taxa de retorno</h5>
              <p className="card-text">{indicadores.retorno}%</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Pedidos finalizados</h5>
              <p className="card-text">{indicadores.pedidos}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body">
              <h5 className="card-title">Reclamações</h5>
              <p className="card-text">{indicadores.reclamacoes}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">📌 Ranking de Avaliações</h5>
          <ul className="list-group">
            {indicadores.ranking.map((item, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                {idx + 1}. {item.tipo === 'Pizzaria' && '🍕'}
                {item.tipo === 'Motoboy' && '🛵'}
                {item.tipo === 'Cliente' && '👤'} {item.tipo} {item.nome}
                <span className="badge bg-secondary rounded-pill">{item.nota}★</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;