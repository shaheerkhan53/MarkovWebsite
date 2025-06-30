import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'eCommerce PPC Management Services | Markov for Shops',
  description: `Drive targeted traffic and sales with eCommerce PPC management by Markov. We create and manage campaigns that maximize your ROI. Get a free proposal!`
}

export default function EcommercePPCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 