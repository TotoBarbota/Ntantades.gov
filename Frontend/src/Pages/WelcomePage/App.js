import { useEffect } from "react";
import "./App.css";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import MainContent from "../../Components/WelcomePage/MainContent";
import UsefulPages from "../../Components/WelcomePage/UsefulPages";

function App() {
  const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  useDocumentTitle("Ntantades.gov.gr");

  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Breadcrumb />
        <div className="first-section">
          <MainContent />
          <UsefulPages />
        </div>
        <div className="blue-line"></div>
        <span>
          Για δυσκολίες ή παρατηρήσεις παρακαλούμε επικοινωνήστε με τα τηλέφωνα
          2103258080 - 2103258090  ή στείλτε μήνυμα στην ηλεκτρονική διεύθυνση{" "}
        </span>
        <a href="#">ntantades@yeka.gr</a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
