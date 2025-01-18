import React, { useState } from "react";
import "./IDButton.css";

const IDButton = () => {
  const [message, setMessage] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setMessage("Ο Αριθμός Ταυτότητας καταχωρήθηκε επιτυχώς!");
      
      // Εξαφάνιση του μηνύματος μετά από 5 δευτερόλεπτα
      setTimeout(() => {
        setMessage("");
      }, 5000); // 5 δευτερόλεπτα
    }
  };

  return (
    <div className="input-container left-aligned"> {/* Χρησιμοποίησε left-aligned ή right-aligned */}
      <label htmlFor="name-input" className="input-label">Αριθμός Ταυτότητας</label>
      <input
        id="name-input"
        className="custom-input"
        type="text"
        placeholder=""
        onKeyPress={handleKeyPress}
      />
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default IDButton;