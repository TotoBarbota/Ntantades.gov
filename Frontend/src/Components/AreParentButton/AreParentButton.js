import React, { useState } from "react";
import "./AreParentButton.css";

const AreParentButton = ({ props }) => {
  const { isParent, setIsParent } = props;
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleGenderSelect = (selectedGender) => {
    setIsParent(selectedGender === "Ναι");
    setGender(selectedGender);
    setShowDropdown(false);
    setMessage("Το φύλο καταχωρήθηκε επιτυχώς!");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="gender-button-container">
      <label htmlFor="gender-input" className="input-label">
        Είστε Γονέας
      </label>
      <div className="input-wrapper">
        <input
          id="gender-input"
          className="custom-input"
          type="text"
          placeholder="Επιλέξτε"
          value={gender}
          readOnly
        />
        <button className="dropdown-icon" onClick={handleIconClick}>
          ▼
        </button>
        {showDropdown && (
          <div className="gender-dropdown">
            {["Ναι", "Όχι"].map((option) => (
              <div
                key={option}
                className="dropdown-item"
                onClick={() => handleGenderSelect(option)}
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

export default AreParentButton;
