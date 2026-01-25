import { ChevronDown } from 'lucide-react';
import { PROPOSAL_STATS } from '@/lib/mock-data';

export function ProposalProgressCard() {
    const { proposalsSent, interviews, hires } = PROPOSAL_STATS;

    // Calculate fake progress for visual bar
    const total = proposalsSent + 20; // baseline
    const pPercentage = (proposalsSent / total) * 100;

    return (
        <div className="bg-surface p-6 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-gray-900">Proposals</h3>
                <div className="flex items-center text-xs font-semibold text-gray-500 cursor-pointer">
                    Select Date <ChevronDown className="w-3 h-3 ml-1" />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{proposalsSent}</div>
                    <div className="text-xs font-medium text-gray-400">Proposals</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{interviews}</div>
                    <div className="text-xs font-medium text-gray-400">Interviews</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{hires}</div>
                    <div className="text-xs font-medium text-gray-400">Hires</div>
                </div>
            </div>

            <div className="mt-auto">
                <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-gray-900">Conversion Rate</span>
                    <span className="text-primary">High</span>
                </div>
                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${pPercentage}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
