'use client';

import { motion } from 'framer-motion';
import { Search, Plus, MoreVertical, Mail, Phone, MapPin, Star, Users, Building, UserCheck } from 'lucide-react';
import { USER_PROFILE } from '@/lib/mock-data';

const TEAM_MEMBERS = [
    { id: '1', name: 'Sarah Chen', role: 'UX Designer', department: 'Design', email: 'sarah@company.com', phone: '+1 234-567-8901', location: 'San Francisco', avatar: 'https://i.pravatar.cc/150?u=sarah', status: 'online', rating: 4.8 },
    { id: '2', name: 'Mike Ross', role: 'Frontend Developer', department: 'Engineering', email: 'mike@company.com', phone: '+1 234-567-8902', location: 'New York', avatar: 'https://i.pravatar.cc/150?u=mike', status: 'online', rating: 4.9 },
    { id: '3', name: 'Jessica Lee', role: 'Product Manager', department: 'Product', email: 'jessica@company.com', phone: '+1 234-567-8903', location: 'London', avatar: 'https://i.pravatar.cc/150?u=jessica', status: 'offline', rating: 4.7 },
    { id: '4', name: 'David Kim', role: 'Backend Developer', department: 'Engineering', email: 'david@company.com', phone: '+1 234-567-8904', location: 'Seoul', avatar: 'https://i.pravatar.cc/150?u=david', status: 'online', rating: 4.6 },
    { id: '5', name: 'Emily Johnson', role: 'Marketing Lead', department: 'Marketing', email: 'emily@company.com', phone: '+1 234-567-8905', location: 'Chicago', avatar: 'https://i.pravatar.cc/150?u=emily', status: 'online', rating: 4.8 },
    { id: '6', name: 'Alex Turner', role: 'DevOps Engineer', department: 'Engineering', email: 'alex@company.com', phone: '+1 234-567-8906', location: 'Austin', avatar: 'https://i.pravatar.cc/150?u=alex', status: 'offline', rating: 4.5 },
];

const DEPARTMENTS = [
    { name: 'Engineering', members: 28, budget: '$2.5M', growth: '+15%', color: 'bg-blue-500' },
    { name: 'Design', members: 12, budget: '$800K', growth: '+8%', color: 'bg-purple-500' },
    { name: 'Product', members: 8, budget: '$600K', growth: '+12%', color: 'bg-green-500' },
    { name: 'Marketing', members: 15, budget: '$1.2M', growth: '+20%', color: 'bg-orange-500' },
    { name: 'Sales', members: 20, budget: '$1.8M', growth: '+18%', color: 'bg-red-500' },
];

const ROLES = [
    { title: 'Frontend Developer', count: 12, avgSalary: '$120K', demand: 'High' },
    { title: 'UX Designer', count: 8, avgSalary: '$110K', demand: 'Medium' },
    { title: 'Backend Developer', count: 10, avgSalary: '$130K', demand: 'High' },
    { title: 'Product Manager', count: 5, avgSalary: '$140K', demand: 'Medium' },
    { title: 'DevOps Engineer', count: 6, avgSalary: '$125K', demand: 'High' },
];

export default function PeoplePage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">People</h1>
                    <p className="text-gray-500 mt-1">Manage your team and organization structure</p>
                </div>
                <motion.button 
                    whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 30px rgba(255, 87, 34, 0.3)",
                        backgroundColor: "#FF5722"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium shadow-lg"
                >
                    <motion.div
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Plus className="w-5 h-5" />
                    </motion.div>
                    Add Member
                </motion.button>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
                <motion.div 
                    className="bg-white p-6 rounded-3xl shadow-lg shadow-black/5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        y: -5
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <motion.p 
                                className="text-gray-500 text-sm"
                                whileHover={{ color: "#111827" }}
                                transition={{ duration: 0.2 }}
                            >
                                Total Employees
                            </motion.p>
                            <motion.p 
                                className="text-2xl font-bold text-gray-900 mt-1"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                83
                            </motion.p>
                        </div>
                        <motion.div 
                            className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
                            whileHover={{ 
                                rotate: 360,
                                backgroundColor: "#2563eb"
                            }}
                            transition={{ duration: 0.6, type: "spring" }}
                        >
                            <Users className="w-6 h-6 text-blue-600" />
                        </motion.div>
                    </div>
                </motion.div>
                <div className="bg-white p-6 rounded-3xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Departments</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">5</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <Building className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">New Hires</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <UserCheck className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Avg Satisfaction</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">4.8</p>
                        </div>
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <Star className="w-6 h-6 text-orange-600" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Departments Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Departments</h2>
                    <button className="text-primary font-medium hover:text-primary/80">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {DEPARTMENTS.map((dept, index) => (
                        <motion.div
                            key={dept.name}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{ 
                                scale: 1.05, 
                                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                y: -5
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ 
                                delay: 0.3 + index * 0.05,
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                            className="p-4 rounded-2xl border border-gray-200 hover:border-gray-300 cursor-pointer bg-white"
                        >
                            <motion.div 
                                className={`w-10 h-10 ${dept.color} rounded-full mb-3`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6, type: "spring" }}
                            />
                            <h3 className="font-semibold text-gray-900">{dept.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">{dept.members} members</p>
                            <p className="text-xs text-gray-400 mt-1">{dept.budget} budget</p>
                            <p className="text-xs font-medium text-green-600 mt-2">{dept.growth} growth</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Team Members Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Team Members</h2>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search members..."
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                    {TEAM_MEMBERS.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ 
                                scale: 1.03,
                                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                                y: -5
                            }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ 
                                delay: 0.4 + index * 0.05,
                                type: "spring",
                                stiffness: 400,
                                damping: 25
                            }}
                            className="p-4 rounded-2xl border border-gray-200 hover:border-gray-300 bg-white"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full object-cover" />
                                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${member.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{member.name}</h3>
                                        <p className="text-sm text-gray-500">{member.role}</p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="mt-3 space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Mail className="w-4 h-4" />
                                    <span>{member.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <MapPin className="w-4 h-4" />
                                    <span>{member.location}</span>
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                        <span className="text-sm font-medium">{member.rating}</span>
                                    </div>
                                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{member.department}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Roles Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Roles & Positions</h2>
                    <button className="text-primary font-medium hover:text-primary/80">Manage Roles</button>
                </div>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                    {ROLES.map((role, index) => (
                        <motion.div
                            key={role.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:bg-gray-50"
                        >
                            <div>
                                <h3 className="font-semibold text-gray-900">{role.title}</h3>
                                <p className="text-sm text-gray-500">{role.count} positions</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-gray-900">{role.avgSalary}</p>
                                <p className={`text-sm font-medium ${role.demand === 'High' ? 'text-green-600' : 'text-yellow-600'}`}>
                                    {role.demand} Demand
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}