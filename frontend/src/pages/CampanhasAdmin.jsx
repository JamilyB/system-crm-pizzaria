import React, { useState } from 'react';


const CampanhasAdmin = () => {
  const [campanhas, setCampanhas] = useState([
    {
      id: 1,
      nome: 'Promoção de Sábado',
      midia: 'WhatsApp',
      atingidos: 100,
      retorno: 25
    },
    {
      id: 2,
      nome: 'Cupom Fidelidade',
      midia: 'E-mail',
      atingidos: 85,
      retorno: 18
    }
  ]);

  const [novaCampanha, setNovaCampanha] = useState({ nome: '', midia: '', atingidos: '', retorno: '' });

  const handleAdd = () => {
    const nova = { ...novaCampanha, id: campanhas.length + 1 };
    setCampanhas([...campanhas, nova]);
    setNovaCampanha({ nome: '', midia: '', atingidos: '', retorno: '' });
  };

  return (
      <div className="container">
        <h2 className="mb-4">Campanhas de Marketing</h2>

        <div className="card mb-4 p-3">
          <h5>Nova Campanha</h5>
          <div className="row">
            <input
              className="form-control mb-2"
              placeholder="Nome da campanha"
              value={novaCampanha.nome}
              onChange={(e) => setNovaCampanha({ ...novaCampanha, nome: e.target.value })}
            />
            <input
              className="form-control mb-2"
              placeholder="Mídia utilizada"
              value={novaCampanha.midia}
              onChange={(e) => setNovaCampanha({ ...novaCampanha, midia: e.target.value })}
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Clientes atingidos"
              value={novaCampanha.atingidos}
              onChange={(e) => setNovaCampanha({ ...novaCampanha, atingidos: e.target.value })}
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Taxa de retorno (%)"
              value={novaCampanha.retorno}
              onChange={(e) => setNovaCampanha({ ...novaCampanha, retorno: e.target.value })}
            />
            <button className="btn btn-primary" onClick={handleAdd}>Adicionar</button>
          </div>
        </div>

        {campanhas.map((c) => (
          <div key={c.id} className="card mb-3 border-primary">
            <div className="card-body">
              <h5 className="card-title">📣 {c.nome}</h5>
              <p className="card-text"><strong>Mídia:</strong> {c.midia}</p>
              <p className="card-text"><strong>Clientes atingidos:</strong> {c.atingidos}</p>
              <p className="card-text"><strong>Taxa de retorno:</strong> {c.retorno}%</p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default CampanhasAdmin;
