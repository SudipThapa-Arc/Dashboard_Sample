'use client';

import { useState } from 'react';
import { ChevronDown, MapPin, Clock } from 'lucide-react';
import { Project, ProjectStatus } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectItemProps {
    project: Project;
}

const statusColorMap: Record<ProjectStatus, string> = {
    'Paid': 'bg-green-100 text-green-700 border-green-200',
    'Not Paid': 'bg-red-100 text-red-700 border-red-200',
    'Pending': 'bg-orange-100 text-orange-700 border-orange-200',
};

export function ProjectItem({ project }: ProjectItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            transition={{ layout: { duration: 0.3, type: "spring", bounce: 0 }, opacity: { duration: 0.2 } }}
            className="bg-surface rounded-3xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300"
        >
            <motion.div
                layout="position"
                className="p-5 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-4">
                        <div className={cn(
                            "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm",
                            project.type === 'Development' ? "bg-blue-50 text-blue-600" :
                                project.type === 'Design' ? "bg-purple-50 text-purple-600" :
                                    "bg-orange-50 text-orange-600"
                        )}>
                            {project.title.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg">{project.title}</h4>
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mt-0.5">
                                <span className="text-gray-900 font-bold">${project.rate}/hr</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                <span>{project.currency}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className={cn(
                            "text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide border",
                            statusColorMap[project.status]
                        )}>
                            {project.status}
                        </span>
                        <motion.button
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
                        >
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                        </motion.button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 pl-[72px]">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-6 pt-0 pl-[92px]">
                            <div className="h-px w-full bg-gray-100 mb-4" />
                            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl">
                                {project.description}
                            </p>
                            <div className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    {project.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Posted {project.postedAt}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
