import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical SEO Services by Markov',
  description: "Optimize your website's technical foundation with Markov's technical SEO services. Improve site speed, crawlability, and search rankings.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/SEO/technical-seo',
  },
}

export default function TechnicalSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 