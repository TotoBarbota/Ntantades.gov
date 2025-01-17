import React, { useState } from "react";
import "./AgreementsComponent.css";
import EvaluationPopup from "./EvaluationPopup";
import CompletedAgreementPopup from "./CompletedAgreementPopup/CompletedAgreementPopup";
import ExtendAgreementPopup from "./ExtendAgreementPopup/ExtendAgreementPopup";

const AgreementsComponent = ({ data }) => {
    const { person, startDate, finishDate, actions, status, waiting } = data;

    // Modal state
    const [isAgreementModalOpen, setIsAgreementModalOpen] = useState(false);
    const [isCompletedAgreementModalOpen, setIsCompletedAgreementModalOpen] = useState(false);
    const [isExtendAgreementModalOpen, setIsExtendAgreementModalOpen] = useState(false);

    // Open modal function
    const openAgreementModal = () => {
        setIsAgreementModalOpen(true);
    };

    // Close modal function
    const closeAgreementModal = () => {
        setIsAgreementModalOpen(false);
    };

    const openCompletedAgreementModal = () => {
        setIsCompletedAgreementModalOpen(true);
    };

    // Close modal function
    const closeCompletedAgreementModal = () => {
        setIsCompletedAgreementModalOpen(false);
    };

    const openExtendAgreementModal = () => {
        setIsExtendAgreementModalOpen(true);
    };

    // Close modal function
    const closeExtendAgreementModal = () => {
        setIsExtendAgreementModalOpen(false);
    };

    return (
        <div className={`agreement-card ${status}`}>
            <div className="card-content">
                <div className="person-info">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Person"
                        className="person-avatar"
                    />
                    <p>{person}</p>

                    <div className="basic-info">
                        <div className="first-line">
                            <p><b>Ημερομηνία έναρξης</b></p>
                            <p>{startDate}</p>
                        </div>
                        <div className="second-line">
                            <p><b>Ημερομηνία λήξης</b></p>
                            <p>{finishDate}</p>
                        </div>
                        {waiting === "true" && (
                            <div className='on-hold'> Σε αναμονή</div>
                        )}
                    </div>
                </div>
                <div className="card-actions">
                    {actions.map((action, index) => (
                        <button
                            key={index}
                            className={`action-button ${action}`}
                            onClick={action === "Αξιολόγηση"
                                ? openAgreementModal
                                : action === "Επιβεβαίωση ολοκλήρωσης"
                                    ? openCompletedAgreementModal
                                    : action === "Επέκταση Συνεργασίας"
                                        ? openExtendAgreementModal
                                    : undefined}
                        >
                            {action}
                        </button>
                    ))}
                </div>
            </div>

            {isAgreementModalOpen && (
                <EvaluationPopup onClose={closeAgreementModal} />
            )}

            {isCompletedAgreementModalOpen && (
                <CompletedAgreementPopup onClose={closeCompletedAgreementModal} />
            )}

            {isExtendAgreementModalOpen && (
                <ExtendAgreementPopup onClose={closeExtendAgreementModal} />
            )}

            
        </div>
    );
};

export default AgreementsComponent;
