import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Engine Marketing (SEM) Services by Markov',
  description: 'Drive targeted traffic and maximize ROI with Markovs SEM services. Expert Google Ads, Bing Ads, and paid search management.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/ppc/search-engine-marketing',
  },
}

export default function SearchEngineMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 