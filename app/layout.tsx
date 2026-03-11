import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gerardo Martinez Monge | Full Stack Developer',
  description:
    'Desarrollador Full Stack especializado en React, Next.js, Java Spring Boot y Python. Construyendo aplicaciones web escalables y APIs modernas.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Java',
    'Spring Boot',
    'Python',
    'Backend Developer',
    'Frontend Developer',
    'Portfolio',
    'Gerardo Martinez Monge'
  ],
  authors: [{ name: 'Gerardo Martinez Monge' }],
  creator: 'Gerardo Martinez Monge',
  metadataBase: new URL('https://gerardo-martinez.dev'),

  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://gerardo-martinez.dev',
    siteName: 'Gerardo Martinez Monge',
    title: 'Gerardo Martinez Monge | Full Stack Developer',
    description:
      'Full Stack Developer especializado en React, Next.js, Java Spring Boot y Python. Desarrollo de aplicaciones web modernas y APIs escalables.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gerardo Martinez Monge - Full Stack Developer',
      },
    ],
  },

  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}