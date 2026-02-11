import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaProjectDiagram, FaCode, FaBriefcase, FaCertificate } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './About.css';

const stats = [
    { icon: <FaProjectDiagram />, value: '4+', label: 'Projects' },
    { icon: <FaCode />, value: '5+', label: 'Languages' },
    { icon: <FaBriefcase />, value: '2', label: 'Internships' },
    { icon: <FaCertificate />, value: '6', label: 'Certifications' },
];

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
                        transition={{ duration: 0.6 }}
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
                            <motion.div
                                key={stat.label}
                                className="about__stat glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="about__stat-icon">{stat.icon}</div>
                                <div className="about__stat-value">{stat.value}</div>
                                <div className="about__stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
