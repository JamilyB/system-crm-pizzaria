import React from 'react';
import Cor from '../../styles/colors.js';


const ErrorMessage = ({ message }) => {

if (!message) return null;

return (
    <div className="form-text" style={{ color: Cor.erro, fontWeight: '500',}}>
      {message}
    </div>
  );
};

export default ErrorMessage;
