import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital PR Outreach Services by Markov',
  description: "Expand your brand's reach and authority with Markov's digital PR outreach services. Earn high-quality backlinks and media coverage.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/link-building/Digital-PR-Outreach',
  },
}

export default function DigitalPROutreachLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 