import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart IT Solutions by Markov to Power Your Business',
  description: 'Discover tailored IT solutions from Markov that solve real business challenges. We deliver secure, scalable systems that drive results. Get started today!',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/it-solutions',
  },
}

export default function ITSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 