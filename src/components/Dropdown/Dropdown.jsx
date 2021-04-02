import React from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
  return (
    <>
      <select name="cars" id="cars" className="custom-dropdown" {...props}>
        {props.children}
      </select>
    </>
  );
};

export default Dropdown;
