import { render, screen, cleanup } from '@testing-library/react';
import DashboardStats from '@/components/dashboard/DashboardStats';
import { renderWithProviders } from '../utils/test-utils';

jest.mock('@heroicons/react/24/outline', () => ({
  CurrencyDollarIcon: () => <div data-testid="currency-icon" />,
  ChartBarIcon: () => <div data-testid="chart-icon" />,
  ArrowTrendingUpIcon: () => <div data-testid="trend-icon" />,
}));

describe('DashboardStats', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders all stats cards', () => {
    renderWithProviders(<DashboardStats />);
    expect(screen.getByText('Revenus')).toBeInTheDocument();
    expect(screen.getByText('Transactions')).toBeInTheDocument();
    expect(screen.getByText('Mobile Money')).toBeInTheDocument();
  });

  it('displays trend indicators correctly', () => {
    renderWithProviders(<DashboardStats />);

    // Check for specific trend values
    expect(screen.getByText(/\+12%/)).toBeInTheDocument();
    expect(screen.getByText(/-2%/)).toBeInTheDocument();
    expect(screen.getByText(/\+8%/)).toBeInTheDocument();

    // Verify total number of trend indicators
    const trendTexts = screen.getAllByText(/% vs mois dernier/);
    expect(trendTexts).toHaveLength(3);
  });

  it('renders all icons', () => {
    renderWithProviders(<DashboardStats />);
    const icons = screen.getAllByTestId(/.*-icon/);
    expect(icons).toHaveLength(3);
    expect(screen.getByTestId('currency-icon')).toBeInTheDocument();
    expect(screen.getByTestId('chart-icon')).toBeInTheDocument();
    expect(screen.getByTestId('trend-icon')).toBeInTheDocument();
  });
});
