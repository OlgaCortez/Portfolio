import "./Projects.css";
import Circle from "../../images/Project_Circle.png";
import Girl from "../../images/Girl.png";
import Chat from "../../images/chatApp.png";

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
                <a href="https://olgacortez.github.io/glassmorphism-practice.github.io/" target="_blank" rel="noopener noreferrer"><img src={Girl} alt="Animated Girl" /></a>
                <a href="https://oc-react-chat-app.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={Chat} alt="Chat App" /></a>
                <img src={Circle} alt="half circle" />
                <img src={Circle} alt="half circle" />
            </div>
            <div className="project-names">
                <p>Mock Portfolio</p>
                <p>Chat App</p>
                <p>Coming Soon!</p>
                <p>Coming Soon!</p>
            </div>
        </div>
     );
}
 
export default Projects;