import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Franchise Social Media Marketing Services | Markovate',
  description: 'Centralize your brand and empower local franchisees with Markovate\'s social media marketing. Drive growth, engagement, and consistency across your network.'
}

export default function FranchiseSocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

 