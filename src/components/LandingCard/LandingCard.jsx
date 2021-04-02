import React from 'react';
import "./LandingCard.css";

import {Images} from "../../assets/Assets";

const LandingCard = (props) => {
    const {heading, detail,image} = props;
    return (
        <div className="landing-card">
            {
                image === "1" ? 
                <img src={Images.landingCard1} alt="card" />
                : 
                image === "2" ?
                <img src={Images.landingCard2} alt="card" />
                :
                image === "3" ?
                <img src={Images.landingCard3} alt="card" />
                : 
                image === "4" && 
                <img src={Images.landingCard3} alt="card" />
            }
            <div className="landing-card-content">
            <div className="landing-card-heading">{heading}</div>
            <div className="landing-card-detail">{detail}</div>
            </div>
        </div>
    )
}

export default LandingCard
