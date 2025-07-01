import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedIn Advertising Services by Markov',
  description: 'Reach professionals and decision-makers with LinkedIn advertising services by Markov. B2B targeting, lead generation, and brand growth.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/social-media-advertising/linkedin',
  },
}

export default function LinkedInLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 