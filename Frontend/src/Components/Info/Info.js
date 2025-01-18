import React, { useState } from 'react';
import './Info.css';

const Info = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="info-container">
      <div
        className={`checkbox ${isChecked ? 'checked' : ''}`}
        onClick={handleCheckboxClick}
      >
        {isChecked && <div className="tick">✔</div>}
      </div>
      <p className="info-text">
        Δεν εκκρεμεί εις βάρος μου μήνυση ή έγκληση ενώπιον αρμόδιας αρχής και δεν διώκομαι ως φυγόδικος ή φυγόποινος και δεν έχω καταδικαστεί για οποιοδήποτε κακούργημα, για αδικήματα που επιφέρουν, σύμφωνα με το άρθρο 1537 ΑΚ, έκπτωση από τη γονική μέριμνα ή για αδικήματα κατά της σωματικής ακεραιότητας, κατά της προσωπικής ελευθερίας, κατά της γενετήσιας ελευθερίας, για αδικήματα του ν. 3500/2006 (Α’ 232), καθώς και για αδικήματα που συνδέονται με ναρκωτικά ή εμπορία οργάνων.
      </p>
    </div>
  );
};

export default Info;
