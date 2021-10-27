import "./Projects.css";
import Circle from "../../images/Project_Circle.png";
import Weather from "../../images/weather.png";
import Chat from "../../images/chat.png";
import Cities from "../../images/cities.png";

const Projects = () => {
    return ( 
        <div className="project-page" id="project">
            <div className="firstLine">
                <p className="projects">Projects</p>
                <p className="of">Of</p>
                <p className="proj-the">The</p>
            </div>
            <div className="lastLine">
                <p>Developer</p>
            </div>
            <div className="project-images">
                <a href="https://oc-weather-app.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={Weather} alt="Weather Icon" /></a>
                <a href="https://oc-react-chat-app.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={Chat} alt="Chat Icon" /></a>
                <a href="https://olgacortez.github.io/parallax-website/" target="_blank" rel="noopener noreferrer"><img src={Cities} alt="City Icon" /></a>
                <img src={Circle} alt="half circle" />
            </div>
            <div className="project-names">
                <p>React Weather App</p>
                <p>React Chat App</p>
                <p>Parallax Scroll App</p>
                <p>Coming Soon!</p>
            </div>
        </div>
     );
}
 
export default Projects;