import { useEffect, useState } from "react"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { Routes } from '../../routes'

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AitiseisSimmetoxis from "../../Components/AitiseisSimmetoxis/AitiseisSimmetoxis";

import './aitisiSimmetoxisPage.css'

function AitisiSimmetoxisPage() {

    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    useDocumentTitle('Aitisi Simmetoxis');

    return (
        <div className="aitisi-simmetoxis">
            <NavBar />
            <div className='aitisi-simmetoxis-main-container'>
                <div className='aitisi-breadcrumb'><Breadcrumb /></div>
                <AitiseisSimmetoxis />
            </div>
            <Footer />
        </div>
    );
}

export default AitisiSimmetoxisPage;
