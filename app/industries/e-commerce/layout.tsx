import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "E-commerce Industry Solutions | Markovate",
    description: "Propel your e-commerce brand with Markovate's tailored digital marketing, BPO, and IT solutions. Drive sales, enhance customer experience, and scale efficiently.",
}

export default function ECommerceLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
} 