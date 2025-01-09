import NavBar from "../../Components/NavBar/NavBar";
import './Option1Page1.css';
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Progress_Bar from "../../Components/Progress_Bar/Progress_Bar";
import Back_Button from "../../Components/Back_Button/Back_Button"; 
import Front_Button from "../../Components/Front_Button/Front_Button"; 


function Option1Page1() {
  // λειτουργικότητα για το κουμπί "ΠΙΣΩ"
  const handleBackClick = () => {
    console.log('Πηγαίνοντας στην προηγούμενη σελίδα...');
    // window.location.href = '/previous-page'; // Ενεργοποίησε για πλοήγηση
  };

   // λειτουργικότητα για το κουμπί "ΜΠΡΟΣΤΑ"
  const handleFrontClick = () => {
    console.log('Πηγαίνοντας στην επόμενη σελίδα...');
    // window.location.href = '/nexct-page'; // Ενεργοποίησε για πλοήγηση
  };
	  return (
		  <div className="Option1Page1">
				<NavBar />
				<div> 
					<Breadcrumb />
					<Progress_Bar />
					<div className="back-button-container">
						<Back_Button onClickHandler={handleBackClick} />
					</div>
					<div className="front-button-container">
						<Front_Button onClickHandler={handleFrontClick} />
					</div>
				</div>
				<Footer />
		  </div>
	  );
}

export default Option1Page1;