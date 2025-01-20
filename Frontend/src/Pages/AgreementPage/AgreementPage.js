import { useEffect, useState } from "react"

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AgreementsComponent from "../../Components/AgreementsComponent/AgreementsComponent";

import './AgreementPage.css'

function AgreementPage() {
    const [activeTab, setActiveTab] = useState("Τρέχοντα");

    const agreements = [
        {
            id: 1,
            person: "Θοδωρής Μηνιάδης",
            startDate: "10-04-2024, 18:30",
            finishDate: "10-07-2024, 18:30",
            date: "10-07-2024",
            hours: '6',
            days: ['Monday', 'Tuesday', 'Wednesday'],
            age: 19,
            municipality: "Αθήνα",
            actions: ["Ανασκόπηση"],
            status: 'finished',
            waiting: 'false',
        },
        {
            id: 2,
            person: "Θοδωρής Μηνιάδης",
            startDate: "20-07-2024, 18:30",
            finishDate: "20-01-2025, 18:30",
            date: "20-01-2025",
            hours: '24',
            days: ['Monday', 'Tuesday', 'Wednesday'],
            age: 23,
            municipality: "Πειραιά",
            actions: ["Επιβεβαίωση ολοκλήρωσης"],
            status: 'running',
            waiting: 'false',

        },
        {
            id: 3,
            person: "Θοδωρής Μηνιάδης",
            startDate: "10-07-2024, 18:30",
            finishDate: "10-01-2025, 18:30",
            date: "10-01-2025",
            hours: '12',
            days: ['Monday', 'Tuesday', 'Wednesday'],
            age: 32,
            municipality: "Νέα Σμύρνη",
            actions: ["Αξιολόγηση","Επέκταση Συνεργασίας"],
            status: "finished",
            waiting: 'false',

        },
        {
            id: 4,
            person: "Θοδωρής Μηνιάδης",
            startDate: "----",
            finishDate: "10-07-2025, 18:30",
            date: "10-07-2025",
            hours: '20',
            days: ['Monday', 'Tuesday', 'Wednesday'],
            age: 45,
            municipality: "Σεπόλια",
            actions: ["Ανασκόπηση"],
            status: "wait-to-accept",
            waiting: 'true',

        },
    ];

    const filteredAgreements = agreements.filter((agreement) => {
        if (activeTab === "Τρέχοντα") {
            return agreement.status !== "not-submitted";
        } else if (activeTab === "Ακυρωμένα") {
            return agreement.status === "not-submitted";
        }
        return false;
    });

    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    useDocumentTitle('Συμφωνητικά');

    return (
        <div className="applications-with-professionals-page">
            <NavBar />
            <div className='applications-with-professionals-main-container'>
                <div className='aitisi-breadcrumb'><Breadcrumb /></div>
                <div className="application-cards">
                    {filteredAgreements.map((agreement) => (
                        <AgreementsComponent key={agreement.id} data={agreement} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AgreementPage;

