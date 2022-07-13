import React from "react";
import photo from "../images/Photo.JPG";
import EmailIcon from "../images/EmailIcon.svg";
import LinkedInIcon from "../images/LinkedInIcon.svg";

function Info() {
    return (
        <div className="info--container">
            <img className="info--img" src={photo} />
            <h1 className="info--fullname">Dorian Cottin</h1>
            <h4 className="info--job">Frontend Developer</h4>
            <a className="info--website" href="dcottin.com">dcottin.com</a>
            <div className="info--buttons">
                <a href="mailto:cottin.dotian@gmail.com"><img className="info--button_icon" src={EmailIcon} />Email</a>
                <a href="#"><img className="info--button_icon" src={LinkedInIcon} />LinkedIn</a>
            </div>
        </div>
    )
};

export default Info;