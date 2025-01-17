import React from "react";

import "./ConfirmProblemPopup.css";

const ConfirmProblemPopup = ({ onClose }) => {

    return (
        <div className="confirm-problem-overlay" onClick={onClose}>
            <div className="modal-content confirmation-modal" onClick={(e) => e.stopPropagation()}>
                <h2>Λυπουμαστε πολυ ...</h2>
                <p>
                    Σας ευχαριστουμε που μας ενημερωσατε. Θα μελετησουμε πολυ σοβαρα το προβλημα σας <br />
                    και θα επανελθουμε οταν υπαρχει καποιο νεο σχετικα με την υποθεση σας
                </p>
                <button className="close-button" onClick={() => onClose()}>Κλείσιμο</button>
            </div>  
        </div>
    );
};

export default ConfirmProblemPopup;
