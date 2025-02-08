import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Système de Comptabilité Africaine',
    default: 'Système de Comptabilité Africaine'
  },
  description: 'Application de comptabilité moderne conforme aux normes SYSCOHADA',
  keywords: ['comptabilité', 'SYSCOHADA', 'Afrique', 'gestion'],
  authors: [{ name: 'Votre Nom' }],
  creator: 'Votre Nom'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
