import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HARO Link Building Services by Markov',
  description: 'Boost your websites authority with Markovs HARO link building services. Secure high-quality links from top publications and grow your rankings.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/link-building/HARO-link-building',
  },
}

export default function HAROLinkBuildingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 