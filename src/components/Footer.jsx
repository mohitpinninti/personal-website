import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    return (
        <div className="footer">
            <p>Designed in Figma, built with React.js, and deployed with Vercel.</p>
            <div className="footer-links">
                <a href="https://github.com/mohitpinninti/"><FontAwesomeIcon icon={faGithub} size="2x" color="#aba2c7"/></a>
                <a href="https://www.instagram.com/mohitpinninti/"><FontAwesomeIcon icon={faInstagram} size="2x" color="#aba2c7"/></a>
                <a href="https://www.linkedin.com/in/mohit-pinninti/"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#aba2c7"/></a>
            </div>
        </div>
    );
}

export default Footer;