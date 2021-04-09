import React from "react";
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

class App extends React.Component {

  componentDidMount(){
    // console.log("history", this.props);
  }
  render(){
    // console.log(this.props);
    return (
      <div className="app">
        <Switch>
          <Layout 
          isLogin={sessionStorage.getItem('token') ? true : false}
          location={this.props.location}
          history={this.props.history}
          >
          {/* {this.props.location.pathname === '/' && <Redirect to='/register' />} */}

            <PrivateRoute component={Discover} exact path="/discover" />
            {/* <PrivateRoute component={Discover} exact path="/" /> */}
            <PrivateRoute component={MyInformation} exact path="/mes-informations" />
            {/* <PublicRoute component={DiagnosticList} exact path="/diagnostic-list" /> */}
            <PrivateRoute component={DiagnosticList} exact path="/diagnostic-list" />
            <PrivateRoute component={Steps} exact path="/diagnostic-list/:id" />
            {/* <PublicRoute component={Inprogress} exact path="/mes-diagnostics" /> */}
            <PrivateRoute component={Inprogress} exact path="/mes-diagnostics" />
            <PrivateRoute component={Plan} exact path="/mes-diagnostics/:id" />
            <PrivateRoute component={Mapping} exact path="/mapping" />
            {/* <PrivateRoute component={Plan} exact path="/plan" /> */}
            <PublicRoute component={Steps} exact path="/diagnostic-presentation" />
            <PublicRoute component={Register} path="/register" exact restricted={true} />
            <PublicRoute component={Landing} path="/" exact restricted={true} />
            <PublicRoute component={Login} path="/login" exact  restricted={true} />
          </Layout>
        </Switch>
      </div>
    );
  }
};

export default withRouter(App);
