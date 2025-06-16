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
      }}
    />
  );
};

export default Input;
