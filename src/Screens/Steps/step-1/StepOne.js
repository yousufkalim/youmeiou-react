import React, { useState, useEffect } from "react";
import "./StepOne.css";


//  Components
import { Images } from "../../../assets/Assets";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import {Col, Row} from "react-bootstrap";

const StepOne = (props) => {
  const [data, setData] = useState({name: "", explanation: "", serialNo: ""});

  useEffect(() => {
    console.log(props);
    // const {name, serialNo,explanation} = props.location.state.;
    if(props.data){
      setData({...data, name: props.data.name, serialNo: props.data.serialNo, explanation: props.data.explanation})
    }
    else{
      setData({...data, name: props.location.state.data.name, serialNo: props.location.state.data.serialNo, explanation: props.location.state.data.explanation})
      
    }
  },[])

    return (
      <>
        <div className="step-one-content">
          <Row
            className="row w-100 align-items-center"s
            style={{ padding: "10rem" }}
          >
            <Col className="step-one-card-wrapper" md={6}>
              <Card
                heading={ data.serialNo !== null ? `${data.serialNo} ${data.name}` : `${""} ${data.name}`}
                style={{
                  padding: "4rem 4rem 4rem 4rem",
                  borderRadius: "3.5rem",
                }}
              >
                <p className="step-card-text">
                  {/* « Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. » */}
                  {data.explanation}
                </p>
                <div className="text-center pt-5">
                  <Button onClick={() => props.changeStepper(6)} secondary>Lancer</Button>
                </div>
              </Card>
            </Col>
            <Col className="step-one-card-image" md={6}>
              <img src={Images.stepOne} alt="step One" width="60%" />
            </Col>
          </Row>
        </div>
      </>
    );
}

export default StepOne;
