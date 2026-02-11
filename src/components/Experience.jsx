import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './Experience.css';

const experiences = [
    {
        title: 'Web Development Intern',
        company: 'Octanet Services Pvt. Ltd.',
        type: 'Virtual',
        period: 'Dec 2023 – Jan 2024',
        description: [
            'Built responsive web applications and enhanced frontend features using HTML, CSS, and JavaScript.',
        ],
        color: '#00d4ff',
    },
    {
        title: 'Java Programming Intern',
        company: 'Codtech IT Solutions Pvt. Ltd.',
        type: 'Virtual',
        period: 'Feb 2025 – Mar 2025',
        description: [
            'Developed Java-based applications and practiced object-oriented programming concepts through real-time projects.',
        ],
        color: '#7b2ff7',
    },
];

const Experience = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <SectionWrapper id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Where I've worked</span>
                    <h2 className="section-title">Work Experience</h2>
                </div>

                <div className="experience__timeline" ref={ref}>
                    <div className="experience__timeline-line" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            className={`experience__card ${i % 2 === 0 ? 'experience__card--left' : 'experience__card--right'}`}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            <div className="experience__dot" style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}40` }} />
                            <div className="experience__content glass-card">
                                <div className="experience__badge" style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}>
                                    <FaBriefcase />
                                    <span>{exp.type}</span>
                                </div>
                                <h3 className="experience__title">{exp.title}</h3>
                                <h4 className="experience__company">{exp.company}</h4>
                                <div className="experience__meta">
                                    <span className="experience__period">
                                        <FaCalendarAlt /> {exp.period}
                                    </span>
                                </div>
                                <ul className="experience__desc">
                                    {exp.description.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
