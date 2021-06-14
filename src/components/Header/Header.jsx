import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Images } from "../../assets/Assets";
import { Nav, Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="/">
        <img src={Images.logo} className="landing-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">
            <div className="landing-navbar-buttons">Pourquoi Riskr</div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="landing-navbar-buttons">Comment ça marche</div>
          </Nav.Link>
          <Nav.Link href="#features">
            <div className="landing-navbar-buttons">Nos clients</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <div className="landing-navbar-buttons">Blog</div>
          </Nav.Link>
        </Nav>
        <div>
          <NavLink to="/register">
            <Button secondary>Inscription</Button>
          </NavLink>
        </div>
        <div className="pl-lg-5 pt-lg-0 pt-3">
          <NavLink to="/login">
            <Button primary>Se connecter</Button>
          </NavLink>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
