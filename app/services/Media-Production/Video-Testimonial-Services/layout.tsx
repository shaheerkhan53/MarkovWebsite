import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Testimonial Services | Build Trust with Markov',
  description: 'Markov's video production services help US brands shine. Get corporate videos, product videos, and promos that captivate audiences and boost brand presence.'
}

export default function VideoTestimonialServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 