import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Franchise Social Media Services by Markov',
  description: "Empower your franchise with Markov's social media services. Consistent branding, local engagement, and scalable strategies.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/social-media-marketing/franchise-social-media',
  },
}

export default function FranchiseSocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

 