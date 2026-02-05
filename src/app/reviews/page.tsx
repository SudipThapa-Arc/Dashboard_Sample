'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Star, TrendingUp, Users, Target, Award, Filter, MoreVertical, MessageSquare, Calendar, CheckCircle, AlertTriangle, ThumbsUp, ThumbsDown } from 'lucide-react';

const PERFORMANCE_REVIEWS = [
    {
        id: '1',
        employee: 'Sarah Chen',
        position: 'UX Designer',
        department: 'Design',
        reviewer: 'Jessica Lee',
        reviewPeriod: 'Q4 2024',
        status: 'completed',
        overallRating: 4.8,
        lastReview: '2024-11-15',
        nextReview: '2025-02-15',
        strengths: ['Creative problem-solving', 'User research expertise', 'Collaboration'],
        improvements: ['Time management', 'Delegation skills'],
        goals: ['Lead design system project', 'Mentor junior designers'],
        avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
        id: '2',
        employee: 'Mike Ross',
        position: 'Frontend Developer',
        department: 'Engineering',
        reviewer: 'David Kim',
        reviewPeriod: 'Q4 2024',
        status: 'in-progress',
        overallRating: 4.5,
        lastReview: '2024-10-20',
        nextReview: '2025-01-20',
        strengths: ['Technical skills', 'Code quality', 'Problem-solving'],
        improvements: ['Documentation', 'Team communication'],
        goals: ['Improve test coverage', 'Lead frontend architecture'],
        avatar: 'https://i.pravatar.cc/150?u=mike'
    },
    {
        id: '3',
        employee: 'Jessica Lee',
        position: 'Product Manager',
        department: 'Product',
        reviewer: 'Emily Johnson',
        reviewPeriod: 'Q4 2024',
        status: 'pending',
        overallRating: 4.9,
        lastReview: '2024-11-01',
        nextReview: '2025-02-01',
        strengths: ['Strategic thinking', 'Stakeholder management', 'Product vision'],
        improvements: ['Technical depth', 'Team development'],
        goals: ['Launch Q1 product roadmap', 'Improve team processes'],
        avatar: 'https://i.pravatar.cc/150?u=jessica'
    },
    {
        id: '4',
        employee: 'David Kim',
        position: 'Backend Developer',
        department: 'Engineering',
        reviewer: 'Mike Ross',
        reviewPeriod: 'Q4 2024',
        status: 'scheduled',
        overallRating: 4.6,
        lastReview: '2024-09-15',
        nextReview: '2024-12-15',
        strengths: ['System design', 'Performance optimization', 'Mentorship'],
        improvements: ['Documentation', 'Cross-team collaboration'],
        goals: ['Migrate to microservices', 'Improve monitoring'],
        avatar: 'https://i.pravatar.cc/150?u=david'
    }
];

const TEAM_FEEDBACK = [
    {
        id: '1',
        from: 'Mike Ross',
        to: 'Sarah Chen',
        type: 'peer-review',
        rating: 5,
        comment: 'Excellent collaboration on the new design system. Sarah brings great insights and always considers user needs.',
        date: '2024-11-28',
        category: 'collaboration',
        helpful: 12,
        avatar: 'https://i.pravatar.cc/150?u=mike'
    },
    {
        id: '2',
        from: 'Sarah Chen',
        to: 'David Kim',
        type: 'peer-review',
        rating: 4,
        comment: 'Great technical guidance on API integration. Could improve documentation for frontend team.',
        date: '2024-11-27',
        category: 'technical',
        helpful: 8,
        avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
        id: '3',
        from: 'Jessica Lee',
        to: 'Mike Ross',
        type: 'manager-review',
        rating: 5,
        comment: 'Outstanding performance this quarter. Mike consistently delivers high-quality work and helps team members.',
        date: '2024-11-26',
        category: 'performance',
        helpful: 15,
        avatar: 'https://i.pravatar.cc/150?u=jessica'
    },
    {
        id: '4',
        from: 'Emily Johnson',
        to: 'Jessica Lee',
        type: 'peer-review',
        rating: 5,
        comment: 'Incredible product vision and execution. Jessica has transformed our product strategy.',
        date: '2024-11-25',
        category: 'leadership',
        helpful: 18,
        avatar: 'https://i.pravatar.cc/150?u=emily'
    }
];

const GOALS_TRACKING = [
    {
        id: '1',
        title: 'Launch Q1 Product Roadmap',
        owner: 'Jessica Lee',
        category: 'Product',
        priority: 'High',
        status: 'on-track',
        progress: 75,
        dueDate: '2025-03-31',
        description: 'Complete and launch Q1 product features',
        milestones: ['Feature spec complete', 'Design approved', 'Development started'],
        team: ['Product Team', 'Engineering']
    },
    {
        id: '2',
        title: 'Improve Test Coverage to 90%',
        owner: 'Mike Ross',
        category: 'Engineering',
        priority: 'Medium',
        status: 'in-progress',
        progress: 60,
        dueDate: '2025-02-28',
        description: 'Increase unit and integration test coverage',
        milestones: ['Audit current coverage', 'Add unit tests', 'Add integration tests'],
        team: ['Engineering Team']
    },
    {
        id: '3',
        title: 'Design System Implementation',
        owner: 'Sarah Chen',
        category: 'Design',
        priority: 'High',
        status: 'on-track',
        progress: 85,
        dueDate: '2025-01-31',
        description: 'Complete and roll out company design system',
        milestones: ['Component library', 'Documentation', 'Team training'],
        team: ['Design Team', 'Frontend Team']
    },
    {
        id: '4',
        title: 'Mentorship Program',
        owner: 'David Kim',
        category: 'Culture',
        priority: 'Low',
        status: 'behind',
        progress: 30,
        dueDate: '2025-04-30',
        description: 'Establish formal mentorship program for junior developers',
        milestones: ['Program design', 'Pilot program', 'Company-wide rollout'],
        team: ['Engineering Team', 'HR']
    }
];

const REVIEW_STATS = {
    completedReviews: 24,
    pendingReviews: 8,
    averageRating: 4.6,
    goalsOnTrack: 18,
    teamFeedback: 156,
    reviewCycle: 'Quarterly'
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'completed': return 'bg-green-100 text-green-600';
        case 'in-progress': return 'bg-blue-100 text-blue-600';
        case 'pending': return 'bg-yellow-100 text-yellow-600';
        case 'scheduled': return 'bg-purple-100 text-purple-600';
        case 'on-track': return 'bg-green-100 text-green-600';
        case 'behind': return 'bg-red-100 text-red-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case 'High': return 'bg-red-100 text-red-600';
        case 'Medium': return 'bg-yellow-100 text-yellow-600';
        case 'Low': return 'bg-green-100 text-green-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

const getCategoryColor = (category: string) => {
    switch (category) {
        case 'collaboration': return 'bg-blue-100 text-blue-600';
        case 'technical': return 'bg-purple-100 text-purple-600';
        case 'performance': return 'bg-green-100 text-green-600';
        case 'leadership': return 'bg-orange-100 text-orange-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

export default function ReviewsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Reviews</h1>
                    <p className="text-gray-500 mt-1">Manage performance reviews, feedback, and goals</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                        <Filter className="w-5 h-5" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg">
                        <Plus className="w-5 h-5" />
                        New Review
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
                            <p className="text-gray-500 text-xs">Completed</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{REVIEW_STATS.completedReviews}</p>
                        </div>
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Pending</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{REVIEW_STATS.pendingReviews}</p>
                        </div>
                        <AlertTriangle className="w-8 h-8 text-yellow-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Avg Rating</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{REVIEW_STATS.averageRating}</p>
                        </div>
                        <Star className="w-8 h-8 text-yellow-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Goals On Track</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{REVIEW_STATS.goalsOnTrack}</p>
                        </div>
                        <Target className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Feedback</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{REVIEW_STATS.teamFeedback}</p>
                        </div>
                        <MessageSquare className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs">Cycle</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">{REVIEW_STATS.reviewCycle}</p>
                        </div>
                        <Calendar className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
            </motion.div>

            {/* Performance Reviews Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Performance Reviews</h2>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search reviews..."
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                    {PERFORMANCE_REVIEWS.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            className="p-4 rounded-2xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <img src={review.avatar} alt={review.employee} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{review.employee}</h3>
                                        <p className="text-sm text-gray-600">{review.position} • {review.department}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{review.reviewPeriod}</span>
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(review.status)}`}>
                                                {review.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                        <span className="text-lg font-bold text-gray-900">{review.overallRating}</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Overall Rating</p>
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-900 mb-2">Strengths</p>
                                    <div className="flex flex-wrap gap-1">
                                        {review.strengths.map((strength) => (
                                            <span key={strength} className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                                                {strength}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900 mb-2">Areas for Improvement</p>
                                    <div className="flex flex-wrap gap-1">
                                        {review.improvements.map((improvement) => (
                                            <span key={improvement} className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                                                {improvement}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900 mb-2">Goals</p>
                                    <div className="space-y-1">
                                        {review.goals.map((goal) => (
                                            <span key={goal} className="text-xs text-gray-600 block">
                                                • {goal}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span>Reviewer: {review.reviewer}</span>
                                    <span>Next review: {review.nextReview}</span>
                                </div>
                                <button className="text-primary font-medium hover:text-primary/80 text-sm">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Team Feedback Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Team Feedback</h2>
                    <button className="text-primary font-medium hover:text-primary/80">View All Feedback</button>
                </div>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                    {TEAM_FEEDBACK.map((feedback, index) => (
                        <motion.div
                            key={feedback.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            className="p-4 rounded-2xl border border-gray-200 hover:bg-gray-50"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-3">
                                    <img src={feedback.avatar} alt={feedback.from} className="w-10 h-10 rounded-full object-cover" />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-gray-900">{feedback.from}</h3>
                                            <span className="text-sm text-gray-500">→</span>
                                            <span className="text-sm font-medium text-gray-900">{feedback.to}</span>
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(feedback.category)}`}>
                                                {feedback.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star 
                                                        key={i} 
                                                        className={`w-4 h-4 ${i < feedback.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-xs text-gray-500">{feedback.date}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{feedback.comment}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <button className="flex items-center gap-1 hover:text-green-600">
                                            <ThumbsUp className="w-4 h-4" />
                                            <span>{feedback.helpful}</span>
                                        </button>
                                        <button className="hover:text-red-600">
                                            <ThumbsDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Goals Tracking Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Goals Tracking</h2>
                    <button className="text-primary font-medium hover:text-primary/80">Set New Goal</button>
                </div>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                    {GOALS_TRACKING.map((goal, index) => (
                        <motion.div
                            key={goal.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            className="p-4 rounded-2xl border border-gray-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{goal.description}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(goal.priority)}`}>
                                        {goal.priority} Priority
                                    </span>
                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(goal.status)}`}>
                                        {goal.status}
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-900">Progress</span>
                                    <span className="text-sm text-gray-500">{goal.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className={`h-2 rounded-full ${
                                            goal.status === 'on-track' ? 'bg-green-500' :
                                            goal.status === 'behind' ? 'bg-red-500' :
                                            'bg-blue-500'
                                        }`} 
                                        style={{ width: `${goal.progress}%` }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Owner & Category</p>
                                    <div className="flex items-center gap-2">
                                        <img src={`https://i.pravatar.cc/150?u=${goal.owner}`} alt={goal.owner} className="w-6 h-6 rounded-full object-cover" />
                                        <span className="text-sm font-medium text-gray-900">{goal.owner}</span>
                                        <span className="text-sm text-gray-500">• {goal.category}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Due Date</p>
                                    <p className="text-sm font-medium text-gray-900">{goal.dueDate}</p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="text-xs text-gray-500 mb-2">Key Milestones</p>
                                <div className="flex flex-wrap gap-1">
                                    {goal.milestones.map((milestone) => (
                                        <span key={milestone} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                            ✓ {milestone}
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