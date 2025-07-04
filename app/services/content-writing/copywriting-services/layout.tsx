import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best SEO Copywriting Services for High-Converting Content',
  description: 'Looking for powerful, search-optimized copy? Markov offers the best SEO copywriting services tailored to your business. Let your content do the selling. Call now!',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/content-writing/copywriting-services',
  },
}

export default function CopywritingServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 