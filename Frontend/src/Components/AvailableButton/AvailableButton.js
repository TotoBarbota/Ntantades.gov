import React, { useState } from "react";
import "./AvailableButton.css";

const AvailableButton = ({ props }) => {
  const {
    available_days,
    available_hours,
    setAvailable_days,
    setAvailable_hours,
  } = props;

  const [currentDay, setCurrentDay] = useState("");

  const days = [
    "Δευτέρα",
    "Τρίτη",
    "Τετάρτη",
    "Πέμπτη",
    "Παρασκευή",
    "Σάββατο",
    "Κυριακή",
  ];
  const times = [
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const handleDayClick = (day) => {
    setCurrentDay(day);
    if (!available_days.includes(day)) {
      setAvailable_days([...available_days, day]);
    }
  };

  const handleTimeChange = (time, allDay = false) => {
    setAvailable_hours((prev) => ({
      ...prev,
      [currentDay]: allDay
        ? ["Όλη μέρα διαθέσιμος/η"]
        : [...(prev[currentDay] || []), time],
    }));
  };

  const clearSelections = () => {
    setAvailable_days([]);
    setAvailable_hours({});
    setCurrentDay("");
  };

  return (
    <div className="day-buttons-container">
      {/* Επιλογή ημέρας */}
      <div className="day-buttons">
        {days.map((day, index) => (
          <button
            key={index}
            className="day-button"
            onClick={() => handleDayClick(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Επιλογή ώρας */}
      {currentDay && (
        <div className="time-selector">
          {times.map((time, index) => (
            <label key={index}>
              <input
                type="checkbox"
                onChange={() => handleTimeChange(time)}
                checked={available_hours[currentDay]?.includes(time) || false}
              />
              {time}
            </label>
          ))}
          <button onClick={() => handleTimeChange(null, true)}>
            Όλη μέρα διαθέσιμος/η
          </button>
        </div>
      )}

      {/* Περίληψη επιλογών */}
      {Object.keys(available_hours).length > 0 && (
        <div className="selection-summary">
          <table>
            <thead>
              <tr>
                <th>Ημέρες:</th>
                <th>Ώρες:</th>
              </tr>
            </thead>
            <tbody>
              {available_days.map((day, index) => (
                <tr key={index}>
                  <td>{day}</td>
                  <td>{available_hours[day]?.join(", ") || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="buttons">
            <button className="cancel" onClick={clearSelections}>
              Ακύρωση
            </button>
            <button className="edit">Επεξεργασία</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableButton;
