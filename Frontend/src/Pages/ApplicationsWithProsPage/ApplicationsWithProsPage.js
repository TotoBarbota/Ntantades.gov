import { useEffect, useState } from "react"

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Tabs from "../../Components/MeetingsComponents/Tabs";
import './ApplicationsWithProsPage.css'
import ApplicationWithProComponent from "../../Components/ApplicationWithProComponents/ApplicationWithProComponent";

function ApplicationsWithProsPage() {
    const [activeTab, setActiveTab] = useState("Τρέχοντα");

    const applications = [
        {
            id: 1,
            person: "Θοδωρής Μηνιάδης",
            age: 19,
            date: "23-07-2024",
            hours: '15',
            days: ['Monday', 'Tuesday', 'Wednesday'],
            municipality: "Αθήνα",
            actions: ["Ανασκόπηση"],
            status: 'not-submitted', 
        },
        {
            id: 2,
            person: "Θοδωρής Μηνιάδης",
            age: 23,
            date: "23-07-2024",
            hours: '15',
            days: ['Monday', 'Tuesday', 'Wednesday'],
            municipality: "Πειραιά",
            actions: ["Ανασκόπηση"],
            status: 'not-submitted', 

        },
        {
            id: 3,
            person: "Θοδωρής Μηνιάδης",
            age: 32,
            date: "23-07-2024",
            hours: '15',
            days: ['Monday', 'Tuesday', 'Wednesday'],
            municipality: "Νέα Σμύρνη",
            actions: ["Ανασκόπηση"],
            status: "not-submitted",

        },
        {
            id: 4,
            person: "Θοδωρής Μηνιάδης",
            age: 45,
            date: "23-07-2024",
            hours: '15',
            days: ['Monday', 'Tuesday', 'Wednesday'],
            municipality: "Σεπόλια",
            actions: ["Ανασκόπηση-Επεξεργασία", "Ακύρωση"],
            status: "submitted", 

        },
        {
            id: 5,
            person: "Θοδωρής Μηνιάδης",
            age: 46,
            date: "23-07-2024",
            hours: '15',
            days: ['Monday', 'Tuesday', 'Wednesday'],
            municipality: "Περιστέρι",
            actions: ["Ανασκόπηση-Επεξεργασία", "Ακύρωση"],
            status: "submitted",

        },
    ];

    const filteredApplications = applications.filter((application) => {
        if (activeTab === "Τρέχοντα") {
            return application.status !== "not-submitted";
        } else if (activeTab === "Ακυρωμένα") {
            return application.status === "not-submitted";
        }
        return false;
    });
    
    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    useDocumentTitle('Αιτήσεις συνεργασίας');

    return (
        <div className="applications-with-professionals-page">
            <NavBar />
            <div className='applications-with-professionals-main-container'>
                <div className='aitisi-breadcrumb'><Breadcrumb /></div>
                <Tabs
                    tabs={[
                        { label: "Τρέχοντα", count: applications.filter(app => app.status !== "not-submitted").length },
                        { label: "Ακυρωμένα", count: applications.filter(app => app.status === "not-submitted").length },
                    ]}
                    activeTab={activeTab}
                    onTabClick={(tab) => setActiveTab(tab)}
                />
                <div className="application-cards">
                    {filteredApplications.map((application) => (
                        <ApplicationWithProComponent key={application.id} data={application} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ApplicationsWithProsPage;

