import type { Metadata } from 'next';

import { META } from '@/constants/metadata';
import Providers from '@/contexts/Providers';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(META.domain_URL),
  title: {
    default: META.title,
    template: `%s | ${META.siteName}`,
  },
  description: META.description,
  keywords: [...META.keyword],
  icons: {
    icon: '/icon.ico',
  },
  openGraph: {
    title: META.title,
    description: META.description,
    siteName: META.siteName,
    locale: 'ko_KR',
    type: 'website',
    url: META.domain_URL,
  },
  // verification: {
  //   google: META.google_verification,
  // },
  twitter: {
    title: META.title,
    description: META.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <div className="layout">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
