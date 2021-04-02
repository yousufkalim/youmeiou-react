import React, { Component } from "react";
import "./StepFour.css";

//  Components
// import { Images } from "../../../assets/Assets";
// import Card from "../../../components/Card/Card";
// import Progressbar from "../../../components/Progressbar/Progressbar";
// import Button from "../../../components/Button/Button";
// import {Col, Row} from "react-bootstrap";
import Card from "../../../components/Card/Card";
import TableChart from "../../../components/TableChart/TableChart";
import ColorPicker from "../../../components/ColorPicker/ColorPcker";
import Button from "../../../components/Button/Button";
import endPoints from "../../../globals/Constants";
import jwt_decode from "jwt-decode";


class StepFour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#fff",
    };
  }

  componentDidMount(){
    console.log(this.props);
    this.getScore();
  }

  getScore = () => {
    const token = sessionStorage.getItem('token');
    const decoded = jwt_decode(token);
    const id = parseInt(decoded.Id)
    console.log("user id ==> ",id);
    fetch(`${endPoints.GET_SCORE}/`, {

    })
  }

  handleChangecolor = (color) => {
    this.setState({ color: color.hex });
    // setColor(color.hex )
    console.log("color is", color.hex);
  };
  render() {
    const { color } = this.state;
    console.log(this.props.data);
    return (
      <div className="step-four-container">
        <div className="step-four-header">
          <div style={{ flexBasis: "40%" }}>
            <Card
              style={{
                padding: "1rem 2rem 2rem 3rem",
                borderRadius: "5.4rem",
                backgroundColor: "#EBEBEB",
              }}
            >
              <div className="step-four-card1-heading">Scoring</div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="step-four-card1-content">70</div>
              </div>
            </Card>
          </div>
          <div style={{ flexBasis: "45%" }}>
            <Card
              style={{
                padding: "2rem",
                borderRadius: "3.5rem",
              }}
            >
              <div className="step-four-card2-header">Gravité</div>
              <div className="step-four-card2-content">
                L’indice de gravité du risque quantifie l’importance des
                dommages redoutés.
              </div>

              <div className="step-four-card2-header">Probabilité</div>
              <div className="step-four-card2-content">
                L’indice de probabilité d’un risque est une valeur numérique,
                qui est à son minimum si le risque a très peu de chances de se
                réaliser, et à son maximum si son apparition est quasi certaine.
              </div>

              <div className="step-four-card2-header">Criticité</div>
              <div className="step-four-card2-content">
                L’indice de criticité d’un risque correspond au produit de sa
                probabilité par sa gravité. Cet indice permet de hiérarchiser
                les risques et donc leur traitement.
              </div>
            </Card>
          </div>
        </div>

        <div className="step-four-header" style={{marginBottom: "10rem", marginTop: "5rem"}}>
          <div style={{ flexBasis: "80%" }}>
            <Card
              style={{
                padding: "1.5rem 1.5rem 4rem 1.5rem",
                borderRadius: "3.5rem",
              }}
            >
              <div className="step-four-card2-header">Cartographie</div>

              <TableChart />
            </Card>
          </div>
          <div style={{ flexBasis: "20%" }}>
            <Card
            heading="Criticité"
              style={{
                padding: "1rem",
                borderRadius: "3.5rem",
                fontWeight: "bold",
                backgroundColor: "#EBEBEB"
              }}
            >
              <div className="step-four-color-container">
              <div className="step-four-color">
              <ColorPicker
                color={color}
                handleChange={this.handleChangecolor}
              />
              </div>
              </div>
            </Card>
            <div className="step-four-card-btn text-center mt-5 pt-4">
              <Button secondary onClick={() => this.props.changeStepper(100)}>Traitement du risque</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StepFour;
