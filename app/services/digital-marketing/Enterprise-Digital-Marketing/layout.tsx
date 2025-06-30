import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Digital Marketing Solutions | Markov Scale',
  description: `Scale your success with Markov's enterprise digital marketing solutions. We provide integrated strategies for large organizations to dominate their digital landscape.`
}

export default function EnterpriseDigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 