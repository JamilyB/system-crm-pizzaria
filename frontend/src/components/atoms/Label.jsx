import React from 'react';

const Label = ({ htmlFor, children, isActive }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`form-label position-absolute px-1 bg-white transition-all`}
      style={{
        color: isActive ? '#260101' : '#260101',
        fontWeight: '600',
        top: isActive ? '-0.65rem' : '0.75rem',
        left: '0.75rem',
        fontSize: isActive ? '0.75rem' : '1rem',
      }}
    >
      {children}
    </label>
  );
};

export default Label;
