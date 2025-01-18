import React, { useState } from "react";
import "./MeetingModal.css"; // Add styles for the modal
import CalendarModal from "../CalendarModal/CalendarModal";

const MeetingModal = ({ isOpen, onClose, returnUrl, selectedUser }) => {
  const [meetingType, setMeetingType] = useState("");
  const [place, setPlace] = useState("");
  const [location, setLocation] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [link, setLink] = useState("");

  if (!isOpen) return null; // Render nothing if the modal is closed

  const handleNext = () => {
    console.log("Meeting Type:", meetingType);
    if (meetingType === "in-person") {
      console.log("Place:", place);
      console.log("Location:", location);
    }
    setIsCalendarOpen(true);
  };
  const handleMeetingTypeChange = (e) => {
    setMeetingType(e.target.value);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      {" "}
      {/* Clicking the overlay will close the modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* Prevent overlay click from closing the modal */}
        <h2>Πώς θα θέλατε να πραγματοποιηθεί η συνάντηση;</h2>
        <p>
          Αν επιλέξετε "δια ζώσης" αναγράψτε την διεύθυνση και το μέρος που
          θέλετε να γίνει η συνάντηση.
        </p>
        {selectedUser && <p>Professional: {selectedUser.name}</p>}{" "}
        {/* Optional: Display selected user's name */}
        <div className="options">
          <label>
            <input
              type="radio"
              name="meeting-type"
              value="online"
              checked={meetingType === "online"}
              onChange={handleMeetingTypeChange}
            />
            Διαδικτυακά
          </label>
          <label>
            <input
              type="radio"
              name="meeting-type"
              value="in-person"
              checked={meetingType === "in-person"}
              onChange={handleMeetingTypeChange}
            />
            Δια ζώσης (από κοντά)
          </label>
        </div>
        {/* Conditionally render additional input fields if "in-person" is selected */}
        {meetingType === "in-person" && (
          <div className="extra-fields">
            <div>
              <label>Μέρος συνάντησης:</label>
              <input
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Π.χ. Καφετέρια"
              />
            </div>
            <div>
              <label>Διεύθυνση συνάντησης:</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Π.χ. Οδός Αριστοτέλους 15"
              />
            </div>
          </div>
        )}
        <div className="buttons">
          <div className="buttons">
            <button className="close-button" onClick={onClose}>
              Κλείσιμο
            </button>
            <button className="next-button" onClick={handleNext}>
              {" "}
              Επόμενο
            </button>
          </div>
        </div>
      </div>
      {isCalendarOpen && (
        <CalendarModal
          isOpen={isCalendarOpen}
          onClose={() => setIsCalendarOpen(false)} // Close calendar modal
          returnUrl={returnUrl}
          closeAll={onClose}
          selectedUser={selectedUser} // Pass selected user
          place={place} // Pass place
          location={location} // Pass location
        />
      )}
    </div>
  );
};

export default MeetingModal;
