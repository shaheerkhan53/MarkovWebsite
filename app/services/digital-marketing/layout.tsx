import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Services by Markov | Grow Your Business',
  description: 'Markov offers comprehensive digital marketing services to boost your online presence and drive results. SEO, PPC, social media, and more. Get started today!',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/digital-marketing',
  },
}

export default function DigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 