import React from "react";
import "./AppointmentCard.css";

const AppointmentCard = ({ data }) => {
    const { status, person, date, location, actions, statusNum } = data;

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
                        <button key={index} className={`action-button ${action}`}>
                            {action}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
