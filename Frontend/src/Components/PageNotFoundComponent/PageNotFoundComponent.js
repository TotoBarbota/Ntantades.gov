import React, { useEffect } from "react"
import { Button } from 'primereact/button';
import './PageNotFoundComponent.css';
import { Routes } from '../../routes'
import { useNavigate } from 'react-router-dom';


const PageNotFoundComponent = () => {

    const navigate = useNavigate();

    return (
        <div className="pagenotfound-container">
            <div className="pagenotfound-box">
                <img
                    src='/pictures/png/ggps.png'
                    alt=""
                    className="pagenotfound-image"
                />
                <h1>Error 404: Page Not Found</h1>
                <p className="pagenotfound-description">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Button
                    label="Go Home"
                    icon="pi pi-home"
                    className="p-button-rounded p-button-info"
                    onClick={() => navigate(Routes.Home)}
                />
            </div>
        </div>
    );
};

export default PageNotFoundComponent;