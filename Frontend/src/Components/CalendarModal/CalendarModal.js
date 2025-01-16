import React, { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import "./CalendarModal.css";

const CalendarModal = ({ isOpen, onClose, returnUrl, closeAll, selectedUser }) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState(""); // State for time selection
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // State for error message

    if (!isOpen) return null;

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

    // Validate and confirm
    const handleConfirm = () => {
        if (!selectedDate || !selectedTime) {
            setErrorMessage("Παρακαλώ επιλέξτε και ημερομηνία και ώρα."); // Show error message
            return;
        }
        console.log("Selected Date:", selectedDate);
        console.log("Selected Time:", selectedTime);
        console.log("Selected User:", selectedUser);
        console.log("Return Url:", returnUrl);
        setIsConfirmationOpen(true); // Open confirmation modal
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
                    min={new Date().toISOString().split("T")[0]} // Allow dates only from today onwards
                />
                <input
                    type="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    className="time-picker"
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
                <div className="buttons">
                    <button className="close-button" onClick={onClose}>Κλείσιμο</button>
                    <button className="confirm-button" onClick={handleConfirm}>Επιβεβαίωση</button>
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
