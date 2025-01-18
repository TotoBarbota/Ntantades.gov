import React, { useState } from "react";
import "./StreetNumberButton.css";

const StreetNumberButton = ({ props }) => {
  const { streetNumber, setStreetNumber } = props;
  const [message, setMessage] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setMessage("Ο Αριθμός καταχωρήθηκε επιτυχώς!");

      // Εξαφάνιση του μηνύματος μετά από 5 δευτερόλεπτα
      setTimeout(() => {
        setMessage("");
      }, 5000); // 5 δευτερόλεπτα
    }
  };

  return (
    <div className="input-container right-aligned">
      {" "}
      {/* Χρησιμοποίησε left-aligned ή right-aligned */}
      <label htmlFor="name-input" className="input-label">
        Αριθμός
      </label>
      <input
        id="name-input"
        className="custom-input"
        type="text"
        placeholder=""
        onKeyPress={handleKeyPress}
        onChange={(e) => setStreetNumber(e.target.value)}
      />
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default StreetNumberButton;
