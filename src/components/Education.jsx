import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './Education.css';

const education = [
    {
        degree: 'Bachelor of Computer Science and Engineering',
        institution: 'Sri Venkateshwara College of Engineering, Bengaluru',
        period: '2022 – 2026',
        result: 'Aggregate: 82.25% | CGPA: 8.62',
        percentage: 82.25,
        color: '#00d4ff',
    },
    {
        degree: 'Pre-University in PCMB',
        institution: 'Vidya Jyothi PU College',
        period: '2022',
        result: 'Result: 82.833%',
        percentage: 82.83,
        color: '#7b2ff7',
    },
    {
        degree: 'Secondary School (SSLC)',
        institution: 'Chinmaya Grameena Vidyalaya',
        period: '2020',
        result: 'Result: 92.8%',
        percentage: 92.8,
        color: '#ff2d95',
    },
];

const Education = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <SectionWrapper id="education">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">My academic journey</span>
                    <h2 className="section-title">Education</h2>
                </div>

                <div className="education__list" ref={ref}>
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            className="education__card glass-card"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            animate={inView ? { opacity: 1, x: 0, y: [0, -5, 0] } : {}}
                            transition={{
                                opacity: { duration: 0.6, delay: i * 0.15 },
                                x: { duration: 0.6, delay: i * 0.15 },
                                y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 + i * 0.5 }
                            }}
                            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                            style={{ '--edu-color': edu.color }}
                        >
                            {/* Animated background glow */}
                            <div className="education__card-glow" />

                            <div className="education__icon">
                                <motion.div
                                    animate={inView ? { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] } : {}}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                                >
                                    <FaGraduationCap />
                                </motion.div>
                            </div>

                            <div className="education__info">
                                <h3 className="education__degree">{edu.degree}</h3>
                                <h4 className="education__institution">{edu.institution}</h4>

                                <div className="education__meta-row">
                                    <span className="education__period">
                                        <FaCalendarAlt /> {edu.period}
                                    </span>
                                    <span className="education__result-badge">
                                        <FaAward /> {edu.result}
                                    </span>
                                </div>

                                <div className="education__bar-container">
                                    <div className="education__bar-label">
                                        <span>Performance</span>
                                        <span>{edu.percentage}%</span>
                                    </div>
                                    <div className="education__bar">
                                        <motion.div
                                            className="education__bar-fill"
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${edu.percentage}%` } : {}}
                                            transition={{ duration: 1.5, delay: i * 0.2 + 0.5, ease: 'easeOut' }}
                                        />
                                        <motion.div
                                            className="education__bar-glow"
                                            initial={{ left: 0 }}
                                            animate={inView ? { left: `${edu.percentage}%` } : {}}
                                            transition={{ duration: 1.5, delay: i * 0.2 + 0.5, ease: 'easeOut' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Education;
