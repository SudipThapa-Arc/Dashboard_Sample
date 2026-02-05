'use client';

import { motion } from 'framer-motion';
import { Activity, Target, Zap, Clock, TrendingUp, Award, BarChart3, Users } from 'lucide-react';

const PRODUCTIVITY_METRICS = [
    {
        title: 'Productivity Score',
        value: 87,
        target: 90,
        unit: '%',
        icon: Activity,
        color: 'bg-blue-500',
        trend: '+5.2%',
        description: 'Overall team productivity'
    },
    {
        title: 'Tasks Completed',
        value: 342,
        target: 400,
        unit: '',
        icon: Target,
        color: 'bg-green-500',
        trend: '+12.8%',
        description: 'Tasks this month'
    },
    {
        title: 'Efficiency Rate',
        value: 92,
        target: 85,
        unit: '%',
        icon: Zap,
        color: 'bg-yellow-500',
        trend: '+3.1%',
        description: 'Time utilization'
    },
    {
        title: 'Focus Time',
        value: 6.2,
        target: 7,
        unit: 'h',
        icon: Clock,
        color: 'bg-purple-500',
        trend: '+8.5%',
        description: 'Daily average'
    }
];

const WEEKLY_PRODUCTIVITY = [
    { day: 'Mon', score: 85, tasks: 52 },
    { day: 'Tue', score: 92, tasks: 58 },
    { day: 'Wed', score: 78, tasks: 45 },
    { day: 'Thu', score: 88, tasks: 61 },
    { day: 'Fri', score: 95, tasks: 72 },
    { day: 'Sat', score: 65, tasks: 28 },
    { day: 'Sun', score: 45, tasks: 26 }
];

const TEAM_LEADERS = [
    {
        name: 'Sarah Chen',
        role: 'UX Designer',
        score: 94,
        tasks: 68,
        efficiency: 96,
        avatar: 'https://i.pravatar.cc/150?u=sarah',
        badge: '🏆 Top Performer'
    },
    {
        name: 'Mike Ross',
        role: 'Frontend Dev',
        score: 89,
        tasks: 72,
        efficiency: 91,
        avatar: 'https://i.pravatar.cc/150?u=mike',
        badge: '⚡ Most Efficient'
    },
    {
        name: 'Jessica Lee',
        role: 'Product Manager',
        score: 87,
        tasks: 64,
        efficiency: 88,
        avatar: 'https://i.pravatar.cc/150?u=jessica',
        badge: '🎯 Goal Crusher'
    }
];

export function ProductivityInsights() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl shadow-lg shadow-black/5 p-6 lg:col-span-4"
        >
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Productivity Insights</h2>
                    <p className="text-sm text-gray-500">Team performance metrics</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05, rotate: 180 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                    <BarChart3 className="w-5 h-5 text-gray-600" />
                </motion.button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                {PRODUCTIVITY_METRICS.map((metric, index) => (
                    <motion.div
                        key={metric.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                        }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="p-3 rounded-xl border border-gray-200 hover:border-gray-300"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <motion.div
                                className={`w-8 h-8 ${metric.color} rounded-lg flex items-center justify-center`}
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.6, type: "spring" }}
                            >
                                <metric.icon className="w-4 h-4 text-white" />
                            </motion.div>
                            <motion.div
                                className={`text-xs px-2 py-1 rounded-full font-medium ${
                                    metric.trend.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                }`}
                                whileHover={{ scale: 1.1 }}
                            >
                                {metric.trend}
                            </motion.div>
                        </div>
                        <div>
                            <p className="text-lg font-bold text-gray-900">
                                {metric.value}
                                <span className="text-sm text-gray-500 font-normal">{metric.unit}</span>
                            </p>
                            <p className="text-xs text-gray-500">{metric.description}</p>
                        </div>
                        {/* Progress indicator */}
                        <div className="mt-2">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <motion.div
                                    className={`h-1.5 rounded-full ${
                                        metric.value >= metric.target ? 'bg-green-500' : 'bg-yellow-500'
                                    }`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Weekly Chart */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Weekly Overview</h3>
                <div className="flex items-end justify-between h-24 gap-1">
                    {WEEKLY_PRODUCTIVITY.map((day, index) => (
                        <motion.div
                            key={day.day}
                            className="flex-1 relative group"
                            initial={{ height: 0 }}
                            animate={{ height: `${(day.score / 100) * 100}%` }}
                            transition={{ delay: 0.7 + index * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div
                                className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t"
                                whileHover={{ opacity: 0.8 }}
                            />
                            <motion.div
                                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {day.score}% • {day.tasks} tasks
                            </motion.div>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                                {day.day}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Team Leaders */}
            <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Team Leaders</h3>
                <div className="space-y-2">
                    {TEAM_LEADERS.map((leader, index) => (
                        <motion.div
                            key={leader.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ 
                                x: 5,
                                backgroundColor: '#f9fafb'
                            }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            className="flex items-center gap-3 p-2 rounded-lg"
                        >
                            <img src={leader.avatar} alt={leader.name} className="w-8 h-8 rounded-full object-cover" />
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-medium text-gray-900">{leader.name}</p>
                                    <span className="text-xs">{leader.badge}</span>
                                </div>
                                <p className="text-xs text-gray-500">{leader.role}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-gray-900">{leader.score}</p>
                                <p className="text-xs text-gray-500">{leader.tasks} tasks</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}