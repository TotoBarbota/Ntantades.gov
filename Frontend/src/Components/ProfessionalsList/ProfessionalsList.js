import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Button } from 'primereact/button';
import { useLocation, useNavigate } from 'react-router-dom';


import './ProfessionalsList.css';
import MeetingModal from "../MeetingModal/MeetingModal";

const ProfessionalsList = ({ users }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
        setIsModalOpen(false);
    };

    return (
        <div className="professionals-list">
            {users.length > 0 ? (
                users.map((user, index) => (
                    <div className='professional' key={index}>
                        <div className='left-items'>
                            <div className='first-row'>
                                <FaUserCircle />
                                <h3 onClick={() => { console.log("user isssss ", user); navigate(`${user.id}`, { state: { user } }); }}>{user.name}</h3>
                                <p>Ηλικιακή κατάταξη: {user.ageGroup}</p>
                            </div>
                            <div className='second-row'>
                                <div className='left-itms'>
                                    <p>Εμπειρία: {user.experience}</p>
                                    <p>Φύλο: {user.sex}</p>
                                    <p>Ώρες την εβδομάδα: ~{user.hoursPerWeek}</p>
                                </div>
                                <div className='right-itms'>
                                    <p>Περιγραφή: {user.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className='right-items'>
                                <p>Δήμος: {user.municipality}</p>
                                <Button label='Κλεισε ραντεβού' onClick={() => handleOpenModal(user)} />
                        </div>
                    </div>
                ))
            ) : (
                <p>No professionals match the selected filters.</p>
            )}
            <MeetingModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                returnUrl={location.pathname}
                selectedUser={selectedUser}
            />

        </div>
    );
};

export default ProfessionalsList;
