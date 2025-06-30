import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education Marketing & BPO Solutions | Markovate',
  description: "Enhance student engagement and streamline operations with Markovate's digital marketing, BPO, and IT solutions for the education sector."
}

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}