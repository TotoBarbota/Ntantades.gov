import { useEffect, useState } from "react"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { Routes } from '../../routes'

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";

import './ProfessionalPage.css'
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

function ProfessionalPage() {
    const location = useLocation();
    const user = location.state?.user || '';
    console.log("user is ",user);
    console.log("user availability ",user.availability);
    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    useDocumentTitle('Search Professional');

    return (
        <div className="professional-page-container">
            <NavBar />
            <div className='professional-page-breadcrumb'><Breadcrumb /></div>
            <ProfileCard user={user} />
            <Footer />
        </div>
    );
}

export default ProfessionalPage;
