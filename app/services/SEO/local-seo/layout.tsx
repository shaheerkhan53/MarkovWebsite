import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local SEO Services | Rank Higher on Local Search | Markov',
  description: `Boost your local search rankings with Markov's local SEO services. We help businesses attract more local customers and dominate their local market.`
}

export default function LocalSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 