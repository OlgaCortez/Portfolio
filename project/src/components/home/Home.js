import Logo from "../../images/homeLogo.png";
import "./Home.css";

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
            {/* <div className="scroll">
                <p>Scroll</p>
            </div> */}
            <div>
            </div>
        </div>
     );
}
 
export default Home;