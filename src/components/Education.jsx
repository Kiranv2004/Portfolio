import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
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
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <div className="education__icon" style={{ background: `${edu.color}15`, color: edu.color }}>
                                <FaGraduationCap />
                            </div>
                            <div className="education__info">
                                <h3 className="education__degree">{edu.degree}</h3>
                                <h4 className="education__institution">{edu.institution}</h4>
                                <div className="education__meta">
                                    <span className="education__period">
                                        <FaCalendarAlt /> {edu.period}
                                    </span>
                                </div>
                                <div className="education__result-row">
                                    <span className="education__result">{edu.result}</span>
                                </div>
                                <div className="education__bar">
                                    <motion.div
                                        className="education__bar-fill"
                                        style={{ background: `linear-gradient(90deg, ${edu.color}, ${edu.color}88)` }}
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${edu.percentage}%` } : {}}
                                        transition={{ duration: 1.2, delay: i * 0.2 }}
                                    />
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
