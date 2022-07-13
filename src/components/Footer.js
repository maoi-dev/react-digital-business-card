import React from "react";
import TwitterIcon from "../images/TwitterIcon.svg";
import FacebookIcon from "../images/FacebookIcon.svg";
import InstagramIcon from "../images/InstagramIcon.svg";
import GitHubIcon from "../images/GitHubIcon.svg";

function Footer() {
    return (
        <footer>
            <ul className="footer--icons">
                <li>
                    <a href="twitter.com">
                        <img className="footer--icon" src={TwitterIcon} />
                    </a>
                </li>
                <li>
                    <a href="facebook.com">
                        <img className="footer--icon" src={FacebookIcon} />
                    </a>
                </li>
                <li>
                    <a href="instagram.com">
                        <img className="footer--icon" src={InstagramIcon} />
                    </a>
                </li>
                <li>
                    <a href="github.com">
                        <img className="footer--icon" src={GitHubIcon} />
                    </a>
                </li>
            </ul>
        </footer>
    )
};

export default Footer;