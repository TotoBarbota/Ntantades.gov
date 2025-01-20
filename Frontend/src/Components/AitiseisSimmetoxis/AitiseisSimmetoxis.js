import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import "./AitiseisSimmetoxis.css";
import Application from "./Application";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Routes } from '../../routes';

function AitiseisSimmetoxis() {
  const authContext = useAuth();
  const [aithsh, setAithsh] = useState(null);

  async function fetchData() {
    const userId = authContext.userID;
    if (userId) {
      const aithseisRef = collection(db, "aithseis");
      const querySnapshot = await getDocs(aithseisRef);

      const aithshDoc = querySnapshot.docs.find(
        (doc) => doc.data().parent_user_id === userId
      );

      setAithsh(aithshDoc ? aithshDoc.data() : null);
      console.log("aithsh", aithshDoc.data());
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="aitiseis-simmetoxis-container">
      <h1>Ηλεκτρονική Αίτηση Συμμετοχής</h1>
      <h3>
        <b>
          Αίτηση ωφελουμένων στη Δράση Νταντάδες της Γειτονιάς <br />
          Υπηρεσία κατ' οίκον φροντίδας βρεφών και νηπίων από 2 μηνών έως 2,5
          ετών
        </b>
      </h3>
      <div className="blue-notification">
        <span>Δείτε τους όρους της πρόσκλησης εδώ:&nbsp;</span>
        <a href="#">Όροι πρόσκλησης</a>
      </div>
      <Button label="Υποβολή νέας αίτησης" onClick={fetchData} />
    const navigate = useNavigate();
    return (
        <div className='aitiseis-simmetoxis-container'>
            <h1>Ηλεκτρονική Αίτηση Συμμετοχής</h1>
            <h3><b>Αίτηση ωφελουμένων στη Δράση Νταντάδες της Γειτονιάς <br/>
                Υπηρεσία κατ' οίκον φροντίδας βρεφών και νηπίων από 2 μηνών έως 2,5 ετών</b>
            </h3>
            <div className='blue-notification'>
                <span>Δείτε τους όρους της πρόσκλησης εδώ:&nbsp;</span>
                <a href='#'>Όροι πρόσκλησης</a>
            </div>
            <Button label='Υποβολή νέας αίτησης' onClick={() => navigate(Routes.ParentFormToParticipate)} />

      <div className="applications-side">
        {aithsh && <Application approved={aithsh.approved} />}
      </div>
    </div>
  );
}

export default AitiseisSimmetoxis;
