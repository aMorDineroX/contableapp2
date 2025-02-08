import { Suspense } from 'react';
import Loading from '@/components/ui/Loading';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Suspense fallback={<Loading />}>
          <Providers>
            <MainNav />
            <PageTransition>{children}</PageTransition>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
