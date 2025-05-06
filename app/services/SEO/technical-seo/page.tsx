"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, BarChart, CheckCircle, Zap, Globe, FileText, Mail, Users, ArrowRight, Search, Target, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

export default function TechnicalSEOPage() {
    const router = useRouter();
    const websiteInputRef = React.useRef<HTMLInputElement>(null);

    // Hero form handler
    const handleHeroSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const website = websiteInputRef.current?.value.trim();
        if (!website) return;
        router.push(`/contact?service=technical-seo&website=${encodeURIComponent(website)}`);
    };

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section with Parallax Effect */}
            <section className="relative py-16 bg-white flex flex-col items-center justify-center">
                <div className="relative z-10 flex flex-col items-center w-full">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#4A102A] text-center mb-3 tracking-tight drop-shadow-sm">Technical Search Engine Optimization – Technical SEO</h1>
                    <p className="text-lg md:text-xl text-[#4A102A] text-center mb-8">Boost Your Website's Performance and Crawlability</p>
                    <form onSubmit={handleHeroSubmit} className="w-full max-w-xl mx-auto flex flex-col md:flex-row items-center gap-4 p-2">
                        <div className="relative flex-1 w-full">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4A102A]">
                                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M22 5 12 13 2 5"/></svg>
                            </span>
                            <input
                                ref={websiteInputRef}
                                type="text"
                                placeholder="Enter Website Address"
                                className="pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A102A] text-lg bg-white shadow-sm w-full transition-all text-[#4A102A] placeholder:text-gray-400"
                            />
                        </div>
                        <Button type="submit" className="w-full md:w-auto font-bold text-base px-6 py-3 rounded-lg shadow bg-[#4A102A] text-white hover:bg-[#9fcf8a] transition-all">
                            GET MY FREE PROPOSAL
                        </Button>
                    </form>
                </div>
            </section>

            {/* Technical SEO Company That Gets Results Section */}
            <section className="py-16 bg-[#f7f7f7]">
                <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#4A102A] text-center mb-1">A Technical SEO Company that Gets Results</h2>
                    <p className="text-[#4A102A] text-center mb-8">Boost Your Website Performance and Generate More Organic Traffic</p>
                    <p className="text-gray-700 text-center max-w-3xl mb-10">Technical SEO for WordPress and other CMS is critical to online success. With the right technical optimization SEO strategy in place, you can flag up website issues, take immediate action to resolve them and ensure all SEO elements are working properly.<br/><br/>Leverage our SEO services to your advantage and achieve profitable long-term growth. Here's what you can expect when you partner with our technical SEO company:</p>
                    <div className="grid md:grid-cols-3 gap-8 w-full">
                        {/* In-depth Website Audits */}
                        <div className="flex flex-col items-center text-center">
                            <span className="mb-3">
                                <svg width="40" height="40" fill="none" stroke="#4A102A" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                            </span>
                            <h3 className="font-semibold text-[#4A102A] mb-1">In-depth Website Audits</h3>
                            <p className="text-gray-700 text-sm">Comprehensive site audits to flag issues, analyze performance, and guide data-driven improvements for your technical SEO.</p>
                        </div>
                        {/* Technical SEO Specialists */}
                        <div className="flex flex-col items-center text-center">
                            <span className="mb-3">
                                <svg width="40" height="40" fill="none" stroke="#4A102A" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
                            </span>
                            <h3 className="font-semibold text-[#4A102A] mb-1">Technical SEO Specialists</h3>
                            <p className="text-gray-700 text-sm">Our team of certified technical SEO experts oversees your project from assessment to completion, ensuring best practices and results.</p>
                        </div>
                        {/* Full-Service SEO Solutions */}
                        <div className="flex flex-col items-center text-center">
                            <span className="mb-3">
                                <svg width="40" height="40" fill="none" stroke="#4A102A" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
                            </span>
                            <h3 className="font-semibold text-[#4A102A] mb-1">Full-Service SEO Solutions</h3>
                            <p className="text-gray-700 text-sm">We provide tailored technical SEO solutions for eCommerce, Shopify, franchises, Amazon, and local businesses.</p>
                        </div>
                        {/* Analytics and Reporting */}
                        <div className="flex flex-col items-center text-center">
                            <span className="mb-3">
                                <svg width="40" height="40" fill="none" stroke="#4A102A" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 17V9M12 17V5M17 17v-3"/></svg>
                            </span>
                            <h3 className="font-semibold text-[#4A102A] mb-1">Analytics and Reporting</h3>
                            <p className="text-gray-700 text-sm">Track your SEO campaign performance and gain actionable insights with regular consultations and detailed reports.</p>
                        </div>
                        {/* Goal-Oriented Web Strategies */}
                        <div className="flex flex-col items-center text-center">
                            <span className="mb-3">
                                <svg width="40" height="40" fill="none" stroke="#4A102A" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                            </span>
                            <h3 className="font-semibold text-[#4A102A] mb-1">Goal-Oriented Web Strategies</h3>
                            <p className="text-gray-700 text-sm">We align technical SEO tactics with your business goals, using data-driven strategies for measurable growth.</p>
                        </div>
                        {/* Proven Track Record */}
                        <div className="flex flex-col items-center text-center">
                            <span className="mb-3">
                                <svg width="40" height="40" fill="none" stroke="#4A102A" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            </span>
                            <h3 className="font-semibold text-[#4A102A] mb-1">Proven Track Record</h3>
                            <p className="text-gray-700 text-sm">Hundreds of companies trust us to fix technical issues and implement results-driven SEO strategies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Choose Thrive and Improve Your Technical SEO Section */}
           

            {/* Results/Case Studies Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#4A102A] text-center mb-1">Technical Search Engine Optimization Services With Positive Results</h2>
                    <p className="text-[#4A102A] text-center mb-8">Stand Out in This Competitive Marketplace</p>
                    <div className="w-full grid md:grid-cols-3 gap-6 mb-8">
                        {/* Card 1 */}
                        <div className="bg-[#f6fcf4] border border-[#e0f5d8] rounded-lg shadow p-6 flex flex-col items-center">
                            {/* SVG for Technical SEO Example 1 */}
                            <span className="mb-4">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6" y="18" width="44" height="20" rx="6" fill="#4A102A" fillOpacity="0.08" />
                                    <rect x="10" y="22" width="36" height="12" rx="3" fill="#4A102A" fillOpacity="0.18" />
                                    <rect x="14" y="26" width="12" height="4" rx="2" fill="#4A102A" />
                                    <circle cx="16" cy="40" r="3" fill="#4A102A" />
                                    <circle cx="40" cy="40" r="3" fill="#4A102A" />
                                </svg>
                            </span>
                            <div className="bg-[#e0f5d8] text-[#4A102A] font-semibold text-xs px-3 py-1 rounded mb-2">SITE AUDIT</div>
                            <div className="flex gap-4 text-center mb-2">
                                <div>
                                    <div className="text-lg font-bold text-[#4A102A]">+3,478</div>
                                    <div className="text-xs text-gray-500">Issues Fixed</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#4A102A]">+32.4%</div>
                                    <div className="text-xs text-gray-500">Crawl Efficiency</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-700 italic mb-2">From the Client:</div>
                            <blockquote className="text-sm text-gray-700 text-center">“Our experience with Markov's technical team has been top-notch! We saw a huge improvement in our site's health and crawlability.”</blockquote>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-[#f6fcf4] border border-[#e0f5d8] rounded-lg shadow p-6 flex flex-col items-center">
                            {/* SVG for Technical SEO Example 2 */}
                            <span className="mb-4">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="12" y="24" width="32" height="8" rx="2" fill="#4A102A" fillOpacity="0.18" />
                                    <rect x="18" y="32" width="20" height="4" rx="2" fill="#4A102A" fillOpacity="0.10" />
                                    <rect x="24" y="36" width="8" height="8" rx="2" fill="#4A102A" />
                                    <rect x="26" y="16" width="4" height="8" rx="2" fill="#4A102A" />
                                    <circle cx="28" cy="14" r="4" fill="#4A102A" fillOpacity="0.18" />
                                </svg>
                            </span>
                            <div className="bg-[#e0f5d8] text-[#4A102A] font-semibold text-xs px-3 py-1 rounded mb-2">STRUCTURED DATA</div>
                            <div className="flex gap-4 text-center mb-2">
                                <div>
                                    <div className="text-lg font-bold text-[#4A102A]">+663.7%</div>
                                    <div className="text-xs text-gray-500">Rich Results</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#4A102A]">+360%</div>
                                    <div className="text-xs text-gray-500">Index Coverage</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-700 italic mb-2">From the Client:</div>
                            <blockquote className="text-sm text-gray-700 text-center">“Thank you for the detailed technical audit! Our structured data is now perfect and our site is ranking for more features.”</blockquote>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-[#f6fcf4] border border-[#e0f5d8] rounded-lg shadow p-6 flex flex-col items-center">
                            {/* SVG for Technical SEO Example 3 */}
                            <span className="mb-4">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="14" y="24" width="28" height="8" rx="4" fill="#4A102A" fillOpacity="0.10" />
                                    <rect x="18" y="32" width="20" height="4" rx="2" fill="#4A102A" fillOpacity="0.18" />
                                    <rect x="24" y="20" width="8" height="12" rx="2" fill="#4A102A" />
                                    <circle cx="28" cy="40" r="6" fill="#4A102A" fillOpacity="0.18" />
                                    <rect x="26" y="12" width="4" height="8" rx="2" fill="#4A102A" />
                                </svg>
                            </span>
                            <div className="bg-[#e0f5d8] text-[#4A102A] font-semibold text-xs px-3 py-1 rounded mb-2">PAGE SPEED</div>
                            <div className="flex gap-4 text-center mb-2">
                                <div>
                                    <div className="text-lg font-bold text-[#4A102A]">+3,137%</div>
                                    <div className="text-xs text-gray-500">Faster Load</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#4A102A]">+80.9%</div>
                                    <div className="text-xs text-gray-500">Core Web Vitals</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-700 italic mb-2">From the Client:</div>
                            <blockquote className="text-sm text-gray-700 text-center">“Our site is now blazing fast and passes all Core Web Vitals. The technical SEO team is amazing!”</blockquote>
                        </div>
                    </div>
                    <div className="text-sm text-gray-700 text-center max-w-3xl mb-4">
                        At Markov, we work night and day to be the best technical SEO company – and our efforts have paid off throughout the years.<br/><br/>
                        In 2023, SEOblank ranked our technical SEO team No. 1 among all U.S. digital marketing agencies for technical SEO results with <span className="font-bold text-[#4A102A]">33,804 issues fixed across 50 sites and 56 URLs at the top of search engine results pages (SERPs)</span>. Our technical SEO agency also claimed the third spot in search visibility and population reach, covering nearly <span className="font-bold text-[#4A102A]">58 percent of the total U.S. population</span>.
                    </div>
                    <Button className="font-bold text-base px-8 py-3 rounded-lg shadow bg-[#4A102A] text-white hover:bg-[#9fcf8a] transition-all mt-2"
                        onClick={() => router.push('/contact?service=technical-seo')}
                    >
                        GET MORE TECHNICAL SEO WINS NOW
                    </Button>
                </div>
            </section>

            {/* Technical SEO Factors & How-To Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left: Ranking Factors */}
                        <div>
                            <div className="flex items-center mb-3">
                                <svg className="w-8 h-8 text-[#4A102A] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 17V9M12 17V5M17 17v-3"/></svg>
                                <h2 className="text-xl md:text-2xl font-bold text-[#4A102A]">What are technical SEO ranking factors?</h2>
                            </div>
                            <p className="text-gray-700 mb-4">Google looks at various technical SEO ranking factors to determine your search rankings. These include:</p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                <li>Site speed and performance</li>
                                <li>Mobile-friendliness</li>
                                <li>XML sitemaps</li>
                                <li>Structured data/schema markup</li>
                                <li>HTTPS security</li>
                                <li>Canonical tags</li>
                                <li>Robots.txt optimization</li>
                                <li>Indexability and crawl budget</li>
                                <li>Core Web Vitals</li>
                            </ul>
                        </div>
                        {/* Right: How to do Technical SEO */}
                        <div>
                            <div className="flex items-center mb-3">
                                <svg className="w-8 h-8 text-[#4A102A] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
                                <h2 className="text-xl md:text-2xl font-bold text-[#4A102A]">How to do technical SEO?</h2>
                            </div>
                            <p className="text-gray-700 mb-4">Technical SEO leverages various website and server optimizations to improve your site's crawlability, indexation, and performance, including:</p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                <li>Comprehensive site audits</li>
                                <li>Fixing crawl errors</li>
                                <li>Improving page speed</li>
                                <li>Implementing structured data</li>
                                <li>Optimizing mobile usability</li>
                                <li>Enhancing site architecture</li>
                                <li>Managing redirects and canonicalization</li>
                                <li>Monitoring Core Web Vitals</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Technical SEO Is Vital for Your Business Section */}
            <section className="py-16 bg-[#fcfcfc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#4A102A] text-center mb-1">Why Technical SEO Is Vital for Your Business</h2>
                    <p className="text-[#4A102A] text-center mb-6">Lay the Foundation for Search Engine Success</p>
                    <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
                        {/* Left: SVG Illustration */}
                        <div className="flex justify-center mb-8 md:mb-0">
                            <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="110" cy="150" rx="90" ry="20" fill="#4A102A" fillOpacity="0.08" />
                                <rect x="40" y="40" width="100" height="60" rx="8" fill="#fff" stroke="#4A102A" strokeWidth="2" />
                                <rect x="55" y="55" width="70" height="10" rx="5" fill="#4A102A" fillOpacity="0.15" />
                                <rect x="55" y="70" width="40" height="8" rx="4" fill="#4A102A" fillOpacity="0.10" />
                                <rect x="55" y="82" width="60" height="6" rx="3" fill="#4A102A" fillOpacity="0.10" />
                                <rect x="80" y="110" width="40" height="8" rx="4" fill="#4A102A" fillOpacity="0.15" />
                                <circle cx="140" cy="60" r="18" fill="#4A102A" fillOpacity="0.10" />
                                <circle cx="140" cy="60" r="12" fill="#fff" stroke="#4A102A" strokeWidth="2" />
                                <rect x="135" y="55" width="10" height="10" rx="5" fill="#4A102A" fillOpacity="0.20" />
                                <rect x="100" y="120" width="20" height="6" rx="3" fill="#4A102A" fillOpacity="0.10" />
                            </svg>
                        </div>
                        {/* Right: Content */}
                        <div>
                            <p className="text-gray-700 mb-4">In today's digital landscape, technical SEO is the backbone of a high-performing website. Without a solid technical foundation, even the best content and backlinks can't help you rank. Technical SEO ensures your site is crawlable, indexable, and fast for both users and search engines.</p>
                            <p className="text-gray-700 mb-4">A technically sound website improves user experience, increases organic visibility, and helps you stay ahead of competitors. Investing in technical SEO is essential for long-term digital growth and online success.</p>
                        </div>
                    </div>
                    {/* Benefits List */}
                    <div className="mt-6 max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
                        <h3 className="font-semibold text-[#4A102A] mb-4 text-center md:text-left">Still on the fence about investing in technical SEO? Here are the benefits:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Improved crawlability and indexation</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Faster website speed</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Better mobile usability</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Enhanced site security</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Higher search rankings</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Reduced bounce rates</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Increased organic traffic</li>
                            </ul>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Future-proof SEO foundation</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Better analytics and tracking</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Improved site architecture</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Fewer technical errors</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Increased trust and authority</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Better user experience</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Technical SEO Services Drive Lead Generation Section */}
            <section className="py-16 bg-[#fcfcfc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#4A102A] text-center mb-1">How Technical SEO Services Drive Lead Generation</h2>
                    <p className="text-[#4A102A] text-center mb-6">Make Your Website More Discoverable</p>
                    <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
                        {/* Left: SVG Illustration */}
                        <div className="flex justify-center mb-8 md:mb-0">
                            <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="40" y="30" width="100" height="70" rx="8" fill="#fff" stroke="#4A102A" strokeWidth="2" />
                                <rect x="60" y="50" width="60" height="10" rx="5" fill="#4A102A" fillOpacity="0.15" />
                                <rect x="60" y="65" width="40" height="8" rx="4" fill="#4A102A" fillOpacity="0.10" />
                                <rect x="60" y="77" width="50" height="6" rx="3" fill="#4A102A" fillOpacity="0.10" />
                                <rect x="90" y="100" width="30" height="8" rx="4" fill="#4A102A" fillOpacity="0.15" />
                                <circle cx="150" cy="60" r="18" fill="#4A102A" fillOpacity="0.10" />
                                <circle cx="150" cy="60" r="12" fill="#fff" stroke="#4A102A" strokeWidth="2" />
                                <rect x="145" y="55" width="10" height="10" rx="5" fill="#4A102A" fillOpacity="0.20" />
                                <rect x="110" y="120" width="20" height="6" rx="3" fill="#4A102A" fillOpacity="0.10" />
                            </svg>
                        </div>
                        {/* Right: Content */}
                        <div>
                            <p className="text-gray-700 mb-4">Technical SEO is the foundation for generating qualified leads online. By ensuring your website is fast, crawlable, and error-free, you increase the chances of your content being discovered by the right audience. Technical SEO improvements help search engines index your pages, which means more opportunities for your business to be found by potential customers.</p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                                <li>Fixing crawl errors and broken links</li>
                                <li>Improving site speed and performance</li>
                                <li>Implementing structured data for rich results</li>
                                <li>Optimizing for mobile usability</li>
                                <li>Enhancing site architecture and navigation</li>
                                <li>Managing redirects and canonical tags</li>
                                <li>Monitoring and improving Core Web Vitals</li>
                            </ul>
                            <p className="text-gray-700 mb-4"><span className='font-bold text-[#4A102A]'>Technical SEO</span> is essential for maximizing your website's lead generation potential. A technically sound site attracts more organic traffic, increases engagement, and drives more conversions.</p>
                        </div>
                    </div>
                    {/* Tips List */}
                    <h3 className="text-xl md:text-2xl font-bold text-[#4A102A] mb-4 text-center">Technical SEO Tips for Lead Generation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        <ul className="space-y-2 text-gray-700">
                            <li>Perform regular technical SEO audits</li>
                            <li>Fix crawl errors and broken links</li>
                            <li>Optimize site speed and Core Web Vitals</li>
                            <li>Implement structured data/schema</li>
                            <li>Ensure mobile-friendliness</li>
                            <li>Use HTTPS and secure your site</li>
                            <li>Optimize site architecture and navigation</li>
                        </ul>
                        <ul className="space-y-2 text-gray-700">
                            <li>Monitor index coverage in Google Search Console</li>
                            <li>Manage redirects and canonical tags</li>
                            <li>Keep your XML sitemap updated</li>
                            <li>Minimize duplicate content</li>
                            <li>Leverage analytics for technical insights</li>
                            <li>Partner with a trusted technical SEO agency</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Technical SEO Matters Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#4A102A]">
                        Why Technical SEO Matters
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: <BarChart className="w-10 h-10 text-[#4A102A]" />, title: "Site Performance", desc: "Faster, more reliable websites rank higher and convert better." },
                            { icon: <CheckCircle className="w-10 h-10 text-[#4A102A]" />, title: "Better Indexing", desc: "Technical SEO ensures your content is found and indexed by search engines." },
                            { icon: <Zap className="w-10 h-10 text-[#4A102A]" />, title: "Competitive Edge", desc: "Outperform competitors with a technically sound, error-free site." }
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
                            >
                                <div className="mb-4 p-3 bg-[#f0f9f9] rounded-full">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-semibold text-lg mb-2 text-[#4A102A]">{benefit.title}</h3>
                                <p className="text-gray-700">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Technical SEO Services Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#4A102A]">
                        Our Technical SEO Services
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: <FileText className="w-10 h-10 text-[#4A102A]" />, title: "Site Audits", desc: "Comprehensive technical audits to uncover and fix site issues." },
                            { icon: <Globe className="w-10 h-10 text-[#4A102A]" />, title: "Indexing & Crawlability", desc: "Optimize your site for search engine bots and better indexation." },
                            { icon: <BarChart className="w-10 h-10 text-[#4A102A]" />, title: "Speed Optimization", desc: "Improve load times and Core Web Vitals for better rankings." },
                            { icon: <CheckCircle className="w-10 h-10 text-[#4A102A]" />, title: "Mobile Optimization", desc: "Ensure your site is fully responsive and mobile-friendly." },
                            { icon: <Mail className="w-10 h-10 text-[#4A102A]" />, title: "Structured Data", desc: "Implement schema markup for enhanced search results." },
                            { icon: <Target className="w-10 h-10 text-[#4A102A]" />, title: "Analytics & Reporting", desc: "Track technical performance and improvements over time." }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
                            >
                                <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#4A102A]">{feature.title}</h3>
                                <p className="text-gray-700">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section with Gradient Animation */}
            <section className="py-16 bg-gradient-to-r from-[#4A102A] to-[#2a0717] relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Dominate Technical SEO?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let our technical SEO experts help you build a stronger, faster, and more discoverable website.
                        </p>
                        <Button
                            className="bg-white text-[#4A102A] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold shadow-lg"
                            onClick={() => router.push("/contact?service=technical-seo")}
                        >
                            Start Now
                        </Button>
                    </div>
                </div>
            </section>


            <section className="py-12 bg-white flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#4A102A] text-center mb-1">Choose Thrive and Improve Your Technical SEO</h2>
                <p className="text-[#4A102A] text-center mb-6">Achieve Top Search Engine Rankings with Our Robust Technical SEO Strategy</p>
                <button
                    className="bg-[#F28C1F] hover:bg-[#d97706] text-white font-bold py-3 px-8 rounded-full text-lg mb-8 transition-all shadow"
                    onClick={() => router.push('/contact?service=technical-seo')}
                >
                    LET'S TALK
                </button>
                {/* Awards/Badges Row */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {/* Placeholder SVGs for awards/badges */}
                    {[1,2,3,4,5,6,7,8].map((i) => (
                        <span key={i} className="inline-block grayscale">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="33" stroke="#bbb" strokeWidth="3" fill="#f7f7f7" />
                                <text x="50%" y="50%" textAnchor="middle" fill="#bbb" fontSize="14" dy=".3em">Award</text>
                            </svg>
                        </span>
                    ))}
                </div>
            </section>

            {/* FREE Digital Marketing Proposal Section */}
            <section className="py-16 bg-white flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
                    Get My <span className="text-[#4A102A]">FREE</span> Digital Marketing Proposal
                </h2>
                <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
                    {/* Left: Results Graphic */}
                    <div className="bg-[#f3e6ef] flex flex-col justify-center items-center p-8 md:w-1/2">
                        <h3 className="text-[#4A102A] text-2xl font-bold mb-2">Experience Real Results</h3>
                        <p className="text-[#4A102A] mb-6 text-sm">Partner with Markov and scale your business.</p>
                        {/* Stats */}
                        <div className="mb-6">
                            <div className="text-[#4A102A] text-lg font-bold">+810%</div>
                            <div className="text-[#4A102A] text-xs mb-2">Organic Growth</div>
                            <div className="text-[#4A102A] text-lg font-bold">+257%</div>
                            <div className="text-[#4A102A] text-xs">Page Views</div>
                        </div>
                        {/* Phone SVG Illustration */}
                        <svg width="90" height="160" viewBox="0 0 90 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="10" width="70" height="140" rx="16" fill="#fff" stroke="#4A102A" strokeWidth="3" />
                            <rect x="25" y="30" width="40" height="80" rx="8" fill="#4A102A" fillOpacity="0.10" />
                            <circle cx="45" cy="130" r="6" fill="#4A102A" fillOpacity="0.15" />
                        </svg>
                    </div>
                    {/* Right: Lead Form */}
                    <form
                        onSubmit={e => { e.preventDefault(); router.push('/contact?service=technical-seo'); }}
                        className="flex-1 p-8 flex flex-col gap-4 bg-white"
                    >
                        <div className="flex gap-4">
                            <input type="text" placeholder="First Name*" required className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#4A102A] focus:ring-2 focus:ring-[#4A102A]" />
                            <input type="text" placeholder="Last Name*" required className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#4A102A] focus:ring-2 focus:ring-[#4A102A]" />
                        </div>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Company/Organization*" required className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#4A102A] focus:ring-2 focus:ring-[#4A102A]" />
                            <input type="text" placeholder="Website" className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#4A102A] focus:ring-2 focus:ring-[#4A102A]" />
                        </div>
                        <div className="flex gap-4">
                            <input type="email" placeholder="Email Address*" required className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#4A102A] focus:ring-2 focus:ring-[#4A102A]" />
                            <input type="tel" placeholder="Phone*" required className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#4A102A] focus:ring-2 focus:ring-[#4A102A]" />
                        </div>
                        <select required className="border border-gray-200 rounded-lg px-4 py-3 text-[#4A102A] focus:ring-2 focus:ring-[#4A102A]">
                            <option value="">Services*</option>
                            <option>Technical SEO</option>
                            <option>On-Page SEO</option>
                            <option>Local SEO</option>
                            <option>eCommerce SEO</option>
                        </select>
                        <input type="text" placeholder="Company Size*" required className="border border-gray-200 rounded-lg px-4 py-3 text-[#4A102A] focus:ring-2 focus:ring-[#4A102A]" />
                        <input type="text" placeholder="How Did You Hear About Us?" className="border border-gray-200 rounded-lg px-4 py-3 text-[#4A102A] focus:ring-2 focus:ring-[#4A102A]" />
                        <textarea placeholder="Tell us about your business" rows={2} className="border border-gray-200 rounded-lg px-4 py-3 text-[#4A102A] focus:ring-2 focus:ring-[#4A102A]" />
                        <button type="submit" className="w-full bg-[#4A102A] hover:bg-[#2a0717] text-white font-bold py-3 rounded-full text-lg mt-2 transition-all shadow">SEND MY FREE PROPOSAL</button>
                        <div className="text-xs text-gray-500 text-center mt-2">In a hurry? Give us a call now at <a href="tel:8664344748" className="text-[#4A102A] font-bold underline">866-434-4748</a></div>
                    </form>
                </div>
            </section>
        </main>
    );
}