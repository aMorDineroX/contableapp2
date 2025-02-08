'use client';

import { Card, Metric, Text, AreaChart, Title, Flex } from '@tremor/react';
import { CurrencyDollarIcon, ChartBarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

interface StatsCardProps {
  title: string;
  metric: string;
  icon: React.ReactNode;
  trend?: number;
}

const StatsCard = ({ title, metric, icon, trend }: StatsCardProps) => (
  <Card className="max-w-xs">
    <Flex alignItems="start">
      <div className="truncate">
        <Text>{title}</Text>
        <Metric className="truncate">{metric}</Metric>
      </div>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
    </Flex>
    {trend && (
      <Flex className="mt-4">
        <Text className="truncate">
          {trend > 0 ? '+' : ''}
          {trend}% vs mois dernier
        </Text>
      </Flex>
    )}
  </Card>
);

export default function DashboardStats() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Revenus"
          metric="2.5M FCFA"
          icon={<CurrencyDollarIcon className="w-6 h-6" />}
          trend={12}
        />
        <StatsCard
          title="Transactions"
          metric="1,234"
          icon={<ChartBarIcon className="w-6 h-6" />}
          trend={-2}
        />
        <StatsCard
          title="Mobile Money"
          metric="850K FCFA"
          icon={<ArrowTrendingUpIcon className="w-6 h-6" />}
          trend={8}
        />
      </div>
    </div>
  );
}
