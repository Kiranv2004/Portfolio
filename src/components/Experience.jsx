import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
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
        gradient: 'linear-gradient(135deg, #00d4ff, #0099cc)',
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
        gradient: 'linear-gradient(135deg, #7b2ff7, #a855f7)',
    },
];

const cardVariants = {
    hidden: (dir) => ({
        opacity: 0,
        x: dir === 'left' ? -80 : 80,
        rotateY: dir === 'left' ? -8 : 8,
    }),
    visible: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const descVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay },
    }),
};

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
                    {/* Animated timeline line */}
                    <motion.div
                        className="experience__timeline-line"
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {experiences.map((exp, i) => {
                        const dir = i % 2 === 0 ? 'left' : 'right';

                        return (
                            <motion.div
                                key={i}
                                className={`experience__card experience__card--${dir}`}
                                custom={dir}
                                variants={cardVariants}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                transition={{ delay: i * 0.3 + 0.3 }}
                                style={{ '--exp-color': exp.color, '--exp-gradient': exp.gradient }}
                            >
                                {/* Timeline dot with pulse ring */}
                                <motion.div
                                    className="experience__dot"
                                    initial={{ scale: 0 }}
                                    animate={inView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: i * 0.3 + 0.5, type: 'spring', stiffness: 300 }}
                                >
                                    <div className="experience__dot-inner" />
                                    <div className="experience__dot-ring" />
                                </motion.div>

                                <motion.div
                                    className="experience__content glass-card"
                                    animate={inView ? { y: [0, -6, 0] } : {}}
                                    transition={{
                                        y: { duration: 3.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: 1 + i * 0.5 },
                                    }}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    {/* Colored top accent bar */}
                                    <div className="experience__accent-bar" />

                                    <div className="experience__badge">
                                        <FaBriefcase />
                                        <span>{exp.type}</span>
                                    </div>

                                    <motion.h3
                                        className="experience__title"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: i * 0.3 + 0.5 }}
                                    >
                                        {exp.title}
                                    </motion.h3>

                                    <motion.h4
                                        className="experience__company"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: i * 0.3 + 0.6 }}
                                    >
                                        {exp.company}
                                    </motion.h4>

                                    <div className="experience__meta">
                                        <motion.span
                                            className="experience__period"
                                            initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : {}}
                                            transition={{ delay: i * 0.3 + 0.7 }}
                                        >
                                            <FaCalendarAlt /> {exp.period}
                                        </motion.span>
                                    </div>

                                    <ul className="experience__desc">
                                        {exp.description.map((item, j) => (
                                            <motion.li
                                                key={j}
                                                custom={i * 0.3 + 0.8 + j * 0.1}
                                                variants={descVariants}
                                                initial="hidden"
                                                animate={inView ? "visible" : "hidden"}
                                            >
                                                <FaArrowRight className="experience__desc-arrow" />
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* Bottom glow */}
                                    <div className="experience__card-glow" />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
