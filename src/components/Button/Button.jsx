import React from "react";
import "./Button.css";
import classnames from "classnames";

const Button = (props) => {
 
  return (
    <>
      <button
        className={props.disabled ? "button-disabled" : classnames(`button-component + ${props.className} `)}
        {...props}
        disabled={props.disabled}
        style={
          props.primary
            ? { background: "#012340" }
            : props.secondary ? { background: "#EFD242", color: "#012340" }
            :
            {backgroundColor: "#EFD242",color: "#012340", width: "100%", padding: "1.4rem" }
        }
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
