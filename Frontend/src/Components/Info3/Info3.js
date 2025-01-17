import React, { useState } from 'react';
import './Info3.css';

const Info3 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="info-container">
      <div
        className={`checkbox3 ${isChecked ? 'checked' : ''}`}
        onClick={handleCheckboxClick}
      >
        {isChecked && <div className="tick">✔</div>}
      </div>
      <p className="info-text">
      Η αίτηση επέχει θέση υπεύθυνης δήλωσης του άρθρου 8 του ν. 1599/1986 και η ανακρίβεια των δηλούμενων στοιχείων επισύρει τις προβλεπόμενες ποινικές και διοικητικές κυρώσεις.

      </p>
    </div>
  );
};

export default Info3;