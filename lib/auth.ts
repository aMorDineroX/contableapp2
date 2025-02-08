import { getSession } from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from 'next/server';

export async function getSessionAuth() {
  try {
    const session = await getSession();
    return session;
  } catch (error) {
    console.error('Erreur de session:', error);
    return null;
  }
}

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    return NextResponse.redirect(new URL('/api/auth/login', process.env.AUTH0_BASE_URL || ''));
  }
  return session;
}

export const getUserProfile = async () => {
  const session = await getSession();
  return session?.user;
};
