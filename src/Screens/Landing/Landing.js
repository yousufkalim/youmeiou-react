import React, { useEffect, useState } from "react";
import "./Landing.css";
import { NavLink } from "react-router-dom";
import { Images } from "../../assets/Assets";
import Button from "../../components/Button/Button";
import { Row, Col, Carousel, Nav, NavDropdown, Navbar } from "react-bootstrap";
import LandingCard from "../../components/LandingCard/LandingCard";
import _ from "lodash";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Popup from "../../components/Popup/popup";
import CustomHeader from "../../components/CustomNavbar/CustomNavabar";
import LandingFooter from "../../components/Footer/Footer";
import {Link, animateScroll as Scroll} from "react-scroll";
// import { setIn } from "immutable";
// import { IoConstructOutline } from "react-icons/io5";

const WhyRiskrCards = [
  {
    heading: "Améliorez vos performances",
    image: "landing_card5.png",
  },
  {
    heading: "Bénéficiez d’un suivi personnalisé",
    image: "landing_card6.png",
  },
  {
    heading: "Mettez vos risques sous contrôle",
    image: "landing_card7.png",
  },
];
const cards = [
  {
    heading: "Découverte de votre contexte",
    detail: "Renseignez vos informations rapidement en toute simplicité.",
    image: "landing_card1.png",
  },
  {
    heading: "Analyses de vos risques",
    detail: "Des diagnostics pour révéler vos failles et vous améliorer.",
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
    detail: "Un suivi actif lors de la mise en place de votre plan d’action.",
    image: "landing_card3",
  },
];

const Landing = (props) => {
  const [show, setShow] = React.useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({ email: "" });
  const [isValid, setValidity] = React.useState(true);

  function handleOpenModal() {
    setShow(!show);
    console.log("handleOpenModal", show);
  }
  function fieldsValidation() {
    console.log("handleOpenModal", show);
  }

  const inputChange = (e) => {
    // checkValidity();
    // if ((e.target.name === "firstName" && e.target.value != "") &&
    // (e.target.name === "lastName" && e.target.value != "")){
    //   setValidity(false);
    // }
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "email") {
      var mailformat =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!e.target.value.match(mailformat)) {
        setError({ ...error, email: "Format d'email invalide" });
      } else {
        setError({ ...error, email: "" });
      }
    }
    console.log(data);
    //checkValidity();
  };
  const checkValidity = () => {
    // if(data.firstName !== "" && data.lastName !== ""){
    //   setValidity(false);
    // }else{
    //   setValidity(true);
    // }
  };
  useEffect(() => {
    test();
    return () => {
      console.log("back button outer");
      // && history.location.pathname === "any specific path")
      if (props.history.action === "POP") {
        console.log("back button");
        props.history.replace("/");
      }
    };
  }, []);
  const test = () => {
    var data = [
      { name: "apple", id: 2 },
      { name: "dog", id: "dog_1" },
      { name: "cat", id: "cat_2" },
    ];

    if (_.find(data, { id: 3 })) {
      // console.log({id});
      console.log("helloo");

      const index = data.findIndex((listItem) => {
        // condition here
        return listItem.id === 2;
      });
      console.log("index is ", index);
    }
  };

  return (
    <>
      {/* <div className="landing"> */}
      <div>
        {/* Navbar */}
        <CustomHeader isVisible={true}/>


        {/* Header */}
        <div className="landing-header">
          <Row className="top-content" style={{ alignItems: "center",marginTop: "5rem" }}>
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
                <Button tertiary>Essayez maintenant</Button>
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
        <div id ="whyRiskr" className="landing-cards-container">
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
              <Button tertiary>C’est parti !</Button>
            </NavLink>
          </div>
        </div>
        {/* Why trust us card */}
        <div
          className="text-center"
          style={{ backgroundImage: "linear-gradient(#EDEDED,white)" }}
        >
          <div className="landing-content-heading-blue">
            Ils nous font confiance
          </div>
          <div
            className="they-trust-us-card"
          >
            <div className="landing-trust-img-parent">
              <img
                className="landing-trust-1"
                src={Images.landingCard8}
                alt="card"
              />
            </div>
            <div className="landing-trust-img-parent">
              <img
                className="landing-trust-1"
                src={Images.landingCard9}
                alt="card"
              />
            </div>
            <div className="landing-trust-img-parent">
              <img
                className="landing-trust-1"
                src={Images.landingCard10}
                alt="card"
              />
            </div>
            <div className="landing-trust-img-parent">
              <img
                className="landing-trust-1"
                src={Images.landingCard11}
                alt="card"
              />
            </div>
            <div className="landing-trust-img-parent">
              <img
                className="landing-trust-1"
                src={Images.landingCard12}
                alt="card"
              />
            </div>
          </div>
          {/* <div className="landing-content-footer">Les logos défilent*</div> */}
        </div>
        {/* Card */}
        <div id="howItWorks" className="landing-cards-container">
          <div className="landing-content-heading"><strong>Comment ça marche ?</strong></div>
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
        </div>
      </div>

      {/* <div className="landing-slider" >
        <Carousel>
          <Carousel.Item>
            <div className="landing-content-heading">
              Que pensent nos clients ?
            </div>
            <div className="carousel-style">
              <div className="owner-card">
                <Card
                  style={{
                    borderRadius: "3.5rem",
                    overflow: "hidden",
                    width: "100%",
                    float: "left",
                    background: "#F8F8F8",
                    padding: "0 3rem",
                  }}
                >
                  <img
                    className="landing-trust-1"
                    src={Images.ceo_Martin_Cregut}
                    alt="card"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "3rem",
                      display: "block",
                    }}
                  />
                  <div className="ceo-card-footer">
                    Martin Cregut | CEO PicMe
                  </div>
                </Card>
              </div>
              <div className="owner-card">
                <Card
                  style={{
                    borderRadius: "3.5rem",
                    overflow: "hidden",
                    float: "left",
                    width: "100%",
                    background: "#F8F8F8",
                    padding: "0 3rem",
                  }}
                >
                  <img
                    className="landing-trust-1"
                    src={Images.ceo_Julian_Amar}
                    alt="card"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "3rem",
                      display: "block",
                    }}
                  />
                  <div className="ceo-card-footer">Julian Amar | CEO PicMe</div>
                </Card>
              </div>
              <div className="owner-card">
                <Card
                  style={{
                    borderRadius: "3.5rem",
                    overflow: "hidden",
                    float: "left",
                    width: "100%",
                    background: "#F8F8F8",
                    padding: "0 3rem",
                  }}
                >
                  <img
                    className="landing-trust-1"
                    src={Images.ceo_Martin_Cregut_3}
                    alt="card"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "3rem",
                      display: "block",
                    }}
                  />
                  <div className="ceo-card-footer">
                    Martin Cregut | CEO PicMe
                  </div>
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="landing-content-heading">
              Que pensent nos clients ?
            </div>
            <div className="carousel-style">
              <div className="owner-card">
                <Card
                  style={{
                    borderRadius: "3.5rem",
                    overflow: "hidden",
                    width: "100%",
                    float: "left",
                    background: "#F8F8F8",
                    padding: "0 3rem",
                  }}
                >
                  <img
                    className="landing-trust-1"
                    src={Images.ceo_Martin_Cregut}
                    alt="card"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "3rem",
                      display: "block",
                    }}
                  />
                  <div className="ceo-card-footer">
                    Martin Cregut | CEO PicMe
                  </div>
                </Card>
              </div>
              <div className="owner-card">
                <Card
                  style={{
                    borderRadius: "3.5rem",
                    overflow: "hidden",
                    float: "left",
                    width: "100%",
                    background: "#F8F8F8",
                    padding: "0 3rem",
                  }}
                >
                  <img
                    className="landing-trust-1"
                    src={Images.ceo_Julian_Amar}
                    alt="card"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "3rem",
                      display: "block",
                    }}
                  />
                  <div className="ceo-card-footer">Julian Amar | CEO PicMe</div>
                </Card>
              </div>
              <div className="owner-card">
                <Card
                  style={{
                    borderRadius: "3.5rem",
                    overflow: "hidden",
                    float: "left",
                    width: "100%",
                    background: "#F8F8F8",
                    padding: "0 3rem",
                  }}
                >
                  <img
                    className="landing-trust-1"
                    src={Images.ceo_Martin_Cregut_3}
                    alt="card"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "3rem",
                      display: "block",
                    }}
                  />
                  <div className="ceo-card-footer">
                    Martin Cregut | CEO PicMe
                  </div>
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="landing-content-heading">
              Que pensent nos clients ?
            </div>
            <div className="carousel-style">
              <div className="owner-card">
                <Card
                  style={{
                    borderRadius: "3.5rem",
                    overflow: "hidden",
                    width: "100%",
                    float: "left",
                    background: "#F8F8F8",
                    padding: "0 3rem",
                  }}
                >
                  <img
                    className="landing-trust-1"
                    src={Images.ceo_Martin_Cregut}
                    alt="card"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "3rem",
                      display: "block",
                    }}
                  />
                  <div className="ceo-card-footer">
                    Martin Cregut | CEO PicMe
                  </div>
                </Card>
              </div>
              <div className="owner-card">
                <Card
                  style={{
                    borderRadius: "3.5rem",
                    overflow: "hidden",
                    float: "left",
                    width: "100%",
                    background: "#F8F8F8",
                    padding: "0 3rem",
                  }}
                >
                  <img
                    className="landing-trust-1"
                    src={Images.ceo_Julian_Amar}
                    alt="card"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "3rem",
                      display: "block",
                    }}
                  />
                  <div className="ceo-card-footer">Julian Amar | CEO PicMe</div>
                </Card>
              </div>
              <div className="owner-card">
                <Card
                  style={{
                    borderRadius: "3.5rem",
                    overflow: "hidden",
                    float: "left",
                    width: "100%",
                    background: "#F8F8F8",
                    padding: "0 3rem",
                  }}
                >
                  <img
                    className="landing-trust-1"
                    src={Images.ceo_Martin_Cregut_3}
                    alt="card"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "3rem",
                      display: "block",
                    }}
                  />
                  <div className="ceo-card-footer">
                    Martin Cregut | CEO PicMe
                  </div>
                </Card>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="text-center">
          <NavLink to="/diagnostic-list">
            <Button style={{ marginTop: "10rem" }} tertiary>
              Essayez maintenant
            </Button>
          </NavLink>
        </div>
      </div> */}

      {/* Footer */}
      <LandingFooter handleOpenModal={handleOpenModal}/>


      <Popup fullscreen={true} show={show} setShow={setShow} handleClose={handleOpenModal} data={data} error={error}>
        <Input
          type="text"
          placeholder="Prénom *"
          // value={data.email}
          onChange={inputChange}
          name="lastName"
        />
        <Input
          type="text"
          placeholder="Nom *"
          // value={data.email}
          onChange={inputChange}
          name="firstName"
        />
        <Input
          type="text"
          placeholder="Adresse e-mail *"
          onChange={inputChange}
          name="email"
        />
        {error.email && <div className="custom-error">{error.email}</div>}
        <Input
          type="text"
          placeholder="Nom de l'entreprise"
          onChange={inputChange}
          name="NameOfEntreprise"
        />
        <Input
          type="text"
          placeholder="Numéro SIREN"
          onChange={inputChange}
          name="SirenNumber"
        />
        <Input
          type="text"
          placeholder="Message *"
          onChange={inputChange}
          name="message"
        />

      </Popup>
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
