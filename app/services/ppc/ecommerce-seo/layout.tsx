import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecommerce SEO Services by Markov',
  description: "Boost your online store's visibility and sales with Markov's ecommerce SEO services. Technical, on-page, and content optimization.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/ppc/ecommerce-seo',
  },
}

export default function EcommerceSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 