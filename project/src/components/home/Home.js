import Logo from "../../images/homeLogo.png";
import "./Home.css";
import Player from "../player/Player";

const Home = () => {
    return ( 
        <div className="home-page" id="home">
            <div className="full_name">
                <p className="firstName">Olga</p> 
                <img src={Logo} alt="girl sitting at a desk" />
                <p className="last_name">Cortez</p>
            </div>
            <div className="port">
                <p className="portfolio">Portfolio</p>
            </div>
            <Player />
        </div>
     );
}
 
export default Home;