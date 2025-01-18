import React from "react";
import { useLocation, Link } from "react-router-dom";
import { IoHome } from "react-icons/io5"; // Import the IoHome icon from react-icons
import { Routes } from "../../routes";

import './Breadcrumb.css'

const Breadcrumb = () => {
    const location = useLocation();

    // Split the pathname into parts
    const pathParts = location.pathname.split("/").filter(Boolean);

    // Construct paths for each folder
    const breadcrumbs = pathParts.map((part, index) => {
        const path = `/${pathParts.slice(0, index + 1).join("/")}`;
        return { name: part, path };
    });
     
    return (
        <div className='breadcrumb'>
            <a href={Routes.Home}><IoHome style={{ fontSize: "1.2rem", color: "#0081D6" }} /></a>
            <Link to={Routes.Home} style={{ color: "#0081D6", fontWeight: "bold", marginLeft: "4px" }}>Ntantades.gov /</Link>
            {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.path}>
                    <Link to={crumb.path} style={{ color: "#0081D6", fontWeight: "bold" }}>&nbsp;{crumb.name}</Link>
                    {index < breadcrumbs.length - 1 && <span>/</span>} 
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumb;
