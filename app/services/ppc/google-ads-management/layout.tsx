import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads Management Services by Markov',
  description: 'Get the most from your ad spend with Markovs Google Ads management. Campaign setup, optimization, and reporting for better results.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/ppc/google-ads-management',
  },
}

export default function GoogleAdsManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 