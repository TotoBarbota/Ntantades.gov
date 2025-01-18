import React from "react";
import "./ApplicationWithProComponent.css";

const ApplicationWithProComponent = ({ data }) => {
    const { person, age, municipality, actions, status } = data;

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
                        <button key={index} className={`action-button ${action}`}>
                            {action}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApplicationWithProComponent;
