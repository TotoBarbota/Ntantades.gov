import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';


import "./Filters.css";

const Filters = ({ filters, setFilters }) => {
    const municipalities = [
        { name: "Αθήνα", code: "ATH" },
        { name: "Θεσσαλονίκη", code: "THES" },
        { name: "Πάτρα", code: "PAT" },
        { name: "Ηράκλειο", code: "HER" },
        { name: "Λάρισα", code: "LAR" },
    ];

    const ageGroups = [
        { label: "18-25", value: "18-25" },
        { label: "25-45", value: "25-45" },
        { label: "45+", value: "45+" },
    ];

    const previousJobsNum = [
        { label: "0-1 έτη", value: "0-1 έτη" },
        { label: "1-3 έτη", value: "1-3 έτη" },
        { label: "3+ έτη", value: "3+ έτη" },
    ];

    const sexes = [
        { label: "Άντρας", value: "Άντρας" },
        { label: "Γυναίκα", value: "Γυναίκα" },
        { label: "Άλλο", value: "Άλλο" },
    ];

    const handleCheckboxChange = (key, value) => {
        setFilters((prev) => ({
            ...prev,
            [key]: prev[key].includes(value)
                ? prev[key].filter((item) => item !== value)
                : [...prev[key], value],
        }));
    };

    const handleInputChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleDropdownChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className="filters-container">
            <p className="title">
                <b>Φίλτρα</b>
            </p>

            {/* Age Group Filter */}
            <div className="category">
                <div className="category-title">
                    <b>Επιλέξτε Ηλικιακή Ομάδα</b>
                </div>
                {ageGroups.map((group) => (
                    <div key={group.value} className="p-field-checkbox">
                        <Checkbox
                            inputId={group.value}
                            value={group.value}
                            checked={filters.ageGroups.includes(group.value)}
                            onChange={() => handleCheckboxChange("ageGroups", group.value)}
                        />
                        <label htmlFor={group.value} style={{ marginLeft: "8px" }}>
                            {group.label}
                        </label>
                    </div>
                ))}
            </div>

            {/* Experience Filter */}
            <div className="category">
                <div className="category-title">
                    <b>Εμπειρία</b>
                </div>
                {previousJobsNum.map((group) => (
                    <div key={group.value} className="p-field-checkbox">
                        <Checkbox
                            inputId={group.value}
                            value={group.value}
                            checked={filters.experience.includes(group.value)}
                            onChange={() =>
                                handleCheckboxChange("experience", group.value)
                            }
                        />
                        <label htmlFor={group.value} style={{ marginLeft: "8px" }}>
                            {group.label}
                        </label>
                    </div>
                ))}
            </div>

            {/* Hours per Week Filter */}
            <div className="category">
                <div className="category-title">
                    <b>Ώρες ανά εβδομάδα</b>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="minHours" style={{ display: "block", marginBottom: "0.5rem" }}>
                        Ελάχιστες Ώρες
                    </label>
                    <InputNumber
                        id="minHours"
                        value={filters.minHours}
                        onValueChange={(e) => handleInputChange("minHours", e.value)}
                        mode="decimal"
                        min={0}
                        placeholder="Εισαγωγή"
                        style={{ width: "100%" }}
                    />
                </div>

                <div>
                    <label htmlFor="maxHours" style={{ display: "block", marginBottom: "0.5rem" }}>
                        Μέγιστες Ώρες
                    </label>
                    <InputNumber
                        id="maxHours"
                        value={filters.maxHours}
                        onValueChange={(e) => handleInputChange("maxHours", e.value)}
                        mode="decimal"
                        min={0}
                        placeholder="Εισαγωγή"
                        style={{ width: "100%" }}
                    />
                </div>
            </div>

            {/* Sex Filter */}
            <div className="category">
                <div className="category-title">
                    <b>Φύλο</b>
                </div>
                {sexes.map((group) => (
                    <div key={group.value} className="p-field-checkbox">
                        <Checkbox
                            inputId={group.value}
                            value={group.value}
                            checked={filters.sex.includes(group.value)}
                            onChange={() => handleCheckboxChange("sex", group.value)}
                        />
                        <label htmlFor={group.value} style={{ marginLeft: "8px" }}>
                            {group.label}
                        </label>
                    </div>
                ))}
            </div>

            {/* Municipality Filter */}
            <div className="category">
                <div className="category-title">
                    <b>Δήμος</b>
                </div>
                {municipalities.map((municipality) => (
                    <div key={municipality.code} className="p-field-checkbox">
                        <Checkbox
                            inputId={municipality.code}
                            value={municipality.name}
                            checked={filters.municipality.includes(municipality.name)}
                            onChange={(e) => {
                                const isChecked = e.checked;
                                setFilters((prev) => ({
                                    ...prev,
                                    municipality: isChecked
                                        ? [...prev.municipality, municipality.name]
                                        : prev.municipality.filter((item) => item !== municipality.name),
                                }));
                            }}
                        />
                        <label htmlFor={municipality.code} style={{ marginLeft: "8px" }}>
                            {municipality.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filters;
