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
                image === "4" ?
                <img src={Images.landingCard4} alt="card" />
                : 
                image === "5" ?
                <img src={Images.landingCard5} alt="card" />
                : 
                image === "6" ?
                <img src={Images.landingCard6} alt="card" />
                : 
                image === "7" ? 
                <img src={Images.landingCard7} alt="card" />
                : 
                image === "8" ?
                <img src={Images.landingCard8} alt="card" />
                : 
                image === "9" ?
                <img src={Images.landingCard9} alt="card" />
                : 
                image === "10" ?
                <img src={Images.landingCard10} alt="card" />
                : 
                image === "11" ?
                <img src={Images.landingCard11} alt="card" />
                : 
                image === "12" && 
                <img src={Images.landingCard12} alt="card" />
                
            }
            <div className="landing-card-content">
            <div className="landing-card-heading">{heading}</div>
            <div className="landing-card-detail">{detail}</div>
            </div>
        </div>
    )
}

export default LandingCard
