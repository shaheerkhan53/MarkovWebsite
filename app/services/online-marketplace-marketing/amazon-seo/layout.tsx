import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon SEO Services by Markov | Boost Marketplace Sales',
  description: 'Markov offers Amazon SEO services to help your products rank higher and sell more on Amazon. Optimize your listings and grow your business. Get started today!',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/online-marketplace-marketing/amazon-seo',
  },
}

export default function AmazonSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 