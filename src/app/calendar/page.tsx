'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Calendar, Clock, Users, MapPin, Video, Phone, AlertTriangle, CheckCircle, Filter, MoreVertical, ChevronLeft, ChevronRight, Bell, Star, UserCircle } from 'lucide-react';

const UPCOMING_EVENTS = [
    {
        id: '1',
        title: 'Q4 Product Review',
        type: 'Meeting',
        date: '2024-12-05',
        time: '2:00 PM - 3:30 PM',
        duration: '1h 30m',
        attendees: 12,
        location: 'Conference Room A',
        organizer: 'Jessica Lee',
        status: 'confirmed',
        priority: 'high',
        description: 'Quarterly product strategy review and planning',
        category: 'product'
    },
    {
        id: '2',
        title: 'Design Team Standup',
        type: 'Recurring',
        date: '2024-12-05',
        time: '10:00 AM - 10:30 AM',
        duration: '30m',
        attendees: 8,
        location: 'Virtual',
        organizer: 'Sarah Chen',
        status: 'confirmed',
        priority: 'medium',
        description: 'Daily design team sync and progress update',
        category: 'design'
    },
    {
        id: '3',
        title: 'Client Presentation',
        type: 'Meeting',
        date: '2024-12-06',
        time: '11:00 AM - 12:00 PM',
        duration: '1h',
        attendees: 6,
        location: 'Zoom',
        organizer: 'Mike Ross',
        status: 'pending',
        priority: 'high',
        description: 'Present new design concepts to client',
        category: 'client'
    },
    {
        id: '4',
        title: 'Engineering All Hands',
        type: 'Meeting',
        date: '2024-12-07',
        time: '3:00 PM - 4:00 PM',
        duration: '1h',
        attendees: 25,
        location: 'Main Auditorium',
        organizer: 'David Kim',
        status: 'confirmed',
        priority: 'medium',
        description: 'Monthly engineering team meeting and updates',
        category: 'engineering'
    },
    {
        id: '5',
        title: 'Holiday Party Planning',
        type: 'Social',
        date: '2024-12-08',
        time: '4:00 PM - 5:00 PM',
        duration: '1h',
        attendees: 5,
        location: 'Break Room',
        organizer: 'Emily Johnson',
        status: 'tentative',
        priority: 'low',
        description: 'Plan the company holiday celebration',
        category: 'social'
    }
];

const MEETING_SCHEDULE = [
    {
        id: '1',
        time: '09:00',
        title: '1:1 with Manager',
        duration: '30m',
        attendee: 'Jessica Lee',
        avatar: 'https://i.pravatar.cc/150?u=jessica',
        type: '1on1',
        location: 'Virtual'
    },
    {
        id: '2',
        time: '10:00',
        title: 'Design Review',
        duration: '1h',
        attendee: 'Sarah Chen, Mike Ross',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
        type: 'team',
        location: 'Conference Room B'
    },
    {
        id: '3',
        time: '11:30',
        title: 'Lunch with Team',
        duration: '1h',
        attendee: 'Engineering Team',
        avatar: 'https://i.pravatar.cc/150?u=david',
        type: 'social',
        location: 'Company Cafe'
    },
    {
        id: '4',
        time: '14:00',
        title: 'Sprint Planning',
        duration: '2h',
        attendee: 'Dev Team',
        avatar: 'https://i.pravatar.cc/150?u=alex',
        type: 'planning',
        location: 'Virtual'
    },
    {
        id: '5',
        time: '16:30',
        title: 'Project Update',
        duration: '30m',
        attendee: 'Stakeholders',
        avatar: 'https://i.pravatar.cc/150?u=emily',
        type: 'update',
        location: 'Conference Room A'
    }
];

const TEAM_AVAILABILITY = [
    {
        id: '1',
        name: 'Sarah Chen',
        role: 'UX Designer',
        status: 'available',
        timezone: 'PST',
        nextMeeting: '2:00 PM - Design Review',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
        location: 'San Francisco'
    },
    {
        id: '2',
        name: 'Mike Ross',
        role: 'Frontend Developer',
        status: 'busy',
        timezone: 'EST',
        nextMeeting: '3:00 PM - Client Call',
        avatar: 'https://i.pravatar.cc/150?u=mike',
        location: 'New York'
    },
    {
        id: '3',
        name: 'Jessica Lee',
        role: 'Product Manager',
        status: 'in-meeting',
        timezone: 'GMT',
        currentMeeting: 'Q4 Planning Session',
        avatar: 'https://i.pravatar.cc/150?u=jessica',
        location: 'London'
    },
    {
        id: '4',
        name: 'David Kim',
        status: 'available',
        role: 'Backend Developer',
        timezone: 'KST',
        nextMeeting: '4:00 PM - Code Review',
        avatar: 'https://i.pravatar.cc/150?u=david',
        location: 'Seoul'
    }
];

const CALENDAR_STATS = {
    totalEvents: 24,
    todayEvents: 8,
    weekEvents: 18,
    teamMeetings: 12,
    pendingInvites: 3,
    meetingsToday: 5
};

const CALENDAR_DAYS = [
    { day: 'Mon', date: 2, events: 3, current: false },
    { day: 'Tue', date: 3, events: 5, current: false },
    { day: 'Wed', date: 4, events: 2, current: false },
    { day: 'Thu', date: 5, events: 8, current: true },
    { day: 'Fri', date: 6, events: 4, current: false },
    { day: 'Sat', date: 7, events: 1, current: false },
    { day: 'Sun', date: 8, events: 1, current: false }
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'confirmed': return 'bg-green-100 text-green-600';
        case 'pending': return 'bg-yellow-100 text-yellow-600';
        case 'tentative': return 'bg-purple-100 text-purple-600';
        case 'cancelled': return 'bg-red-100 text-red-600';
        case 'available': return 'bg-green-100 text-green-600';
        case 'busy': return 'bg-red-100 text-red-600';
        case 'in-meeting': return 'bg-blue-100 text-blue-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

const getCategoryColor = (category: string) => {
    switch (category) {
        case 'product': return 'bg-blue-100 text-blue-600';
        case 'design': return 'bg-purple-100 text-purple-600';
        case 'client': return 'bg-orange-100 text-orange-600';
        case 'engineering': return 'bg-green-100 text-green-600';
        case 'social': return 'bg-pink-100 text-pink-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

const getMeetingTypeColor = (type: string) => {
    switch (type) {
        case '1on1': return 'bg-blue-100 text-blue-600';
        case 'team': return 'bg-green-100 text-green-600';
        case 'social': return 'bg-pink-100 text-pink-600';
        case 'planning': return 'bg-purple-100 text-purple-600';
        case 'update': return 'bg-orange-100 text-orange-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

export default function CalendarPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
                    <p className="text-gray-500 mt-1">Manage events, meetings, and team schedule</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                        <Filter className="w-5 h-5" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg">
                        <Plus className="w-5 h-5" />
                        New Event
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
                            <p className="text-gray-500 text-xs">Total Events</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{CALENDAR_STATS.totalEvents}</p>
                        </div>
                        <Calendar className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Today</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{CALENDAR_STATS.todayEvents}</p>
                        </div>
                        <Clock className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">This Week</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{CALENDAR_STATS.weekEvents}</p>
                        </div>
                        <Users className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Team Meetings</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{CALENDAR_STATS.teamMeetings}</p>
                        </div>
                        <Video className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Pending</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{CALENDAR_STATS.pendingInvites}</p>
                        </div>
                        <AlertTriangle className="w-8 h-8 text-yellow-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Meetings</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{CALENDAR_STATS.meetingsToday}</p>
                        </div>
                        <Phone className="w-8 h-8 text-cyan-500" />
                    </div>
                </div>
            </motion.div>

            {/* Mini Calendar & Today's Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Mini Calendar */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-lg shadow-black/5 p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">December 2024</h3>
                        <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-gray-100 rounded-lg">
                                <ChevronLeft className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded-lg">
                                <ChevronRight className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                            <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                                {day}
                            </div>
                        ))}
                        {CALENDAR_DAYS.map((day, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                whileHover={{ 
                                    scale: 1.15,
                                    rotate: 5,
                                    zIndex: 10
                                }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ 
                                    delay: 0.3 + index * 0.05,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25
                                }}
                                className={`relative text-center py-2 rounded-lg cursor-pointer ${
                                    day.current
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'hover:bg-gray-100 text-gray-900'
                                }`}
                            >
                                <span className="text-sm font-medium">{day.date}</span>
                                {day.events > 0 && (
                                    <motion.div 
                                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.05 }}
                                    >
                                        {Array.from({ length: Math.min(day.events, 3) }).map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className={`w-1 h-1 rounded-full ${
                                                    day.current ? 'bg-white' : 'bg-primary'
                                                }`}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ 
                                                    repeat: Infinity, 
                                                    duration: 2, 
                                                    delay: i * 0.2 
                                                }}
                                            />
                                        ))}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Today's Schedule */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-3xl shadow-lg shadow-black/5 p-6 lg:col-span-2"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">Today's Schedule</h3>
                        <button className="text-primary font-medium hover:text-primary/80 text-sm">View All</button>
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                        {MEETING_SCHEDULE.map((meeting, index) => (
                            <motion.div
                                key={meeting.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.05 }}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50"
                            >
                                <div className="flex-shrink-0 w-16 text-sm font-medium text-gray-500">
                                    {meeting.time}
                                </div>
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900">{meeting.title}</p>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                        <span className={`px-2 py-0.5 rounded-full font-medium ${getMeetingTypeColor(meeting.type)}`}>
                                            {meeting.type}
                                        </span>
                                        <span>{meeting.duration}</span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {meeting.location}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                                            <img src={meeting.avatar} alt="Attendee" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Upcoming Events Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search events..."
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                    {UPCOMING_EVENTS.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            className="p-4 rounded-2xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(event.category)}`}>
                                        {event.category}
                                    </span>
                                    {event.priority === 'high' && (
                                        <AlertTriangle className="w-4 h-4 text-red-500" />
                                    )}
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Calendar className="w-4 h-4" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Clock className="w-4 h-4" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <MapPin className="w-4 h-4" />
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Users className="w-4 h-4" />
                                    <span>{event.attendees} attendees</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-2">
                                    <img 
                                        src={`https://i.pravatar.cc/150?u=${event.organizer}`} 
                                        alt={event.organizer} 
                                        className="w-6 h-6 rounded-full object-cover" 
                                    />
                                    <span className="text-sm text-gray-600">{event.organizer}</span>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(event.status)}`}>
                                    {event.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Team Availability Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Team Availability</h2>
                    <button className="text-primary font-medium hover:text-primary/80">View All Teams</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {TEAM_AVAILABILITY.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.05 }}
                            className="p-4 rounded-2xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative">
                                    <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                                        member.status === 'available' ? 'bg-green-500' :
                                        member.status === 'busy' ? 'bg-red-500' :
                                        'bg-blue-500'
                                    }`} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                                    <p className="text-sm text-gray-500">{member.role}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Status</span>
                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(member.status)}`}>
                                        {member.status}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Timezone</span>
                                    <span className="text-sm text-gray-900">{member.timezone}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Location</span>
                                    <span className="text-sm text-gray-900">{member.location}</span>
                                </div>
                                {member.currentMeeting && (
                                    <div className="mt-2 pt-2 border-t border-gray-100">
                                        <p className="text-xs text-gray-500">In:</p>
                                        <p className="text-sm font-medium text-gray-900">{member.currentMeeting}</p>
                                    </div>
                                )}
                                {member.nextMeeting && (
                                    <div className="mt-2 pt-2 border-t border-gray-100">
                                        <p className="text-xs text-gray-500">Next:</p>
                                        <p className="text-sm font-medium text-gray-900">{member.nextMeeting}</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}