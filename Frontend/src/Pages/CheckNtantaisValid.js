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

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-3">
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <p className="text-center">Loggin in...</p>
      </div>
    </div>
  );
};

export default CheckNtantaisValid;
