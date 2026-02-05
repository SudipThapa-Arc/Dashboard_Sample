'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { forwardRef, InputHTMLAttributes } from 'react';

interface AnimatedSearchProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

export const AnimatedSearch = forwardRef<HTMLInputElement, AnimatedSearchProps>(
    ({ placeholder = "Search...", className = "", ...props }, ref) => {
        return (
            <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
                <Search 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" 
                />
                <motion.input
                    ref={ref}
                    type="text"
                    placeholder={placeholder}
                    className={`pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
                    whileFocus={{ 
                        boxShadow: "0 0 0 4px rgba(255, 87, 34, 0.1)",
                        borderColor: "#FF5722"
                    }}
                    transition={{ duration: 0.2 }}
                    {...(props as any)}
                />
            </motion.div>
        );
    }
);

AnimatedSearch.displayName = 'AnimatedSearch';