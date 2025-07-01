import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'E-Commerce Industry Solutions by Markov',
    description: 'Grow your e-commerce business with Markov’s end-to-end solutions. Boost sales, optimize operations, and enhance customer experience.',
    robots: 'index, follow',
    alternates: {
        canonical: 'https://markovinternational.com/industries/e-commerce',
    },
}

export default function ECommerceLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
} 