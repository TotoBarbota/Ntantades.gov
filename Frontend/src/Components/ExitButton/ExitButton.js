import React from 'react';
import './ExitButton.css'; // Σύνδεση του CSS αρχείου

function Front_Button({ onClickHandler }) {
  return (
    <button
      className="button-exit"
      onClick={onClickHandler || (() => alert('Πηγαίνοντας μπροστά!'))} // Default λειτουργικότητα αν δεν παρέχεται custom
    >
      Έξοδος στην αρχική σελίδα
    </button>
  );
}

export default Front_Button;