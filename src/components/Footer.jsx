import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer__gradient-line" />
            <div className="container footer__content">
                <div className="footer__left">
                    <a href="#home" className="footer__logo">
                        <span className="footer__logo-bracket">&lt;</span>
                        <span className="footer__logo-name">Kiran V</span>
                        <span className="footer__logo-bracket"> /&gt;</span>
                    </a>
                    <p className="footer__tagline">
                        Building the future, one line of code at a time.
                    </p>
                </div>

                <div className="footer__links">
                    <h4 className="footer__heading">Quick Links</h4>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer__social">
                    <h4 className="footer__heading">Connect</h4>
                    <div className="footer__social-links">
                        <a href="https://github.com/Kiranv2004" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/kiran-v-4b1384281" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:kiranv20042@gmail.com">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <motion.button
                    className="footer__scroll-top"
                    onClick={scrollToTop}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowUp />
                </motion.button>
            </div>

            <div className="footer__bottom">
                <p>
                    © 2025 Kiran V. Made with <FaHeart className="footer__heart" /> in India
                </p>
            </div>
        </footer>
    );
};

export default Footer;
