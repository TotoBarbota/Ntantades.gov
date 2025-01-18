import React, { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import "./CalendarModal.css";
import { db } from "../../config/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

const CalendarModal = ({
  isOpen,
  onClose,
  returnUrl,
  closeAll,
  selectedUser,
  place,
  location,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(""); // State for time selection
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const authContext = useAuth();
  if (!isOpen) return null;

  const meetingsRef = collection(db, "meetings");

  const handleConfirm = async () => {
    if (!selectedDate || !selectedTime) {
      setErrorMessage("Παρακαλώ επιλέξτε και ημερομηνία και ώρα.");
      return;
    }
    const dateTimeString = `${selectedDate}T${selectedTime}`; // ISO format
    const meetingDate = new Date(dateTimeString);
    const isOnline = place === undefined && location === undefined;
    await setDoc(doc(meetingsRef), {
      type: isOnline ? "online" : "in-person",
      ntanta_user_id: selectedUser.id,
      parent_user_id: authContext.userID,
      state: 3,
      meet_date: meetingDate,
      link: isOnline ? "https://www.example.com" : "",
      place: isOnline ? "" : place,
      location: isOnline ? "" : location,
    });
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
    console.log("Selected User:", selectedUser);
    console.log("Return Url:", returnUrl);
    setIsConfirmationOpen(true);
  };
  // Format date
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  // Handle date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setErrorMessage(""); // Clear error when a valid date is selected
  };

  // Handle time change
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    setErrorMessage(""); // Clear error when a valid time is selected
  };

  const newCloseAll = () => {
    onClose();
    closeAll();
  };

  return (
    <div className="calendar-modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Επιλέξτε ημερομηνία και ώρα συνάντησης</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="date-picker"
          min={new Date()} // Allow dates only from today onwards
        />
        <input
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
          className="time-picker"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        {/* Display error message */}
        <div className="buttons">
          <button className="close-button" onClick={onClose}>
            Κλείσιμο
          </button>
          <button className="confirm-button" onClick={handleConfirm}>
            Επιβεβαίωση
          </button>
        </div>
      </div>

      {isConfirmationOpen && (
        <ConfirmationModal
          isOpen={isConfirmationOpen}
          onClose={() => {
            setIsConfirmationOpen(false);
            onClose();
          }}
          closeAll={newCloseAll}
          returnUrl={returnUrl}
          selectedUser={selectedUser}
        />
      )}
    </div>
  );
};

export default CalendarModal;
