import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopify SEO Services by Markov',
  description: "Improve your Shopify store's rankings and sales with Markov's expert SEO services. On-page, technical, and content optimization.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/ppc/shopify-seo',
  },
}

export default function ShopifySEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 