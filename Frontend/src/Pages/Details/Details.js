import NavBar from "../../Components/NavBar/NavBar";
import './Details.css';
import Footer from "../../Components/Footer/Footer";
import DetailsButton from "../../Components/DetailsButton/DetailsButton";
import Back_Button from "../../Components/Back_Button/Back_Button";
import SubButton from "../../Components/SubButton/SubButton";

function Details() {
   const handleBackClick = () => {
     window.location.href = "Option1Page3";
  };
    const handleSubClick = () => {
     alert("Η Οριστικη Υποβολή πραγματοποιήθηκε!");
  };
	return(
    <div className="Some">
    <NavBar />
	<div className="Details">
		<DetailsButton />
        <div className="buttonas-container">
            <div className="back-button">
                <Back_Button onClickHandler={handleBackClick} />
            </div>
            <div className="front-button">
                <SubButton onClickHandler={handleSubClick} />
            </div>
        </div>
	</div>
    </div>
	);

};
export default  Details;