import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";
import { FaUserCircle } from "react-icons/fa";
import { Button } from 'primereact/button';
import { useLocation, useNavigate } from 'react-router-dom';



import './ProfessionalsList.css';
import { Routes } from "../../routes";

const ProfessionalsList = ({ users }) => {
    const navigate = useNavigate();

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
                            <Button label='Κλεισε ραντεβού' />
                        </div>
                    </div>
                ))
            ) : (
                <p>No professionals match the selected filters.</p>
            )}
        </div>
    );
};

export default ProfessionalsList;
