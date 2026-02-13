import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/Kiran_V.pdf', external: true },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                // Skip if href doesn't start with #
                if (!navLinks.find(l => l.href.slice(1) === sections[i])?.href.startsWith('#')) continue;

                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (link) => {
        setMobileOpen(false);
        if (link.external) return; // Allow default behavior for external links

        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="navbar__container">
                <a href="#home" className="navbar__logo" onClick={() => handleClick({ href: '#home' })}>
                    <span className="navbar__logo-bracket">&lt;</span>
                    <span className="navbar__logo-name">Kiran</span>
                    <span className="navbar__logo-bracket"> /&gt;</span>
                </a>

                <div className="navbar__links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            className={`navbar__link ${activeSection === link.href.slice(1) && !link.external ? 'navbar__link--active' : ''} ${link.external ? 'navbar__link--resume' : ''}`}
                            onClick={(e) => {
                                if (!link.external) {
                                    e.preventDefault();
                                    handleClick(link);
                                }
                            }}
                        >
                            {link.name}
                            {activeSection === link.href.slice(1) && (
                                <motion.div className="navbar__link-indicator" layoutId="activeNav" />
                            )}
                        </a>
                    ))}
                </div>

                <button className="navbar__toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>

                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            className="navbar__mobile"
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 300 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className={`navbar__mobile-link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
