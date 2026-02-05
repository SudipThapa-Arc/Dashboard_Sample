'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface PageLoaderProps {
    isLoading: boolean;
}

export function PageLoader({ isLoading }: PageLoaderProps) {
    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
            >
                <Loader2 className="w-6 h-6 text-white" />
            </motion.div>
        </motion.div>
    );
}