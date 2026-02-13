import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGoogle, FaPython, FaAward, FaLaptopCode, FaBook, FaExternalLinkAlt } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './Certifications.css';

const certifications = [
    { name: 'Google AI Essentials', issuer: 'Coursera', icon: <FaGoogle />, color: '#4285f4', link: 'https://coursera.org/share/f7b6c3734df7fd2e29e7de316a8a0cad' },
    { name: 'IR4.0 Foundation Course', issuer: 'Tech Saksham', icon: <FaAward />, color: '#ff6b35', link: 'https://drive.google.com/file/d/1N6x58fiAmrrrvCv0YgCR9l73E5K6waPV/view?usp=drive_link' },
    { name: 'Python', issuer: 'GUVI', icon: <FaPython />, color: '#3776ab', link: 'https://www.guvi.in/share-certificate/9IRc1tW0J25N336118' },
    { name: 'Python for Data Science', issuer: 'IBM', icon: <FaBook />, color: '#054ada', link: 'https://courses.cognitiveclass.ai/certificates/c50c0db15c0c45babaace479d791e9b1' },
    { name: 'Responsive Web Design', issuer: 'Infosys Springboard', icon: <FaLaptopCode />, color: '#007cc3', link: 'https://drive.google.com/file/d/1i7msyMKpKgSeFN5ajk2MZyh1TacTRARV/view?usp=drive_link' },
    { name: 'C Programming for Beginners', issuer: 'Great Learning', icon: <FaAward />, color: '#00e676', link: 'https://www.mygreatlearning.com/certificate/MNAAYPTC?referrer_code=GLYGGUPQR0RLY' },
];

const CertificationCard3D = ({ cert, index, inView }) => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate tilt
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;

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

    const CardTag = cert.link ? 'a' : 'div';
    const linkProps = cert.link ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <motion.div
            className="certs__card-wrapper"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ perspective: 1000 }}
        >
            <motion.div
                ref={cardRef}
                className="certs__3d-container"
                animate={{
                    rotateX: tilt.rotateX,
                    rotateY: tilt.rotateY,
                }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    '--cert-color': cert.color,
                    '--glow-x': `${tilt.glowX}%`,
                    '--glow-y': `${tilt.glowY}%`,
                }}
            >
                <CardTag className="certs__card glass-card" {...linkProps}>
                    <div className="certs__card-content">
                        <div className="certs__icon">
                            {cert.icon}
                        </div>
                        <div className="certs__info">
                            <h3 className="certs__name">{cert.name}</h3>
                            <span className="certs__issuer">{cert.issuer}</span>
                        </div>
                        {cert.link && (
                            <div className="certs__link-icon">
                                <FaExternalLinkAlt />
                            </div>
                        )}
                    </div>

                    {/* Dynamic Spotlight */}
                    <div className="certs__spotlight" />

                    {/* Border Glow */}
                    <div className="certs__border-glow" />
                </CardTag>
            </motion.div>
        </motion.div>
    );
};

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
                        <CertificationCard3D
                            key={i}
                            cert={cert}
                            index={i}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
