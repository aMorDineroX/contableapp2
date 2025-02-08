'use client';

export default function Template({ children }: { children: React.ReactNode }) {
  if (typeof window !== 'undefined') {
    window.__NEXT_DATA__ = window.__NEXT_DATA__ || {};
    window.__NEXT_DATA__.pathname = window.location.pathname;
  }
  return children;
}
