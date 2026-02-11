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

const workshops = ['IOT Workshop', 'Python for Data Science Workshop'];

const interests = [
    { name: 'Coding & Problem-Solving', emoji: '💻' },
    { name: 'AI & Machine Learning', emoji: '🤖' },
    { name: 'Programming Frameworks', emoji: '🔧' },
    { name: 'Farming', emoji: '🌾' },
    { name: 'Playing Cricket', emoji: '🏏' },
    { name: 'Reading Books', emoji: '📚' },
    { name: 'Cooking', emoji: '🍳' },
];

const languages = [
    { name: 'Kannada', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Telugu', level: 'Fluent' },
    { name: 'Hindi', level: 'Conversational' },
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
                                >
                                    <span className="activities__hack-badge">{h.badge}</span>
                                    <div>
                                        <h4 className="activities__hack-name">{h.name}</h4>
                                        <div className="activities__hack-result" style={{ color: h.color }}>
                                            {h.result}
                                        </div>
                                        <span className="activities__hack-detail">{h.detail}</span>
                                    </div>
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
                                    <div key={i} className="activities__workshop-item glass-card">
                                        <FaBookOpen style={{ color: 'var(--accent-cyan)' }} />
                                        <span>{w}</span>
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
                                    <div key={i} className="activities__lang-tag">
                                        <span className="activities__lang-name">{l.name}</span>
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
                                >
                                    <span className="activities__interest-emoji">{int.emoji}</span>
                                    <span className="activities__interest-name">{int.name}</span>
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
