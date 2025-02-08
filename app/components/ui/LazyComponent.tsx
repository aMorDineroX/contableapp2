'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Type pour les props du graphique (copié de StatisticsChart)
interface ChartData {
  label: string;
  value: number;
}

interface ChartProps {
  data?: ChartData[];
  title?: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
}

// Composants dynamiques avec des options de chargement spécifiques
const DynamicLineChart = dynamic(
  () => import('@/components/charts/StatisticsChart').then((mod) => mod.LineChart),
  {
    loading: () => <div className="animate-pulse h-64 bg-gray-200 rounded-lg" />,
    ssr: false,
  }
);

const DynamicBarChart = dynamic(
  () => import('@/components/charts/StatisticsChart').then((mod) => mod.BarChart),
  {
    loading: () => <div className="animate-pulse h-64 bg-gray-200 rounded-lg" />,
    ssr: false,
  }
);

export default function LazyComponent() {
  // Exemple de données pour les graphiques compatibles avec ChartData
  const lineChartData: ChartData[] = [
    { label: '2023', value: 12000 },
    { label: '2024', value: 19000 },
    { label: '2025', value: 15000 },
    { label: '2026', value: 22000 },
    { label: '2027', value: 18000 },
  ];

  const barChartData: ChartData[] = [
    { label: '2023', value: 10000 },
    { label: '2024', value: 15000 },
    { label: '2025', value: 12000 },
    { label: '2026', value: 18000 },
    { label: '2027', value: 14000 },
  ];

  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <div className="grid grid-cols-2 gap-4">
        <DynamicLineChart data={lineChartData} title="Revenus Annuels" colors={['blue']} />
        <DynamicBarChart data={barChartData} title="Dépenses Annuelles" colors={['red']} />
      </div>
    </Suspense>
  );
}
