import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qazaq Mūra',
  description: 'Phase 0 infrastructure stub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
