import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Production Services by Markov',
  description: 'Professional video production services by Markov. Boost your brand with high-quality videos for marketing, training, and more.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/Media-Production/Video-Production',
  },
}

export default function VideoProductionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 