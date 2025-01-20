import React, { useState } from "react";
import "./NtantaEvaluationPopup.css";
import NtantaEvaluationFinishedPopup from "./NtantaEvaluationFinishedPopup";

const NtantaEvaluationPopup = ({ onClose }) => {
  const evaluationQuestionsLeft = [
    "Συνεπής στο ωράριο του",
    "Ποιοτική εξυπηρέτηση",
    "Γνώση του αντικειμένου",
  ];

  const evaluationQuestionsRight = [
    "Ευγένεια και επαγγελματισμός",
    "Προθυμία για βοήθεια",
    "Σχέση ποιότητας/τιμής",
  ];

  const [ratings, setRatings] = useState({}); // State to store ratings
  const [isFinishedOpen, setIsFinishedOpen] = useState(false);

  // Function to handle rating selection
  const handleRating = (question, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [question]: rating,
    }));
  };

  // Open modal function
  const openModal = () => {
    console.log("Ratings submitted:", ratings); // Debugging: Log the ratings
    setIsFinishedOpen(true);
  };

  const newCloseAll = () => {
    setIsFinishedOpen(false);
    onClose();
  };

  // Close modal function
  const closeModal = () => {
    setIsFinishedOpen(false);
  };

  return (
    <div className="evaluation-modal">
      <div className="modal">
        <h2>Αξιολόγηση επαγγελματία</h2>
        <p>
          Παρακαλώ συμπληρώστε τα παρακάτω πεδία ανάλογα με το πόσο
          ευχαριστημένοι μείνατε...
        </p>
        <div className="evaluation-content">
          {/* Left Column */}
          <div className="evaluation-column">
            {evaluationQuestionsLeft.map((question, index) => (
              <div key={index} className="evaluation-item">
                <p>{question}</p>
                <div className="rating-options">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      className={`rating-button ${
                        ratings[question] === num ? "selected" : ""
                      }`}
                      onClick={() => handleRating(question, num)}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="evaluation-column">
            {evaluationQuestionsRight.map((question, index) => (
              <div key={index} className="evaluation-item">
                <p>{question}</p>
                <div className="rating-options">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      className={`rating-button ${
                        ratings[question] === num ? "selected" : ""
                      }`}
                      onClick={() => handleRating(question, num)}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-buttons">
          <button onClick={onClose} className="modal-button">
            Κλείσιμο
          </button>
          <button onClick={openModal} className="modal-button">
            Αξιολόγηση
          </button>
        </div>
      </div>

      {isFinishedOpen && (
        <NtantaEvaluationFinishedPopup
          isOpen={isFinishedOpen}
          onClose={() => {
            closeModal();
            onClose();
          }}
          closeAll={newCloseAll}
        />
      )}
    </div>
  );
};

export default NtantaEvaluationPopup;
