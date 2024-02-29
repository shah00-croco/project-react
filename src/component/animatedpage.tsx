import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
}

const AnimatedPage = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation}
            transition={{duration: 1}}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedPage;