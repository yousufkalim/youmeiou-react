import React, { Component } from "react";
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

class Steps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      now: 5,
      toggle: false,
      name: "",
      serialNo: "",
      explanation: "",
    };
  }

  componentDidMount() {
    // this.setState({now: })
    console.log(this.props);
    const state = this.props.location.state;
    var pathName = this.props.history.location.pathname;
    this.setState({name: state.name});
    this.props.location.state.now && this.setState({now: this.props.location.state.now})
    var result = pathName.split("/diagnostic-list/")
    console.log(result[1]);
    // this.props.location.reload();
  }

  changeStepper = (btn) => {
    this.setState({ now: btn });
  };

  render() {
    const { now, name, serialNo, explanation,  } = this.state;
    console.log(this.props.location.state);

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
                <StepOne changeStepper={this.changeStepper} data={this.props.location.state} />
              ) 
              : now >= 6 && now < 7 ? (
                <StepTwo changeStepper={this.changeStepper} />
              ) 
              : now >= 7 && now <= 79 ? (
                <StepThree changeStepper={this.changeStepper} now={now} data={this.props.location.state} />
              ) 
              : 
              now >= 79 && now < 99 ? 
              (
                <StepFour changeStepper={this.changeStepper} data={this.props.location.state} />
              ) 
              : 
              (
                <StepFive routerInfo={this.props} state={this.props.location.state} />
              )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Steps);
