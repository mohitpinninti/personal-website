import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import useFirestoreCollection from "../hooks/useFirestoreCollection";

const iconMap = {
  faEnvelope,
  faGithub,
  faInstagram,
  faLinkedin,
};

const Footer = () => {
    const { data: socialLinks, loading, error } = useFirestoreCollection("socialLinks", "order");

    if (loading) {
        return (
            <div className="footer">
                <p>Designed in Figma, built with React.js, and deployed with Vercel.</p>
            </div>
        );
    }

    if (error) {
        console.error("[Footer] Failed to load social links:", error);
    }

    return (
        <div className="footer">
            <p>Designed in Figma, built with React.js, and deployed with Vercel.</p>
            <div className="footer-links">
                {socialLinks.map((link) => (
                    <a key={link.id} href={link.url}>
                        <FontAwesomeIcon
                            className="footer-link"
                            icon={iconMap[link.icon]}
                            size="2x"
                            color="#aba2c7"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Footer;