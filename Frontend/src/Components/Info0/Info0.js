import React, { useState } from 'react';
import './Info0.css';

const Info0 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="info-container">
      <div
        className={`checkbox0 ${isChecked ? 'checked0' : ''}`}
        onClick={handleCheckboxClick}
      >
        {isChecked && <div className="tick">✔</div>}
      </div>
      <p className="info-text">
        Δεν τελώ υπό καθεστώς δικαστικής συμπαράστασης.
      </p>
    </div>
  );
};

export default Info0;