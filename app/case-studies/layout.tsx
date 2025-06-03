import type { Metadata } from 'next'

import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Case Studies | Markov International',
  description: 'Explore our portfolio of successful client projects across various industries and services.',
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