import React, { useState, useEffect } from "react";
import "./Login.css";

//  COMPONENTS
import Input from "../../components/Input/Input";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import { Modal} from "react-bootstrap";
import axios from "axios";
// import endPoints from "../../globals/Constants";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import CustomModal from "../../components/CustomModal/CustomModal";
import {BiError} from "react-icons/all";
import endPoints from "../../globals/Constants";

const Login = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [spinner, setSpinner] = useState(false);
  // const [mailFormat] = useState(
  //   "/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/"
  // );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const dispatch = useDispatch();

  const store = useSelector((state) => state);
  console.log(store);

  // const user = useSelector((state) => state);
  // console.log("user is  => ", user);
  useEffect(() => {}, []);

  const inputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!e.target.value.match(mailformat)) {
        setError({ ...error, email: "Format d'email invalide" });
      } else {
        setError({ ...error, email: "" });
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setSpinner(true);

    // axios
    //   .post("https://api.chancee.io/api/v1/auth/login")
    //   .then((res) => {
    //     setSpinner(false);
    //     props.history.push("/discover")})
    //   .catch((error) => {
    //     setSpinner(false);
    //     alert("error");
    //     console.log("error", error.message)});

    // axios({
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json', "Accept": "application/json" },
    //   url: "http://160.153.249.64:5059/api/v1Test/Login",

    //   body: JSON.stringify({
    //     email: data.email,
    //     password: data.password
    //   })

    // }).then((res) => console.log(res));

    fetch(endPoints.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((resp) => resp.json())
      .then((res) => {
        if(res.success){
          setSpinner(false);
          console.log(res);
          dispatch({type: actionTypes.LOGIN, token: res.token })
          props.history.push("/discover");
        }
        else{
          setMessage(res.errorMessage)
          setSpinner(false);
          console.log(res);
          setShow(true);
          // alert(res.errorMessage)
        }
      })
      .catch((err) =>{ 
        setSpinner(false);
        alert(err)
      });

    // setTimeout(() => {
    //   if (data.email === "azeem@gmail.com" && data.password === "12345") {
    //     dispatch({type: actionTypes.LOGIN, email: data.email })
    //     props.history.push("/discover");
    //     setSpinner(false);
    //   } else {
    //     alert("Something went wrong");
    //     setSpinner(false);
    //   }
    // }, 2000);
    console.log("data is", data);
  };
  return (
    <>
    <div className="login-container">
      <div className="login-left" />
      <div className="login">
        <div className="login-form">
          <form onSubmit={submitHandler}>
            <Card
              heading="Connexion"
              style={{ padding: "4rem 4rem 1rem 4rem", borderRadius: "7.7rem" }}
            >
              <Input
                type="text"
                placeholder="E-mail"
                value={data.email}
                onChange={inputChange}
                name="email"
              />
              {error.email && <div className="custom-error">{error.email}</div>}
              <Input
                type="password"
                placeholder="Mot de passe"
                value={data.password}
                autocomplete="new-password"
                onChange={inputChange}
                name="password"
              />

              <div className="text-center py-5">
                <Button
                  primary
                  type="submit"
                  disabled={!data.email || error.email || !data.password}
                >
                  Se connecter
                </Button>
                <div className="text-center login-bottom pt-5">
                  Pas encore de compte ?{" "}
                  <span className="register-text">
                    <NavLink to="register">Inscrivez-vous</NavLink>
                  </span>
                </div>
              </div>
            </Card>
          </form>
        </div>
      </div>
      {spinner && (
        <div className="spinner">
          <CircularProgress className="circular-spinner" />
        </div>
      )}
    </div>
    
    {/* <CustomModal  /> */}
    <Modal show={show} onHide={handleClose} className="custom-modal-2">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center"><BiError size={40} /></div>
          <div className="py-2 text-center">{message}</div>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-center w-100">
          <div className="login-modal-btn">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </div>
          </div>
         
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
