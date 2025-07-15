import React, { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const CampanhasAdmin = () => {
  const [campanhas, setCampanhas] = useState([]);
  const [novaCampanha, setNovaCampanha] = useState({ nome: '', midia: '', beneficio: '' });

  useEffect(() => {
    fetch(`${API_URL}/api/campanhas`)
      .then(res => res.json())
      .then(data => setCampanhas(
        data.map(c => ({
          id: c.id,
          nome: c.descricao ?? '',
          midia: c.midiaUsada ?? '',
          beneficio: c.beneficio ?? '',
          atingidos: c.clientesAtingidos?.length ?? 0,
          retorno: c.taxaRetorno ?? 0
        }))
      ));
  }, []);

  const handleAdd = async () => {
    if (!novaCampanha.nome || !novaCampanha.midia) return;
    const body = {
      descricao: novaCampanha.nome,
      midiaUsada: novaCampanha.midia,
      beneficio: novaCampanha.beneficio
    };
    const resp = await fetch(`${API_URL}/api/campanhas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (resp.ok) {
      const salva = await resp.json();
      setCampanhas([
        ...campanhas,
        {
          id: salva.id,
          nome: salva.descricao,
          midia: salva.midiaUsada,
          beneficio: salva.beneficio ?? '',
          atingidos: salva.clientesAtingidos?.length ?? 0,
          retorno: salva.taxaRetorno ?? 0
        }
      ]);
      setNovaCampanha({ nome: '', midia: '', beneficio: '' });
    }
  };

  const handleDelete = async (id) => {
    const resp = await fetch(`${API_URL}/api/campanhas/${id}`, {
      method: 'DELETE'
    });
    if (resp.ok) {
      setCampanhas(campanhas.filter(c => c.id !== id));
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4 mt-4" style={{ color: '#260101' }}>Campanhas de Marketing</h2>
      <div className="card mb-4 p-3">
        <h5>Nova Campanha</h5>
        <div className="row">
          <input
            className="form-control mb-2"
            placeholder="Nome da campanha"
            value={novaCampanha.nome}
            onChange={e => setNovaCampanha({ ...novaCampanha, nome: e.target.value })}
          />
          <select
            className="form-control mb-2"
            value={novaCampanha.midia}
            onChange={e => setNovaCampanha({ ...novaCampanha, midia: e.target.value })}
          >
            <option value="">Mídia</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="SMS">SMS</option>
            <option value="E-mail">E-mail</option>
          </select>
          <input
            className="form-control mb-2"
            placeholder="Benefício"
            value={novaCampanha.beneficio}
            onChange={e => setNovaCampanha({ ...novaCampanha, beneficio: e.target.value })}
          />
          <button
            className="btn"
            style={{ backgroundColor: '#260101', color: 'white' }}
            onClick={handleAdd}
          >
            Adicionar
          </button>
        </div>
      </div>
      {campanhas.map(c => (
        <div key={c.id} className="card mb-3" style={{ border: '2px solid #260101' }}>
          <div className="card-body">
            <h5 className="card-title">📣 {c.nome}</h5>
            <p className="card-text"><strong>Mídia:</strong> {c.midia}</p>
            <p className="card-text"><strong>Benefício:</strong> {c.beneficio || '-'}</p>
            <p className="card-text"><strong>Clientes atingidos:</strong> {c.atingidos ?? '-'}</p>
            <p className="card-text">
              <strong>Taxa de retorno:</strong> {c.retorno !== undefined ? `${(c.retorno * 100).toFixed(1)}%` : '-'}
            </p>
            <button
              className="btn btn-danger mt-2"
              onClick={() => handleDelete(c.id)}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampanhasAdmin;
