import { useEffect, useState } from "react"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from "react-router-dom";
import { Routes } from '../../routes'
import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ApplicationOptions from "../../Components/ApplicatonOptions/ApplicationOptions"

import './ApplicationPage.css'

const ApplicationPage = () => {

    const { applicationId } = useParams();

    return (
        <div className="application-page-container">
            <NavBar />
            <div className="application-page-breadcrumb">
                <Breadcrumb />
            </div>
            <ApplicationOptions applicationNumber={applicationId} approved='1' />
            <Footer />
        </div>
    );
}

export default ApplicationPage;
