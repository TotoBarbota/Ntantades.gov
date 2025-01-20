import { Button } from "primereact/button";
import { IoAccessibilitySharp } from "react-icons/io5";
import { MdAccessibility } from "react-icons/md";
import { Routes } from "../../routes";

import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function NavBar() {
  const navigate = useNavigate();
  const authContext = useAuth();
  const [username, setUsername] = useState(authContext.username);

  return (
    <div className="NavBar">
      <nav className="NavBar-nav">
        <div className="accessibility">
          <button className="accessibilityMenu">
            <IoAccessibilitySharp />
          </button>
          <p className="accessibilityTitle">Accessibility Menu</p>
        </div>
        <div className="logo">
          <img src={"/pictures/png/govgrYpiresiaFrontidas.png"} alt="Logo" />
        </div>
        <div className="right-section">
          {authContext.isAuthenticated ? (
            <>
              <p className="name">{authContext.username}</p>
              <Button
                className="connect"
                label="Logout"
                onClick={() => {
                  authContext.logout();
                  navigate(Routes.Home);
                }}
              />
            </>
          ) : (
            <Button
              className="connect"
              label="Connect"
              onClick={() => navigate(Routes.Login)}
            />
          )}
        </div>
      </nav>
      <div className="line"></div>
    </div>
  );
}

export default NavBar;
