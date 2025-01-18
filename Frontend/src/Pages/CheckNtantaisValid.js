import { Redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import App from "./WelcomePage/App";

const CheckNtantaisValid = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const checkIfNtanta = async () => {
      if (!currentUser.isNtanta) {
        console.log("got here");
        navigate("/option1page1", { replace: true });
      }
      navigate("/");
    };
    checkIfNtanta();
  }, []);
};

export default CheckNtantaisValid;
