import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Social Media Marketing Industry Solutions by Markov',
    description: 'Grow your brand with Markov’s social media marketing solutions. Strategy, content, and analytics for all industries.',
    robots: 'index, follow',
    alternates: {
        canonical: 'https://markovinternational.com/industries/social-media-marketing',
    },
}

export default function SocialMediaMarketingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
} 