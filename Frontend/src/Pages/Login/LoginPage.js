import { useEffect, useState } from "react"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { Routes } from '../../routes'

import './LoginPage.css';

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        //await refetch(username, password);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Trigger login when Enter key is pressed
            handleSubmit(event);
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
    useDocumentTitle('Gov Login');

    return (
        <div className="auth-container">

            <div className="auth-header">
                <img src="/pictures/png/ggps.png" alt="General Secretariat" className="auth-logo" />
                <img src="/pictures/png/ed.png" alt="Ministry Logo" className="auth-logo" />
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
                <form>
                    <label htmlFor="username">Χρήστης:</label>
                    <input type="text" id="username" name="username" />

                    <label htmlFor="password">Κωδικός:</label>
                    <div className="password-container">
                        <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={(e) =>
                            setPassword(e.target.value)} onClick={handleKeyPress} />
                        <button type="button" onClick={togglePasswordVisibility} className="togglePassword">
                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                        </button>
                    </div>

                    <div className="auth-buttons">
                        <button type="button" className="cancel-button" onClick={() => navigate(Routes.Home)}>
                            Ακύρωση
                        </button>
                        <button type="submit" className="submit-button">
                            Σύνδεση
                        </button>
                    </div>
                </form>
            </div>

            <footer className="auth-footer">
                <p>
                    Κέντρο Διαλειτουργικότητας (Κ.Ε.Δ.) Υπουργείου Ψηφιακής Διακυβέρνησης
                </p>
            </footer>
        </div>
    );
}

export default LoginPage;
