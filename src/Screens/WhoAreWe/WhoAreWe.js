import "./WhoAreWe.css";
import React, { Component,useState } from "react";
import CustomHeader from "../../components/CustomNavbar/CustomNavabar";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import Popup from "../../components/Popup/popup";
import Button from "../../components/Button/Button";
import { FaRocket } from 'react-icons/fa';
function WhoAreWe() {
    const [show, setShow] = React.useState(false);
    const [error, setError] = useState({ email: "" });
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    function handleOpenModal() {
        setShow(!show);
      }
      const inputChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
        if (e.target.name === "email") {
          var mailformat =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if (!e.target.value.match(mailformat)) {
            setError({ ...error, email: "Format d'email invalide" });
          } else {
            setError({ ...error, email: "" });
          }
        }
        console.log(data);
      };
    return (
        <div>
          <div>
       <CustomHeader isVisible={false}/>
        <div className="landing">
          <div className="page-heading-1" style={{marginTop:"5rem"}}>Qu’est-ce</div>
          <div className="page-heading-2">qu’est RiskR ?</div>
          <div className="page-content">
            RiskR est un outil qui permet de déterminer les risques auxquels
            votre entreprise est exposée. Avant tout, il faut savoir que la
            gestion du risque n’est pas dresser une liste de tous les défauts de
            votre entreprise.C’est tout le contraire, RiskR permet de consolider
            et pérenniser votre entreprise, nous voulons cibler les risques, les
            éradiquer et prévenir leur occurrence. Identifier un risque est une
            chance, la chance de pouvoir y remédier au plus vite, déceler des
            défaillances est une façon plus qu’efficace de se perfectionner à
            l’aide de nos plans d’action et de notre suivi de leur exécution. Ce
            travail nécessaire permet une amélioration du ROI (Return on
            Investment) et du ROE (Return on Expectation)
          </div>
        </div>
        <Popup fullscreen={true} show={show} setShow={setShow} handleClose={handleOpenModal}>


      </Popup>
          </div>

        <Footer handleOpenModal={handleOpenModal}/>
      </div>
    )
}

export default WhoAreWe
