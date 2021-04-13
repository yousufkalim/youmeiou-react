import React, { useEffect, useState } from "react";
import "./EmailVerify.css";
import { Images } from "../../assets/Assets";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {NavLink} from "react-router-dom";
import {HiOutlineMailOpen} from "react-icons/all"

const EmailVerify = (props) => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    verifyEmail();
  }, []);

  async function verifyEmail() {
    var pathName = props.history.location.pathname;
    var result = pathName.split("/email-verify/");
    var diagnosticId = result[1];
    console.log(diagnosticId);
    console.log(props);
    setSpinner(false)
  }

  return (
    <div className="email-verify">
      <div className="email-verify-logo">
        <img src={Images.logo} alt="logo" />
      </div>
      <div className="email-verify-card">
        <Card
          style={{
            padding: "4rem 4rem 1rem 4rem",
            borderRadius: "7.7rem",
            width: "50%",
            height: "70%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            position: "relative"
          }}
        >
             <div className="verify-email-heading-container pt-3">
                <div className="verify-email-heading">Vérification de l'E-mail</div>
                <HiOutlineMailOpen className="verify-email-icon" />
              </div>
          {spinner ? (
            <div className="spinner">
              <CircularProgress className="circular-spinner-blue" />
            </div>
          ) : (
            <>
             

              <NavLink className="mb-5" to="/login">
                <Button secondary type="submit">
                  Se connecter
                </Button>
              </NavLink>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default EmailVerify;
