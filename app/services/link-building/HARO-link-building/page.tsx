"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const primaryColor = '#074799';
const accentColor = '#F59E1B';
const lightBg = '#F6FAF9';

const mediaLogos = [
  { src: '/media/placeholder-logo-1.svg', alt: 'Publication 1' },
  { src: '/media/placeholder-logo-2.svg', alt: 'Publication 2' },
  { src: '/media/placeholder-logo-3.svg', alt: 'Publication 3' },
  { src: '/media/placeholder-logo-4.svg', alt: 'Publication 4' },
  { src: '/media/placeholder-logo-5.svg', alt: 'Publication 5' },
  { src: '/media/placeholder-logo-6.svg', alt: 'Publication 6' },
];

const testimonialsData = [
  {
    quote: 'Securing links through HARO seemed daunting, but this team made it efficient and effective. We landed placements we never thought possible!',
    author: 'Ahmed P., Tech Startup Founder',
  },
  {
    quote: 'The quality of backlinks we received via their HARO service significantly boosted our DA. Truly game-changing for our SEO.',
    author: 'Fatima K., E-commerce Manager',
  },
  {
    quote: 'Their HARO pitching strategy is top-notch. Consistent results and excellent communication throughout the process.',
    author: 'Yusuf A., Digital Marketing Lead',
  },
];

const haroStats = [
  { value: 200, label: 'Successful Pitches Monthly', plus: true },
  { value: 70, label: 'Avg. DA of Placements', plus: false },
  { value: 95, label: 'Client Retention Rate (%)', plus: false },
  { value: 5, label: 'Years HARO Expertise', plus: true },
];

function CountUp({ end, duration = 2, plus = false }: { end: number; duration?: number, plus?: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / (duration * 60));
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <>
      {count}
      {plus ? '+' : (typeof end === 'number' && end < 100 && end > 1 ? '%' : '')}
    </>
  );
}

export default function HAROLinkBuildingPage() {
  const router = useRouter();
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-b from-[#F6FAF9] to-white min-h-screen text-gray-900">
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-[#074799] to-[#0e5bb5] text-white overflow-hidden">
        <div className="animate-fade-in">
          <div className="flex flex-col items-center justify-center mb-8">
            <span className="text-6xl mb-4">🔗</span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">HARO Link Building</h1>
            <p className="mb-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90">Build High-Quality Backlinks From Authority Sites with a Trusted HARO SEO Agency</p>
            <div className="flex justify-center mb-6">
              <input type="text" placeholder="Enter Website Address" className="border rounded-l px-4 py-3 w-64 text-gray-800 focus:ring-2 focus:ring-[#F59E1B]" />
              <button 
                className="bg-[#F59E1B] text-white px-8 py-3 rounded-r font-bold hover:bg-yellow-700 transition-all text-lg shadow-lg"
                onClick={() => router.push('/contact?type=HARO&source=hero')}
              >GET MY FREE PROPOSAL</button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 opacity-80">
              <span className="text-3xl">🏢</span>
              <span className="text-3xl">💼</span>
              <span className="text-3xl">📰</span>
              <span className="text-3xl">🌐</span>
              <span className="text-3xl">📈</span>
              <span className="text-3xl">🛒</span>
              <span className="text-3xl">💡</span>
              <span className="text-3xl">🗞️</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ color: primaryColor }}
        >
          Securing Links from High-Authority Publications
        </motion.h2>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-16 max-w-4xl mx-auto">
          {mediaLogos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ opacity: 1, scale: 1.05, filter: 'grayscale(0%)' }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
              style={{ filter: 'grayscale(80%)' }}
            >
              <div className="h-10 md:h-12 w-auto px-4 py-2 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                {logo.alt}
            </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={`py-20 px-4 bg-[#F6FAF9] text-center`}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ color: primaryColor }}
        >
          What Our Clients Say About Our HARO Services
        </motion.h2>
        
        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={testimonialIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-10 md:p-12 relative min-h-[280px] md:min-h-[250px] flex flex-col justify-center"
            style={{ boxShadow: `0 8px 32px 0 rgba(7, 71, 153, 0.1)` }}
          >
            <span className="absolute top-6 left-6 text-6xl opacity-10" style={{ color: primaryColor }}>❝</span>
            <blockquote className="italic text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              {testimonialsData[testimonialIdx].quote}
            </blockquote>
            <p className="font-semibold text-md" style={{ color: primaryColor }}>
              — {testimonialsData[testimonialIdx].author}
            </p>
            <span className="absolute bottom-6 right-6 text-6xl opacity-10" style={{ color: primaryColor }}>❞</span>
          </motion.div>
          
          <div className="flex justify-center gap-3 mt-8">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIdx(idx)}
                aria-label={`View testimonial ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out 
                  ${testimonialIdx === idx ? `bg-[#F59E1B] w-8` : `bg-gray-300 hover:bg-gray-400`}
                `}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {haroStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: `0 12px 38px 0 rgba(7, 71, 153, 0.12)` }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all"
              style={{ boxShadow: `0 8px 32px 0 rgba(7, 71, 153, 0.08)` }}
            >
              <span className="text-4xl md:text-5xl font-extrabold mb-3" style={{ color: primaryColor }}>
                <CountUp end={stat.value} plus={stat.plus} />
              </span>
              <span className="text-gray-600 text-sm md:text-base font-medium text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.04 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#074799] blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-[#F59E1B] blur-3xl"
          />
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ color: primaryColor }}
        >
          Our Proven HARO Link Building Process
        </motion.h2>

        {[{
          title: "Phase 1: Strategy & Setup",
          steps: [
            { icon: '🎯', title: 'Client Onboarding & Goal Setting', desc: 'Understanding your niche, target audience, and desired link profile to tailor our HARO strategy.' },
            { icon: '👤', title: 'Persona Development & Angle Identification', desc: 'Crafting expert personas and identifying unique angles to make your pitches stand out.' },
            { icon: '📧', title: 'HARO Account Setup & Monitoring', desc: 'Setting up and meticulously monitoring HARO queries relevant to your expertise and industry.' },
          ]
        }, {
          title: "Phase 2: Pitching & Outreach",
          steps: [
            { icon: '🔍', title: 'Daily Query Filtration', desc: 'Sifting through hundreds of HARO requests to pinpoint the most valuable and relevant opportunities daily.' },
            { icon: '✍️', title: 'Expert Pitch Crafting', desc: 'Writing compelling, concise, and journalist-friendly responses that highlight your expertise and provide direct value.' },
            { icon: '📤', title: 'Timely Submission & Follow-up', desc: 'Ensuring your high-quality pitches are submitted promptly to meet journalist deadlines.' },
          ]
        }, {
          title: "Phase 3: Placement & Reporting",
          steps: [
            { icon: '🔗', title: 'Link Acquisition & Verification', desc: 'Tracking successful placements and verifying the acquisition of high-quality backlinks from authoritative sites.' },
            { icon: '📊', title: 'Performance Reporting', desc: 'Providing transparent reports on successful pitches, secured links, and their SEO impact (e.g., DA of linking sites).' },
            { icon: '📈', title: 'Strategy Refinement', desc: 'Continuously analyzing results to refine pitching strategies and maximize your link building success.' },
          ]
        }].map((phase, phaseIdx) => (
          <div key={phase.title} className="mb-16 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: phaseIdx * 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-semibold text-center mb-10"
              style={{ color: accentColor }}
            >
              {phase.title}
            </motion.h3>
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 max-w-6xl mx-auto relative">
              {phase.steps.map((step, idx) => (
                <React.Fragment key={step.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: (phaseIdx * 0.2) + (idx * 0.15) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all w-full md:w-1/3 min-h-[260px] z-10 relative flex-grow"
                    style={{ boxShadow: `0 8px 32px 0 rgba(7, 71, 153, 0.08)` }}
                  >
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[${primaryColor}] to-[#0e5bb5] rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                      {step.icon}
                    </div>
                    <h4 className="font-bold mb-3 text-xl mt-10" style={{ color: primaryColor }}>{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{step.desc}</p>
                  </motion.div>
                  {idx < phase.steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      transition={{ duration: 0.5, delay: (phaseIdx * 0.2) + (idx * 0.15 + 0.2) }}
                      viewport={{ once: true }}
                      className="hidden md:block w-px md:w-16 h-16 md:h-1 bg-gradient-to-r from-[${primaryColor}] to-[${accentColor}] mx-auto md:mx-2 my-4 md:my-auto rounded-full self-center"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Section: Key Benefits of HARO Link Building */}
      <section className={`py-24 px-4 bg-[#F6FAF9]`}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          style={{ color: primaryColor }}
        >
          Unlock Powerful Benefits with HARO Link Building
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Leverage HARO to not only acquire high-quality backlinks but also to significantly enhance your brand's authority, visibility, and overall SEO performance. It's a strategic approach to earning media mentions that resonate.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center justify-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex items-center justify-center w-full max-w-md aspect-square group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#074799]/5 to-[#F59E1B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-8xl md:text-9xl transform group-hover:scale-110 transition-transform duration-500" style={{color: primaryColor}}>🔗</span>
                <span className="absolute top-1/4 left-1/4 text-5xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2" style={{color: accentColor}}>🚀</span>
                <span className="absolute bottom-1/4 right-1/4 text-5xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 translate-x-1/2 translate-y-1/2" style={{color: accentColor}}>📈</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 text-left max-w-xl"
          >
            <ul className="space-y-5">
              {[
                { title: 'Gain High-Authority Backlinks', desc: 'Secure editorial links from reputable news sites and blogs, significantly boosting your Domain Authority (DA) and trustworthiness in Google\'s eyes.', icon: '🏅' },
                { title: 'Increase Brand Visibility & Awareness', desc: 'Get your brand mentioned on established publications, exposing your business to wider audiences and enhancing brand recognition.', icon: '🚀' },
                { title: 'Improve SEO & Search Rankings', desc: 'High-quality backlinks are a crucial ranking factor. HARO helps you earn links that can directly improve your website\'s position in SERPs.', icon: '📈' },
                { title: 'Build Industry Authority & Credibility', desc: 'Being cited as an expert source by journalists positions you as a thought leader in your field, building trust with potential customers.', icon: '🏆' },
                { title: 'Drive Referral Traffic', desc: 'Mentions and links from popular websites can send highly relevant referral traffic directly to your site.', icon: '🤝' },
                { title: 'Cost-Effective Link Building', desc: 'Compared to other link building tactics, HARO offers a highly efficient way to earn powerful links by providing value.', icon: '💰' },
              ].map((item, idx) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 text-gray-700 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#074799]/10 flex items-center justify-center text-xl" style={{ color: primaryColor }}>
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg mb-1" style={{color: primaryColor}}>{item.title}</h4>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section: HARO Service Deliverables */}
      <section className="py-24 px-4 bg-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ color: primaryColor }}
        >
          Our HARO Link Building Service Deliverables
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { icon: '🎯', title: 'Focused HARO Link Building Tactic', desc: 'We focus on acquiring links from high-authority publications that drive increased SEO performance. Our HARO service team works closely with your team, so you stay on top of strategies we implement.' },
            { icon: '✍️', title: 'Outstanding Pitch Copy', desc: 'Our HARO backlinks service team boasts link building experts adept at creating unique HARO pitches that give you the best and most relevant links. We keep your HARO pitch concise and personal and respond fast to queries to increase your chances of getting published.' },
            { icon: '🧑‍💼', title: 'Custom HARO Persona Templates', desc: 'We conduct extensive research to develop tailored HARO persona templates that streamline your process and increase your chances of getting featured on high-quality websites.' },
            { icon: '🏆', title: 'High DR HARO Backlinks Guaranteed', desc: 'Our HARO link building services team implements data-driven strategies to gain the high-quality backlinks you need to rank higher. We focus on securing links with strong domain ratings.' },
            { icon: '🔗', title: 'Live Links of Published Articles', desc: 'Once you sign up for our HARO service, you will get a complete list of live, published articles that we contributed to, including other websites that reposted these articles.' },
            { icon: '📊', title: 'Detailed & Transparent Reporting', desc: 'We provide detailed competitor analysis and monthly reports, so you know exactly where each investment goes. Our HARO service team will also keep communication with your project manager to keep you updated on your campaign development.' },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: `0 12px 38px 0 rgba(7, 71, 153, 0.12)` }}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all min-h-[300px] md:min-h-[320px]"
              style={{ boxShadow: `0 8px 32px 0 rgba(7, 71, 153, 0.08)` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#074799]/10 to-[#F59E1B]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl" style={{color: primaryColor}}>{item.icon}</span>
            </div>
              <h3 className="font-semibold text-xl mb-3" style={{ color: primaryColor }}>{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button 
            className="bg-[#F59E1B] text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-600 transition-all hover:scale-105 transform flex items-center gap-2"
            onClick={() => router.push('/contact?type=HARO&source=deliverables_cta')}
          >
            Enhance My Brand Visibility Now
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>

      {/* Section: Why Choose Us For HARO Link Building */}
      <section className={`py-24 px-4 bg-[#F6FAF9]`}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ color: primaryColor }}
        >
          Why Partner with Us for HARO Link Building?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { 
              icon: '🧑‍💻', 
              title: 'HARO Link Building Experts', 
              desc: 'Our dedicated link building team boasts years of experience and deep expertise in digital marketing and HARO outreach. We invest in continuous training and development, utilizing advanced HARO SEO tools and proven methodologies to ensure we provide HARO services that deliver targeted, high-impact results for your brand.' 
            },
            { 
              icon: '📈', 
              title: 'Focused & Strategic Pitching Process', 
              desc: 'As a strategy-first digital marketing agency, we adhere to a proven growth formula for HARO link building success. Our experts meticulously assess each media opportunity against strict backlink qualification criteria, ensuring it aligns perfectly with your established persona and meets your specific campaign requirements.' 
            },
            { 
              icon: '🤝', 
              title: 'Transparent & Consultative Approach', 
              desc: 'We believe in partnership. We provide expert consultations before initiating your first link order to ensure you fully understand our HARO link building process. Our strategies are always tailored to your unique business needs, industry nuances, and specific objectives, fostering a collaborative path to success.' 
            },
            { 
              icon: '🔍', 
              title: 'Quality Over Quantity Focus', 
              desc: 'We prioritize securing high-authority, relevant backlinks that genuinely move the needle for your SEO. Our team avoids low-quality placements and focuses on opportunities that enhance your brand credibility and search engine rankings effectively.' 
            },
            { 
              icon: '⚙️', 
              title: 'Efficient Systems & Prompt Action', 
              desc: 'HARO opportunities are time-sensitive. Our streamlined processes and dedicated team ensure rapid identification of relevant queries and swift submission of high-quality pitches, maximizing your chances of getting selected by journalists.' 
            },
            { 
              icon: '🌟', 
              title: 'Proven Track Record of Success', 
              desc: 'We have a history of delivering exceptional results for clients across various industries. Our portfolio showcases successful HARO campaigns that have significantly boosted organic visibility, domain authority, and referral traffic for businesses like yours.' 
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all flex flex-col min-h-[300px] md:min-h-[340px]"
              style={{ boxShadow: `0 8px 32px 0 rgba(7, 71, 153, 0.07)` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#074799]/10 to-[#F59E1B]/10 rounded-xl flex items-center justify-center mb-6 self-start">
                <span className="text-3xl" style={{color: primaryColor}}>{item.icon}</span>
            </div>
              <h3 className="text-xl font-semibold mb-4 self-start" style={{ color: primaryColor }}>{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow self-start text-left">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: FAQs about HARO Link Building */}
      <section className="py-24 px-4 bg-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ color: primaryColor }}
        >
          Frequently Asked Questions About HARO Link Building
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-5">
          {[
            {
              q: 'What exactly is HARO and how does it help with link building?',
              a: 'HARO (Help a Reporter Out) is a platform connecting journalists with expert sources. By providing valuable responses to journalist queries, you can earn high-quality backlinks when your contribution is featured in their articles. These are often from authoritative news sites and blogs, boosting your SEO.'
            },
            {
              q: 'Is it difficult to get links through HARO?',
              a: 'It can be competitive, as many sources pitch for each query. Success depends on quickly finding relevant queries, crafting high-quality, concise pitches that directly answer the journalist\'s needs, and building a reputation for reliability. Our service streamlines this process for you.'
            },
            {
              q: 'What kind of websites can I get links from via HARO?',
              a: 'HARO is used by a wide range of publications, from major international news outlets (like Forbes, Business Insider, etc.) to influential industry blogs and niche websites. We target opportunities that align with your brand and offer high SEO value.'
            },
            {
              q: 'How long does it take to see results from HARO link building?',
              a: 'Initial placements can sometimes be secured within a few weeks. However, HARO link building is an ongoing effort. Consistent, high-quality pitching over several months typically yields the best results in terms of link volume and impact on your site\'s authority and rankings.'
            },
            {
              q: 'Can I approve pitches before they are sent?',
              a: 'Our standard process involves our expert team crafting and submitting pitches based on the agreed strategy and your persona. For specific campaigns or preferences, we can discuss approval workflows, though this may impact the speed required for HARO success.'
            },
            {
              q: 'Do you guarantee a certain number of links per month?',
              a: 'While we don\'t guarantee a specific number of links (as placement depends on journalist selection), we guarantee a consistent, high-volume of quality pitches to relevant queries. Our strategies are designed to maximize your placement rate and secure valuable links consistently.'
            }
          ].map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/70"
              style={{boxShadow: `0 5px 20px 0 rgba(7, 71, 153, 0.06)`}}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold" style={{ color: primaryColor }}>{faq.q}</span>
                <motion.div
                  animate={{ rotate: openFaq === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl" style={{color: accentColor}}
                >
                  ▼
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-5 md:p-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base">
                  {faq.a}
            </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: Final Call to Action */}
      <section className="py-24 px-4 text-center bg-gradient-to-br from-[#074799] via-[#0b54a3] to-[#0e5bb5] text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            style={{ textShadow: '0 3px 15px rgba(0,0,0,0.15)' }}
          >
            Ready to Elevate Your Brand with High-Authority HARO Links?
          </h2>
          <p className="mb-10 text-xl md:text-2xl text-white/90 leading-relaxed">
            Stop leaving valuable backlink opportunities on the table. Let our HARO experts craft compelling pitches that get you featured in top publications, drive referral traffic, and significantly boost your SEO.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
            <input 
              type="text" 
              placeholder="Your Website URL (e.g., example.com)" 
              className="border-none rounded-xl px-6 py-4 w-full sm:w-auto sm:flex-grow text-gray-800 focus:ring-2 focus:ring-[#F59E1B] bg-white/95 text-lg placeholder-gray-500 shadow-md"
            />
            <motion.button 
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 25px rgba(245, 158, 27, 0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#F59E1B] text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-600 transition-all text-lg shadow-lg w-full sm:w-auto flex items-center justify-center gap-3"
              onClick={() => router.push('/contact?type=HARO&source=final_cta')}
            >
              Get Your Free HARO Proposal
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </motion.button>
            </div>
          <p className="text-sm text-white/70">
            No-obligation consultation. Let's discuss your link building goals!
          </p>
        </motion.div>
      </section>
    </div>
  );
}