import { Metadata } from 'next'
import ServicesPageClient from '../../components/ServicesPageClient'

export const metadata: Metadata = {
  title: 'Expert Digital Marketing Services | Markov Agency USA',
  description: 'Markov\'s digital marketing services help US businesses grow with SEO, PPC, and social media strategies that drive traffic, leads, and ROI. Get started today!'
}

export default function ServicesPage() {
  return <ServicesPageClient />
} 