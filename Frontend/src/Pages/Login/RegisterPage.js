import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes";
import "./RegisterPage.css";

function RegisterPage() {
  const [afm, setAfm] = useState(0);
  const [age, setAge] = useState(0);
  const [amka, setAmka] = useState(0);
  const [canHost, setCanHost] = useState(false);
  const [city, setCity] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
  const [password, setPassword] = useState("");
  const [postcode, setPostcode] = useState("");
  const [region, setRegion] = useState("");
  const [registrationFailed, setRegistrationFailed] = useState(false);
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState(0);
  const [username, setUsername] = useState("");
  const [phone_number, setPhone_number] = useState(0);
  const [professional_description, setProfessional_description] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState(0);

  const authContext = useAuth();

  const navigate = useNavigate();

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
    country: country || "",
    isNtanta: isNtanta || false,
    isParent: isParent || false,
    canHost: canHost || false,
    house_phone_number: house_phone_number || "",
    phone_number: phone_number || 0,
    num_of_experience: num_of_experience || 0,
    doy: doy || "",
    id_number: id_number || "",
    afm: afm || 0,
    amka: amka || 0,
    professional_description: professional_description || "",
    hoursPerWeek: hoursPerWeek || 0,
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setRegistrationFailed(true);
      return;
    }
    try {
      await authContext.register(currentDetails, password);
      await authContext.signIn(email, password);
      navigate(Routes.Home);
    } catch (error) {
      setRegistrationFailed(true);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-header">
        <img
          src="/pictures/png/ggps.png"
          alt="General Secretariat"
          className="auth-logo"
        />
        <img
          src="/pictures/png/ed.png"
          alt="Ministry Logo"
          className="auth-logo"
        />
      </div>

      <h2 className="auth-title">Εγγραφή Χρήστη</h2>
      <p className="auth-subtitle">
        Παρακαλώ συμπληρώστε τα στοιχεία σας για να εγγραφείτε
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Χρήστης</p>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Όνομα</p>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </label>
        <label>
          <p>Επώνυμο</p>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Διεύθυνση Email</p>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Κωδικός πρόσβασης</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Επιβεβαίωση Κωδικού Πρόσβασης</p>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Ηλικία</p>
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.valueAsNumber)}
            required
          />
        </label>

        <label>
          <p>Φύλο</p>
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            required
          >
            <option value="">Επιλέξτε</option>
            <option value="male">Άνδρας</option>
            <option value="female">Γυναίκα</option>
          </select>
        </label>

        <label>
          <p>Περιγραφή</p>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Οδός</p>
          <input
            type="text"
            value={streetName}
            onChange={(event) => setStreetName(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Αριθμός</p>
          <input
            type="text"
            value={streetNumber}
            onChange={(event) => setStreetNumber(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Ταχυδρομικός Κωδικός</p>
          <input
            type="text"
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Περιοχή</p>
          <input
            type="text"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Πόλη</p>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Χώρα</p>
          <input
            type="text"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            required
          />
        </label>
        <label>
          <p>Α.Φ.Μ.</p>
          <input
            type="text"
            value={afm}
            onChange={(event) => setAfm(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Α.Μ.Κ.Α.</p>
          <input
            type="text"
            value={amka}
            onChange={(event) => setAmka(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Δ.Ο.Υ.</p>
          <input
            type="text"
            value={doy}
            onChange={(event) => setDoy(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Αριθμός Ταυτότητας</p>
          <input
            type="text"
            value={id_number}
            onChange={(event) => setId_number(event.target.value)}
            required
          />
        </label>

        <label>
          <p>Είμαι Νταντά</p>
          <input
            type="checkbox"
            checked={isNtanta}
            onChange={(event) => setIsNtanta(event.target.checked)}
          />
        </label>

        <label>
          <p>Είμαι Γονιός</p>
          <input
            type="checkbox"
            checked={isParent}
            onChange={(event) => setIsParent(event.target.checked)}
          />
        </label>

        <label>
          <p>Τηλέφωνο Σπιτιού</p>
          <input
            type="text"
            value={house_phone_number}
            onChange={(event) => setHouse_phone_number(event.target.value)}
          />
        </label>
        <label>
          <p>Τηλέφωνο Κινητό</p>
          <input
            type="text"
            value={phone_number}
            onChange={(event) => setPhone_number(event.target.value)}
          />
        </label>

        <label>
          <p>Μπορώ να φιλοξενήσω</p>
          <input
            type="checkbox"
            checked={canHost}
            onChange={(event) => setCanHost(event.target.checked)}
          />
        </label>

        <label>
          <p>Αριθμός Εμπειρίας</p>
          <input
            type="number"
            value={num_of_experience}
            onChange={(event) =>
              setNum_of_experience(event.target.valueAsNumber)
            }
          />
        </label>
        <label>
          <p>Ώρες Εργασίας την Εβδομάδα</p>
          <input
            type="number"
            value={hoursPerWeek}
            onChange={(event) => setHoursPerWeek(event.target.valueAsNumber)}
          />
        </label>

        <label>
          <p>Περιγραφή Επαγγέλματος</p>
          <textarea
            value={professional_description}
            onChange={(event) =>
              setProfessional_description(event.target.value)
            }
          />
        </label>

        <button type="submit">Εγγραφή</button>
        {registrationFailed && (
          <p className="auth-error">Οι κωδικοί πρόσβασης δεν ταυτίζονται</p>
        )}
      </form>
    </div>
  );
}

export default RegisterPage;
