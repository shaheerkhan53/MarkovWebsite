"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart, CheckCircle, Zap, Globe, FileText, Mail, Users, ArrowRight, Search, Target, Award, Shield, Clock, TrendingUp, Layers, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function EnterpriseSEOPage() {
    const router = useRouter();
    const websiteInputRef = React.useRef<HTMLInputElement>(null);
    const proposalWebsiteInputRef = React.useRef<HTMLInputElement>(null);

    // Hero form handler
    const handleHeroSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const website = websiteInputRef.current?.value.trim();
        if (!website) return;
        router.push(`/contact?service=enterprise-seo&website=${encodeURIComponent(website)}`);
    };

    // Proposal form handler
    const handleProposalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const website = proposalWebsiteInputRef.current?.value.trim();
        if (website) {
            router.push(`/contact?service=enterprise-seo&website=${encodeURIComponent(website)}`);
        } else {
            router.push(`/contact?service=enterprise-seo`);
        }
    };

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative py-20 bg-gradient-to-b from-white to-[#fdf4f7] flex flex-col items-center justify-center"
            >
                <div className="relative z-10 flex flex-col items-center w-full">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-extrabold text-[#A91D3A] text-center mb-4 tracking-tight drop-shadow-sm"
                    >
                        Enterprise SEO Services
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#A91D3A] text-center mb-6"
                    >
                        Scale Your Organic Growth with Proven Enterprise SEO Solutions
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg text-gray-600 text-center mb-8 max-w-3xl"
                    >
                        Transform your enterprise's digital presence with our comprehensive SEO strategies. We help large organizations dominate search rankings and drive sustainable organic growth.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap justify-center gap-4 mb-8"
                    >
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
                            <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                            <span className="text-gray-700">Expert Team</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
                            <BarChart className="w-5 h-5 text-[#A91D3A]" />
                            <span className="text-gray-700">Proven Results</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
                            <Target className="w-5 h-5 text-[#A91D3A]" />
                            <span className="text-gray-700">Custom Solutions</span>
                        </div>
                    </motion.div>
                    <motion.form 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        onSubmit={handleHeroSubmit} 
                        className="w-full max-w-xl mx-auto flex flex-col md:flex-row items-center gap-4 p-2"
                    >
                        <div className="relative flex-1 w-full">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A91D3A]">
                                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M22 5 12 13 2 5"/></svg>
                            </span>
                            <input
                                ref={websiteInputRef}
                                type="text"
                                placeholder="Enter Website Address"
                                className="pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A91D3A] text-lg bg-white shadow-sm w-full transition-all text-[#A91D3A] placeholder:text-gray-400"
                            />
                        </div>
                        <Button type="submit" className="w-full md:w-auto font-bold text-base px-6 py-3 rounded-lg shadow bg-[#A91D3A] text-white hover:bg-[#d46a7a] transition-all">
                            GET MY FREE PROPOSAL
                        </Button>
                    </motion.form>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-4">Enterprise SEO Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive solutions designed for large-scale businesses to achieve sustainable growth in organic search.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Service Card 1 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#fbe9ed]"
                        >
                            <div className="w-16 h-16 bg-[#fbe9ed] rounded-full flex items-center justify-center mb-6">
                                <Shield className="w-8 h-8 text-[#A91D3A]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#A91D3A] mb-4">Technical SEO Audit</h3>
                            <p className="text-gray-600 mb-6">Comprehensive analysis of your website's technical health, identifying issues that impact search engine visibility and user experience.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Site Structure Analysis</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Performance Optimization</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Mobile-Friendliness Check</span>
                                </li>
                            </ul>
                        </motion.div>
                        {/* Service Card 2 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#fbe9ed]"
                        >
                            <div className="w-16 h-16 bg-[#fbe9ed] rounded-full flex items-center justify-center mb-6">
                                <FileText className="w-8 h-8 text-[#A91D3A]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#A91D3A] mb-4">Content Strategy</h3>
                            <p className="text-gray-600 mb-6">Data-driven content planning and creation to establish authority, engage your audience, and drive organic traffic.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Keyword Research</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Content Planning</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Content Optimization</span>
                                </li>
                            </ul>
                        </motion.div>
                        {/* Service Card 3 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#fbe9ed]"
                        >
                            <div className="w-16 h-16 bg-[#fbe9ed] rounded-full flex items-center justify-center mb-6">
                                <Layers className="w-8 h-8 text-[#A91D3A]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#A91D3A] mb-4">Link Building</h3>
                            <p className="text-gray-600 mb-6">Strategic acquisition of high-quality backlinks to improve domain authority and search rankings.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Outreach Strategy</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Content Partnerships</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Link Quality Analysis</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Results Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-[#fdf4f7]"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-4">Proven Results</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how we've helped enterprise clients achieve significant growth in organic search.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Result Card 1 */}
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl p-8 shadow-lg text-center"
                        >
                            <div className="text-4xl font-bold text-[#A91D3A] mb-2">+250%</div>
                            <div className="text-gray-600 mb-4">Organic Traffic Growth</div>
                            <p className="text-gray-700">For a leading e-commerce platform</p>
                        </motion.div>
                        {/* Result Card 2 */}
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl p-8 shadow-lg text-center"
                        >
                            <div className="text-4xl font-bold text-[#A91D3A] mb-2">+180%</div>
                            <div className="text-gray-600 mb-4">Keyword Rankings</div>
                            <p className="text-gray-700">For a global technology company</p>
                        </motion.div>
                        {/* Result Card 3 */}
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl p-8 shadow-lg text-center"
                        >
                            <div className="text-4xl font-bold text-[#A91D3A] mb-2">+300%</div>
                            <div className="text-gray-600 mb-4">Lead Generation</div>
                            <p className="text-gray-700">For a B2B enterprise client</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Process Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-4">Our Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">A systematic approach to delivering exceptional results for your enterprise.</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Process Steps */}
                            <div className="space-y-8">
                                {/* Step 1 */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#fbe9ed] rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-[#A91D3A]">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#A91D3A] mb-2">Discovery & Analysis</h3>
                                        <p className="text-gray-600">We begin with a comprehensive analysis of your current SEO performance, competitors, and market opportunities.</p>
                                    </div>
                                </motion.div>
                                {/* Step 2 */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#fbe9ed] rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-[#A91D3A]">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#A91D3A] mb-2">Strategy Development</h3>
                                        <p className="text-gray-600">Based on our analysis, we develop a customized SEO strategy aligned with your business goals.</p>
                                    </div>
                                </motion.div>
                                {/* Step 3 */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#fbe9ed] rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-[#A91D3A]">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#A91D3A] mb-2">Implementation</h3>
                                        <p className="text-gray-600">Our team executes the strategy with precision, ensuring all technical and content optimizations are properly implemented.</p>
                                    </div>
                                </motion.div>
                                {/* Step 4 */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#fbe9ed] rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-[#A91D3A]">4</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#A91D3A] mb-2">Monitoring & Optimization</h3>
                                        <p className="text-gray-600">We continuously monitor performance and make data-driven adjustments to maximize results.</p>
                                    </div>
                                </motion.div>
                            </div>
                    </div>
                    </div>
                    </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-gradient-to-r from-[#A91D3A] to-[#d46a7a]"
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Enterprise SEO?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Let's discuss how we can help you achieve sustainable growth in organic search.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push('/contact?service=enterprise-seo')}
                            className="bg-white text-[#A91D3A] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold shadow-lg transition-all"
                        >
                            Get Started Now
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push('/contact?service=enterprise-seo')}
                            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
                        >
                            Schedule a Call
                        </motion.button>
                    </div>
                </div>
            </motion.section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#A91D3A] text-center mb-1">Why Choose Our Enterprise SEO Services?</h2>
                <p className="text-[#A91D3A] text-center mb-4">Expert Solutions for Large-Scale Success</p>
                <div className="max-w-3xl text-center text-gray-700 mb-6">
                    Our enterprise SEO services are designed to help large organizations achieve sustainable growth in organic search. We combine technical expertise with strategic planning to deliver measurable results.
                </div>
                <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
                    {/* Card 1 */}
                    <div className="bg-[#fbe9ed] rounded-xl p-6 flex flex-col items-start shadow">
                        <span className="mb-3"><svg width="32" height="32" fill="none" stroke="#A91D3A" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 15h8"/><path d="M8 11h8"/><path d="M8 7h8"/></svg></span>
                        <b className="text-[#A91D3A] mb-1 block">Expert Team</b>
                        <p className="text-gray-700 text-sm">Our team of SEO specialists brings years of experience in handling complex enterprise projects.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#fbe9ed] rounded-xl p-6 flex flex-col items-start shadow">
                        <span className="mb-3"><svg width="32" height="32" fill="none" stroke="#A91D3A" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></span>
                        <b className="text-[#A91D3A] mb-1 block">Custom Solutions</b>
                        <p className="text-gray-700 text-sm">Tailored strategies designed specifically for your business goals and industry requirements.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-[#fbe9ed] rounded-xl p-6 flex flex-col items-start shadow">
                        <span className="mb-3"><svg width="32" height="32" fill="none" stroke="#A91D3A" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8v8H8z"/></svg></span>
                        <b className="text-[#A91D3A] mb-1 block">Proven Results</b>
                        <p className="text-gray-700 text-sm">Track record of delivering significant improvements in organic traffic and search rankings.</p>
                    </div>
                </div>
                <button className="mt-8 px-8 py-3 rounded-full bg-[#F28C1F] text-white font-bold text-lg shadow hover:bg-[#d46a7a] transition-all">SCHEDULE A CONSULTATION</button>
            </section>

            {/* Get My FREE Digital Marketing Proposal Section */}
           

            {/* Results/Case Studies Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#A91D3A] text-center mb-1">Enterprise SEO Success Stories</h2>
                    <p className="text-[#A91D3A] text-center mb-8">See How We Deliver Results for Large-Scale Brands</p>
                    <div className="w-full grid md:grid-cols-3 gap-6 mb-8">
                        {/* Card 1 */}
                        <div className="bg-[#fbe9ed] border border-[#f3b7c6] rounded-lg shadow p-6 flex flex-col items-center">
                            {/* SVG for Enterprise SEO Example 1 */}
                            <span className="mb-4">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6" y="18" width="44" height="20" rx="6" fill="#A91D3A" fillOpacity="0.08" />
                                    <rect x="10" y="22" width="36" height="12" rx="3" fill="#A91D3A" fillOpacity="0.18" />
                                    <rect x="14" y="26" width="12" height="4" rx="2" fill="#A91D3A" />
                                    <circle cx="16" cy="40" r="3" fill="#A91D3A" />
                                    <circle cx="40" cy="40" r="3" fill="#A91D3A" />
                                </svg>
                            </span>
                            <div className="bg-[#f3b7c6] text-[#A91D3A] font-semibold text-xs px-3 py-1 rounded mb-2">SITE AUDIT</div>
                            <div className="flex gap-4 text-center mb-2">
                                <div>
                                    <div className="text-lg font-bold text-[#A91D3A]">+12,000</div>
                                    <div className="text-xs text-gray-500">Issues Fixed</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#A91D3A]">+45.2%</div>
                                    <div className="text-xs text-gray-500">Crawl Efficiency</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-700 italic mb-2">From the Client:</div>
                            <blockquote className="text-sm text-gray-700 text-center">“Our enterprise site saw a dramatic improvement in technical health and organic reach.”</blockquote>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-[#fbe9ed] border border-[#f3b7c6] rounded-lg shadow p-6 flex flex-col items-center">
                            {/* SVG for Enterprise SEO Example 2 */}
                            <span className="mb-4">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="12" y="24" width="32" height="8" rx="2" fill="#A91D3A" fillOpacity="0.18" />
                                    <rect x="18" y="32" width="20" height="4" rx="2" fill="#A91D3A" fillOpacity="0.10" />
                                    <rect x="24" y="36" width="8" height="8" rx="2" fill="#A91D3A" />
                                    <rect x="26" y="16" width="4" height="8" rx="2" fill="#A91D3A" />
                                    <circle cx="28" cy="14" r="4" fill="#A91D3A" fillOpacity="0.18" />
                                </svg>
                            </span>
                            <div className="bg-[#f3b7c6] text-[#A91D3A] font-semibold text-xs px-3 py-1 rounded mb-2">STRUCTURED DATA</div>
                            <div className="flex gap-4 text-center mb-2">
                                <div>
                                    <div className="text-lg font-bold text-[#A91D3A]">+900%</div>
                                    <div className="text-xs text-gray-500">Rich Results</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#A91D3A]">+500%</div>
                                    <div className="text-xs text-gray-500">Index Coverage</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-700 italic mb-2">From the Client:</div>
                            <blockquote className="text-sm text-gray-700 text-center">“Our structured data overhaul led to a huge increase in search features and impressions.”</blockquote>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-[#fbe9ed] border border-[#f3b7c6] rounded-lg shadow p-6 flex flex-col items-center">
                            {/* SVG for Enterprise SEO Example 3 */}
                            <span className="mb-4">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="14" y="24" width="28" height="8" rx="4" fill="#A91D3A" fillOpacity="0.10" />
                                    <rect x="18" y="32" width="20" height="4" rx="2" fill="#A91D3A" fillOpacity="0.18" />
                                    <rect x="24" y="20" width="8" height="12" rx="2" fill="#A91D3A" />
                                    <circle cx="28" cy="40" r="6" fill="#A91D3A" fillOpacity="0.18" />
                                    <rect x="26" y="12" width="4" height="8" rx="2" fill="#A91D3A" />
                                </svg>
                            </span>
                            <div className="bg-[#f3b7c6] text-[#A91D3A] font-semibold text-xs px-3 py-1 rounded mb-2">PAGE SPEED</div>
                            <div className="flex gap-4 text-center mb-2">
                                <div>
                                    <div className="text-lg font-bold text-[#A91D3A]">+2,000%</div>
                                    <div className="text-xs text-gray-500">Faster Load</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-[#A91D3A]">+90.1%</div>
                                    <div className="text-xs text-gray-500">Core Web Vitals</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-700 italic mb-2">From the Client:</div>
                            <blockquote className="text-sm text-gray-700 text-center">“Our enterprise site is now lightning fast and passes all Core Web Vitals.”</blockquote>
                        </div>
                    </div>
                    <Button className="font-bold text-base px-8 py-3 rounded-lg shadow bg-[#A91D3A] text-white hover:bg-[#d46a7a] transition-all mt-2"
                        onClick={() => router.push('/contact?service=enterprise-seo')}
                    >
                        GET MORE ENTERPRISE SEO WINS NOW
                    </Button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-[#fdf4f7]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#A91D3A] text-center mb-1">Why Choose Our Enterprise SEO Services?</h2>
                    <p className="text-[#A91D3A] text-center mb-8">Enterprise-level strategies, scalable results, and dedicated support for your brand.</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <BarChart className="w-10 h-10 text-[#A91D3A]" />, title: "Scalable SEO Audits", desc: "Comprehensive audits for large, complex sites." },
                            { icon: <CheckCircle className="w-10 h-10 text-[#A91D3A]" />, title: "Dedicated Account Managers", desc: "Personalized support for enterprise clients." },
                            { icon: <Zap className="w-10 h-10 text-[#A91D3A]" />, title: "Advanced Technical Solutions", desc: "Cutting-edge solutions for technical SEO challenges." },
                            { icon: <Globe className="w-10 h-10 text-[#A91D3A]" />, title: "Global & Local Reach", desc: "Optimize for both global and local search markets." },
                            { icon: <FileText className="w-10 h-10 text-[#A91D3A]" />, title: "Content at Scale", desc: "Enterprise content strategies for massive growth." },
                            { icon: <Target className="w-10 h-10 text-[#A91D3A]" />, title: "Data-Driven Insights", desc: "Actionable analytics and reporting for big brands." }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
                            >
                                <div className="mb-4 p-3 bg-[#fbe9ed] rounded-full">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#A91D3A]">{feature.title}</h3>
                                <p className="text-gray-700">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#A91D3A] to-[#d46a7a] relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Scale Your Enterprise SEO?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let our enterprise SEO experts help you dominate search at scale.
                        </p>
                        <Button
                            className="bg-white text-[#A91D3A] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold shadow-lg"
                            onClick={() => router.push("/contact?service=enterprise-seo")}
                        >
                            Start Now
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
                    Get My <span className="text-[#A91D3A]">FREE</span> Enterprise-SEO Proposal
                </h2>
                <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
                    {/* Left: Results Graphic */}
                    <div className="bg-[#fbe9ed] flex flex-col justify-center items-center p-8 md:w-1/2">
                        <h3 className="text-[#A91D3A] text-2xl font-bold mb-2">Experience Real Results</h3>
                        <p className="text-[#A91D3A] mb-6 text-sm">Partner with our Enterprise SEO team and scale your business.</p>
                        {/* Stats */}
                        <div className="mb-6">
                            <div className="text-[#A91D3A] text-lg font-bold">+810%</div>
                            <div className="text-[#A91D3A] text-xs mb-2">Organic Impressions</div>
                            <div className="text-[#A91D3A] text-lg font-bold">+257%</div>
                            <div className="text-[#A91D3A] text-xs">Organic Page Views</div>
                        </div>
                        {/* Phone SVG Illustration */}
                        <svg width="90" height="160" viewBox="0 0 90 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="10" width="70" height="140" rx="16" fill="#fff" stroke="#A91D3A" strokeWidth="3" />
                            <rect x="25" y="30" width="40" height="80" rx="8" fill="#A91D3A" fillOpacity="0.10" />
                            <circle cx="45" cy="130" r="6" fill="#A91D3A" fillOpacity="0.15" />
                        </svg>
                    </div>
                    {/* Right: Lead Form */}
                    <form
                        onSubmit={e => { e.preventDefault(); router.push('/contact?service=enterprise-seo'); }}
                        className="flex-1 p-8 flex flex-col gap-4 bg-white"
                    >
                        <div className="flex gap-4">
                            <input type="text" placeholder="First Name*" required className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#A91D3A] focus:ring-2 focus:ring-[#A91D3A]" />
                            <input type="text" placeholder="Last Name*" required className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#A91D3A] focus:ring-2 focus:ring-[#A91D3A]" />
                        </div>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Company/Organization*" required className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#A91D3A] focus:ring-2 focus:ring-[#A91D3A]" />
                            <input type="text" placeholder="Website" className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#A91D3A] focus:ring-2 focus:ring-[#A91D3A]" />
                        </div>
                        <div className="flex gap-4">
                            <input type="email" placeholder="Email Address*" required className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#A91D3A] focus:ring-2 focus:ring-[#A91D3A]" />
                            <select required className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-[#A91D3A] focus:ring-2 focus:ring-[#A91D3A]">
                                <option value="">Select Service*</option>
                                <option>Enterprise SEO</option>
                                <option>Technical SEO</option>
                                <option>Content Marketing</option>
                                <option>Link Building</option>
                            </select>
                        </div>
                        <input type="text" placeholder="Company Size*" required className="border border-gray-200 rounded-lg px-4 py-3 text-[#A91D3A] focus:ring-2 focus:ring-[#A91D3A]" />
                        <input type="text" placeholder="How Did You Hear About Us?" className="border border-gray-200 rounded-lg px-4 py-3 text-[#A91D3A] focus:ring-2 focus:ring-[#A91D3A]" />
                        <textarea placeholder="Tell us about your business" rows={2} className="border border-gray-200 rounded-lg px-4 py-3 text-[#A91D3A] focus:ring-2 focus:ring-[#A91D3A]" />
                        <button type="submit" className="w-full bg-[#A91D3A] hover:bg-[#d46a7a] text-white font-bold py-3 rounded-full text-lg mt-2 transition-all shadow">SEND MY FREE PROPOSAL</button>
                        <div className="text-xs text-gray-500 text-center mt-2">In a hurry? Give us a call now at <a href="tel:8664344748" className="text-[#A91D3A] font-bold underline">866-434-4748</a></div>
                    </form>
                </div>
            </section>
        </main>
    );
}