import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Markov International',
  description: 'Learn about Markov International, a global leader in Business Process Outsourcing and technology solutions.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
} 