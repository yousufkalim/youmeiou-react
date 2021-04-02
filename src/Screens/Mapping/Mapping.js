import React, { useState } from "react";
import "./Mapping.css";

//  COMPONENTS
import { Modal } from "react-bootstrap";
import Heading from "../../components/Heading/Heading";
import Card from "../../components/Card/Card";
import {Images} from "../../assets/Assets";
import Button from "../../components/Button/Button";

const Mapping = () => {
  
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div className="mapping-container">
      <div className="mx-3 py-3 my-auto" style={{ height: "10%" }}>
        <Heading>Diagnostic</Heading>
      </div>

      <div className="mapping">
        <div className="step-four-header">
          <div style={{ flexBasis: "46%" }}>
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
          <div style={{ flexBasis: "46%" }}>
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
            </Card>
            
          </div>
        </div>
        <div className="step-four-header mt-5">
          <div style={{ flexBasis: "46%" }}>
          {/* <Card
              style={{
                padding: "1rem 2rem 2rem 3rem",
                borderRadius: "5.4rem",
              }}
            > */}
              <img src={Images.mapping1} alt="mapping" className="mapping-card-img" />
              {/* </Card> */}
          </div>
          <div style={{ flexBasis: "46%" }}>
          <Card
              style={{
                padding: "1rem 2rem 2rem 3rem",
                borderRadius: "5.4rem",
                backgroundColor: "#EBEBEB",
              }}
            >
              <div className="mapping-color-card">
              <img src={Images.color} alt="color" />
              <div className="mapping-colors">
                <div>Non significatif</div>
                <div>Mineur</div>
                <div>Modéré</div>
                <div>Élevé</div>
                <div>Critique</div>
              </div>
              </div>
              
              </Card>
              <div className="mapping-color-button"><Button secondary>Traitement du risque</Button></div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="mapping-modal-content">
            Pour regarder les cartographies et la criticité, réalisez un
            diagnostic.
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Mapping;
