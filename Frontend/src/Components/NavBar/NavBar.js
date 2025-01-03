import { Button } from 'primereact/button';
import { IoAccessibilitySharp } from "react-icons/io5";
import './NavBar.css';

function NavBar() {

    return (
        <div class="NavBar">
            <nav class="NavBar-nav">
                <button className="accessibilityMenu" ><IoAccessibilitySharp /></button>
                <div className='logo'>
                    <img src={'/pictures/png/govgrYpiresiaFrontidas.png'} alt="Logo" />
                </div>
                <div className='right-section'>
                    <p className="name" >My Name</p>
                    <Button className="connect" label="Connect" />
                </div>
            </nav>
            <div class="line"></div>
        </div>
    );
}

export default NavBar;
