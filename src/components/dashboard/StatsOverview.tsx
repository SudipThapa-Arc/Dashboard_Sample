import { Users, UserPlus, Briefcase } from 'lucide-react';
import { DASHBOARD_STATS } from '@/lib/mock-data';

export function StatsOverview() {
    return (
        <div className="flex items-center gap-12">
            <div className="text-center">
                <div className="flex items-center gap-2 justify-center mb-1 text-gray-500 text-sm font-medium">
                    <Users className="w-4 h-4" />
                    <span>Employe</span>
                </div>
                <div className="text-4xl font-light text-gray-900">{DASHBOARD_STATS.employees}</div>
            </div>

            <div className="text-center">
                <div className="flex items-center gap-2 justify-center mb-1 text-gray-500 text-sm font-medium">
                    <UserPlus className="w-4 h-4" />
                    <span>Hirings</span>
                </div>
                <div className="text-4xl font-light text-gray-900">{DASHBOARD_STATS.hirings}</div>
            </div>

            <div className="text-center">
                <div className="flex items-center gap-2 justify-center mb-1 text-gray-500 text-sm font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>Projects</span>
                </div>
                <div className="text-4xl font-light text-gray-900">{DASHBOARD_STATS.projects}</div>
            </div>
        </div>
    );
}
