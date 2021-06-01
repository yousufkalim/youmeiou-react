import React from "react";
import "./ColorPickerTwo.css";
import { Row, Col } from "react-bootstrap";
// import reactCSS from "reactcss";
import Button from "../Button/Button";
import { SketchPicker } from "react-color";
import { Images } from "../../assets/Assets";
import moment from "moment";
import { Modal, Popover } from "react-bootstrap";

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: true,
    bgColor: "",
  };
  componentDidMount() {
    // console.log(this.props);
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  getProbability = () => {};

  render() {
    const value = this.props.gravity * this.props.probability;
    //const value = 25;
    const prob = (value / 25) * 90 + 4;
    const val = Math.round(prob);
    // const val = 20;
    // console.log(val);
    // const val = 100 - prob;
    // console.log("hskdkdnk",prob);
    // console.log(this.props);
    // const styles = reactCSS({
    //   default: {
    //     color: {
    //       width: "30%",
    //       height: "35px",
    //       padding: "5px",
    //       borderRadius: "2px",
    //       background: `${this.props.color}`,
    //     },
    //     swatch: {
    //       background: "#fff",
    //       borderRadius: "1px",
    //       border: "1px solid rgb(133, 133, 133)",
    //       padding: "5px",
    //       cursor: "pointer",
    //       width: "100%",
    //       height: "45px",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //     },
    //     popover: {
    //       position: "absolute",
    //       zIndex: "2",
    //     },
    //     cover: {
    //       position: "fixed",
    //       top: "0px",
    //       right: "0px",
    //       bottom: "0px",
    //       left: "0px",
    //     },
    //   },
    // });

    return (
      <>
        <Row>
          <Col
            md={6}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <div className="step-four-color-image-2">
              <img
                src={Images.ColorPalette}
                alt="color"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="step-four-color-line-container"
              style={{ bottom: `${val}%` }}
            >
              <div className="step-four-color-line-content">
                {/* <img src={Images.search} alt="color" /> */}
                <div className="step-four-color-dot" ></div>

                <Popover
                  className="mapping-popover"
                  id="popover-positioned-top"
                >
                  <Popover.Title className="mapping-popover-title" as="h3">
                    {/* {item.name} */}
                    Criticite
                  </Popover.Title>
                  <Popover.Content>
                    {this.props.criticity}
                  </Popover.Content>
                  <Popover.Title className="mapping-popover-title" as="h3">
                    Gravitie
                  </Popover.Title>
                  <Popover.Content>
                    {this.props.gravity}
                  </Popover.Content>
                  <Popover.Title className="mapping-popover-title" as="h3">
                    Probabilitie
                  </Popover.Title>
                  <Popover.Content>
                    {this.props.probability}
                  </Popover.Content>
                </Popover>

              </div>
            </div>
          </Col>
          <Col md={6} style={{ paddingTop: "10rem" }}>
            <Row>
              <Col md={3}>
                <img
                  src={Images.metro_rainy}
                  alt="color"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col md={9}>
                <div className="color-palatte-text">
                  Votre criticité est élevée, la probabilité et la gravité du
                  risque sont élevées : mettez vous à l'abri au plus vite !
                </div>
              </Col>
            </Row>
            <Row style={{ margin: "8rem 0" }}>
              <Col md={3}>
                <img
                  src={Images.cloud_outline}
                  alt="color"
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
              <Col md={9}>
                <div className="color-palatte-text">
                  Votre criticité est modérée, la probabilité et la gravité du
                  risque sont moyennes : agissez avant que cela n’empire.
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: "10rem" }}>
              <Col md={3}>
                <img
                  src={Images.metro_sun}
                  alt="color"
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
              <Col md={9}>
                <div className="color-palatte-text">
                  Votre criticité est basse, votre probabilité et la gravité de
                  votre risque sont mineures optimisez vos résultats !
                </div>
              </Col>
              <Col className="step-four-card-btn text-center mt-5 pt-4">
                <Button secondary onClick={() => this.props.changeStepper(90)}>
                  Traitement du risque
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* //   <div style={{ width: "100%", height:"100%", position: "relative" }}> */}
        {/* <SketchPicker
    //       color={this.props.color}
    //       onChangeComplete={this.props.handleChange}
    //     /> */}

        {/* //     <div className="step-four-color-image">
    //       <img  src={Images.ColorPalette} alt="color"  />
    //     </div> */}

        {/* <div className="step-four-color-line-container" style={{bottom: `${val}%`}}>
            <div className="step-four-color-line-content">
            <img src={Images.search} alt="color" />
            <div className="step-four-color-line"></div>
            </div>
          </div>  */}
      </>
      // {/* //   </div> */}
    );
  }
}

export default ColorPicker;
