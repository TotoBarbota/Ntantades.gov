import React, { useState } from "react";
import './CalendarModal.css'; 

const CalendarModal = ({ isOpen, onClose, selectedUser }) => {
    const [selectedDate, setSelectedDate] = useState(""); 

    if (!isOpen) return null;

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value); 
    };

    const handleConfirm = () => {
        console.log("Selected Date:", selectedDate);
        console.log("Selected User:", selectedUser.name);
        onClose(); 
    };

    return (
        <div className="calendar-modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Επιλέξτε ημερομηνία συνάντησης</h2>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="date-picker"
                />
                <div className="buttons">
                    <button className="close-button" onClick={onClose}>Κλείσιμο</button>
                    <button className="confirm-button" onClick={handleConfirm}>Επιβεβαίωση</button>
                </div>
            </div>
        </div>
    );
};

export default CalendarModal;

