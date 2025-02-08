import type { Viewport } from 'next';
import DashboardLayout from './DashboardLayout';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

interface SectionLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function SectionLayout({ children, title }: SectionLayoutProps) {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="bg-white rounded-lg shadow p-6">{children}</div>
      </div>
    </DashboardLayout>
  );
}
