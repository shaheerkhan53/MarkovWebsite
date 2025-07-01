import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Industry Solutions by Markov',
  description: "Transform your healthcare business with Markov's tailored solutions. Improve patient care, streamline operations, and ensure compliance.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/industries/healthcare',
  },
}

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 