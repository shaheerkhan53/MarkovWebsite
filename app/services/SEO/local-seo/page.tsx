"use client";

import React, { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { MapPin, BarChart, CheckCircle, Zap, Globe, FileText, Mail, Users, ArrowRight, Search, Target, Award } from "lucide-react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

export default function LocalSEOPage() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section with Parallax Effect */}
            <section className="relative py-16 bg-white flex flex-col items-center justify-center">
                <div className="relative z-10 flex flex-col items-center w-full">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#604652] text-center mb-3 tracking-tight drop-shadow-sm">Local Search Engine Optimization – Local SEO</h1>
                    <p className="text-lg md:text-xl text-[#604652] text-center mb-8">Grow Your Online Visibility Within Your Target Locations</p>
                    <form className="w-full max-w-xl mx-auto flex flex-col md:flex-row items-center gap-4 p-2">
                        <div className="relative flex-1 w-full">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#604652]">
                                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M22 5 12 13 2 5" /></svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Enter your website"
                                className="pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#604652] text-lg bg-white shadow-sm w-full transition-all text-[#604652] placeholder:text-gray-400"
                            />
                        </div>
                        <Link href="/contact?type=local-seo">
                            <Button 
                                type="submit" 
                                className="w-full md:w-auto font-bold text-base px-6 py-3 rounded-lg shadow bg-[#604652] text-white hover:bg-[#4d3840] transition-all"
                            >
                                GET A FREE SEO AUDIT
                            </Button>
                        </Link>
                    </form>
                </div>
            </section>

            {/* Results/Case Studies Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#604652] text-center mb-1">Local Search Engine Optimization Services With Positive Results</h2>
                    <p className="text-[#604652] text-center mb-8">Stand Out in This Competitive Marketplace</p>
                    <div className="w-full grid md:grid-cols-3 gap-6 mb-8">
                        {/* Card 1 */}
                        <div className="bg-[#fff8f9] border border-[#f3e6e9] rounded-lg shadow p-6 flex flex-col items-center">
                            {/* SVG for RV Repair Shop */}
                            <span className="mb-4">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6" y="18" width="44" height="20" rx="6" fill="#604652" fillOpacity="0.08" />
                                    <rect x="10" y="22" width="36" height="12" rx="3" fill="#604652" fillOpacity="0.18" />
                                    <rect x="14" y="26" width="12" height="4" rx="2" fill="#604652" />
                                    <circle cx="16" cy="40" r="3" fill="#604652" />
                                    <circle cx="40" cy="40" r="3" fill="#604652" />
                                </svg>
                            </span>
                            <div className="bg-[#f3e6e9] text-[#604652] font-semibold text-xs px-3 py-1 rounded mb-2">RV REPAIR SHOP</div>
                            <div className="flex gap-4 text-center mb-2">
                                <div>
                                    <div className="text-lg font-bold text-[#604652]">+3,478</div>
                                    <div className="text-xs text-gray-500">New Leads</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#604652]">+32.4%</div>
                                    <div className="text-xs text-gray-500">Organic SEO Traffic</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-700 italic mb-2">From the Client:</div>
                            <blockquote className="text-sm text-gray-700 text-center">“Our experience with Thrive has been top-notch! We felt we could create a tight line of communication with our rep. Thrive team members in this creates transparency as well as a focus on continual improvement/development.”</blockquote>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-[#fff8f9] border border-[#f3e6e9] rounded-lg shadow p-6 flex flex-col items-center">
                            {/* SVG for Law Firm */}
                            <span className="mb-4">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="12" y="24" width="32" height="8" rx="2" fill="#604652" fillOpacity="0.18" />
                                    <rect x="18" y="32" width="20" height="4" rx="2" fill="#604652" fillOpacity="0.10" />
                                    <rect x="24" y="36" width="8" height="8" rx="2" fill="#604652" />
                                    <rect x="26" y="16" width="4" height="8" rx="2" fill="#604652" />
                                    <circle cx="28" cy="14" r="4" fill="#604652" fillOpacity="0.18" />
                                </svg>
                            </span>
                            <div className="bg-[#f3e6e9] text-[#604652] font-semibold text-xs px-3 py-1 rounded mb-2">LAW FIRM</div>
                            <div className="flex gap-4 text-center mb-2">
                                <div>
                                    <div className="text-lg font-bold text-[#604652]">+663.7%</div>
                                    <div className="text-xs text-gray-500">Search Traffic</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#604652]">+360%</div>
                                    <div className="text-xs text-gray-500">Online Leads</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-700 italic mb-2">From the Client:</div>
                            <blockquote className="text-sm text-gray-700 text-center">“Thank you so much for the report! I appreciate all the details and emails you are feeding in. I have referred a few other law groups that have needed help with their SEO marketing generally. Our company wouldn't be what it is without you guys. Keep up the good work!”</blockquote>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-[#fff8f9] border border-[#f3e6e9] rounded-lg shadow p-6 flex flex-col items-center">
                            {/* SVG for Plumbing Company */}
                            <span className="mb-4">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="14" y="24" width="28" height="8" rx="4" fill="#604652" fillOpacity="0.10" />
                                    <rect x="18" y="32" width="20" height="4" rx="2" fill="#604652" fillOpacity="0.18" />
                                    <rect x="24" y="20" width="8" height="12" rx="2" fill="#604652" />
                                    <circle cx="28" cy="40" r="6" fill="#604652" fillOpacity="0.18" />
                                    <rect x="26" y="12" width="4" height="8" rx="2" fill="#604652" />
                                </svg>
                            </span>
                            <div className="bg-[#f3e6e9] text-[#604652] font-semibold text-xs px-3 py-1 rounded mb-2">PLUMBING COMPANY</div>
                            <div className="flex gap-4 text-center mb-2">
                                <div>
                                    <div className="text-lg font-bold text-[#604652]">+3,137%</div>
                                    <div className="text-xs text-gray-500">Goal Completions</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#604652]">+80.9%</div>
                                    <div className="text-xs text-gray-500">Website Traffic</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-700 italic mb-2">From the Client:</div>
                            <blockquote className="text-sm text-gray-700 text-center">“Very happy and the results have been great! Thrive has helped us focus on the areas we need to in order to grow profits. Our SEO specialist has done a great job in ensuring our SEO ranked high in a market that is very competitive.”</blockquote>
                        </div>
                    </div>
                    <div className="text-sm text-gray-700 text-center max-w-3xl mb-4">
                        At Thrive, we work night and day to be the best local SEO company – and our efforts have paid off throughout the years.<br /><br />
                        In 2020, SEOblank ranked our local SEO firm No. 1 among all U.S. digital marketing agencies for first page Google Search results with <span className="font-bold text-[#604652]">33,804 pages ranking across 50 cities and 56 URLs at the top of search engine results pages (SERPs)</span>. Our local SEO agency also claimed the third spot in search visibility and population reach, covering nearly <span className="font-bold text-[#604652]">58 percent of the total U.S. population</span>.
                    </div>
                    <Link href="/contact?type=local-seo" className="no-underline">
                        <Button 
                            className="font-bold text-base px-8 py-3 rounded-lg shadow bg-[#604652] text-white hover:bg-[#4d3840] transition-all mt-2"
                        >
                            SCHEDULE A CONSULTATION
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Local SEO Factors & How-To Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left: Ranking Factors */}
                        <div>
                            <div className="flex items-center mb-3">
                                <svg className="w-8 h-8 text-[#604652] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 17V9M12 17V5M17 17v-3" /></svg>
                                <h2 className="text-xl md:text-2xl font-bold text-[#604652]">What are local SEO ranking factors?</h2>
                            </div>
                            <p className="text-gray-700 mb-4">Google looks at various local SEO ranking factors to determine your search rankings. These include:</p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                <li>Google Business Profile or Google My Business (GMB) listing</li>
                                <li>Name, address and phone number (NAP) consistency in local business citations</li>
                                <li>Domain authority</li>
                                <li>Quality of local search citations</li>
                                <li>Click-through rate (CTR) from search results</li>
                                <li>Keywords</li>
                                <li>User experience (UX)</li>
                                <li>Review quality, velocity and diversity</li>
                                <li>Link signals</li>
                            </ul>
                        </div>
                        {/* Right: How to do Local SEO */}
                        <div>
                            <div className="flex items-center mb-3">
                                <svg className="w-8 h-8 text-[#604652] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></svg>
                                <h2 className="text-xl md:text-2xl font-bold text-[#604652]">How to do local SEO?</h2>
                            </div>
                            <p className="text-gray-700 mb-4">Local SEO leverages various local digital marketing tactics to rank up your local SEO ranking, including:</p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                <li>Local business SEO keyword targeting</li>
                                <li>Google Business Profile or Google My Business optimization</li>
                                <li>Local search citations</li>
                                <li>Online reputation management</li>
                                <li>Link building</li>
                                <li>On-page SEO</li>
                                <li>SEO local landing page optimization</li>
                                <li>Google local SEO content marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Local SEO Is Vital for Your Business Section */}
            <section className="py-16 bg-[#fcfcfc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#604652] text-center mb-1">Why Local SEO Is Vital for Your Business</h2>
                    <p className="text-[#604652] text-center mb-6">Create a Lasting Impression Across Search Engines and Your Prospects</p>
                    <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
                        {/* Left: SVG Illustration */}
                        <div className="flex justify-center mb-8 md:mb-0">
                            <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="110" cy="150" rx="90" ry="20" fill="#604652" fillOpacity="0.08" />
                                <rect x="40" y="40" width="100" height="60" rx="8" fill="#fff" stroke="#604652" strokeWidth="2" />
                                <rect x="55" y="55" width="70" height="10" rx="5" fill="#604652" fillOpacity="0.15" />
                                <rect x="55" y="70" width="40" height="8" rx="4" fill="#604652" fillOpacity="0.10" />
                                <rect x="55" y="82" width="60" height="6" rx="3" fill="#604652" fillOpacity="0.10" />
                                <rect x="80" y="110" width="40" height="8" rx="4" fill="#604652" fillOpacity="0.15" />
                                <circle cx="140" cy="60" r="18" fill="#604652" fillOpacity="0.10" />
                                <circle cx="140" cy="60" r="12" fill="#fff" stroke="#604652" strokeWidth="2" />
                                <rect x="135" y="55" width="10" height="10" rx="5" fill="#604652" fillOpacity="0.20" />
                                <rect x="100" y="120" width="20" height="6" rx="3" fill="#604652" fillOpacity="0.10" />
                            </svg>
                        </div>
                        {/* Right: Content */}
                        <div>
                            <p className="text-gray-700 mb-4">In today's competitive digital landscape, investing in the best local SEO services could mean the difference between a thriving business and a failing establishment. Where do local digital marketing and local SEO services fall in your campaign priorities?</p>
                            <p className="text-gray-700 mb-4">A MarketingSherpa study determined which type of search had the biggest impact on brands' marketing objectives and found that almost <span className='font-bold text-[#604652]'>54 percent</span> of respondents consider <span className='font-bold text-[#604652]'>local search</span> to have the most positive impact on their digital marketing efforts.</p>
                            <p className="text-gray-700 mb-4">Evidently, digital dominance has made it vital for businesses of all sizes to concentrate their efforts on local SEO optimization. Local SEO for small business and multi-location firms is a critical strategy for acquiring qualified leads and converting them into sales. If you don't have a local SEO strategy in place, you could be doing more harm to your business than you initially realize.</p>
                        </div>
                    </div>
                    {/* Benefits List */}
                    <div className="mt-6 max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
                        <h3 className="font-semibold text-[#604652] mb-4 text-center md:text-left">Still on the fence about investing in local search engine optimization services? You shouldn't be. These are the benefits of local SEO:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Stronger local community outreach</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Optimized Google My Business listing</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>High-authority local business citations</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Multi-channel local digital marketing campaigns</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Higher local SEO ranking</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>More targeted website traffic</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>More phone calls and site inquiries from prospective clients</li>
                            </ul>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Increased sales revenue</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Repeat business from loyal customers</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>More foot traffic</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Credible online reputation</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Enhanced Google Maps visibility</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Reduced advertising costs</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Increased trustworthiness and market authority</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Local SEO Services Drive Lead Generation Section */}
            <section className="py-16 bg-[#fcfcfc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#604652] text-center mb-1">How Local SEO Services Drive Lead Generation</h2>
                    <p className="text-[#604652] text-center mb-6">Make Your Brand Name More Recognizable</p>
                    <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
                        {/* Left: SVG Illustration */}
                        <div className="flex justify-center mb-8 md:mb-0">
                            <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="40" y="30" width="100" height="70" rx="8" fill="#fff" stroke="#604652" strokeWidth="2" />
                                <rect x="60" y="50" width="60" height="10" rx="5" fill="#604652" fillOpacity="0.15" />
                                <rect x="60" y="65" width="40" height="8" rx="4" fill="#604652" fillOpacity="0.10" />
                                <rect x="60" y="77" width="50" height="6" rx="3" fill="#604652" fillOpacity="0.10" />
                                <rect x="90" y="100" width="30" height="8" rx="4" fill="#604652" fillOpacity="0.15" />
                                <circle cx="150" cy="60" r="18" fill="#604652" fillOpacity="0.10" />
                                <circle cx="150" cy="60" r="12" fill="#fff" stroke="#604652" strokeWidth="2" />
                                <rect x="145" y="55" width="10" height="10" rx="5" fill="#604652" fillOpacity="0.20" />
                                <rect x="110" y="120" width="20" height="6" rx="3" fill="#604652" fillOpacity="0.10" />
                            </svg>
                        </div>
                        {/* Right: Content */}
                        <div>
                            <p className="text-gray-700 mb-4">Several elements go into creating and executing a successful marketing plan, including lead generation and local search service. <span className='font-bold text-[#604652]'>Lead generation</span> serves as the lifeblood of your business. Without a steady stream of qualified leads, your business will struggle to make sales and expand. <span className='font-bold text-[#604652]'>Local SEO</span>, on the other hand, attracts drives prospects into your website/business.</p>
                            <p className="text-gray-700 mb-4">Local business SEO services, such as local citations service and Google My Business optimization service, complement your lead generation efforts by increasing your brand awareness and driving organic traffic to your website. The more people in your community can see your website, the higher your chances of acquiring clicks and converting them into potential clients.</p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                                <li>Building your local search citations</li>
                                <li>Gathering online reviews</li>
                                <li>Participating in appropriate social networks</li>
                                <li>Creating expert content</li>
                                <li>Troubleshooting any visibility problems</li>
                                <li>Penetrating a strategic local market</li>
                                <li>Ranking for business-related keywords</li>
                                <li>Converting page visitors into leads and sales</li>
                            </ul>
                            <p className="text-gray-700 mb-4"><span className='font-bold text-[#604652]'>57 percent of business-to-business (B2B) marketers</span> consider local digital marketing services among the most effective ways to generate leads. If done right, a local search engine optimization service can drive a <span className='font-bold text-[#604652]'>146 percent conversion rate</span>. Propel your online success with growth-driven local SEO solutions.</p>
                        </div>
                    </div>
                    {/* Tips List */}
                    <h3 className="text-xl md:text-2xl font-bold text-[#604652] mb-4 text-center">Local SEO Tips for Lead Generation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        <ul className="space-y-2 text-gray-700">
                            <li>Perform a regular local SEO audit</li>
                            <li>Build out city pages</li>
                            <li>Dominate "near me" searches</li>
                            <li>Create content clusters</li>
                            <li>Optimize your site for mobile</li>
                            <li>Create an SEO strategy</li>
                            <li>Know your audience</li>
                        </ul>
                        <ul className="space-y-2 text-gray-700">
                            <li>Identify geo-specific keywords for content optimization</li>
                            <li>Monitor your local SEO ranking</li>
                            <li>Keep your sitemap up to date</li>
                            <li>Fix internal and external broken links</li>
                            <li>Build a backlink strategy</li>
                            <li>Partner with a trusted Google My Business agency</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Our Local SEO Services Are Better Than the Rest Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#604652] text-center mb-1">Why Our Local SEO Services Are Better Than the Rest</h2>
                    <p className="text-[#604652] text-center mb-6">Succeed in a Saturated Online Marketplace</p>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">Mastering how to do local SEO requires years of experience and training to produce profitable results. At Markov, we understand that juggling business operations while boosting local SEO marketing leads to work overload and can take a toll on your productivity and sanity. That's why our local SEO company is here to take the same tasks off your shoulders.<br /><br />Here's what you can expect from our online local SEO company:</p>
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Feature 1 */}
                        <div className="flex items-start gap-4">
                            <svg className="w-8 h-8 text-[#604652] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 17V9M12 17V5M17 17v-3" /></svg>
                            <div>
                                <h3 className="font-bold text-[#604652] mb-1">Affordable Local SEO Services</h3>
                                <p className="text-gray-700 text-sm">According to statistics, <span className='font-bold text-[#604652]'>42 percent of consumers</span> use search engines as their primary tool to find local business information. Make sure your site is immediately found with our affordable local SEO solutions. Markov's local SEO pricing varies depending on your company's marketing needs, annual revenue and financial capacity. Our local SEO consultant analyzes your existing online presence to create local SEO packages that deliver a high return on investment (ROI).</p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex items-start gap-4">
                            <svg className="w-8 h-8 text-[#604652] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></svg>
                            <div>
                                <h3 className="font-bold text-[#604652] mb-1">Google Analytics Reports</h3>
                                <p className="text-gray-700 text-sm">Our local digital marketing company uses Google Analytics to track your local SEO performance, identify visibility issues and provide data-driven local SEO tips to bolster your campaign results. We monitor and measure your local organic search metrics, such as website traffic, clickthrough rates (CTR), bounce rate, page views and average session duration. Once we've tracked all metrics, our local SEO specialist organizes the Google Analytics results to provide you with a clear overview of your campaign performance.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex items-start gap-4">
                            <svg className="w-8 h-8 text-[#604652] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 17V9M12 17V5M17 17v-3" /></svg>
                            <div>
                                <h3 className="font-bold text-[#604652] mb-1">Video Summary</h3>
                                <p className="text-gray-700 text-sm">When working with Markov on your local SEO campaign, you get regular detailed reports and records you can check anytime to track your local search engine optimization effectiveness. Your dedicated local SEO specialist reviews your monthly local SEO improvements and objectives. Our local digital marketing agency also provides you with a task report detailing what we've worked on. This way, you stay on top of any updates and changes on your local search service.</p>
                            </div>
                        </div>
                        {/* Feature 4 */}
                        <div className="flex items-start gap-4">
                            <svg className="w-8 h-8 text-[#604652] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></svg>
                            <div>
                                <h3 className="font-bold text-[#604652] mb-1">Expert Consultations</h3>
                                <p className="text-gray-700 text-sm">Our local SEO firm schedules regular consultations with your in-house representatives to talk about your monthly campaign results and brainstorm any additional local citations service, Google My Business optimization service or local SEO solutions we need to implement. Your local SEO specialist is available by phone or email at any time in case you have anything to discuss. The more contact we have with you, the better we'll be able to achieve your objectives.</p>
                            </div>
                        </div>
                        {/* Feature 5 */}
                        <div className="flex items-start gap-4">
                            <svg className="w-8 h-8 text-[#604652] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 17V9M12 17V5M17 17v-3" /></svg>
                            <div>
                                <h3 className="font-bold text-[#604652] mb-1">Local Digital Marketing Services</h3>
                                <p className="text-gray-700 text-sm">An experienced online local SEO company understands that local SEO for small business is just one of the many aspects of reaching your target customers. To market and advertise effectively, you need to take a holistic approach to local digital marketing. At Markov, you're provided comprehensive local digital marketing services to boost your market potential. Whether you need Google My Business services, local citations service, pay-per-click (PPC) advertising or social media marketing solutions, our local digital marketing company has got you covered!</p>
                            </div>
                        </div>
                        {/* Feature 6 */}
                        <div className="flex items-start gap-4">
                            <svg className="w-8 h-8 text-[#604652] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></svg>
                            <div>
                                <h3 className="font-bold text-[#604652] mb-1">Local SEO Guide</h3>
                                <p className="text-gray-700 text-sm">Understanding what is local search optimization can be difficult, especially if you don't have a basic knowledge of SEO and online marketing. As a local SEO service provider, we ensure all our clients understand the details of their local SEO campaigns. Our local SEO consultant creates a thorough local SEO guide and publishes blogs and case studies regularly to familiarize yourself with the different local digital marketing concepts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local SEO Intro Section with Animated Cards */}
            <section className="py-16 bg-white border-b border-[#604652]/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center gap-10"
                    >
                        {/* Animated SVG Illustration */}
                        <motion.div
                            className="md:w-1/2 flex justify-center mb-8 md:mb-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <svg width="320" height="260" viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.rect
                                    x="40" y="60" width="240" height="160" rx="16"
                                    fill="#F3F4F6"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.circle
                                    cx="160" cy="140" r="60"
                                    fill="#604652" fillOpacity="0.1"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                />
                                <motion.circle
                                    cx="160" cy="140" r="40"
                                    fill="#604652" fillOpacity="0.2"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                />
                                <motion.circle
                                    cx="160" cy="140" r="20"
                                    fill="#604652" fillOpacity="0.3"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                />
                                <motion.rect
                                    x="140" y="120" width="40" height="40" rx="8"
                                    fill="#604652"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                />
                            </svg>
                        </motion.div>

                        {/* Content with Animated Text */}
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left text-[#604652]">
                                Dominate Your Local Market with <span className="text-[#604652]">Local SEO</span>
                            </h2>
                            <div className="space-y-4 text-base md:text-lg text-gray-700">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    Local SEO is crucial for businesses that serve specific geographic areas. With 46% of all Google searches having local intent, appearing in local search results is essential for attracting nearby customers.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    Our Local SEO services help you appear in the "Local Pack" and Google Maps, making it easier for potential customers to find and choose your business over competitors.
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section with Animated Cards */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#604652]"
                    >
                        Why Local SEO Matters
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: <MapPin className="w-10 h-10 text-[#604652]" />, title: "Local Visibility", desc: "Get found by customers searching for businesses like yours in your area." },
                            { icon: <BarChart className="w-10 h-10 text-[#604652]" />, title: "Higher Conversions", desc: "Local searchers are more likely to visit and purchase from your business." },
                            { icon: <Zap className="w-10 h-10 text-[#604652]" />, title: "Competitive Edge", desc: "Outrank local competitors and become the go-to business in your area." }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 bg-[#f0f9f9] rounded-full">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 text-[#604652]">{benefit.title}</h3>
                                    <p className="text-gray-700">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section with Interactive Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#604652]"
                    >
                        Our Local SEO Services
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: <MapPin className="w-10 h-10 text-[#604652]" />, title: "Google Business Profile", desc: "Optimize and manage your Google Business Profile for maximum visibility." },
                            { icon: <Globe className="w-10 h-10 text-[#604652]" />, title: "Local Citations", desc: "Build and maintain consistent business listings across the web." },
                            { icon: <FileText className="w-10 h-10 text-[#604652]" />, title: "Local Content", desc: "Create location-specific content to attract local customers." },
                            { icon: <BarChart className="w-10 h-10 text-[#604652]" />, title: "Review Management", desc: "Monitor and respond to customer reviews to build trust." },
                            { icon: <CheckCircle className="w-10 h-10 text-[#604652]" />, title: "Local Link Building", desc: "Earn local backlinks to boost your local search rankings." },
                            { icon: <Mail className="w-10 h-10 text-[#604652]" />, title: "Reporting & Analytics", desc: "Track your local search performance and ROI." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-[#604652]">{feature.title}</h3>
                                    <p className="text-gray-700">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section with Gradient Animation */}
            <section className="py-16 bg-gradient-to-r from-[#604652] to-[#4d3840] relative overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                </motion.div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Dominate Local Search?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let our local SEO experts help you attract more customers from your area.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/contact?type=local-seo">
                                <Button
                                    className="bg-white text-[#604652] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold shadow-lg"
                                >
                                    Start Now
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Google My Business Is a Big Part of Local SEO Section */}
            <section className="py-16 bg-[#fcfcfc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#604652] text-center mb-1">Why Google My Business Is a Big Part of Local SEO</h2>
                    <p className="text-[#604652] text-center mb-6">Expand Your Market Reach and Gain Consumer Trust</p>
                    <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
                        {/* Left: Content */}
                        <div>
                            <p className="text-gray-700 mb-4">Google My Business, now called <a href="#" className="text-[#604652] underline">Google Business Profile</a>, is a free marketing tool powered by Google that allows marketers to manage how their brand information is presented on Google Search and Google Maps. Your Google My Business page shows valuable business details – such as your company's NAP, hours of operation, website link and customer reviews – to assist potential customers with their online search.</p>
                            <p className="font-semibold text-gray-900 mb-2">Why should you prioritize Google My Business SEO?</p>
                            <p className="text-gray-700 mb-4">Google My Business optimization is a crucial aspect of local SEO marketing. Your Google My Business page serves as one of the local SEO ranking factors, which dictate your online success. By claiming your Google My Business listing, you allow search engines to verify your brand's existence and authenticity.</p>
                            <p className="text-gray-700 mb-4">Here are more reasons you need to include <a href="#" className="text-[#604652] underline">Google My Business optimization</a> in your local SEO marketing efforts:</p>
                        </div>
                        {/* Right: SVG Illustration */}
                        <div className="flex justify-center mb-8 md:mb-0">
                            <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="30" y="30" width="120" height="70" rx="8" fill="#fff" stroke="#604652" strokeWidth="2" />
                                <rect x="50" y="50" width="80" height="10" rx="5" fill="#604652" fillOpacity="0.15" />
                                <rect x="50" y="65" width="50" height="8" rx="4" fill="#604652" fillOpacity="0.10" />
                                <rect x="50" y="77" width="60" height="6" rx="3" fill="#604652" fillOpacity="0.10" />
                                <rect x="80" y="100" width="30" height="8" rx="4" fill="#604652" fillOpacity="0.15" />
                                <rect x="90" y="30" width="30" height="20" rx="4" fill="#604652" fillOpacity="0.15" />
                                <rect x="110" y="30" width="20" height="20" rx="4" fill="#604652" fillOpacity="0.25" />
                                <rect x="120" y="30" width="10" height="10" rx="2" fill="#604652" fillOpacity="0.30" />
                                <rect x="60" y="120" width="80" height="10" rx="5" fill="#604652" fillOpacity="0.08" />
                                <rect x="140" y="30" width="20" height="20" rx="4" fill="#604652" fillOpacity="0.10" />
                                <rect x="150" y="30" width="10" height="10" rx="2" fill="#604652" fillOpacity="0.20" />
                                <rect x="100" y="110" width="20" height="6" rx="3" fill="#604652" fillOpacity="0.10" />
                                <rect x="120" y="110" width="20" height="6" rx="3" fill="#604652" fillOpacity="0.10" />
                            </svg>
                        </div>
                    </div>
                    {/* Benefits List */}
                    <div className="mt-6 max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Build brand recognition</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Drive customer engagement</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Tap into potential revenue</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Increase your chances of getting in the <a href="#" className="text-[#604652] underline">Google Local 3 Pack</a></li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Get targeted exposure</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Manage your reputation</li>
                            </ul>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Provide accurate business information</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Boost your online credibility</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Gain customer trust</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Drive qualified leads and traffic</li>
                                <li className="flex items-center"><span className="mr-2 text-green-600">✔</span>Post important news and updates</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-gray-700 mt-8 text-center">Google My Business SEO is one of the surefire ways to help your brand earn credibility and clicks to your website. Take advantage of our Google My Business optimization service and entice more users to visit your online store and physical location.<br /><br />Discover how our Google My Business agency can streamline your GMB SEO and overall local SEO optimization.</p>
                </div>
            </section>

            {/* How To Choose the Best Local SEO Company Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#604652] text-center mb-1">How To Choose the Best Local SEO Company</h2>
                    <p className="text-[#604652] text-center mb-6">Entrust Your Digital Success to the Experts</p>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">Are you having a hard time evaluating the local SEO agencies in your area? Finding the right online local SEO company to manage your Google My Business services and other local digital marketing processes takes significant time and careful thinking and planning.<br /><br />These are the top considerations to help you narrow down your list of the best local SEO companies:</p>
                    <div className="grid md:grid-cols-3 gap-8 mb-10">
                        {/* 1. Local SEO Packages */}
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-8 h-8 text-[#604652] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 17V9M12 17V5M17 17v-3" /></svg>
                            <h3 className="font-bold text-[#604652] mb-1">1. Local SEO Packages</h3>
                            <p className="text-gray-700 text-sm">Reliable local SEO agencies offer a diverse range of local SEO solutions that fit your needs, preferences, limitations and capabilities. Choose a local SEO service provider that analyzes your current market standing and outlines a clear roadmap to achieve your local SEO goals. Besides our local SEO services, we also offer a <a href="#" className="text-[#604652] underline">digital marketing strategy development service</a> to help you better understand where your business is and where it should be.</p>
                        </div>
                        {/* 2. Local SEO Pricing */}
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-8 h-8 text-[#604652] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 17V9M12 17V5M17 17v-3" /></svg>
                            <h3 className="font-bold text-[#604652] mb-1">2. Local SEO Pricing</h3>
                            <p className="text-gray-700 text-sm">A common mistake among marketers is choosing an SEO service company that offers affordable local SEO without examining the package inclusions and ongoing local SEO pricing. Don't make the same mistake. Partner with a local SEO agency that offers transparent local SEO pricing and provides price projections as your campaign progresses.</p>
                        </div>
                        {/* 3. Industry Experience */}
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-8 h-8 text-[#604652] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></svg>
                            <h3 className="font-bold text-[#604652] mb-1">3. Industry Experience</h3>
                            <p className="text-gray-700 text-sm">To enjoy the benefits of local SEO, your chosen local SEO service provider must understand your industry requirements, market standards and competition. Reliable local SEO agencies boast years of experience and expertise in dealing with local SEO campaigns for different brands across industries. Our local SEO company works with <a href="#" className="text-[#604652] underline">thousands of businesses</a> with various specialties. Discover what our clients have to say about our service.</p>
                        </div>
                        {/* 4. Local Search Optimization Processes */}
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-8 h-8 text-[#604652] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></svg>
                            <h3 className="font-bold text-[#604652] mb-1">4. Local Search Optimization Processes</h3>
                            <p className="text-gray-700 text-sm">Working with a Google My Business agency or SEO service company for the first time can wreak havoc on your success if the local digital marketing processes are not carefully laid out. To achieve the best results, be sure to partner with a local search engine optimization company that prioritizes local SEO services based on the degree of importance. Our local SEO firm performs extensive research to determine your local SEO priorities and address your campaign challenges.</p>
                        </div>
                        {/* 5. Track Record of Success */}
                        <div className="flex flex-col items-center text-center">
                            <svg className="w-8 h-8 text-[#604652] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 17V9M12 17V5M17 17v-3" /></svg>
                            <h3 className="font-bold text-[#604652] mb-1">5. Track Record of Success</h3>
                            <p className="text-gray-700 text-sm">One of the most important considerations in choosing a local SEO marketing company is its digital presence and track record. Entrust your local SEO campaign to a local SEO agency that not only offers affordable local SEO packages but also maintains a reputation for client success. For best results, a local SEO company ranks high within its service areas and receives verified positive reviews from satisfied clients.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Link href="/contact?type=local-seo">
                            <button 
                                className="bg-[#E28B2D] hover:bg-[#c46f13] text-white font-bold px-8 py-4 rounded-lg text-base shadow transition-all"
                            >
                                INCREASE YOUR LOCAL CUSTOMERS
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Get My FREE Local SEO Proposal Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                        Get My <span className="text-[#604652]">FREE</span> Local SEO Proposal
                    </h2>
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-stretch max-w-4xl mx-auto mb-10">
                        {/* Left: Local SEO Themed Graphic */}
                        <div className="md:w-1/2 flex flex-col justify-center items-center bg-[#f7f5f3] rounded-xl p-6">
                            <div className="mb-6 flex flex-col items-center">
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                                    <circle cx="40" cy="40" r="36" fill="#604652" fillOpacity="0.08" />
                                    <path d="M40 60c8-10 16-18.5 16-28A16 16 0 1 0 24 32c0 9.5 8 18 16 28Z" fill="#604652" />
                                    <circle cx="40" cy="32" r="6" fill="#fff" stroke="#604652" strokeWidth="2" />
                                </svg>
                                <div className="text-2xl font-bold text-[#604652] mb-2 text-center">Experience Local SEO Growth</div>
                                <div className="text-[#604652] mb-4 text-center">Partner with Markov to boost your local search visibility and attract more nearby customers.</div>
                                <div className="flex flex-col gap-2 text-[#604652] font-semibold text-center">
                                    <div>+810% Increase in Local Search Visibility</div>
                                    <div>+257% More Local Leads</div>
                                </div>
                            </div>
                        </div>
                        {/* Right: Lead Form */}
                        <form className="md:w-1/2 grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name*" className="col-span-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#604652]" required />
                            <input type="text" placeholder="Last Name*" className="col-span-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#604652]" required />
                            <input type="text" placeholder="Company/Organization*" className="col-span-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#604652]" required />
                            <input type="text" placeholder="Website" className="col-span-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#604652]" />
                            <input type="email" placeholder="Email Address*" className="col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#604652]" required />
                            <input type="tel" placeholder="Phone*" className="col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#604652]" required />
                            <select className="col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#604652]">
                                <option>Services*</option>
                                <option>Local SEO</option>
                                <option>Google My Business</option>
                                <option>Content Marketing</option>
                                <option>Other</option>
                            </select>
                            <select className="col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#604652]">
                                <option>Monthly Budget*</option>
                                <option>$1,000 - $2,000</option>
                                <option>$2,000 - $5,000</option>
                                <option>$5,000+</option>
                            </select>
                            <textarea placeholder="Tell us about your business" className="col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#604652] min-h-[60px]" />
                            <button 
                                type="submit" 
                                className="col-span-2 bg-[#604652] hover:bg-[#4d3840] text-white font-bold py-3 rounded-lg mt-2 transition-all"
                            >
                                SEND MY FREE PROPOSAL
                            </button>
                            <div className="col-span-2 text-xs text-gray-500 mt-2 text-center">
                                In a hurry? Give us a call now at <a href="tel:8669084748" className="text-[#604652] font-semibold">866.908.4748</a><br />
                                By submitting your phone number, you agree to receiving texts from our agency.
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
