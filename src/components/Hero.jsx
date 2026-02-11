import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import './Hero.css';

const roles = [
    'Software Engineer',
    'Web Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Full Stack Developer',
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(() => {
                setDisplayText(
                    isDeleting
                        ? currentRole.substring(0, displayText.length - 1)
                        : currentRole.substring(0, displayText.length + 1)
                );
            }, isDeleting ? 40 : 80);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="home" className="hero">
            <div className="hero__bg-shapes">
                <div className="hero__shape hero__shape--1" />
                <div className="hero__shape hero__shape--2" />
                <div className="hero__shape hero__shape--3" />
            </div>

            <div className="container hero__content">
                <motion.div
                    className="hero__text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="hero__greeting"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <span className="hero__wave">👋</span>
                        <span>Hello, I'm</span>
                    </motion.div>

                    <h1 className="hero__name">
                        <span className="gradient-text">Kiran V</span>
                    </h1>

                    <div className="hero__role">
                        <span className="hero__role-prefix">I'm a </span>
                        <span className="hero__role-text">{displayText}</span>
                        <span className="hero__cursor">|</span>
                    </div>

                    <p className="hero__desc">
                        Motivated individual with a keen interest in Software Engineering, Web Development
                        and Artificial Intelligence. Eager to apply technical skills, learn new technologies,
                        and contribute to impactful real-world projects.
                    </p>

                    <div className="hero__location">
                        <FaMapMarkerAlt />
                        <span>Mallandahalli, Kolar, Karnataka, India</span>
                    </div>

                    <div className="hero__actions">
                        <a href="#contact" className="btn-primary">
                            Get In Touch
                        </a>
                        <a href="#projects" className="btn-outline">
                            View Projects
                        </a>
                    </div>

                    <div className="hero__socials">
                        <motion.a
                            href="https://github.com/Kiranv2004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero__social-link"
                            whileHover={{ y: -4, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/kiran-v-4b1384281"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero__social-link"
                            whileHover={{ y: -4, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="mailto:kiranv20042@gmail.com"
                            className="hero__social-link"
                            whileHover={{ y: -4, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaEnvelope />
                        </motion.a>
                        <motion.a
                            href="tel:+919110655575"
                            className="hero__social-link"
                            whileHover={{ y: -4, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPhone />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="hero__avatar-ring">
                        <div className="hero__avatar-glow" />
                        <div className="hero__avatar">
                            <img src="/profile.jpg" alt="Kiran V" className="hero__avatar-img" />
                        </div>
                    </div>
                    <div className="hero__floating-badges">
                        <motion.div
                            className="hero__badge hero__badge--1"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            🐍 Python
                        </motion.div>
                        <motion.div
                            className="hero__badge hero__badge--2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity }}
                        >
                            ☕ Java
                        </motion.div>
                        <motion.div
                            className="hero__badge hero__badge--3"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            🤖 AI/ML
                        </motion.div>
                        <motion.div
                            className="hero__badge hero__badge--4"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 3.2, repeat: Infinity }}
                        >
                            🌐 Web Dev
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="hero__scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel" />
                </div>
                <span>Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
