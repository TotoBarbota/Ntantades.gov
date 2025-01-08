import { Button } from 'primereact/button';

import './AitiseisSimmetoxis.css'
import Application from './Application';

function AitiseisSimmetoxis() {
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
            <Button label='Υποβολή νέας αίτησης' />

            {/* Three type of applications*/}
            <Application number={555} type={"Έγκυρη"} button={"Επεξεργασία"} />
            <Application number={444} type={"Μη Έγκυρη"} button={"Συνέχεια"} />
            <Application number={333} type={"Σε αναμονή"} button={"Επεξεργασία"} />
        </div>
    );
}

export default AitiseisSimmetoxis;