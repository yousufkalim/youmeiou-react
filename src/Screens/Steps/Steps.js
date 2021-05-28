import React, { useState, useEffect } from "react";
import "./Steps.css";

//  COMPONENTS
import Heading from "../../components/Heading/Heading";
import Header from "../../components/Header/Header";
import Stepper from "../../components/Stepper/Stepper";
import StepOne from "./step-1/StepOne";
import StepTwo from "./step-2/StepTwo";
import StepThree from "./step-3/StepThree";
import StepFour from "./step-4/StepFour";
import StepFive from "./step-5/StepFive";
import {withRouter} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";


const Steps = (props) => {

  const [now, setNow] = useState(5);
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [explanation, setExplanation] = useState("");

  const state = useSelector((state) => state.currentRisk);

  useEffect(() => {
    const state = props.location.state;
    var pathName = props.history.location.pathname;
    setName(state.name);
    // this.setState({name: state.name});
    // console.log("new state ", this.props.location.state);
    props.location.state.now && setNow(props.location.state.now)
    // var result = pathName.split("/diagnostic-list/");

  },[])


  const changeStepper = (btn) => {
    setNow(btn);
  };


    // const { now, name, serialNo, explanation,  } = this.state;
    // console.log(this.props.location.state);

    // if(window.location.reload() === true){
    //   alert("reload")
    // }   
    return (
      <div className="steps">
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

        <div className="steps-wrapper">
          <div className="mx-3">
            <Heading>
              {now === 80
                ? "Résultat du diagnostic"
                : now === 100
                ? "Traitement d’un diagnostic"
                : "Diagnostic"}
            </Heading>  
          </div>
          <div className="steps-content-container">
            <div className="steps-header-container">
              <Header>
                <div className="steps-progress">
                  <Stepper now={now} />
                </div>
              </Header>
            </div>
            <div className="steps-content">
              {
              now >= 5 && now < 6 ? (
                <StepOne changeStepper={changeStepper} data={props.location.state} />
              ) 
              : now >= 6 && now < 7 ? (
                <StepTwo changeStepper={changeStepper} />
              ) 
              // : now >= 7 && now <= 79 ? (
              //   <StepThree changeStepper={changeStepper} now={now} data={props.location.state} />
              // ) 
              : 
              now >= 7 && now < 99 ? 
              (
                <StepFour changeStepper={changeStepper} history={props} data={props.location.state} withoutLogin={props.location.state.withoutLogin} />
              ) 
              : 
              (
                <StepFive routerInfo={props} state={props.location.state}  />
              )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }


export default withRouter(Steps);
