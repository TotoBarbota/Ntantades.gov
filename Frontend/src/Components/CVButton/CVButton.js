import React, { useState } from "react";
import "./CVButton.css";
import Back_Button from "../../Components/Back_Button/Back_Button";
import SubButton from "../../Components/SubButton/SubButton";

const CVButton = () => {
  const [photo, setPhoto] = useState(null);
  const [birthDate, setBirthDate] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    placeOfBirth: "",
    gender: "",
    nationality: "",
    maritalStatus: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

     const handleBackClick = () => {
     window.location.href = "Option1Page3";
  };
    const handleSubClick = () => {
     alert("Η Οριστικη Υποβολή πραγματοποιήθηκε!");
  };

  return (
    <div className="cv-container" style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}>
      <div className="cv-header">Δημιουργία Βιογραφικού</div>
      <div className="cv-content" style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
        <div className="cv-sidebar" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <div className="photo-upload">
            <div className="photo-preview">
              {photo ? (
                <img src={photo} alt="Προεπισκόπηση Φωτογραφίας" />
              ) : (
                <span>Προσθήκη Φωτογραφίας</span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>
          <ul className="sidebar-fields" style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            <li style={{ marginBottom: "20px" }}>
              <label>Ονοματεπώνυμο</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Διεύθυνση</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Αριθμός Τηλεφώνου</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Ημερομηνία Γέννησης</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Τόπος Γέννησης</label>
              <input
                type="text"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Φύλο</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Εθνικότητα</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <label>Οικογενειακή Κατάσταση</label>
              <input
                type="text"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                style={{ display: "block", marginTop: "5px" }}
              />
            </li>
          </ul>
        </div>
        <div className="cv-main">
          <div className="cv-section">
            <h3>Περίληψη</h3>
            <textarea placeholder="Γράψτε την περίληψή σας..." />
          </div>
          <div className="cv-section">
            <h3>Εκπαίδευση και Προσόντα</h3>
            <textarea placeholder="Προσθέστε εκπαίδευση και προσόντα..." />
          </div>
          <div className="cv-section">
            <h3>Εργασιακή Εμπειρία</h3>
            <textarea placeholder="Προσθέστε εργασιακή εμπειρία..." />
          </div>
          <div className="cv-section">
            <h3>Πιστοποιητικό Πρώτων Βοηθειών</h3>
            <textarea placeholder="Προσθέστε λεπτομέρειες..." />
          </div>
          <div className="cv-section">
            <h3>Συστατικές Επιστολές</h3>
            <textarea placeholder="Προσθέστε συστατικές επιστολές..." />
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




