import React from 'react';

const CampanhaForm = ({ novaCampanha, setNovaCampanha, handleAdd }) => {
  return (
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
  );
};

export default CampanhaForm;
