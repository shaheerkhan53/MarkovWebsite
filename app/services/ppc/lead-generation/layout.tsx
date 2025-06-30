import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PPC Lead Generation Services | Markov for Leads',
  description: `Fill your sales pipeline with high-quality leads from Markov's PPC lead generation services. We create targeted campaigns that deliver results. Get started!`
}

export default function LeadGenerationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 