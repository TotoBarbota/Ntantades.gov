import React from "react";

import "./SendVoucherPopup.css";

const SendVoucherPopup = ({ onClose }) => {

    return (
        <div className="send-voucher-overlay" onClick={onClose}>
            <div className="modal-content confirmation-modal" onClick={(e) => e.stopPropagation()}>
                <h2>To voucher στάλθηκε επιτυχώς!</h2>
                <p>
                    Ο επαγγελματίας μπορεί να επιβεβαιώσει την αποστολή του voucher <br />
                    μπαίνοντας στην αντίστοιχη σελίδα, αφού πρώτα συνδεθεί με τα στοιχεία του.
                </p>
                <button className="close-button" onClick={() => onClose()}>Κλείσιμο</button>
            </div>  
        </div>
    );
};

export default SendVoucherPopup;
