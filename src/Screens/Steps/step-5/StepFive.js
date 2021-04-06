import React, { Component } from "react";
import "./StepFive.css";

import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import { NavLink, Link } from "react-router-dom";
import endPoints from "../../../globals/Constants";
import jwt_decode from "jwt-decode";
import CircularProgress from "@material-ui/core/CircularProgress";


//  Components
// import { Images } from "../../../assets/Assets";
// import Card from "../../../components/Card/Card";
// import Progressbar from "../../../components/Progressbar/Progressbar";
// import Button from "../../../components/Button/Button";
// // import {Col, Row} from "react-bootstrap";

class StepFive extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       spinner: false,
       show: false
    }
  }
  


  componentDidMount() {
    // this.navigateBack();
  }
  navigateBack = (e) => {
    // console.log(this.props.routerInfo);
    this.setState({spinner: true});
    const token = sessionStorage.getItem('token');
    var decoded = jwt_decode(token);
    const userid = parseInt(decoded.Id);
    const diagnosticId = this.props.state.diagnosticId;
    const treatment = e.target.value;
    console.log(treatment);
    fetch(endPoints.UPDATE_TREATMENT, {
      method: "POST",
      headers : {
        "Content-Type" : "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        diagnosticId : diagnosticId,
        userInfoId : userid,
        treatmentOfRisk : treatment
      })
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({spinner: false});
        result.errorMessage ? 
        alert(result.errorMessage)
        :
        this.props.routerInfo.history.push("/mes-diagnostics")
        
      })
      .catch((error) => {
        this.setState({spinner: false});
        console.log(error)
      })
  };

  onClick = (e) => {
    // console.log(e.target.value);
  };

  handleClose = () => {
    this.setState({show: false});
  };

  render() {
    const {spinner} = this.state;
    return (
      <div className="step-five-container">
         {spinner && (
                  <div className="spinner">
                    <CircularProgress className="circular-spinner-blue" />
                  </div>
                )}
        <div className="step-five-header">
          <div style={{ flexBasis: "45%" }}>
            <Card
              style={{
                padding: "3rem",
                borderRadius: "5.4rem",
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
                  <Button secondary onClick={this.navigateBack} value="Accepté">
                    Accepté
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          <div style={{ flexBasis: "45%" }}>
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
                  <Button secondary onClick={this.navigateBack} value="Réduit">
                    Réduit
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="step-five-header step-five-header-2">
          <div style={{ flexBasis: "45%" }}>
            <Card
              style={{
                padding: "3rem",
                borderRadius: "5.4rem",
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
                  <Button secondary onClick={this.navigateBack} value="Evité">
                    Evité
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          <div style={{ flexBasis: "45%" }}>
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
                  <Button secondary onClick={this.navigateBack} value="Partagé">
                    Partagé
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default StepFive;
