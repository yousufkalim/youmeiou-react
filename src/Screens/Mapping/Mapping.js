import React, { useState, useEffect } from "react";
import "./Mapping.css";

//  COMPONENTS
import { Modal, Popover } from "react-bootstrap";
import Heading from "../../components/Heading/Heading";
import Card from "../../components/Card/Card";
import { Images } from "../../assets/Assets";
import Button from "../../components/Button/Button";
import endPoints from "../../globals/Constants";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import TableChart2 from "../../components/TableChart2/TableChart2";

const gravityArr = [5, 4, 3, 5];

const probabilityArr = [3, 5, 1, 5];

const Mapping = (props) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState([]);
  const token = useSelector((state) => state.user.token);

  var decToken = jwt_decode(token);
  const userId = parseInt(decToken.Id);
  console.log(userId);

  const handleClose = () => {
    setShow(false);
    // props.history.push("/diagnostic-list");
  };

  useEffect(() => {
    getData();
    calculateValue();
  }, []);

  async function getData() {
    await fetch(`${endPoints.CARTOGRAPHY}/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  }

  const calculateValue = () => {
    // console.log("function");
    for (let i = 0; i < probabilityArr.length; i++) {
      const value = gravityArr[i] * probabilityArr[i];
      console.log(value);
      // console.log(this.props.gravity[i]);
      // console.log(this.props.probability[i]);
      const prob = (value / 25) * 90 + 1;
      const valu = Math.round(prob);
      setValues((state) => [...state, valu]);
      console.log(values);

      // this.setState(prevState => ({
      //   values: [...prevState.values, valu]
      // }));
    }
    // setShow(true);
  };

  console.log(values);

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
          <div style={{ flexBasis: "75%" }} className="mapping-table-container">
            {/* <Card
              style={{
                padding: "1rem 2rem 2rem 3rem",
                borderRadius: "5.4rem",
              }}
            > */}
            
            {/* <img
              src={Images.mapping1}
              alt="mapping"
              className="mapping-card-img"
            /> */}
            {/* </Card> */}

            <Card
            style={{
              padding: "1.5rem 1.5rem 4rem 1.5rem",
              borderRadius: "3.5rem",
              height: "auto",
              overflow: "hidden",
            }}
          >
            <div className="step-four-table-card-content">
              <div className="step-four-card2-header mb-5">Cartographie</div>
                             <TableChart2  />
              
            </div>
          </Card>
          </div>
          <div style={{ flexBasis: "23%" }}>
            <Card
              style={{
                padding: "1rem 1rem 2rem 3rem",
                borderRadius: "5.4rem",
                backgroundColor: "#EBEBEB",
                overflow: "hidden"
              }}
            >
              <div className="mapping-color-card">
                <div className="mapping-color-card-inner">
                  <img src={Images.color} alt="color" />
                  <div className="mapping-colors">
                    <div>Critique</div>
                    <div>Élevé</div>
                    <div>Modéré</div>
                    <div>Mineur</div>
                    <div>Non significatif</div>
                  </div>

                  {values &&
                    values.map((item, index) => (
                      <div
                        className="mapping-color-line-container"
                        key={index}
                        style={{ bottom: `${item}%` }}
                      >
                        <div className="mapping-color-line-content">
                          <img src={Images.search} alt="color" />
                          <div className="mapping-color-line"></div>
                          <Popover
                            className="mapping-popover"
                            id="popover-positioned-top"
                          >
                            <Popover.Title
                              className="mapping-popover-title"
                              as="h3"
                            >
                              Diagnostic Name
                            </Popover.Title>
                            <Popover.Content>
                              Diagnostic Id <strong>12</strong> description
                            </Popover.Content>
                          </Popover>
                          {/* <span class="tooltiptext">Tooltip text</span> */}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Card>
            <div className="mapping-color-button">
              <Button secondary>Traitement du risque</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-modal-wrapper">
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
    </div>
  );
};

export default Mapping;
