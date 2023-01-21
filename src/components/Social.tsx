import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import './../style/footer.scss';
import './../style/social.scss';
export default function Social() {
    return (
            <div className="footer no-color">
                <div className="row icons">
                    <a href="#"><IoLogoFacebook/></a>
                    <a href="#"><IoLogoLinkedin/></a>
                    <a href="#"><IoLogoInstagram/></a>
                    <a href="#"><IoLogoGithub/></a>
                    <a href="#"><IoLogoTwitter/></a>
                </div>
            </div>

    )
}
