import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Ahmed Muhammed - Backend Developer',
  description: 'Backend Developer experienced in building scalable web applications using PHP, Laravel, and MySQL. Portfolio showcasing projects, skills, and experience.',
  keywords: ['Backend Developer', 'PHP Developer', 'Laravel', 'MySQL', 'API Development', 'Ahmed Muhammed'],
  authors: [{ name: 'Ahmed Muhammed' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Ahmed Muhammed - Backend Developer',
    description: 'Backend Developer specializing in PHP, Laravel, and MySQL',
    siteName: 'Ahmed Muhammed Portfolio',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Ahmed Muhammed - Backend Developer'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Muhammed - Backend Developer',
    description: 'Backend Developer specializing in PHP, Laravel, and MySQL',
    images: ['/og-image.png']
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
