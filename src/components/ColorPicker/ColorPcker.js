import React from "react";
import "./ColorPicker.css";

// import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { Images } from "../../assets/Assets";

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: true,
    bgColor: "",
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  render() {
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
      <div style={{ width: "100%", position: "relative" }}>
        <SketchPicker
          color={this.props.color}
          onChangeComplete={this.props.handleChange}
        />
        <div>
          <div className="step-four-color-line-container">
            <img src={Images.search} alt="color" />
            <div className="step-four-color-line"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
