import React from 'react';
import "./Heading.css";

const Heading = (props) => {
    return (
        <>
            <div className="screen-heading">{props.children}</div>
        </>
    )
}

export default Heading
