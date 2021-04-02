import React from 'react';
import "./Card.css";
import classnames from "classnames";

// style={props.border ? {borderRadius: "3.5rem"} : props.nopadding && {padding: '0'}}
const Card = (props) => {
    const {heading} = props;
    return (
        <div {...props} className={classnames(`${props.className} custom-card`)}>
            {
                heading && (
                    <div className="card-heading mb-4">{heading}</div>
                )
            }
            {props.children}
        </div>
    )
}

export default Card
