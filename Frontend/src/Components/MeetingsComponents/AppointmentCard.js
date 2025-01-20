import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AppointmentCard.css";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { Routes } from "../../routes";

const AppointmentCard = ({ data }) => {
  const {
    id,
    isOnline,
    link,
    location,
    meet_date,
    ntanta_user_id,
    parent_user_id,
    place,
    state,
  } = data;

  const statusNum = state;

  const cardStatus = (() => {
    switch (state) {
      case 1:
        return "request";
      case 2:
        return "wait";
      case 3:
        return "schedule";
      case 4:
        return "completed";
      case 5:
        return "closed";
      default:
        return "UNKNOWN";
    }
  })();

  const date = meet_date
    ? meet_date.toDate().toLocaleString()
    : "Date not available";

  const actions = (() => {
    switch (state) {
      case 1:
        return ["Αποδοχή", "Αλλαγή", "Ακύρωση"];
      case 2:
        return ["Απόρριψη", "Αλλαγή"];
      case 3:
        return ["Απόρριψη", "Αλλαγή"];
      case 4:
        return ["Αρχειοθέτηση"];
      default:
        return [];
    }
  })();
  const authContext = useAuth();

  const [person, setPerson] = useState("");
  useEffect(() => {
    const userRef = collection(db, "users");
    const getUser = async () => {
      const querySnapshot = await getDocs(userRef);
      const userDoc = querySnapshot.docs.find(
        (doc) => doc.id === ntanta_user_id
      );
      const userData = userDoc ? userDoc.data() : null;
      if (userData) {
        const firstName = userData.firstName;
        const lastName = userData.lastName;
        setPerson(`${firstName} ${lastName}`);
      } else {
        console.error("User document not found");
      }
    };
    getUser();
  }, []);

  // state 1 : request, state 2: wait, state 3: schedule, state 4: completed, state 5: closed

  function handleOnClick(action) {
    console.log(action, id);
    const meetRef = collection(db, "meetings");
    switch (action) {
      case "Αποδοχή":
        setDoc(doc(meetRef, id), { state: 3 }, { merge: true });
        break;
      case "Αλλαγή":
        setDoc(doc(meetRef, id), { state: 2 }, { merge: true });
        break;
      case "Ακύρωση":
        setDoc(doc(meetRef, id), { state: 5 }, { merge: true });
        break;
      case "Απόρριψη":
        setDoc(doc(meetRef, id), { state: 5 }, { merge: true });
        break;
    }
  }

  return (
    <div className={`appointment-card ${cardStatus}`}>
      <div className="card-status">{cardStatus}</div>
      <div className="card-content">
        <div className="person-info">
          <img
            src={process.env.PUBLIC_URL + "/pictures/avatart.jpg"}
            alt="Person"
            className="person-avatar"
          />
          <div className="basic-info">
            <p>{person}</p>
            <p>{date}</p>
            {isOnline ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            ) : (
              <>
                <p>Location: {location}</p>
                <p>Place: {place}</p>
              </>
            )}
          </div>
        </div>
        <div className="card-actions">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`action-button ${action}`}
              onClick={() => handleOnClick(action)}
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
