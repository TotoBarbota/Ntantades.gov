import React, { useEffect, useState } from "react";
import "./Option1Page2.css";

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
import { useAuth } from "../../contexts/AuthContext";
import { Routes } from "../../routes";
import { useNavigate } from "react-router-dom";
import { useOptions } from "../../contexts/OptionContext";

function Option1Page2() {
  const authContext = useAuth();
  // console.log("auth", authContext.currentUser);
  const optionContext = useOptions();

  const navigate = useNavigate();

  const [afm, setAfm] = useState(0);
  const [age, setAge] = useState(0);
  const [amka, setAmka] = useState(0);
  const [canHost, setCanHost] = useState(false);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [doy, setDoy] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [house_phone_number, setHouse_phone_number] = useState("");
  const [id_number, setId_number] = useState("");
  const [isNtanta, setIsNtanta] = useState(false);
  const [isParent, setIsParent] = useState(false);
  const [lastName, setLastName] = useState("");
  const [num_of_experience, setNum_of_experience] = useState(0);
  const [postcode, setPostcode] = useState("");
  const [region, setRegion] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState(0);
  const [username, setUsername] = useState("");
  const [phone_number, setPhone_number] = useState(0);
  const [professional_description, setProfessional_description] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState(0);
  const [father_name, setFather_name] = useState("");
  const [mother_name, setMother_name] = useState("");
  const [family_state, setFamily_state] = useState("");
  const [birth_place, setBirth_place] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());

  const currentDetails = {
    username: username || "",
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    age: age || 0,
    gender: gender || "",
    description: description || "",
    streetName: streetName || "",
    streetNumber: streetNumber || 0,
    postcode: postcode || "",
    region: region || "",
    city: city || "",
    country: country || "Ελλάδα",
    isNtanta: isNtanta || false,
    isParent: isParent || false,
    canHost: canHost || false,
    father_name: father_name || "",
    mother_name: mother_name || "",
    house_phone_number: house_phone_number || "",
    phone_number: phone_number || 0,
    num_of_experience: num_of_experience || 0,
    doy: doy || "",
    id_number: id_number || "",
    afm: afm || 0,
    family_state: family_state || "",
    amka: amka || 0,
    professional_description: professional_description || "",
    hoursPerWeek: hoursPerWeek || 0,
    birth_place: birth_place || "",
    nationality: nationality || "",
    birthDate: birthDate || new Date(),
    work_description: "",
    first_aid_description: "",
    sistatikes: "",
    education: "",
  };

  // useEffect(() => {
  // console.log("currentDetails", currentDetails);
  // }, [currentDetails]);

  const handleBackClick = () => {
    optionContext.setOptionDetails(optionContext.optionDetails);
    navigate(`${Routes.Option1Page1}`, { replace: true });
  };

  const handleFrontClick = () => {
    optionContext.setOptionDetails(currentDetails);
    console.log("currentDetails", optionContext.optionDetails);
    navigate(`${Routes.Option1Page3}`, {
      replace: true,
    });
  };

  return (
    <div className="Some">
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
              <Name_Button props={{ firstName, setFirstName }} />
              <Last_Name_Button props={{ lastName, setLastName }} />
            </div>

            <div className="name-buttons-container">
              <Fathers_Name_Button props={{ father_name, setFather_name }} />
              <Mothers_Name_Button props={{ mother_name, setMother_name }} />
            </div>

            <div className="name-buttons-container">
              <BirthYearButton props={{ age, setAge }} />
              <GenderButton props={{ gender, setGender }} />
            </div>

            <div className="name-buttons-container">
              <FamilyButton props={{ family_state, setFamily_state }} />
              <AreParentButton props={{ isParent, setIsParent }} />
            </div>

            {/* Στοιχεία σε 2 στήλες */}
            <div className="name-buttons-container">
              <IDButton props={{ id_number, setId_number }} />
              <AFMButton props={{ afm, setAfm }} />
            </div>

            <div className="name-buttons-container">
              <AMKAButton props={{ amka, setAmka }} />
              <DOYButton props={{ doy, setDoy }} />
            </div>

            <div className="section-divider"></div>

            <div className="subsection-title">Στοιχεία Επικοινωνίας</div>

            {/* Στοιχεία Επικοινωνίας */}
            <div className="name-buttons-container">
              <CountyButton props={{ region, setRegion }} />
              <CityButton props={{ city, setCity }} />
            </div>

            <div className="name-buttons-container">
              <StreetButton props={{ streetName, setStreetName }} />
              <StreetNumberButton props={{ streetNumber, setStreetNumber }} />
            </div>

            <div className="name-buttons-container">
              <PostalCodeButton props={{ postcode, setPostcode }} />
              <EmailButton props={{ email, setEmail }} />
            </div>

            <div className="name-buttons-container">
              <PhoneNumberButton props={{ phone_number, setPhone_number }} />
              <CellPhoneNumberButton
                props={{ house_phone_number, setHouse_phone_number }}
              />
            </div>

            <div className="section-divider"></div>
            <div className="subsection-title">Δυνατότητα Φιλοξενίας</div>
            <div>
              <HostButton props={{ canHost, setCanHost }} />
            </div>

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
