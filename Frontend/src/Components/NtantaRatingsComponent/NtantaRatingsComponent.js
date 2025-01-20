import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NtantaRatingsComponent.css";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const NtantaRatingsComponent = ({ data }) => {
  console.log("data in ratings ", data);
  const [person, setPerson] = useState("");
  const { ntanta_user_id, parent_user_id, value } = data;
  const [parentUser, setParentUser] = useState({});
  useEffect(() => {
    const getParentUser = async () => {
      const parentUserRef = doc(db, "users", parent_user_id);
      const docSnap = await getDoc(parentUserRef);
      if (docSnap.exists()) {
        setParentUser(docSnap.data());
        setPerson(`${docSnap.data().firstName} ${docSnap.data().lastName}`);
      }
    };
    getParentUser();
  }, [parent_user_id]);

  return (
    <div className="card shadow-sm rounded mb-3">
      <div className="card-body">
        <div className="card-text">
          <div className="d-flex justify-content-between align-items-center">
            <div className="pe-3">
              <b>Από: {person}</b>
            </div>
            <div className="star-rating">
              {Array.from({ length: value }, (_, i) => (
                <span
                  key={i}
                  className="text-warning"
                  style={{ fontSize: "2rem" }}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NtantaRatingsComponent;
