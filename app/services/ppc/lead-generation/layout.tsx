import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lead Generation Services by Markov',
  description: "Fill your sales pipeline with qualified leads using Markov's lead generation services. Multi-channel strategies for B2B and B2C growth.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/ppc/lead-generation',
  },
}

export default function LeadGenerationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 