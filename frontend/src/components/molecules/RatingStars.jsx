import React from 'react';
import Star from '../atoms/Star';

const RatingStars = ({ nota }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} filled={i <= nota} />
      ))}
    </div>
  );
};

export default RatingStars;
