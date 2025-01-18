import React from 'react';
import './SubButton.css'; // Σύνδεση του CSS αρχείου

function SubButton({ onClickHandler }) {
  return (
    <button
      className="button-sub"
      onClick={onClickHandler || (() => alert('Πηγαίνοντας μπροστά!'))} // Default λειτουργικότητα αν δεν παρέχεται custom
    >
      Οριστική Υποβολή  
    </button>
  );
}

export default SubButton;