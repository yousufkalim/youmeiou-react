import React, { useState, useEffect } from "react";
import "./StepFive.css";

import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import { NavLink, Link } from "react-router-dom";
import endPoints from "../../../globals/Constants";
import jwt_decode from "jwt-decode";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useSelector} from "react-redux";
import _ from "lodash";


const buttonValues = [
  {
    name: "Accepté",
    id: 1,
  },
  {
    name: "Réduit",
    id:2,
  },
  {
    name: "Evité",
    id: 3,
  },
  {
    name: "Partagé",
    id: 4,
  }
]


//  Components
// import { Images } from "../../../assets/Assets";
// import Card from "../../../components/Card/Card";
// import Progressbar from "../../../components/Progressbar/Progressbar";
// import Button from "../../../components/Button/Button";
// // import {Col, Row} from "react-bootstrap";

const StepFive = (props) => {

  const [spinner, setSpinner] = useState(true);
  const [show, setShow] = useState(false);
  const [treatments, setTreatments] = useState({});

  const userToken = useSelector((state) => state.user.token);

  

  const getDiagnosticTreatment = () => {
    var decoded = jwt_decode(userToken);
    const userid = parseInt(decoded.Id);
    const diagnosticId = props.state.diagnosticId || props.state.id || props.state.data.diagnosticId || JSON.parse(localStorage.getItem("riskName")).diagnosticId
    fetch(`${endPoints.GET_DIAGNOSTIC_TREATMENT}/${diagnosticId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      }
    })
    .then((res) => res.json())
    .then((result) => {
      setTreatments(result.treatmentOfDiagnostics);
      setSpinner(false);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getDiagnosticTreatment();
  },[])

  const navigateBack = (e) => {
    console.log(props);
    // setSpinner(true);
    var decoded = jwt_decode(userToken);
    const userid = parseInt(decoded.Id);
    const diagnosticId = props.state.diagnosticId || props.state.id || props.state.data.diagnosticId || JSON.parse(localStorage.getItem("riskName")).diagnosticId;
    const treatment = e;
    // console.log(parseInt(e.target.value));
    console.log(e)

    var findValue;

    let bigCities = buttonValues.filter((e) => e.id === e ? e.name : "");

    let newValue = _.find(buttonValues, function(o) { return o.id === e; });
    console.log("found value ", newValue.name);

    // for(let a = 0; a< buttonValues.length; a++){
    //   if(buttonValues[a].id === treatment){
    //     findValue = buttonValues[a].name;
    //     break;
    //   }
    // }
    // console.log("found values ", findValue);

    // const activeInd = buttonValues.map(function (e) {
    //   if(e.id === treatment){
    //     return e.id;

    //   }
    // })
    console.log("value id ", newValue.name);
    // console.log("find id ", activeInd);
    
    // console.log(treatment);


    fetch(endPoints.UPDATE_TREATMENT, {
      method: "POST",
      headers : {
        "Content-Type" : "application/json",
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        diagnosticId : diagnosticId,
        userInfoId : userid,
        treatmentOfRisk : newValue.name
      })
    })
      .then((res) => res.json())
      .then((result) => {
        setSpinner(false);
        if(result.errorMessage ){
          alert(result.errorMessage)
        }
        else{
          if(newValue.name === "Réduit" || newValue.name === "Partagé" ){
            props.changeStepper(100)
          }
          else{
            
            props.routerInfo.history.push("/mes-diagnostics")
          }
        }
       
        
        
      })
      .catch((error) => {
        setSpinner(false);
        // console.log(error)
      })
  };

  const onClick = (e) => {
    // console.log(e.target.value);
  };

  const handleClose = () => {
    setShow(false)

  };

  console.log(treatments);

    return (
      <div className="step-five-container">
         {spinner && (
                  <div className="spinner">
                    <CircularProgress className="circular-spinner-blue" />
                  </div>
                )}
        <div className="step-five-header">
          <div style={{ flexBasis: "45%" }} className={treatments.acceptation === false && "step-five-card-disabled"}>
            <Card
              style={{
                padding: "3rem",
                borderRadius: "3.5rem",
              }}
            >
              <div className="step-five-content-container">
                <div className="step-five-card-heading">
                  Acceptation d’un risque
                </div>

                <div className="step-five-card-content">
                  J'accepte le risque et ses conséquences financières
                  éventuelles, malgré vos conseils.
                </div>
                <div className="text-center pt-5">
                  <Button secondary disabled={treatments.acceptation === false && true} onClick={() => navigateBack(1)} value="1">
                    Accepté
                  </Button>
                </div>
              </div>
            </Card>
            {
              treatments.acceptation === false && (
                <div className="step-five-card-layer"></div>
              )
            }
          </div>
          <div style={{ flexBasis: "45%" }} className={treatments.réduction === false && "step-five-card-disabled"}>
            <Card
              style={{
                padding: "3rem",
                borderRadius: "3.5rem",
              }}
            >
              <div className="step-five-content-container">
                <div className="step-five-card-heading">
                  Réduction d’un risque
                </div>

                <div className="step-five-card-content">
                  Je souhaite réduire le risque et choisir ma criticité cible.
                  <div className="step-five-card-text">
                    Paiement 49 € HT + TVA pour accéder au plan d'actions
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button disabled={treatments.réduction === false && true} secondary onClick={() => navigateBack(2)} value="2">
                    Réduit
                  </Button>
                </div>
              </div>
            </Card>
            {
              treatments.réduction === false && (
                <div className="step-five-card-layer"></div>
              )
            }
          </div>
        </div>

        <div className="step-five-header step-five-header-2">
          <div style={{ flexBasis: "45%" }} className={treatments.evitement === false && "step-five-card-disabled"}>
            <Card
              style={{
                padding: "3rem",
                borderRadius: "3.5rem",
              }}
            >
              <div className="step-five-content-container">
                <div className="step-five-card-heading">
                  Évitement d’un risque
                </div>

                <div className="step-five-card-content">
                  J'évite le risque, et je renonce donc à l'opportunité qui
                  m'est offerte.
                </div>
                <div className="text-center pt-5">
                  <Button disabled={treatments.evitement === false && true} secondary onClick={() => navigateBack(3)} value="3">
                    Evité
                  </Button>
                </div>
              </div>
            </Card>
            {
              treatments.evitement === false && (
                <div className="step-five-card-layer"></div>
              )
            }
          </div>
          <div style={{ flexBasis: "45%" }} className={treatments.partagé === false && "step-five-card-disabled"}>
            <Card
              style={{
                padding: "3rem",
                borderRadius: "3.5rem",
              }}
            >
              <div className="step-five-content-container">
                <div className="step-five-card-heading">
                  Partage d’un risque
                </div>

                <div className="step-five-card-content">
                  Je souhaite partager le risque avec un assureur car je ne sais
                  pas autofinancer l'éventuel risque lié à cette opportunité et
                  souhaite consulter le plan d'actions sans engagement.
                  <div className="step-five-card-text">
                    Paiement 49 € HT + TVA pour accéder au plan d'actions
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button disabled={treatments.partagé === false && true} secondary onClick={() => navigateBack(4)} value="4">
                    Partagé
                  </Button>
                </div>
              </div>
            </Card>
            {
              treatments.partagé === false && (
                <div className="step-five-card-layer"></div>
              )
            }
          </div>
        </div>
      </div>
    );

}

export default StepFive;
