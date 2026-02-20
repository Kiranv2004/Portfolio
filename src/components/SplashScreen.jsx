import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = ({ onEnter }) => {
    const [exiting, setExiting] = useState(false);

    const handleClick = () => {
        setExiting(true);
        setTimeout(() => onEnter(), 1200);
    };

    return (
        <AnimatePresence>
            {!exiting ? (
                <motion.div
                    className="splash"
                    onClick={handleClick}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Floating 3D Particles */}
                    <div className="splash__particles">
                        {[...Array(30)].map((_, i) => (
                            <div
                                key={i}
                                className="splash__particle"
                                style={{
                                    '--x': `${Math.random() * 100}%`,
                                    '--y': `${Math.random() * 100}%`,
                                    '--size': `${Math.random() * 6 + 2}px`,
                                    '--duration': `${Math.random() * 10 + 5}s`,
                                    '--delay': `${Math.random() * 5}s`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Rotating 3D Cube Frame */}
                    <div className="splash__scene">
                        <div className="splash__cube">
                            <div className="splash__cube-face splash__cube-face--front" />
                            <div className="splash__cube-face splash__cube-face--back" />
                            <div className="splash__cube-face splash__cube-face--left" />
                            <div className="splash__cube-face splash__cube-face--right" />
                            <div className="splash__cube-face splash__cube-face--top" />
                            <div className="splash__cube-face splash__cube-face--bottom" />
                        </div>
                    </div>

                    {/* Content */}
                    <motion.div
                        className="splash__content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                    >
                        <div className="splash__greeting">Welcome to</div>
                        <h1 className="splash__name">
                            <span className="splash__name-letter" style={{ '--i': 0 }}>K</span>
                            <span className="splash__name-letter" style={{ '--i': 1 }}>I</span>
                            <span className="splash__name-letter" style={{ '--i': 2 }}>R</span>
                            <span className="splash__name-letter" style={{ '--i': 3 }}>A</span>
                            <span className="splash__name-letter" style={{ '--i': 4 }}>N</span>
                            <span className="splash__name-dot">.</span>
                            <span className="splash__name-letter" style={{ '--i': 5 }}>V</span>
                        </h1>
                        <div className="splash__tagline">Software Engineer &bull; Web Developer &bull; AI Enthusiast</div>
                    </motion.div>

                    <motion.div
                        className="splash__cta"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <div className="splash__ripple" />
                        <span className="splash__cta-text">Click Anywhere to Enter</span>
                        <div className="splash__arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Glow Rings */}
                    <div className="splash__ring splash__ring--1" />
                    <div className="splash__ring splash__ring--2" />
                    <div className="splash__ring splash__ring--3" />
                </motion.div>
            ) : (
                <motion.div
                    className="splash splash--exiting"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                >
                    <div className="splash__flash" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
