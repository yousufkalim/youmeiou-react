import React, { useState } from "react";
import "./Register.css";

//  COMPONENTS
import Input from "../../components/Input/Input";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import {NavLink} from "react-router-dom"; 
import { Modal} from "react-bootstrap";
import {MdDone, BiError} from "react-icons/all";
import endPoints from "../../globals/Constants";

const Register = () => {
  const [data, setData] = useState({firstName: "", lastName:"", phoneNo: "", email: "", siren:"", reason: "", password:"", confirmPassword: "" });
  const [error, setError] = useState({firstName: "", lastName:"", phoneNo: "", email: "", siren:"", reason: "", password:"", confirmPassword: "" });
  const [spinner, setSpinner] = useState(false);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [userError, setUserError] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(endPoints);
  const inputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if(e.target.name === "firstName"){
      if(e.target.value.length > 30){
        setError({...error, firstName: "Le prénom n'est pas valide"})
      }
      else{
        setError({...error, firstName: ""});
      }
    }
    if(e.target.name === "lastName"){
      if(e.target.value.length > 30){
        setError({...error, lastName: "Le nom n'est pas valide."})
      }
      else{
        setError({...error, lastName: ""});
      }
    }
    if(e.target.name === "phoneNo"){
      if(e.target.value.length >= 13){
        setError({...error, phoneNo: "Le numéro de téléphone n'est pas valide"})
      }
      else{
        setError({...error, phoneNo: ""});
      }
    }
    if(e.target.name === "email"){
      var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!e.target.value.match(mailformat)){
        setError({...error, email: "L' adresse e-mail n'est pas valide (mauvais format, ou adresse déjà existante)"})
      }
      else{
        setError({...error, email: ""});
      }
    }
    if(e.target.name === "siren"){
      if(e.target.value.length !== 9){
        setError({...error, siren: "Le numéro SIREN n'est pas valide"})
      }
      else{
        setError({...error, siren: ""});
      }
    }
    if(e.target.name === "reason"){
      if(e.target.value.length > 70){
        setError({...error, reason: "La raison sociale n'est pas valide"})
      }
      else{
        setError({...error, reason: ""});
      }
    }
    if(e.target.name === "password"){
      var re = /(?=.*\d)(?=.*[a-z]).{7,}/;
      if(!e.target.value.match(re)){
        setError({...error, password: "Le mot de passe n'est pas valide. Il doit avoir au moins 7 caractères, avec au moins un chiffre et une lettre"})
      }
      else{
        setError({...error, password: ""});
      }
    }
    if(e.target.name === "confirmPassword"){
      if(e.target.value !== data.password){
        setError({...error, confirmPassword: "Le mot de passe n'est pas similaire"})
      }
      else{
        setError({...error, confirmPassword: ""});
      }
    }
    console.log(data.username);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    registerUser();
    
    // setTimeout(() => {
    //   if (data.username === "azeem@gmail.com" && data.password === "12345") {
    //     localStorage.setItem("user", data.username);
    //     props.history.push("/discover");
    //     setSpinner(false);
    //   } else {
    //     alert("Something went wrong");
    //     setSpinner(false);
    //   }
    // }, 1000);

    console.log("data is", data);
  };

   const registerUser = async () => {
    setSpinner(true);
    await fetch(endPoints.SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNo: data.phoneNo,
        email: data.email,
        isUserOwner: true,
        linkedinProfile: "",
        siren: data.siren,
        password: data.password,
        userFunction: ''

      })
    }).then(res => res.json())
    .then((result) => {
      if(result.success){
        // alert("successful");
        setSpinner(false);
        clearInputs();
        setShow(true);
        setUserError(false);
        setMessage("user created successfully");
        console.log(result);
      }
      else{
        console.log(result);
        setSpinner(false);
        setUserError(true);
        setMessage(result.errorMessage);
        setShow(true);
    

      }
    })
    .catch((error) => {
      setSpinner(false);
      setUserError(true);
      setMessage("Something went wrong");
      setShow(true);
    });
  }
  
  const clearInputs = () => {
    setData({firstName: "", lastName:"", phoneNo: "", email: "", siren:"", reason: "", password:"", confirmPassword: ""} );
  }
  return (
    <>
    <div className="register-container">
      <div className="register-left"></div>
      <div className="register">
        <div className="register-form">
          <form onSubmit={submitHandler} className="register-form-content">
            <Card heading="Inscription" style={{padding: '4rem 0rem 1rem 4rem', borderRadius: "7.7rem", overflow: "hidden"}}>
              <div className="register-form-wrapper">
                <div className="register-info">Tous les champs sont obligatoires <span>*</span></div>
              <Input
                type="text"
                placeholder="Prénom"
                value={data.firstName}
                onChange={inputChange}
                name="firstName"
              />
              {
                error.firstName && (
                  <div className="custom-error">{error.fname}</div>
                )
              }

              <Input
                type="text"
                placeholder="Nom"
                value={data.lastName}
                onChange={inputChange}
                name="lastName"
              />
              {
                error.lastName && (
                  <div className="custom-error">{error.lastName}</div>
                )
              }
              <Input
                type="number"
                placeholder="Téléphone"
                value={data.phoneNo}
                onChange={inputChange}
                name="phoneNo"
              />
              {
                error.phoneNo && (
                  <div className="custom-error">{error.phoneNo}</div>
                )
              }

              <Input
                type="email"
                placeholder="E-mail"
                value={data.username}
                onChange={inputChange}
                name="email"
              />
                {
                error.email && (
                  <div className="custom-error">{error.email}</div>
                )
              }
              <Input
                type="number"
                placeholder="SIREN"
                value={data.siren}
                onChange={inputChange}
                name="siren"
              />
              {
                error.siren && (
                  <div className="custom-error">{error.siren}</div>
                )
              }

              <Input
                type="text"
                placeholder="Raison sociale"
                value={data.reason}
                onChange={inputChange}
                name="reason"
              />
              {
                error.reason && (
                  <div className="custom-error">{error.reason}</div>
                )
              }

              <Input
                type="password"
                placeholder="Mot de passe"
                autocomplete="new-password"
                value={data.password}
                onChange={inputChange}
                name="password"
              />
              {
                error.password && (
                  <div className="custom-error">{error.password}</div>
                )
              }
              <Input
                type="password"
                placeholder="Confirmer le mot de passe"
                value={data.confirmPassword}
                onChange={inputChange}
                name="confirmPassword"
              />
               {
                error.confirmPassword && (
                  <div className="custom-error">{error.confirmPassword}</div>
                )
              }
              <div className="text-center py-5">
                <Button secondary type="submit" 
                disabled={
                  (!data.firstName || error.firstName) ||
                  (!data.lastName || error.lastName) ||
                  (!data.phoneNo || error.phoneNo) ||
                  (!data.email || error.email) ||
                  (!data.siren || error.siren) ||
                  (!data.reason || error.reason) ||
                  (!data.password || error.password) ||
                  (!data.confirmPassword || error.confirmPassword)
                }
                >
                  Inscription
                </Button>
                <div className="text-center register-bottom pt-5">
                  Déjà inscrit ?{" "}
                  <span className="register-text"><NavLink to="login">Connectez-vous</NavLink></span>
                </div>
              </div>
              </div>
            </Card>
          </form>
        </div>
      </div>
      {spinner && (
        <div className="spinner">
          <CircularProgress className="circular-spinner"/>
        </div>
      )}
    </div>

    {/* <CustomModal  /> */}
    <Modal show={show} onHide={handleClose} className="custom-modal-2">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            {
              !userError ? <MdDone size={40} /> : <BiError size={40} />
            }
          </div>
          <div className="py-2 text-center">{message}</div>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-center w-100">
            {
              !userError ? 
              <NavLink to="/login" className="login-modal-btn">
          <Button secondary variant="secondary" onClick={handleClose}>
            Ok
          </Button>
          </NavLink>
          : 
         
          <Button secondary variant="secondary" onClick={handleClose}>
            Close
          </Button>
            }
          </div>
         
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Register;
