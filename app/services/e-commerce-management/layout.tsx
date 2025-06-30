import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-Commerce Management Services by Markov | Sell Smarter',
  description: 'Markov\'s e-commerce management services help you run, scale, and optimize your online store. From listings to logistics—we handle it all. Get started today!'
}

export default function ECommerceManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 