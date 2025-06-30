import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Social Media Marketing for Industries | Markovate",
    description: "Customized social media strategies for your industry. Markovate helps businesses in finance, healthcare, e-commerce, and more connect with their audience and drive results.",
}

export default function SocialMediaMarketingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
} 