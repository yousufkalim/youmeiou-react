import React, { useState, useEffect } from "react";
import "./Layout.css";

import { Images } from "../assets/Assets";
import Sidebar from "../components/Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/all";
import  MobileSidebar  from "../components/Sidebar/MobileSidebar";
import {useSelector} from "react-redux";
import endPoints from "../globals/Constants";
import jwt_decode from "jwt-decode";

const Layout = (props, ref) => {
 
  const [toggle, setToggle] = useState(true);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [userImage, setUserImage] = useState(""); 

  const token = useSelector((state) => state.user.token);
  const userToken = token !== "" ? token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhemVlbS5mYWxjb25pdEBnbWFpbC5jb20iLCJqdGkiOiI0YmIxYmZjZC04MzJhLTQ0OGQtODNhNi0wY2JjYjU0MTYxOTAiLCJlbWFpbCI6ImF6ZWVtLmZhbGNvbml0QGdtYWlsLmNvbSIsIklkIjoiNyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTA1OS8iLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwNTkvIiwibmJmIjoxNjE5Njc1NTgyLCJleHAiOjE2MTk2ODI3ODIsImlhdCI6MTYxOTY3NTU4Mn0.55AC674LJM3yN9gz7FUfS9SgaIVgQHS8xBQ";

  useEffect(() => {
    getProfile();
  },[getProfile, userImage])

  

  const sidebarToggle = (btn) => {
    setToggle(btn)
  };


  const mobileSidebarToggle = (b) => {
    setMobileToggle(b)
  };

  async function getProfile() {
    var decoded = jwt_decode(userToken);
    const id = parseInt(decoded.Id);
    await fetch(`${endPoints.GET_PROFILE}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result from api ",result);
        setUserImage(result.userProfileImage);
        
      })
      .catch((error) => {
        console.log(error);
        
      });
  }
  
  
  
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
                { userImage ? 
                  <img src={`data:image/jpeg;base64,${userImage}`} alt="profile" className="profile-img" />
                  :
                  <img src={Images.account} alt="profile" className="profile-img" />
                }
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
