import { useEffect } from "react"
import './App.css';

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
    useDocumentTitle('Ntantades.gov.gr');

    return (
        <div className="App">
            <NavBar />
            <Breadcrumb />
            <div className='first-section'>
                <MainContent />
                <UsefulPages />
            </div>
            <Footer />
        </div>
    );
}

export default App;
