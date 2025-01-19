import { useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../contexts/AuthContext";
import { Routes } from "../../routes";
import { useLocation, useNavigate } from "react-router-dom";

import "./LoginPage.css";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const authContext = useAuth();
  const { returnURL } = location.state || "/";
  // console.log("Location state: ", location.state); // Debugging line
  // console.log("Return URL: ", returnURL); // Debugging line

  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    if (await authContext.signIn(email, password)) {
      console.log("return Url ", `${returnURL}`);
      // console.log(location.state);
      if (returnURL === undefined || returnURL === null || returnURL === "/") {
        console.log("return was null");
        navigate(Routes.Home);
      } else {
        console.log("return Url ", returnURL);
        const {
          currentUser: { isNtanta },
        } = authContext;
        if (returnURL === "check-ntanta-is-valid" && !isNtanta) {
          navigate(`/option1page1`, { replace: true });
        } else {
          navigate("/ntantades");
        }
      }
    } else {
      setErrorMessage("Invalid username or password."); // Handle login failure
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  useDocumentTitle("Gov Login");

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

      <h2 className="auth-title">Αυθεντικοποίηση Χρήστη</h2>
      <p className="auth-subtitle">
        Στην συνέχεια θα σας ζητηθεί να εισάγετε έναν κωδικό μιας χρήσης που θα
        σταλεί στο κινητό σας
      </p>

      <div className="auth-form">
        <h2>Σύνδεση</h2>
        <p>
          Παρακαλούμε εισάγετε τους κωδικούς σας στο <b>TaxisNet</b> για να
          συνδεθείτε.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({ email, password });
          }}
        >
          <label htmlFor="email">Χρήστης:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="password">Κωδικός:</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                console.log(e.target.value);
                setPassword(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="togglePassword"
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </button>
          </div>

          <div className="auth-buttons">
            <button
              type="button"
              className="cancel-button"
              onClick={() =>
                navigate(location.state?.from?.pathname || Routes.Home)
              }
            >
              Ακύρωση
            </button>
            <button
              type="submit"
              className="submit-button"
              onClick={() => handleSubmit()}
            >
              Σύνδεση
            </button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="auth-footer">
        <p>
          Κέντρο Διαλειτουργικότητας (Κ.Ε.Δ.) Υπουργείου Ψηφιακής Διακυβέρνησης
        </p>
      </footer>
    </div>
  );
}

export default LoginPage;
