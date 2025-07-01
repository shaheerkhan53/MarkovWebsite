import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Enterprise SEO Services by Markov',
    description: 'Scale your enterprise’s online presence with Markov’s enterprise SEO services. Advanced strategies for large websites and organizations.',
    robots: 'index, follow',
    alternates: {
        canonical: 'https://markovinternational.com/services/SEO/enterprise-seo',
    },
}

export default function EnterpriseSEOLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
} 