import React, { useState, useEffect } from "react";
import "./Layout.css";

import { Images } from "../assets/Assets";
import Sidebar from "../components/Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/all";
import  MobileSidebar  from "../components/Sidebar/MobileSidebar";

const Layout = (props, ref) => {
 
  const [toggle, setToggle] = useState(true);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {

  },[])

  

  const sidebarToggle = (btn) => {
    setToggle(btn)
  };


  const mobileSidebarToggle = (b) => {
    setMobileToggle(b)
  };
  
  
  
    if (props.isLogin) {
      return (
        <div className="layout">
          {toggle && (
            <>
            <div className="layout-sidebar">
              <Sidebar sidebarToggle={sidebarToggle} />
            </div>
           
            </>
          )}
          {
            mobileToggle && (
              <div className="layout-mobile-sidebar">
              <MobileSidebar sidebarToggle={mobileSidebarToggle} />
            </div>
            )
          }
          <div className="layout-children">
            <div className="d-flex justify-content-between mx-3 py-1 screen-navbar" style={{borderBottom: '1px solid rgba(1,35,64, 18%)'}}>
              <div className="sidebar-drawer-container d-flex">
                <div className="sidebar-drawer">
                {
                  toggle === false && (
                    <GiHamburgerMenu onClick={() =>sidebarToggle(true)} className="sidebar-toggler" />
                  )
                }
                {
                  mobileToggle === false && (
                    <GiHamburgerMenu onClick={() =>mobileSidebarToggle(true)} className="sidebar-toggler-mobile" />
                  )
                }
                </div>
                <span><img src={Images.logo} alt="logo" /></span> 
              </div>
              <div>
                <img src={Images.profile} alt="profile" className="profile-img" />
              </div>
            </div>
            {props.children}
          </div>
        </div>
      );
    } else {
      return <>{props.children}</>;
    }

}

export default Layout;
