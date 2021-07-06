import React, { useEffect, useState } from "react";
import "./ChangePassword.css";
import { Images } from "../../assets/Assets";
import Input from "../../components/Input/Input";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { NavLink } from "react-router-dom";
import { HiOutlineMailOpen, GiCheckMark, BiError } from "react-icons/all";
import endPoints from "../../globals/Constants";
import { withSnackbar } from "notistack";
function ChangePassword(props) {
  const [spinner, setSpinner] = useState(false);
  //const [enableBtn, setEnableBtn] = useState(false);
  const [invalidPasswordFormat, setInvalidPasswordFormat] = useState(true);
  const [error, setError] = useState("");
  const [PasswordChangedMsg, setPasswordChangedMsg] = useState("Changer le mot de passe");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordChanged, setPasswordChanged] = useState(false);
  var passwordFormat = /(?=.*\d)(?=.*[a-z]).{7,}/;
  const [data, setData] = useState({
    passwordOne: "",
    passwordTwo: "",
  });
  async function changePasswordCall() {
    debugger;
    if (data.passwordOne === data.passwordTwo) {
      if (data.passwordTwo.match(passwordFormat)) {
        var pathName = props.history.location.pathname;
        var result = pathName.split("/change-password/");
        var userId = result[1];
        await fetch(`${endPoints.CHANGE_PASSWORD}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            UserId: userId,
            Password: data.passwordTwo,
          }),
        })
          // .then((resp) => resp.json())
          .then((resp) => resp.json())
          .then((res) => {
            console.log("response", res);
            // debugger;
            if (res.success) {
              props.enqueueSnackbar("Password Changed", {
                variant: "success",
              });
              setData({
                passwordOne: "",
                passwordTwo: "",
              });
              setPasswordChanged(true);
              setPasswordChangedMsg("Mot de passe changé")
            } else {
              props.enqueueSnackbar("Un problème est survenu", {
                variant: "error",
              });
            }
          })
          .catch((err) => {
            console.log("error ", err);

            props.enqueueSnackbar("Un problème est survenu", {
              variant: "error",
            });
          });
      }
    }
  }
  const inputChange = (e) => {
    debugger;

    if (e.target.name === "passwordOne") {
      setData({
        ...data,
        passwordOne: e.target.value,
      });
    } else if (e.target.name === "passwordTwo") {
      setData({
        ...data,
        passwordTwo: e.target.value,
      });
    }
    if (!e.target.value.match(passwordFormat)) {
      setInvalidPasswordFormat(true);
      setError(
        "Le mot de passe n'est pas valide. Il doit avoir au moins 7 caractères, avec au moins un chiffre et une lettre"
      );
      setPasswordMatch(true);
    } else {
      setInvalidPasswordFormat(false);
      setError("");
      if (e.target.name === "passwordOne") {
        if (data.passwordTwo === e.target.value) {
          setPasswordMatch(false);
        } else {
          setPasswordMatch(true);
        }
      } else if (e.target.name === "passwordTwo") {
        if (data.passwordOne === e.target.value) {
          setPasswordMatch(false);
        } else {
          setPasswordMatch(true);
        }
      }
    }
  };
  return (
    <div className="change-password">
      <div className="change-password-logo">
        <img src={Images.logo} alt="logo" />
      </div>
      <div className="change-password-card">
        <div className="forget-password-card"      
        >
        <Card
          style={{
            padding: "4rem 4rem 1rem 4rem",
            borderRadius: "7.7rem",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div className="verify-email-heading-container pt-3">
            <div className="verify-email-heading">{PasswordChangedMsg}</div>
            <HiOutlineMailOpen className="verify-email-icon" />
          </div>
          {!passwordChanged &&(

            <div style={{width:"100%"}}>
              <Input
              type="password"
              placeholder="Mot de passe"
              value={data.passwordOne}
              autocomplete="new-password"
              onChange={inputChange}
              name="passwordOne"
            />
            <Input
              type="password"
              placeholder="Mot de passe"
              value={data.passwordTwo}
              autocomplete="new-password"
              onChange={inputChange}
              name="passwordTwo"
            />
            </div>
          )}

          {invalidPasswordFormat && (
            <div className="custom-error">{error.email}</div>
          )}
          {!passwordChanged ? (
            <Button
              secondary
              disabled={passwordMatch}
              onClick={changePasswordCall}
              style={{marginBottom:"3rem"}}
            >
              Submit
            </Button>
          ) : (
            <NavLink to="/login" style={{marginBottom:"3rem"}}>
              <Button primary>Se connecter</Button>
            </NavLink>
          )}
        </Card>
        </div>
      </div>
    </div>
  );
}
export default withSnackbar(ChangePassword);
