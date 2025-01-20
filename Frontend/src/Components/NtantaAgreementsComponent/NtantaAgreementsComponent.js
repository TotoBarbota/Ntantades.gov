import React, { useEffect, useState } from "react";
import "./NtantaAgreementsComponent.css";
import NtantaEvaluationPopup from "./NtantaEvaluationPopup";
import NtantaCompletedAgreementPopup from "./CompletedAgreementPopup/NtantaCompletedAgreementPopup";
import NtantaExtendAgreementPopup from "./ExtendAgreementPopup/NtantaExtendAgreementPopup";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const NtantaAgreementsComponent = ({ data }) => {
  const {
    status,
    state,
    start_date,
    ntanta_user_id,
    parent_user_id,
    end_date,
    waiting,
    setCurrStatus,
  } = data;

  console.log("ntanta agreement data", data);
  var curr_status = status;

  // Modal state
  const [isAgreementModalOpen, setIsAgreementModalOpen] = useState(false);
  const [isCompletedAgreementModalOpen, setIsCompletedAgreementModalOpen] =
    useState(false);
  const [isExtendAgreementModalOpen, setIsExtendAgreementModalOpen] =
    useState(false);
  const [actions, setActions] = useState(() => {
    switch (status) {
      case 1:
        return ["Επιβεβαίωση ολοκλήρωσης", "Επέκταση Συνεργασίας"];
      case 2:
        return ["Επιβεβαίωση ολοκλήρωσης"];
      case 3:
        return "Επιβεβαίωση ολοκλήρωσης";
      case 4:
        return ["Επέκταση Συνεργασίας"];
      case 5:
        return ["Ανασκόπηση"];
      default:
        return [];
    }
  });

  useEffect(() => {
    setActions(() => {
      switch (curr_status) {
        case 1:
          return ["Επιβεβαίωση ολοκλήρωσης", "Επέκταση Συνεργασίας"];
        case 2:
          return ["Επιβεβαίωση ολοκλήρωσης"];
        case 3:
          return "Επιβεβαίωση ολοκλήρωσης";
        case 4:
          return ["Επέκταση Συνεργασίας"];
        case 5:
          return ["Ανασκόπηση"];
        default:
          return [];
      }
    });
  }, [curr_status]);

  // Open modal function
  const openAgreementModal = () => {
    setIsAgreementModalOpen(true);
  };

  // Close modal function
  const closeAgreementModal = () => {
    setIsAgreementModalOpen(false);
  };

  const openCompletedAgreementModal = () => {
    const agreementRef = doc(db, "agreements", data.id);
    setCurrStatus(4);
    updateDoc(agreementRef, { status: 4, isCompleted: "true" });
    setIsCompletedAgreementModalOpen(true);
  };

  // Close modal function
  const closeCompletedAgreementModal = () => {
    setIsCompletedAgreementModalOpen(false);
  };

  const openExtendAgreementModal = () => {
    const agreementRef = doc(db, "agreements", data.id);
    setCurrStatus(5);
    updateDoc(agreementRef, { status: 2, isCompleted: "false" });
    setIsExtendAgreementModalOpen(true);
  };

  // Close modal function
  const closeExtendAgreementModal = () => {
    setIsExtendAgreementModalOpen(false);
  };

  const startDate = start_date
    ? start_date.toDate().toLocaleDateString("el-GR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "Date not available";

  const finishDate = end_date
    ? end_date.toDate().toLocaleDateString("el-GR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "Date not available";

  const [person, setPerson] = useState("");
  useEffect(() => {
    const userRef = collection(db, "users");
    const getUser = async () => {
      const querySnapshot = await getDocs(userRef);
      const userDoc = querySnapshot.docs.find(
        (doc) => doc.id === parent_user_id
      );
      const userData = userDoc.data();
      setPerson(`${userData.firstName} ${userData.lastName}`);
    };
    getUser();
  }, []);

  return (
    <div className={`agreement-card ${status}`}>
      <div className="card-content">
        <div className="person-info">
          <img
            class="card-img-top"
            src="./../../pictures/avatart.jpg"
            alt="Card image cap"
            style={{ width: "10%", height: "auto" }}
          />
          <p style={{ paddingLeft: "10px" }}>{person}</p>

          <div className="basic-info">
            <div className="first-line">
              <p>
                <b>Ημερομηνία έναρξης</b>
              </p>
              <p>{startDate}</p>
            </div>
            <div className="second-line">
              <p>
                <b>Ημερομηνία λήξης</b>
              </p>
              <p>{finishDate}</p>
            </div>
            {waiting === "true" && <div className="on-hold"> Σε αναμονή</div>}
          </div>
        </div>
        <div className="card-actions">
          {actions &&
            actions.map((action, index) => (
              <button
                key={index}
                className={`action-button ${action}`}
                onClick={
                  action === "Αξιολόγηση"
                    ? openAgreementModal
                    : action === "Επιβεβαίωση ολοκλήρωσης"
                    ? openCompletedAgreementModal
                    : action === "Επέκταση Συνεργασίας"
                    ? openExtendAgreementModal
                    : undefined
                }
              >
                {action}
              </button>
            ))}
        </div>
      </div>

      {isAgreementModalOpen && (
        <NtantaEvaluationPopup onClose={closeAgreementModal} />
      )}

      {isCompletedAgreementModalOpen && (
        <NtantaCompletedAgreementPopup onClose={closeCompletedAgreementModal} />
      )}

      {isExtendAgreementModalOpen && (
        <NtantaExtendAgreementPopup
          onClose={closeExtendAgreementModal}
          props={data}
        />
      )}
    </div>
  );
};

export default NtantaAgreementsComponent;
