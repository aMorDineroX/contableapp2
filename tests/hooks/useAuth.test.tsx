import { renderHook, act } from '@testing-library/react';
import { useAuth } from '@/hooks/useAuth';
import { useSession, SessionProvider } from 'next-auth/react';
import { cleanup } from '@testing-library/react';
import React from 'react';

// Mock next-auth
const mockUseSession = jest.fn();
const mockSignIn = jest.fn();
const mockSignOut = jest.fn();

jest.mock('next-auth/react', () => ({
  useSession: () => mockUseSession(),
  signIn: (...args: any[]) => mockSignIn(...args),
  signOut: (...args: any[]) => mockSignOut(...args),
  SessionProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    pathname: '/',
  }),
}));

describe('useAuth', () => {
  beforeEach(() => {
    mockUseSession.mockReturnValue({
      data: { user: { name: 'Test User' } },
      status: 'authenticated',
    });
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('returns auth state when authenticated', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('handles login', async () => {
    const { result } = renderHook(() => useAuth());
    await act(async () => {
      await result.current.login();
    });
    expect(mockSignIn).toHaveBeenCalledWith('auth0', { callbackUrl: '/' });
  });
});
