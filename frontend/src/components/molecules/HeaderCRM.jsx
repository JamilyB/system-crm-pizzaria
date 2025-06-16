// src/components/molecules/HeaderCRM.js
import React from 'react';

const HeaderCRM = () => {
  return (
    <header className="navbar navbar-expand-lg" style={{ backgroundColor: '#FF0055' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center py-2 px-3">

        <span className="navbar-brand mb-0 h1 text-white">
          CRM Pizza Express
        </span>

        <form className="form-inline d-flex align-items-center">
          <input
            className="form-control mr-2"
            type="search"
            placeholder="Pesquisar..."
            aria-label="Pesquisar"
          />
          <button className="btn btn-outline-light" type="button">
            Sair
          </button>
        </form>

      </div>
    </header>
  );
};

export default HeaderCRM;
