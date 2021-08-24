import "./Projects.css";
import Circle from "../../images/Project_Circle.png";
import Girl from "../../images/Girl.png";
import Crypto from "../../images/Crypto.png";

const Projects = () => {
    return ( 
        <div className="project-page">
            <div className="firstLine">
                <p className="projects">Projects</p>
                <p className="of">Of</p>
                <p className="proj-the">The</p>
            </div>
            <div className="lastLine">
                <p>Developer</p>
            </div>
            <div className="project-images">
                <a href="https://olgacortez.github.io/glassmorphism-practice.github.io/" target="_blank" rel="noopener noreferrer"><img src={Girl} alt="Animated Girl" /></a>
                <a href="https://cryptotracker-dark-mode.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={Crypto} alt="Crypto Pic" /></a>
                <img src={Circle} alt="half circle" />
                <img src={Circle} alt="half circle" />
            </div>
        </div>
     );
}
 
export default Projects;