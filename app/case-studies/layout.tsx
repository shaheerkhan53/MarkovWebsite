import type { Metadata } from 'next'

import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Markov Case Studies: Real Results, Proven Strategies',
  description: 'Explore Markovs case studies and see how weve helped US businesses overcome challenges with tailored digital marketing solutions and measurable results.',
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>

      <main>{children}</main>
    </>
  )
} 