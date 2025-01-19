import { Button } from 'primereact/button';
import { IoAccessibilitySharp } from "react-icons/io5";
import { MdAccessibility } from 'react-icons/md';
import { Routes } from '../../routes'

import { useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useState } from 'react';

function NavBar() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleConnect = () => {

        const returnUrl = location; // Replace with your desired return URL
        console.log("First login", returnUrl);
        navigate(Routes.Login); // Navigate to the login page with returnUrl as a query parameter
    };

    const handleLogout = () => {
        // Clear localStorage and update loggedIn state
        localStorage.removeItem('name');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');
        navigate(Routes.Home); // Redirect to the homepage or another desired route
    };

    const loggedIn = localStorage.getItem('loggedIn') || 'false';
    const name = localStorage.getItem('name') || '';

    return (
        <div class="NavBar">
            <nav class="NavBar-nav">
                <div className='accessibility'>
                    <button className="accessibilityMenu" ><IoAccessibilitySharp /></button>
                    <p className='accessibilityTitle'>Accessibility Menu</p>
                </div>
                <div className='logo'>
                    <img src={'/pictures/png/govgrYpiresiaFrontidas.png'} alt="Logo" onClick={() => navigate(Routes.Home)} />
                </div>
                <div className='right-section'>
                    <p className="name" >{name}</p>
                    <Button
                        className="connect"
                        label={loggedIn === 'true' ? "Disconnect" : "Connect"}
                        onClick={loggedIn === 'true' ? handleLogout : handleConnect}
                    />
                </div>
            </nav>
            <div class="line"></div>
        </div>
    );
}

export default NavBar;
