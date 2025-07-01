import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon Advertising & PPC Services by Markov',
  description: "Maximize your Amazon sales with Markov's expert Amazon Advertising and PPC management services. Drive traffic, increase ROI, and grow your brand on Amazon.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/online-marketplace-marketing/Amazon-Advertising-PPC',
  },
}

export default function AmazonAdvertisingPPCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 