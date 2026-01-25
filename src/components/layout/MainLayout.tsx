
import React from 'react';
import { TopNavigation } from './TopNavigation';

import { PageTransition } from './PageTransition';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <TopNavigation />
            <main className="flex-1 w-full max-w-[1440px] mx-auto p-6 md:p-8">
                <PageTransition>
                    {children}
                </PageTransition>
            </main>
        </div>
    );
}

