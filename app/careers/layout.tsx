import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at Markov: Build Your Future With Our Team',
  description: 'Explore exciting career opportunities at Markov. Join a team that values growth, creativity, and innovation. Discover your next role. Get started today!',
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 