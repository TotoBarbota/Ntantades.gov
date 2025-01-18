import React, { useState } from "react";
import "./ProblemPopup.css"; // Add styles for the modal
import ConfirmProblemPopup from "./ConfirmProblemPopup";
import { InputTextarea } from 'primereact/inputtextarea';


const ProblemPopup = ({ onClose }) => {
    const [isConfirmProblemOpen, setIsConfirmProblemOpen] = useState(false);


    const newCloseAll = () => {
        setIsConfirmProblemOpen(false);
        onClose();
    };

    const closeModal = () => {
        setIsConfirmProblemOpen(false);
    };

    const openModal = () => {
        setIsConfirmProblemOpen(true);
    };

    return (
        <div className="problem-popup-overlay" onClick={onClose}>
            <div className="modal-content confirmation-modal" onClick={(e) => e.stopPropagation()}>
                <h2>Παρακαλω πειτε μας τι προβλημα υπηρξε.</h2>
                <p>
                    Μετά την καταγραφη του προβληματος , θα γινει ο απαραιτητος ελεγχος και θα <br />
                    ενημερωθειτε ατο κινητο που εχετε καταχωρησει στην πλατφορμα του gov.gr
                </p>
                <div className='input'>
                    <InputTextarea
                        id="myTextarea"
                        rows={5}
                        cols={30}
                        placeholder="Enter your text here"
                    />
                    <button className="continue-button" onClick={() => openModal()}>Αποστολή προβλήματος</button>
                </div>
            </div>

            {isConfirmProblemOpen && (
                <ConfirmProblemPopup
                    isOpen={isConfirmProblemOpen}
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

export default ProblemPopup;
