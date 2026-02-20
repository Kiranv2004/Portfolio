import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
    { name: 'Home',         href: '#home' },
    { name: 'About',        href: '#about' },
    { name: 'Skills',       href: '#skills' },
    { name: 'Experience',   href: '#experience' },
    { name: 'Projects',     href: '#projects' },
    { name: 'Education',    href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Activities',   href: '#activities' },
    { name: 'Contact',      href: '#contact' },
    { name: 'Resume',       href: '/Kiran_V.pdf', external: true },
];

const Navbar = () => {
    const [scrolled, setScrolled]       = useState(false);
    const [mobileOpen, setMobileOpen]   = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Close mobile menu on scroll
            if (mobileOpen) setMobileOpen(false);

            const sections = navLinks
                .filter(l => l.href.startsWith('#'))
                .map(l => l.href.slice(1));

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mobileOpen]);

    // Prevent body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleClick = (link) => {
        setMobileOpen(false);
        if (link.external) {
            window.open(link.href, '_blank', 'noopener,noreferrer');
            return;
        }
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                className={`navbar${scrolled ? ' navbar--scrolled' : ''}${activeSection === 'home' ? ' navbar--hero' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="navbar__container">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="navbar__logo"
                        onClick={(e) => { e.preventDefault(); handleClick({ href: '#home' }); }}
                    >
                        <span className="navbar__logo-bracket">&lt;</span>
                        <span className="navbar__logo-name">Kiran</span>
                        <span className="navbar__logo-bracket"> /&gt;</span>
                    </a>

                    {/* Desktop links */}
                    <div className="navbar__links">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noopener noreferrer' : undefined}
                                className={`navbar__link
                                    ${activeSection === link.href.slice(1) && !link.external ? ' navbar__link--active' : ''}
                                    ${link.external ? ' navbar__link--resume' : ''}`}
                                onClick={(e) => {
                                    if (!link.external) {
                                        e.preventDefault();
                                        handleClick(link);
                                    }
                                }}
                            >
                                {link.name}
                                {activeSection === link.href.slice(1) && !link.external && (
                                    <motion.div className="navbar__link-indicator" layoutId="activeNav" />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Hamburger — always on top */}
                    <button
                        className={`navbar__toggle${mobileOpen ? ' navbar__toggle--open' : ''}`}
                        onClick={() => setMobileOpen(o => !o)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu + backdrop */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop — tap anywhere to close */}
                        <motion.div
                            className="navbar__backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Slide-in panel */}
                        <motion.div
                            className="navbar__mobile"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                        >
                            {/* Panel header */}
                            <div className="navbar__mobile-header">
                                <span className="navbar__logo-bracket">&lt;</span>
                                <span className="navbar__logo-name">Kiran</span>
                                <span className="navbar__logo-bracket"> /&gt;</span>
                            </div>

                            <nav className="navbar__mobile-nav">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        className={`navbar__mobile-link
                                            ${activeSection === link.href.slice(1) && !link.external ? ' navbar__link--active' : ''}
                                            ${link.external ? ' navbar__mobile-link--resume' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleClick(link);
                                        }}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04, duration: 0.28 }}
                                    >
                                        {link.external && (
                                            <span className="navbar__mobile-link-icon">↗</span>
                                        )}
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
