import React, { useEffect, useState } from "react";
import endPoints from "../../globals/Constants";
import { Modal, Nav } from "react-bootstrap";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { BsX } from 'react-icons/bs';
import Input from "../../components/Input/Input";
import "./popup.css";

const Popup = (props) => {
  const { show, handleClose, setShow } = props;//data, error,
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
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
      }
    }
    console.log(data);
  };
  const [error, setError] = useState({ email: "" });
  const [spinner, setSpinner] = useState(false);

    const handleClick = ()=>{
        setSpinner(true);
        fetch(endPoints.SEND_CLIENT_EMAIL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                companyName: data.companyName,
                sirenNumber: data.sirenNumber,
                message: data.message,

            }),
          })
            .then((resp) => resp.json())
            .then((res) => {
                console.log(res);
                setSpinner(false);
              if(res.success){
                setShow(false);
                data.firstName = "";
                data.lastName = "";
                data.email = "";
                data.companyName = "";
                data.sirenNumber = "";
                data.message = "";

              }
                //setSpinner(false);
                //handleClick;
                //setShow(false);
                // console.log("success",res);
                // console.log("success new");
                console.log(props);
                //dispatch({type: actionTypes.LOGIN, token: res.token });
            //     if(props.location.state){

            //     //   props.history.push({
            //     //     pathname: `/diagnostic-list/${props.location.state.data.diagnosticId}`,
            //     //     state: {data: props.location.state.data, now: props.location.state.now, withoutLogin :true}
            //     //   }) 
            //     }
               
            //   }
            //   else{
            //     console.log("else");
            //     //setMessage(res.errorMessage)
            //     setSpinner(false);
            //     console.log(res);
            //     //showSpinner(true);
            //     // alert(res.errorMessage)
            //   }
            })
            .catch((err) =>{ 
                console.log("error");
              setSpinner(false);
              console.log(err);
            //   alert(err);
            });
    }

  return (
    <Modal className="landing-modal" fullscreen={props.fullscreen} show={show} onHide={handleClose}>
     {/* <Modal.Header size="lg" closeButton>
      </Modal.Header> */}
    {spinner && (
        <div className="spinner">
          <CircularProgress className="circular-spinner" />
        </div>
      )}
      <Card
        style={{
          padding: "1rem 2rem 5rem 2rem",
          borderRadius: "3.5rem",
          backgroundColor: "transparent",
          borderRadius : "3rem",
        }}
      >
          <div style={{textAlignLast:"right",height:"5rem", }}>
          <Nav.Link href="#home" onClick={handleClose}>
            <BsX className="App-logo" style={{width:"5vmin",height:"5rem", }}/>
            </Nav.Link>
            
          </div>
          
        <div className="plan-card-heading">
          <div className="plan-card-heading"></div>
        </div>
        <div className="plan-card-detail">
          {/* {props.children} */}
          <Input
          type="text"
          placeholder="Prénom *"
          // value={data.email}
          onChange={inputChange}
          name="lastName"
        />
        <Input
          type="text"
          placeholder="Nom *"
          // value={data.email}
          onChange={inputChange}
          name="firstName"
        />
        <Input
          type="text"
          placeholder="Adresse e-mail *"
          onChange={inputChange}
          name="email"
        />
        {error.email && <div className="custom-error">{error.email}</div>}
        <Input
          type="text"
          placeholder="Nom de l'entreprise"
          onChange={inputChange}
          name="NameOfEntreprise"
        />
        <Input
          type="text"
          placeholder="Numéro SIREN"
          onChange={inputChange}
          name="SirenNumber"
        />
        <Input
          type="text"
          placeholder="Message *"
          onChange={inputChange}
          name="message"
        />
          <div style={{ width: "100%", textAlign: "center", marginTop: "3rem" }}>
          <Button
            primary
            type="submit"
            disabled={
              data.firstName !== "" &&
              data.lastName !== "" &&
              error.email === "" &&
              data.message !== ""
                ? false
                : true
            }
            onClick={handleClick}//{handleClick}
            >
            Soumettre
          </Button>
        </div>
        </div>
      </Card>
      {/* <Modal.Header size="lg" closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button size="lg" variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button size="lg" variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};
export default Popup;
