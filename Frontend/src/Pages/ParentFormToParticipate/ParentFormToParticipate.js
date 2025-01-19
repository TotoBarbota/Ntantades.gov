import { useEffect } from "react"

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import {useNavigate} from 'react-router-dom';
import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

import './ParentFormToParticipate.css'

function ParentFormToParticipate() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        parentName: "",
        contactNumber: "",
        email: "",
        childName: "",
        childAge: "",
        startDate: null,
        availability: [],
        meetsRequirements: false, // New property
        comments: "",
    });

    const [errors, setErrors] = useState({});
    const availabilityOptions = ["Morning", "Afternoon", "Evening", "Weekend"];
    const validate = () => {
        const newErrors = {};
        if (!formData.parentName) newErrors.parentName = "Parent name is required.";
        if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.childName) newErrors.childName = "Child name is required.";
        if (!formData.childAge || isNaN(formData.childAge)) newErrors.childAge = "Valid child age is required.";
        if (!formData.meetsRequirements) {
            newErrors.meetsRequirements = "You must confirm you meet the program's requirements.";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully:", formData);
            alert("Form submitted successfully!");
            // Reset the form
            setFormData({
                parentName: "",
                contactNumber: "",
                email: "",
                childName: "",
                childAge: "",
                startDate: null,
                availability: [],
                nannyPreferences: "",
                comments: "",
            });
            navigate(-1);
        } else {
            setErrors(validationErrors);
        }
    };

    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    useDocumentTitle('Αίτηση για Συμμετοχή στο πρόγραμμα');

    return (
        <div className="parent-form-to-participate">
            <NavBar />
            <div className='parent-form-to-participate-main-container'>
                <div className='aitisi-breadcrumb'><Breadcrumb /></div>
                (
                <div className="parent-nanny-form">
                    <h2>Αίτηση για το πρόγραμμα Νταντάδες της γειτονιάς</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="p-field">
                            <label htmlFor="parentName">Ονοματεπώνυμο γονέα που κάνει την δήλωση</label>
                            <InputText
                                id="parentName"
                                value={formData.parentName}
                                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                className={errors.parentName ? "p-invalid" : ""}
                            />
                            {errors.parentName && <small className="p-error">{errors.parentName}</small>}
                        </div>

                        <div className="p-field">
                            <label htmlFor="contactNumber">Αριθμός επικοινωνίας</label>
                            <InputText
                                id="contactNumber"
                                value={formData.contactNumber}
                                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                                className={errors.contactNumber ? "p-invalid" : ""}
                            />
                            {errors.contactNumber && <small className="p-error">{errors.contactNumber}</small>}
                        </div>

                        <div className="p-field">
                            <label htmlFor="email">Email</label>
                            <InputText
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={errors.email ? "p-invalid" : ""}
                            />
                            {errors.email && <small className="p-error">{errors.email}</small>}
                        </div>

                        <div className="p-field">
                            <label htmlFor="childName">Ονοματεπώνυμο παιδιού</label>
                            <InputText
                                id="childName"
                                value={formData.childName}
                                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                className={errors.childName ? "p-invalid" : ""}
                            />
                            {errors.childName && <small className="p-error">{errors.childName}</small>}
                        </div>

                        <div className="p-field">
                            <label htmlFor="childAge">Ηλικία παιδιού</label>
                            <InputText
                                id="childAge"
                                value={formData.childAge}
                                onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                                className={errors.childAge ? "p-invalid" : ""}
                            />
                            {errors.childAge && <small className="p-error">{errors.childAge}</small>}
                        </div>

                        <div className="p-field">
                            <label htmlFor="comments">Επισυμάνσεις</label>
                            <InputTextarea
                                id="comments"
                                value={formData.comments}
                                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                                rows={3}
                            />
                        </div>

                        <div className="p-field-checkbox">
                            <input
                                type="checkbox"
                                id="programRequirements"
                                checked={formData.meetsRequirements || false}
                                onChange={(e) => setFormData({ ...formData, meetsRequirements: e.target.checked })}
                            />
                            <label htmlFor="programRequirements">
                                *Πληρώ όλες τις προϋποθέσεις του προγράμματος.
                            </label>
                            {errors.meetsRequirements && <small className="p-error">{errors.meetsRequirements}</small>}
                        </div>

                        <Button label="Submit Application" icon="pi pi-check" type="submit" onClick={handleSubmit} />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ParentFormToParticipate;
