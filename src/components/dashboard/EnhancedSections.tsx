'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock, Target, Award, Calendar, Activity, Zap, Star, ArrowUp, ArrowDown } from 'lucide-react';
import { DASHBOARD_STATS, WORK_TIME_DATA } from '@/lib/mock-data';

const QUICK_STATS = [
    {
        title: 'Total Revenue',
        value: '$124,500',
        change: '+12.5%',
        trend: 'up',
        icon: DollarSign,
        color: 'bg-green-500',
        bgColor: 'bg-green-50',
        textColor: 'text-green-600'
    },
    {
        title: 'Active Projects',
        value: '28',
        change: '+8.2%',
        trend: 'up',
        icon: Target,
        color: 'bg-blue-500',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-600'
    },
    {
        title: 'Team Members',
        value: '83',
        change: '+5.1%',
        trend: 'up',
        icon: Users,
        color: 'bg-purple-500',
        bgColor: 'bg-purple-50',
        textColor: 'text-purple-600'
    },
    {
        title: 'Avg. Response Time',
        value: '2.4h',
        change: '-15.3%',
        trend: 'down',
        icon: Clock,
        color: 'bg-orange-500',
        bgColor: 'bg-orange-50',
        textColor: 'text-orange-600'
    }
];

const RECENT_ACTIVITIES = [
    {
        id: 1,
        user: 'Sarah Chen',
        action: 'completed project',
        target: 'Mobile App Redesign',
        time: '2 minutes ago',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
        type: 'success'
    },
    {
        id: 2,
        user: 'Mike Ross',
        action: 'started working on',
        target: 'API Integration',
        time: '15 minutes ago',
        avatar: 'https://i.pravatar.cc/150?u=mike',
        type: 'info'
    },
    {
        id: 3,
        user: 'Jessica Lee',
        action: 'uploaded file to',
        target: 'Q4 Planning Docs',
        time: '1 hour ago',
        avatar: 'https://i.pravatar.cc/150?u=jessica',
        type: 'file'
    },
    {
        id: 4,
        user: 'David Kim',
        action: 'commented on',
        target: 'Design System',
        time: '2 hours ago',
        avatar: 'https://i.pravatar.cc/150?u=david',
        type: 'comment'
    }
];

const TEAM_PERFORMANCE = [
    {
        name: 'Design Team',
        efficiency: 92,
        projects: 8,
        satisfaction: 4.8,
        color: 'bg-purple-500'
    },
    {
        name: 'Engineering',
        efficiency: 88,
        projects: 12,
        satisfaction: 4.6,
        color: 'bg-blue-500'
    },
    {
        name: 'Marketing',
        efficiency: 85,
        projects: 6,
        satisfaction: 4.7,
        color: 'bg-green-500'
    },
    {
        name: 'Sales',
        efficiency: 90,
        projects: 10,
        satisfaction: 4.9,
        color: 'bg-orange-500'
    }
];

const UPCOMING_DEADLINES = [
    {
        title: 'Mobile App Launch',
        date: 'Dec 15, 2024',
        daysLeft: 10,
        priority: 'high',
        team: 'Engineering',
        progress: 75
    },
    {
        title: 'Q4 Report',
        date: 'Dec 20, 2024',
        daysLeft: 15,
        priority: 'medium',
        team: 'Management',
        progress: 45
    },
    {
        title: 'Client Presentation',
        date: 'Dec 08, 2024',
        daysLeft: 3,
        priority: 'high',
        team: 'Design',
        progress: 90
    }
];

export function QuickStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_STATS.map((stat, index) => (
                <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        y: -5
                    }}
                    transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    }}
                    className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 cursor-pointer"
                >
                    <div className="flex items-center justify-between mb-4">
                        <motion.div 
                            className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6, type: "spring" }}
                        >
                            <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                        </motion.div>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                            stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                            {stat.trend === 'up' ? (
                                <ArrowUp className="w-3 h-3 text-green-600" />
                            ) : (
                                <ArrowDown className="w-3 h-3 text-red-600" />
                            )}
                            <span className={`text-xs font-medium ${
                                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                            }`}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                </motion.div>
            ))}
        </div>
    );
}

export function RecentActivities() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-lg shadow-black/5 p-6"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Activities</h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary font-medium hover:text-primary/80 text-sm"
                >
                    View All
                </motion.button>
            </div>
            <div className="space-y-4">
                {RECENT_ACTIVITIES.map((activity, index) => (
                    <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5, backgroundColor: '#f9fafb' }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all"
                    >
                        <div className="relative">
                            <img src={activity.avatar} alt={activity.user} className="w-10 h-10 rounded-full object-cover" />
                            <motion.div
                                className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                                    activity.type === 'success' ? 'bg-green-500' :
                                    activity.type === 'info' ? 'bg-blue-500' :
                                    activity.type === 'file' ? 'bg-purple-500' :
                                    'bg-orange-500'
                                }`}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-900">
                                <span className="font-medium">{activity.user}</span>
                                <span className="text-gray-500"> {activity.action} </span>
                                <span className="font-medium text-gray-900">{activity.target}</span>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function TeamPerformance() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl shadow-lg shadow-black/5 p-6"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Team Performance</h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary font-medium hover:text-primary/80 text-sm"
                >
                    Detailed View
                </motion.button>
            </div>
            <div className="space-y-4">
                {TEAM_PERFORMANCE.map((team, index) => (
                    <motion.div
                        key={team.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className={`w-8 h-8 ${team.color} rounded-lg`}
                                    whileHover={{ rotate: 45, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900">{team.name}</h3>
                                    <p className="text-sm text-gray-500">{team.projects} active projects</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                    <span className="text-sm font-medium text-gray-900">{team.satisfaction}</span>
                                </div>
                                <p className="text-xs text-gray-500">Satisfaction</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">Efficiency</span>
                                <span className="text-sm font-medium text-gray-900">{team.efficiency}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <motion.div
                                    className={`h-2 rounded-full ${team.color}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${team.efficiency}%` }}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.8, type: "spring" }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function UpcomingDeadlines() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl shadow-lg shadow-black/5 p-6"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Deadlines</h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary font-medium hover:text-primary/80 text-sm"
                >
                    Calendar View
                </motion.button>
            </div>
            <div className="space-y-3">
                {UPCOMING_DEADLINES.map((deadline, index) => (
                    <motion.div
                        key={deadline.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                            x: 5
                        }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className={`p-4 rounded-xl border-l-4 cursor-pointer ${
                            deadline.priority === 'high' 
                                ? 'border-l-red-500 bg-red-50' 
                                : 'border-l-yellow-500 bg-yellow-50'
                        }`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 mb-1">{deadline.title}</h3>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {deadline.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        {deadline.team}
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <motion.div
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        deadline.daysLeft <= 3
                                            ? 'bg-red-100 text-red-600'
                                            : 'bg-yellow-100 text-yellow-600'
                                    }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {deadline.daysLeft} days
                                </motion.div>
                                <div className="mt-2">
                                    <div className="w-20 bg-gray-200 rounded-full h-1.5">
                                        <motion.div
                                            className={`h-1.5 rounded-full ${
                                                deadline.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                                            }`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${deadline.progress}%` }}
                                            transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}