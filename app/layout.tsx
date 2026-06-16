import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevPulse | Developer signal',
  description: 'turn code, commits, and product motion into a public proof engine',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
