import { render, screen } from '@testing-library/react';
import { LoadingOverlay } from '@/components/ui/LoadingOverlay';
import { useLoadingStore } from '@/stores/loadingStore';

jest.mock('@/stores/loadingStore');

describe('LoadingOverlay', () => {
  it('renders when loading is true', () => {
    (useLoadingStore as jest.Mock).mockImplementation(() => ({
      isLoading: true,
      loadingMessage: 'Loading...',
    }));

    render(<LoadingOverlay />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('does not render when loading is false', () => {
    (useLoadingStore as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      loadingMessage: null,
    }));

    render(<LoadingOverlay />);
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });
});
