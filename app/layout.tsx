import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import { ScrollToTop } from '@/components/ScrollToTop'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Grow with Markov: Digital Marketing Services in USA',
  description: 'Markov is a top digital marketing agency in the USA. We help grow your business with smart strategies, SEO, and ads. Boost your online presence today!',
  generator: 'Markov International',
  keywords: [
    'digital marketing services',
    'digital marketing agency in the USA',
    'grow your business',
    'Business Solutions', 
    'BPO Services', 
    'IT Solutions', 
    'Telecommunication', 
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
  verification: {
    google: 'naYQR2pp3wCaWkEJN7A1KhpbrnpxbrySo-zeJkRzCTA',
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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-B793RD0LKC" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B793RD0LKC');
        `}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "s50rlomsen");
        `}
      </Script>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="pt-28">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
