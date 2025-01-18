import NavBar from "../../Components/NavBar/NavBar";
import "./Option1Page1.css";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Progress_Bar from "../../Components/Progress_Bar/Progress_Bar";
import Back_Button from "../../Components/Back_Button/Back_Button";
import Front_Button from "../../Components/Front_Button/Front_Button";
import Info_Component from "../../Components/Info_Component/Info_Component";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { Routes } from "../../routes";
import { useNavigate } from "react-router-dom";

function Option1Page1() {
  const authContext = useAuth();
  const navigate = useNavigate();
  // console.log("authContext: ", authContext.currentUser);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    setCurrentUser(authContext.currentUser);
  }, [authContext.currentUser]);
  console.log("current user is ", currentUser);

  const handleBackClick = () => {
    navigate("/", { replace: true });
  };

  const handleFrontClick = () => {
    navigate(`${Routes.Option1Page2}`, {
      replace: true,
    });
  };

  return (
    <div className="Some">
      <NavBar />
      <div className="Option1Page1">
        <div>
          <Breadcrumb />
          <Progress_Bar />
          <div className="info-component-container">
            <Info_Component />
          </div>
          <div className="buttonas-container">
            <div className="back-button">
              <Back_Button onClickHandler={handleBackClick} />
            </div>
            <div className="front-button">
              <Front_Button onClickHandler={handleFrontClick} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Option1Page1;
