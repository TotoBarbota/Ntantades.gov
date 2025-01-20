import { useEffect, useState } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import "./NtantaAgreementPage.css";
import NtantaAgreementsComponent from "../../Components/NtantaAgreementsComponent/NtantaAgreementsComponent";
import { useAuth } from "../../contexts/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

function NtantaAgreementPage() {
  const [activeTab, setActiveTab] = useState("Τρέχοντα");
  const authContext = useAuth();
  const [agreements, setAgreements] = useState([]);
  const [curr_status, setCurrStatus] = useState(1);

  const agreementsRef = collection(db, "agreements");

  const getAgreements = async () => {
    const snapshot = await getDocs(agreementsRef);
    const agreementsArray = snapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((agreement) => agreement.ntanta_user_id === authContext.userID);
    setAgreements(agreementsArray);
  };

  //   {
  //     person: "Θοδωρής Μηνιάδης",
  //     startDate: "10-04-2024, 18:30",
  //     finishDate: "10-07-2024, 18:30",
  //     actions: ["Ανασκόπηση"],
  //     status: "finished",
  //     waiting: "false",
  //   },

  async function formatAgreements(agreements) {
    const formattedAgreements = await Promise.all(
      agreements.map((agreement) => {
        const status = agreement.state;
        setCurrStatus(status);
        const state = actionsMap[status].join(", ");
        const start_date = agreement.start_date
          .toDate()
          .toLocaleDateString("el-GR");
        const end_date = agreement.end_date
          .toDate()
          .toLocaleDateString("el-GR");
        const userRef = collection(db, "users");
        const userDoc = getDocs(userRef).then((snapshot) =>
          snapshot.docs.find((doc) => doc.id === agreement.parent_user_id)
        );
        const person = userDoc.then((doc) => {
          const { firstName, lastName } = doc.data();
          return `${firstName} ${lastName}`;
        });
        const wait = agreement.isCompleted;
        return {
          actions: actionsMap[status],
          status,
          state,
          start_date,
          end_date,
          person,
          curr_status,
        };
      })
    );
    setAgreements(formattedAgreements);
  }

  useEffect(() => {
    getAgreements();
    formatAgreements(agreements);
    console.log("agreements are ", agreements);
  }, [curr_status]);

  // state 1 = finished, state 2 = running, state 3 = canceled, state 4 = completed, state 5 = waiting
  const actionsMap = {
    1: ["Eπιβεβαίωση ολοκλήρωσης", "Επέκταση Συνεργασίας"],
    2: ["Επιβεβαίωση ολοκλήρωσης"],
    3: ["Επιβεβαίωση ολοκλήρωσης"],
    4: ["Αξιολόγηση", "Επέκταση Συνεργασίας"],
    5: ["Ανασκόπηση"],
  };

  const filterAppointments = (agreements, activeTab) => {
    return agreements.filter((appointment) =>
      activeTab === "Ακυρωμένα"
        ? appointment.state === 5
        : activeTab === "Τρέχοντα"
        ? appointment.state !== 5
        : false
    );
  };

  const filteredAppointments = filterAppointments(agreements, activeTab);

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
  useDocumentTitle("Συμφωνητικά");

  return (
    <div className="applications-with-professionals-page">
      <NavBar />
      <div className="applications-with-professionals-main-container">
        <div className="aitisi-breadcrumb">
          <Breadcrumb />
        </div>
        <div className="application-cards">
          {filteredAgreements.map((agreement) => (
            <NtantaAgreementsComponent data={{ ...agreement, setCurrStatus }} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NtantaAgreementPage;
