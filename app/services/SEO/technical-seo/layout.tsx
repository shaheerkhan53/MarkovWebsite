import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical SEO Services | Website Audits & Optimization',
  description: `Ensure your website is optimized for search engines with Markov's technical SEO services. We offer complete audits and optimization to boost your rankings.`
}

export default function TechnicalSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 