import React from 'react'
import { Images } from "../../assets/Assets";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = (props) => {
    return (
<div className="footer-wrap" style={{ backgroundColor: "#012340" }}>
<div className="container-fluid">
  <div
    className="row"
    style={{ justifyContent: "center", padding: "5rem 0" }}
  >
    <div className="footer-image-content col-md-3 col-sm-6">
      <div className="footer-logo">
        <img className="riskr-footer-logo" src={Images.riskr_logo} />
      </div>
      <p className="text-color-white">
        Ciblez vos failles en un clic !
      </p>
      <div
        class="row"
        style={{
          paddingRight: "5rem",
          paddingLeft: "5rem",
          gap: "3rem",
        }}
      >
        <div class="column">
          <a target="_blank" href="https://www.facebook.com/">
            <img
              className="social-media-icons"
              src={Images.facebookIcon}
              alt="Snow"
              style={{ width: "100%" }}
            />
          </a>
        </div>
        <div class="column">
          <a target="_blank" href="https://www.twitter.com/">
            <img
            className="social-media-icons"
              src={Images.twitterIcon}
              href="www.twitter.com"
              alt="Forest"
              style={{ width: "100%" }}
            />
          </a>
        </div>
        <div class="column">
          <a target="_blank" href="https://www.linkedin.com/">
            <img
            className="social-media-icons"
              src={Images.linkedInIcon}
              href="www.linkedin.com"
              alt="Mountains"
              style={{ width: "100%" }}
            />
          </a>
        </div>
      </div>
    </div>
    <div className="content-heading col-md-2 col-sm-6">
      <h3>En savoir plus</h3>
      <ul className="footer-links">
        <li>
        <NavLink to="/WhoAreWe">
            <a href="#.">Qui sommes-nous ?</a>
        </NavLink>
        </li>
        {/* <li>
          <a href="#.">Tarifs</a>
        </li>
        <li>
          <a href="#.">Blog</a>
        </li> */}
      </ul>
    </div>
    <div className="content-heading col-md-2 col-sm-6 footer-Politiques-link">
      <h3>Politiques</h3>
      <ul className="footer-links">
        <li>
          <a href="#.">Mentions légales</a>
        </li>
        <li>
          <a href="#.">CGU / CGV</a>
        </li>
        <li>
          <a href="#.">Gestion des données personnelles</a>
        </li>
      </ul>
      <div className="clearfix"></div>
    </div>
    <div className="content-heading col-md-2 col-sm-6">
      <h3>Support</h3>
      <ul className="footer-links">
        {/* <li>
          <a href="#.">Nous contacter</a>
        </li> */}
        {/* <li>
          <a href="#.">FAQ</a>
        </li> */}
        <li>
          <a href="#." onClick={props.handleOpenModal}>
            Contactez-nous
          </a>
        </li>
      </ul>
    </div>
  </div>
  {/* <div className="copyright">Copyright © 2017 Classify - All Rights Reserved.</div> */}
</div>
</div>
    )
}

export default Footer
