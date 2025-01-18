import React from 'react';

const BiographyCreation = () => {
  return (
    <div className="max-w-2xl">
      <div className="bg-blue-500 text-white p-3 rounded-t-lg border-2 border-blue-600">
        <h3 className="text-lg font-medium">Δημιουργία ή Επισύναψη Βιογραφικού</h3>
      </div>
      <div className="p-4">
        <p className="mb-2">
          Παρακάτω μπορείτε να δημιουργήσετε ή να επισυνάψετε το βιογραφικό σας.
        </p>
        <p className="mb-2">
          Το επίπεδο εκπαίδευσης και το πιστοποιητικό πρώτων βοηθειών είναι υποχρεωτικό
        </p>
        <p>
          Εάν δεν έχετε κάτι από αυτά, πατήστε{' '}
          <span className="text-blue-600 cursor-pointer hover:text-blue-700">
            Περισσότερα
          </span>
        </p>
      </div>
    </div>
  );
};

export default BiographyCreation;