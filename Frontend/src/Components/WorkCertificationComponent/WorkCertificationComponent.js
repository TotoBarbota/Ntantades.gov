import React, { useState } from "react";
import "./WorkCertificationComponent.css";
import WorkConfirmPopup from "./Popups/WorkConfirmPopup/WorkConfirmPopup";
import ProblemPopup from "./Popups/ProblemPopup/ProblemPopup";

const WorkCertificationComponent = ({ data }) => {
    const { person, month, year , actions, status } = data;
    const [isWorkConfirmModalOpen, setIsWorkConfirmModalOpen] = useState(false);
    const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);

    // Open modal function
    const openWorkConfirmModal = () => {
        setIsWorkConfirmModalOpen(true);
    };

    // Close modal function
    const closeWorkConfirmModal = () => {
        setIsWorkConfirmModalOpen(false);
    };

    const openProblemModal = () => {
        setIsProblemModalOpen(true);
    };

    // Close modal function
    const closeProblemModal = () => {
        setIsProblemModalOpen(false);
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

                    <div className='basic-info'>

                        <p><b>Επιβεβαίωση εργασίας για: &nbsp;</b></p>
                        <p><b>{month} {year}</b></p>
                    </div>
                </div>
                <div className="card-actions">
                    {actions.map((action, index) => (
                        <button key={index} className={`action-button ${action}`}
                            onClick={action === "Επιβεβαίωση"
                                ? openWorkConfirmModal
                            : action === "Υπήρξε πρόβλημα"
                                    ? openProblemModal
                                    : undefined}>
                            {action}
                        </button>
                    ))}
                </div>
            </div>

            {isWorkConfirmModalOpen && (
                <WorkConfirmPopup onClose={closeWorkConfirmModal} month={month} year={year} />
            )}

            {isProblemModalOpen && (
                <ProblemPopup onClose={closeProblemModal} />
            )}
        </div>
    );
};

export default WorkCertificationComponent;
