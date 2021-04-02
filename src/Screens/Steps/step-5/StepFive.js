import React, { Component } from "react";
import "./StepFive.css";

import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import {NavLink ,Link} from "react-router-dom";

//  Components
// import { Images } from "../../../assets/Assets";
// import Card from "../../../components/Card/Card";
// import Progressbar from "../../../components/Progressbar/Progressbar";
// import Button from "../../../components/Button/Button";
// // import {Col, Row} from "react-bootstrap";

class StepOne extends Component {
  state = {};

  componentDidMount(){
    // this.navigateBack();
  }
  navigateBack = () => {
    console.log(this.props.routerInfo);
    this.props.routerInfo.history.push("/mes-diagnostics")
  }
  render() {
    return (
      <div className="step-five-container">
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
                  
                  <Button secondary><Link onClick={this.navigateBack}>Accepter</Link></Button>
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
                  <Button secondary>
                    <Link onClick={this.navigateBack}>Réduire</Link>
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
                  <Button secondary><Link onClick={this.navigateBack}>Éviter</Link></Button>
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
                  <Button secondary><Link onClick={this.navigateBack}>Partager</Link></Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default StepOne;
