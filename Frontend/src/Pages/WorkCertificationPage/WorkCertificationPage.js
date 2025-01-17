import { useEffect, useState } from "react"

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import WorkCertificationComponent from "../../Components/WorkCertificationComponent/WorkCertificationComponent";
import './WorkCertificationPage.css'


function WorkCertificationPage() {

    const applications = [
        {
            id: 1,
            person: "Θοδωρής Μηνιάδης",
            month: "Ιανουάριος",
            year: "2025",
            age: 19,
            municipality: "Αθήνα",
            actions: ["Επιβεβαίωση", "Υπήρξε πρόβλημα"],
            status: 'not-confirmed',
        },
        {
            id: 2,
            person: "Θοδωρής Μηνιάδης",
            month: "Δεκέμβριος",
            year: "2024",
            age: 23,
            municipality: "Πειραιά",
            actions: ["Επιβεβαιωμένο"],
            status: 'confirmed',
        },
        
    ];

    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    useDocumentTitle('Πιστοποιητικό εργασίας');

    return (
        <div className="work-certification-page">
            <NavBar />
            <div className='work-certification-main-container'>
                <div className='aitisi-breadcrumb'><Breadcrumb /></div>
                <div className="application-cards">
                    {applications.length === 0 ? (
                        <div className="error-message">
                            Δεν υπάρχει διαθέσιμο σμυφωνητικό για την συγκεκριμένη αίτηση..
                        </div>
                    ) : (
                            <div className="application-cards">
                                {applications.map((application) => (
                                <WorkCertificationComponent key={application.id} data={application} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WorkCertificationPage;

