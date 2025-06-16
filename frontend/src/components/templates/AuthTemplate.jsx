import React from 'react';
import logo from '../assets/logoB.png';

const AuthTemplate = ({ children }) => {
  return (
    <div className="d-flex vh-100" style={{ backgroundColor: '#260101' }}>
      <div className="w-50 d-flex align-items-center justify-content-center p-5" >
        {children}
      </div>
      <div className="w-50 d-flex align-items-center justify-content-center" >
        <img src={logo} alt="Logo" style={{ maxWidth: '70%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default AuthTemplate;
