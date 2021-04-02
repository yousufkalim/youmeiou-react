import React, { Component } from "react";
import "./Plan.css";

//  COMPONENTS
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import List from "../../components/List/List";

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

export class Plan extends Component {
  render() {
    return (
      <div className="plan">
        <div className="plan-container">
          <div className="plan-header"></div>
          <div className="plan-container-first">
            <div className="d-flex justify-content-end w-100">
              <div className="plan-header-content">
                <Heading>Qui sommes-nous ?</Heading>
                <div className="plan-header-content-detail">
                  « Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. »
                </div>
              </div>
            </div>

            <div className="text-center py-5">
              <Heading>Plan d’action</Heading>
            </div>
            <div className="d-flex justify-content-between plan-first-cards">
              <div style={{ flexBasis: "43%" }}>
                <Card
                  style={{
                    padding: "4rem 2rem 5rem 2rem",
                    borderRadius: "3.5rem",
                  }}
                >
                  <div className="plan-card-heading">
                    <div>Le risque encouru</div>
                    <div className="plan-card-heading-score">score : 70</div>
                  </div>
                  <div className="plan-card-detail">
                    <div>-Probabilité</div>
                    <div>-Gravité</div>
                    <div>-Criticité</div>
                  </div>
                </Card>
              </div>

              <div style={{ flexBasis: "53%" }}>
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
                  Nom de l'action
                </div>
                <div style={{ width: "40%" }} className="plan-list-heading">
                  Description
                </div>
                <div style={{ width: "15%" }} className="plan-list-heading">
                  Priorite
                </div>
                <div style={{ width: "15%" }} className="plan-list-heading">
                  Tarif
                </div>
              </List>
              {lists.map((item, index) => (
                <List>
                  <div style={{ width: "25%" }} className="plan-list-item">
                    {item.name}
                  </div>
                  <div style={{ width: "40%" }} className="plan-list-item">
                    {item.description}
                  </div>
                  <div style={{ width: "15%" }} className="plan-list-item">
                    {item.detail}
                  </div>
                  <div style={{ width: "15%" }} className="plan-list-item">
                    {item.price}
                  </div>
                </List>
              ))}
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
      </div>
    );
  }
}

export default Plan;
