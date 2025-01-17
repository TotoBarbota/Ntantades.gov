import React, { useState } from "react";
import "./HostButton.css";

const HostButton = () => {
  const [selectedHost, setSelectedHost] = useState(""); // Επιλεγμένο φύλο
  const [message, setMessage] = useState(""); // Μήνυμα επιτυχίας
  const [showDropdown, setShowDropdown] = useState(false); // Εμφάνιση dropdown

  const handleHostSelect = (host) => {
    setSelectedHost(host); // Καταχώρηση φύλου
    setShowDropdown(false); // Κλείσιμο dropdown
    setMessage("Η Επιλογή σας καταχωρήθηκε επιτυχώς!"); // Εμφάνιση μηνύματος
    setTimeout(() => {
      setMessage(""); // Απόκρυψη μηνύματος μετά από 5 δευτερόλεπτα
    }, 5000);
  };

  return (
    <div className="host-button-container">
      <label htmlFor="host-button-input" className="input-label">
        Υπάρχει Δυνατότητα Φιλοξενίας στην Οικεία σας ;
      </label>
      <div className="input-wrapper">
        <button
          id="host-button-input"
          className="custom-input"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedHost || "Επιλέξτε"}
          <span className="dropdown-icon">▼</span>
        </button>
        {showDropdown && (
          <div className="dropdown">
            <div
              className="dropdown-item"
              onClick={() => handleHostSelect("Ναι")}
            >
              Ναι
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleHostSelect("Όχι")}
            >
              Όχι
            </div>
          </div>
        )}
      </div>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default HostButton;