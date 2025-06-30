import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YouTube Ads Management Services | Markov Video Ads',
  description: `Capture your audience with YouTube ads management from Markov. We create compelling video campaigns that drive engagement, leads, and sales. Learn more!`
}

export default function YoutubeAdsManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 