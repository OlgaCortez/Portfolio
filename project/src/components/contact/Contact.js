import Calendly from "../../images/Calendly.png";
import QRCode from "../../images/ocQRCode.png";
import LinkedIn from "../../images/LinkedIn.png";
import Twitter from "../../images/Twitter.png";
import Github from "../../images/Github.png";
import "./Contact.css";

const Contact = () => {
    return ( 
        <div className="contact-me" id="contact">
            <div className="firstPageHeader">
                <p className="contact">Contact</p>
                <p className="contact-the">The</p>
            </div>
            <div className="contact-dev">
                <p>Developer</p>
            </div>
            <div className="contact-links">
                <a a href="https://calendly.com/olgacortez/hire-me" target="_blank" rel="noopener noreferrer"><img src={Calendly} alt="Calendly Link" /></a>
                <a a href="https://www.linkedin.com/in/olga-cortez/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="Calendly Link" /></a>
                <a a href="https://twitter.com/OlgaCor42962609" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Calendly Link" /></a>
                <a a href="https://github.com/olgacortez" target="_blank" rel="noopener noreferrer"><img src={Github} alt="Calendly Link" /></a>
            </div>
            <div className="businessCardQR-1">
                <p>Digital Business Card</p>
            </div>
            <div className="businessCardQR-2">
                <p>Scan Me</p>
            </div>
            <div className="businessCardQR-img">
                <img src={QRCode} alt="Digital Business QR Code" />
            </div>
        </div>
     );
}
 
export default Contact;