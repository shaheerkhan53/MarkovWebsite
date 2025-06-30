import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRO Audits by Markov | Boost Your Website Conversions',
  description: 'Identify leaks in your funnel with Markov's CRO audits. We analyze UX, content, and user flow to improve conversion rates and revenue. Get a detailed audit today!'
}

export default function CROAuditsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 