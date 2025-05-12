import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const animation = {
    initial: { opacity: 0 },  // Start with 0 opacity (invisible)
    animate: { opacity: 1 },  // End with full opacity (visible)
    exit: { opacity: 0 },     // Fade out to 0 opacity (invisible)
};

const AnimatedPage = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedPage;
