import React, { Component } from "react";
import "./Inprogress.css";

//  Components
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import List from "../../components/List/List";
import Progressbar from "../../components/Progressbar/Progressbar";
// import { GiHamburgerMenu } from "react-icons/all";
// import { Images } from "../../assets/Assets";

const firstlist = [
  {
    id: "004",
    name: "Nom du diagnostic",
    cdate: "Date",
    now: "20",
    buttonText: "Continuer le diagnostic",
  },
  {
    id: "004",
    name: "Nom du diagnostic",
    cdate: "Date",
    now: "50",
    buttonText: "Continuer le diagnostic",
  },
];

const secondlist = [
    {
      id: "004",
      name: "Nom du diagnostic",
      cdate: "Date",
      detail: "Evitement",
      buttonText: "Modifier mon choix",
    },
    {
      id: "004",
      name: "Nom du diagnostic",
      cdate: "Date",
      detail: "Non traité",
      buttonText: "Traiter le risque",
    },
    {
        id: "004",
        name: "Nom du diagnostic",
        cdate: "Date",
        detail: "Partage",
        buttonText: "Plan d’action",
      },
      {
        id: "004",
        name: "Nom du diagnostic",
        cdate: "Date",
        detail: "Acceptation",
        buttonText: "Modifier mon choix",
      },
      {
        id: "004",
        name: "Nom du diagnostic",
        cdate: "Date",
        detail: "Réduction",
        buttonText: "Plan d’action",
      },
  ];

export class Inprogress extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       toggle: false,
    }
  }
  
  render() {
    return (
      <div className="inprogress">
        {/* <div
          className="d-flex justify-content-between mx-3 py-1 screen-navbar"
          style={{ borderBottom: "1px solid rgba(1,35,64, 18%)" }}
        >
          <div className="sidebar-drawer-container d-flex">
            <div className="sidebar-drawer">
              {this.state.toggle === false && (
                // <GiHamburgerMenu size={30} onClick={() =>this.sidebarToggle(true)} className="sidebar-toggler mr-4" />
                <GiHamburgerMenu size={30} className="sidebar-toggler mr-4" />
              )}
            </div>
            <span>
              <img src={Images.logo} alt="logo" />
            </span>
          </div>
          <div>
            <img src={Images.profile} alt="profile" className="profile-img" />
          </div>
        </div> */}

       <div className="inprogress-wrapper">
       <div className="inprogress-header"></div>
        <div className="inprogress-content">
          <div className="inprogress-first-list">
            <Heading>Diagnostics en cours</Heading>

            <div className="inprogress-lists">
              {firstlist.map((item) => (
                <List>
                  <div>{item.id}</div>
                  <div>{item.name}</div>
                  <div style={{ width: "7%" }}>{item.cdate}</div>
                  <div style={{ width: "20%" }}>
                    {" "}
                    <Progressbar now={item.now} />{" "}
                  </div>
                  <div style={{ width: "30%" }}>
                    <Button className="inprogress-btn" secondary>{item.buttonText}</Button>
                  </div>
                </List>
              ))}
            </div>
          </div>

          {/* Second */}
          <div className="inprogress-second-list">
            <Heading>Diagnostics réalisés</Heading>

            <div className="inprogress-lists">
              {secondlist.map((item) => (
                <List>
                  <div >{item.id}</div>
                  <div>{item.name}</div>
                  <div style={{ width: "10%" }}>{item.cdate}</div>
                  <div style={{ width: "20%" }}>{item.detail}</div>
                  <div style={{ width: "27%" }}>
                    <Button secondary className="inprogress-btn">{item.buttonText}</Button>
                  </div>
                </List>
              ))}
            </div>
          </div>
        </div>
       </div>
      </div>
    );
  }
}

export default Inprogress;
