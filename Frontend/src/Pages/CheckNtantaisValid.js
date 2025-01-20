import { Redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import App from "./WelcomePage/App";
import { Routes } from "../routes";

const CheckNtantaisValid = () => {
  const authContext = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const checkIfNtanta = async () => {
      if (
        authContext.currentUser.isNtanta === false ||
        authContext.currentUser.isNtanta === null
      ) {
        console.log("got here");
        navigate(`${Routes.Option1Page1}`, { replace: true });
      }
      navigate(`${Routes.Ntantades}`, { replace: true });
    };
    checkIfNtanta();
  }, []);
  return <></>;
};

export default CheckNtantaisValid;
