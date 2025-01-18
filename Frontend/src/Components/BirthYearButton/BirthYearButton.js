import React, { useState } from "react";
import "./BirthYearButton.css";

const BirthYearButton = ({ props }) => {
  const { age, setAge } = props;
  // console.log("age", props);
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setMessage(" Η Ημερομηνία Γέννησης καταχωρήθηκε με επιτυχία!");

      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  const handleIconClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleYearSelect = (selectedYear) => {
    setYear(selectedYear);
    setAge(new Date().getFullYear() - selectedYear);
    setShowCalendar(false);
    setMessage(" Η Ημερομηνία Γέννησης καταχωρήθηκε επιτυχώς!");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="birth-year-container">
      <label htmlFor="birth-year-input" className="input-label">
        Ημερομηνία Γέννησης
      </label>
      <div className="input-wrapper">
        <input
          id="birth-year-input"
          className="custom-input"
          type="text"
          placeholder="----"
          value={year}
          onKeyPress={handleKeyPress}
          readOnly
        />
        <button className="calendar-icon" onClick={handleIconClick}>
          ▼
        </button>
        {showCalendar && (
          <div className="year-picker">
            {[...Array(101)].map((_, i) => {
              const yearOption = new Date().getFullYear() - i;
              return (
                <div
                  key={yearOption}
                  className="year-option"
                  onClick={() => handleYearSelect(yearOption)}
                >
                  {yearOption}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default BirthYearButton;
