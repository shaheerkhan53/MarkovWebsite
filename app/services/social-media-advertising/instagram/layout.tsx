import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instagram Advertising Services | Markov Grows Your Reach',
  description: 'Capture attention with Instagram advertising services by Markov. We craft visuals, reels, and ads to grow followers, engagement, and sales. Get started today!'
}

export default function InstagramLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 