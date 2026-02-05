'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Briefcase, Users, Calendar, Clock, MapPin, DollarSign, TrendingUp, Filter, MoreVertical, Star, CheckCircle, XCircle } from 'lucide-react';

const JOB_LISTINGS = [
    {
        id: '1',
        title: 'Senior Frontend Developer',
        department: 'Engineering',
        type: 'Full-time',
        location: 'San Francisco / Remote',
        salary: '$120K - $160K',
        posted: '2 days ago',
        applicants: 45,
        status: 'active',
        urgency: 'High',
        description: 'We are looking for an experienced frontend developer to join our growing team.'
    },
    {
        id: '2',
        title: 'UX Designer',
        department: 'Design',
        type: 'Full-time',
        location: 'New York',
        salary: '$90K - $120K',
        posted: '5 days ago',
        applicants: 32,
        status: 'active',
        urgency: 'Medium',
        description: 'Join our design team to create beautiful and intuitive user experiences.'
    },
    {
        id: '3',
        title: 'Product Manager',
        department: 'Product',
        type: 'Full-time',
        location: 'London',
        salary: '$130K - $170K',
        posted: '1 week ago',
        applicants: 28,
        status: 'interviewing',
        urgency: 'High',
        description: 'Lead product strategy and development for our core platform.'
    },
    {
        id: '4',
        title: 'DevOps Engineer',
        department: 'Engineering',
        type: 'Full-time',
        location: 'Remote',
        salary: '$110K - $150K',
        posted: '3 days ago',
        applicants: 22,
        status: 'active',
        urgency: 'Medium',
        description: 'Help us build and scale our infrastructure and deployment pipelines.'
    },
];

const CANDIDATES = [
    {
        id: '1',
        name: 'John Smith',
        position: 'Senior Frontend Developer',
        avatar: 'https://i.pravatar.cc/150?u=john',
        email: 'john.smith@email.com',
        phone: '+1 234-567-8901',
        experience: '8 years',
        status: 'interview',
        rating: 4.8,
        applied: '2 days ago',
        skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
        expectedSalary: '$140K'
    },
    {
        id: '2',
        name: 'Maria Garcia',
        position: 'UX Designer',
        avatar: 'https://i.pravatar.cc/150?u=maria',
        email: 'maria.garcia@email.com',
        phone: '+1 234-567-8902',
        experience: '5 years',
        status: 'assessment',
        rating: 4.6,
        applied: '5 days ago',
        skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
        expectedSalary: '$100K'
    },
    {
        id: '3',
        name: 'Robert Chen',
        position: 'Product Manager',
        avatar: 'https://i.pravatar.cc/150?u=robert',
        email: 'robert.chen@email.com',
        phone: '+1 234-567-8903',
        experience: '7 years',
        status: 'offer',
        rating: 4.9,
        applied: '1 week ago',
        skills: ['Strategy', 'Analytics', 'Leadership', 'Agile'],
        expectedSalary: '$150K'
    },
    {
        id: '4',
        name: 'Lisa Anderson',
        position: 'DevOps Engineer',
        avatar: 'https://i.pravatar.cc/150?u=lisa',
        email: 'lisa.anderson@email.com',
        phone: '+1 234-567-8904',
        experience: '6 years',
        status: 'interview',
        rating: 4.7,
        applied: '3 days ago',
        skills: ['Kubernetes', 'Docker', 'CI/CD', 'Terraform'],
        expectedSalary: '$130K'
    },
];

const INTERVIEWS = [
    {
        id: '1',
        candidate: 'John Smith',
        position: 'Senior Frontend Developer',
        date: 'Today',
        time: '2:00 PM',
        type: 'Technical',
        interviewer: 'Sarah Chen',
        duration: '1 hour',
        status: 'scheduled',
        avatar: 'https://i.pravatar.cc/150?u=john'
    },
    {
        id: '2',
        candidate: 'Maria Garcia',
        position: 'UX Designer',
        date: 'Tomorrow',
        time: '10:00 AM',
        type: 'Portfolio Review',
        interviewer: 'Emily Johnson',
        duration: '45 mins',
        status: 'scheduled',
        avatar: 'https://i.pravatar.cc/150?u=maria'
    },
    {
        id: '3',
        candidate: 'Robert Chen',
        position: 'Product Manager',
        date: 'Dec 15',
        time: '3:00 PM',
        type: 'Final Round',
        interviewer: 'David Kim',
        duration: '1.5 hours',
        status: 'confirmed',
        avatar: 'https://i.pravatar.cc/150?u=robert'
    },
];

const HIRING_STATS = {
    openPositions: 12,
    totalApplicants: 234,
    interviewsScheduled: 18,
    offersExtended: 5,
    timeToHire: '28 days',
    acceptanceRate: '75%'
};

export default function HiringPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Hiring</h1>
                    <p className="text-gray-500 mt-1">Manage job postings, candidates, and interview process</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                        <Filter className="w-5 h-5" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg">
                        <Plus className="w-5 h-5" />
                        Post Job
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
                            <p className="text-gray-500 text-xs">Open Positions</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{HIRING_STATS.openPositions}</p>
                        </div>
                        <Briefcase className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Total Applicants</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{HIRING_STATS.totalApplicants}</p>
                        </div>
                        <Users className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Interviews</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{HIRING_STATS.interviewsScheduled}</p>
                        </div>
                        <Calendar className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Offers Extended</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{HIRING_STATS.offersExtended}</p>
                        </div>
                        <CheckCircle className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Time to Hire</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{HIRING_STATS.timeToHire}</p>
                        </div>
                        <Clock className="w-8 h-8 text-red-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Acceptance Rate</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{HIRING_STATS.acceptanceRate}</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-emerald-500" />
                    </div>
                </div>
            </motion.div>

            {/* Job Listings Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Active Job Listings</h2>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                    {JOB_LISTINGS.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                                x: 5
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ 
                                delay: 0.3 + index * 0.05,
                                type: "spring",
                                stiffness: 350,
                                damping: 30
                            }}
                            className="p-4 rounded-2xl border border-gray-200 hover:border-gray-300 bg-white"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-semibold text-gray-900">{job.title}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                            job.urgency === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                                        }`}>
                                            {job.urgency} Priority
                                        </span>
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                            job.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                                        }`}>
                                            {job.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">{job.description}</p>
                                    <div className="flex items-center gap-4 mt-3">
                                        <span className="text-sm text-gray-500">{job.department}</span>
                                        <span className="text-sm text-gray-500">•</span>
                                        <span className="text-sm text-gray-500">{job.type}</span>
                                        <span className="text-sm text-gray-500">•</span>
                                        <span className="text-sm text-gray-500 flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {job.location}
                                        </span>
                                        <span className="text-sm text-gray-500">•</span>
                                        <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                            <DollarSign className="w-3 h-3" />
                                            {job.salary}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">{job.posted}</p>
                                    <p className="text-sm font-medium text-gray-900 mt-1">{job.applicants} applicants</p>
                                    <button className="mt-2 text-gray-400 hover:text-gray-600">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Candidates Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Recent Candidates</h2>
                    <button className="text-primary font-medium hover:text-primary/80">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-80 overflow-y-auto">
                    {CANDIDATES.map((candidate, index) => (
                        <motion.div
                            key={candidate.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            className="p-4 rounded-2xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start gap-3">
                                <img src={candidate.avatar} alt={candidate.name} className="w-12 h-12 rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                            candidate.status === 'interview' ? 'bg-blue-100 text-blue-600' :
                                            candidate.status === 'assessment' ? 'bg-yellow-100 text-yellow-600' :
                                            'bg-green-100 text-green-600'
                                        }`}>
                                            {candidate.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">{candidate.position}</p>
                                    <p className="text-sm text-gray-500 mt-1">{candidate.experience} experience • {candidate.expectedSalary}</p>
                                    <div className="flex items-center gap-1 mt-2">
                                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                        <span className="text-sm font-medium">{candidate.rating}</span>
                                        <span className="text-sm text-gray-400">• Applied {candidate.applied}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {candidate.skills.slice(0, 3).map((skill) => (
                                            <span key={skill} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Upcoming Interviews Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Upcoming Interviews</h2>
                    <button className="text-primary font-medium hover:text-primary/80">Schedule Interview</button>
                </div>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                    {INTERVIEWS.map((interview, index) => (
                        <motion.div
                            key={interview.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">
                                <img src={interview.avatar} alt={interview.candidate} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">{interview.candidate}</h3>
                                    <p className="text-sm text-gray-600">{interview.position}</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-medium text-gray-900">{interview.date}</p>
                                <p className="text-sm text-gray-500">{interview.time}</p>
                            </div>
                            <div className="text-center">
                                <span className="text-sm px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                                    {interview.type}
                                </span>
                                <p className="text-xs text-gray-500 mt-1">{interview.duration}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">with {interview.interviewer}</p>
                                <p className={`text-xs font-medium mt-1 ${
                                    interview.status === 'confirmed' ? 'text-green-600' : 'text-blue-600'
                                }`}>
                                    {interview.status}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}