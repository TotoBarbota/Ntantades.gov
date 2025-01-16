import { useEffect, useState } from "react"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { Routes } from '../../routes'

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import './MeetingsPage.css'

function MeetingsPage() {

    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    useDocumentTitle('Sinantiseis');

    return (
        <div className="meetings-page">
            <NavBar />
            <div className='meetings-page-main-container'>
                <div className='aitisi-breadcrumb'><Breadcrumb /></div>
            </div>
            <Footer />
        </div>
    );
}

export default MeetingsPage;
