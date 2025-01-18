import { useEffect, useState } from "react"

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";


import './ParentFormToProfessional.css'

function ParentFormToProfessional() {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location || {};
    const [formData, setFormData] = useState({
        from: "",
        to: "",
        duration: null,
        hoursPerWeek: null,
        workingDays: [],
    });

    const daysOfWeek = [
        { label: "Δευτέρα", value: "Monday" },
        { label: "Τρίτη", value: "Tuesday" },
        { label: "Τετάρτη", value: "Wednesday" },
        { label: "Πέμπτη", value: "Thursday" },
        { label: "Παρασκευή", value: "Friday" },
        { label: "Σάββατο", value: "Saturday" },
        { label: "Κυριακή", value: "Sunday" },
    ];

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.from.trim()) {
            newErrors.from = "Το πεδίο 'Από' είναι υποχρεωτικό.";
        }
        if (!formData.duration) {
            newErrors.duration = "Το πεδίο 'Διάρκεια' είναι υποχρεωτικό.";
        }
        if (!formData.hoursPerWeek || isNaN(formData.hoursPerWeek) || formData.hoursPerWeek <= 0) {
            newErrors.hoursPerWeek = "Το πεδίο 'Ώρες ανά εβδομάδα' πρέπει να είναι ένας αριθμός μεγαλύτερος από το 0.";
        }
        if (!formData.workingDays.length) {
            newErrors.workingDays = "Πρέπει να επιλέξετε τουλάχιστον μία ημέρα.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Form is valid if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form Data:", formData);
            navigate(-1);
        } else {
            console.log("Validation failed.");
        }
    };

    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    useDocumentTitle('Αίτηση προς επαγγελματία');

    return (
        <div className="aitisi-pros-epaggelmatia">
            <NavBar />
            <div className="aitisi-pros-epaggelmatia-main-container">
                <div className="aitisi-breadcrumb">
                    <Breadcrumb />
                </div>
                <div className="form-container">
                    <h2>Work Schedule Form</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Απο */}
                        <div className="p-field">
                            <label htmlFor="from">Από</label>
                            <InputText
                                id="from"
                                value={formData.from}
                                onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                                placeholder="Εισάγετε το ονοματεπώνυμο σας"
                            />
                            {errors.from && <small className="p-error">{errors.from}</small>}
                        </div>

                        {/* Προς */}
                        <div className="p-field">
                            <label htmlFor="to">Προς</label>
                            <InputText
                                id="to"
                                value={state}
                                readOnly
                                tooltip="This field is locked"
                                className="p-inputtext-lg"
                            />
                        </div>

                        {/* Διάρκεια */}
                        <div className="p-field">
                            <label htmlFor="duration">Διάρκεια</label>
                            <Calendar
                                id="duration"
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: e.value })}
                                placeholder="Επιλέξτε ημερομηνία"
                                dateFormat="dd/mm/yy"
                            />
                            {errors.duration && <small className="p-error">{errors.duration}</small>}
                        </div>

                        {/* Ώρες ανά εβδομάδα */}
                        <div className="p-field">
                            <label htmlFor="hoursPerWeek">Ώρες ανά εβδομάδα</label>
                            <InputText
                                id="hoursPerWeek"
                                type="number"
                                value={formData.hoursPerWeek}
                                onChange={(e) => setFormData({ ...formData, hoursPerWeek: e.target.value })}
                                placeholder="Εισάγετε τις ώρες"
                            />
                            {errors.hoursPerWeek && <small className="p-error">{errors.hoursPerWeek}</small>}
                        </div>

                        {/* Ημέρες Απασχόλησης */}
                        <div className="p-field">
                            <label htmlFor="workingDays">Ημέρες Απασχόλησης</label>
                            <MultiSelect
                                id="workingDays"
                                value={formData.workingDays}
                                options={daysOfWeek}
                                onChange={(e) => setFormData({ ...formData, workingDays: e.value })}
                                placeholder="Επιλέξτε ημέρες"
                                display="chip"
                            />
                            {errors.workingDays && <small className="p-error">{errors.workingDays}</small>}
                        </div>

                        <Button type="submit" label="Submit" className="p-mt-2" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ParentFormToProfessional;
