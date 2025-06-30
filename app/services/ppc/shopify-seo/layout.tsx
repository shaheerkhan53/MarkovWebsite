import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopify SEO Services | Rank Higher & Sell More | Markov',
  description: `Rank higher and sell more with Markov's Shopify SEO services. Our experts optimize your store to attract more customers and drive organic sales. Get started!`
}

export default function ShopifySEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 