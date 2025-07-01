import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Content Writing Services by Markov | Rank Higher',
  description: 'Get high-quality, SEO-optimized content writing services from Markov. Improve your search rankings and engage your audience. Get started today!',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/content-writing/seo-content-writing',
  },
}

export default function SEOContentWritingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 