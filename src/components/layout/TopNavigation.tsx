'use client';

import Link from 'next/link';
import { Search, Bell, Menu, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { USER_PROFILE } from '@/lib/mock-data';
import { motion } from 'framer-motion';

const NAV_LINKS = [
    { href: '/', label: 'Dashboard' },
    { href: '/people', label: 'People' },
    { href: '/hiring', label: 'Hiring' },
    { href: '/devices', label: 'Devices' },
    { href: '/apps', label: 'Apps' },
    { href: '/salary', label: 'Salary' },
    { href: '/calendar', label: 'Calendar' },
    { href: '/reviews', label: 'Reviews' },
];

export function TopNavigation() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-background text-foreground sticky top-0 z-50">
            {/* Left: Logo */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
            >
                <div className="border border-gray-900 rounded-full px-5 py-2 flex items-center justify-center bg-white shadow-sm">
                    <span className="font-medium text-lg tracking-tight text-gray-900">Twisty</span>
                </div>
            </motion.div>

            {/* Center: Nav Links */}
            <div className="hidden xl:flex items-center gap-2 bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-200/50">
                {NAV_LINKS.map((link, i) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all relative",
                            link.href === '/'
                                ? "bg-gray-900 text-white shadow-md"
                                : "text-gray-500 hover:text-gray-900 hover:bg-white/80"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Right: Actions */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
            >
                <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                    <Settings className="w-4 h-4" />
                    <span>Setting</span>
                </button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors shadow-sm relative"
                >
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full ring-2 ring-white" />
                </motion.button>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
                >
                    <img src={USER_PROFILE.avatar} alt="User" className="w-full h-full object-cover" />
                </motion.div>
            </motion.div>
        </nav>
    );
}
