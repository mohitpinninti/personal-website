import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {

    return (
        <div className="footer">
            <p>Designed in Figma, built with React.js, and deployed with Vercel.</p>
            <div className="footer-links">
                <a href="mailto:pinnintimohit@gmail.com"><FontAwesomeIcon className="footer-link" icon={faEnvelope} size="2x" color="#aba2c7"/></a>
                <a href="https://github.com/mohitpinninti/"><FontAwesomeIcon className="footer-link" icon={faGithub} size="2x" color="#aba2c7"/></a>
                <a href="https://www.instagram.com/mohitpinninti/"><FontAwesomeIcon className="footer-link" icon={faInstagram} size="2x" color="#aba2c7"/></a>
                <a href="https://www.linkedin.com/in/mohit-pinninti/"><FontAwesomeIcon className="footer-link" icon={faLinkedin} size="2x" color="#aba2c7"/></a>
            </div>
        </div>
    );
}

export default Footer;