import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programmatic Advertising Services | Markov Display Ads',
  description: `Reach your audience at scale with programmatic advertising services from Markov. We use data-driven strategies to deliver targeted display ads that perform.`
}

export default function ProgrammaticAdvertisingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 