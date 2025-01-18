import { useParams } from "react-router-dom";
import React from "react";
import { useEffect } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ApplicationOptions from "../../Components/ApplicatonOptions/ApplicationOptions";

import "./ApplicationPage.css";

const ApplicationPage = () => {
  const { applicationId } = useParams();

  const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  useDocumentTitle(`Αίτηση ${applicationId}`);

  return (
    <div className="application-page-container">
      <NavBar />
      <div className="application-page-breadcrumb">
        <Breadcrumb />
      </div>
      <ApplicationOptions applicationNumber={applicationId} approved="1" />
      <Footer />
    </div>
  );
};

export default ApplicationPage;
