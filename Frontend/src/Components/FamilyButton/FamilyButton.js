import React, { useState } from "react";
import "./FamilyButton.css";

const FamilyButton = ({ props }) => {
  const { family_state, setFamily_state } = props;
  const [message, setMessage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFamilySelect = (selectedGender) => {
    setFamily_state(selectedGender);
    setShowDropdown(false);
    setMessage("Το φύλο καταχωρήθηκε επιτυχώς!");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="gender-button-container">
      <label htmlFor="gender-input" className="input-label">
        Οικογενειακή Κατάσταση
      </label>
      <div className="input-wrapper">
        <input
          id="gender-input"
          className="custom-input"
          type="text"
          placeholder="Επιλέξτε"
          value={family_state}
          readOnly
        />
        <button className="dropdown-icon" onClick={handleIconClick}>
          ▼
        </button>
        {showDropdown && (
          <div className="gender-dropdown">
            {["Άγαμος/η", "Έγγαμος/η"].map((option) => (
              <div
                key={option}
                className="dropdown-item"
                onClick={() => handleFamilySelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default FamilyButton;
