import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights & Expertise | Markov Blog',
  description: 'Stay updated with the latest trends, strategies, and insights in business services and technology from Markov.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
} 