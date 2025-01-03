import { useEffect } from "react"
import './App.css';

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

function App() {

    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    useDocumentTitle('Ntantades.gov.gr');

    const breadcrumbTitle = "Ntantades.gov";

    return (
        <div className="App">
            <NavBar />
            <Breadcrumb/>
            <Footer />
        </div>
    );
}

export default App;
