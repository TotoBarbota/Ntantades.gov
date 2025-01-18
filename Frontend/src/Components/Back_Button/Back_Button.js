import React from 'react';
import './Back_Button.css'; // Σύνδεση του CSS αρχείου

function Back_Button({ onClickHandler }) {
  return (
    <button
      className="button-back"
      onClick={onClickHandler || (() => alert('Πηγαίνοντας πίσω!'))} // Default λειτουργικότητα αν δεν παρέχεται custom
    >
       Πίσω
    </button>
  );
}

export default Back_Button;
