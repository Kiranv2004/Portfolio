import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = ({ onEnter }) => {
    const [exiting, setExiting] = useState(false);

    const handleClick = () => {
        setExiting(true);
        onEnter(); // Immediate exit
    };

    return (
        <AnimatePresence>
            {!exiting && ( // Remove exit animation phase
                <motion.div
                    className="splash"
                    onClick={handleClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0 } }} // Instant vanish
                >
                    <div className="splash__noise" />

                    {/* Animated Background Orbs */}
                    <div className="splash__orb splash__orb--1" />
                    <div className="splash__orb splash__orb--2" />
                    <div className="splash__orb splash__orb--3" />

                    <motion.div
                        className="splash__container"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <div className="splash__line splash__line--top" />

                        <h1 className="splash__title">
                            <span className="splash__wording">PORTFOLIO</span>
                            <div className="splash__name-mask">
                                <span className="splash__name-text">KIRAN V</span>
                                <div className="splash__shimmer" />
                            </div>
                        </h1>

                        <div className="splash__line splash__line--bottom" />

                        <div className="splash__meta">
                            <span>INTERACTIVE EXPERIENCE</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="splash__click-zone"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <span className="splash__press-text">[ CLICK TO ENTER ]</span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
