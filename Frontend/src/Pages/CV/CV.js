import NavBar from "../../Components/NavBar/NavBar";
import './CV.css';
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CVButton from "../../Components/CVButton/CVButton";

function CV() {

	 return (
    <div >
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