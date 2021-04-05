import React from 'react';
import "./Box.css";

const Box = (props) => {
    console.log(props.score);
    return (
        <div className="custom-box" {...props}>
            {
                props.score === props.num && (
                    <div className="box-circle"></div>
                )
            }
            {props.num}
        </div>
    )
}

export default Box
