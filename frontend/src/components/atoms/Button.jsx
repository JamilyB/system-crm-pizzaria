import React from 'react';

const Button = ({ children, onClick, type = 'submit' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn px-4 py-3 rounded"
      style={{
        backgroundColor: '#260101',
        borderColor: '#260101',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: '1.25rem',
        whiteSpace: 'normal',
        textAlign: 'center',
      }}
      onMouseOver={e => (e.currentTarget.style.backgroundColor = '#260101')}
      onMouseOut={e => (e.currentTarget.style.backgroundColor = '#260101')}
    >
      {children}
    </button>
  );
};

export default Button;
