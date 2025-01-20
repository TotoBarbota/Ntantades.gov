import React from "react";

import "./NtantaCompletedExtendAgreementPopup.css";

const NtantaCompletedExtendAgreementPopup = ({ onClose }) => {
  return (
    <div className="completed-extended-agreement-overlay" onClick={onClose}>
      <div
        className="modal-content confirmation-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Το αίτηση για επέκταση πραγματοποιήθηκε επιτυχώς!</h2>
        <p>
          Θα ειδοποιηθείται όταν ο επαγγελματίας απαντήσει στην αίτηση μέσω
          μηνύματος <br />
          στο κινητό που έχετε δηλώσει στο gov.gr
        </p>
        <button className="close-button" onClick={() => onClose()}>
          Τέλος
        </button>
      </div>
    </div>
  );
};

export default NtantaCompletedExtendAgreementPopup;
