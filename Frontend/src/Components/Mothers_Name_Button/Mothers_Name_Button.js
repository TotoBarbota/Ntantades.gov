import React, { useState } from "react";
import "./Mothers_Name_Button.css";

const Mothers_Name_Button = ({ props }) => {
  const { mother_name, setMother_name } = props;
  const [message, setMessage] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setMessage("Το Μητρώνυμο καταχωρήθηκε επιτυχώς!");

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
        Μητρώνυμο
      </label>
      <input
        id="name-input"
        className="custom-input"
        type="text"
        placeholder=""
        onKeyPress={handleKeyPress}
        onChange={(e) => setMother_name(e.target.value)}
      />
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Mothers_Name_Button;
