import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Facebook Advertising Services | Grow Sales with Markov',
  description: 'Grow sales with Facebook advertising services from Markov. Our US experts create targeted campaigns that increase leads, engagement, and ROI for your business.'
}

export default function FacebookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 