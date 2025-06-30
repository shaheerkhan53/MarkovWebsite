import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Services Marketing & BPO Solutions | Markovate',
  description: 'Secure and compliant solutions for the finance industry. Markovate offers specialized digital marketing, BPO, and IT services to enhance customer trust and drive growth.'
}

export default function FinanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}