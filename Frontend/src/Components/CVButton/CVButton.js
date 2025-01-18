import React, { useState } from "react";
import "./CVButton.css";
import Back_Button from "../../Components/Back_Button/Back_Button";
import SubButton from "../../Components/SubButton/SubButton";
import { useOptions } from "../../contexts/OptionContext";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../contexts/AuthContext";

const CVButton = () => {
  const [photo, setPhoto] = useState(null);
  const [birthDate, setBirthDate] = useState("");
  const optionContext = useOptions();
  const [formData, setFormData] = useState(
    optionContext ? optionContext.optionDetails : {}
  );
  // console.log("form details", formData);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    // console.log("current data pressed", e);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("new form", formData);
  };

  const handleBackClick = () => {
    optionContext.setOptionDetails(optionContext.optionDetails);
    navigate(`${Routes.Option1Page2}`, { replace: true });
  };

  const authContext = useAuth();

  const handleSubClick = async () => {
    optionContext.setOptionDetails({
      ...optionContext.currentDetails,
      birthDate: birthDate,
    });
    const userRef = collection(db, "users");
    const userId = authContext.userID;
    const newFormData = Object.entries(formData).reduce((acc, [key, value]) => {
      if (value !== "") {
        acc[key] = value;
      }
      return acc;
    }, {});

    try {
      await setDoc(doc(userRef, userId), newFormData, { merge: true });
      alert("Η Οριστικη Υποβολή πραγματοποιήθηκε!");
      navigate(`${Routes.Option1Page3}`, { replace: true });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Παρουσιάστηκε πρόβλημα κατά την οριστική υποβολή. Δοκιμάστε πάλι!"
      );
    }
  };

  return (
    <div
      className="cv-container"
      style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}
    >
      <div className="cv-header">Δημιουργία Βιογραφικού</div>
      <div
        className="cv-content"
        style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
      >
        <div
          className="cv-sidebar"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div className="photo-upload">
            <div className="photo-preview">
              {photo ? (
                <img src={photo} alt="Προεπισκόπηση Φωτογραφίας" />
              ) : (
                <span>Προσθήκη Φωτογραφίας</span>
              )}
            </div>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          </div>
          <ul
            className="sidebar-fields"
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <li style={{ marginBottom: "20px" }}>
              <label>Όνομα</label>
              <input
                type="text"
                name="firstName"
                defaultValue={formData.firstName}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Επώνυμο</label>
              <input
                type="text"
                name="lastName"
                defaultValue={formData.lastName}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Οδός</label>
              <input
                type="text"
                name="streetName"
                defaultValue={formData.streetName}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Αριθμός</label>
              <input
                type="text"
                name="streetNumber"
                defaultValue={formData.streetNumber}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Αριθμός Τηλεφώνου</label>
              <input
                type="text"
                name="phoneNumber"
                defaultValue={formData.phone_number}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                defaultValue={formData.email}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Ημερομηνία Γέννησης</label>
              <input
                type="date"
                defaultValue={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Τόπος Γέννησης</label>
              <input
                type="text"
                name="placeOfBirth"
                defaultValue={formData.birth_place}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Φύλο</label>
              <input
                type="text"
                name="gender"
                defaultValue={formData.gender}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Εθνικότητα</label>
              <input
                type="text"
                name="nationality"
                defaultValue={formData.nationality}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Οικογενειακή Κατάσταση</label>
              <input
                type="text"
                name="maritalStatus"
                defaultValue={formData.family_state}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
          </ul>
        </div>
        <div className="cv-main">
          <div className="cv-section">
            <h3>Περίληψη</h3>
            <textarea
              name="professional_description"
              placeholder="Γράψτε την περίληψή σας..."
              defaultValue={formData.professional_description}
              onChange={handleInputChange}
            />
          </div>
          <div className="cv-section">
            <h3>Εκπαίδευση και Προσόντα</h3>
            <textarea
              name="education"
              placeholder="Προσθέστε εκπαίδευση και προσόντα..."
              defaultValue={formData.education}
              onChange={handleInputChange}
            />
          </div>
          <div className="cv-section">
            <h3>Εργασιακή Εμπειρία</h3>
            <textarea
              name="work_description"
              defaultValue={formData.work_description}
              placeholder="Προσθέστε εργασιακή εμπειρία..."
              onChange={handleInputChange}
            />
          </div>
          <div className="cv-section">
            <h3>Πιστοποιητικό Πρώτων Βοηθειών</h3>
            <textarea
              name="first_aid_description"
              defaultValue={formData.first_aid_description}
              placeholder="Προσθέστε λεπτομέρειες..."
              onChange={handleInputChange}
            />
          </div>
          <div className="cv-section">
            <h3>Συστατικές Επιστολές</h3>
            <textarea
              name="sistatikes"
              defaultValue={formData.sistatikes}
              placeholder="Προσθέστε συστατικές επιστολές..."
              oncChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="button-container">
        <div className="back-button">
          <Back_Button onClickHandler={handleBackClick} />
        </div>
        <div className="front-button">
          <SubButton onClickHandler={handleSubClick} />
        </div>
      </div>
    </div>
  );
};

export default CVButton;
