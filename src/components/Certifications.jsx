import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGoogle, FaPython, FaAward, FaLaptopCode, FaBook } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './Certifications.css';

const certifications = [
    { name: 'Google AI Essentials', issuer: 'Coursera', icon: <FaGoogle />, color: '#4285f4' },
    { name: 'IR4.0 Foundation Course', issuer: 'Tech Saksham', icon: <FaAward />, color: '#ff6b35' },
    { name: 'Python', issuer: 'GUVI', icon: <FaPython />, color: '#3776ab' },
    { name: 'Python for Data Science', issuer: 'IBM', icon: <FaBook />, color: '#054ada' },
    { name: 'Responsive Web Design', issuer: 'Infosys Springboard', icon: <FaLaptopCode />, color: '#007cc3' },
    { name: 'C Programming for Beginners', issuer: 'Great Learning', icon: <FaAward />, color: '#00e676' },
];

const Certifications = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <SectionWrapper id="certifications">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Continuous learning</span>
                    <h2 className="section-title">Certifications</h2>
                </div>

                <div className="certs__grid" ref={ref}>
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            className="certs__card glass-card"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="certs__icon" style={{ color: cert.color }}>
                                {cert.icon}
                            </div>
                            <div className="certs__info">
                                <h3 className="certs__name">{cert.name}</h3>
                                <span className="certs__issuer">{cert.issuer}</span>
                            </div>
                            <div className="certs__glow" style={{ background: cert.color }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
