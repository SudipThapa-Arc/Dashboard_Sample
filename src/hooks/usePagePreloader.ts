'use client';

import { useEffect, useCallback } from 'react';

export function usePagePreloader() {
    const preloadPage = useCallback((path: string) => {
        // Simple prefetch implementation without router
        if (typeof window !== 'undefined') {
            // Create a temporary link element to trigger prefetch
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = path;
            document.head.appendChild(link);
            
            // Clean up after a short delay
            setTimeout(() => {
                document.head.removeChild(link);
            }, 1000);
        }
    }, []);

    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return;
        
        // Preload all pages on hover
        const pages = ['/people', '/hiring', '/devices', '/apps', '/salary', '/calendar', '/reviews'];
        
        const handleMouseEnter = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const link = target.closest('a');
            if (link && link.href) {
                const path = new URL(link.href).pathname;
                if (pages.includes(path)) {
                    preloadPage(path);
                }
            }
        };

        document.addEventListener('mouseenter', handleMouseEnter, true);
        return () => document.removeEventListener('mouseenter', handleMouseEnter, true);
    }, [preloadPage]);

    return { preloadPage };
}