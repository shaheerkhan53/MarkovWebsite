import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Markov International - Business Solutions',
  description: 'Markov International offers comprehensive business solutions including BPO, IT, Telecommunication, Digital Marketing, E-Commerce Management, and Call Center Solutions.',
  generator: 'Markov International',
  keywords: [
    'Business Solutions', 
    'BPO Services', 
    'IT Solutions', 
    'Telecommunication', 
    'Digital Marketing', 
    'E-Commerce Management', 
    'Call Center Solutions',
    'Technology Consulting',
    'Business Process Outsourcing',
    'Tech Services'
  ],
  authors: [{ name: 'Markov International' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://markovinternational.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://markovinternational.com',
    title: 'Markov International - Innovative Business Solutions',
    description: 'Empower your business with Markov International\'s comprehensive suite of services in IT, Digital Marketing, Telecommunications, BPO, and more.',
    siteName: 'Markov International',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Markov International Logo and Brand Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markov International - Business Solutions',
    description: 'Empower your business with Markov International\'s comprehensive suite of services in IT, Digital Marketing, Telecommunications, BPO, and more.',
    images: ['/images/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2DD8D4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
