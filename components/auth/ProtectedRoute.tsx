'use client';

import { useAuth } from '@/hooks/useAuth';
import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (!isAuthenticated) {
    redirect('/auth/signin');
  }

  return <>{children}</>;
}
