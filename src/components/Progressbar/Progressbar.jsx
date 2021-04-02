import React from 'react';
import "./Progressbar.css";

import {ProgressBar} from "react-bootstrap";


const Progressbar = (props) => {
    return (
        <>
            <ProgressBar now={props.now} className="custom-progressbar" />
        </>
    )
}

export default Progressbar
