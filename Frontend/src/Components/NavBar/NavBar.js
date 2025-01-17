import { Button } from 'primereact/button';
import { IoAccessibilitySharp } from "react-icons/io5";
import { MdAccessibility } from 'react-icons/md';
import { Routes } from '../../routes'

import { useNavigate } from "react-router-dom";
import './NavBar.css';
import { useState } from 'react';

function NavBar() {

    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleAccessibilityMenuTitle = () => {
        //unhide the accessibility menu title

    }

    const handleMyName = () => {
        // unhide my name if i'm loggedIn
    }

    return (
        <div class="NavBar">
            <nav class="NavBar-nav">
                <div className='accessibility'>
                    <button className="accessibilityMenu" ><IoAccessibilitySharp /></button>
                    <p className='accessibilityTitle'>Accessibility Menu</p>
                </div>
                <div className='logo'>
                    <img src={'/pictures/png/govgrYpiresiaFrontidas.png'} alt="Logo" />
                </div>
                <div className='right-section'>
                    <p className="name" >My Name</p>
                    <Button className="connect" label="Connect" onClick={() => navigate(Routes.Login)} />
                </div>
            </nav>
            <div class="line"></div>
        </div>
    );
}

export default NavBar;
