import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './Projects.css';

const projects = [
    {
        title: 'Student Face Attendance System',
        description: 'A real-time biometric attendance system using deep learning-based face recognition and anti-spoofing techniques. Features facial detection via dlib, OpenCV live detection, MediaPipe for anti-spoofing, Flask backend, and MongoDB database.',
        tech: ['Python', 'OpenCV', 'Flask', 'MongoDB', 'dlib', 'MediaPipe'],
        highlights: [
            'Deep learning-based face recognition',
            'Anti-spoofing via MediaPipe (prevents photo/video attacks)',
            'Real-time camera authentication',
            'Automated attendance marking',
        ],
        gradient: 'linear-gradient(135deg, #00d4ff, #0088cc)',
        emoji: '👁️',
    },
    {
        title: 'Carbon Footprint Analysis for Indian Coal Mines',
        description: 'A web-based platform to calculate and analyze carbon emissions from Indian coal mines. Features emission calculations using carbon accounting formulas and proposed pathways toward carbon neutrality.',
        tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        highlights: [
            'Standard carbon accounting formulas',
            'Manual entry modules for employer data',
            'Data management and reporting',
            'Sustainable pathways toward carbon neutrality',
        ],
        gradient: 'linear-gradient(135deg, #00e676, #00b248)',
        emoji: '🌍',
    },
    {
        title: 'AI-Based Text-to-Image Generation',
        description: 'A generative AI model using the Diffusers module in Python to convert textual descriptions into realistic images. Leverages Stable Diffusion for high-quality image synthesis.',
        tech: ['Python', 'Stable Diffusion', 'Diffusers', 'AI/ML'],
        highlights: [
            'Pretrained Stable Diffusion pipeline',
            'Fine-tuned parameters for accuracy',
            'Dynamic text prompts',
            'High-quality image rendering',
        ],
        gradient: 'linear-gradient(135deg, #7b2ff7, #5a1fd0)',
        emoji: '🎨',
    },
    {
        title: 'Blockchain-Based Voting System',
        description: 'A decentralized voting platform using Ethereum blockchain ensuring transparency and eliminating electoral fraud. Features smart contracts, MetaMask integration, and cryptographic hashing.',
        tech: ['Solidity', 'Ethereum', 'Ganache', 'MetaMask', 'Web3'],
        highlights: [
            'Smart contracts in Solidity',
            'MetaMask wallet authentication',
            'Cryptographic one-vote-per-address logic',
            'Local blockchain via Ganache',
        ],
        gradient: 'linear-gradient(135deg, #ff2d95, #cc1177)',
        emoji: '🗳️',
    },
];

const Projects = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <SectionWrapper id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">What I've built</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Real-world projects showcasing my skills in AI, blockchain, web development, and more
                    </p>
                </div>

                <div className="projects__grid" ref={ref}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="projects__card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="projects__card-glow" style={{ background: project.gradient }} />
                            <div className="projects__card-inner glass-card">
                                <div className="projects__card-header">
                                    <span className="projects__emoji">{project.emoji}</span>
                                    <h3 className="projects__title">{project.title}</h3>
                                </div>

                                <p className="projects__desc">{project.description}</p>

                                <ul className="projects__highlights">
                                    {project.highlights.map((h, j) => (
                                        <li key={j}>{h}</li>
                                    ))}
                                </ul>

                                <div className="projects__tech">
                                    {project.tech.map((t) => (
                                        <span key={t} className="tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
