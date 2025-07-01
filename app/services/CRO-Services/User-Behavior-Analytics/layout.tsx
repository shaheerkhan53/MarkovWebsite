import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Behavior Analytics Services by Markov',
  description: "Unlock actionable insights with Markov's user behavior analytics services. Improve conversions and user experience with data-driven analysis.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/services/CRO-Services/User-Behavior-Analytics',
  },
}

export default function UserBehaviorAnalyticsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 