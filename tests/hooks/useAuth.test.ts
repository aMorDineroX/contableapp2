import React from 'react';
import { render, renderHook } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import { useAuth } from '@/hooks/useAuth';
import { Session } from 'next-auth';

// Mock session pour les tests
const mockSession: Session = {
  user: {
    name: 'Test User',
    email: 'test@example.com',
  },
  expires: new Date(Date.now() + 86400 * 1000).toISOString(),
};

// Wrapper pour fournir le contexte de session
const SessionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SessionProvider session={mockSession}>{children}</SessionProvider>
);

describe('useAuth', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
    if (global.gc) global.gc()
  })

  afterAll(() => {
    jest.resetModules()
  })

  it('returns correct session information', () => {
    const { result } = renderHook(() => useAuth(), { 
      wrapper: SessionWrapper 
    });

    expect(result.current.session).toEqual(mockSession);
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.isLoading).toBe(false);
  });

  it('handles unauthenticated state', () => {
    const { result } = renderHook(() => useAuth(), { 
      wrapper: ({ children }) => (
        <SessionProvider session={null}>{children}</SessionProvider>
      ) 
    });

    expect(result.current.session).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.isLoading).toBe(false);
  });
});
