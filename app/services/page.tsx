import { Metadata } from 'next'
import ServicesPageClient from '../../components/ServicesPageClient'

export const metadata: Metadata = {
  title: 'Our Services | MarkovWeb',
  description: 'Explore our comprehensive range of digital marketing, SEO, PPC, web development, and marketplace management services.',
}

export default function ServicesPage() {
  return <ServicesPageClient />
} 