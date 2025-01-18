import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

import './AitiseisSimmetoxis.css'
import Application from './Application';
import { Routes } from '../../routes';

function AitiseisSimmetoxis() {
    const navigate = useNavigate();
    return (
        <div className='aitiseis-simmetoxis-container'>
            <h1>Ηλεκτρονική Αίτηση Συμμετοχής</h1>
            <h3><b>Αίτηση ωφελουμένων στη Δράση Νταντάδες της Γειτονιάς <br/>
                Υπηρεσία κατ' οίκον φροντίδας βρεφών και νηπίων από 2 μηνών έως 2,5 ετών</b>
            </h3>
            <div className='blue-notification'>
                <span>Δείτε τους όρους της πρόσκλησης εδώ:&nbsp;</span>
                <a href='#'>Όροι πρόσκλησης</a>
            </div>
            <Button label='Υποβολή νέας αίτησης' onClick={() => navigate(Routes.ParentFormToParticipate)} />

            {/* Three type of applications*/}
            <div className="applications-side">
            <Application number={555} type={1} button={"Επεξεργασία"} />
            <Application number={444} type={0} button={"Συνέχεια"} />
            <Application number={333} type={2} button={"Επεξεργασία"} />
            </div>
        </div>
    );
}

export default AitiseisSimmetoxis;