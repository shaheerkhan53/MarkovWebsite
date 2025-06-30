import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reliable BPO Services by Markov to Streamline Operations',
  description: 'Markov offers BPO services designed to boost efficiency and cut costs. From customer support to back-office tasks, we tailor solutions to fit your business. Get started today!'
}

export default function BpoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 