import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'eCommerce SEO Services | Boost Online Store Rankings',
  description: `Boost your online store's visibility with Markov's eCommerce SEO services. We drive organic traffic and sales with proven strategies for online retailers.`
}

export default function EcommerceSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 