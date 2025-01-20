import React, { useEffect, useState } from "react";
import "./Option1Page4.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Progress_Bar4 from "../../Components/Progress_Bar4/Progress_Bar4";
import Back_Button from "../../Components/Back_Button/Back_Button";
import Front_Button from "../../Components/Front_Button/Front_Button";
import DimosButton from "../../Components/DimosButton/DimosButton";
import AvailableButton from "../../Components/AvailableButton/AvailableButton";
import NumberSelector from "../../Components/NumberSelector/NumberSelector";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useOptions } from "../../contexts/OptionContext";

function Option1Page4() {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  const handleBackClick = () => {
    navigate(`${Routes.Option1Page3}`);
  };

  const handleFrontClick = () => {
    navigate(`${Routes.Option1Page5}`);
  };

  const [available_days, setAvailable_days] = useState([]);
  const [region, setRegion] = useState([]);

  const [experience_years, setExperience_years] = useState(0);
  const [available_hours, setAvailable_hours] = useState({});

  const [post, setPost] = useState({
    available_days: available_days || [],
    available_hours: available_hours || [],
    region: region || [],
    experience_years: experience_years || 0,
  });

  useEffect(() => {
    {
      console.log("Post", post);
    }
  }, [region, available_days, available_hours, experience_years]);

  const authContext = useAuth();
  const userID = authContext.userID;
  const optionContext = useOptions();

  const handleSubmitClick = async () => {
    console.log("sending ", ...optionContext.optionDetails);
    await setDoc(
      doc(db, "users", userID),
      {
        ...optionContext.optionDetails,
        experience_years: post.experience_years,
        isNtanta: true,
      },
      { merge: true }
    );
    setShowMessage(true);
    console.log(available_days, available_hours, region, experience_years);
    setPost({
      available_days: available_days,
      available_hours: available_hours,
      region: region,
      experience_years: experience_years,
    });

    try {
      const postRef = collection(db, "posts");
      console.log("sending ", post);
      await setDoc(doc(postRef), {
        ...post,
        ntanta_user_id: userID,
      });
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div className="Some">
      <NavBar />
      <div className="Option1Page4">
        <div className="page-content">
          <div className="content-wrapper">
            <Breadcrumb />
            <Progress_Bar4 />
            <div className="section-divider"></div>
            <div className="section-title">
              Ενότητα Δ - Διαθεσιμότητα και Πλαίσιο Παροχής Υπηρεσίας
            </div>
            <h3>Δημιουργία Αγγελίας</h3>
            <h4>Επιλογή Δήμου </h4>
            <p>Επιλέξτε το/τους Δήμο-ους που δραστηριοποιήστε και επιθυμείτε</p>
            <DimosButton props={{ region, setRegion }} />
            <div className="section-divider"></div>
            <h4>Επιλογή ημερών και ωρών </h4>
            <p>Επιλέξτε τις ημέρες και τις ώρες που επιθυμείτε</p>
            <AvailableButton
              props={{
                available_days,
                available_hours,
                setAvailable_days,
                setAvailable_hours,
              }}
            />
            <div className="section-divider"></div>
            <h4>
              Επιλέξτε τα χρόνια προυπηρεσίας σας στην φροντίδα βρεφών και
              νηπίων
            </h4>
            <NumberSelector props={{ experience_years, setExperience_years }} />
          </div>
        </div>
        <div className="buttonas2-container">
          <button className="create-button" onClick={handleSubmitClick}>
            Δημιουργία Αγγελίας
          </button>
          <div className="back-button">
            <Back_Button onClickHandler={handleBackClick} />
          </div>
          <div className="front-button">
            <Front_Button onClickHandler={handleFrontClick} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Option1Page4;
