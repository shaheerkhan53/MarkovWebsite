"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart, PlayCircle, CheckCircle, Users, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function YouTubeAdsManagementPage() {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-b from-[#f3f4f6] to-[#fff]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#3A0519]">
                            YouTube Ads Management Services
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Reach your audience where they watch. Boost brand awareness, leads, and sales with expertly managed YouTube ad campaigns.
                        </p>
                        <Button
                            className="bg-[#3A0519] hover:bg-[#2a0413] text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
                            onClick={() => router.push("/contact?service=youtube-ads")}
                        >
                            Get a Free YouTube Ads Audit
                        </Button>
                    </div>
                </div>
            </section>

            {/* What are YouTube Ads? */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#3A0519]">What are YouTube Ads?</h2>
                    <p className="text-gray-700 mb-4">
                        YouTube Ads are video advertisements that appear before, during, or after videos on YouTube, as well as in YouTube search results and on the YouTube homepage. With over 2 billion logged-in users monthly, YouTube is the world's largest video platform and a powerful channel for reaching your target audience with engaging video content.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Showcase your brand with skippable and non-skippable video ads</li>
                        <li>Drive website traffic, leads, and sales with targeted campaigns</li>
                        <li>Reach users by demographics, interests, keywords, and remarketing</li>
                    </ul>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#3A0519]">Benefits of YouTube Ads</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <PlayCircle className="w-10 h-10 text-[#3A0519] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Massive Reach</h3>
                            <p className="text-gray-700 text-sm">Access over 2 billion monthly users and billions of daily video views.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <BarChart className="w-10 h-10 text-[#3A0519] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Advanced Targeting</h3>
                            <p className="text-gray-700 text-sm">Target by demographics, interests, keywords, placements, and remarketing.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <Zap className="w-10 h-10 text-[#3A0519] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">High Engagement</h3>
                            <p className="text-gray-700 text-sm">Video ads drive higher engagement and brand recall than static ads.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#3A0519]">Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <CheckCircle className="w-10 h-10 text-[#3A0519] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Creative Video Production</h3>
                            <p className="text-gray-700 mb-2">From script to screen, we help you create compelling video ads that convert.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Users className="w-10 h-10 text-[#3A0519] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Audience Research</h3>
                            <p className="text-gray-700 mb-2">We analyze your ideal customer and build precise targeting strategies.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <BarChart className="w-10 h-10 text-[#3A0519] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                            <p className="text-gray-700 mb-2">Get transparent reporting and actionable insights for every campaign.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Stepper */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#3A0519]">Our YouTube Ads Management Process</h2>
                    <div className="flex flex-col md:flex-row md:items-start md:gap-12 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center md:items-start md:w-2/3">
                            {[
                                { title: "Discovery & Strategy", desc: "We learn about your business, goals, and audience to craft a winning YouTube Ads strategy." },
                                { title: "Creative Production", desc: "We help you develop or optimize video assets for maximum impact." },
                                { title: "Campaign Setup", desc: "We build and launch your campaigns with advanced targeting and tracking." },
                                { title: "Optimization", desc: "We monitor, test, and optimize your ads for the best results." },
                                { title: "Reporting & Insights", desc: "You get regular, transparent reports and strategy calls." }
                            ].map((step, idx) => (
                                <div key={step.title} className="flex items-start mb-8 w-full">
                                    <div className="flex flex-col items-center mr-6">
                                        <div className="w-12 h-12 rounded-full bg-[#3A0519] text-white flex items-center justify-center font-bold text-lg mb-2">
                                            <span>{idx + 1}</span>
                                        </div>
                                        {idx < 4 && <div className="w-1 h-16 bg-[#3A0519]" />}
                                    </div>
                                    <div>
                                        <div className="bg-[#f3f4f6] px-4 py-2 rounded font-semibold text-[#3A0519] mb-2 inline-block">{step.title}</div>
                                        <p className="text-gray-700 text-sm max-w-xl">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="md:w-1/3 flex flex-col items-center justify-center mt-8 md:mt-0">
                            <Button
                                className="bg-[#3A0519] hover:bg-[#2a0413] text-white px-8 py-4 rounded-lg font-semibold mt-8"
                                onClick={() => router.push('/contact?service=youtube-ads')}
                            >
                                START MY YOUTUBE ADS
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of YouTube Ads */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#3A0519]">Types of YouTube Ads</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#3A0519] mb-2">Skippable In-Stream Ads</h3>
                            <p className="text-gray-700 text-sm">Play before/during/after videos. Viewers can skip after 5 seconds. Great for reach and awareness.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#3A0519] mb-2">Non-Skippable In-Stream Ads</h3>
                            <p className="text-gray-700 text-sm">15-second ads that viewers must watch before their video. Ideal for concise, impactful messages.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#3A0519] mb-2">Bumper Ads</h3>
                            <p className="text-gray-700 text-sm">6-second, non-skippable ads. Perfect for quick brand messages and reminders.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <h3 className="font-semibold text-[#3A0519] mb-2">Discovery Ads</h3>
                            <p className="text-gray-700 text-sm">Appear in YouTube search results and related videos. Great for driving channel growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories/Case Studies */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#3A0519]">YouTube Ads Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#3A0519] mb-2">E-Commerce Brand</h3>
                            <p className="text-gray-700 text-sm mb-2">Increased video ad engagement by <span className="font-bold text-[#3A0519]">200%</span> and sales by <span className="font-bold text-[#3A0519]">80%</span> in 3 months.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>Creative video production</li>
                                <li>Advanced audience targeting</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#3A0519] mb-2">SaaS Company</h3>
                            <p className="text-gray-700 text-sm mb-2">Reduced cost per lead by <span className="font-bold text-[#3A0519]">35%</span> and grew channel subscribers by <span className="font-bold text-[#3A0519]">5x</span>.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>Remarketing and discovery ads</li>
                                <li>Landing page optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#3A0519]">YouTube Ads FAQs</h2>
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div>
                            <h3 className="font-semibold text-[#3A0519] mb-2">How much should I spend on YouTube Ads?</h3>
                            <p className="text-gray-700 text-sm">Budgets vary by industry and goals. We help you set a budget for maximum ROI.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#3A0519] mb-2">How soon will I see results?</h3>
                            <p className="text-gray-700 text-sm">Most clients see engagement and traffic increases within the first month.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#3A0519] mb-2">Do you provide reports?</h3>
                            <p className="text-gray-700 text-sm">Yes! You'll receive regular, easy-to-understand reports and have access to our team for strategy calls and support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Overview Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#3A0519]">YouTube Ads Management Pricing</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#3A0519] mb-2">Starter</h3>
                            <p className="text-3xl font-bold text-[#3A0519] mb-2">$499</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to $2,000 ad spend</li>
                                <li>1 Campaign</li>
                                <li>Monthly Reporting</li>
                            </ul>
                            <Button
                                className="bg-[#3A0519] text-white w-full"
                                onClick={() => router.push('/contact?service=youtube-ads')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow text-center border-2 border-[#3A0519]">
                            <h3 className="font-bold text-[#3A0519] mb-2">Growth</h3>
                            <p className="text-3xl font-bold text-[#3A0519] mb-2">$999</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to $10,000 ad spend</li>
                                <li>Up to 5 Campaigns</li>
                                <li>Bi-Weekly Reporting</li>
                                <li>Video Optimization</li>
                            </ul>
                            <Button
                                className="bg-[#3A0519] text-white w-full"
                                onClick={() => router.push('/contact?service=youtube-ads')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#3A0519] mb-2">Enterprise</h3>
                            <p className="text-3xl font-bold text-[#3A0519] mb-2">Custom</p>
                            <p className="text-gray-700 mb-4">Contact Us</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Unlimited ad spend</li>
                                <li>Unlimited Campaigns</li>
                                <li>Dedicated Account Manager</li>
                                <li>Custom Reporting & Strategy</li>
                            </ul>
                            <Button
                                className="bg-[#3A0519] text-white w-full"
                                onClick={() => router.push('/contact?service=youtube-ads')}
                            >
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                        All plans include campaign setup, ongoing optimization, and transparent reporting. Need a custom solution? <a href="/contact?service=youtube-ads" className="text-[#3A0519] underline">Contact us</a> for a personalized quote.
                    </p>
                </div>
            </section>

            {/* Meet Your YouTube Ads Team Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#3A0519]">Meet Your YouTube Ads Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#3A0519]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#3A0519" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="26" cy="24" r="2" fill="#3A0519" />
                                    <circle cx="34" cy="24" r="2" fill="#3A0519" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#3A0519" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#3A0519] mb-1">Ayesha Khan</h3>
                            <p className="text-gray-700 text-sm mb-1">Senior Video Ads Strategist</p>
                            <p className="text-gray-500 text-xs">10+ years experience, eCommerce & SaaS</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#3A0519]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#3A0519" />
                                    <ellipse cx="30" cy="26" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="46" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="26" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="25" cy="25" r="2" fill="#3A0519" />
                                    <circle cx="35" cy="25" r="2" fill="#3A0519" />
                                    <ellipse cx="30" cy="32" rx="4" ry="2" fill="#3A0519" />
                                    <rect x="22" y="38" width="16" height="3" rx="1.5" fill="#3A0519" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#3A0519] mb-1">Bilal Ahmed</h3>
                            <p className="text-gray-700 text-sm mb-1">PPC Account Manager</p>
                            <p className="text-gray-500 text-xs">B2B, Lead Gen, Local Services</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#3A0519]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#3A0519" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="27" cy="24" r="2" fill="#3A0519" />
                                    <circle cx="33" cy="24" r="2" fill="#3A0519" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#3A0519" />
                                    <rect x="25" y="36" width="10" height="3" rx="1.5" fill="#3A0519" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#3A0519] mb-1">Sara Malik</h3>
                            <p className="text-gray-700 text-sm mb-1">Video Copywriter</p>
                            <p className="text-gray-500 text-xs">Ad Scripts, Landing Pages, CRO</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#3A0519]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#3A0519" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="28" cy="24" r="2" fill="#3A0519" />
                                    <circle cx="32" cy="24" r="2" fill="#3A0519" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#3A0519" />
                                    <rect x="27" y="38" width="6" height="3" rx="1.5" fill="#3A0519" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#3A0519] mb-1">Omar Siddiqui</h3>
                            <p className="text-gray-700 text-sm mb-1">Analytics & Reporting Lead</p>
                            <p className="text-gray-500 text-xs">Data Analysis, Tag Manager, Reporting</p>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                        Our team brings together years of experience, creativity, and a passion for results. We're here to help you succeed with YouTube Ads!
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#3A0519]">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                "We saw a huge increase in video engagement and leads. The team is creative, responsive, and results-driven."
                            </p>
                            <p className="font-semibold text-[#3A0519]">— Fatima R., E-Commerce Director</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                "Their YouTube Ads expertise helped us grow our channel and drive more signups than ever before!"
                            </p>
                            <p className="font-semibold text-[#3A0519]">— Imran S., SaaS Founder</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Ads Manager Account Types Comparison Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#3A0519]">
                        The Two Types of Google Ads Manager Accounts
                    </h2>
                    <p className="text-center text-gray-700 max-w-2xl mx-auto mb-6">
                        The free version of Google Ads Manager (GAM) is already impressive, but Google also offers a paid version with additional features and benefits.<br />
                        Here are the fundamental differences between the two and how your business can benefit from each:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                        {/* Free Version Card */}
                        <div className="bg-gray-100 rounded-lg shadow p-6">
                            <div className="bg-[#3A0519] text-white font-bold text-lg rounded-t-lg px-4 py-2 mb-4 text-center">
                                Ad Manager for Small Businesses (FREE)
                            </div>
                            <div className="text-gray-700 text-sm">
                                Google Ad Manager for small businesses is a free ad server ideal for starting enterprises or publishers lacking sufficient resources to invest in advertising.
                                <ul className="list-disc pl-6 mt-3 space-y-1">
                                    <li>Access to Google's AdSense network and additional third-party networks</li>
                                    <li>Optimized for mobile and video ads</li>
                                    <li>Line item management, forecasting and targeting capabilities</li>
                                    <li>Historical data</li>
                                    <li>Customized reporting</li>
                                    <li>Access to application programming interface (API) for ad trafficking and optimization</li>
                                </ul>
                            </div>
                        </div>
                        {/* Paid Version Card */}
                        <div className="bg-gray-100 rounded-lg shadow p-6">
                            <div className="bg-[#3A0519] text-white font-bold text-lg rounded-t-lg px-4 py-2 mb-4 text-center">
                                Ad Manager 360 (PAID)
                            </div>
                            <div className="text-gray-700 text-sm">
                                Google Ad Manager 360 is a premium service that offers all the features of the standard version, with added capabilities for enhanced ad inventory management and revenue optimization.
                                <ul className="list-disc pl-6 mt-3 space-y-1">
                                    <li>Direct support from Google</li>
                                    <li>Access to first-party audience segments</li>
                                    <li>Advanced video options (e.g., dynamic ad insertion and plodding)</li>
                                    <li>Ad units with five levels of hierarchy (only 2 for the free version)</li>
                                    <li>Advanced reporting capabilities, such as data protection reports, data transfer log files, conversion reporting and future sell-through</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-sm text-gray-700 mb-4 max-w-3xl mx-auto">
                        <span className="font-semibold">Not sure which is right for your business?</span> Let our YouTube Ads experts guide you in selecting the best Google Ad Manager account for your unique needs.<br />
                        Get in touch today for a free consultation with our PPC management specialists.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            className="bg-[#3A0519] hover:bg-[#2a0413] text-white px-8 py-4 rounded-lg font-semibold"
                            onClick={() => router.push("/contact?service=youtube-ads")}
                        >
                            GET A FREE CONSULTATION
                        </Button>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-[#3A0519]">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Grow with YouTube Ads?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let our certified experts manage your campaigns for better results and less stress.
                        </p>
                        <Button
                            className="bg-white text-[#3A0519] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold"
                            onClick={() => router.push("/contact?service=youtube-ads")}
                        >
                            Start Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}