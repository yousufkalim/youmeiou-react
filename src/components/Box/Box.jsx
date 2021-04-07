import React from 'react';
import "./Box.css";

const Box = (props) => {
    console.log(props);
    const score = parseInt(props.score)
    return (
        <div className="custom-box" {...props}>
            {
                score === props.num (
                    <div className="box-circle"></div>
                )
            }
            {props.num}
        </div>
    )
}

export default Box
