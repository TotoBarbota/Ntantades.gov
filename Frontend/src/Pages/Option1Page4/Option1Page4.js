import React from 'react';
import './Option1Page4.css';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Progress_Bar4 from "../../Components/Progress_Bar4/Progress_Bar4";
import Back_Button from "../../Components/Back_Button/Back_Button"; 
import Front_Button from "../../Components/Front_Button/Front_Button"; 
import DimosButton from "../../Components/DimosButton/DimosButton"; 
import AvailableButton from "../../Components/AvailableButton/AvailableButton"; 
import NumberSelector from "../../Components/NumberSelector/NumberSelector"; 

function Option1Page4() {

  const handleBackClick = () => {
     window.location.href = "Option1Page3";
  };

  const handleFrontClick = () => {
     window.location.href = "Option1Page5";
  };


	return(
		<div >
			<NavBar />
			<div className = "Option1Page4">
				<div className = "page-content">
					<div className = "content-wrapper">
						<Breadcrumb />
						<Progress_Bar4 />
						<div className="section-divider"></div>
						<div className="section-title">Ενότητα Δ - Διαθεσιμότητα και Πλαίσιο Παροχής Υπηρεσίας</div>
						<h3>Δημιουργία Αγγελίας</h3>
						<h4>Επιλογή Δήμου </h4>
						<p>Επιλέξτε το/τους Δήμο-ους που δραστηριοποιήστε και επιθυμείτε</p>
						<DimosButton />
						<div className="section-divider"></div>
						<h4>Επιλογή ημερών και ωρών </h4>
						<p>Επιλέξτε τις ημέρες και τις ώρες που επιθυμείτε</p>
						<AvailableButton />
						<div className="section-divider"></div>
						<h4>Επιλέξτε τα χρόνια προυπηρεσίας σας στην φροντίδα βρεφών και νηπίων</h4>
						<NumberSelector />
					</div>
				</div>
				<div className="buttonas2-container">
					<div className="back-button">
						<Back_Button onClickHandler={handleBackClick} />
					</div>
					<div className="front-button">
						<Front_Button onClickHandler={handleFrontClick} />
					</div>
				</div>
			</div>
			<Footer />
		</div>




	);

};

export default Option1Page4 ;