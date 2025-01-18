import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

import "./Filters.css";

const Filters = ({ filters, setFilters }) => {
  const city = [
    { name: "Αθήνα", code: "ATH" },
    { name: "Θεσσαλονίκη", code: "THES" },
    { name: "Πάτρα", code: "PAT" },
    { name: "Ηράκλειο", code: "HER" },
    { name: "Λάρισα", code: "LAR" },
  ];

  const ageGroups = [
    { label: "18-25", value: [18, 25] },
    { label: "25-45", value: [25, 45] },
    { label: "45+", value: [45, 100] },
  ];

  const num_of_experience = [
    { label: "0-1 έτη", value: [0, 1] },
    { label: "1-3 έτη", value: [1, 3] },
    { label: "3+ έτη", value: [3, 100] },
  ];

  const gender = [
    { label: "Άντρας", value: "male" },
    { label: "Γυναίκα", value: "female" },
    { label: "Αλλο", value: "other" },
  ];

  const handleCheckboxChange = (key, value) => {
    setFilters((prev) => {
      const prevValues = prev[key] || []; // Ensure prevValues is an array
      if (prevValues.includes(value)) {
        // If the value is already in the array, remove it (uncheck)
        return {
          ...prev,
          [key]: prevValues.filter((item) => item !== value),
        };
      } else {
        // If the value is not in the array, add it (check)
        return {
          ...prev,
          [key]: [...prevValues, value],
        };
      }
    });
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
              checked={
                filters.ageGroups
                  ? filters.ageGroups.some(
                      (filterValue) =>
                        filterValue[0] === group.value[0] &&
                        filterValue[1] === group.value[1]
                    )
                  : false
              }
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
        {num_of_experience.map((group) => (
          <div key={group.value} className="p-field-checkbox">
            <Checkbox
              inputId={group.value}
              value={group.value}
              checked={
                filters.num_of_experience
                  ? filters.num_of_experience.some(
                      (filterValue) =>
                        filterValue[0] === group.value[0] &&
                        filterValue[1] === group.value[1]
                    )
                  : false
              }
              onChange={() =>
                handleCheckboxChange("num_of_experience", group.value)
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
          <label
            htmlFor="minHours"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
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
          <label
            htmlFor="maxHours"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
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
        {gender.map((group) => (
          <div key={group.value} className="p-field-checkbox">
            <Checkbox
              inputId={group.value}
              value={group.value}
              checked={filters.gender?.includes(group.value) || false}
              onChange={() => handleCheckboxChange("gender", group.value)}
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
          <b>Πόλη</b>
        </div>
        {city.map((city) => (
          <div key={city.code} className="p-field-checkbox">
            <Checkbox
              inputId={city.code}
              value={city.name}
              checked={
                filters.city !== undefined && filters.city.includes(city.name)
              }
              onChange={() => handleCheckboxChange("city", city.name)}
            />
            <label htmlFor={city.code} style={{ marginLeft: "8px" }}>
              {city.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
