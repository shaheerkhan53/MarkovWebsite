import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Marketing Services USA | Boost Opens & Sales',
  description: 'Drive revenue with email marketing services from Markov. We craft engaging email campaigns that increase open rates, CTR, and sales for businesses in the USA.'
}

export default function EmailMarketingServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 