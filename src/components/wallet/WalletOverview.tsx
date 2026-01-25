'use client';

import { ArrowUpRight, ArrowDownLeft, Wallet, CreditCard, Sparkles } from 'lucide-react';
import { WALLET_STATS } from '@/lib/mock-data';
import { motion } from 'framer-motion';

export function WalletOverview() {
    const { balance, income, expenses, growth } = WALLET_STATS;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Balance Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-black text-white p-8 md:p-10 flex flex-col justify-between min-h-[300px] shadow-2xl shadow-black/10 isolate group">
                {/* Animated Background Mesh */}
                <div className="absolute inset-0 z-[-1]">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-20 -right-20 w-80 h-80 bg-primary/40 rounded-full blur-[80px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            x: [0, 50, 0],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"
                    />
                </div>

                <div className="flex justify-between items-start z-10">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-white/10 backdrop-blur-md rounded-full">
                                <Sparkles className="w-4 h-4 text-yellow-300" />
                            </div>
                            <span className="text-sm font-bold text-gray-300 tracking-wide uppercase">Total Balance</span>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-5xl md:text-6xl font-bold tracking-tight"
                        >
                            ${balance.toLocaleString()}
                        </motion.h2>
                    </div>

                    <div className="hidden md:flex p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500">
                        <CreditCard className="w-8 h-8 text-white/80" />
                    </div>
                </div>

                <div className="flex gap-4 mt-8 z-10">
                    <button className="flex-1 bg-white text-black py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-transform active:scale-95">
                        <ArrowDownLeft className="w-5 h-5" />
                        Withdraw
                    </button>
                    <button className="flex-1 bg-white/10 text-white border border-white/10 backdrop-blur-md py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-transform active:scale-95">
                        <ArrowUpRight className="w-5 h-5" />
                        Deposit
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-rows-2 gap-6">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-surface rounded-[2.5rem] p-8 border border-gray-100 flex items-center justify-between shadow-sm hover:shadow-md transition-all"
                >
                    <div>
                        <p className="text-gray-500 font-bold text-sm mb-1 uppercase tracking-wider">Total Income</p>
                        <h3 className="text-3xl font-bold text-gray-900">${income.toLocaleString()}</h3>
                    </div>
                    <div className="w-16 h-16 rounded-3xl bg-green-100 flex items-center justify-center text-green-600 rotate-3">
                        <ArrowDownLeft className="w-8 h-8" />
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-surface rounded-[2.5rem] p-8 border border-gray-100 flex items-center justify-between shadow-sm hover:shadow-md transition-all"
                >
                    <div>
                        <p className="text-gray-500 font-bold text-sm mb-1 uppercase tracking-wider">Total Expenses</p>
                        <h3 className="text-3xl font-bold text-gray-900">${expenses.toLocaleString()}</h3>
                    </div>
                    <div className="w-16 h-16 rounded-3xl bg-red-100 flex items-center justify-center text-red-600 -rotate-3">
                        <ArrowUpRight className="w-8 h-8" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
