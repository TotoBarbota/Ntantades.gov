import React, { useState } from "react";
import "./NtantaExtendAgreementPopup.css"; // Add styles for the modal
import NtantaCompletedExtendAgreementPopup from "./NtantaCompletedExtendAgreementPopup";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

const NtantaExtendAgreementPopup = ({ onClose, props }) => {
  const {
    status,
    state,
    start_date,
    ntanta_user_id,
    parent_user_id,
    end_date,
    waiting,
  } = props;

  const [selectedDuration, setSelectedDuration] = useState(""); // State for the selected duration
  const [isCompletedExtendOpen, setIsCompletedExtendOpen] = useState(false);

  const newCloseAll = () => {
    setIsCompletedExtendOpen(false);
    onClose();
  };

  // Close modal function
  const closeModal = () => {
    setIsCompletedExtendOpen(false);
  };

  const handleChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  const handleSubmit = () => {
    if (!selectedDuration) {
      alert("Παρακαλώ επιλέξτε χρονικό διάστημα!");
      return;
    }
    const date = new Date();
    date.setMonth(date.getMonth() + parseInt(selectedDuration));
    const id = props.id;
    updateDoc(doc(db, "agreements", id), {
      end_date: date,
    })
      .then(() => {
        console.log("Agreement end date updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating agreement end date: ", error);
      });

    console.log(`Selected Duration: ${selectedDuration} μήνες`);
    setIsCompletedExtendOpen(true);
  };

  return (
    <div className="extend-agreement-overlay" onClick={onClose}>
      <div
        className="modal-content confirmation-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Αίτημα επέκτασης συμφωνητικού</h2>
        <p>
          Παρακαλώ συμπληρώστε το χρονικό διάστημα για το οποίο θέλετε να
          επεκτείνετε το συμφωνητικό
        </p>
        <div className="months-selector">
          <label htmlFor="duration" className="duration-label">
            Χρονικό διάστημα
          </label>
          <select
            id="duration"
            className="duration-select"
            value={selectedDuration}
            onChange={handleChange}
          >
            <option value="" disabled>
              Επιλέξτε μήνες
            </option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} μήνες
              </option>
            ))}
          </select>
        </div>

        <button className="continue-button" onClick={handleSubmit}>
          Συνέχεια
        </button>
      </div>

      {isCompletedExtendOpen && (
        <NtantaCompletedExtendAgreementPopup
          isOpen={isCompletedExtendOpen}
          onClose={() => {
            closeModal();
            onClose();
          }}
          closeAll={newCloseAll}
        />
      )}
    </div>
  );
};

export default NtantaExtendAgreementPopup;
