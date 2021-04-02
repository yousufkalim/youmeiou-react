import React from 'react';
import "./Box.css";

const Box = (props) => {
    return (
        <div className="custom-box" {...props}>
            {props.num}
        </div>
    )
}

export default Box
