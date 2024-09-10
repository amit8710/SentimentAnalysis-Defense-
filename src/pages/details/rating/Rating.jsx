import React from 'react';
import './style.scss';

const Rating = () => {
  return (
    <div className="rating-container">
      <div className="rating-item">
        <div className="rating-value">20%</div>
        <div className="rating-count">5 Reviews</div>
      </div>
      <div className="rating-item">
        <div className="rating-value">80%</div>
        <div className="rating-count">Fewer than 50 Ratings</div>
      </div>
    </div>
  );
};

export default Rating;