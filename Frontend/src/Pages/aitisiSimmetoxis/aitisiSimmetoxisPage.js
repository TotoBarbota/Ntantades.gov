import { useEffect } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AitiseisSimmetoxis from "../../Components/AitiseisSimmetoxis/AitiseisSimmetoxis";

import "./aitisiSimmetoxisPage.css";

function AitisiSimmetoxisPage() {
  const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  useDocumentTitle("Αίτηση Συμμετοχής");

  return (
    <div className="aitisi-simmetoxis">
      <NavBar />
      <div className="aitisi-simmetoxis-main-container">
        <div className="aitisi-breadcrumb">
          <Breadcrumb />
        </div>
        <AitiseisSimmetoxis />
      </div>
      <Footer />
    </div>
  );
}

export default AitisiSimmetoxisPage;
