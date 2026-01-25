'use client';

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import { INCOME_DATA } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export function IncomeTracker() {
    const { data, totalAmount, currency, trend } = INCOME_DATA;

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-black text-white text-xs py-1 px-2 rounded-lg shadow-xl">
                    ${payload[0].value}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-surface p-6 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-gray-500 font-medium text-sm mb-1">Total Income</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-gray-900">
                            ${totalAmount.toLocaleString()}
                        </span>
                        <div className="flex items-center text-sm font-medium text-black bg-gray-100 py-1 px-2.5 rounded-full">
                            +{trend}%
                        </div>
                    </div>
                </div>

                <button className="flex items-center gap-1 text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors">
                    Month <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            <div className="flex-1 w-full min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={48}>
                        <XAxis
                            dataKey="label"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 13, fontWeight: 500 }}
                            dy={10}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            content={<CustomTooltip />}
                        />
                        <Bar
                            dataKey="value"
                            radius={[12, 12, 12, 12]}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.value === Math.max(...data.map(d => d.value)) ? '#FF5722' : '#F3F4F6'}
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
