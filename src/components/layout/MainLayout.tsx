
'use client';

import React from 'react';
import { TopNavigation } from './TopNavigation';
import { PageTransition } from './PageTransition';
import { usePagePreloader } from '@/hooks/usePagePreloader';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    usePagePreloader();

    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <TopNavigation />
            <main className="flex-1 w-full max-w-[1440px] mx-auto p-6 md:p-8 relative overflow-hidden">
                <PageTransition>
                    {children}
                </PageTransition>
            </main>
        </div>
    );
}

