'use client';

import { ONBOARDING_DATA } from '@/lib/mock-data';
import { Monitor, Zap, MessageSquare, Ruler, Link, CheckCircle, Circle, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export function OnboardingWidget() {
    const { progress, tasks } = ONBOARDING_DATA;

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Monitor': return Monitor;
            case 'Zap': return Zap;
            case 'MessageSquare': return MessageSquare;
            case 'Ruler': return Ruler;
            case 'Link': return Link;
            default: return Circle;
        }
    };

    return (
        <div className="bg-surface p-6 rounded-[32px] shadow-sm border border-gray-100 h-full flex flex-col gap-6">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-gray-900 text-lg font-medium">Onboarding</h3>
                    <div className="text-3xl font-light mt-1">{progress}%</div>
                </div>
                <div className="text-gray-400 font-medium text-sm">2/8</div>
            </div>

            {/* Progress Bar Segmented */}
            <div className="flex gap-1 h-12 w-full">
                <div className="bg-primary flex-1 rounded-l-xl flex items-center justify-center text-xs font-bold text-gray-900 shadow-sm">Task</div>
                <div className="bg-gray-900 w-[25%] flex items-center justify-center rounded-none shadow-sm"></div>
                <div className="bg-gray-400 w-[15%] rounded-r-xl opacity-50"></div>
            </div>

            {/* Task List Card */}
            <div className="bg-gray-900 rounded-3xl p-6 text-white flex-1 flex flex-col shadow-xl shadow-gray-900/10">
                <div className="flex justify-between items-center mb-6">
                    <h4 className="text-lg font-medium">Onboarding Task</h4>
                    <span className="text-2xl font-light text-gray-400">2/8</span>
                </div>

                <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                    {tasks.map((task, index) => {
                        const Icon = getIcon(task.icon);
                        return (
                            <div key={task.id} className="flex items-center gap-4 group cursor-pointer">
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                                    task.completed ? "bg-white/10 text-primary" : "bg-white/5 text-gray-400 group-hover:bg-white/10"
                                )}>
                                    <Icon className="w-5 h-5" />
                                </div>

                                <div className="flex-1">
                                    <h5 className={cn("text-sm font-medium", task.completed ? "text-white line-through opacity-50" : "text-white")}>
                                        {task.title}
                                    </h5>
                                    <p className="text-xs text-gray-500">{task.time}</p>
                                </div>

                                <div className="text-gray-600">
                                    {task.completed ? (
                                        <CheckCircle className="w-5 h-5 text-primary fill-primary/20" />
                                    ) : (
                                        <Circle className="w-5 h-5 hover:text-white transition-colors" />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
