import React from 'react';
import './Option1Page2.css';

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Progress_Bar2 from "../../Components/Progress_Bar2/Progress_Bar2";
import Back_Button from "../../Components/Back_Button/Back_Button"; 
import Front_Button from "../../Components/Front_Button/Front_Button"; 
import Name_Button from "../../Components/Name_Button/Name_Button"; 
import Last_Name_Button from "../../Components/Last_Name_Button/Last_Name_Button"; 
import Fathers_Name_Button from "../../Components/Fathers_Name_Button/Fathers_Name_Button"; 
import Mothers_Name_Button from "../../Components/Mothers_Name_Button/Mothers_Name_Button"; 
import BirthYearButton from "../../Components/BirthYearButton/BirthYearButton";
import GenderButton from "../../Components/GenderButton/GenderButton";
import FamilyButton from "../../Components/FamilyButton/FamilyButton";
import AreParentButton from "../../Components/AreParentButton/AreParentButton";
import CountyButton from "../../Components/CountyButton/CountyButton";
import CityButton from "../../Components/CityButton/CityButton";
import StreetButton from "../../Components/StreetButton/StreetButton";
import StreetNumberButton from "../../Components/StreetNumberButton/StreetNumberButton";
import PostalCodeButton from "../../Components/PostalCodeButton/PostalCodeButton";
import EmailButton from "../../Components/EmailButton/EmailButton";
import PhoneNumberButton from "../../Components/PhoneNumberButton/PhoneNumberButton";
import CellPhoneNumberButton from "../../Components/CellPhoneNumberButton/CellPhoneNumberButton";
import AFMButton from "../../Components/AFMButton/AFMButton";
import AMKAButton from "../../Components/AMKAButton/AMKAButton";
import IDButton from "../../Components/IDButton/IDButton";
import DOYButton from "../../Components/DOYButton/DOYButton";
import HostButton from "../../Components/HostButton/HostButton";

function Option1Page2() {
  const handleBackClick = () => {
     window.location.href = "Option1Page1";
  };

  const handleFrontClick = () => {
    window.location.href = "Option1Page3";
  };

  return (
 <div >
   <NavBar />
 <div className="Option1Page2">
  <div className="page-content">
    <div className="content-wrapper">
      <Breadcrumb />
      <Progress_Bar2 />

      <div className="section-title">Ενότητα Β - Βασικά Στοιχεία</div>
      <div className="section-divider"></div>
      <div className="subsection-title">Προσωπικά Στοιχεία</div>

      {/* Στοιχεία σε 2 στήλες */}
      <div className="name-buttons-container">
        <Name_Button />
        <Last_Name_Button />
      </div>

      <div className="name-buttons-container">
        <Fathers_Name_Button />
        <Mothers_Name_Button />
      </div>

      <div className="name-buttons-container">
        <BirthYearButton />
        <GenderButton />
      </div>

      <div className="name-buttons-container">
        <FamilyButton />
        <AreParentButton />
      </div>

      {/* Στοιχεία σε 2 στήλες */}
      <div className="name-buttons-container">
        <IDButton />
        <AFMButton />
      </div>

      <div className="name-buttons-container">
        <AMKAButton />
        <DOYButton />
      </div>


      <div className="section-divider"></div>

      <div className="subsection-title">Στοιχεία Επικοινωνίας</div>

      {/* Στοιχεία Επικοινωνίας */}
      <div className="name-buttons-container">
        <CountyButton />
        <CityButton />
      </div>


      <div className="name-buttons-container">
        <StreetButton />
        <StreetNumberButton />
      </div>

      <div className="name-buttons-container">
        <PostalCodeButton />
        <EmailButton />
      </div>

       <div className="name-buttons-container">
        <PhoneNumberButton />
        <CellPhoneNumberButton />
      </div>

      <div className="section-divider"></div>
      <div className="subsection-title">Δυνατότητα Φιλοξενίας</div>
      <div><HostButton /></div>

      <div className="buttonas2-container">
        <div className="back-button">
          <Back_Button onClickHandler={handleBackClick} />
        </div>
        <div className="front-button">
          <Front_Button onClickHandler={handleFrontClick} />
        </div>
      </div>
    </div>
  </div>
  </div>
  <Footer />
 </div>

  );
}

export default Option1Page2;

