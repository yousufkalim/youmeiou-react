import React, { Component } from 'react';
import "./Sidebar.css";

import {FiLogOut} from "react-icons/all";
import {NavLink, withRouter} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/all";

const navlinks = [
    {
        path: "/discover",
        text: "Discover"
    },
    {
        path: "/diagnostic-list",
        text: "Sélection des risques à analyser"
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
        path: "/mapping",
        text: "Cartographie des risques et criticité"
    },
    // {
    //     path: "/diagnostic-presentation",
    //     text: "Traitement des risques",
    //   },
    {
        path: "/plan",
        text: "Gestion des plans d’action"
    },
    {
        path: "/mes-informations",
        text: "Gestion du compte"
    },
]

export class Sidebar extends Component {

    logout = () => {
        sessionStorage.clear();
        this.props.history.push('/login');
        console.log(this.props);
        
    }
    render() {
        return (
            <div className="sidebar">
                <div className="p-2">
                <GiHamburgerMenu size={30} onClick={() =>this.props.sidebarToggle(false)} className="sidebar-toggler mr-4" />
                </div>
                <div className="links-container">
                   {
                       navlinks.map((item) => (
                           <NavLink activeClassName="active-navlink" className="custom-navlink" to={item.path}>{item.text}</NavLink>
                       ))
                   }

                   <div className="sidebar-logout-container">
                   <div className="sidebar-logout" onClick={this.logout}><span><FiLogOut size={26} className="mr-3" /></span>Se déconnecter</div>
                   </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Sidebar)
