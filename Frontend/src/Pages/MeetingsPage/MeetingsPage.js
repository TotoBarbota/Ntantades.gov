import { useEffect, useState } from "react"

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Tabs from "../../Components/MeetingsComponents/Tabs";
import AppointmentCard from "../../Components/MeetingsComponents/AppointmentCard";
import './MeetingsPage.css'

function MeetingsPage() {
    const [activeTab, setActiveTab] = useState("Τρέχοντα");

    const appointments = [
        {
            id: 1,
            status: "Αίτημα αλλαγής ώρας / τοποθεσίας",
            person: "Θοδωρής Μηνιάδης",
            date: "23-07-2024, 18:30",
            location: "Google Meet (http://gmeetlink)",
            actions: ["Αποδοχή", "Αλλαγή ημερομηνίας", "Απόρριψη"],
        },
        {
            id: 2,
            status: "Αναμονή απάντησης από επαγγελματία",
            person: "Θοδωρής Μηνιάδης",
            date: "23-07-2024, 18:30",
            location: "Google Meet (http://gmeetlink)",
            actions: ["Αλλαγή ημερομηνίας", "Ακύρωση"],
        },
        {
            id: 3,
            status: "Προγραμματισμένη",
            person: "Θοδωρής Μηνιάδης",
            date: "23-07-2024, 18:30",
            location: "Google Meet (http://gmeetlink)",
            actions: ["Αλλαγή ημερομηνίας", "Ακύρωση"],
        },
        {
            id: 4,
            status: "Ολοκληρωμένη",
            person: "Θοδωρής Μηνιάδης",
            date: "23-07-2024, 18:30",
            location: "Google Meet (http://gmeetlink)",
            actions: ["Αίτημα συνεργασίας", "Αρχειοθέτηση"],
        },
    ];
    
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
                <div>
                    <Tabs
                        tabs={[
                            { label: "Τρέχοντα", count: 5 },
                            { label: "Ακυρωμένα", count: 2 },
                        ]}
                        activeTab={activeTab}
                        onTabClick={(tab) => setActiveTab(tab)}
                    />
                    <div className="appointment-cards">
                        {appointments.map((appointment) => (
                            <AppointmentCard key={appointment.id} data={appointment} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MeetingsPage;

