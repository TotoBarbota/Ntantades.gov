import React, { useState } from "react";
import "./Last_Name_Button.css";

const Last_Name_Button = ({ props }) => {
  const { lastName, setLastName } = props;

  const [message, setMessage] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setMessage("Το επίθετο καταχωρήθηκε επιτυχώς!");

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
        Επίθετο
      </label>
      <input
        id="name-input"
        className="custom-input"
        type="text"
        placeholder=""
        onKeyPress={handleKeyPress}
        onChange={(e) => setLastName(e.target.value)}
      />
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Last_Name_Button;
