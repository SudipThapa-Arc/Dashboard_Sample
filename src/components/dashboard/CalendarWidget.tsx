'use client';

import { Calendar } from 'lucide-react';

const DAYS = [
    { name: 'Mon', date: 22 },
    { name: 'Tue', date: 23 },
    { name: 'Wed', date: 24 },
    { name: 'Thu', date: 25 },
    { name: 'Fri', date: 26 },
    { name: 'Sat', date: 27 },
];

const TIMES = ['8:00 am', '9:00 am', '10:00 am', '11:00 am'];

export function CalendarWidget() {
    return (
        <div className="bg-surface p-6 rounded-[32px] shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <button className="text-sm font-medium text-gray-400 hover:text-gray-600">August</button>
                <h3 className="text-lg font-semibold text-gray-900">September 2024</h3>
                <button className="text-sm font-medium text-gray-400 hover:text-gray-600">October</button>
            </div>

            {/* Calendar Grid */}
            <div className="flex-1 overflow-x-auto">
                <div className="min-w-[500px] h-full flex flex-col">
                    {/* Days Header */}
                    <div className="grid grid-cols-7 border-b border-gray-100 pb-4 mb-4">
                        <div className="text-gray-400 text-xs font-medium w-16"></div> {/* Time Column Buffer */}
                        {DAYS.map((day) => (
                            <div key={day.date} className="text-center">
                                <div className="text-gray-400 text-xs font-medium mb-1">{day.name}</div>
                                <div className="text-gray-900 font-semibold">{day.date}</div>
                            </div>
                        ))}
                    </div>

                    {/* Time Slots */}
                    <div className="relative flex-1">
                        {TIMES.map((time, index) => (
                            <div key={time} className="flex items-start h-16 border-t border-gray-50 last:border-0 relative">
                                <span className="text-xs text-gray-400 font-medium w-16 -mt-2">{time}</span>
                                {/* Grid Lines */}
                                <div className="flex-1 grid grid-cols-6 h-full absolute left-16 right-0 top-0 bottom-0 pointer-events-none">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="border-l border-dashed border-gray-100 h-full"></div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Event 1: Weekly Team Sync */}
                        <div className="absolute top-[10px] left-[calc(4rem+16.66%*0)] w-[calc(16.66%*3-10px)] h-12 bg-gray-900 text-white rounded-xl flex items-center p-3 shadow-lg z-10 transition-transform hover:scale-105 cursor-pointer">
                            <div className="flex-1 min-w-0">
                                <h4 className="text-xs font-bold truncate">Weekly Team Sync</h4>
                                <p className="text-[10px] text-gray-400 truncate">Discuss progress</p>
                            </div>
                            <div className="flex -space-x-2 ml-2">
                                <div className="w-5 h-5 rounded-full bg-gray-600 border border-gray-900" />
                                <div className="w-5 h-5 rounded-full bg-gray-500 border border-gray-900" />
                                <div className="w-5 h-5 rounded-full bg-gray-400 border border-gray-900" />
                            </div>
                        </div>

                        {/* Event 2: Onboarding Session */}
                        <div className="absolute top-[140px] left-[calc(4rem+16.66%*4)] w-[calc(16.66%*2-10px)] h-12 bg-white border border-gray-200 text-gray-900 rounded-xl flex items-center p-3 shadow-md z-10 transition-transform hover:scale-105 cursor-pointer">
                            <div className="flex-1 min-w-0">
                                <h4 className="text-xs font-bold truncate">Onboarding Session</h4>
                                <p className="text-[10px] text-gray-400 truncate">Intro for new hires</p>
                            </div>
                            <div className="flex -space-x-2 ml-2">
                                <div className="w-5 h-5 rounded-full bg-gray-200 border border-white" />
                                <div className="w-5 h-5 rounded-full bg-gray-300 border border-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
