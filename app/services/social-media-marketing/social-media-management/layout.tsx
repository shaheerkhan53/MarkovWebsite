import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Management Services USA | Markov Agency',
  description: `Boost your brand with Markov's social media management services in the USA. We handle content, engagement, and growth so you can focus on your business.`
}

export default function SocialMediaManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 