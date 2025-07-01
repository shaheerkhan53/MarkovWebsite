import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Franchise Digital Marketing Services by Markov',
  description: "Empower your franchise with Markov's digital marketing services. Consistent branding, local engagement, and scalable strategies.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/digital-marketing/Franchise-Digital-Marketing',
  },
}

export default function FranchiseDigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 