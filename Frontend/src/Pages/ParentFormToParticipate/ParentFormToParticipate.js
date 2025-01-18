import { useEffect } from "react"

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import './ParentFormToParticipate.css'

function ParentFormToParticipate() {

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
            </div>
            <Footer />
        </div>
    );
}

export default ParentFormToParticipate;
