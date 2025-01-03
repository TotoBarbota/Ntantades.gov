import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logos Section */}
                <div className="footer-logos">
                    <img
                        src="/pictures/png/eu2.png"
                        alt="European Union Logo"
                        className="footer-logo-eu"
                    />
                    <img
                        src="/pictures/GreekGov.png"
                        alt="Government Logo"
                        className="footer-logo"
                    />
                </div>

                {/* Copyright Section */}
                <div className="footer-copyright">
                    <p>
                        © Copyright 2022 - Υλοποίηση από το{" "}
                        <a href="https://www.eaeyte.gr" target="_blank" rel="noreferrer">
                            ΕΔΥΤΕ
                        </a>{" "}
                        με χρήση{" "}
                        <a href="https://opensource.org" target="_blank" rel="noreferrer">
                            Ανοιχτού Λογισμικού
                        </a>
                        . -{" "}
                        <a href="/terms-of-service" target="_blank">
                            Όροι Χρήσης
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
