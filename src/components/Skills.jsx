import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt, FaGithub, FaReact
} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiFlask, SiSpringboot } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './Skills.css';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: '💻',
        accent: '#00d4ff',
        skills: [
            { name: 'Python', icon: <FaPython />, color: '#3776ab' },
            { name: 'Java', icon: <FaJava />, color: '#f89820' },
            { name: 'C', icon: <FaCode />, color: '#00599c' },
            { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
            { name: 'SQL', icon: <FaDatabase />, color: '#00d4ff' },
        ],
    },
    {
        title: 'Web Development',
        icon: '🌐',
        accent: '#ff6b35',
        skills: [
            { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
            { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
            { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
            { name: 'React', icon: <FaReact />, color: '#61dafb' },
            { name: 'Flask', icon: <SiFlask />, color: '#ffffff' },
            { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
        ],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        accent: '#47a248',
        skills: [
            { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
        ],
    },
    {
        title: 'Version Control',
        icon: '🔧',
        accent: '#7b2ff7',
        skills: [
            { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
            { name: 'GitHub', icon: <FaGithub />, color: '#e8e8f0' },
        ],
    },
];

const CategoryCard3D = ({ category, ci, inView }) => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
        setTilt({
            rotateX,
            rotateY,
            glowX: (x / rect.width) * 100,
            glowY: (y / rect.height) * 100,
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
    }, []);

    return (
        <motion.div
            ref={cardRef}
            className="skills__category"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={inView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
            } : {}}
            transition={{
                opacity: { duration: 0.7, delay: ci * 0.15 },
                y: { duration: 0.7, delay: ci * 0.15 },
                scale: { duration: 0.7, delay: ci * 0.15 },
                rotateX: { duration: 0.15, ease: 'easeOut' },
                rotateY: { duration: 0.15, ease: 'easeOut' },
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                '--cat-accent': category.accent,
                '--glow-x': `${tilt.glowX}%`,
                '--glow-y': `${tilt.glowY}%`,
                perspective: 800,
            }}
        >
            <div className="skills__category-spotlight" />
            <div className="skills__category-border-glow" />

            <div className="skills__category-header">
                <motion.span
                    className="skills__category-icon"
                    animate={inView ? {
                        rotate: [0, -8, 8, -4, 4, 0],
                        scale: [1, 1.1, 1],
                    } : {}}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: ci * 0.3,
                    }}
                >
                    {category.icon}
                </motion.span>
                <h3 className="skills__category-title">{category.title}</h3>
            </div>

            <div className="skills__list-grid">
                {category.skills.map((skill, si) => (
                    <motion.div
                        key={skill.name}
                        className="skills__card"
                        initial={{ opacity: 0, y: 30, scale: 0.6, rotate: -10 }}
                        animate={inView ? {
                            opacity: 1,
                            y: [0, -5, 0],
                            scale: 1,
                            rotate: 0,
                        } : {}}
                        transition={{
                            opacity: { duration: 0.5, delay: ci * 0.15 + si * 0.08 + 0.2 },
                            scale: { duration: 0.5, delay: ci * 0.15 + si * 0.08 + 0.2, type: 'spring', stiffness: 200 },
                            rotate: { duration: 0.5, delay: ci * 0.15 + si * 0.08 + 0.2 },
                            y: { duration: 2.5 + si * 0.3, repeat: Infinity, ease: 'easeInOut', delay: 1 + ci * 0.2 + si * 0.15 },
                        }}
                        whileHover={{
                            scale: 1.12,
                            y: -8,
                            rotate: [0, -2, 2, 0],
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{ '--skill-color': skill.color }}
                    >
                        <motion.div
                            className="skills__card-icon"
                            style={{ color: skill.color }}
                            whileHover={{
                                rotate: 360,
                                scale: 1.3,
                                transition: { duration: 0.6, ease: 'easeInOut' },
                            }}
                        >
                            {skill.icon}
                        </motion.div>
                        <span className="skills__card-name">{skill.name}</span>
                        <div className="skills__card-glow" />
                        <div className="skills__card-shine" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

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
                        <CategoryCard3D
                            key={category.title}
                            category={category}
                            ci={ci}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
