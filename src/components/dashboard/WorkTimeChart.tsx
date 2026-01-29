'use client';

import { BarChart, Bar, ResponsiveContainer, Cell, XAxis } from 'recharts';
import { WORK_TIME_DATA } from '@/lib/mock-data';
import { ArrowUpRight } from 'lucide-react';

export function WorkTimeChart() {
    const { totalHours, remaining, chartData } = WORK_TIME_DATA;

    return (
        <div className="bg-surface p-6 rounded-[32px] shadow-sm border border-gray-100 flex flex-col h-[320px]">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-gray-500 font-medium mb-1">Progress</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-light text-gray-900">{totalHours} h</span>
                        <span className="text-gray-400 text-sm">Use this week</span>
                    </div>
                </div>
                <div className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </div>
            </div>

            <div className="relative flex-1 w-full min-h-[150px]">
                {/* Highlight Tag */}
                <div className="absolute right-[20%] top-[-10px] bg-primary text-gray-900 text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm z-10 animate-bounce">
                    {remaining}
                </div>

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} barSize={12}>
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }}
                            dy={10}
                        />
                        <Bar dataKey="hours" radius={[10, 10, 10, 10]}>
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.day === 'W' || entry.day === 'F' ? '#FCD535' : '#111827'} // Apply yellow to specific bars
                                    className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
