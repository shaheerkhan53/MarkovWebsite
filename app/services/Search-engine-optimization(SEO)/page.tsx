// pages/seo-page.jsx

import Head from 'next/head';

export default function SEOPage() {
  return (
    <>
      <Head>
        <title>Professional SEO Services | Markov</title>
        <meta name="description" content="Boost your online presence with Markov's expert SEO services. We help you rank higher, drive traffic, and grow your business." />
        <meta name="keywords" content="SEO services, digital marketing, website ranking, Markov SEO, grow online" />
        <meta name="author" content="Markov" />

        {/* Open Graph (OG) Tags for social media preview */}
        <meta property="og:title" content="Professional SEO Services | Markov" />
        <meta property="og:description" content="Boost your online presence with Markov's expert SEO services." />
        <meta property="og:image" content="/images/seo-banner.jpg" />
        <meta property="og:url" content="https://www.markov.com/seo-page" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional SEO Services | Markov" />
        <meta name="twitter:description" content="Boost your online presence with Markov's expert SEO services." />
        <meta name="twitter:image" content="/images/seo-banner.jpg" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Professional SEO Services</h1>
        <p className="text-lg mb-4">
          At Markov, we specialize in delivering powerful SEO solutions that help your business grow online.
          Our team of experts uses the latest techniques to improve your website’s visibility, drive more traffic, and increase conversions.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Our SEO Services Include:</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>On-Page Optimization</li>
          <li>Technical SEO Audits</li>
          <li>High-Quality Link Building</li>
          <li>Content Strategy and Marketing</li>
          <li>Local SEO for Small Businesses</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Why Choose Markov?</h2>
        <p className="text-lg mb-6">
          We are committed to achieving real, measurable results for our clients. Our customized strategies are designed to fit your unique business needs and ensure long-term success.
        </p>

        <a 
          href="/contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Get a Free SEO Consultation
        </a>
      </main>
    </>
  );
}
