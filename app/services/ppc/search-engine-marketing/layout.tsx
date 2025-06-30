import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Engine Marketing (SEM) Services | Markov SEM',
  description: `Drive targeted traffic and conversions with Markov's search engine marketing (SEM) services. We deliver expert PPC and SEM strategies that boost ROI.`
}

export default function SearchEngineMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 