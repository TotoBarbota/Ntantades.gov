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
            municipality: "Αθήνα",
            actions: [],
            status: 'not-submitted', 
        },
        {
            id: 2,
            person: "Θοδωρής Μηνιάδης",
            age: 23,
            municipality: "Πειραιά",
            actions: [],
            status: 'not-submitted', 

        },
        {
            id: 3,
            person: "Θοδωρής Μηνιάδης",
            age: 32,
            municipality: "Νέα Σμύρνη",
            actions: [],
            status: "not-submitted",

        },
        {
            id: 4,
            person: "Θοδωρής Μηνιάδης",
            age: 45,
            municipality: "Σεπόλια",
            actions: ["Ανασκόπηση-Επεξεργασία", "Ακύρωση"],
            status: "submitted", 

        },
        {
            id: 5,
            person: "Θοδωρής Μηνιάδης",
            age: 46,
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
    useDocumentTitle('Aitiseis');

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

