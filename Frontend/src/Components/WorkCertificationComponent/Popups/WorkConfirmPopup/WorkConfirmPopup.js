import React, { useState } from "react";
import "./WorkConfirmPopup.css"; // Add styles for the modal
import SendVoucherPopup from "./SendVoucherPopup";

const WorkConfirmPopup = ({ onClose, month, year }) => {
    const [isSendVoucherOpen, setIsSendVoucherOpen] = useState(false);


    const newCloseAll = () => {
        setIsSendVoucherOpen(false);
        onClose();
    };

    // Close modal function
    const closeModal = () => {
        setIsSendVoucherOpen(false);
    };

    const openModal = () => {
        setIsSendVoucherOpen(true);
    };

    return (
        <div className="work-confirm-overlay" onClick={onClose}>
            <div className="modal-content confirmation-modal" onClick={(e) => e.stopPropagation()}>
                <h2>Η εργασία για: {month} {year} καταγράφηκε</h2>
                <p>
                    Πιέστε το κουμπί “Αποστολή voucher” για να αποσταλλεί το <br/> voucher στον επαγγελματία  
                </p>
                <button className="close-button" onClick={() => openModal()}>Αποστολή voucher</button>
            </div>  

            {isSendVoucherOpen && (
                <SendVoucherPopup
                    onClose={() => {
                        closeModal();
                        onClose();
                    }}
                />
            )}

        </div>
    );
};

export default WorkConfirmPopup;
