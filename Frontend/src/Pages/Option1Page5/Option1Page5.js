import React from "react";
import "./Option1Page5.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Progress_Bar5 from "../../Components/Progress_Bar5/Progress_Bar5";
import Info from "../../Components/Info/Info";
import Info0 from "../../Components/Info0/Info0";
import Info2 from "../../Components/Info2/Info2";
import Info3 from "../../Components/Info3/Info3";
import Back_Button from "../../Components/Back_Button/Back_Button";
import SubButton from "../../Components/SubButton/SubButton";
import ExitButton from "../../Components/ExitButton/ExitButton";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes";
import { useOptions } from "../../contexts/OptionContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../contexts/AuthContext";

function Option1Page5() {
  const navigate = useNavigate();
  const optionContext = useOptions();
  const handleBackClick = () => {
    navigate(`${Routes.Option1Page4}`, { replace: true });
  };

  const authContext = useAuth();
  const userID = authContext.userID;
  const handleSubClick = () => {
    console.log("option details", optionContext.optionDetails);
    const userRef = doc(db, "users", userID);
    setDoc(
      userRef,
      {
        ...optionContext.optionDetails,
        isNtanta: true,
      },
      { merge: true }
    ).then(() => {
      authContext.setCurrentUser({
        ...optionContext.optionDetails,
        isNtanta: true,
      });

      alert("Η Οριστικη Υποβολή πραγματοποιήθηκε!");
    });
  };

  const handleExitClick = () => {
    navigate(`${Routes.Home}`, { replace: true });
  };

  return (
    <div className="Some">
      <NavBar />
      <div className="Option1Page5">
        <div className="page-content">
          <div className="content-wrapper">
            <Breadcrumb />
            <Progress_Bar5 />
            <div className="section-divider"></div>
            <div className="section-title">
              Ενότητα Ε - Αποδοχή και Οριστική Υποβολή
            </div>
            <div className="subsection-title">Αποδοχή</div>
            <p>
              Ο παρών οδηγός δημιουργήθηκε για να καλύψει τις συνεχώς
              αυξανόμενες ανάγκες της δημόσιας διοίκησης για τη δημιουργία
              ενιαίων και φιλικών ψηφιακών εμπειριών χρήσης , με γνώμονα πάντα
              την εξυπηρέτηση των πολιτών
            </p>
            <Info0 />
            <Info />
            <Info2 />
            <div className="section-divider"></div>
            <div className="subsection-title">Οριστική Υποβολή</div>
            <Info3 />

            <div className="button-container">
              <div className="back-button">
                <Back_Button onClickHandler={handleBackClick} />
              </div>
              <div className="front-button">
                <SubButton onClickHandler={handleSubClick} />
              </div>
            </div>
            <div className="exit-button">
              <ExitButton onClickHandler={handleExitClick} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Option1Page5;
