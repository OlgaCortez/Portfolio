import "./NavBar.css";
import {Link} from "react-scroll";

const NavBar = () => {
    return ( 
        <div className="navBar">
            <ul>
                <li><Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >Home</Link></li>

                <li><Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >About</Link></li>

                <li><Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >Skills</Link></li>

                <li><Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >Projects</Link></li>

                <li><Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >Contact</Link></li>
            </ul>
        </div>
     );
}
 
export default NavBar;