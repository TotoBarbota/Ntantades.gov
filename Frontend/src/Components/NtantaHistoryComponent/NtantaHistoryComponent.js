import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

const NtantaHistoryComponent = ({ props }) => {
  const {
    id,
    end_date,
    start_date,
    ntanta_user_id,
    parent_user_id,
    status,
    payment_value,
  } = props;

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
  return (
    <div className="card shadow-sm rounded mb-3">
      <div className="card-body">
        <div className="card-text">
          <div className="d-flex justify-content-between align-items-center">
            <div style={{ paddingLeft: "1rem" }} className="col ">
              <b>Από: </b> {person}
            </div>
            <div className="col">
              <b>Περίοδος: </b>
              {startDate} - {finishDate}
            </div>
            <div className="col">
              <b>Ποσό πληρωμής: </b> {payment_value}€
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NtantaHistoryComponent;
