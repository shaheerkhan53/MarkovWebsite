import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Behavior Analytics Services | Markov Insights',
  description: "Understand how users interact with your site through Markov's user behavior analytics. Boost conversions with data-driven insights. Get started today!"
}

export default function UserBehaviorAnalyticsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 