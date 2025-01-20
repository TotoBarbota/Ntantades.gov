import React from "react";

import "./NtantaCompletedAgreementPopup.css"; // Add styles for the modal

const NtantaCompletedAgreementPopup = ({ onClose }) => {
  return (
    <div className="completed-agreement-overlay" onClick={onClose}>
      <div
        className="modal-content confirmation-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Το συμφωνητικό ολοκληρώθηκε με επιτυχία!</h2>
        <p>
          Μπορείτε αν επεκτείνετε την συμφωνία και να αξιολογήσετε το
          επαγγελματία <br />
          με το που κλείσετε αυτό το παράθυρο
        </p>
        <button className="close-button" onClick={() => onClose()}>
          Τέλος
        </button>
      </div>
    </div>
  );
};

export default NtantaCompletedAgreementPopup;
