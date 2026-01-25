import Link from 'next/link';
import { ProjectItem } from './ProjectItem';
import { RECENT_PROJECTS } from '@/lib/mock-data';

export function ProjectList() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
                <h3 className="text-lg font-bold text-gray-900">Recent Projects</h3>
                <Link href="/projects" className="text-sm font-bold text-primary hover:text-orange-600 transition-colors">
                    See all
                </Link>
            </div>

            <div className="flex flex-col gap-3">
                {RECENT_PROJECTS.map(project => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
