import React, { useState } from "react";
import "./NumberSelector.css";

const NumberSelector = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
    setShowMessage(true);

    // Απόκρυψη του μηνύματος μετά από 2 δευτερόλεπτα
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const handleSubmClick = () => {
    alert("Η Δημιουργία Αγγελίας πραγματοποιήθηκε!");
  };

  const numbers = Array.from({ length: 40 }, (_, index) => index + 1); // Αριθμοί 1-40

  return (
    <div className="container">
      <h3>Χρόνια</h3>
      <div className="number-selector">
        {numbers.map((number) => (
          <div
            key={number}
            className={`number ${selectedNumber === number ? "selected" : ""}`}
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </div>
        ))}
      </div>

      {/* Μήνυμα επιτυχίας στα αριστερά */}
      {showMessage && (
        <div className="success-message">
          Η επιλογή σας καταχωρήθηκε επιτυχώς!
        </div>
      )}

      <button className="create-button" onClick={handleSubmClick}>
        Δημιουργία Αγγελίας
      </button>
    </div>
  );
};

export default NumberSelector;


