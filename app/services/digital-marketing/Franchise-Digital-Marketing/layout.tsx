import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Franchise Digital Marketing Services | Markov Growth',
  description: `Drive growth across your franchise network with Markov's digital marketing services. We deliver scalable, localized strategies that boost brand visibility and leads.`
}

export default function FranchiseDigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 