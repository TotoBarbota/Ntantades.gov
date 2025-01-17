import React from "react";
import "./MoreButton.css";

const MoreButton = ({ type, onClick }) => {
  // Επιλογή του ID και του κειμένου ανάλογα με τον τύπο του κουμπιού
  let id, text;
  switch (type) {
    case "create":
      id = "create";
      text = "Περισσότερα";
      break;
    case "cancel":
      id = "cancel";
      text = "Ακύρωση";
      break;
    case "edit":
      id = "edit";
      text = "Επεξεργασία";
      break;
    default:
      throw new Error("Invalid button type");
  }

  return (
    <button id={id} onClick={onClick}>
      {text}
    </button>
  );
};

export default MoreButton;