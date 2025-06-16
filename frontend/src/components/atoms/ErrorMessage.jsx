import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div
      className="form-text"
      style={{
        color: 'Hex #EA4335',
        fontWeight: '500',
      }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
