'use client';

import { useState } from 'react';
import { ConversationList } from '@/components/messages/ConversationList';
import { ChatWindow } from '@/components/messages/ChatWindow';
import { CONVERSATIONS } from '@/lib/mock-data';

export default function MessagesPage() {
    const [selectedId, setSelectedId] = useState(CONVERSATIONS[0].id);
    const selectedConversation = CONVERSATIONS.find(c => c.id === selectedId);

    return (
        <div className="h-[calc(100vh-140px)] min-h-[600px] grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 lg:col-span-3 h-full">
                <ConversationList selectedId={selectedId} onSelect={setSelectedId} />
            </div>
            <div className="md:col-span-8 lg:col-span-9 h-full">
                {selectedConversation ? (
                    <ChatWindow
                        conversationId={selectedConversation.id}
                        peerId={selectedConversation.peerId}
                    />
                ) : (
                    <div className="h-full bg-surface rounded-3xl border border-gray-100 flex items-center justify-center text-gray-400">
                        Select a conversation to start chatting
                    </div>
                )}
            </div>
        </div>
    );
}
