import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Production Services by Markov | Create Impactful Media',
  description: 'Markov offers video production services that elevate brands. Engage audiences with professional corporate videos, product videos, and brand storytelling. Start today!'
}

export default function VideoProductionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 