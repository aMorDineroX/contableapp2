'use client';

import { useState, useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/providers/theme-provider';
import { NotificationProvider } from '@/providers/NotificationProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoadingOverlay } from '@/components/ui/LoadingOverlay';
import { useLoadingStore } from '@/stores/loadingStore';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000,
          },
        },
      })
  );

  useEffect(() => {
    setMounted(true);
    // Clean up any browser extension artifacts
    const cleanup = () => {
      const unwantedAttrs = ['data-new-gr-c-s-check-loaded', 'data-gr-ext-installed'];
      unwantedAttrs.forEach((attr) => {
        document.body.removeAttribute(attr);
      });
    };
    cleanup();
    return cleanup;
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NotificationProvider>{children}</NotificationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
