import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt, FaGithub
} from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './Skills.css';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: '💻',
        skills: [
            { name: 'Python', icon: <FaPython />, level: 85, color: '#3776ab' },
            { name: 'Java', icon: <FaJava />, level: 80, color: '#f89820' },
            { name: 'C', icon: <FaCode />, level: 75, color: '#00599c' },
            { name: 'JavaScript', icon: <FaJs />, level: 65, color: '#f7df1e' },
            { name: 'SQL', icon: <FaDatabase />, level: 70, color: '#00d4ff' },
        ],
    },
    {
        title: 'Web Development',
        icon: '🌐',
        skills: [
            { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#e34f26' },
            { name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: '#1572b6' },
            { name: 'JavaScript', icon: <FaJs />, level: 65, color: '#f7df1e' },
        ],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        skills: [
            { name: 'MySQL', icon: <SiMysql />, level: 75, color: '#4479a1' },
            { name: 'MongoDB', icon: <SiMongodb />, level: 70, color: '#47a248' },
        ],
    },
    {
        title: 'Version Control',
        icon: '🔧',
        skills: [
            { name: 'Git', icon: <FaGitAlt />, level: 80, color: '#f05032' },
            { name: 'GitHub', icon: <FaGithub />, level: 85, color: '#e8e8f0' },
        ],
    },
];

const Skills = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <SectionWrapper id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">What I know</span>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        Technologies and tools I've been working with
                    </p>
                </div>

                <div className="skills__grid" ref={ref}>
                    {skillCategories.map((category, ci) => (
                        <motion.div
                            key={category.title}
                            className="skills__category glass-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: ci * 0.1 }}
                        >
                            <div className="skills__category-header">
                                <span className="skills__category-icon">{category.icon}</span>
                                <h3 className="skills__category-title">{category.title}</h3>
                            </div>

                            <div className="skills__list-grid">
                                {category.skills.map((skill, si) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skills__badge"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.05 }}
                                        whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                    >
                                        <div className="skills__badge-icon" style={{ color: skill.color }}>
                                            {skill.icon}
                                        </div>
                                        <span className="skills__badge-name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
