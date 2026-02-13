import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaTimes } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './Projects.css';

const projects = [
    {
        title: 'Student Face Attendance System',
        summary: 'AI-powered attendance system with facial recognition, anti-spoofing, and automated email notifications.',
        description: 'Developed a real-time AI-based attendance system where students register facial images with personal details. Face images are converted into 128-dimensional encodings using face_recognition and dlib and stored in a database. Implemented a three-layer verification process using MiniFASNet for anti-spoofing, Euclidean distance-based face matching, and MediaPipe for mask-aware detection. Attendance is recorded automatically and email notifications are sent to students and parents.',
        tech: ['Python', 'MiniFASNet', 'dlib', 'MediaPipe', 'OpenCV', 'MongoDB'],
        highlights: [
            'Three-layer verification via MiniFASNet (Anti-spoofing)',
            'Euclidean distance-based face matching with 128-D encodings',
            'Mask-aware detection using MediaPipe',
            'Automated attendance recording & email notifications to parents',
        ],
        gradient: 'linear-gradient(135deg, #00d4ff, #0088cc)',
        emoji: '👁️',
        image: '/project-attendance.png',
        repo: 'https://github.com/Kiranv2004/Student-Attendance-System-with-Anti-s-Spoofing-Security-and-Masked-face-Detection-and-Face-Emotions',
    },
    {
        title: 'Portfolio Builder From Resume',
        summary: 'Full-stack app that auto-generates professional portfolio websites from uploaded resumes.',
        description: 'A full-stack web application that automatically generates professional portfolios from resume data. Features intelligent parsing of resume documents to extract structured data, dynamic portfolio generation with customizable templates, and secure JWT-based authentication. Built with React frontend, Spring Boot backend, and Docker containerization for production deployment.',
        tech: ['React', 'Spring Boot', 'Java', 'Tailwind CSS', 'Docker', 'JWT'],
        highlights: [
            'Intelligent Resume Parsing Engine (PDF/DOCX)',
            'Dynamic Portfolio Generation with templates',
            'Secure JWT Authentication & Session Management',
            'Production-ready Docker Containerization',
        ],
        gradient: 'linear-gradient(135deg, #FF512F, #DD2476)',
        emoji: '🚀',
        image: '/project-portfolio.svg',
        repo: 'https://github.com/Kiranv2004/Portfolio_Builder_From_Resume',
    },
    {
        title: 'Carbon Footprint Analysis for Indian Coal Mines',
        summary: 'Web platform calculating carbon emissions from coal mines with sustainability pathways.',
        description: 'A web-based platform to calculate and analyze carbon emissions from Indian coal mines. Features emission calculations using standard carbon accounting formulas, manual entry modules for employer data, comprehensive data management & reporting, and proposed sustainable pathways toward achieving carbon neutrality.',
        tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        highlights: [
            'Standard carbon accounting formulas',
            'Manual entry modules for employer data',
            'Comprehensive data management and reporting',
            'Sustainable pathways toward carbon neutrality',
        ],
        gradient: 'linear-gradient(135deg, #00e676, #00b248)',
        emoji: '🌍',
        image: '/project-carbon.png',
        repo: 'https://github.com/Kiranv2004/Carbon-Footprints-Calculation-for-Coal-Mines',
    },
    {
        title: 'AI-Based Text-to-Image Generation',
        summary: 'Generative AI model converting text descriptions into realistic images using Stable Diffusion.',
        description: 'A generative AI model using the Diffusers module in Python to convert textual descriptions into realistic images. Leverages Stable Diffusion pretrained pipeline with fine-tuned parameters for accuracy. Supports dynamic text prompts and produces high-quality image rendering with customizable resolution.',
        tech: ['Python', 'Stable Diffusion', 'Diffusers', 'AI/ML'],
        highlights: [
            'Pretrained Stable Diffusion pipeline',
            'Fine-tuned parameters for accuracy',
            'Dynamic text prompts with custom resolution',
            'High-quality image rendering',
        ],
        gradient: 'linear-gradient(135deg, #7b2ff7, #5a1fd0)',
        emoji: '🎨',
        image: '/project-ai.png',
        repo: 'https://github.com/Kiranv2004/Text-To-Image-Generation-Gen-AI-',
    },
    {
        title: 'Blockchain-Based Voting System',
        summary: 'Decentralized voting on Ethereum with smart contracts and MetaMask authentication.',
        description: 'A decentralized voting platform using Ethereum blockchain ensuring transparency and eliminating electoral fraud. Features smart contracts written in Solidity, MetaMask wallet integration for authentication, cryptographic one-vote-per-address logic, and local blockchain testing via Ganache.',
        tech: ['Solidity', 'Ethereum', 'Ganache', 'MetaMask', 'Web3'],
        highlights: [
            'Smart contracts in Solidity',
            'MetaMask wallet authentication',
            'Cryptographic one-vote-per-address logic',
            'Local blockchain via Ganache',
        ],
        gradient: 'linear-gradient(135deg, #ff2d95, #cc1177)',
        emoji: '🗳️',
        image: '/project-voting.png',
        repo: 'https://github.com/Kiranv2004/Blockchain-voting-system',
    },
];

const Projects = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <SectionWrapper id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">What I've built</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Click on any project to view its full details and GitHub repository
                    </p>
                </div>

                <div className="projects__grid" ref={ref}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            layoutId={`project-${project.title}`}
                            className="projects__card"
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            whileInView={{
                                y: [0, -8, 0],
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.2 // Stagger the float start time
                                }
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="projects__card-glow" style={{ background: project.gradient }} />

                            <div className="projects__card-image-container">
                                <img src={project.image} alt={project.title} className="projects__card-img" />
                                <div className="projects__card-image-overlay" />
                            </div>

                            <div className="projects__card-inner">
                                <div className="projects__card-header">
                                    <span className="projects__emoji">{project.emoji}</span>
                                    <h3 className="projects__title">{project.title}</h3>
                                </div>

                                <p className="projects__desc">{project.summary}</p>

                                <div className="projects__card-footer">
                                    <div className="projects__tech">
                                        {project.tech.map((t) => (
                                            <span key={t} className="tag">{t}</span>
                                        ))}
                                    </div>
                                    <span className="projects__click-hint">Click to view →</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="project-modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                layoutId={`project-${selectedProject.title}`}
                                className="project-modal"
                                transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.8 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="project-modal-close" onClick={() => setSelectedProject(null)}>
                                    <FaTimes />
                                </button>

                                <div className="project-modal-image-container">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="project-modal-img" />
                                    <div className="project-modal-image-gradient" style={{ background: 'linear-gradient(to top, #0a0a0a, transparent)' }} />
                                </div>

                                <motion.div
                                    className="project-modal-content"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="project-modal-header">
                                        <span className="projects__emoji" style={{ fontSize: '2.8rem' }}>{selectedProject.emoji}</span>
                                        <div>
                                            <h2 className="project-modal-title">{selectedProject.title}</h2>
                                            <div className="projects__tech" style={{ marginTop: '10px' }}>
                                                {selectedProject.tech.map((t) => (
                                                    <span key={t} className="tag">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="project-modal-desc">{selectedProject.description}</p>

                                    <div className="project-modal-highlights">
                                        <h4 className="project-modal-section-title">Key Highlights</h4>
                                        <ul className="projects__highlights">
                                            {selectedProject.highlights.map((h, j) => (
                                                <li key={j}>{h}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="project-modal-actions">
                                        <a href={selectedProject.repo} target="_blank" rel="noopener noreferrer" className="project-modal-btn">
                                            <FaGithub /> View Repository
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
