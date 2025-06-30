import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Social Media Management | Markov Solutions',
  description: `Markov provides enterprise social media management to handle complex needs at scale. Secure, compliant, and effective solutions for large organizations.`
}

export default function EnterpriseSocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 