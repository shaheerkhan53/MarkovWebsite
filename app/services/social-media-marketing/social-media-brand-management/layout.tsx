import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Brand Management | Build Your Presence',
  description: `Build a powerful brand with Markov's social media brand management. We create strategies that enhance recognition, trust, and loyalty. Get started today!`
}

export default function SocialMediaBrandManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 