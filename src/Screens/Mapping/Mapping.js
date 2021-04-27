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
import { withSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";


const probabilityArr = [1, 2, 3, 12];

const gravityArr = [1, 2, 10, 4];

var newArr = [1, 4, 16, 15];

// const gravity = 4;
// const probability = 5;

const Mapping = (props) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState([]);
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [plotArr, setPlotArr] = useState([]);
  // const [newArr, setNewArr] = useState([]);

  const token = useSelector((state) => state.user.token);

  var decToken = jwt_decode(token);
  const userId = parseInt(decToken.Id);

  const handleClose = () => {
    setShow(false);
    // props.history.push("/diagnostic-list");
  };

  async function getData() {
    await fetch(`${endPoints.CARTOGRAPHY}/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      })
      .catch((error) => {
        // alert(error);
        setSpinner(false);
        props.enqueueSnackbar("Un problème est survenu", {
          variant: "error",
        });
      });
  }

  const getPlotValues = (val) => {
    // if(val !== undefined){
    //   setNewArr([...newArr, val])
    //   newArr.push(val);
    // }
    // if(val !== undefined){
    //   setNewArr(prevState => ({
    //     newArr: [...prevState.newArr, val]
    //   }))
    // }
    // setNewArr(val);
  };

  const getFilterValues = () => {};

  const calculateValue = () => {
    // console.log("function");

    for (let i = 0; i < data.length; i++) {
      // const value = gravityArr[i] * probabilityArr[i];
      // console.log("function not run **************************** ");
      // console.log(this.props.gravity[i]);
      // console.log(this.props.probability[i]);
      const val = data[i].evalGravity * data[i].evalProbability;
      const prob = (val / 25) * 90 + 1;
      const valu = Math.round(prob);
      setValues((state) => [...state, valu]);
      // console.log(valu);

      // this.setState(prevState => ({
      //   values: [...prevState.values, valu]
      // }));
    }

    setSpinner(false);

    // setShow(true);
  };

  useEffect(() => {
    getData();
    if (data.length > 0) {
      calculateValue();
    }
    getPlotValues();
  }, [newArr, data]);
  // console.log("points ==> ",values);
  // console.log("data ==> ",data);
  // console.log(values);

  return (
    <div className="mapping-container">
      <div className="mx-3 py-3 my-auto" style={{ height: "10%" }}>
        <Heading>Diagnostic</Heading>
      </div>
      <div className="mapping">
        {spinner && (
          <div className="spinner">
            <CircularProgress className="circular-spinner-blue" />
          </div>
        )}
        {/* <div className="step-four-header">
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
        </div> */}
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

                {data.length > 0 && (
                  <TableChart2
                    getPlotValues={getPlotValues}
                    result={data}
                    gravity={gravityArr}
                    probability={probabilityArr}
                  />
                )}
              </div>
            </Card>
          </div>
          <div style={{ flexBasis: "23%" }}>
            <Card
              style={{
                padding: "1rem 1rem 2rem 3rem",
                borderRadius: "5.4rem",
                backgroundColor: "#EBEBEB",
                overflow: "hidden",
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
                  {/* {console.log("valuessss =======================================> ",newArr)}; */}
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
            {/* <div className="mapping-color-button">
              <Button secondary>Traitement du risque</Button>
            </div> */}
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

export default withSnackbar(Mapping);
