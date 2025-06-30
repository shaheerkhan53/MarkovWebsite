import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Enterprise SEO Services for Large-Scale Websites | Markovate",
    description: "Drive scalable organic growth with Markovate's enterprise SEO services. We specialize in technical SEO, content strategy, and authority building for large organizations.",
}

export default function EnterpriseSEOLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
} 