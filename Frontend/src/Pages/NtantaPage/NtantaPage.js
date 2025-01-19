import { useParams } from "react-router-dom";
import React from "react";
import { useEffect } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import "./ntantaPage.css";
import NtantaOptions from "../../Components/NtantaOptions/NtantaOptions";
import NtantaProfile from "./NtantaProfile";

const NtantaPage = () => {
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
      <div className="application-options-container">
        <NtantaProfile />
        <div className="application-options-divider-line" />

        <NtantaOptions />
      </div>
      <Footer />
    </div>
  );
};

export default NtantaPage;
