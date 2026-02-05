'use client';

import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Calendar, ArrowUp } from 'lucide-react';

const REVENUE_DATA = [
    { month: 'Jan', revenue: 45000, growth: 12 },
    { month: 'Feb', revenue: 52000, growth: 15 },
    { month: 'Mar', revenue: 48000, growth: -8 },
    { month: 'Apr', revenue: 61000, growth: 27 },
    { month: 'May', revenue: 58000, growth: -5 },
    { month: 'Jun', revenue: 67000, growth: 16 },
    { month: 'Jul', revenue: 72000, growth: 7 },
    { month: 'Aug', revenue: 69000, growth: -4 },
    { month: 'Sep', revenue: 75000, growth: 9 },
    { month: 'Oct', revenue: 82000, growth: 9 },
    { month: 'Nov', revenue: 89000, growth: 8 },
    { month: 'Dec', revenue: 95000, growth: 7 }
];

const REVENUE_METRICS = [
    { label: 'Total Revenue', value: '$769,000', change: '+18.2%', trend: 'up' },
    { label: 'Monthly Average', value: '$64,083', change: '+12.5%', trend: 'up' },
    { label: 'Best Month', value: 'December', value2: '$95,000', change: '+7%', trend: 'up' },
    { label: 'Growth Rate', value: '18.2%', change: '+3.1%', trend: 'up' }
];

export function RevenueChart() {
    const maxRevenue = Math.max(...REVENUE_DATA.map(d => d.revenue));
    const currentMonthRevenue = REVENUE_DATA[REVENUE_DATA.length - 1].revenue;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-lg shadow-black/5 p-6 lg:col-span-8"
        >
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Revenue Overview</h2>
                    <p className="text-sm text-gray-500">Monthly revenue tracking and analysis</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                    <Calendar className="w-4 h-4" />
                    Export Report
                </motion.button>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {REVENUE_METRICS.map((metric, index) => (
                    <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        className="p-3 rounded-xl bg-gray-50 border border-gray-200"
                    >
                        <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
                        <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                        {metric.value2 && (
                            <p className="text-xs text-gray-600">{metric.value2}</p>
                        )}
                        <div className="flex items-center gap-1 mt-1">
                            <ArrowUp className="w-3 h-3 text-green-500" />
                            <span className="text-xs font-medium text-green-600">{metric.change}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Chart */}
            <div className="relative h-64 mb-4">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 25, 50, 75, 100].map((percent) => (
                        <div key={percent} className="border-b border-gray-100 w-full" />
                    ))}
                </div>

                {/* Bars */}
                <div className="relative h-full flex items-end justify-between gap-2 px-2">
                    {REVENUE_DATA.map((data, index) => {
                        const height = (data.revenue / maxRevenue) * 100;
                        const isGrowth = data.growth > 0;
                        
                        return (
                            <motion.div
                                key={data.month}
                                className="flex-1 relative group"
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{ delay: 0.6 + index * 0.02, type: "spring", stiffness: 300 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Bar */}
                                <motion.div
                                    className={`w-full rounded-t-lg ${
                                        data.month === 'Dec' 
                                            ? 'bg-primary' 
                                            : isGrowth 
                                                ? 'bg-green-500' 
                                                : 'bg-red-500'
                                    }`}
                                    whileHover={{ 
                                        opacity: 0.8,
                                        scaleY: 1.02
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                                
                                {/* Tooltip */}
                                <motion.div
                                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                    initial={{ opacity: 0, y: 5 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                >
                                    <div className="text-center">
                                        <div className="font-semibold">${data.revenue.toLocaleString()}</div>
                                        <div className={`text-xs ${isGrowth ? 'text-green-300' : 'text-red-300'}`}>
                                            {data.growth > 0 ? '+' : ''}{data.growth}%
                                        </div>
                                    </div>
                                </motion.div>
                                
                                {/* Month label */}
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
                                    {data.month}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}