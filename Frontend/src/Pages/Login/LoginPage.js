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

  useEffect(() => {
    console.log(localStorage.getItem("loggedIn"));
    if (localStorage.getItem("loggedIn") === "true") {
      const returnUrl = queryParams.get("returnUrl") || "/";
      navigate(returnUrl);
    }
  }, []);

  const usersForLogin = [
    {
      name: "Thodoris Minaidis",
      username: "tminaidis",
      password: "Qwerty1234!",
    },
    { name: "Argiro Zisi", username: "azisi", password: "Qwerty1234!" },
    // Add more user data
  ];

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Check if the user exists
    const user = usersForLogin.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setErrorMessage(""); // Clear error message

      const returnUrl = queryParams.get("returnUrl") || "/"; // Default to home if no returnUrl
      console.log("return Url ", { returnUrl });

      navigate(
        `${Routes.LoginVerification}?returnUrl=${encodeURIComponent(
          returnUrl
        )}&username=${encodeURIComponent(username)}&name=${encodeURIComponent(
          user.name
        )}`
      );
    } else {
      setErrorMessage("Λανθασμένο όνομα χρήστη ή κωδικός πρόσβασης."); // Show error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior
    handleLogin(); // Perform login validation
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
            checkSumbit({ email, password });
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
              onClick={() => navigate(Routes.Home.path)}
            >
              Ακύρωση
            </button>
            <button
              type="submit"
              className="submit-button"
              onClick={() => checkSumbit({ email, password })}
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
