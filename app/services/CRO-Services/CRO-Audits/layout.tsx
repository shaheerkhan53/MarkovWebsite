import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRO Audit Services by Markov',
  description: "Identify conversion barriers and opportunities with Markov's CRO audit services. Comprehensive analysis for higher website performance.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/cro-services/cro-audits',
  },
}

export default function CROAuditsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 