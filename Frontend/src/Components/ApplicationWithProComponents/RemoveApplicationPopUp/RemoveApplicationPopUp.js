import React from "react";

import "./RemoveApplicationPopUp.css"; // Add styles for the modal

const RemoveApplicationPopUp = ({ onClose }) => {

    return (
        <div className="remove-application-overlay" onClick={onClose}>
            <div className="modal-content confirmation-modal" onClick={(e) => e.stopPropagation()}>
                <h2>Η ακύρωση της αίτησης πραγματοποιήθηκε!</h2>
                <p>
                    Μπορείτε να συνεχίσετε στην ανασκόπηση ή επεξεργασία των υπολοίπων αιτήσεων σας. Ο επαγγελματίας θα <br/>
                    ενημερωθεί για την ακύρωση της αίτησης και δεν θα μπορεί πλέον να την αποδεχτεί
                </p>
                <button className="close-button" onClick={() => onClose()}>Τέλος</button>
            </div>  
        </div>
    );
};

export default RemoveApplicationPopUp;
