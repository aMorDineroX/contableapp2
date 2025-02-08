'use client';

import { useAuth } from '@/hooks/useAuth';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function WithAuth<P extends object>(Component: React.ComponentType<P>) {
  return function ProtectedComponent(props: P) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.push('/auth/login');
      }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading) {
      return <LoadingScreen />;
    }

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };
}
