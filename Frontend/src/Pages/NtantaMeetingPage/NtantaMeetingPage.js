import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import "./ntantaPage.css";
import { useAuth } from "../../contexts/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import AppointmentCard from "../../Components/MeetingsComponents/AppointmentCard";
import Tabs from "../../Components/MeetingsComponents/Tabs";
import NtantaAppointmentCard from "../../Components/NtantaMeetingComponent/NtantaAppointmentCard";

const NtantaMeetingPage = () => {
  const [activeTab, setActiveTab] = useState("Τρέχοντα");
  const authContext = useAuth();
  const { currentUser } = authContext.currentUser;

  // state 1 : request, state 2: wait, state 3: schedule, state 4: completed, state 5: closed
  const [meetings, setMeetings] = useState([]);
  const meetingsRef = collection(db, "meetings");

  const getMeetings = async () => {
    const snapshot = await getDocs(meetingsRef);
    const meetingsArray = snapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((meeting) => meeting.ntanta_user_id === authContext.userID);
    setMeetings(meetingsArray);
  };

  async function formatMeetings(meetings) {
    const formattedMeetings = await Promise.all(
      meetings.map((meeting) => {
        const stateNum = meeting.state;
        const state = actionsMap[stateNum].join(", ");
        const location = meeting.location || meeting.place;
        const date = meeting.meet_date.toDate().toLocaleDateString("el-GR");
        const userRef = collection(db, "users");
        const userDoc = getDocs(userRef).then((snapshot) =>
          snapshot.docs.find((doc) => doc.id === meeting.parent_user_id)
        );
        const person = userDoc.then((doc) => {
          const { firstName, lastName } = doc.data();
          return `${firstName} ${lastName}`;
        });
        return {
          actions: actionsMap[stateNum],
          stateNum,
          state,
          location,
          date,
          person,
        };
      })
    );
    setMeetings(formattedMeetings);
  }

  useEffect(() => {
    getMeetings();
    formatMeetings(meetings);
  }, [meetings.some((meeting) => meeting.state !== meeting.prevState)]);

  const actionsMap = {
    1: ["Αποδοχή", "Αλλαγή ημερομηνίας", "Απόρριψη"],
    2: ["Αλλαγή ημερομηνίας", "Απόρριψη"],
    3: ["Αρχειοθέτηση"],
    4: ["Αρχειοθέτηση"],
    5: [],
  };

  const filterAppointments = (meetings, activeTab) => {
    return meetings.filter((appointment) =>
      activeTab === "Ακυρωμένα"
        ? appointment.state === 5
        : activeTab === "Ολοκληρωμένα"
        ? appointment.state === 4
        : activeTab === "Τρέχοντα"
        ? appointment.state !== 4 && appointment.state !== 5
        : false
    );
  };

  const filteredAppointments = filterAppointments(meetings, activeTab);

  const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  useDocumentTitle("Συναντήσεις");

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
                count: meetings.filter(
                  (app) => app.state !== 5 && app.state !== 4
                ).length,
              },
              {
                label: "Ολοκληρωμένα",
                count: meetings.filter((app) => app.state === 4).length,
              },
              {
                label: "Ακυρωμένα",
                count: meetings.filter((app) => app.state === 5).length,
              },
            ]}
            activeTab={activeTab}
            onTabClick={(tab) => setActiveTab(tab)}
          />
          <div className="appointment-cards">
            {filteredAppointments.map((appointment) => (
              <NtantaAppointmentCard data={appointment} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default NtantaMeetingPage;
