import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaProjectDiagram, FaCode, FaBriefcase, FaCertificate } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './About.css';

const stats = [
    { icon: <FaProjectDiagram />, value: '5+', label: 'Projects', color: '#00d4ff', bg: 'rgba(0, 212, 255, 0.08)' },
    { icon: <FaCode />, value: '5+', label: 'Languages', color: '#7b2ff7', bg: 'rgba(123, 47, 247, 0.08)' },
    { icon: <FaBriefcase />, value: '2', label: 'Internships', color: '#ff6b35', bg: 'rgba(255, 107, 53, 0.08)' },
    { icon: <FaCertificate />, value: '6', label: 'Certifications', color: '#00e676', bg: 'rgba(0, 230, 118, 0.08)' },
];

const StatCard3D = ({ stat, index, inView }) => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        const glowX = (x / rect.width) * 100;
        const glowY = (y / rect.height) * 100;
        setTilt({ rotateX, rotateY, glowX, glowY });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
    }, []);

    return (
        <motion.div
            ref={cardRef}
            className="about__stat"
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={inView ? {
                opacity: 1,
                y: [0, -6, 0],
                rotateX: 0,
            } : {}}
            transition={{
                opacity: { duration: 0.7, delay: 0.3 + index * 0.15 },
                rotateX: { duration: 0.7, delay: 0.3 + index * 0.15 },
                y: { duration: 3 + index * 0.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 + index * 0.3 },
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                '--stat-color': stat.color,
                '--stat-bg': stat.bg,
                '--glow-x': `${tilt.glowX}%`,
                '--glow-y': `${tilt.glowY}%`,
                transform: `perspective(600px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
        >
            <div className="about__stat-spotlight" />
            <motion.div
                className="about__stat-icon"
                animate={inView ? {
                    scale: [1, 1.15, 1],
                    rotate: [0, -5, 5, 0],
                } : {}}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.4,
                }}
            >
                {stat.icon}
            </motion.div>
            <motion.div
                className="about__stat-value"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15, type: 'spring', stiffness: 200 }}
            >
                {stat.value}
            </motion.div>
            <div className="about__stat-label">{stat.label}</div>
            <div className="about__stat-glow" />
            <div className="about__stat-border-glow" />
        </motion.div>
    );
};

const About = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <SectionWrapper id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Get to know me</span>
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className="about__content" ref={ref}>
                    <motion.div
                        className="about__text glass-card"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h3 className="about__heading">
                            A passionate <span className="gradient-text">Computer Science</span> student
                        </h3>
                        <p>
                            I'm <strong>Kiran V</strong>, currently pursuing my Bachelor's in Computer Science and Engineering
                            at Sri Venkateshwara College of Engineering, Bengaluru with a CGPA of <strong>8.62</strong>.
                        </p>
                        <p>
                            I'm motivated by the intersection of software engineering, web development, and artificial intelligence.
                            I love building real-world solutions — from face recognition attendance systems to blockchain-based
                            voting platforms. When I'm not coding, you'll find me experimenting with AI models, reading books,
                            playing cricket, or spending time on my family farm.
                        </p>
                        <p>
                            I believe in continuous learning and have completed certifications from <strong>Google</strong>,
                            <strong> IBM</strong>, <strong>Infosys</strong>, and more. I'm eager to contribute to impactful
                            projects and grow as a software engineer.
                        </p>
                    </motion.div>

                    <div className="about__stats">
                        {stats.map((stat, i) => (
                            <StatCard3D key={stat.label} stat={stat} index={i} inView={inView} />
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
