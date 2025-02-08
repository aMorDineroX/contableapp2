'use client';

import { Auth0Provider } from '@auth0/auth0-react';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const auth0Config = {
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '',
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '',
    authorizationParams: {
      redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
      audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE
    }
  };

  return (
    <Auth0Provider {...auth0Config}>
      {children}
    </Auth0Provider>
  );
}
