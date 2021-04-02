import React from 'react';
import "./Stepper.css";

import {ProgressBar} from "react-bootstrap";


const Stepper = (props) => {
    return (
        <>
            <ProgressBar now={props.now} className="custom-Stepper" />
        </>
    )
}

export default Stepper
