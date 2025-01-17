import React from 'react';
import './Option1Page3.css';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Progress_Bar3 from "../../Components/Progress_Bar3/Progress_Bar3";
import CreateButton from "../../Components/CreateButton/CreateButton";
import SumButton from "../../Components/SumButton/SumButton";
import MoreButton from "../../Components/MoreButton/MoreButton";
import BiographyCreation from "../../Components/BiographyCreation/BiographyCreation"
import FileButton from "../../Components/FileButton/FileButton";
import Back_Button from "../../Components/Back_Button/Back_Button"; 
import Front_Button from "../../Components/Front_Button/Front_Button"; 

function Option1Page3() {
  const handleCreateClick = () => {
    window.location.href = "CV"; // Replace with your desired URL
  };

  const handleAddClick = () => {
  // Δημιουργούμε ένα κρυφό input για αρχεία
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  
  // Προσθέτουμε ακροατή για να χειριστούμε την επιλογή αρχείου
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Επιλέχθηκε αρχείο:", file.name);
      // Εδώ μπορείς να προσθέσεις επιπλέον λειτουργικότητα, όπως το ανέβασμα του αρχείου
    }
  });

  // Ανοίγουμε το παράθυρο επιλογής αρχείου
  fileInput.click();
};


  const handleCancelClick = () => {
    alert("Η Ακύρωση πραγματοποιήθηκε!");
    // Add logic to clear stored data here
  };

  const handleEditClick = () => {
    window.location.href = "CV"; // Same as "Create" button URL
  };
    const handleBackClick = () => {
     window.location.href = "Option1Page2";
  };

  const handleFrontClick = () => {
     window.location.href = "Option1Page4";
  };



	return (
	
  <div>
	<NavBar />
	<div className = "Option1Page3">
	<div className = "page-content">
		<div className = "content-wrapper">
			<Breadcrumb />
			<Progress_Bar3 />
			 <div className="section-title">Ενότητα Γ - Λοιπά Στοιχεία</div>
			<div className="section-divider"></div>
			<h2>Εκπαίδευση και Πιστοποιήσεις</h2>
			<div> <BiographyCreation /></div>
			<div className="info-buttons-container">
			<div className="buttons-container">
				<CreateButton type="create" onClick={handleCreateClick} />
				<div className="small-buttons">
					<CreateButton type="cancel" onClick={handleCancelClick} />
					<CreateButton type="edit" onClick={handleEditClick} />
				</div>
			</div>

			<div className="buttons-container">
				<SumButton type="create" onClick={handleCreateClick} />
				<div className="small-buttons">
					<SumButton type="cancel" onClick={handleCancelClick} />
					<SumButton type="edit" onClick={handleEditClick} />
				</div>
			</div>

			<div className="buttons-container">
				<MoreButton type="create" onClick={handleCreateClick} />
				<div className="small-buttons">
					<MoreButton type="cancel" onClick={handleCancelClick} />
					<MoreButton type="edit" onClick={handleEditClick} />
				</div>
			</div>
			</div>
		<div className="section-divider"></div>
	    <h2>Πιστοποιητικά Υγείας</h2>
		<p>Αυτόματη ενημέρωση από τα συστήματα της ΗΔΙΚΑ εάν έχει εκδοθεί σχετική βεβαίωση</p>
		<p> Σε περίπτωση που δεν εμφανίζεται η πράσινη ένδειξη σε κάποιο πιστοποιητικό , επικοινωνήστε με τον γιατρό σας</p>


	<div className="name-buttons-container">
		<p>  Παθολόγος </p>
		<div className="buttons-container">
			<FileButton type="create" onClick={handleAddClick} />
			<div className="small-buttons">
				<FileButton type="cancel" onClick={handleCancelClick} />
				<FileButton type="edit" onClick={handleAddClick} />
			</div>
		</div>
      </div>

	  <div className="name-buttons-container">
		<div>Δερματολόγος</div>
		<div className="buttons-container">
			<FileButton type="create" onClick={handleAddClick} />
			<div className="small-buttons">
				<FileButton type="cancel" onClick={handleCancelClick} />
				<FileButton type="edit" onClick={handleAddClick} />
			</div>
		</div>
      </div>

	  <div className="name-buttons-container">
		<div>Ψυχικής Υγείας</div>
		<div className="buttons-container">
			<FileButton type="create" onClick={handleAddClick} />
			<div className="small-buttons">
				<FileButton type="cancel" onClick={handleCancelClick} />
				<FileButton type="edit" onClick={handleAddClick} />
			</div>
		</div>
      </div>

	  	<div className="section-divider"></div>
	    <h2>Λοιπά Πιστοποιητικά</h2>
		<p>Σε περίπτωση που δεν εμφανίζεται η πράσινη ένδειξη σε κάποιο πιστοποιητικό , ελέγξτε την εγκυρότητα των πιατοποιητικών σας</p>

		<div className="subsection-title">Απόσπασμα ποινικού μητρώου γενικής χρήσης</div>
		<div className="buttons-container">
			<FileButton type="create" onClick={handleAddClick} />
			<div className="small-buttons">
				<FileButton type="cancel" onClick={handleCancelClick} />
				<FileButton type="edit" onClick={handleAddClick} />
			</div>
        </div>

	    <div className="subsection-title">Πιστοποιητικό Γλωσσομάθειας</div>
		<div>Μόνο για αλλοδαπούς</div>
	    <div className="buttons-container">
			<FileButton type="create" onClick={handleAddClick} />
			<div className="small-buttons">
				<FileButton type="cancel" onClick={handleCancelClick} />
				<FileButton type="edit" onClick={handleAddClick} />
			</div>
        </div>

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

export default Option1Page3;