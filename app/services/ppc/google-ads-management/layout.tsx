import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads Management Services | Markov PPC Agency',
  description: `Maximize your ROI with Google Ads management services from Markov. Our certified experts create data-driven campaigns that convert. Get a free audit today!`
}

export default function GoogleAdsManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 