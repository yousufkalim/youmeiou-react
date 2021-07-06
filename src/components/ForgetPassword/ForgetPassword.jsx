import React, { useEffect, useState } from "react";
import { Modal, Nav } from "react-bootstrap";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "../../components/Button/Button";
import endPoints from "../../globals/Constants";
import { BsX } from "react-icons/bs";
import "./ForgetPassword.css";
import { FaBullseye } from "react-icons/fa";
function ForgetPassword(props) {
  const [data, setData] = useState({
    email: "",
  });

  const [error, setError] = useState({ email: "" });
  const [spinner, setSpinner] = useState(false);
  const [emailSent, setEmailSentMsg] = useState(false);
  const [emailSentMsg, setEmailSentMessage] = useState(false);
  const [submitDisable, setsubmitDisable] = useState(true);
  async function sendEmail() {
    
    setsubmitDisable(true);
    setSpinner(true);
    await fetch(`${endPoints.FORGET_PASSWORD}/${data.email}`,{
        
    }).then((res)=> res.json())
    .then((result)=>{
        debugger;
        if (result.success) {
            // props.snackBar();
            setEmailSentMsg(true);
            setData({
                email:""
            });
            setEmailSentMessage(true);
            // props.onHide();
            
        }else{
            setError({ ...error, email: "Error something went wrong" });
            setsubmitDisable(false);
        }
        setSpinner(false);

            // props.onHide();
    //   setEmailSentMsg(!emailSent);
        console.log("result", result);
    })
    .catch((error)=>{
        
        setsubmitDisable(false);
        setSpinner(false);
        console.log("err", error);
    });

  }
  const inputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "email") {
      var mailformat =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!e.target.value.match(mailformat)) {
        setError({ ...error, email: "Format d'email invalide" });
      } else {
        setError({ ...error, email: "" });
        setsubmitDisable(false);
      }
    }
  };
  return (
    <div>
      <Modal className="landing-modal" show={props.show} onHide={props.onHide}>
        <Card
          style={{
            padding: "1rem 2rem 5rem 2rem",
            borderRadius: "3.5rem",
            backgroundColor: "transparent",
            borderRadius: "3rem",
          }}
        >
          <div style={{ textAlignLast: "right", height: "5rem" }}>
            <Nav.Link href="#home" onClick={props.onHide}>
              <BsX
                className="App-logo"
                style={{ width: "5vmin", height: "5rem" }}
              />
            </Nav.Link>
          </div>
          <Input
            type="text"
            placeholder="Adresse e-mail *"
            onChange={inputChange}
            value={data.email}
            name="email"
          />
          {error.email && <div className="custom-error">{error.email}</div>}
          {emailSentMsg && (
            <div className="email-sent-msg">
              Email sent please check your email
            </div>
          )}
          {spinner && (
            <div className="spinner">
              <CircularProgress className="circular-spinner" />
            </div>
          )}
          <div
            style={{ width: "100%", textAlign: "center", marginTop: "3rem" }}
          >
            <Button
              primary
              // type="submit"
              disabled={submitDisable}
            //   disabled={error.email === "" && data.email != "" ? false : true}
              //   onClick={props.onHide} //{handleClick}
              onClick={sendEmail}
            >
              Soumettre
            </Button>
          </div>
        </Card>
      </Modal>
    </div>
  );
}

export default ForgetPassword;
