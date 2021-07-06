import React, { Component } from "react";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import "./StepTwo.css";

class StepTwo extends Component {
  state = {};
  render() {
    return (
    
       
        <div className="step-two-content">
          <div
            className="step-two-content-container"
            
          > 
            <div class="step-card-wrapper">
              <Card
                style={{
                  backgroundColor: "#fff",
                  padding: "7rem 5rem",
                  borderRadius: "3.5rem",
                }}
              >
                <p className="step-card-text text-center">
                  Bravo vous avez fait un bon choix ! Vous allez être dirigé
                  vers un questionnaire. Vos réponses peuvent
                  varier de « 1 » voulant dire « Oui ! je suis absolument
                  d’accord » à 7 voulant « Non ! je ne suis absolument pas
                  d’accord ».
                </p>
                <div className="text-center pt-5">
                  <Button onClick={() => this.props.changeStepper(7)} secondary>Lancer</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
    
    );
  }
}

export default StepTwo;
