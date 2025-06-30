import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Marketing & BPO Solutions | Markov',
  description: `Markov provides specialized healthcare marketing and BPO solutions to help providers grow their practice and improve patient communication. Learn more.`
}

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 