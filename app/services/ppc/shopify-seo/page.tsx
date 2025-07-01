"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart, CheckCircle, Zap, ShoppingCart, Tag, Globe, FileText, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ShopifySEOPage() {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-b from-[#f3f4f6] to-[#fff]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#7AB55C]">
                            Shopify SEO Services
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Boost your Shopify store's visibility, rankings, and sales with expert SEO strategies tailored for eCommerce success.
                        </p>
                        <Button
                            className="bg-[#7AB55C] hover:bg-[#4e7c38] text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
                            onClick={() => router.push("/contact?service=shopify-seo")}
                        >
                            Get a Free Shopify SEO Audit
                        </Button>
                    </div>
                </div>
            </section>

            {/* Shopify SEO Intro Section */}
            <section className="py-16 bg-white border-b border-[#7AB55C]/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* SVG Illustration */}
                        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                            <svg width="320" height="260" viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="40" y="60" width="180" height="140" rx="16" fill="#F3F4F6" />
                                <rect x="60" y="80" width="140" height="100" rx="10" fill="#fff" stroke="#7AB55C" strokeWidth="2" />
                                <rect x="80" y="110" width="100" height="16" rx="8" fill="#7AB55C" fillOpacity="0.15" />
                                <rect x="80" y="140" width="60" height="12" rx="6" fill="#7AB55C" fillOpacity="0.25" />
                                <rect x="80" y="160" width="80" height="12" rx="6" fill="#7AB55C" fillOpacity="0.25" />
                                <ellipse cx="130" cy="210" rx="30" ry="8" fill="#E6F4E6" />
                                <rect x="120" y="60" width="40" height="20" rx="8" fill="#7AB55C" />
                                <rect x="130" y="65" width="20" height="10" rx="5" fill="#fff" />
                                <circle cx="200" cy="100" r="18" fill="#7AB55C" fillOpacity="0.15" />
                                <rect x="190" y="90" width="20" height="20" rx="6" fill="#7AB55C" fillOpacity="0.25" />
                                <path d="M60 80 Q50 60 80 60" stroke="#7AB55C" strokeWidth="2" fill="none" />
                                <path d="M200 100 Q220 80 220 120" stroke="#7AB55C" strokeWidth="2" fill="none" />
                                <circle cx="90" cy="200" r="10" fill="#7AB55C" fillOpacity="0.15" />
                                <rect x="100" y="180" width="40" height="10" rx="5" fill="#7AB55C" fillOpacity="0.15" />
                                <rect x="160" y="180" width="30" height="10" rx="5" fill="#7AB55C" fillOpacity="0.15" />
                                <rect x="70" y="120" width="20" height="8" rx="4" fill="#7AB55C" fillOpacity="0.25" />
                                <rect x="170" y="120" width="20" height="8" rx="4" fill="#7AB55C" fillOpacity="0.25" />
                                <rect x="120" y="90" width="40" height="8" rx="4" fill="#7AB55C" fillOpacity="0.15" />
                                <rect x="120" y="100" width="40" height="8" rx="4" fill="#7AB55C" fillOpacity="0.10" />
                                <rect x="120" y="120" width="40" height="8" rx="4" fill="#7AB55C" fillOpacity="0.10" />
                                <rect x="120" y="130" width="40" height="8" rx="4" fill="#7AB55C" fillOpacity="0.10" />
                                <rect x="120" y="140" width="40" height="8" rx="4" fill="#7AB55C" fillOpacity="0.10" />
                                <rect x="120" y="150" width="40" height="8" rx="4" fill="#7AB55C" fillOpacity="0.10" />
                                <rect x="120" y="160" width="40" height="8" rx="4" fill="#7AB55C" fillOpacity="0.10" />
                                <rect x="120" y="170" width="40" height="8" rx="4" fill="#7AB55C" fillOpacity="0.10" />
                            </svg>
                        </div>
                        {/* Content */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left text-[#222]">Build Your Own Scalable Online Store with <span className="text-[#7AB55C]">Shopify SEO</span></h2>
                            <div className="text-gray-700 space-y-4 text-base md:text-lg">
                                <p>eCommerce has significantly changed the business scenario. Today, Shopify powers over a million businesses worldwide. This proves that eCommerce marketing is not just one strategy among many -- it is a global business necessity.</p>
                                <p>Shopify is considered among the leading eCommerce solutions and innovations that continue to redefine the global marketplace. In the last six months alone, Shopify generated over 46.45 million visits and received approximately 218 million orders in the previous year.</p>
                                <p>This all-in-one eCommerce platform now has more than 2 million active users, which contribute more than $183 billion in global economic activity. Overall, Shopify holds an impressive 31 percent of the eCommerce market.</p>
                                <p>Undoubtedly, Shopify is an excellent platform for brands looking to build their online store. If you're not yet using Shopify for your eCommerce business, it's high time that you reconsider your online marketing efforts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Shopify SEO? */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#7AB55C]">What is Shopify SEO?</h2>
                    <p className="text-gray-700 mb-4">
                        Shopify SEO is the process of optimizing your Shopify store to rank higher in search engines like Google and Bing. Our team specializes in technical SEO, on-page optimization, content strategy, and link building to drive more organic traffic and sales for your Shopify business.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Increase your store's organic visibility</li>
                        <li>Attract high-intent shoppers</li>
                        <li>Grow your sales and brand authority</li>
                    </ul>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#7AB55C]">Why Shopify SEO Matters</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <ShoppingCart className="w-10 h-10 text-[#7AB55C] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Drive More Organic Sales</h3>
                            <p className="text-gray-700 text-sm">Get your products in front of shoppers actively searching for what you sell.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <BarChart className="w-10 h-10 text-[#7AB55C] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Sustainable Growth</h3>
                            <p className="text-gray-700 text-sm">Build a foundation for long-term traffic and revenue growth.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <Zap className="w-10 h-10 text-[#7AB55C] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Better User Experience</h3>
                            <p className="text-gray-700 text-sm">Improve site speed, navigation, and mobile usability for higher conversions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#7AB55C]">Our Shopify SEO Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Tag className="w-10 h-10 text-[#7AB55C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Keyword Research</h3>
                            <p className="text-gray-700 mb-2">Identify high-value keywords to target the right audience and maximize ROI.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Globe className="w-10 h-10 text-[#7AB55C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Technical SEO</h3>
                            <p className="text-gray-700 mb-2">Fix crawl errors, improve site speed, and ensure your store is search engine friendly.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <FileText className="w-10 h-10 text-[#7AB55C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Content Optimization</h3>
                            <p className="text-gray-700 mb-2">Enhance product, category, and blog content for better rankings and engagement.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <BarChart className="w-10 h-10 text-[#7AB55C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">On-Page SEO</h3>
                            <p className="text-gray-700 mb-2">Optimize titles, meta tags, URLs, and internal linking for maximum visibility.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <CheckCircle className="w-10 h-10 text-[#7AB55C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Link Building</h3>
                            <p className="text-gray-700 mb-2">Earn high-quality backlinks to boost your store's authority and rankings.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Mail className="w-10 h-10 text-[#7AB55C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Reporting & Analytics</h3>
                            <p className="text-gray-700 mb-2">Get transparent, actionable reports to track your SEO progress and ROI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Stepper */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#7AB55C]">Our Shopify SEO Process</h2>
                    <div className="max-w-4xl mx-auto">
                        {[
                            { title: "Store Audit & Strategy", desc: "We review your Shopify store and develop a custom SEO strategy." },
                            { title: "On-Page & Technical Fixes", desc: "We optimize your site structure, content, and technical elements." },
                            { title: "Content & Link Building", desc: "We create and promote content to earn links and boost authority." },
                            { title: "Reporting & Growth", desc: "You get transparent reports and regular strategy calls." }
                        ].map((step, idx) => (
                            <div key={step.title} className="flex items-start mb-8">
                                <div className="flex flex-col items-center mr-6">
                                    <div className="w-12 h-12 rounded-full bg-[#7AB55C] text-white flex items-center justify-center font-bold text-lg">
                                        {idx + 1}
                                    </div>
                                    {idx < 3 && <div className="w-1 h-16 bg-[#7AB55C]" />}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#7AB55C] mb-2">{step.title}</h3>
                                    <p className="text-gray-700">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#7AB55C]">Shopify SEO Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#7AB55C] mb-2">Fashion Brand</h3>
                            <p className="text-gray-700 text-sm mb-2">Increased organic traffic by <span className="font-bold text-[#7AB55C]">220%</span> and sales by <span className="font-bold text-[#7AB55C]">150%</span> in 6 months.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>Technical SEO & Content</li>
                                <li>Link building campaign</li>
                            </ul>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#7AB55C] mb-2">Home Decor Store</h3>
                            <p className="text-gray-700 text-sm mb-2">Ranked #1 for 10+ high-value keywords and doubled monthly orders.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>On-page optimization</li>
                                <li>Content & outreach</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#7AB55C]">Shopify SEO FAQs</h2>
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div>
                            <h3 className="font-semibold text-[#7AB55C] mb-2">How long does it take to see results?</h3>
                            <p className="text-gray-700 text-sm">Most stores see improved rankings and traffic within 2-3 months of starting SEO.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#7AB55C] mb-2">Do you work with all Shopify themes?</h3>
                            <p className="text-gray-700 text-sm">Yes, we optimize all Shopify themes and custom stores.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#7AB55C] mb-2">Is Shopify SEO a one-time or ongoing service?</h3>
                            <p className="text-gray-700 text-sm">SEO is an ongoing process for best results. We offer monthly plans for continuous growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Overview Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#7AB55C]">Shopify SEO Pricing</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#7AB55C] mb-2">Starter</h3>
                            <p className="text-3xl font-bold text-[#7AB55C] mb-2">$699</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to 50 products</li>
                                <li>Technical & On-Page SEO</li>
                                <li>Monthly Reporting</li>
                            </ul>
                            <Button
                                className="bg-[#7AB55C] text-white w-full"
                                onClick={() => router.push('/contact?service=shopify-seo')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow text-center border-2 border-[#7AB55C]">
                            <h3 className="font-bold text-[#7AB55C] mb-2">Growth</h3>
                            <p className="text-3xl font-bold text-[#7AB55C] mb-2">$1,299</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to 200 products</li>
                                <li>Content & Link Building</li>
                                <li>Bi-Weekly Reporting</li>
                                <li>Advanced Optimization</li>
                            </ul>
                            <Button
                                className="bg-[#7AB55C] text-white w-full"
                                onClick={() => router.push('/contact?service=shopify-seo')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#7AB55C] mb-2">Enterprise</h3>
                            <p className="text-3xl font-bold text-[#7AB55C] mb-2">Custom</p>
                            <p className="text-gray-700 mb-4">Contact Us</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Unlimited products</li>
                                <li>Dedicated Account Manager</li>
                                <li>Custom Reporting & Strategy</li>
                            </ul>
                            <Button
                                className="bg-[#7AB55C] text-white w-full"
                                onClick={() => router.push('/contact?service=shopify-seo')}
                            >
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                        All plans include setup, ongoing optimization, and transparent reporting. Need a custom solution? <a href="/contact?service=shopify-seo" className="text-[#7AB55C] underline">Contact us</a> for a personalized quote.
                    </p>
                </div>
            </section>

            {/* Meet Your Shopify SEO Team Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#7AB55C]">Meet Your Shopify SEO Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#7AB55C]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#7AB55C" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="26" cy="24" r="2" fill="#7AB55C" />
                                    <circle cx="34" cy="24" r="2" fill="#7AB55C" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#7AB55C" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#7AB55C] mb-1">Ayesha Khan</h3>
                            <p className="text-gray-700 text-sm mb-1">SEO Strategist</p>
                            <p className="text-gray-500 text-xs">Shopify SEO & Content</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#7AB55C]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#7AB55C" />
                                    <ellipse cx="30" cy="26" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="46" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="26" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="25" cy="25" r="2" fill="#7AB55C" />
                                    <circle cx="35" cy="25" r="2" fill="#7AB55C" />
                                    <ellipse cx="30" cy="32" rx="4" ry="2" fill="#7AB55C" />
                                    <rect x="22" y="38" width="16" height="3" rx="1.5" fill="#7AB55C" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#7AB55C] mb-1">Bilal Raza</h3>
                            <p className="text-gray-700 text-sm mb-1">Technical SEO Lead</p>
                            <p className="text-gray-500 text-xs">Site Audits & Fixes</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#7AB55C]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#7AB55C" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="27" cy="24" r="2" fill="#7AB55C" />
                                    <circle cx="33" cy="24" r="2" fill="#7AB55C" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#7AB55C" />
                                    <rect x="25" y="36" width="10" height="3" rx="1.5" fill="#7AB55C" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#7AB55C] mb-1">Fatima Ahmed</h3>
                            <p className="text-gray-700 text-sm mb-1">Content Specialist</p>
                            <p className="text-gray-500 text-xs">Product & Blog Content</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#7AB55C]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#7AB55C" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="28" cy="24" r="2" fill="#7AB55C" />
                                    <circle cx="32" cy="24" r="2" fill="#7AB55C" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#7AB55C" />
                                    <rect x="27" y="38" width="6" height="3" rx="1.5" fill="#7AB55C" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#7AB55C] mb-1">Omar Siddiqui</h3>
                            <p className="text-gray-700 text-sm mb-1">SEO Account Manager</p>
                            <p className="text-gray-500 text-xs">Shopify, Google, Content</p>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                        Our team brings together years of experience, creativity, and a passion for results. We're here to help you succeed with Shopify SEO!
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#7AB55C]">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                "Our Shopify sales and rankings skyrocketed after working with this team. Highly recommended!"
                            </p>
                            <p className="font-semibold text-[#7AB55C]">— Zara M., Fashion Retailer</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                "They helped us dominate Google and grow our organic traffic. The best Shopify SEO agency we've worked with."
                            </p>
                            <p className="font-semibold text-[#7AB55C]">— Ali R., Home Decor Store</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-[#7AB55C]">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Grow with Shopify SEO?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let our certified experts optimize your Shopify store for better rankings and more sales.
                        </p>
                        <Button
                            className="bg-white text-[#7AB55C] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold"
                            onClick={() => router.push("/contact?service=shopify-seo")}
                        >
                            Start Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}