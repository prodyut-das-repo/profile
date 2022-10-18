import './../style/footer.scss'
import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoLogoTwitter } from "react-icons/io5";

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <a href="#"><IoLogoFacebook/></a>
                    <a href="#"><IoLogoLinkedin/></a>
                    <a href="#"><IoLogoInstagram/></a>
                    <a href="#"><IoLogoGithub/></a>
                    <a href="#"><IoLogoTwitter/></a>
                </div>
                <hr></hr>
                <div className="row">
                    Copyright © 2022 - All rights reserved | Designed By: Prodyut |
                        <a className='credit' href="https://www.freepik.com/free-vector/software-development-programming-coding-learning-information-technology-courses-it-courses-all-levels-computing-hi-tech-course-concept_10780254.htm#query=it&position=0&from_view=search&track=sph">Image by vectorjuice</a> on Freepik
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        </footer>
    )
}
