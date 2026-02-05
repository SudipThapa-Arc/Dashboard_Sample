'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Download, Star, Users, Settings, Globe, Shield, Zap, Grid, List, Filter, MoreVertical, ExternalLink, CheckCircle, Clock, AlertTriangle, TrendingUp } from 'lucide-react';
import { AnimatedSearch } from '@/components/ui/AnimatedSearch';

const INSTALLED_APPS = [
    {
        id: '1',
        name: 'Slack',
        category: 'Communication',
        icon: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=200&q=80',
        users: 78,
        status: 'active',
        version: '4.28.184',
        lastUpdated: '2024-11-25',
        subscription: 'Premium',
        cost: '$8.75/user/month',
        rating: 4.6,
        description: 'Team communication and collaboration platform',
        integrations: 24
    },
    {
        id: '2',
        name: 'Figma',
        category: 'Design',
        icon: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=200&q=80',
        users: 25,
        status: 'active',
        version: '116.15.6',
        lastUpdated: '2024-11-28',
        subscription: 'Team',
        cost: '$15/editor/month',
        rating: 4.8,
        description: 'Collaborative interface design tool',
        integrations: 18
    },
    {
        id: '3',
        name: 'Notion',
        category: 'Productivity',
        icon: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200&q=80',
        users: 62,
        status: 'active',
        version: '2.0.34',
        lastUpdated: '2024-11-20',
        subscription: 'Plus',
        cost: '$10/user/month',
        rating: 4.7,
        description: 'All-in-one workspace for notes and docs',
        integrations: 35
    },
    {
        id: '4',
        name: 'GitHub',
        category: 'Development',
        icon: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=200&q=80',
        users: 45,
        status: 'active',
        version: '3.4.1',
        lastUpdated: '2024-11-30',
        subscription: 'Team',
        cost: '$4/user/month',
        rating: 4.9,
        description: 'Code hosting and version control platform',
        integrations: 42
    },
    {
        id: '5',
        name: 'Zoom',
        category: 'Communication',
        icon: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=200&q=80',
        users: 83,
        status: 'active',
        version: '5.16.10',
        lastUpdated: '2024-11-15',
        subscription: 'Pro',
        cost: '$14.99/host/month',
        rating: 4.5,
        description: 'Video conferencing and online meetings',
        integrations: 12
    },
    {
        id: '6',
        name: 'Linear',
        category: 'Project Management',
        icon: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80',
        users: 35,
        status: 'trial',
        version: '1.8.3',
        lastUpdated: '2024-11-29',
        subscription: 'Trial',
        cost: '$8/user/month',
        rating: 4.7,
        description: 'Issue tracking and project management',
        integrations: 28
    }
];

const MARKETPLACE_APPS = [
    {
        id: '1',
        name: 'Jira',
        category: 'Project Management',
        icon: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80',
        developer: 'Atlassian',
        price: '$7.50/user/month',
        rating: 4.4,
        reviews: 2847,
        installs: 50000,
        description: 'Advanced project tracking and management',
        features: ['Agile Boards', 'Roadmaps', 'Reports', 'Integrations'],
        trending: true
    },
    {
        id: '2',
        name: 'Miro',
        category: 'Collaboration',
        icon: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&q=80',
        developer: 'Miro',
        price: '$8/user/month',
        rating: 4.6,
        reviews: 1523,
        installs: 25000,
        description: 'Online collaborative whiteboard platform',
        features: ['Whiteboards', 'Templates', 'Real-time', 'Video Chat'],
        trending: false
    },
    {
        id: '3',
        name: 'Grammarly',
        category: 'Productivity',
        icon: 'https://images.unsplash.com/photo-1456324504439-36ccee3b3c62?auto=format&fit=crop&w=200&q=80',
        developer: 'Grammarly Inc.',
        price: '$12/user/month',
        rating: 4.5,
        reviews: 3421,
        installs: 75000,
        description: 'AI-powered writing assistant',
        features: ['Grammar Check', 'Style Suggestions', 'Tone Detection', 'Plagiarism'],
        trending: true
    },
    {
        id: '4',
        name: 'HubSpot',
        category: 'CRM',
        icon: 'https://images.unsplash.com/photo-1554224154-260325c05cc3?auto=format&fit=crop&w=200&q=80',
        developer: 'HubSpot',
        price: '$45/user/month',
        rating: 4.3,
        reviews: 892,
        installs: 15000,
        description: 'Complete CRM platform for growing teams',
        features: ['Contact Management', 'Sales Pipeline', 'Marketing', 'Analytics'],
        trending: false
    }
];

const INTEGRATIONS = [
    {
        id: '1',
        name: 'Google Workspace',
        type: 'Single Sign-On',
        status: 'active',
        connected: '2024-01-15',
        lastSync: '5 minutes ago',
        description: 'Unified login with Google accounts',
        dataShared: ['User Profiles', 'Email', 'Calendar'],
        icon: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=100&q=80'
    },
    {
        id: '2',
        name: 'Microsoft 365',
        type: 'Productivity',
        status: 'active',
        connected: '2024-02-20',
        lastSync: '1 hour ago',
        description: 'Office documents and collaboration',
        dataShared: ['Documents', 'Spreadsheets', 'Presentations'],
        icon: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=100&q=80'
    },
    {
        id: '3',
        name: 'Salesforce',
        type: 'CRM',
        status: 'error',
        connected: '2024-03-10',
        lastSync: '3 days ago',
        description: 'Customer relationship management',
        dataShared: ['Contacts', 'Deals', 'Tasks'],
        icon: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=100&q=80'
    },
    {
        id: '4',
        name: 'Slack',
        type: 'Communication',
        status: 'active',
        connected: '2024-01-05',
        lastSync: '2 minutes ago',
        description: 'Team messaging and notifications',
        dataShared: ['Messages', 'Channels', 'Files'],
        icon: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=100&q=80'
    },
    {
        id: '5',
        name: 'Zapier',
        type: 'Automation',
        status: 'active',
        connected: '2024-04-01',
        lastSync: '30 minutes ago',
        description: 'Workflow automation and app integration',
        dataShared: ['Workflows', 'Triggers', 'Actions'],
        icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80'
    }
];

const APP_STATS = {
    totalApps: 24,
    activeIntegrations: 15,
    monthlyCost: '$2,847',
    activeUsers: 83,
    apiCalls: '2.4M',
    avgRating: 4.6
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'active': return 'bg-green-100 text-green-600';
        case 'trial': return 'bg-yellow-100 text-yellow-600';
        case 'inactive': return 'bg-gray-100 text-gray-600';
        case 'error': return 'bg-red-100 text-red-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

export default function AppsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Apps</h1>
                    <p className="text-gray-500 mt-1">Manage applications, integrations, and workplace tools</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                        <Filter className="w-5 h-5" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg">
                        <Plus className="w-5 h-5" />
                        Install App
                    </button>
                </div>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Total Apps</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{APP_STATS.totalApps}</p>
                        </div>
                        <Grid className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Integrations</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{APP_STATS.activeIntegrations}</p>
                        </div>
                        <Zap className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Monthly Cost</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{APP_STATS.monthlyCost}</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Active Users</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{APP_STATS.activeUsers}</p>
                        </div>
                        <Users className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">API Calls</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{APP_STATS.apiCalls}</p>
                        </div>
                        <Globe className="w-8 h-8 text-cyan-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Avg Rating</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{APP_STATS.avgRating}</p>
                        </div>
                        <Star className="w-8 h-8 text-yellow-500" />
                    </div>
                </div>
            </motion.div>

            {/* Installed Apps Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Installed Applications</h2>
                    <div className="flex items-center gap-4">
                        <AnimatedSearch 
                            placeholder="Search apps..."
                            className="w-64"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                    {INSTALLED_APPS.map((app, index) => (
                        <motion.div
                            key={app.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            className="p-4 rounded-2xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                                        <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{app.name}</h3>
                                        <p className="text-sm text-gray-500">{app.category}</p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{app.description}</p>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Users</span>
                                    <span className="text-sm font-medium text-gray-900">{app.users}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Status</span>
                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(app.status)}`}>
                                        {app.status}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Cost</span>
                                    <span className="text-sm font-medium text-gray-900">{app.cost}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Rating</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                        <span className="text-sm font-medium">{app.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Marketplace Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">App Marketplace</h2>
                    <button className="text-primary font-medium hover:text-primary/80">Browse All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-80 overflow-y-auto">
                    {MARKETPLACE_APPS.map((app, index) => (
                        <motion.div
                            key={app.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            className="p-4 rounded-2xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                                    <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-gray-900">{app.name}</h3>
                                        {app.trending && (
                                            <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded-full font-medium">
                                                Trending
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500">{app.category} by {app.developer}</p>
                                    <p className="text-sm text-gray-600 mt-2">{app.description}</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                                <span className="text-sm font-medium">{app.rating}</span>
                                                <span className="text-xs text-gray-400">({app.reviews})</span>
                                            </div>
                                            <span className="text-sm font-medium text-gray-900">{app.price}</span>
                                        </div>
                                        <button className="flex items-center gap-1 px-3 py-1 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90">
                                            <Download className="w-3 h-3" />
                                            Install
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {app.features.slice(0, 2).map((feature) => (
                                            <span key={feature} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Integrations Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Integrations</h2>
                    <button className="text-primary font-medium hover:text-primary/80">Configure</button>
                </div>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                    {INTEGRATIONS.map((integration, index) => (
                        <motion.div
                            key={integration.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                                    <img src={integration.icon} alt={integration.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                                    <p className="text-sm text-gray-500">{integration.type}</p>
                                    <p className="text-xs text-gray-400 mt-1">{integration.description}</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(integration.status)}`}>
                                    {integration.status}
                                </span>
                                <p className="text-xs text-gray-500 mt-1">Sync: {integration.lastSync}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Connected {integration.connected}</p>
                                <div className="flex flex-wrap gap-1 mt-1 justify-end">
                                    {integration.dataShared.slice(0, 2).map((data) => (
                                        <span key={data} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                            {data}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}