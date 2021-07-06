import React, { useEffect, useState } from "react";
import "./Plan.css";
import {useSelector} from "react-redux";
import {Row,Col, Container} from "react-bootstrap";
import Button from "../../components/Button/Button";
//  COMPONENTS
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import List from "../../components/List/List";
import jwt_decode from "jwt-decode";
import endPoints from "../../globals/Constants";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Images } from "../../assets/Assets";

const lists = [
  {
    price: "001",
    name: "one",
    detail: "this is first element",
    description:
      "there is issue in this list there is issue in this list there is issue in this list",
  },
  {
    price: "002",
    name: "two",
    detail: "this is second element",
    description: "Libellé court",
  },
  {
    price: "003",
    name: "three",
    detail: "this is third element",
    description: "Libellé court",
  },
  {
    price: "004",
    name: "four",
    detail: "this is fourth element",
    description: "Libellé court",
  },
  {
    price: "005",
    name: "five",
    detail: "this is fifth element",
    description:
      "Description of the action as per database Description of the action as per database",
  },
];

const Plan = (props) => {

  const [error,setError] = useState("");
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [score , setScore] = useState(null);
  const [actionList, setActionList] = useState([]);

  const userToken = useSelector((state) => state.user.token);


  useEffect(() => {
    getActionPlan();
  },[])
  

  

 

  async function getActionPlan() {
    var pathName = props.history.location.pathname;
    var result = pathName.split("/mes-diagnostics/");
    var diagnosticId = result[1];
    console.log(diagnosticId);
    var decoded = jwt_decode(userToken);
    const id = parseInt(decoded.Id);
    console.log(id);

  
    // console.log(endPoints.GET_ACTIONS)
    // http://160.153.249.64:5059/api/v1/actionPlan/get
    //// http://160.153.249.64:5059/api/v1/actionPlan​/get​
    // console.log(`${endPoints.GET_ACTIONS}/test123/${diagnosticId},${id}`);
    // var linkt = `${endPoints.GET_ACTIONS}/actionplan/get/${diagnosticId},${id}`;
    // console.log('test123',linkt);
    // fetch(`${endPoints.GET_ALL_DIAGNOSTICS}/${id}`, {
      //fetch(`http://160.153.249.64:5059/api/v1/actionPlan/get/${diagnosticId},${id}`, {//localhost:51160
    fetch(`${endPoints.GET_ACTIONS}/${diagnosticId},${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
          setSpinner(false)
          console.log(result);
          setData(result)
          setActionList(result.actionPlanList)
      })
      .catch((error) => {
        // this.setState({spinner: false});
        console.log(error);
        setError(error)
        setSpinner(false)

      })
  }

    return (
      <div className="plan">
        {spinner && (
                  <div className="spinner">
                    <CircularProgress className="circular-spinner-blue" />
                  </div>
                )}
        {
          (data) ? (
            <div className="plan-container">
          <div className="plan-header"></div>
          <div className="plan-container-first">
          <div className="text-center pt-5">
                {/* <Heading>Votre risque fournisseur</Heading> */}
                </div>
            {/* <div className="d-flex justify-content-end w-100">
              <div className="plan-header-content">
                <div className="plan-header-content-detail">
                L’entreprise doit avoir la capacité de maitriser les différentes facettes de ses fournisseurs : réputation, assurances, qualité, finances, engagement, services, performance financière, innovation …
                </div>
              </div>
            </div> */}

            <div className="text-center pb-3">
              <Heading>Plan d’action</Heading>
            </div>
            <Row style={{textAlign:"center"}}>
              <Col>
                <img style={{height: "60%"}} src={Images.icon_calender} />
              </Col>
            </Row>
            <Row style={{textAlign:"center", marginTop:"3rem"}}>
            <Col>
                <div style={{fontSize:"2rem", color:"#012340"}}>
                Choisir de prendre rendez-vous avec un expert qui répond à vos questions.
                </div>
              </Col>
            </Row>
            <Row style={{textAlign:"center",marginTop:"3rem", display:"none"}}>
              <Col>
                <Button secondary>
                  Prendre rendez-vous
                </Button>
              </Col>
            </Row>            
            {/* <div style={{ width: "100%", margin: "8rem 0" }}>
              <Card
                style={{
                  padding: "4rem 4rem 4rem 4rem",
                  borderRadius: "3.5rem",
                }}
              >
                <div className="plan-card-heading">Tableau d’action :</div>
                <div className="plan-card-heading" style={{ fontSize: "3rem" }}>
                  Priorité 1
                </div>
                <div className="plan-card-detail">
                  <div className="py-5">Libellé court</div>
                  <div className="pb-5">Libellé long</div>
                  <div>
                    « Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. »
                    « Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. »
                  </div>
                  <div className="plan-card-footer">Prix de l’action</div>
                </div>
              </Card>
            </div> */}
          </div>

          <div style={{paddingBottom: "10rem"}} className="plan-list-container">
              <List noborder>
                <div style={{ width: "25%" }} className="plan-list-heading">
                  Famille d'action
                </div>
                <div style={{ width: "40%" }} className="plan-list-heading">
                  Description
                </div>
                <div style={{ width: "15%" }} className="plan-list-heading">
                  Priorite
                </div>
                {/* <div style={{ width: "15%" }} className="plan-list-heading">
                  Tarif
                </div> */}
              </List>
              {actionList.length >= 1 ? data.actionPlanList.map((item, index) => (
                <List>
                  <div style={{ width: "25%" }} className="plan-list-item">
                    {item.familyOfAction}
                  </div>
                  <div style={{ width: "40%" }} className="plan-list-item">
                    {item.actionDescription}
                  </div>
                  <div style={{ width: "15%" }} className="plan-list-item">
                    {item.actionLevel}
                  </div>
                  {/* <div style={{ width: "15%" }} className="plan-list-item">
                    {item.tarif}
                  </div> */}
                </List>
              ))
              :
              (
                <div className="data-error">
                 
                    <div>No data found</div>
                
              </div>
              )
            }
            </div>
            <div className="d-flex justify-content-around plan-first-cards">
              <div style={{ flexBasis: "40%" }}>
                <Card
                  style={{
                    padding: "4rem 2rem 5rem 2rem",
                    borderRadius: "3.5rem",
                  }}
                >
                  <div className="plan-card-heading">
                    {/* <div>{data.diagnosticName}</div> */}
                    <div className="plan-card-heading">Votre score : {data.score}</div>
                  </div>
                  <div className="plan-card-detail">
                    <div>-Probabilité : {data.probability}</div>
                    <div>-Gravité : {data.gravity}</div>
                    <div>-Criticité : {data.criticity}</div>
                  </div>
                </Card>
              </div>

              <div style={{ flexBasis: "40%" }}>
                <Card
                  style={{
                    padding: "4rem 2rem 5rem 2rem",
                    borderRadius: "3.5rem",
                  }}
                >
                  <div className="plan-card-heading">Notre promesse</div>
                  <div className="plan-card-detail">
                    Aujourd’hui vous êtes en Criticité Y, on vous fait la
                    promesse de vous faire revenir dans la Criticité X
                  </div>
                </Card>
              </div>
            </div>
           <Container fluid>
           <Row style={{textAlign:"center",marginTop:"5rem",paddingBottom:"5rem",display:"none"}}>
                <Col>
                <Button secondary>
                  Prendre rendez-vous
                </Button></Col>
            </Row>
           </Container>

              <div className="instructions-card"> 
                  <Card
                      style={{
                        padding: "4rem 2rem 5rem 2rem",
                        borderRadius: "3.5rem",
                        background:"#F5F5F5",
                      }}
                    >
                      <div className="plan-card-detail">
                      A: Traiter ce risque relève de sécurité
                      </div>
                      <div className="plan-card-detail">
                      B: Traiter ce risque relève de performance
                      </div>
                      <div className="plan-card-detail">
                      C: Traiter ce risque relève de optimisation
                      </div>
                    </Card>

                </div>


          {/* 
          <div className="plan-container-second">
            <div className="plan-cards-second">
              <div style={{ width: "100%", margin: "8rem 0" }}>
                <Card
                  style={{
                    padding: "4rem 4rem 4rem 4rem",
                    borderRadius: "3.5rem",
                  }}
                >
                  <div className="plan-card-heading">Tableau d’action :</div>
                  <div
                    className="plan-card-heading"
                    style={{ fontSize: "3rem" }}
                  >
                    Priorité 1
                  </div>
                  <div className="plan-card-detail">
                    <div className="py-5">Libellé court</div>
                    <div className="pb-5">Libellé long</div>
                    <div>
                      « Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. »
                      « Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. »
                    </div>
                  <div className="plan-card-footer">Prix de l’action</div>
                  </div>
                </Card>
              </div>

              <div style={{ width: "100%"}}>
                <Card
                  style={{
                    padding: "4rem 4rem 4rem 4rem",
                    
                    borderRadius: "3.5rem",
                  }}
                >
                  <div className="plan-card-heading">Tableau d’action :</div>
                  <div
                    className="plan-card-heading"
                    style={{ fontSize: "3rem" }}
                  >
                    Priorité 1
                  </div>
                  <div className="plan-card-detail">
                    <div className="py-5">Libellé court</div>
                    <div className="pb-5">Libellé long</div>
                    <div>
                      « Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. »
                      « Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. »
                    </div>
                  <div className="plan-card-footer">Prix de l’action</div>
                  </div>
                </Card>
              </div>
            </div>
          </div> */}
        </div>
          )
          :
          (
            <div className="data-error">
              <div>something went wrong</div>
            </div>
          )
        }
      </div>
    );

}

export default Plan;
