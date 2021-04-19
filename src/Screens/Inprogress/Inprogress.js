import React, { useState, useEffect } from "react";
import "./Inprogress.css";

//  Components
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import List from "../../components/List/List";
import Progressbar from "../../components/Progressbar/Progressbar";
import endPoints from "../../globals/Constants";
import jwt_decode from "jwt-decode";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Inprogress = (props) => {
  const [toggle, setToggle] = useState(false);
  const [spinner, setSpinner] = useState(true);
  const [incompletedRisks, setIncompletedRisks] = useState([]);
  const [completeRisks, setCompleteRisks] = useState([]);
  const [totalRisks, setTotalRisks] = useState([]);

  const userToken = useSelector((state) => state.user.token);

  useEffect(() => {
    getDiagnostics();
  }, []);

  const getDiagnostics = () => {
    // const token = sessionStorage.getItem("token");
    // console.log(token);
    var decoded = jwt_decode(userToken);
    const id = parseInt(decoded.Id);
    fetch(`${endPoints.GET_ALL_DIAGNOSTICS}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setSpinner(false);
        setTotalRisks(result);
        const incom = result.filter(
          (item) => item.totalRisks !== item.completedRisks && item
        );
        const com = result.filter(
          (item) => item.totalRisks === item.completedRisks && item
        );
        setCompleteRisks(com);
        setIncompletedRisks(incom);
      })
      .catch((error) => {
        setSpinner(false);
        // console.log(error);
      });
  };
  // console.log(totalRisks);
  // console.log("completed ==> ", completeRisks);
  // console.log("incompleted ==> ", incompletedRisks);

  const cdate = moment(totalRisks.createdDate).format("DD-MM-YYYY");
  // console.log(props);
  // console.log("date is ==> ", cdate);

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

            <div className="inprogress-lists inprogress-list-1">
              {spinner ? (
                <div className="spinner">
                  <CircularProgress className="circular-spinner-blue" />
                </div>
              ) : incompletedRisks.length > 0 ? (
                incompletedRisks.map((item) => (
                  <List>
                    <div style={{ width: "10%" }}>{item.serialNo}</div>
                    <div style={{ width: "20%" }}>{item.name}</div>
                    <div style={{ width: "10%" }}>
                      {moment(item.createdDate).format("DD-MM-YYYY")}
                    </div>
                    <div style={{ width: "20%" }}>
                      <Progressbar
                        now={(item.completedRisks / item.totalRisks) * 100}
                      />
                    </div>
                    <div style={{ width: "30%" }}>
                      <NavLink
                        to={{
                          pathname: `diagnostic-list/${item.diagnosticId}`,
                          state: { ...item },
                        }}
                      >
                        <Button className="inprogress-btn" secondary>
                          Continuer le diagnostic
                        </Button>
                      </NavLink>
                    </div>
                  </List>
                ))
              ) : (
                <div className="inprogress-not-found">
                  Aucun diagnostic en cours
                </div>
              )}
            </div>
          </div>

          {/* Second */}
          <div className="inprogress-second-list">
            <Heading>Diagnostics réalisés</Heading>

            <div className="inprogress-lists inprogress-list-2">
              {spinner ? (
                <div className="spinner">
                  <CircularProgress className="circular-spinner-blue" />
                </div>
              ) : completeRisks.length > 0 ? (
                completeRisks.map((item) => (
                  <List>
                    <div style={{ width: "10%" }}>{item.serialNo}</div>
                    <div style={{ width: "20%" }}>{item.name}</div>
                    <div style={{ width: "10%" }}>
                      {moment(item.createdDate).format("DD-MM-YYYY")}
                    </div>
                    <div style={{ width: "20%" }}>{item.treatmentOfRisk}</div>
                    <div style={{ width: "30%" }}>
                      {item.treatmentOfRisk === "Réduit" ||
                      item.treatmentOfRisk === "Partagé" ? (
                        <NavLink
                          to={{
                            pathname: `mes-diagnostics/${item.diagnosticId}`,
                            state: { ...item, now: 100 },
                          }}
                        >
                          <Button secondary className="inprogress-btn">
                            Plan d’action
                          </Button>
                        </NavLink>
                      ) : item.treatmentOfRisk === "NonTraité" ? (
                        <NavLink
                          to={{
                            pathname: `diagnostic-list/${item.diagnosticId}`,
                            state: { ...item, now: 100 },
                          }}
                        >
                          <Button secondary className="inprogress-btn">
                            Traiter le risque
                          </Button>
                        </NavLink>
                      ) : (
                        <Button secondary className="inprogress-btn">
                          Modifier mon choix
                        </Button>
                      )}
                    </div>
                  </List>
                ))
              ) : (
                <div className="inprogress-not-found">
                  Aucun diagnostic effectué
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inprogress;
