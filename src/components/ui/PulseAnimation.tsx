'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PulseAnimationProps {
    children: ReactNode;
    scale?: number;
    duration?: number;
    className?: string;
}

export function PulseAnimation({ 
    children, 
    scale = 1.05,
    duration = 2,
    className = "" 
}: PulseAnimationProps) {
    return (
        <motion.div
            className={className}
            animate={{
                scale: [1, scale, 1],
            }}
            transition={{
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );
}