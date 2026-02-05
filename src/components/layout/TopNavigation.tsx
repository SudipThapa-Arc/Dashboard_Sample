'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Bell, Menu, Settings, Home, Users, Briefcase, Smartphone, DollarSign, Calendar, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { USER_PROFILE } from '@/lib/mock-data';
import { motion } from 'framer-motion';

const NAV_LINKS = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/people', label: 'People', icon: Users },
    { href: '/hiring', label: 'Hiring', icon: Briefcase },
    { href: '/devices', label: 'Devices', icon: Smartphone },
    { href: '/apps', label: 'Apps', icon: Menu },
    { href: '/salary', label: 'Salary', icon: DollarSign },
    { href: '/calendar', label: 'Calendar', icon: Calendar },
    { href: '/reviews', label: 'Reviews', icon: Star },
];

export function TopNavigation() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-lg">
            <div className="max-w-[1440px] mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left: Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3"
                    >
                        <motion.div 
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-orange-600 rounded-xl shadow-lg"
                            whileHover={{ 
                                boxShadow: "0 8px 30px rgba(255, 87, 34, 0.3)",
                                scale: 1.05
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                <span className="font-bold text-lg text-primary">T</span>
                            </div>
                            <span className="font-bold text-lg text-white">Twisty</span>
                        </motion.div>
                    </motion.div>

                    {/* Center: Nav Links */}
                    <div className="hidden lg:flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
                        {NAV_LINKS.map((link, i) => {
                            const isActive = pathname === link.href;
                            return (
                                <motion.div key={link.href} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all relative",
                                            isActive
                                                ? "bg-white text-primary shadow-md"
                                                : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-white rounded-lg shadow-md"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center gap-2">
                                            <link.icon className="w-4 h-4" />
                                            <span>{link.label}</span>
                                        </span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right: Search & Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        {/* Search Bar */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileFocus={{ scale: 1.02 }}
                            className="relative"
                        >
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all w-48 lg:w-64"
                            />
                        </motion.div>

                        {/* Notification Button */}
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 15 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-primary hover:bg-white transition-colors"
                        >
                            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}>
                                <Bell className="w-5 h-5" />
                            </motion.div>
                            <motion.span 
                                className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            />
                        </motion.button>

                        {/* Settings Button */}
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 90 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-primary hover:bg-white transition-colors"
                        >
                            <Settings className="w-5 h-5" />
                        </motion.button>

                        {/* User Profile */}
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-primary to-orange-600 cursor-pointer"
                        >
                            <img src={USER_PROFILE.avatar} alt="User" className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}
