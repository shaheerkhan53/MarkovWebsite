import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programmatic Advertising Services by Markov',
  description: 'Automate and optimize your digital ad buying with Markov’s programmatic advertising services. Smarter targeting, better ROI, and scalable campaigns.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/ppc/programmatic-advertising',
  },
}

export default function ProgrammaticAdvertisingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 