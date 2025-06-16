import React from 'react';

const Star = ({ filled }) => (
  <span style={{ color: filled ? '#FFD700' : '#e4e5e9', fontSize: '1.2rem' }}>
    ★
  </span>
);

export default Star;
