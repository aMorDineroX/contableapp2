'use client';

import { useQuery } from '@tanstack/react-query';
import { useLoadingStore } from '@/components/ui/LoadingOverlay';
import { useErrorHandler } from '@/hooks/useErrorHandler';

interface Stats {
  revenue: number;
  expenses: number;
  treasury: number;
  mobileMoney: number;
  trends: {
    revenue: number;
    expenses: number;
    mobileMoney: number;
  };
}

export function useStats() {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const { handleError } = useErrorHandler();

  return useQuery<Stats>({
    queryKey: ['stats'],
    queryFn: async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/stats');
        if (!response.ok) throw new Error('Failed to fetch stats');
        return response.json();
      } catch (error) {
        handleError(error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    refetchInterval: 5 * 60 * 1000, // 5 minutes
  });
}
