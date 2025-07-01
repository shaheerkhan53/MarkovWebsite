import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Strategy Development by Markov',
  description: 'Develop a winning digital marketing strategy with Markov. Data-driven planning, channel selection, and performance measurement.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/digital-marketing/Digital-Marketing-Strategy-Development',
  },
}

export default function DigitalMarketingStrategyDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 