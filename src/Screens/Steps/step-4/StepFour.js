import React, { useEffect, useState } from "react";
import "./StepFour.css";
import { Row, Col } from "react-bootstrap";

//  Components
// import { Images } from "../../../assets/Assets";
// import Card from "../../../components/Card/Card";
// import Progressbar from "../../../components/Progressbar/Progressbar";
// import Button from "../../../components/Button/Button";
// import {Col, Row} from "react-bootstrap";
import Card from "../../../components/Card/Card";
import TableChart from "../../../components/TableChart/TableChart";
import ColorPicker from "../../../components/ColorPicker/ColorPcker";
import ColorPickerTwo from "../../../components/ColorPickerTwo/ColorPickerTwo";
// import ColorPickerTwo from "../../../components/ColorPickerTwo/ColorPckerTwo";
import Button from "../../../components/Button/Button";
import endPoints from "../../../globals/Constants";
import jwt_decode from "jwt-decode";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { withSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import * as actionTypes from "../../../store/actionTypes";
import { Images } from "../../../assets/Assets";

const StepFour = (props) => {
  const [color, setColor] = useState("#fff");
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [score, setScore] = useState(null);
  const [probability, setProbability] = useState(0);
  const [gravity, setGravity] = useState(0);
  const [criticity, setcriticity] = useState(0);
  const [diagnosticName, setdiagnosticName] = useState("");

  const [show, setShow] = useState(false);

  const tokenId = useSelector((state) => state.user.token);
  const reduxData = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("redux data ", reduxData);

  const userToken = tokenId !== "" ? tokenId : "";

  useEffect(() => {
    console.log(props);
    isLogin();
  }, []);

  const isLogin = () => {
    if (userToken === "") {
      setSpinner(false);

      setShow(true);
    } else {
      if (reduxData.riskReducer.length !== 0) {
        submitAnswers();
      } else {
        getScore();
      }
    }
  };

  async function submitAnswers() {
    var diagnosticId;

    diagnosticId = props.data.data
      ? props.data.data.diagnosticId
      : JSON.parse(localStorage.getItem("riskName")).diagnosticId;
    const decoded = jwt_decode(userToken);
    const id = parseInt(decoded.Id);

    const riskData = reduxData.riskReducer;
    const newArr2 = riskData.map((v) => Object.assign(v, { userInfoId: id }));
    console.log(newArr2);
    await fetch(endPoints.CREATE_DIAGNOSTIC, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        diagnosticId: diagnosticId,
        userId: id,
        isDiagnosticComplete: false,
      }),
    })
      .then(async (response) => {
        if (response.status === 200) {
          console.log(response);
          let firstResponse = await response.json();
          console.log(firstResponse);
          const diagEvalId = firstResponse.id;
          console.log("response");
          fetch(endPoints.SUBMIT_ANSWER, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify(newArr2),
          }).then(async (res) => {
            if (res.status === 200) {
              let secondResponse = await res.json();
              console.log("succe");

              await fetch(`${endPoints.GET_SCORE}/${diagnosticId}, ${id}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${userToken}`,
                },
              })
                .then((res) => res.json())
                .then((result) => {
                  setData(result);
                  setSpinner(false);
                  const diagnosticName = result.diagnosticName;
                  const score = result.score;
                  const grav = result.evalGravity;
                  const prob = result.evalProbability;
                  const criticity = result.criticity;

                  // console.log("gravity step four", result.evalGravity);
                  // console.log("probability step four", result.evalProbability);
                  setProbability(prob);
                  setGravity(grav);
                  setcriticity(criticity);
                  setScore(score);
                  setdiagnosticName(diagnosticName);
                  dispatch({ type: actionTypes.RESET_RISKS, data: [] });
                  localStorage.removeItem("riskName");
                  console.log("third api ", result);
                  // console.log(result);
                })
                .catch((error) => {
                  setSpinner(false);
                  props.enqueueSnackbar("Un problème est survenu", {
                    variant: "error",
                  });
                });
            }
          });
        } else {
          console.log("wrong else.....");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("catch run");
      });
  }

  async function getScore() {
    const decoded = jwt_decode(userToken);
    const id = parseInt(decoded.Id);
    // console.log("user id ==> ", id);
    const diagnosticId = props.data.diagnosticId || props.data.id;
    await fetch(`${endPoints.GET_SCORE}/${diagnosticId}, ${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setSpinner(false);
        const diagnosticName = result.diagnosticName;
        const score = result.score;
        const grav = result.evalGravity;
        const prob = result.evalProbability;
        const criticity = result.criticity;
        console.log("gravity step four", result.evalGravity);
        console.log("probability step four", result.evalProbability);
        setProbability(prob);
        setGravity(grav);
        setcriticity(criticity);
        setScore(score);
        setdiagnosticName(diagnosticName);
        // console.log(result);
      })
      .catch((error) => {
        setSpinner(false);
        props.enqueueSnackbar("Un problème est survenu", {
          variant: "error",
        });
      });
  }

  const handleChangecolor = (color) => {
    setColor(color.hex);
  };

  const handleClose = () => {
    setShow(false);
    const diagnosticId = props.data.diagnosticId || props.data.id;
    props.history.history.push({
      pathname: "/login",
      state: { now: 80, data: props.data },
    });
  };
  const handleShow = () => setShow(true);

  // const score = this.state.data.evalgravity *
  // console.log(this.state.data);
  // console.log(this.state.probability);
  // console.log(this.props.data);
  return (
    <>
      <div className="step-four-container">
        <div className="step-four-header">
          {spinner && (
            <div className="spinner">
              <CircularProgress className="circular-spinner-blue" />
            </div>
          )}
          {/* <div style={{ flexBasis: "40%" }}>
          <Card
            style={{
              padding: "1rem 2rem 2rem 3rem",
              borderRadius: "5.4rem",
              backgroundColor: "#EBEBEB",
            }}
          >
            <div className="step-four-card1-heading">Scoring</div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="step-four-card1-content">{score}</div>
            </div>
          </Card>
        </div> */}
        </div>

        {/* <div
        className="step-four-header-2"
        style={{ marginBottom: "20rem", marginTop: "5rem" }}
      >
         <div className="step-four-table-card">
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
              
              {
   (probability > 0 && gravity > 0) && <TableChart gravity={gravity} probability={probability} />
}
            
            </div>
          </Card>
        </div>
        <div className="step-four-color-grid">
          <Card
            
            style={{
              padding: "1rem",
              borderRadius: "3.5rem",
              fontWeight: "bold",
              backgroundColor: "#EBEBEB",
              height: "100%",
              overflow: "hidden",
            }}
            noheadingMargin
          >
            <div className="card-heading">Criticité</div>
            <div className="step-four-color-container">
              <div className="step-four-color">
                <ColorPicker
                  color={color}
                  handleChange={handleChangecolor}
                  gravity={gravity}
                  probability={probability}
                />
              </div>
            </div>
          </Card>
          <div className="step-four-card-btn text-center mt-5 pt-4">
            <Button secondary onClick={() => props.changeStepper(100)}>
              Traitement du risque
            </Button>
          </div>
        </div>
      </div>  */}
        {/* comment here */}
        <div className="step-four-color-grid">
          <Card
            style={{
              padding: "1rem",
              borderRadius: "3.5rem",
              fontWeight: "bold",
              backgroundColor: "#EBEBEB",
              height: "100%",
              overflow: "hidden",
            }}
            noheadingMargin
          >
            <Row className="p-3">
              <Col>

                    <div className="card-heading">
                    <span>
                <img
                      src={Images.Ionic_ios_warning}
                      alt="color"
                      style={{ width: "4rem" }}
                    />
                </span> Météo de la criticité</div>
              </Col>
              <Col style={{ textAlign: "end" }}>
                <Button tertiary onClick={() => props.changeStepper(90)}>
                  Agir maintenant
                </Button>
              </Col>
            </Row>

            <div className="step-four-color-container">
              <div className="step-four-color">
                <ColorPickerTwo
                  changeStepper={props.changeStepper}
                  color={color}
                  handleChange={handleChangecolor}
                  gravity={gravity}
                  probability={probability}
                  criticity={criticity}
                  score={score}
                  diagnosticName={diagnosticName}
                />
                <div></div>
              </div>
            </div>
          </Card>

          <Row style={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}>
            <Col>
              <Button tertiary onClick={() => props.changeStepper(90)}>Agir maintenant</Button>
            </Col>
          </Row>
          {/* <div></div> */}
          <div
            style={{
              flexBasis: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Card className="cartography-info-card" style={{}}>
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
      </div>
      <Modal show={show} onHide={handleClose} className="custom-modal-2">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {/* <div className="text-center"><BiError size={40} /></div> */}
          <div className="py-2 text-center">
            please login or signup to view score
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <div className="text-center w-100">
          <div className="login-modal-btn">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </div>
          </div>
         
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default withSnackbar(StepFour);
