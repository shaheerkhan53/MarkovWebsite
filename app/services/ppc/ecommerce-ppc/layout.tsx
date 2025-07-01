import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecommerce PPC Services by Markov',
  description: "Drive more sales with Markov's ecommerce PPC management. Expert Google Shopping, Bing, and marketplace ads for online stores.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/ppc/ecommerce-ppc',
  },
}

export default function EcommercePPCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 