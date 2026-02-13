import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaUsers, FaTools, FaBookOpen } from 'react-icons/fa';

import SectionWrapper from './SectionWrapper';
import './Activities.css';

const hackathons = [
    {
        name: 'Fluxus 2025 (IIT Indore)',
        result: 'Finalist',
        detail: 'Face Recognition System',
        badge: '🏆',
        color: '#ffd700',
    },
    {
        name: 'CodeCarnage (SJB Institute of Technology)',
        result: '24-hour Hackathon',
        detail: 'Intensive coding challenge',
        badge: '⚡',
        color: '#ff6b35',
    },
    {
        name: 'Vertex Innovate 2025 (VIT Vellore)',
        result: 'Participated',
        detail: 'Team Coders',
        badge: '🚀',
        color: '#7b2ff7',
    },
];

const workshops = [
    { name: 'IOT Workshop', color: '#00d4ff', icon: '📡' },
    { name: 'Python for Data Science Workshop', color: '#3776ab', icon: '🐍' }
];

const interests = [
    { name: 'Coding & Problem-Solving', emoji: '💻', color: '#00d4ff' },
    { name: 'AI & Machine Learning', emoji: '🤖', color: '#7b2ff7' },
    { name: 'Programming Frameworks', emoji: '🔧', color: '#ff6b35' },
    { name: 'Farming', emoji: '🌾', color: '#00e676' },
    { name: 'Playing Cricket', emoji: '🏏', color: '#ff2d95' },
    { name: 'Reading Books', emoji: '📚', color: '#ffd700' },
    { name: 'Cooking', emoji: '🍳', color: '#ff9800' },
];

const languages = [
    { name: 'Kannada', level: 'Native', color: '#ff6b35' },
    { name: 'English', level: 'Fluent', color: '#00d4ff' },
    { name: 'Telugu', level: 'Fluent', color: '#7b2ff7' },
    { name: 'Hindi', level: 'Conversational', color: '#00e676' },
];

const Activities = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <SectionWrapper id="activities">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Beyond the code</span>
                    <h2 className="section-title">Activities & Achievements</h2>
                </div>

                <div className="activities__content" ref={ref}>
                    {/* Hackathons */}
                    <motion.div
                        className="activities__section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="activities__heading">
                            <FaTrophy className="activities__heading-icon" style={{ color: '#ffd700' }} />
                            Hackathons
                        </h3>
                        <div className="activities__hackathons">
                            {hackathons.map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="activities__hack-card glass-card"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    style={{ '--act-color': h.color }}
                                >
                                    <span className="activities__hack-badge">{h.badge}</span>
                                    <div>
                                        <h4 className="activities__hack-name" style={{ color: h.color }}>{h.name}</h4>
                                        <div className="activities__hack-result">
                                            {h.result}
                                        </div>
                                        <span className="activities__hack-detail">{h.detail}</span>
                                    </div>
                                    <div className="activities__card-glow" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Workshops & Languages */}
                    <div className="activities__side">
                        <motion.div
                            className="activities__section"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="activities__heading">
                                <FaTools className="activities__heading-icon" style={{ color: '#00d4ff' }} />
                                Workshops
                            </h3>
                            <div className="activities__workshops">
                                {workshops.map((w, i) => (
                                    <div
                                        key={i}
                                        className="activities__workshop-item glass-card"
                                        style={{ '--act-color': w.color }}
                                    >
                                        <span style={{ fontSize: '1.2rem' }}>{w.icon}</span>
                                        <span className="activities__workshop-name">{w.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="activities__section"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h3 className="activities__heading">
                                <span className="activities__heading-icon" style={{ color: '#ff2d95' }}>🌐</span>
                                Languages
                            </h3>
                            <div className="activities__languages">
                                {languages.map((l, i) => (
                                    <div
                                        key={i}
                                        className="activities__lang-tag"
                                        style={{ '--act-color': l.color }}
                                    >
                                        <span className="activities__lang-name" style={{ color: l.color }}>{l.name}</span>
                                        <span className="activities__lang-level">{l.level}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Interests */}
                    <motion.div
                        className="activities__interests-section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="activities__heading">
                            <span className="activities__heading-icon">✨</span>
                            Interests
                        </h3>
                        <div className="activities__interests">
                            {interests.map((int, i) => (
                                <motion.div
                                    key={i}
                                    className="activities__interest glass-card"
                                    whileHover={{ scale: 1.06, y: -4 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    style={{ '--act-color': int.color }}
                                >
                                    <span className="activities__interest-emoji">{int.emoji}</span>
                                    <span className="activities__interest-name" style={{ color: int.color }}>{int.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Activities;
