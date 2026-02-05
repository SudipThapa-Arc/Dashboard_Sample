'use client';

import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
    initial: { 
        opacity: 0, 
        y: 20, 
        scale: 0.98,
        filter: "blur(4px)"
    },
    in: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        filter: "blur(0px)"
    },
    out: { 
        opacity: 0, 
        y: -20, 
        scale: 1.02,
        filter: "blur(2px)"
    }
};

const pageTransition: any = {
    type: "tween",
    ease: "anticipate",
    duration: 0.3
};

export function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="page-content"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
