import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telecommunication Services by Markov | Stay Connected',
  description: 'Markov delivers reliable telecommunication solutions to keep your business connected and secure. Improve communication and performance. Get started today!'
}

export default function TelecommunicationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 