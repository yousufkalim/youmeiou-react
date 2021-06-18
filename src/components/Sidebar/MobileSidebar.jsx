import React, { useState, useEffect } from 'react';
import "./MobileSidebar.css";

import {FiLogOut} from "react-icons/all";
import {NavLink, withRouter} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/all";
import {useDispatch} from "react-redux";
import * as actionTypes from "../../store/actionTypes";

const navlinks = [
    {
        path: "/mes-informations",
        text: "Mon compte"
    },
    {
        path: "/discover",
        text: "Mon entreprise"
    },
    {
        path: "/diagnostic-list",
        text: "Diagnostics disponibles"
    },
    {
        path: "/mes-diagnostics",
        text: "Mes Diagnostics"
    },
    // {
    //     path: "/diagnostic-list",
    //     text: "Sélection des risques à analyser"
    // },
    // {
    //     path: "/mes-diagnostics",
    //     text: "Mes Diagnostics"
    // },
    {
        path: "/cartographie",
        text: "Cartographie des risques"
    },
    // {
    //     path: "/diagnostic-presentation",
    //     text: "Traitement des risques",
    //   },

    
    // {
    //     path: "/plan",
    //     text: "Gestion des plans d’action"
    // },

]

const MobileSidebar = (props, ref) => {

    const dispatch = useDispatch();

    useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            setTimeout(function() {

                props.sidebarToggle(true);
            }, 200);
          } else {
            setTimeout(function() {

                props.sidebarToggle(false);
            }, 200);
         
          }
        }
      
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);

    const logout = () => {
        dispatch({type: actionTypes.LOGOUT});
        props.history.push('/login');
        console.log(props);
        
    }

        return (
            <div className="sidebar">
                <div className="p-2">
                <GiHamburgerMenu onClick={() =>props.sidebarToggle(false)} className="sidebar-toggler" />
                </div>
                <div className="links-container">
                   {
                       navlinks.map((item) => (
                           <NavLink activeClassName="active-navlink" className="custom-navlink" to={item.path}>{item.text}</NavLink>
                       ))
                   }

                   <div className="sidebar-logout-container">
                   <div className="sidebar-logout" onClick={logout}><span><FiLogOut className="sidebar-logout-icon mr-3" /></span>Se déconnecter</div>
                   </div>
                </div>
            </div>
        )
  
}

export default withRouter(MobileSidebar)
