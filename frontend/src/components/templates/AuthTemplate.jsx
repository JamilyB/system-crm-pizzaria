import React from 'react';

const AuthTemplate = ({ children }) => {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center" style={{ backgroundColor: '#260101' }}>
      <div className="w-100" style={{ maxWidth: 420 }}>
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;