import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Walmart Marketplace Services by Markov',
  description: "Grow your business on Walmart Marketplace with Markov's expert services. From setup to optimization, we help you succeed on Walmart.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/online-marketplace-marketing/Walmart-marketplace',
  },
}

export default function WalmartMarketplaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 