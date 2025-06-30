import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Experience Testing Services | Markov Optimizes UX',
  description: "Enhance usability with Markov's user experience testing services. Find issues hurting engagement and conversions. Improve your website's performance today!"
}

export default function UserExperienceTestingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 