import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Brand Management by Markov',
  description: "Build and protect your brand reputation with Markov's social media brand management services. Strategy, monitoring, and crisis response.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/social-media-marketing/social-media-brand-management',
  },
}

export default function SocialMediaBrandManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 