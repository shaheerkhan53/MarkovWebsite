import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Testimonial Services by Markov',
  description: 'Build trust and credibility with professional video testimonial services by Markov. Capture authentic customer stories to boost your brand.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/Media-Production/Video-Testimonial-Services',
  },
}

export default function VideoTestimonialServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 