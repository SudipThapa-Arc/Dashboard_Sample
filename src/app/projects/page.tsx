'use client';

import { useState } from 'react';
import { ProjectItem } from '@/components/dashboard/ProjectItem';
import { RECENT_PROJECTS, ProjectStatus } from '@/lib/mock-data';
import { Filter, Grid, List } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
    const [filter, setFilter] = useState<'All' | ProjectStatus>('All');
    const [view, setView] = useState<'grid' | 'list'>('list');

    const filteredProjects = filter === 'All'
        ? RECENT_PROJECTS
        : RECENT_PROJECTS.filter(p => p.status === filter);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold">Projects</h1>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-surface p-1 rounded-full border border-gray-100">
                        <button
                            onClick={() => setView('list')}
                            className={cn("p-2 rounded-full transition-colors", view === 'list' ? "bg-black text-white" : "text-gray-400 hover:text-gray-600")}
                        >
                            <List className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setView('grid')}
                            className={cn("p-2 rounded-full transition-colors", view === 'grid' ? "bg-black text-white" : "text-gray-400 hover:text-gray-600")}
                        >
                            <Grid className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex items-center bg-surface px-4 py-2 rounded-full border border-gray-100 gap-2">
                        <Filter className="w-4 h-4 text-gray-400" />
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value as any)}
                            className="bg-transparent border-none focus:outline-none text-sm font-bold text-gray-700"
                        >
                            <option value="All">All Status</option>
                            <option value="Paid">Paid</option>
                            <option value="Not Paid">Not Paid</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className={cn(
                "grid gap-4",
                view === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            )}>
                {filteredProjects.map(project => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
