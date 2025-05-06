"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart, MonitorPlay, CheckCircle, Users, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProgrammaticAdvertisingPage() {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-b from-[#f3f4f6] to-[#fff]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#393E46]">
                            Programmatic Advertising Services
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Automate and optimize your digital ad buying with real-time, data-driven programmatic advertising solutions.
                        </p>
                        <Button
                            className="bg-[#393E46] hover:bg-[#22252a] text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
                            onClick={() => router.push("/contact?service=programmatic-ads")}
                        >
                            Get a Free Programmatic Audit
                        </Button>
                    </div>
                </div>
            </section>

            {/* What is Programmatic Advertising? */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#393E46]">What is Programmatic Advertising?</h2>
                    <p className="text-gray-700 mb-4">
                        Programmatic advertising is the automated buying and selling of online advertising using software and data. It leverages artificial intelligence and real-time bidding to deliver ads to the right audience, at the right time, and at the right price—across display, video, mobile, and social channels.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Automated, real-time ad buying</li>
                        <li>Advanced audience targeting and segmentation</li>
                        <li>Optimized for performance and efficiency</li>
                    </ul>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#393E46]">Benefits of Programmatic Advertising</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <MonitorPlay className="w-10 h-10 text-[#393E46] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Real-Time Optimization</h3>
                            <p className="text-gray-700 text-sm">Adjust bids and targeting instantly for the best results.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <BarChart className="w-10 h-10 text-[#393E46] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Data-Driven Targeting</h3>
                            <p className="text-gray-700 text-sm">Leverage big data and AI to reach your ideal audience.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <Zap className="w-10 h-10 text-[#393E46] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Increased Efficiency</h3>
                            <p className="text-gray-700 text-sm">Automate manual processes and maximize your ad spend.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#393E46]">Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <CheckCircle className="w-10 h-10 text-[#393E46] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Cross-Channel Campaigns</h3>
                            <p className="text-gray-700 mb-2">Run ads across display, video, mobile, native, and social platforms.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Users className="w-10 h-10 text-[#393E46] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Audience Segmentation</h3>
                            <p className="text-gray-700 mb-2">Target users by demographics, interests, behaviors, and intent.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <BarChart className="w-10 h-10 text-[#393E46] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Transparent Reporting</h3>
                            <p className="text-gray-700 mb-2">Get real-time analytics and clear, actionable insights.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Stepper */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#393E46]">Our Programmatic Advertising Process</h2>
                    <div className="flex flex-col md:flex-row md:items-start md:gap-12 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center md:items-start md:w-2/3">
                            {[
                                { title: "Discovery & Strategy", desc: "We analyze your business, goals, and audience to develop a custom programmatic strategy." },
                                { title: "Platform Selection", desc: "We choose the best DSPs and platforms for your objectives and budget." },
                                { title: "Campaign Setup", desc: "We build, launch, and configure your campaigns for maximum reach and efficiency." },
                                { title: "Optimization", desc: "We monitor, test, and optimize your ads in real time for the best results." },
                                { title: "Reporting & Insights", desc: "You get regular, transparent reports and strategy calls." }
                            ].map((step, idx) => (
                                <div key={step.title} className="flex items-start mb-8 w-full">
                                    <div className="flex flex-col items-center mr-6">
                                        <div className="w-12 h-12 rounded-full bg-[#393E46] text-white flex items-center justify-center font-bold text-lg mb-2">
                                            <span>{idx + 1}</span>
                                        </div>
                                        {idx < 4 && <div className="w-1 h-16 bg-[#393E46]" />}
                                    </div>
                                    <div>
                                        <div className="bg-[#f3f4f6] px-4 py-2 rounded font-semibold text-[#393E46] mb-2 inline-block">{step.title}</div>
                                        <p className="text-gray-700 text-sm max-w-xl">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="md:w-1/3 flex flex-col items-center justify-center mt-8 md:mt-0">
                            <Button
                                className="bg-[#393E46] hover:bg-[#22252a] text-white px-8 py-4 rounded-lg font-semibold mt-8"
                                onClick={() => router.push('/contact?service=programmatic-ads')}
                            >
                                START MY PROGRAMMATIC ADS
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Programmatic Ads */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#393E46]">Types of Programmatic Ads</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#393E46] mb-2">Display Ads</h3>
                            <p className="text-gray-700 text-sm">Banner and image ads shown across millions of websites and apps.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#393E46] mb-2">Video Ads</h3>
                            <p className="text-gray-700 text-sm">Engaging video ads on premium publishers and streaming platforms.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#393E46] mb-2">Native Ads</h3>
                            <p className="text-gray-700 text-sm">Ads that blend seamlessly with website or app content.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#393E46] mb-2">Audio Ads</h3>
                            <p className="text-gray-700 text-sm">Ads on music streaming and podcast platforms.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories/Case Studies */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#393E46]">Programmatic Ads Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#393E46] mb-2">E-Commerce Brand</h3>
                            <p className="text-gray-700 text-sm mb-2">Increased ROAS by <span className="font-bold text-[#393E46]">120%</span> and reduced cost per acquisition by <span className="font-bold text-[#393E46]">30%</span> in 4 months.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>Cross-channel display and video campaigns</li>
                                <li>Advanced audience segmentation</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#393E46] mb-2">B2B SaaS</h3>
                            <p className="text-gray-700 text-sm mb-2">Doubled qualified leads and achieved a <span className="font-bold text-[#393E46]">3.5x</span> return on ad spend.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>Account-based targeting</li>
                                <li>Native and video ad formats</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#393E46]">Programmatic Ads FAQs</h2>
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div>
                            <h3 className="font-semibold text-[#393E46] mb-2">How does programmatic ad buying work?</h3>
                            <p className="text-gray-700 text-sm">It uses real-time bidding and AI to buy ad space automatically, targeting the right users at the right time.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#393E46] mb-2">Is programmatic advertising only for big brands?</h3>
                            <p className="text-gray-700 text-sm">No, businesses of all sizes can benefit from programmatic ads with the right strategy and budget.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#393E46] mb-2">Do you provide transparent reporting?</h3>
                            <p className="text-gray-700 text-sm">Yes! You'll receive regular, easy-to-understand reports and have access to our team for strategy calls and support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Overview Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#393E46]">Programmatic Ads Management Pricing</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#393E46] mb-2">Starter</h3>
                            <p className="text-3xl font-bold text-[#393E46] mb-2">$699</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to $5,000 ad spend</li>
                                <li>1 Channel</li>
                                <li>Monthly Reporting</li>
                            </ul>
                            <Button
                                className="bg-[#393E46] text-white w-full"
                                onClick={() => router.push('/contact?service=programmatic-ads-starter')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow text-center border-2 border-[#393E46]">
                            <h3 className="font-bold text-[#393E46] mb-2">Growth</h3>
                            <p className="text-3xl font-bold text-[#393E46] mb-2">$1,499</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to $25,000 ad spend</li>
                                <li>Up to 3 Channels</li>
                                <li>Bi-Weekly Reporting</li>
                                <li>Advanced Optimization</li>
                            </ul>
                            <Button
                                className="bg-[#393E46] text-white w-full"
                                onClick={() => router.push('/contact?service=programmatic-ads-growth')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#393E46] mb-2">Enterprise</h3>
                            <p className="text-3xl font-bold text-[#393E46] mb-2">Custom</p>
                            <p className="text-gray-700 mb-4">Contact Us</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Unlimited ad spend</li>
                                <li>Unlimited Channels</li>
                                <li>Dedicated Account Manager</li>
                                <li>Custom Reporting & Strategy</li>
                            </ul>
                            <Button
                                className="bg-[#393E46] text-white w-full"
                                onClick={() => router.push('/contact?service=programmatic-ads-enterprise')}
                            >
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                        All plans include campaign setup, ongoing optimization, and transparent reporting. Need a custom solution? <span className="text-[#393E46] underline cursor-pointer" onClick={() => router.push('/contact?service=programmatic-ads-custom')}>Contact us</span> for a personalized quote.
                    </p>
                </div>
            </section>

            {/* Meet Your Programmatic Ads Team Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#393E46]">Meet Your Programmatic Ads Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#393E46]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#393E46" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="26" cy="24" r="2" fill="#393E46" />
                                    <circle cx="34" cy="24" r="2" fill="#393E46" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#393E46" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#393E46] mb-1">Ayesha Khan</h3>
                            <p className="text-gray-700 text-sm mb-1">Programmatic Lead</p>
                            <p className="text-gray-500 text-xs">10+ years experience, eCommerce & SaaS</p>
                        </div>
                        <div className="bg-[#eaf3fb] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#0057B8]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#0057B8" />
                                    <ellipse cx="30" cy="26" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="46" rx="16" ry="8" fill="#eaf3fb" />
                                    <ellipse cx="30" cy="26" rx="8" ry="10" fill="#eaf3fb" />
                                    <circle cx="25" cy="25" r="2" fill="#0057B8" />
                                    <circle cx="35" cy="25" r="2" fill="#0057B8" />
                                    <ellipse cx="30" cy="32" rx="4" ry="2" fill="#0057B8" />
                                    <rect x="22" y="38" width="16" height="3" rx="1.5" fill="#0057B8" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#0057B8] mb-1">Bilal Ahmed</h3>
                            <p className="text-gray-700 text-sm mb-1">PPC Account Manager</p>
                            <p className="text-gray-500 text-xs">B2B, Lead Gen, Local Services</p>
                        </div>
                        <div className="bg-[#eaf3fb] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#0057B8]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#0057B8" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#eaf3fb" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#eaf3fb" />
                                    <circle cx="27" cy="24" r="2" fill="#0057B8" />
                                    <circle cx="33" cy="24" r="2" fill="#0057B8" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#0057B8" />
                                    <rect x="25" y="36" width="10" height="3" rx="1.5" fill="#0057B8" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#0057B8] mb-1">Sara Malik</h3>
                            <p className="text-gray-700 text-sm mb-1">Ad Copywriter</p>
                            <p className="text-gray-500 text-xs">Ad Copy, Landing Pages, CRO</p>
                        </div>
                        <div className="bg-[#eaf3fb] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#0057B8]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#0057B8" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#eaf3fb" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#eaf3fb" />
                                    <circle cx="28" cy="24" r="2" fill="#0057B8" />
                                    <circle cx="32" cy="24" r="2" fill="#0057B8" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#0057B8" />
                                    <rect x="27" y="38" width="6" height="3" rx="1.5" fill="#0057B8" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#0057B8] mb-1">Omar Siddiqui</h3>
                            <p className="text-gray-700 text-sm mb-1">Analytics & Reporting Lead</p>
                            <p className="text-gray-500 text-xs">Data Analysis, Tag Manager, Reporting</p>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                        Our team brings together years of experience, creativity, and a passion for results. We're here to help you succeed with programmatic ads!
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-[#eaf3fb]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#0057B8]">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                "We saw a huge increase in reach and conversions. The team is proactive, transparent, and truly cares about our results."
                            </p>
                            <p className="font-semibold text-[#0057B8]">— Fatima R., E-Commerce Director</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                "Their programmatic expertise helped us dominate our market. We get more leads than ever before!"
                            </p>
                            <p className="font-semibold text-[#0057B8]">— Imran S., SaaS Founder</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-[#0057B8]">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Grow with Programmatic Ads?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let our certified experts manage your campaigns for better results and less stress.
                        </p>
                        <Button
                            className="bg-white text-[#0057B8] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold"
                            onClick={() => router.push("/contact?service=programmatic-ads-start")}
                        >
                            Start Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}