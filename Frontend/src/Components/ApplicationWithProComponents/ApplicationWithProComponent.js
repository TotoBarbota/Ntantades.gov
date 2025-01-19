import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./ApplicationWithProComponent.css";
import { Routes } from "../../routes";

const ApplicationWithProComponent = ({ data }) => {
    const { person, age, date, hours, days, municipality, actions, status } = data;
    const navigate = useNavigate();

    const handleEdit = () => {
        const state = { receiver: person, isLocked: false, from: localStorage.getItem('name'), date: date, hoursPerW: hours, days: days }
        navigate(Routes.ParentFormToProfessional, { state: state });
    }

    const handleSee = () => {
        const state = { receiver: person, isLocked: true, from: localStorage.getItem('name'), date: date, hoursPerW: hours, days: days }
        navigate(Routes.ParentFormToProfessional, { state: state });
    }

    return (
        <div className={`application-card ${status}`}>
            <div className="card-content">
                <div className="person-info">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Person"
                        className="person-avatar"
                    />
                    <p>{person}</p>

                    <div className='basic-info'>
                        <p><b>Βασικές πληροφορίες</b></p>
                        <p>{age} ετών</p>
                        <p>Περιοχή: {municipality}</p>
                    </div>
                </div>
                <div className="card-actions">
                    {actions.map((action, index) => (
                        <button key={index} className={`action-button ${action}`} onClick={action === "Ανασκόπηση-Επεξεργασία" ? handleEdit : action === "Ακύρωση" ? handleEdit : action === "Ανασκόπηση" ? handleSee :  undefined}>
                            {action}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApplicationWithProComponent;
