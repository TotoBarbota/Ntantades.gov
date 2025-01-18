import React, { useState } from "react";
import "./Fathers_Name_Button.css";

const Fathers_Name_Button = ({ props }) => {
  const { father_name, setFather_name } = props;
  const [message, setMessage] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setMessage("Το Πατρώνυμο καταχωρήθηκε επιτυχώς!");

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
        Πατρώνυμο
      </label>
      <input
        id="name-input"
        className="custom-input"
        type="text"
        placeholder=""
        onKeyPress={handleKeyPress}
        onChange={(e) => setFather_name(e.target.value)}
      />
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Fathers_Name_Button;
