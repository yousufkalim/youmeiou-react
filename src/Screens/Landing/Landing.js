import React, { useEffect } from "react";
import "./Landing.css";

import { NavLink } from "react-router-dom";
import { Images } from "../../assets/Assets";
import Button from "../../components/Button/Button";
import { Row, Col, Carousel } from "react-bootstrap";
import LandingCard from "../../components/LandingCard/LandingCard";
import _ from "lodash";
import Card from "../../components/Card/Card";
// import { setIn } from "immutable";
// import { IoConstructOutline } from "react-icons/io5";

const WhyRiskrCards = [
{
  heading: "Améliorez vos performances",
  image:"landing_card5.png",
},
{
  heading: "Bénéficiez d’un suivi personnalisé",
  image:"landing_card6.png",
},
{
  heading: "Mettez vos risques sous contrôle",
  image:"landing_card7.png",
}

]
const cards = [
  {
    heading: "Découverte de votre contexte",
    detail:
      "Renseignez vos informations rapidement en toute simplicité.",
    image: "landing_card1.png",
  },
  {
    heading: "Analyses de vos risques",
    detail:
      "Des diagnostics pour révéler vos failles et vous améliorer.",
    image: "landing_card2.png",
  },
  {
    heading: "Traitement des risques",
    detail:
      "Décidez d’agir grâce à un plan d’action détaillé et l’accompagnement d’un expert.",
    image: "landing_card3.png",
  },
  {
    heading: "Gestions des actions",
    detail:
      "Un suivi actif lors de la mise en place de votre plan d’action.",
    image: "landing_card3",
  },
];

const Landing = (props) => {

  useEffect(() => {
    console.log(props);
    test();

    return () => {
      console.log("back button outer");
      // && history.location.pathname === "any specific path")
      if (props.history.action === "POP") {
        console.log("back button");
        props.history.replace("/");
      }
    };
  }, [])
  const test = () => {
    var data = [{ name: "apple", id: 2 },
    { name: "dog", id: "dog_1" },
    { name: "cat", id: "cat_2" }
    ]

    if (_.find(data, { id: 3 })) {
      // console.log({id});
      console.log("helloo");

      const index = data.findIndex(listItem => {
        // condition here
        return listItem.id === 2;
      });
      console.log("index is ", index)
    }


  }

  return (
    <>
      <div className="landing">
        {/* Navbar */}
        <div className="landing-navbar-container">
          <img src={Images.logo} className="landing-logo" alt="logo" />
          <div className="landing-navbar">
            <div className="row" style={{gap:"8rem", paddingRight:"8rem",paddingLeft:"8rem"}}>
            <div className="landing-navbar-buttons">Pourquoi Riskr</div>
              <div className="landing-navbar-buttons">Comment ça marche</div>
              <div className="landing-navbar-buttons">Nos clients</div>
              <div className="landing-navbar-buttons">Blog</div>
            </div>

            <div>
              <NavLink to="/register">
                <Button primary>Inscription</Button>
              </NavLink>
            </div>
            <div className="pl-5">
              <NavLink to="/login">
                <Button secondary>Se connecter</Button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="landing-header">
          <Row style={{ alignItems: "center" }}>

            <Col md={6} className="landing-header-content">

              <div className="landing-heading">
              Ciblez vos failles en un clic
              </div>
              <div className="landing-detail">
                Votre entreprise mérite un outil performant pour maitriser les
                risques qu'elle va devoir affronter.
              </div>
              <div className="landing-detail">
                Améliorez vos performances, vos ROI et vos ROE!
              </div>
              <NavLink to="/diagnostic-list">
                <Button secondary>Analyzer un risque</Button>
              </NavLink>
            </Col>
            <Col md={6} sm={12} className="text-center">
              <img
                src={Images.landingHeader}
                alt="header"
                className="landing-header-img"
              />
            </Col>
          </Row>
        </div>
        {/* Why riskr Card */}
        <div className="landing-cards-container">
          <div className="landing-content-heading">Pourquoi Riskr ?</div>
          <div className="landing-cards">
            <div className="single-landing-card">
              <LandingCard
                heading={WhyRiskrCards[0].heading}
                detail={""}
                image="5"
              />
            </div>
            
            <div className="single-landing-card">
              <LandingCard
                heading={WhyRiskrCards[1].heading}
                detail={""}
                image="6"
              />
            </div>
            <div className="single-landing-card">
              <LandingCard
                heading={WhyRiskrCards[2].heading}
                detail={""}
                image="7"
              />
            </div>
          </div>
          <div className="text-center">
            <NavLink to="/diagnostic-list">
              <Button secondary>C’est parti !</Button>
            </NavLink>
          </div>
        </div>
        {/* Why trust us card */}
        <div className="text-center" style={{ backgroundImage: "linear-gradient(#EDEDED,white)"}}>
        <div className="landing-content-heading-blue">Ils nous font confiance</div>
        <div className="d-flex justify-content-between" style={{ padding:"0px 10rem"}}>
              <img className="landing-trust-1" src={Images.landingCard8} alt="card" />
              <img className="landing-trust-1" src={Images.landingCard9} alt="card" />
              <img className="landing-trust-1" src={Images.landingCard10} alt="card" />
              <img className="landing-trust-1" src={Images.landingCard11} alt="card" />
              <img className="landing-trust-1" src={Images.landingCard12} alt="card" />
            </div>
            <div className="landing-content-footer">Les logos défilent*</div>
          {/* <div className="single-landing-card"> */}

            {/* <LandingCard
                heading={""}
                detail={""}
                image="9"
              />
            <LandingCard
                heading={""}
                detail={""}
                image="10"
              />
            <LandingCard
                heading={""}
                detail={""}
                image="11"
              />
              <LandingCard
                heading={""}
                detail={""}
                image="12"
              /> */}
            {/* </div> */}
        </div>
        {/* Card */}
        <div className="landing-cards-container">
          <div className="landing-content-heading">Comment ça marche ?</div>
          <div className="landing-cards">
            <div className="single-landing-card">
              <LandingCard
                heading={cards[0].heading}
                detail={cards[0].detail}
                image="1"
              />
            </div>
            <div className="single-landing-card">
              <LandingCard
                heading={cards[1].heading}
                detail={cards[1].detail}
                image="2"
              />
            </div>
            <div className="single-landing-card">
              <LandingCard
                heading={cards[2].heading}
                detail={cards[2].detail}
                image="3"
              />
            </div>
            <div className="single-landing-card">
              <LandingCard
                heading={cards[3].heading}
                detail={cards[3].detail}
                image="4"
              />
            </div>
          </div>
          {/* <div className="text-center">
            <NavLink to="/diagnostic-list">
              <Button primary>C’est parti !</Button>
            </NavLink>
          </div> */}
        </div>
      </div>

      <div className="landing-slider">

        <Carousel>
          <Carousel.Item>
          <div className="landing-content-heading">Que pensent nos clients ?</div>
            <div className="carousel-style">
              <Card  style={{
                borderRadius: "3.5rem",
                overflow: "hidden",
                width: "25%",
                float: "left",
                background: "#F8F8F8",
                padding: "0 3rem",
              }}>
                <img className="landing-trust-1" src={Images.ceo_Martin_Cregut} alt="card" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3rem",
                    display: "block",
                }} />
                <div className="ceo-card-footer">Martin Cregut | CEO PicMe</div>
            </Card>
            <Card  style={{
                borderRadius: "3.5rem",
                overflow: "hidden",
                float: "left",
                width: "25%",
                background: "#F8F8F8",
                padding: "0 3rem",
              }}>
                <img className="landing-trust-1" src={Images.ceo_Julian_Amar} alt="card" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3rem",
                    display: "block",
                }} />
                <div className="ceo-card-footer">Julian Amar | CEO PicMe</div>
            </Card>
            <Card  style={{
                borderRadius: "3.5rem",
                overflow: "hidden",
                float: "left",
                width: "25%",
                background: "#F8F8F8",
                padding: "0 3rem",
              }}>
                <img className="landing-trust-1" src={Images.ceo_Martin_Cregut_3} alt="card" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3rem",
                    display: "block",
                }} />
                <div className="ceo-card-footer">Martin Cregut | CEO PicMe</div>
            </Card>
            </div>


            {/* <div className="landing-footer">
              <div className="landing-footer-img">
                <img src={Images.landingFooter} alt="profile" />
              </div>
              <div className="landing-footer-content text-center">
                <div className="text-center">
                  <img
                    src={Images.comma}
                    alt="comma"
                    className="landing-footer-comma"
                  />
                </div>
                <div>
                  <div className="landing-footer-detail">
                    Je suis prêt à parier que Riskr va dans les prochaines
                    années devenir un outil incontournable du chef d’entreprise
                    de TPE/PME !{" "}
                  </div>
                  <div className="landing-footer-text">
                    Martin Cregut | CEO PicMe
                  </div>
                </div>
              </div>
            </div> */}
          </Carousel.Item>
          <Carousel.Item>
          <div className="landing-content-heading">Que pensent nos clients ?</div>
          <div className="carousel-style">
              <Card  style={{
                borderRadius: "3.5rem",
                overflow: "hidden",
                width: "25%",
                float: "left",
                background: "#F8F8F8",
                padding: "0 3rem",
              }}>
                <img className="landing-trust-1" src={Images.ceo_Martin_Cregut} alt="card" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3rem",
                    display: "block",
                }} />
                <div className="ceo-card-footer">Martin Cregut | CEO PicMe </div>
            </Card>
            <Card  style={{
                borderRadius: "3.5rem",
                overflow: "hidden",
                float: "left",
                width: "25%",
                background: "#F8F8F8",
                padding: "0 3rem",
              }}>
                <img className="landing-trust-1" src={Images.ceo_Julian_Amar} alt="card" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3rem",
                    display: "block",
                }} />
                <div className="ceo-card-footer">Julian Amar | CEO PicMe </div>
            </Card>
            <Card  style={{
                borderRadius: "3.5rem",
                overflow: "hidden",
                float: "left",
                width: "25%",
                background: "#F8F8F8",
                padding: "0 3rem",
              }}>
                <img className="landing-trust-1" src={Images.ceo_Martin_Cregut_3} alt="card" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3rem",
                    display: "block",
                }} />
                <div className="ceo-card-footer">Martin Cregut | CEO PicMe</div>
            </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="landing-content-heading">Que pensent nos clients ?</div>
          <div className="carousel-style">
              <Card  style={{
                borderRadius: "3.5rem",
                overflow: "hidden",
                width: "25%",
                float: "left",
                background: "#F8F8F8",
                padding: "0 3rem",
              }}>
                <img className="landing-trust-1" src={Images.ceo_Martin_Cregut} alt="card" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3rem",
                    display: "block",
                }} />
                <div className="ceo-card-footer">Martin Cregut | CEO PicMe</div>
            </Card>
            <Card  style={{
                borderRadius: "3.5rem",
                overflow: "hidden",
                float: "left",
                width: "25%",
                background: "#F8F8F8",
                padding: "0 3rem",
              }}>
                <img className="landing-trust-1" src={Images.ceo_Julian_Amar} alt="card" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3rem",
                    display: "block",
                }} />
                <div className="ceo-card-footer">Julian Amar | CEO PicMe</div>
            </Card>
            <Card  style={{
                borderRadius: "3.5rem",
                overflow: "hidden",
                float: "left",
                width: "25%",
                background: "#F8F8F8",
                padding: "0 3rem",
              }}>
                <img className="landing-trust-1" src={Images.ceo_Martin_Cregut_3} alt="card" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3rem",
                    display: "block",
                }} />
                <div className="ceo-card-footer">Martin Cregut | CEO PicMe</div>
            </Card>
            </div>
          </Carousel.Item>
        </Carousel> 
            <div className="text-center">
            <NavLink to="/diagnostic-list">
              <Button style={{marginTop:"10rem"}} secondary>C’est parti !</Button>
            </NavLink>
          </div>   
      </div>

      {/* Footer */}

<div className="footer-wrap" style={{backgroundColor:"#012340"}}>
  <div className="container-fluid">
    <div className="row" style={{justifyContent:"center",padding:"5rem 0"}}>
      <div className="col-md-2 col-sm-6">
        <div className="footer-logo"><img src={Images.riskr_logo}/></div>
        <p className="text-color-white">Ciblez vos failles en un clic !</p>
        <div class="row" style={{paddingRight:"2rem",paddingLeft:"2rem",gap:"3rem"}}>
          <div class="column">
            <a href="https://www.facebook.com/">
              <img src={Images.facebookIcon}  alt="Snow" style={{width:"100%"}} />
            </a>
          </div>
          <div class="column">
            <a href="https://www.twitter.com/">
              <img src={Images.twitterIcon} href="www.twitter.com" alt="Forest" style={{width:"100%"}} />
            </a>
          </div>
          <div class="column">
            <a href="https://www.linkedin.com/">
              <img src={Images.linkedInIcon} href="www.linkedin.com" alt="Mountains" style={{width:"100%"}} />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <h3>En savoir plus</h3>
        <ul className="footer-links">
          <li><a href="#.">Qui sommes-nous ?</a></li>
          <li><a href="#.">Tarifs</a></li>
          <li><a href="#.">Blog</a></li>
        </ul>
      </div>
      <div className="col-md-2 col-sm-6">
        <h3>Politiques</h3>
        <ul className="footer-links">
          <li><a href="#.">Mentions légales</a></li>
          <li><a href="#.">CGU / CGV</a></li>
          <li><a href="#.">Gestion des données personnelles</a></li>
        </ul>
        <div className="clearfix"></div>
      </div>
      <div className="col-md-2 col-sm-6">
        <h3>Support</h3>
        <ul className="footer-links">
        <li><a href="#.">Nous contacter</a></li>
          <li><a href="#.">FAQ</a></li>
        </ul>
      </div>
    </div>
    {/* <div className="copyright">Copyright © 2017 Classify - All Rights Reserved.</div> */}
  </div>
</div>


      {/* <div className="landing-footer">
        <div className="landing-footer-img">
          <img src={Images.landingFooter} alt="profile" />
        </div>
        <div className="landing-footer-content text-center">
          <div className="text-center">
            <img
              src={Images.comma}
              alt="comma"
              className="landing-footer-comma"
            />
          </div>
          <div>
            <div className="landing-footer-detail">
              Je suis prêt à parier que Riskr va dans les prochaines années
              devenir un outil incontournable du chef d’entreprise de TPE/PME !{" "}
            </div>
            <div className="landing-footer-text">Martin Cregut | CEO PicMe</div>
          </div>
        </div>
      </div> */}

      {/* <div className="landing-bottom text-center">
            <div className="landing-bottom-copyright"> © Copyright 2015 Company Name. All rights reserved.</div>
      </div> */}
    </>
  );
};

export default Landing;
