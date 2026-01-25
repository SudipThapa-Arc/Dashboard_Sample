'use client';

import { CONVERSATIONS, PEERS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

interface ConversationListProps {
    selectedId: string;
    onSelect: (id: string) => void;
}

export function ConversationList({ selectedId, onSelect }: ConversationListProps) {
    return (
        <div className="flex flex-col h-full bg-surface rounded-3xl border border-gray-100 overflow-hidden">
            <div className="p-6 pb-2">
                <h2 className="text-xl font-bold mb-4">Messages</h2>
                <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search messages..."
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {CONVERSATIONS.map(convo => {
                    const peer = PEERS.find(p => p.id === convo.peerId);
                    if (!peer) return null;

                    const isSelected = selectedId === convo.id;

                    return (
                        <div
                            key={convo.id}
                            onClick={() => onSelect(convo.id)}
                            className={cn(
                                "p-4 rounded-2xl cursor-pointer transition-all duration-200 flex gap-4 items-start",
                                isSelected ? "bg-black text-white shadow-lg" : "hover:bg-gray-50 text-gray-900"
                            )}
                        >
                            <div className="relative">
                                <img src={peer.avatar} alt={peer.name} className="w-12 h-12 rounded-full object-cover" />
                                {convo.unreadCount > 0 && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                                        {convo.unreadCount}
                                    </span>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className={cn("font-bold text-sm", isSelected ? "text-white" : "text-gray-900")}>
                                        {peer.name}
                                    </h4>
                                    <span className={cn("text-xs font-medium", isSelected ? "text-gray-400" : "text-gray-400")}>
                                        {convo.updatedAt}
                                    </span>
                                </div>
                                <p className={cn(
                                    "text-xs truncate",
                                    isSelected ? "text-gray-300" : "text-gray-500",
                                    convo.unreadCount > 0 && !isSelected && "font-bold text-gray-900"
                                )}>
                                    {convo.lastMessage}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
