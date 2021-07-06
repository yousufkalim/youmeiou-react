import React, {useEffect} from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import { Switch, withRouter, Redirect } from "react-router-dom";
import PublicRoute from "./routes/public.routes";
import PrivateRoute from "./routes/private.routes";
import Discover from  "./Screens/Discover/Discover";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import MyInformation from "./Screens/MyInformation/MyInformation";
import DiagnosticList from "./Screens/DiagnosticList/DiagnosticList";
import Inprogress from "./Screens/Inprogress/Inprogress";
import Plan from "./Screens/Plan/Plan";
import Mapping from "./Screens/Mapping/Mapping";
import Steps from "./Screens/Steps/Steps";
import Landing from "./Screens/Landing/Landing";
import WhoAreWe from "./Screens/WhoAreWe/WhoAreWe";
import EmailVerify from "./Screens/EmailVerify/EmailVerify";
import ChangePassword from "./Screens/ChangePassword/ChangePassword";
import {useSelector,useDispatch} from "react-redux"; 
import * as actionTypes from "./store/actionTypes";

const App = (props) => {

  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // localStorage.removeItem("riskName");
    // localStorage.clear();
    // window.addEventListener('unload', resetCurrentRisk);
    window.addEventListener('unload', resetRisks,clearLocalStorage, resetCurrentRisk, logout);
    return () => {
        window.removeEventListener('unload', resetRisks,clearLocalStorage, resetCurrentRisk, logout)
        
        // window.removeEventListener('unload', resetCurrentRisk)
    } 

  },[dispatch])

  const clearLocalStorage = () => {
    localStorage.removeItem("riskName");
  }

  const resetCurrentRisk = () => {
    dispatch({type: actionTypes.CLEAR_RISK});
  }

  const resetRisks = () => {
    dispatch({type: actionTypes.RESET_RISKS, data: []});
  }

  const logout = () => {
    dispatch({type: actionTypes.LOGOUT});
  }

  console.log("user in app.js",user.user.token);
  console.log("again app.js")
 
    // console.log(props);
    return (
      <div className="app">
        <Switch>
          <Layout 
          isLogin={user.user.token ? true : false}
          location={props.location}
          history={props.history}
          >
          {props.location.pathname === '/' && <Redirect to='/' />}

            <PrivateRoute component={Discover} exact path="/discover" />
            {/* <PrivateRoute component={Discover} exact path="/" /> */}
            <PrivateRoute component={MyInformation} exact path="/mes-informations" />
            {/* <PublicRoute component={DiagnosticList} exact path="/diagnostic-list" /> */}
            {/* <PrivateRoute component={DiagnosticList} exact path="/diagnostic-list" />
            <PrivateRoute component={Steps} exact path="/diagnostic-list/:id" /> */}

            <PublicRoute component={DiagnosticList} exact path="/diagnostic-list" /> 
            <PublicRoute component={Steps} exact path="/diagnostic-list/:id" />

            {/* <PublicRoute component={Inprogress} exact path="/mes-diagnostics" /> */}
            <PrivateRoute component={Inprogress} exact path="/mes-diagnostics" />
            <PrivateRoute component={Plan} exact path="/mes-diagnostics/:id" />
            <PrivateRoute component={Mapping} exact path="/cartographie" />
            {/* <PrivateRoute component={Plan} exact path="/plan" /> */}
            <PublicRoute component={Steps} exact path="/diagnostic-presentation" />
            <PublicRoute component={Register} path="/register" exact restricted={true} />
            <PublicRoute component={Landing} path="/" exact restricted={true} />
            <PublicRoute component={Login} path="/login" exact  restricted={true} />
            <PublicRoute component={WhoAreWe} path="/WhoAreWe" exact  restricted={true} />
            <PublicRoute component={EmailVerify} path="/email-verify/:id" exact  restricted={true} />
            <PublicRoute component={ChangePassword} path="/change-password/:id" exact restricted={true} />
          </Layout>
        </Switch>
      </div>
    );

};

export default withRouter(App);
