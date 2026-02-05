'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingAnimationProps {
    children: ReactNode;
    duration?: number;
    delay?: number;
    distance?: number;
    className?: string;
}

export function FloatingAnimation({ 
    children, 
    duration = 3, 
    delay = 0,
    distance = 10,
    className = "" 
}: FloatingAnimationProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -distance, 0],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );
}