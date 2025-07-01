import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Social Media Services by Markov',
  description: "Scale your enterprise's social media with Markov. Strategy, content, and analytics for large organizations and multi-location brands.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/social-media-marketing/enterprise-social-media',
  },
}

export default function EnterpriseSocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 