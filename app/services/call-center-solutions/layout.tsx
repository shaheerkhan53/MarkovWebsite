import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Call Center Solutions by Markov | Support That Scales',
  description: 'Markov provides call center solutions to improve customer service and streamline communication. Boost efficiency and satisfaction. Get started today!',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/call-center-solutions',
  },
}

export default function CallCenterSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 