import React, { useState } from 'react';
import './Info2.css';

const Info2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="info-container">
      <div
        className={`checkbox2 ${isChecked ? 'checked' : ''}`}
        onClick={handleCheckboxClick}
      >
        {isChecked && <div className="tick">✔</div>}
      </div>
      <p className="info-text">
        Υποχρεούμαι να δηλώσω οποιαδήποτε μεταβολή των στοιχείων που καταχωρούνται στο Μητρώο Επιμελητών εντός δέκα (10) ημερών από την επέλευση της μεταβολής αυτών

      </p>
    </div>
  );
};

export default Info2;