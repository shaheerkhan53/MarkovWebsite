// pages/seo/local-seo.jsx

import Head from 'next/head';

export default function LocalSEO() {
  return (
    <>
      <Head>
        <title>Local SEO Services | Markov</title>
        <meta name="description" content="Dominate your local market with Markov's expert Local SEO services. Get found by customers near you!" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Highlighted Heading Box */}
        <div className="bg-green-100 p-4 rounded-md mb-8 flex items-center gap-2">
          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3 9H7a1 1 0 010-2h6a1 1 0 010 2z" />
          </svg>
          <h1 className="text-2xl font-bold text-green-700">Search Engine Optimization (SEO)</h1>
        </div>

        {/* List Style */}
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
          <li>Local SEO</li>
          <li>Technical SEO</li>
          <li>Franchise SEO</li>
          <li>Enterprise SEO</li>
          <li>Generative Engine Optimization</li>
          <li>SEO Audits</li>
          <li>Franchise SEO Audit</li>
          <li>Enterprise SEO Audit</li>
        </ul>

      </main>
    </>
  );
}
