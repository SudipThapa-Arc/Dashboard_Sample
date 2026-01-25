'use client';

import { Send, Phone, Video, MoreVertical, Paperclip } from 'lucide-react';
import { MOCK_MESSAGES, PEERS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ChatWindowProps {
    conversationId: string;
    peerId: string;
}

export function ChatWindow({ conversationId, peerId }: ChatWindowProps) {
    const [inputValue, setInputValue] = useState('');
    const messages = MOCK_MESSAGES[conversationId] || [];
    const peer = PEERS.find(p => p.id === peerId);

    if (!peer) return null;

    return (
        <div className="flex flex-col h-full bg-surface rounded-3xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <img src={peer.avatar} alt={peer.name} className="w-12 h-12 rounded-full object-cover" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-900">{peer.name}</h3>
                        <span className="text-xs text-green-600 font-medium">Online now</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="p-2.5 rounded-full hover:bg-gray-50 text-gray-500 transition-colors">
                        <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2.5 rounded-full hover:bg-gray-50 text-gray-500 transition-colors">
                        <Video className="w-5 h-5" />
                    </button>
                    <button className="p-2.5 rounded-full hover:bg-gray-50 text-gray-500 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={cn(
                            "flex w-full",
                            msg.isMe ? "justify-end" : "justify-start"
                        )}
                    >
                        <div className={cn(
                            "max-w-[70%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed",
                            msg.isMe
                                ? "bg-primary text-white rounded-br-none"
                                : "bg-gray-100 text-gray-800 rounded-bl-none"
                        )}>
                            {msg.content}
                            <div className={cn(
                                "text-[10px] mt-1 text-right opacity-70",
                                msg.isMe ? "text-white" : "text-gray-500"
                            )}>
                                {msg.timestamp}
                            </div>
                        </div>
                    </div>
                ))}
                {/* Placeholder for "Typing" indicator could go here */}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gray-50/50">
                <div className="flex items-center gap-3 bg-white p-2 rounded-[24px] border border-gray-100 shadow-sm">
                    <button className="p-2.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                        <Paperclip className="w-5 h-5" />
                    </button>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium px-2"
                    />
                    <button className="p-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition-all active:scale-95">
                        <Send className="w-4 h-4 ml-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
