import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bowling Champ | Bowling Tournament Management',
  description: 'Run your next bowling tournament online with ease. Features include online registration, real-time scoring, and instant payouts.',
  keywords: 'bowling tournament, tournament management, online registration, bowling scoring',
  openGraph: {
    title: 'Bowling Champ | Bowling Tournament Management',
    description: 'Run your next bowling tournament online with ease. Features include online registration, real-time scoring, and instant payouts.',
    type: 'website',
    locale: 'en_US',
    url: 'https://bowlingchamp.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bowling Champ | Modern Tournament Management',
    description: 'Run your next bowling tournament online with ease. Features include online registration, real-time scoring, and instant payouts.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TDJHCLHNVW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TDJHCLHNVW');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
