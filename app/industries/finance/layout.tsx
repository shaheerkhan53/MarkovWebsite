import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finance Industry Solutions by Markov',
  description: "Empower your finance business with Markov's innovative solutions. Enhance security, compliance, and operational efficiency.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/industries/finance',
  },
}

export default function FinanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}