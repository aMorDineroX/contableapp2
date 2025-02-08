'use client';

import { memo } from 'react';
import { Card, LineChart as TremorLineChart, BarChart as TremorBarChart } from '@tremor/react';

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

const defaultData = [
  { year: '2023', sales: 1000 },
  { year: '2024', sales: 1500 },
];

const defaultValueFormatter = (value: number) => `${value.toLocaleString()} FCFA`;

export const LineChart = memo(
  ({
    data = defaultData,
    title,
    colors = ['chart-1'],
    valueFormatter = defaultValueFormatter,
  }: ChartProps) => {
    return (
      <Card>
        {title && (
          <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {title}
          </h3>
        )}
        <TremorLineChart
          className="h-72 mt-4"
          data={data}
          index="year"
          categories={['sales']}
          colors={colors}
          valueFormatter={valueFormatter}
          showAnimation={true}
        />
      </Card>
    );
  }
);

export const BarChart = memo(
  ({
    data = defaultData,
    title,
    colors = ['chart-1'],
    valueFormatter = defaultValueFormatter,
  }: ChartProps) => {
    return (
      <Card>
        {title && (
          <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {title}
          </h3>
        )}
        <TremorBarChart
          className="h-72 mt-4"
          data={data}
          index="year"
          categories={['sales']}
          colors={colors}
          valueFormatter={valueFormatter}
          showAnimation={true}
        />
      </Card>
    );
  }
);
