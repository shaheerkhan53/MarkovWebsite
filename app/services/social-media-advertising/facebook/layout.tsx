import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Facebook Advertising Services by Markov',
  description: 'Grow your business with expert Facebook advertising services by Markov. Targeted campaigns, creative strategy, and measurable results.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/social-media-advertising/facebook',
  },
}

export default function FacebookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 