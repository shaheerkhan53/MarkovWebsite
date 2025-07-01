import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Marketing Services by Markov | Engage & Convert',
  description: 'Markov provides expert email marketing services to help you engage your audience and drive conversions. Campaign strategy, automation, and more. Get started today!',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/content-writing/email-marketing-services',
  },
}

export default function EmailMarketingServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 