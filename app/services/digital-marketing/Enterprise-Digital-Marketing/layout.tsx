import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Digital Marketing Services by Markov',
  description: "Scale your enterprise with Markov's digital marketing solutions. Integrated strategies for large organizations and multi-location brands.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/digital-marketing/Enterprise-Digital-Marketing',
  },
}

export default function EnterpriseDigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 