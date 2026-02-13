import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Hero.css';

const roles = [
    'Software Engineer',
    'Web Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Full Stack Developer',
];

const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
        <section id="home" className="hero" ref={ref}>
            <div className="hero__bg-shapes">
                <div className="hero__shape hero__shape--1" />
                <div className="hero__shape hero__shape--2" />
                <div className="hero__shape hero__shape--3" />
            </div>

            <motion.div
                className="container hero__content"
                variants={stagger}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.div className="hero__text" variants={fadeUp}>
                    <motion.div className="hero__greeting" variants={fadeLeft}>
                        <span className="hero__wave">👋</span>
                        <span>Hello, I'm</span>
                    </motion.div>

                    <motion.h1 className="hero__name" variants={fadeUp}>
                        <span className="gradient-text">Kiran V</span>
                    </motion.h1>

                    <motion.div className="hero__role" variants={fadeUp}>
                        <span className="hero__role-prefix">I'm a </span>
                        <span className="hero__role-text">{displayText}</span>
                        <span className="hero__cursor">|</span>
                    </motion.div>

                    <motion.p className="hero__desc" variants={fadeUp}>
                        Motivated individual with a keen interest in Software Engineering, Web Development
                        and Artificial Intelligence. Eager to apply technical skills, learn new technologies,
                        and contribute to impactful real-world projects.
                    </motion.p>

                    <motion.div className="hero__location" variants={fadeUp}>
                        <FaMapMarkerAlt />
                        <span>Mallandahalli, Kolar, Karnataka, India</span>
                    </motion.div>

                    <motion.div className="hero__actions" variants={fadeUp}>
                        <a href="#contact" className="btn-primary">
                            Get In Touch
                        </a>
                        <a href="/Kiran_V.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">
                            Download CV 📄
                        </a>
                    </motion.div>

                    <motion.div className="hero__socials" variants={fadeUp}>
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
                    </motion.div>
                </motion.div>

                <motion.div className="hero__visual" variants={scaleIn}>
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
            </motion.div>

            <motion.div
                className="hero__scroll-indicator"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1, y: [0, 10, 0] } : {}}
                transition={{ opacity: { delay: 2, duration: 1 }, y: { duration: 2, repeat: Infinity, delay: 2 } }}
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
