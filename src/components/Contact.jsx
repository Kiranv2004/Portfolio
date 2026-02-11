import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import './Contact.css';

const Contact = () => {
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
        { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Mallandahalli, Kolar, Karnataka', href: '#', color: '#ff2d95' },
    ];

    return (
        <SectionWrapper id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Let&apos;s connect</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </div>

                <div className="contact__content" ref={ref}>
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="contact__info-title">Let's talk about everything!</h3>
                        <p className="contact__info-desc">
                            I'm always open to discussing new projects, creative ideas, or opportunities
                            to be part of your vision. Let's build something amazing together.
                        </p>

                        <div className="contact__details">
                            {contactInfo.map((info, i) => (
                                <a key={i} href={info.href} className="contact__detail glass-card">
                                    <div className="contact__detail-icon" style={{ color: info.color }}>
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
                            <a href="https://github.com/Kiranv2004" target="_blank" rel="noopener noreferrer" className="contact__social">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/kiran-v-4b1384281" target="_blank" rel="noopener noreferrer" className="contact__social">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:kiranv20042@gmail.com" className="contact__social">
                                <FaEnvelope />
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact__form glass-card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={`contact__field ${focused === 'name' || formData.name ? 'contact__field--active' : ''}`}>
                            <label className="contact__label">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact__input"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setFocused('name')}
                                onBlur={() => setFocused('')}
                                required
                            />
                        </div>

                        <div className={`contact__field ${focused === 'email' || formData.email ? 'contact__field--active' : ''}`}>
                            <label className="contact__label">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                className="contact__input"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused('')}
                                required
                            />
                        </div>

                        <div className={`contact__field ${focused === 'subject' || formData.subject ? 'contact__field--active' : ''}`}>
                            <label className="contact__label">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                className="contact__input"
                                value={formData.subject}
                                onChange={handleChange}
                                onFocus={() => setFocused('subject')}
                                onBlur={() => setFocused('')}
                                required
                            />
                        </div>

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
                        </div>

                        <motion.button
                            type="submit"
                            className="btn-primary contact__submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FaPaperPlane />
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
