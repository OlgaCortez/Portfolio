import Logo from "../../images/homeLogo.png";
import "./Home.css";

const Home = () => {
    return ( 
        <div className="home-page">
            <div className="full_name">
                <p className="firstName typewriter">Olga</p> 
                <img src={Logo} alt="girl sitting at a desk" />
                <p className="last_name typewriter">Cortez</p>
            </div>
            <div className="port">
                <p className="portfolio typewriter">Portfolio</p>
            </div>
            <div className="scroll">
                <p>Scroll</p>
            </div>
        </div>
     );
}
 
export default Home;