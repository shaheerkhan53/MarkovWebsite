import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Management Services by Markov',
  description: 'Let Markov manage your social media presence. Content creation, scheduling, engagement, and analytics for business growth.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/social-media-marketing/social-media-management',
  },
}

export default function SocialMediaManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 