import React from "react";
import { useNavigate } from 'react-router-dom';

import "./AppointmentCard.css";
import { Routes } from "../../routes";

const AppointmentCard = ({ data }) => {
    const { status, person, date, location, actions, statusNum } = data;
    const navigate = useNavigate();

    const handleFormRequest = (person) => {
        console.log("Open form for professionals");
        const state = { receiver: person, isLocked: false, from: localStorage.getItem('name'), date: "Επιλέξτε ημερομηνία", hoursPerW: 0, days: [] }
        navigate(Routes.ParentFormToProfessional, { state: state });
    }

    const handleActionClick = (action, person) => {
        if (action === "Αίτημα συνεργασίας") {
            handleFormRequest(person);
        } else {
            console.log(`No handler for action: ${action}`);
        }
    };

    return (
        <div className={`appointment-card ${statusNum}`}>
            <div className='card-status'>{status}</div>
            <div className="card-content">
                <div className="person-info">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Person"
                        className="person-avatar"
                    />
                    <div className='basic-info'>
                        <p>{person}</p>
                        <p>{date}</p>
                        <p>{location}</p>
                    </div>
                </div>
                <div className="card-actions">
                    {actions.map((action, index) => (
                        <button key={index} className={`action-button ${action}`} onClick={() => handleActionClick(action, person)}>
                            {action}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
