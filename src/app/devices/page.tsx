'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Monitor, Smartphone, Tablet, Laptop, Server, Wifi, Battery, AlertTriangle, CheckCircle, Clock, Wrench, Package, Filter, MoreVertical, Activity, Shield, Settings } from 'lucide-react';

const HARDWARE_INVENTORY = [
    {
        id: '1',
        name: 'MacBook Pro 16"',
        type: 'Laptop',
        model: 'M3 Max',
        serial: 'MBP-2024-001',
        user: 'Sarah Chen',
        department: 'Design',
        status: 'active',
        health: 'excellent',
        purchaseDate: '2024-01-15',
        warranty: '2026-01-15',
        lastMaintenance: '2024-11-01',
        location: 'San Francisco',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=200&q=80'
    },
    {
        id: '2',
        name: 'Dell XPS 15',
        type: 'Laptop',
        model: '9530',
        serial: 'DXP-2023-042',
        user: 'Mike Ross',
        department: 'Engineering',
        status: 'active',
        health: 'good',
        purchaseDate: '2023-06-20',
        warranty: '2025-06-20',
        lastMaintenance: '2024-10-15',
        location: 'New York',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=200&q=80'
    },
    {
        id: '3',
        name: 'iPhone 15 Pro',
        type: 'Smartphone',
        model: 'A3108',
        serial: 'IP15-2024-088',
        user: 'Jessica Lee',
        department: 'Product',
        status: 'active',
        health: 'excellent',
        purchaseDate: '2024-09-01',
        warranty: '2025-09-01',
        lastMaintenance: '2024-11-20',
        location: 'London',
        image: 'https://images.unsplash.com/photo-1511707171634-cf48c722ee56?auto=format&fit=crop&w=200&q=80'
    },
    {
        id: '4',
        name: 'iPad Pro 12.9"',
        type: 'Tablet',
        model: 'M4',
        serial: 'IPP-2024-023',
        user: 'David Kim',
        department: 'Engineering',
        status: 'maintenance',
        health: 'fair',
        purchaseDate: '2024-03-10',
        warranty: '2026-03-10',
        lastMaintenance: '2024-12-01',
        location: 'Seoul',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=200&q=80'
    },
    {
        id: '5',
        name: 'Dell UltraSharp 27"',
        type: 'Monitor',
        model: 'U2723DE',
        serial: 'MON-2023-156',
        user: 'Emily Johnson',
        department: 'Marketing',
        status: 'active',
        health: 'good',
        purchaseDate: '2023-08-15',
        warranty: '2025-08-15',
        lastMaintenance: '2024-09-20',
        location: 'Chicago',
        image: 'https://images.unsplash.com/photo-1527869252485-39127c5e5485?auto=format&fit=crop&w=200&q=80'
    },
];

const SOFTWARE_LICENSES = [
    {
        id: '1',
        name: 'Adobe Creative Cloud',
        type: 'Design Suite',
        licenses: 25,
        used: 18,
        cost: '$599/year',
        renewal: '2025-01-15',
        status: 'active',
        department: 'Design'
    },
    {
        id: '2',
        name: 'Microsoft Office 365',
        type: 'Productivity Suite',
        licenses: 100,
        used: 78,
        cost: '$12/user/month',
        renewal: '2025-03-01',
        status: 'active',
        department: 'All'
    },
    {
        id: '3',
        name: 'JetBrains IDEs',
        type: 'Development Tools',
        licenses: 30,
        used: 22,
        cost: '$499/user/year',
        renewal: '2025-02-28',
        status: 'active',
        department: 'Engineering'
    },
    {
        id: '4',
        name: 'Figma Team',
        type: 'Design Tool',
        licenses: 50,
        used: 35,
        cost: '$45/editor/month',
        renewal: '2025-01-01',
        status: 'active',
        department: 'Design'
    },
    {
        id: '5',
        name: 'Zoom Pro',
        type: 'Communication',
        licenses: 83,
        used: 83,
        cost: '$14.99/host/month',
        renewal: '2025-06-15',
        status: 'active',
        department: 'All'
    },
];

const MAINTENANCE_SCHEDULE = [
    {
        id: '1',
        device: 'iPad Pro 12.9"',
        deviceType: 'Tablet',
        user: 'David Kim',
        type: 'Screen Replacement',
        scheduledDate: '2024-12-05',
        estimatedTime: '2 hours',
        priority: 'High',
        status: 'scheduled',
        technician: 'John Smith',
        cost: '$299'
    },
    {
        id: '2',
        device: 'MacBook Pro 16"',
        deviceType: 'Laptop',
        user: 'Sarah Chen',
        type: 'Routine Checkup',
        scheduledDate: '2024-12-10',
        estimatedTime: '1 hour',
        priority: 'Medium',
        status: 'scheduled',
        technician: 'Mike Davis',
        cost: '$0'
    },
    {
        id: '3',
        device: 'Dell XPS 15',
        deviceType: 'Laptop',
        user: 'Mike Ross',
        type: 'SSD Upgrade',
        scheduledDate: '2024-12-12',
        estimatedTime: '3 hours',
        priority: 'Low',
        status: 'pending',
        technician: 'Sarah Wilson',
        cost: '$450'
    },
    {
        id: '4',
        device: 'iPhone 15 Pro',
        deviceType: 'Smartphone',
        user: 'Jessica Lee',
        type: 'Battery Replacement',
        scheduledDate: '2024-12-08',
        estimatedTime: '30 mins',
        priority: 'Medium',
        status: 'confirmed',
        technician: 'Tom Brown',
        cost: '$89'
    },
];

const DEVICE_STATS = {
    totalDevices: 156,
    activeDevices: 142,
    maintenanceDevices: 8,
    retiredDevices: 6,
    softwareLicenses: 45,
    upcomingMaintenance: 12,
    monthlyCost: '$12,450',
    healthScore: '94%'
};

const getDeviceIcon = (type: string) => {
    switch (type) {
        case 'Laptop': return Laptop;
        case 'Smartphone': return Smartphone;
        case 'Tablet': return Tablet;
        case 'Monitor': return Monitor;
        case 'Server': return Server;
        default: return Package;
    }
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'active': return 'bg-green-100 text-green-600';
        case 'maintenance': return 'bg-yellow-100 text-yellow-600';
        case 'retired': return 'bg-red-100 text-red-600';
        case 'scheduled': return 'bg-blue-100 text-blue-600';
        case 'confirmed': return 'bg-purple-100 text-purple-600';
        case 'pending': return 'bg-gray-100 text-gray-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

const getHealthColor = (health: string) => {
    switch (health) {
        case 'excellent': return 'bg-green-100 text-green-600';
        case 'good': return 'bg-blue-100 text-blue-600';
        case 'fair': return 'bg-yellow-100 text-yellow-600';
        case 'poor': return 'bg-red-100 text-red-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

export default function DevicesPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Devices</h1>
                    <p className="text-gray-500 mt-1">Manage hardware inventory, software licenses, and maintenance</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                        <Filter className="w-5 h-5" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg">
                        <Plus className="w-5 h-5" />
                        Add Device
                    </button>
                </div>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                <div className="bg-white p-6 rounded-3xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Total Devices</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{DEVICE_STATS.totalDevices}</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Package className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Active Devices</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{DEVICE_STATS.activeDevices}</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">In Maintenance</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{DEVICE_STATS.maintenanceDevices}</p>
                        </div>
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Wrench className="w-6 h-6 text-yellow-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Health Score</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{DEVICE_STATS.healthScore}</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <Activity className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Hardware Inventory Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Hardware Inventory</h2>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search devices..."
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                    {HARDWARE_INVENTORY.map((device, index) => {
                        const DeviceIcon = getDeviceIcon(device.type);
                        return (
                            <motion.div
                                key={device.id}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                whileHover={{ 
                                    scale: 1.03,
                                    boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                                    y: -8,
                                    borderColor: "#FF5722"
                                }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ 
                                    delay: 0.3 + index * 0.05,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25
                                }}
                                className="p-4 rounded-2xl border border-gray-200 bg-white cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                                            <img src={device.image} alt={device.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{device.name}</h3>
                                            <p className="text-sm text-gray-500">{device.model}</p>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">User</span>
                                        <span className="text-sm font-medium text-gray-900">{device.user}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">Department</span>
                                        <span className="text-sm text-gray-600">{device.department}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">Status</span>
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(device.status)}`}>
                                            {device.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">Health</span>
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getHealthColor(device.health)}`}>
                                            {device.health}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">Warranty</span>
                                        <span className="text-sm text-gray-600">{device.warranty}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Software Licenses Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Software Licenses</h2>
                    <button className="text-primary font-medium hover:text-primary/80">Manage Licenses</button>
                </div>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                    {SOFTWARE_LICENSES.map((software, index) => (
                        <motion.div
                            key={software.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{software.name}</h3>
                                    <p className="text-sm text-gray-500">{software.type} • {software.department}</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-blue-500 h-2 rounded-full" 
                                            style={{ width: `${(software.used / software.licenses) * 100}%` }}
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">
                                        {software.used}/{software.licenses}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{software.cost}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Renews {software.renewal}</p>
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(software.status)}`}>
                                    {software.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Maintenance Schedule Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Maintenance Schedule</h2>
                    <button className="text-primary font-medium hover:text-primary/80">Schedule Maintenance</button>
                </div>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                    {MAINTENANCE_SCHEDULE.map((maintenance, index) => (
                        <motion.div
                            key={maintenance.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <Wrench className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{maintenance.device}</h3>
                                    <p className="text-sm text-gray-500">{maintenance.type} • {maintenance.user}</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-medium text-gray-900">{maintenance.scheduledDate}</p>
                                <p className="text-sm text-gray-500">{maintenance.estimatedTime}</p>
                            </div>
                            <div className="text-center">
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                    maintenance.priority === 'High' ? 'bg-red-100 text-red-600' :
                                    maintenance.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                                    'bg-green-100 text-green-600'
                                }`}>
                                    {maintenance.priority}
                                </span>
                                <p className="text-sm text-gray-600 mt-1">{maintenance.technician}</p>
                            </div>
                            <div className="text-right">
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(maintenance.status)}`}>
                                    {maintenance.status}
                                </span>
                                <p className="text-sm font-medium text-gray-900 mt-1">{maintenance.cost}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}