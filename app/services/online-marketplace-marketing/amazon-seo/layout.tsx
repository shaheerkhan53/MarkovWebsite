import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon SEO Services | Rank Higher & Sell More with Markov',
  description: 'Markov's Amazon SEO services boost rankings, product visibility, and sales. Optimize listings, keywords, and reviews for Amazon success. Get started today!'
}

export default function AmazonSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 