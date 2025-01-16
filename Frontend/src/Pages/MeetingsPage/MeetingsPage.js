import { useEffect, useState } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Tabs from "../../Components/MeetingsComponents/Tabs";
import AppointmentCard from "../../Components/MeetingsComponents/AppointmentCard";
import "./MeetingsPage.css";

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
      statusNum: "request", // aitima allagis oras
    },
    {
      id: 2,
      status: "Αναμονή απάντησης από επαγγελματία",
      person: "Θοδωρής Μηνιάδης",
      date: "23-07-2024, 18:30",
      location: "Google Meet (http://gmeetlink)",
      actions: ["Αλλαγή ημερομηνίας", "Ακύρωση"],
      statusNum: "wait", // anamoni apantisis
    },
    {
      id: 3,
      status: "Προγραμματισμένη",
      person: "Θοδωρής Μηνιάδης",
      date: "23-07-2024, 18:30",
      location: "Google Meet (http://gmeetlink)",
      actions: ["Αλλαγή ημερομηνίας", "Ακύρωση"],
      statusNum: "schedule", // programmatismeni
    },
    {
      id: 4,
      status: "Ολοκληρωμένη",
      person: "Θοδωρής Μηνιάδης",
      date: "23-07-2024, 18:30",
      location: "Google Meet (http://gmeetlink)",
      actions: ["Αίτημα συνεργασίας", "Αρχειοθέτηση"],
      statusNum: "completed", // olokliromeni
    },
    {
      id: 5,
      status: "Άκυρη",
      person: "Θοδωρής Μηνιάδης",
      date: "23-07-2024, 18:30",
      location: "Google Meet (http://gmeetlink)",
      actions: [],
      statusNum: "closed", // olokliromeni
    },
  ];

  const filteredAppointments = appointments.filter((appointment) => {
    if (activeTab === "Τρέχοντα") {
      return appointment.statusNum !== "closed"; // Exclude "Άκυρη"
    } else if (activeTab === "Ακυρωμένα") {
      return appointment.statusNum === "closed"; // Include only "Άκυρη"
    }
    return false;
  });

  const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  useDocumentTitle("Sinantiseis");

  return (
    <div className="meetings-page">
      <NavBar />
      <div className="meetings-page-main-container">
        <div className="aitisi-breadcrumb">
          <Breadcrumb />
        </div>
        <div>
          <Tabs
            tabs={[
              {
                label: "Τρέχοντα",
                count: appointments.filter((app) => app.statusNum !== "closed")
                  .length,
              },
              {
                label: "Ακυρωμένα",
                count: appointments.filter((app) => app.statusNum === "closed")
                  .length,
              },
            ]}
            activeTab={activeTab}
            onTabClick={(tab) => setActiveTab(tab)}
          />
          <div className="appointment-cards">
            {filteredAppointments.map((appointment) => (
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
