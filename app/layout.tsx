import React from "react"
import type { Metadata } from 'next'
import { Inter, Geist_Mono, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: '400', style: ['normal', 'italic'], variable: '--font-instrument-serif' });

export const metadata: Metadata = {
  title: 'Business-Purpose HELOC Options | USHELOC',
  description: 'Explore home equity financing for small business needs, including equipment, inventory, payroll, and expansion. Learn about business-purpose HELOC options.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon-32x32.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/favicon-16x16.jpg', sizes: '16x16', type: 'image/jpeg' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.jpg',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_instrumentSerif.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QJCEJS5Y49"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QJCEJS5Y49');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
