import "./Skills.css";
import techSkills from "../../images/techSkills.png";
import softSkills from "../../images/softSkills.png";
import midSkill from "../../images/Skills_Pic.png";


const Skills = () => {
    return ( 
        <div className="skills-page">
            <div className="dev-skill">
                <p>Developer</p>
            </div>
            <div className="skill">
                <p>Skills</p>
            </div>
            <div className="skill-images">
                <img src={techSkills} alt="array of tech skills" />
                <img src={midSkill} alt="drawing" />
                <img src={softSkills} alt="array of soft skills" />
            </div>
        </div>
     );
}
 
export default Skills;