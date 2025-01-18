import React from 'react';
import './Front_Button.css'; // Σύνδεση του CSS αρχείου

function Front_Button({ onClickHandler }) {
  return (
    <button
      className="button-front"
      onClick={onClickHandler || (() => alert('Πηγαίνοντας μπροστά!'))} // Default λειτουργικότητα αν δεν παρέχεται custom
    >
       Συνέχεια
    </button>
  );
}

export default Front_Button;
