import { LucideIcon, Code, PenTool, Copyright, Globe } from 'lucide-react';

export type Role = 'Senior Cybersecurity Specialist' | 'Full Stack Developer' | 'Product Designer';

export interface UserProfile {
    id: string;
    name: string;
    avatar: string;
    role: Role;
    isPremium: boolean;
}

export type ProjectStatus = 'Paid' | 'Not Paid' | 'Pending';
export type ProjectType = 'Development' | 'Design' | 'Copyright' | 'Other';

export interface Project {
    id: string;
    title: string;
    rate: number;
    currency: string;
    status: ProjectStatus;
    tags: string[];
    description: string;
    location: string;
    postedAt: string;
    type: ProjectType;
}

export interface IncomeDataPoint {
    label: string;
    value: number;
}

export interface IncomeData {
    totalAmount: number;
    currency: string;
    period: 'Week' | 'Month' | 'Year';
    trend: number;
    data: IncomeDataPoint[];
}

export interface ProposalStats {
    proposalsSent: number;
    interviews: number;
    hires: number;
    lastUpdated: string;
}

export const USER_PROFILE: UserProfile = {
    id: 'u-1',
    name: 'Randy Gouse',
    avatar: 'https://i.pravatar.cc/150?u=randy',
    role: 'Senior Cybersecurity Specialist',
    isPremium: true,
};

export const RECENT_PROJECTS: Project[] = [
    {
        id: 'p-1',
        title: 'Web Development Project',
        rate: 200,
        currency: 'USD',
        status: 'Paid',
        tags: ['Remote', 'Part-time', 'React'],
        description: 'Developed a comprehensive landing page for a fintech startup effectively utilizing React and Tailwind CSS.',
        location: 'Germany',
        postedAt: '2h ago',
        type: 'Development',
    },
    {
        id: 'p-2',
        title: 'Brand Identity Design',
        rate: 85,
        currency: 'USD',
        status: 'Pending',
        tags: ['Design', 'Brand'],
        description: 'Design brand guidelines and logo kit for a local coffee shop franchise.',
        location: 'USA',
        postedAt: '5h ago',
        type: 'Design',
    },
    {
        id: 'p-3',
        title: 'Copyright Services',
        rate: 120,
        currency: 'USD',
        status: 'Not Paid',
        tags: ['Legal', 'Copyright'],
        description: 'Consultation and filing for intellectual property protection.',
        location: 'UK',
        postedAt: '1d ago',
        type: 'Copyright',
    },
];

// Helper to get consistent images
export const getProjectImage = (type: ProjectType) => {
    const map: Record<ProjectType, string> = {
        'Development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', // Coding
        'Design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80', // Art stuff
        'Copyright': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80', // Papers
        'Other': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    };
    return map[type];
};


export const INCOME_DATA: IncomeData = {
    totalAmount: 12450,
    currency: 'USD',
    period: 'Month',
    trend: 20,
    data: [
        { label: 'S', value: 1200 },
        { label: 'M', value: 2100 },
        { label: 'T', value: 800 },
        { label: 'W', value: 1600 },
        { label: 'T', value: 900 },
        { label: 'F', value: 12450 / 4 }, // Scaled for demo
        { label: 'S', value: 1000 },
    ],
};

export const PROPOSAL_STATS: ProposalStats = {
    proposalsSent: 45,
    interviews: 12,
    hires: 5,
    lastUpdated: new Date().toISOString(),
};

export const PEERS = [
    { id: '1', name: 'Sarah Chen', role: 'UX Designer', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    { id: '2', name: 'Mike Ross', role: 'Frontend Dev', avatar: 'https://i.pravatar.cc/150?u=mike' },
    { id: '3', name: 'Jessica Lee', role: 'Product Manager', avatar: 'https://i.pravatar.cc/150?u=jessica' },
];

// --- Phase 2: Messages ---

export interface Message {
    id: string;
    senderId: string;
    content: string;
    timestamp: string;
    isMe: boolean;
}

export interface Conversation {
    id: string;
    peerId: string;
    lastMessage: string;
    unreadCount: number;
    updatedAt: string;
}

export const CONVERSATIONS: Conversation[] = [
    { id: 'c-1', peerId: '1', lastMessage: 'Hey, are we still on for the design review?', unreadCount: 2, updatedAt: '10m ago' },
    { id: 'c-2', peerId: '2', lastMessage: 'I pushed the latest changes to the repo.', unreadCount: 0, updatedAt: '1h ago' },
    { id: 'c-3', peerId: '3', lastMessage: 'Can you send me the invoice?', unreadCount: 0, updatedAt: '1d ago' },
];

export const MOCK_MESSAGES: Record<string, Message[]> = {
    'c-1': [
        { id: 'm-1', senderId: '1', content: 'Hi Randy, how is the dashboard coming along?', timestamp: '10:00 AM', isMe: false },
        { id: 'm-2', senderId: 'u-1', content: 'Hey Sarah! actsually making great progress. Just finishing up the charts.', timestamp: '10:05 AM', isMe: true },
        { id: 'm-3', senderId: '1', content: 'That sounds awesome! Can we check it out later?', timestamp: '10:06 AM', isMe: false },
        { id: 'm-4', senderId: '1', content: 'Hey, are we still on for the design review?', timestamp: '10:30 AM', isMe: false },
    ],
};

// --- Phase 2: Wallet ---

export interface Transaction {
    id: string;
    title: string;
    amount: number;
    date: string;
    status: 'Completed' | 'Pending';
    type: 'Income' | 'Expense';
}

export const TRANSACTIONS: Transaction[] = [
    { id: 't-1', title: 'Web Development Project', amount: 3200, date: 'Today, 2:30 PM', status: 'Completed', type: 'Income' },
    { id: 't-2', title: 'Software License', amount: -45, date: 'Yesterday', status: 'Completed', type: 'Expense' },
    { id: 't-3', title: 'Brand Identity Design', amount: 850, date: 'Jan 23', status: 'Pending', type: 'Income' },
    { id: 't-4', title: 'Server Costs', amount: -120, date: 'Jan 20', status: 'Completed', type: 'Expense' },
];

export const WALLET_STATS = {
    balance: 14250.00,
    income: 12450.00,
    expenses: 2450.00,
    growth: 12.5,
};

