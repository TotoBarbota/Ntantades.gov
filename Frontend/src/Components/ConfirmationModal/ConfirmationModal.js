import React from "react";
import { useNavigate } from "react-router-dom";

import "./ConfirmationModal.css"; // Add styles for the modal

const ConfirmationModal = ({ isOpen, onClose, returnUrl, closeAll }) => {
    const navigate = useNavigate();
    if (!isOpen) return null; // Render nothing if the modal is closed

    return (
        <div className="confirmation-modal-overlay" onClick={onClose}>
            <div className="modal-content confirmation-modal" onClick={(e) => e.stopPropagation()}>
                <h2>Το αίτημα για συνάντηση πραγματοποιήθηκε!</h2>
                <p>
                    Όταν ο εργαζόμενος αποδεχθεί, θα ειδοποιηθείτε με μήνυμα στο κινητό που
                    έχετε καταχωρήσει στην υπηρεσία του gov.gr
                </p>
                <button className="close-button" onClick={() => closeAll()}>Τέλος</button>
            </div>
        </div>
    );
};

export default ConfirmationModal;
