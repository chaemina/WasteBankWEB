import React, { useEffect, useState } from 'react';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';

interface IuseIntersectionObserverProps {
    threshold?: number;
    hasNextPage: boolean | undefined;
    fetchNextPage: () => Promise<InfiniteQueryObserverResult<unknown, unknown>>;
}

export const useIntersectionObserver = ({
    threshold = 0,
    hasNextPage,
    fetchNextPage,
}: IuseIntersectionObserverProps) => {
    const [target, setTarget] = useState<HTMLDivElement | null>(null);

    const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        });
    };

    useEffect(() => {
        if (!target) return;

        const observer = new IntersectionObserver(observerCallback, {
            threshold,
        });

        observer.observe(target);

        return () => observer.unobserve(target);
    }, [observerCallback, threshold, target]);

    return { setTarget };
};
