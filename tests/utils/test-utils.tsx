import { render } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/providers/theme-provider';

// Proper matchMedia mock
const mockMatchMedia = () => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  media: '',
  onchange: null,
});

// Setup global mocks
global.matchMedia = global.matchMedia || mockMatchMedia;

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      back: jest.fn(),
      pathname: '/',
    };
  },
}));

export function renderWithProviders(ui: React.ReactElement) {
  return render(
    <SessionProvider session={null}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        themes={['light', 'dark']}
      >
        {ui}
      </ThemeProvider>
    </SessionProvider>
  );
}
