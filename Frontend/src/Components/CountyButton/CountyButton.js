import React, { useState } from "react";
import "./CountyButton.css";

const CountyButton = ({ props }) => {
  const { region, setRegion } = props;
  const [message, setMessage] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setMessage("Ο Νομός καταχωρήθηκε επιτυχώς!");

      // Εξαφάνιση του μηνύματος μετά από 5 δευτερόλεπτα
      setTimeout(() => {
        setMessage("");
      }, 5000); // 5 δευτερόλεπτα
    }
  };

  return (
    <div className="input-container left-aligned">
      {" "}
      {/* Χρησιμοποίησε left-aligned ή right-aligned */}
      <label htmlFor="name-input" className="input-label">
        Νομός
      </label>
      <input
        id="name-input"
        className="custom-input"
        type="text"
        placeholder=""
        onKeyPress={handleKeyPress}
        onChange={(e) => setRegion(e.target.value)}
      />
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default CountyButton;
