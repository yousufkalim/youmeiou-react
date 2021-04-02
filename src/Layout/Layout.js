import React, { Component } from "react";
import "./Layout.css";

import { Images } from "../assets/Assets";
import Sidebar from "../components/Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/all";

export class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true,
    };
  }

  sidebarToggle = (btn) => {
    this.setState({ toggle: btn });
  };
  
  render() {
    if (this.props.isLogin) {
      const { toggle } = this.state;
      return (
        <div className="layout">
          {toggle && (
            <div className="layout-sidebar">
              <Sidebar sidebarToggle={this.sidebarToggle} />
            </div>
          )}
          <div className="layout-children">
            <div className="d-flex justify-content-between mx-3 py-1 screen-navbar" style={{borderBottom: '1px solid rgba(1,35,64, 18%)'}}>
              <div className="sidebar-drawer-container d-flex">
                <div className="sidebar-drawer">
                {
                  this.state.toggle === false && (
                    <GiHamburgerMenu size={30} onClick={() =>this.sidebarToggle(true)} className="sidebar-toggler mr-4" />
                  )
                }
                </div>
                <span><img src={Images.logo} alt="logo" /></span> 
              </div>
              <div>
                <img src={Images.profile} alt="profile" className="profile-img" />
              </div>
            </div>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return <>{this.props.children}</>;
    }
  }
}

export default Layout;
