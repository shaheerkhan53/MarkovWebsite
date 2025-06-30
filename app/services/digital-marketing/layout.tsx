import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Services by Markov That Deliver Growth',
  description: 'Markov offers digital marketing services designed to grow your business. From SEO to social media, we create strategies that drive real results.'
}

export default function DigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 