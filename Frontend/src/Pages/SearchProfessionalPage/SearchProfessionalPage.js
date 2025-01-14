import { useEffect, useState } from "react"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { Routes } from '../../routes'

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import './SearchProfessionalPage.css'
import Filters from "../../Components/Filters/Filters";
import ProfessionalsList from "../../Components/ProfessionalsList/ProfessionalsList"

function SearchProfessionalPage() {

    // Initialize filters with default structure
    const [filters, setFilters] = useState({
        ageGroups: [],
        experience: [],
        minHours: null,
        maxHours: null,
        sex: [],
        municipality: [], // Initialize as an empty array
    });


    const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
    const [selectedPreviousJobsNumb, setSelectedPreviousJobsNumb] = useState([]);
    const [sex, setSex] = useState([]);
    const [minHours, setMinHours] = useState(null);
    const [maxHours, setMaxHours] = useState(null);

    // Mock data for ProfessionalList
    const users = [
        { name: "John Doe", ageGroup: "25-45", experience: "1-3 έτη", sex: "Άντρας", hoursPerWeek: 20 },
        { name: "Jane Smith", ageGroup: "18-25", experience: "0-1 έτη", sex: "Γυναίκα", hoursPerWeek: 15 },
        // Add more user data
    ];

    // Filter logic
    const filteredUsers = users.filter((user) => {
        const matchAgeGroup =
            filters.ageGroups.length === 0 || filters.ageGroups.includes(user.ageGroup);
        const matchExperience =
            filters.experience.length === 0 || filters.experience.includes(user.experience);
        const matchSex = filters.sex.length === 0 || filters.sex.includes(user.sex);
        const matchHours =
            (filters.minHours === null || user.hoursPerWeek >= filters.minHours) &&
            (filters.maxHours === null || user.hoursPerWeek <= filters.maxHours);

        return matchAgeGroup && matchExperience && matchSex && matchHours;
    });

    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    useDocumentTitle('Search Professional');

    return (
        <div className="search-professional">
            <NavBar />
            <div className='main-text'>
                <div className='filters'><Filters
                    filters={filters}
                    setFilters={setFilters}
                />
                </div>
                <div className='right-section'>
                <div className='search-professional-breadcrumb'> <Breadcrumb /> </div>
                    <ProfessionalsList users={filteredUsers}     />
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default SearchProfessionalPage;
