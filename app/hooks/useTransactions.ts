'use client';

import { useQuery } from '@tanstack/react-query';

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const response = await fetch('/api/transactions');
      if (!response.ok) throw new Error('Erreur réseau');
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // Cache pendant 5 minutes
  });
}
