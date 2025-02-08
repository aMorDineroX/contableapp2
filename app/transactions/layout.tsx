import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function TransactionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
