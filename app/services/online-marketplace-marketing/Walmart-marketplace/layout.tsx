import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Walmart Marketplace Services USA | Sell More with Markov',
  description: 'Expand your brand with Walmart marketplace services by Markov. From listings to SEO and advertising, we help maximize your Walmart sales. Get started today!'
}

export default function WalmartMarketplaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 