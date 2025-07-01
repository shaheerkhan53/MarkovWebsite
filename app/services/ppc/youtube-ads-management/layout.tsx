import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YouTube Ads Management Services by Markov',
  description: "Reach your audience on YouTube with Markov's expert ads management. Video ad strategy, targeting, and analytics for business growth.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/ppc/youtube-ads-management',
  },
}

export default function YoutubeAdsManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 