import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children, id, className = '' }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.08,
    });

    return (
        <motion.section
            id={id}
            ref={ref}
            className={`section ${className}`}
            initial={{ opacity: 0, y: 80 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
