import './../style/footer.scss'
import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import Tooltip from './Tooltip';

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="row icons">
                    <a href="#"><IoLogoFacebook/></a>
                    <a href="#"><IoLogoLinkedin/></a>
                    <a href="#"><IoLogoInstagram/></a>
                    <a href="#"><IoLogoGithub/></a>
                    <a href="#"><IoLogoTwitter/></a>
                </div>
                <hr></hr>
                <div className="row">
                    Copyright © 2022 - All rights reserved | Designed By: Prodyut Das | <Tooltip/>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        </footer>
    )
}
