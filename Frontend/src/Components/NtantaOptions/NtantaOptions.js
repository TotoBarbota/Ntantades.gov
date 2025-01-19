import { useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes";
import { Button } from "primereact/button";

import "./NtantaOptions.css";

const NtantaOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="application-options-container">
      <div className="application-option-buttons">
        <Button
          label="Συναντήσεις"
          onClick={() => navigate(Routes.NtantaMeeting)}
        />
        <Button
          label="Invites"
          onClick={() => navigate(Routes.NtantaInvites)}
        />
        <Button
          label="Ιστορικό"
          onClick={() => navigate(Routes.NtantaHistory)}
        />
      </div>
      <div className="application-option-buttons">
        <Button
          label="Συμφωνητικά"
          onClick={() => navigate(Routes.NtantaAgreements)}
        />
        <Button
          label="Invites"
          onClick={() => navigate(Routes.NtantaInvites)}
        />
        <Button
          label="Αξιολογήσεις"
          onClick={() => navigate(Routes.NtantaRatings)}
        />
      </div>
    </div>
  );
};

export default NtantaOptions;
