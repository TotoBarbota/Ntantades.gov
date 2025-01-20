import React from "react";

import "./NtantaEvaluationFinishedPopup.css"; // Add styles for the modal

const NtantaEvaluationFinishedPopup = ({ isOpen, onClose, closeAll }) => {
  if (!isOpen) return null; // Render nothing if the modal is closed

  return (
    <div className="evaluation-finished-overlay" onClick={onClose}>
      <div
        className="modal-content confirmation-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Η αξιολογηση σας καταγραφηκε επιτυχως!</h2>
        <p>
          Ευχαρστουμε που συμβάλλαται στην αξιολόγηση με σκοπο την καλυτερη
          λειτουργια του προγραμματος!
        </p>
        <button className="close-button" onClick={() => closeAll()}>
          Τέλος
        </button>
      </div>
    </div>
  );
};

export default NtantaEvaluationFinishedPopup;
