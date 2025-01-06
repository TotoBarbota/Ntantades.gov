import { useEffect, useState } from "react"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { Routes } from '../../routes'

import './LoginPage.css';

function LoginVerificationPage() {
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

            <div className="auth-form">
                <h3>Επαλήθευση κωδικού</h3>
                <p>
                    Εισάγετε τον εξαψήφιο κωδικό μιας χρήσης που λάβατε και πατήστε <b>«Επιβεβαίωση»</b>. Αν δεν λάβετε τον
                    κωδικό εντός δύο λεπτών. μπορείτε να ζητήσετε νέο πατώντας <b>«Επαναποστολή κωδικού»</b>.
                </p>
                <form className="verification-form">
                    <label htmlFor="password">Κωδικός:</label>
                    <div className="password-container">
                        <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={(e) =>
                            setPassword(e.target.value)} onClick={handleKeyPress} />
                        <button type="button" onClick={togglePasswordVisibility} className="togglePassword-verification">
                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                        </button>
                    </div>

                    <div className="auth-buttons-verification">
                        <div className="first-row">
                            <Button type="button" className="submit-button-verification">
                                Επιβεβαίωση
                            </Button>
                            <Button type="submit" className="submit-button-verification">
                                Επαναποστολη κωδικου
                            </Button>
                        </div>
                        <Button type="submit" className="submit-button-verification" onClick={() => navigate(Routes.Home)}>
                            Ακύρωση
                        </Button>
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

export default LoginVerificationPage;
