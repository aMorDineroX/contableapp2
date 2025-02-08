'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    error,
    login: () => router.push('/api/auth/login'),
    logout: () => router.push('/api/auth/logout')
  };
};
