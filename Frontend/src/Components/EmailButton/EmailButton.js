import React, { useState } from "react";
import "./EmailButton.css";

const EmailButton = ({ props }) => {
  const { email, setEmail } = props;
  const [message, setMessage] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setMessage("Το Email καταχωρήθηκε επιτυχώς!");

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
        Email
      </label>
      <input
        id="name-input"
        className="custom-input"
        type="text"
        placeholder=""
        onKeyPress={handleKeyPress}
        onChange={(e) => setEmail(e.target.value)}
      />
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default EmailButton;
