import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Photography Services by Markov',
  description: 'Showcase your products with professional photography services by Markov. High-quality images for e-commerce, catalogs, and marketing.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/Media-Production/Product-Photography-Services',
  },
}

export default function ProductPhotographyServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 