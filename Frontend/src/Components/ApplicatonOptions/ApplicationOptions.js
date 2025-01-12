import { useEffect, useState } from "react"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from "react-router-dom";
import { Routes } from '../../routes'
import { Button } from 'primereact/button';

import './ApplicationOptions.css'

const ApplicationOptions = ({ applicationNumber, approved }) => {
    const applicationApproval = approved === '1' ? '\u0395\u03B3\u03BA\u03B5\u03BA\u03C1\u03B9\u03BC\u03AD\u03BD\u03B7' : '';
    const approval = approved === '1' ? 'approved-application' : 'not-approved';


    return (
        <div className='application-options-container'>
            <p className="application-number"><b>Αίτηση #{applicationNumber}</b></p>
            <p className={approval}>{applicationApproval}</p>
            <p>
                <b>Παρακάτω, μπορείτε να επιλέξετε επαγγελματία, να δείτε αναλυτικά τις συναντήσεις που έχετε για τη<br />
                    συγκεκριμένη αίτηση, καθώς και τις αιτήσεις συνεργασίας και τα συμφωνητικά που έχουν υπογραφεί.</b>
            </p>
            <div className='application-option-buttons'>
                <Button label='Αναζήτηση Επαγγελματία' />
                <Button label='Συναντήσεις' />
                <Button label='Αιτήσεις συνεργασίας' />
                <Button label='Συμφωνητικό' />
                <Button label='Πιστοποίηση εργασίας / Αποστολή voucher' />
            </div>
        </div>
    );
}

export default ApplicationOptions;