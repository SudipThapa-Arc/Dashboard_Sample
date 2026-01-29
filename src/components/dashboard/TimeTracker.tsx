'use client';

import { Play, Pause, Clock, ChevronRight } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DATA = [
    { name: 'Completed', value: 75, fill: '#FCD535' },
    { name: 'Remaining', value: 25, fill: '#F3F4F6' },
];

export function TimeTracker() {
    return (
        <div className="bg-surface p-6 rounded-[32px] shadow-sm border border-gray-100 flex flex-col h-[320px] relative">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-gray-500 font-medium mb-1">Time tracker</h3>
                </div>
                <div className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-400 rotate-45" />
                </div>
            </div>

            <div className="relative flex-1 flex items-center justify-center">
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                    <span className="text-4xl font-light text-gray-600">
                        02:<span className="font-bold text-gray-900">35</span>
                    </span>
                    <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Work Time</span>
                </div>

                <div className="w-48 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={DATA}
                                innerRadius={60}
                                outerRadius={70}
                                startAngle={90}
                                endAngle={-270}
                                dataKey="value"
                                stroke="none"
                                cornerRadius={10}
                            >
                                {DATA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="flex items-center justify-between mt-4 px-2">
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                        <Play className="w-4 h-4 fill-gray-900 text-gray-900 ml-0.5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                        <Pause className="w-4 h-4 text-gray-400" />
                    </button>
                </div>

                <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
                    <Clock className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
