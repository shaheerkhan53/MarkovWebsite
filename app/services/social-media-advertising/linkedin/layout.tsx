import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedIn Advertising Services | B2B Leads with Markov',
  description: 'Markov offers LinkedIn advertising services to help US businesses connect with professionals, generate B2B leads, and build authority. Maximize ROI today!'
}

export default function LinkedInLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 