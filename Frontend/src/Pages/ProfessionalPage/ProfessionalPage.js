import { useEffect, useState } from "react"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { Routes } from '../../routes'

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import MeetingModal from "../../Components/MeetingModal/MeetingModal";


import './ProfessionalPage.css'
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

function ProfessionalPage() {
    const location = useLocation();
    const user = location.state?.user || '';
    console.log("user is ",user);
    console.log("user availability ", user.availability);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleCloseModal = () => {
        setSelectedUser(null);
        setIsModalOpen(false);
    };

    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

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
            <ProfileCard user={user} isOpen={isModalOpen} onClose={handleCloseModal} handleOpenModal={handleOpenModal} />
            <Footer />
            <MeetingModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                returnUrl={location.pathname}
                selectedUser={selectedUser}
            />
        </div>
    );
}

export default ProfessionalPage;
