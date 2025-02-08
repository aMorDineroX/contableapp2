import { render, screen } from '@testing-library/react';
import { LineChart, BarChart } from '@/components/charts/StatisticsChart';

// Mock des composants Tremor
jest.mock('@tremor/react', () => ({
  Card: ({ children }) => <div data-testid="tremor-card">{children}</div>,
  LineChart: () => <div data-testid="tremor-line-chart">Chart Mock</div>,
  BarChart: () => <div data-testid="tremor-bar-chart">Chart Mock</div>,
}));

describe('StatisticsChart', () => {
  const mockData = [
    { label: '2023', value: 1000 },
    { label: '2024', value: 1500 },
  ];

  describe('LineChart', () => {
    it('renders with correct data', () => {
      render(<LineChart data={mockData} title="Test Chart" />);
      expect(screen.getByText('Test Chart')).toBeInTheDocument();
      expect(screen.getByTestId('tremor-line-chart')).toBeInTheDocument();
    });

    it('renders without title', () => {
      render(<LineChart data={mockData} />);
      expect(screen.getByTestId('tremor-line-chart')).toBeInTheDocument();
    });

    it('renders with custom colors', () => {
      render(<LineChart data={mockData} colors={['blue']} />);
      expect(screen.getByTestId('tremor-line-chart')).toBeInTheDocument();
    });
  });

  describe('BarChart', () => {
    it('renders with correct data', () => {
      render(<BarChart data={mockData} title="Test Bar Chart" />);
      expect(screen.getByText('Test Bar Chart')).toBeInTheDocument();
      expect(screen.getByTestId('tremor-bar-chart')).toBeInTheDocument();
    });

    it('renders with empty data', () => {
      render(<BarChart data={[]} title="Empty Chart" />);
      expect(screen.getByText('Empty Chart')).toBeInTheDocument();
      expect(screen.getByTestId('tremor-bar-chart')).toBeInTheDocument();
    });
  });
});
