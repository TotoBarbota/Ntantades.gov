import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import "./ntantaPage.css";
import { useAuth } from "../../contexts/AuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import NtantaHistoryComponent from "../../Components/NtantaHistoryComponent/NtantaHistoryComponent";

const NtantaHistoryPage = () => {
  const authContext = useAuth();
  const [completedAgreements, setCompletedAgreements] = useState([]);
  const [users, setUsers] = useState([]);
  const [agreements, setAgreements] = useState([]);

  const agreementsRef = collection(db, "agreements");

  useEffect(() => {
    const getAgreements = async () => {
      const snapshot = await getDocs(agreementsRef);
      const agreementsArray = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter(
          (agreement) =>
            agreement.ntanta_user_id === authContext.userID &&
            agreement.isCompleted
        );

      setCompletedAgreements(agreementsArray);
    };

    getAgreements();

    const getUsers = async () => {
      const usersRef = collection(db, "users");
      const snapshot = await getDocs(usersRef);
      const usersArray = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((user) =>
          completedAgreements.some(
            (agreement) => agreement.parent_user_id === user.id
          )
        )
        .map((user) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
        }));

      setUsers(usersArray);
    };

    getUsers();
  }, []);

  const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  useDocumentTitle("Ιστορικό");

  return (
    <div className="application-page-container">
      <NavBar />
      <div className="application-page-breadcrumb">
        <Breadcrumb />
      </div>
      <h3>Ολοκληρωμένες συναλαγγές</h3>
      {completedAgreements.map((completedAgreement) => (
        <NtantaHistoryComponent props={completedAgreement} />
      ))}
      <Footer />
    </div>
  );
};

export default NtantaHistoryPage;
