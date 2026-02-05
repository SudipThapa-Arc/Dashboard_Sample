'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerContainerProps {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    },
};

export function StaggerContainer({ children, staggerDelay = 0.1, className = "" }: StaggerContainerProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className={className}
        >
            {children}
        </motion.div>
    );
}

export { itemVariants };