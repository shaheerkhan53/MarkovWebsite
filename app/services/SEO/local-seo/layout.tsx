import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local SEO Services by Markov',
  description: "Boost your local business visibility with Markov's expert local SEO services. Get found by customers in your area and grow your business.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/SEO/local-seo',
  },
}

export default function LocalSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 