import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes";
import "./RegisterPage.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationFailed, setRegistrationFailed] = useState(false);
  const authContext = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setRegistrationFailed(true);
      return;
    }
    try {
      console.log("registering.. ", email, password);
      await authContext.register(email, password);
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
          <p>Ονοματεπώνυμο</p>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
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

        <button type="submit">Εγγραφή</button>
        {registrationFailed && (
          <p className="auth-error">Οι κωδικοί πρόσβασης δεν ταυτίζονται</p>
        )}
      </form>
    </div>
  );
}

export default RegisterPage;
