import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Grain } from '@/components/Grain';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'El Houssaine Ihssous — Développeur multimédia',
  description:
    'Portfolio créatif d’El Houssaine Ihssous : branding, UI/UX, web design, print et expériences digitales immersives.',
  openGraph: {
    title: 'El Houssaine Ihssous — Développeur multimédia',
    description:
      'Branding, UI/UX, web design, print et expériences digitales immersives.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="grain font-sans antialiased">
        <Grain />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
