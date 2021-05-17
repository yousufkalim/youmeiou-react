import React , {useEffect} from "react";
import "./Landing.css";

import { NavLink } from "react-router-dom";
import { Images } from "../../assets/Assets";
import Button from "../../components/Button/Button";
import { Row, Col, Carousel } from "react-bootstrap";
import LandingCard from "../../components/LandingCard/LandingCard";
import _ from "lodash";
import { setIn } from "immutable";
import { IoConstructOutline } from "react-icons/io5";

const cards = [
  {
    heading: "Découverte de votre contexte",
    detail:
      "Nous avons besoin de vous connaitre, vous, votre entreprise, votre marché, afin que notre IA Diana puisse vous apporter les meilleures réponses possibles",
    image: "landing_card1.png",
  },
  {
    heading: "Analyses de vos risques",
    detail:
      "Suite au diagnostic l’analyse de vos risques permettra d’établir une cartographie des risques et une liste des risques par niveau de criticité.",
    image: "landing_card2.png",
  },
  {
    heading: "Traitement des risques",
    detail:
      "Une fois vos risques diagnostiqués Vous programmez un entretien avec un de nos experts (call / visio) afin de valider le traitements des risques à effectuer.",
    image: "landing_card3.png",
  },
  {
    heading: "Gestions des actions",
    detail:
      "« Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
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
  },[])
  const test = () => {
    var data = [ {name: "apple", id: 2}, 
  {name: "dog",   id: 1}, 
  {name: "cat", id: "cat_2"}
]

const newObj = [
  {
  diagnosticId: 1,
  selectedResponse: "2",
  score: "3",
  riskId: "4",
},
{
  diagnosticId: 3,
  selectedResponse: "2",
  score: "3",
  riskId: "4",
},
{
  diagnosticId: 2,
  selectedResponse: "2",
  score: "3",
  riskId: "4",
}
]

// if(_.find(newObj, {diagnosticId: 2})) {
  for (var i in newObj) {
    if (newObj[i].diagnosticId === 3) {
      newObj[i].selectedResponse = "Found Value at 3";
      // console.log(newObj);
       break; //Stop this loop, we found it!
    }
  }
  console.log(newObj);
// }
// if(_.find(newObj, {diagnosticId: 2})) {
//   // console.log({id});
//   //console.log("helloo");
//   //int id = 2;
//   const indexVal = data.findIndex(listItem => {
//     // condition here
//     return listItem.id === 1;
//   });

//   // const new_data = data.setIn(['data', index], data)
//   console.log("index is ",index);
//   // console.log("new data ", new_data)
// }


  }

  return (
    <>
      <div className="landing">
        {/* Navbar */}
        <div className="landing-navbar-container">
          <img src={Images.logo} className="landing-logo" alt="logo" />
          <div className="landing-navbar">
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
            <Col md={6} sm={12} className="text-center">
              <img
                src={Images.landingHeader}
                alt="header"
                className="landing-header-img"
              />
            </Col>
            <Col md={6} className="landing-header-content">
              <div className="landing-heading">
                Votre meilleur allié pour identifier, analyser et mettre sous
                contrôle vos risques
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
          </Row>
        </div>

        {/* Card */}
        <div className="landing-cards-container">
          <div className="landing-content-heading">Notre méthodologie</div>
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
          <div className="text-center">
            <NavLink to="/diagnostic-list">
              <Button primary>C’est parti !</Button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="landing-slider">
        <Carousel>
          <Carousel.Item>
            <div className="landing-footer">
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="landing-footer">
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="landing-footer">
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
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Footer */}
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
