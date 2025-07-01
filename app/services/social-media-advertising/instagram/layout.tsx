import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instagram Advertising Services by Markov',
  description: 'Boost your brand with Instagram advertising services by Markov. Creative campaigns, influencer partnerships, and audience growth.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/social-media-advertising/instagram',
  },
}

export default function InstagramLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 