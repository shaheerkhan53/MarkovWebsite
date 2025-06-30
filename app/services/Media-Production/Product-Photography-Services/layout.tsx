import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Photography Services by Markov | Sell More Online',
  description: 'Stand out online with professional product photography services by Markov. Perfect for ecommerce, catalogs, and ads to boost sales in the US market.'
}

export default function ProductPhotographyServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 