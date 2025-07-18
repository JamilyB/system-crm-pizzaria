import React from 'react';
import Cor from '../../styles/colors.js';
const Button = ({ children, onClick, type = 'submit' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn px-4 py-3 rounded"
      style={{
        backgroundColor: Cor.p1,
        color: Cor.textoClaro,
        fontWeight: '700',
        fontSize: '1.25rem',
        whiteSpace: 'normal',
        textAlign: 'center',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
