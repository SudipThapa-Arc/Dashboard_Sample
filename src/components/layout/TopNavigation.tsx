'use client';

import Link from 'next/link';
import { Search, Bell, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { USER_PROFILE } from '@/lib/mock-data';
import { motion } from 'framer-motion';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/messages', label: 'Messages' },
    { href: '/discover', label: 'Discover' },
    { href: '/wallet', label: 'Wallet' },
    { href: '/projects', label: 'Projects' },
];

export function TopNavigation() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-surface text-foreground sticky top-0 z-50 border-b border-gray-100/50 backdrop-blur-xl">
            {/* Left: Logo */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
            >
                <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30"
                >
                    T
                </motion.div>
                <span className="font-bold text-xl tracking-tight hidden md:block">Twisty</span>
            </motion.div>

            {/* Center: Nav Links */}
            <div className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((link, i) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="relative px-4 py-2"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "text-sm font-bold transition-colors relative z-10",
                                link.href === '/' ? "text-primary" : "text-gray-500 hover:text-gray-900"
                            )}
                        >
                            {link.label}
                        </motion.span>
                        {link.href === '/' && (
                            <motion.div
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-primary/10 rounded-full z-0"
                            />
                        )}
                    </Link>
                ))}
            </div>

            {/* Right: Actions */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
            >
                <div className="relative hidden sm:block">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-48 transition-all focus:w-64"
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 relative hover:bg-gray-50 rounded-full transition-colors"
                >
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
                </motion.button>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md cursor-pointer"
                >
                    <img src={USER_PROFILE.avatar} alt="User" className="w-full h-full object-cover" />
                </motion.div>
            </motion.div>
        </nav>
    );
}
