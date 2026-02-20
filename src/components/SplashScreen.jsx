import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './SplashScreen.css';

const ease = [0.16, 1, 0.3, 1];
const NAME = ['K','i','r','a','n'];

const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: (i) => ({
        opacity: 1, y: 0, rotateX: 0,
        transition: { duration: 0.55, ease, delay: 0.15 + i * 0.07 },
    }),
};

const SplashScreen = ({ onEnter }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setReady(true), 150);
        return () => clearTimeout(t);
    }, []);

    return (
        <motion.div
            className="sp"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: '100%', transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }}
            transition={{ duration: 0.4 }}
            onClick={onEnter}
        >
            {/* Background glow */}
            <div className="sp__glow" aria-hidden="true" />

            {/* Scan line */}
            <div className="sp__scan" aria-hidden="true" />

            {/* Corner brackets */}
            {['tl','tr','bl','br'].map(pos => (
                <motion.div
                    key={pos}
                    className={`sp__corner sp__corner--${pos}`}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={ready ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, ease, delay: 0.7 }}
                    aria-hidden="true"
                />
            ))}

            {/* Content */}
            <div className="sp__body">

                {/* Label */}
                <motion.span
                    className="sp__label"
                    initial={{ opacity: 0, y: 10 }}
                    animate={ready ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease }}
                >
                    Portfolio
                </motion.span>

                {/* Name — letter by letter */}
                <h1 className="sp__name" style={{ perspective: '600px' }}>
                    {NAME.map((ch, i) => (
                        <motion.span
                            key={i}
                            className="sp__letter"
                            custom={i}
                            variants={letterVariants}
                            initial="hidden"
                            animate={ready ? 'visible' : 'hidden'}
                        >
                            {ch}
                        </motion.span>
                    ))}
                    <motion.span
                        className="sp__name-dot"
                        custom={NAME.length}
                        variants={letterVariants}
                        initial="hidden"
                        animate={ready ? 'visible' : 'hidden'}
                    >.</motion.span>
                    <motion.span
                        className="sp__letter"
                        custom={NAME.length + 1}
                        variants={letterVariants}
                        initial="hidden"
                        animate={ready ? 'visible' : 'hidden'}
                    >V</motion.span>
                </h1>

                {/* Tagline */}
                <motion.p
                    className="sp__tagline"
                    initial={{ opacity: 0, y: 8 }}
                    animate={ready ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.72 }}
                >
                    Full Stack Developer
                    <span className="sp__cursor" aria-hidden="true" />
                </motion.p>

                {/* Divider */}
                <motion.div
                    className="sp__line"
                    initial={{ scaleX: 0 }}
                    animate={ready ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.65, ease, delay: 0.88 }}
                />

                {/* Button */}
                <motion.button
                    className="sp__btn"
                    onClick={(e) => { e.stopPropagation(); onEnter(); }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={ready ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease, delay: 1.0 }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Enter To Portfolio
                    <svg className="sp__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </motion.button>

                {/* Hint */}
                <motion.p
                    className="sp__hint"
                    initial={{ opacity: 0 }}
                    animate={ready ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    click anywhere to continue
                </motion.p>
            </div>
        </motion.div>
    );
};

export default SplashScreen;
