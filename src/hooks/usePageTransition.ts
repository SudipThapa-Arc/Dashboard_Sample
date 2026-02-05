'use client';

import { useState, useEffect, useCallback } from 'react';

export function usePageTransition() {
    const [isLoading, setIsLoading] = useState(false);
    const [pageKey, setPageKey] = useState('');

    const startTransition = useCallback(() => {
        setIsLoading(true);
    }, []);

    const endTransition = useCallback(() => {
        setIsLoading(false);
    }, []);

    const setPage = useCallback((key: string) => {
        setPageKey(key);
    }, []);

    return {
        isLoading,
        pageKey,
        startTransition,
        endTransition,
        setPage
    };
}