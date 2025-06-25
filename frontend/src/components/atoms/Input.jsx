import React from 'react';

const Input = ({ id, type = 'text', value, onChange, onFocus, onBlur }) => {
  return (
    <input
      id={id}
      type={type}
      className="form-control"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      style={{
        borderColor: '#260101',
        color: '#1c1c1c',
        height: '2.5rem', // aumenta a altura
        paddingTop: '0.8rem', // espaço para o label
        paddingBottom: '0.8rem',
        fontSize: '1rem',
      }}
    />
  );
};

export default Input;