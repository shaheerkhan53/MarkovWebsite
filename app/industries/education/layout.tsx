import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education Industry Solutions by Markov',
  description: "Advance your educational institution with Markov's technology and outsourcing solutions. Improve learning outcomes and operational efficiency.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/industries/education',
  },
}

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}