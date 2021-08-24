import Desktop from "../../images/Screen.png";
import Girl from "../../images/About.png";
import Collage from "../../images/Interest_Tag.png";
import "./About.css";

const About = () => {
    return ( 
        <div className="about-me">
            <div className="about-title">
                <p className="about">About</p>
                <p className="the">The</p>
            </div>
            <div className="about-title-2">
                <p className="dev">Developer</p>
            </div>
            <div className="about-pics">
                <img src={Desktop} alt="Desktop Screen" />
                <img src={Girl} alt="Girl typing on Laptop" />
                <img src={Collage} alt="Collage of the dev's interest" /> 
            </div>
        </div>
     );
}
 
export default About;