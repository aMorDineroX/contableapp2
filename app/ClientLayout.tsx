'use client';

import { Auth0Provider } from '@auth0/auth0-react';
import { usePathname } from 'next/navigation';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { useState, useEffect } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Simuler un délai minimum pour éviter le flash
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const auth0Config = {
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '',
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '',
    authorizationParams: {
      redirect_uri: typeof window !== 'undefined' 
        ? `${window.location.origin}${pathname}`
        : '',
      audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE
    },
    onRedirectCallback: (appState: any) => {
      setIsLoading(false);
      window.history.replaceState(
        {},
        document.title,
        appState?.returnTo || window.location.pathname
      );
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Auth0Provider {...auth0Config}>
        {children}
      </Auth0Provider>
    </>
  );
}
