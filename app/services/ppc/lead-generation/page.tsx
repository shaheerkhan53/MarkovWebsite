"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart, Users, CheckCircle, Zap, PhoneCall } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LeadGenerationPage() {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-b from-[#f3f4f6] to-[#fff]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A4D2E]">
                            PPC Lead Generation Services
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Drive high-quality leads to your business with targeted, data-driven PPC campaigns managed by experts.
                        </p>
                        <Button
                            className="bg-[#1A4D2E] hover:bg-[#13381f] text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
                            onClick={() => router.push("/contact?service=lead-generation")}
                        >
                            Get a Free Lead Gen Audit
                        </Button>
                    </div>
                </div>
            </section>

            {/* What is PPC Lead Generation? */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1A4D2E]">What is PPC Lead Generation?</h2>
                    <p className="text-gray-700 mb-4">
                        PPC (Pay-Per-Click) Lead Generation uses paid ads on platforms like Google, Bing, Facebook, and LinkedIn to attract potential customers and capture their information. It's a fast, scalable way to fill your sales pipeline with qualified leads.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Instantly drive targeted traffic to your landing pages</li>
                        <li>Capture leads with optimized forms and offers</li>
                        <li>Track, measure, and optimize every step of the funnel</li>
                    </ul>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1A4D2E]">Benefits of PPC for Lead Generation</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <PhoneCall className="w-10 h-10 text-[#1A4D2E] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Immediate Results</h3>
                            <p className="text-gray-700 text-sm">Start generating leads as soon as your campaigns go live.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <BarChart className="w-10 h-10 text-[#1A4D2E] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Measurable ROI</h3>
                            <p className="text-gray-700 text-sm">Track every click, lead, and conversion for full transparency.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <Zap className="w-10 h-10 text-[#1A4D2E] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Highly Targeted</h3>
                            <p className="text-gray-700 text-sm">Reach your ideal customers by location, interests, and intent.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1A4D2E]">Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <CheckCircle className="w-10 h-10 text-[#1A4D2E] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Multi-Channel Campaigns</h3>
                            <p className="text-gray-700 mb-2">Run lead gen ads on Google, Bing, Facebook, LinkedIn, and more.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Users className="w-10 h-10 text-[#1A4D2E] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Audience Segmentation</h3>
                            <p className="text-gray-700 mb-2">Target users by demographics, interests, behaviors, and intent.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <BarChart className="w-10 h-10 text-[#1A4D2E] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Conversion Tracking</h3>
                            <p className="text-gray-700 mb-2">Get real-time analytics and clear, actionable insights.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Stepper */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1A4D2E]">Our Lead Generation Process</h2>
                    <div className="flex flex-col md:flex-row md:items-start md:gap-12 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center md:items-start md:w-2/3">
                            {[
                                { title: "Discovery & Strategy", desc: "We analyze your business, goals, and audience to develop a custom lead gen strategy." },
                                { title: "Campaign Setup", desc: "We build, launch, and configure your campaigns for maximum lead quality and volume." },
                                { title: "Optimization", desc: "We monitor, test, and optimize your ads in real time for the best results." },
                                { title: "Lead Nurturing", desc: "We help you set up follow-up sequences to turn leads into customers." },
                                { title: "Reporting & Insights", desc: "You get regular, transparent reports and strategy calls." }
                            ].map((step, idx) => (
                                <div key={step.title} className="flex items-start mb-8 w-full">
                                    <div className="flex flex-col items-center mr-6">
                                        <div className="w-12 h-12 rounded-full bg-[#1A4D2E] text-white flex items-center justify-center font-bold text-lg mb-2">
                                            <span>{idx + 1}</span>
                                        </div>
                                        {idx < 4 && <div className="w-1 h-16 bg-[#1A4D2E]" />}
                                    </div>
                                    <div>
                                        <div className="bg-[#f3f4f6] px-4 py-2 rounded font-semibold text-[#1A4D2E] mb-2 inline-block">{step.title}</div>
                                        <p className="text-gray-700 text-sm max-w-xl">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="md:w-1/3 flex flex-col items-center justify-center mt-8 md:mt-0">
                            <Button
                                className="bg-[#1A4D2E] hover:bg-[#13381f] text-white px-8 py-4 rounded-lg font-semibold mt-8"
                                onClick={() => router.push('/contact?service=lead-generation')}
                            >
                                START MY LEAD GEN CAMPAIGN
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Lead Generation Campaigns */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1A4D2E]">Types of Lead Generation Campaigns</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#1A4D2E] mb-2">Search Ads</h3>
                            <p className="text-gray-700 text-sm">Capture high-intent leads searching for your services on Google & Bing.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#1A4D2E] mb-2">Social Ads</h3>
                            <p className="text-gray-700 text-sm">Generate leads on Facebook, Instagram, and LinkedIn with targeted ads.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#1A4D2E] mb-2">Display Ads</h3>
                            <p className="text-gray-700 text-sm">Reach new audiences with banner ads across the web.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#1A4D2E] mb-2">Landing Page Funnels</h3>
                            <p className="text-gray-700 text-sm">Drive conversions with custom landing pages and forms.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories/Case Studies */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1A4D2E]">Lead Generation Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#1A4D2E] mb-2">B2B SaaS</h3>
                            <p className="text-gray-700 text-sm mb-2">Doubled qualified leads and reduced cost per lead by <span className="font-bold text-[#1A4D2E]">40%</span> in 3 months.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>LinkedIn and Google Ads campaigns</li>
                                <li>Landing page optimization</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#1A4D2E] mb-2">Local Services</h3>
                            <p className="text-gray-700 text-sm mb-2">Increased call volume by <span className="font-bold text-[#1A4D2E]">150%</span> and improved lead quality.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>Call-only and form-based campaigns</li>
                                <li>Geo-targeted ads</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1A4D2E]">Lead Generation FAQs</h2>
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div>
                            <h3 className="font-semibold text-[#1A4D2E] mb-2">How quickly can I see results?</h3>
                            <p className="text-gray-700 text-sm">Most clients see new leads within the first week of launching campaigns.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#1A4D2E] mb-2">What platforms do you use?</h3>
                            <p className="text-gray-700 text-sm">We run lead gen ads on Google, Bing, Facebook, Instagram, and LinkedIn.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#1A4D2E] mb-2">Do you provide reporting?</h3>
                            <p className="text-gray-700 text-sm">Yes! You'll receive regular, easy-to-understand reports and have access to our team for strategy calls and support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Overview Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1A4D2E]">Lead Generation Management Pricing</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#1A4D2E] mb-2">Starter</h3>
                            <p className="text-3xl font-bold text-[#1A4D2E] mb-2">$499</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to $2,000 ad spend</li>
                                <li>1 Channel</li>
                                <li>Monthly Reporting</li>
                            </ul>
                            <Button
                                className="bg-[#1A4D2E] text-white w-full"
                                onClick={() => router.push('/contact?service=lead-generation')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow text-center border-2 border-[#1A4D2E]">
                            <h3 className="font-bold text-[#1A4D2E] mb-2">Growth</h3>
                            <p className="text-3xl font-bold text-[#1A4D2E] mb-2">$999</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to $10,000 ad spend</li>
                                <li>Up to 3 Channels</li>
                                <li>Bi-Weekly Reporting</li>
                                <li>Advanced Optimization</li>
                            </ul>
                            <Button
                                className="bg-[#1A4D2E] text-white w-full"
                                onClick={() => router.push('/contact?service=lead-generation')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#1A4D2E] mb-2">Enterprise</h3>
                            <p className="text-3xl font-bold text-[#1A4D2E] mb-2">Custom</p>
                            <p className="text-gray-700 mb-4">Contact Us</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Unlimited ad spend</li>
                                <li>Unlimited Channels</li>
                                <li>Dedicated Account Manager</li>
                                <li>Custom Reporting & Strategy</li>
                            </ul>
                            <Button
                                className="bg-[#1A4D2E] text-white w-full"
                                onClick={() => router.push('/contact?service=lead-generation')}
                            >
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                        All plans include campaign setup, ongoing optimization, and transparent reporting. Need a custom solution? <a href="/contact?service=lead-generation" className="text-[#1A4D2E] underline">Contact us</a> for a personalized quote.
                    </p>
                </div>
            </section>

            {/* Meet Your Lead Gen Team Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1A4D2E]">Meet Your Lead Gen Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#1A4D2E]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#1A4D2E" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="26" cy="24" r="2" fill="#1A4D2E" />
                                    <circle cx="34" cy="24" r="2" fill="#1A4D2E" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#1A4D2E" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#1A4D2E] mb-1">Ayesha Khan</h3>
                            <p className="text-gray-700 text-sm mb-1">Lead Gen Strategist</p>
                            <p className="text-gray-500 text-xs">10+ years experience, B2B & SaaS</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#1A4D2E]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#1A4D2E" />
                                    <ellipse cx="30" cy="26" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="46" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="26" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="25" cy="25" r="2" fill="#1A4D2E" />
                                    <circle cx="35" cy="25" r="2" fill="#1A4D2E" />
                                    <ellipse cx="30" cy="32" rx="4" ry="2" fill="#1A4D2E" />
                                    <rect x="22" y="38" width="16" height="3" rx="1.5" fill="#1A4D2E" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#1A4D2E] mb-1">Bilal Ahmed</h3>
                            <p className="text-gray-700 text-sm mb-1">PPC Account Manager</p>
                            <p className="text-gray-500 text-xs">B2B, Lead Gen, Local Services</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#1A4D2E]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#1A4D2E" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="27" cy="24" r="2" fill="#1A4D2E" />
                                    <circle cx="33" cy="24" r="2" fill="#1A4D2E" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#1A4D2E" />
                                    <rect x="25" y="36" width="10" height="3" rx="1.5" fill="#1A4D2E" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#1A4D2E] mb-1">Sara Malik</h3>
                            <p className="text-gray-700 text-sm mb-1">Ad Copywriter</p>
                            <p className="text-gray-500 text-xs">Ad Copy, Landing Pages, CRO</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#1A4D2E]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#1A4D2E" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="28" cy="24" r="2" fill="#1A4D2E" />
                                    <circle cx="32" cy="24" r="2" fill="#1A4D2E" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#1A4D2E" />
                                    <rect x="27" y="38" width="6" height="3" rx="1.5" fill="#1A4D2E" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#1A4D2E] mb-1">Omar Siddiqui</h3>
                            <p className="text-gray-700 text-sm mb-1">Analytics & Reporting Lead</p>
                            <p className="text-gray-500 text-xs">Data Analysis, Tag Manager, Reporting</p>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                        Our team brings together years of experience, creativity, and a passion for results. We're here to help you succeed with lead generation!
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#1A4D2E]">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                "We saw a huge increase in qualified leads and conversions. The team is proactive, transparent, and truly cares about our results."
                            </p>
                            <p className="font-semibold text-[#1A4D2E]">— Fatima R., B2B Marketing Director</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                "Their PPC expertise helped us dominate our local market. We get more leads than ever before!"
                            </p>
                            <p className="font-semibold text-[#1A4D2E]">— Imran S., Local Services Owner</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-[#1A4D2E]">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Grow with PPC Lead Generation?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let our certified experts manage your campaigns for better results and less stress.
                        </p>
                        <Button
                            className="bg-white text-[#1A4D2E] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold"
                            onClick={() => router.push("/contact?service=lead-generation")}
                        >
                            Start Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}