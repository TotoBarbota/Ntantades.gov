import NavBar from "../../Components/NavBar/NavBar";
import './CV.css';
import Footer from "../../Components/Footer/Footer";
import CVButton from "../../Components/CVButton/CVButton";

function CV() {

	 return (
    <div className="Some">
        <NavBar />
        <div className="CV">
            <div> 
                <CVButton />
            </div>
        </div>
        <Footer />
    </div>
     );

};

export default CV; 