import React, { useState } from 'react';
import './DetailsButton.css';

function DetailsButton() {
  return (
    <div className="details-button-container">
      <div className="header">
        Ελλιπής Πιστοποιητικά
      </div>
      
      <div className="content-section">
        <h2>Πιστοποιητικό Εκπαίδευσης</h2>
        <p>
          Εάν δεν κατέχετε κάποιο τίτλο εκπαίδευσης , μπορείτε να παρακολουθήσετε το διαδικτυακό μάθημα για την εκπαίδευση των επιμελητών στον σύνδεσμο :{' '}
          <a href="https://howto.gov.gr/login/?new=start/course/view.php?id=50">
            Σύνδεσμος για το μάθημα
          </a>{' '}
           και αφού ολοκληρώσετε με επιτυχία , αποθηκεύστε το pdf που σας δίνεται και όπως το επισυνάψετε στο βιογραφικό σας
        </p>
      </div>

      <hr className="divider" />
      
      <div className="content-section">
        <h2>Πιστοποιητικό Πρώτων Βοηθειών</h2>
        <p>
         Σε περίπτωση που δεν διαθέτετε πιστοποιητικό ή βεβαίωση πρώτων βοηθειών και επιθυμείτε να αποκτήσετε πιστοποιητικό πρώτων βοηθειών του ΕΚΑΒ , συμπληρώστε την παρακάτω υπεύθυνη δήλωση και όπως την επισυνάψετε στο βιογραφικό σας{' '}    
          <a href="https://www.gov.gr/el/processes/polites-kai-kathemeroteta/upeuthune-delose">
            Φόρμα Υπεύθυνης Δήλωσης
          </a>{' '}
        </p>
      </div>
    </div>
  );
}

export default DetailsButton;





