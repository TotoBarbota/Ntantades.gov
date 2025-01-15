import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";
import { FaUserCircle } from "react-icons/fa";
import { Button } from 'primereact/button';



import './ProfileCard.css';

const ProfileCard = ({ user }) => {
    if (!user) {
        return <p>No user data available!</p>;
    }

    const placeholderImage = "https://picsum.photos/100";
    const imageUrl = placeholderImage;

    return (
        <div className="profile-card">
            <div className="profile-card-left">
                <div className="profile-avatar">
                    {/* Placeholder for avatar */}
                    <FaUserCircle />
                    {/*<img src="/placeholder-avatar.png" alt="Avatar" />*/}
                </div>
                <div className="profile-details">
                    <h3>{user.name}</h3>
                    <p>{user.age} χρονών</p>
                    <p>📍 {user.municipality}</p>
                    <a href={user.bio} target="_blank" rel="noopener noreferrer">
                        Βιογραφικό: {user.bio && "Προβολή"}
                    </a>
                </div>
            </div>
            <div className="profile-card-right">
                <button className="schedule-button">
                    Κλείσε ραντεβού
                </button>
                <p className='first-p'><strong>Περιγραφή:</strong> {user.description}</p>
                <p><strong>Εκπαίδευση:</strong> {user.education}</p>
                <p><strong>Προϋπηρεσία:</strong> {user.experience}</p>
                <p><strong>Προτιμώμενες ημέρες και ώρες εργασίας:</strong></p>
                <ul>
                    {user.availability.map(({ day, hours }) => (
                        <li key={day}>
                            <strong>{day}:</strong> {hours || "Διαθέσιμος"}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default ProfileCard;
