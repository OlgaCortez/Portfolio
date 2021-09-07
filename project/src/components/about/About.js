import Girl from "../../images/About.png";
import Collage from "../../images/Interest_Tag.png";
import DesktopVid from "../../images/about-vid.mp4"
import "./About.css";

const About = () => {
    return ( 
        <div className="about-me" id="about">
            <div className="about-title">
                <p className="about">About</p>
                <p className="the">The</p>
            </div>
            <div className="about-title-2">
                <p className="dev">Developer</p>
            </div>
            <div className="about-pics">
                <video autoPlay loop muted id="video">
                    <source src={DesktopVid} type="video/mp4" />
                </video>
                <img src={Girl} alt="Girl typing on Laptop" />
                <img src={Collage} alt="Collage of the dev's interest" /> 
            </div>
        </div>
     );
}
 
export default About;