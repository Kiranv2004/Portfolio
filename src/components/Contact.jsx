import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './Contact.css';

const ContactSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [focused, setFocused] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:kiranv20042@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Kiran,\n\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        window.open(mailtoLink);
    };

    const contactInfo = [
        { icon: <FaEnvelope />, label: 'Email', value: 'kiranv20042@gmail.com', href: 'mailto:kiranv20042@gmail.com', color: '#00d4ff' },
        { icon: <FaPhone />, label: 'Phone', value: '+91 9110655575', href: 'tel:+919110655575', color: '#7b2ff7' },
    ];

    return (
        <SectionWrapper id="contact">
            <div className="contact__bg-grid" />

            {/* Floating Cyber Orbs */}
            <div className="contact__orb contact__orb--1" />
            <div className="contact__orb contact__orb--2" />
            <div className="contact__orb contact__orb--3" />

            <div className="container">
                <div className="section-header">
                    <span className="section-label">Initialize_Connection</span>
                    <h2 className="section-title">Get In Touch</h2>
                </div>

                <div className="contact__content" ref={ref}>
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="contact__info-title">
                            <span className="typing-effect">Let's build the future.</span>
                        </h3>
                        <p className="contact__info-desc">
                            Initiating collaboration protocols. I'm ready to deploy my skills for your next big project.
                            Available for freelance, full-time, or collaborative missions.
                        </p>

                        <div className="contact__details">
                            {contactInfo.map((info, i) => (
                                <a key={i} href={info.href} className="contact__detail glass-card">
                                    <div className="contact__detail-icon" style={{ boxShadow: `0 0 15px ${info.color}40`, color: info.color }}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <span className="contact__detail-label">{info.label}</span>
                                        <span className="contact__detail-value">{info.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="contact__socials">
                            {[
                                { icon: <FaGithub />, href: "https://github.com/Kiranv2004" },
                                { icon: <FaLinkedin />, href: "https://linkedin.com/in/kiran-v-4b1384281" },
                                { icon: <FaEnvelope />, href: "mailto:kiranv20042@gmail.com" }
                            ].map((social, i) => (
                                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="contact__social">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact__form-wrapper"
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <div className="contact__scanner-line" />

                            {['name', 'email', 'subject'].map((field) => (
                                <div key={field} className={`contact__field ${focused === field || formData[field] ? 'contact__field--active' : ''}`}>
                                    <label className="contact__label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        name={field}
                                        className="contact__input"
                                        value={formData[field]}
                                        onChange={handleChange}
                                        onFocus={() => setFocused(field)}
                                        onBlur={() => setFocused('')}
                                        required
                                        autoComplete="off"
                                    />
                                    {focused === field && <div className="contact__corner-brackets" />}
                                </div>
                            ))}

                            <div className={`contact__field ${focused === 'message' || formData.message ? 'contact__field--active' : ''}`}>
                                <label className="contact__label">Message</label>
                                <textarea
                                    name="message"
                                    className="contact__input contact__textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    rows="5"
                                    required
                                />
                                {focused === 'message' && <div className="contact__corner-brackets" />}
                            </div>

                            <button type="submit" className="contact__submit">
                                <span className="contact__submit-text">TRANSMIT DATA</span>
                                <FaPaperPlane className="contact__submit-icon" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ContactSection;
