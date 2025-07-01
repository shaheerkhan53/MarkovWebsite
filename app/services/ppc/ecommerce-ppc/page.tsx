"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart, Users, CheckCircle, Zap, ShoppingCart, Tag, Globe, FileText, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EcommercePPCPage() {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-b from-[#f3f4f6] to-[#fff]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#B5828C]">
                            eCommerce PPC Services
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Maximize your online store's sales and ROI with expertly managed eCommerce PPC campaigns.
                        </p>
                        <Button
                            className="bg-[#B5828C] hover:bg-[#3d2b00] text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
                            onClick={() => router.push("/contact?service=ecommerce-ppc")}
                        >
                            Get a Free PPC Audit
                        </Button>
                    </div>
                </div>
            </section>

            {/* What is eCommerce PPC? */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#B5828C]">What is eCommerce PPC?</h2>
                    <p className="text-gray-700 mb-4">
                        eCommerce PPC (Pay-Per-Click) is a digital advertising strategy that drives targeted traffic to your online store through paid ads on platforms like Google, Bing, Facebook, and Amazon. Our team specializes in creating, managing, and optimizing PPC campaigns that deliver measurable sales and growth for eCommerce businesses.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Instantly reach shoppers searching for your products</li>
                        <li>Control your ad spend and maximize ROI</li>
                        <li>Track every click, sale, and conversion</li>
                    </ul>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B5828C]">Why eCommerce PPC Matters</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <ShoppingCart className="w-10 h-10 text-[#B5828C] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Drive More Sales</h3>
                            <p className="text-gray-700 text-sm">Get your products in front of high-intent shoppers ready to buy.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <BarChart className="w-10 h-10 text-[#B5828C] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Scalable Growth</h3>
                            <p className="text-gray-700 text-sm">Scale your ad campaigns as your business grows.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <Zap className="w-10 h-10 text-[#B5828C] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Full-Funnel Tracking</h3>
                            <p className="text-gray-700 text-sm">Track every step from click to sale for data-driven decisions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* eCommerce Advertising Services Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#B5828C]">eCommerce Advertising Services</h2>
                    <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">Drive targeted traffic to your store and earn loyal, long-term customers with our full suite of eCommerce advertising solutions. Each service is designed to maximize ROI, boost conversions, and help your brand stand out in a crowded marketplace.</p>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Keyword Research & Strategy */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Magnifying glass SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="18" cy="18" r="10" stroke="#B5828C" strokeWidth="3"/><line x1="27.5" y1="27.5" x2="37" y2="37" stroke="#B5828C" strokeWidth="3" strokeLinecap="round"/></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">Keyword Research & Strategy</h3>
                            <p className="text-gray-700 text-sm">We use advanced tools and competitor analysis to uncover high-intent keywords your customers are searching for. Our strategy ensures your ads appear for the most profitable queries, driving quality traffic and maximizing your ad spend efficiency.</p>
                        </div>
                        {/* eCommerce SEO */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Upward graph SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="28" width="6" height="6" rx="2" fill="#B5828C"/><rect x="17" y="20" width="6" height="14" rx="2" fill="#B5828C"/><rect x="28" y="12" width="6" height="22" rx="2" fill="#B5828C"/><polyline points="6,28 20,20 34,12" fill="none" stroke="#B5828C" strokeWidth="2"/></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">eCommerce SEO</h3>
                            <p className="text-gray-700 text-sm">We blend technical SEO, content optimization, and paid search best practices to help your products rank higher and stay visible. Our holistic approach drives sustainable growth and keeps your store ahead of the competition.</p>
                        </div>
                        {/* Landing Page Conversion */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Landing page SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="8" width="28" height="24" rx="3" stroke="#B5828C" strokeWidth="3" fill="#fff"/><rect x="12" y="16" width="16" height="4" rx="2" fill="#B5828C"/><rect x="12" y="24" width="10" height="2" rx="1" fill="#B5828C"/></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">Landing Page Conversion</h3>
                            <p className="text-gray-700 text-sm">Our CRO experts design and optimize landing pages for each campaign, ensuring a seamless user journey and higher conversion rates. We test layouts, copy, and CTAs to turn more visitors into loyal customers.</p>
                        </div>
                        {/* eCommerce PPC Management */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Target SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="#B5828C" strokeWidth="3"/><circle cx="20" cy="20" r="8" stroke="#B5828C" strokeWidth="3"/><circle cx="20" cy="20" r="3" fill="#B5828C"/></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">eCommerce PPC Management</h3>
                            <p className="text-gray-700 text-sm">From campaign setup to daily optimization, we manage every aspect of your PPC. Our transparent reporting and proactive management ensure you always know your ROI and stay ahead of the competition.</p>
                        </div>
                        {/* Paid Advertising */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Dollar sign SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#B5828C" strokeWidth="2"/><text x="20" y="26" textAnchor="middle" fontSize="20" fill="#B5828C" fontFamily="Arial">$</text></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">Paid Advertising</h3>
                            <p className="text-gray-700 text-sm">We create compelling ads and optimize your budget across Google, Bing, Facebook, and Amazon. Our data-driven approach ensures you get the most value for every click and maximize your sales potential.</p>
                        </div>
                        {/* eCommerce Web Design */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Shopping bag SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="14" width="24" height="18" rx="3" stroke="#B5828C" strokeWidth="3" fill="#fff"/><path d="M14 14V10a6 6 0 1112 0v4" stroke="#B5828C" strokeWidth="3"/><circle cx="16" cy="20" r="1.5" fill="#B5828C"/><circle cx="24" cy="20" r="1.5" fill="#B5828C"/></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">eCommerce Web Design</h3>
                            <p className="text-gray-700 text-sm">We build beautiful, conversion-focused eCommerce sites that are fast, secure, and mobile-optimized. Our design team ensures your brand stands out and your checkout process is seamless.</p>
                        </div>
                        {/* eCommerce Remarketing */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Refresh arrows SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M10 20a10 10 0 0117-7.1M30 20a10 10 0 01-17 7.1" stroke="#B5828C" strokeWidth="3" strokeLinecap="round"/><polyline points="27,10 27,17 20,17" fill="none" stroke="#B5828C" strokeWidth="2" strokeLinejoin="round"/><polyline points="13,30 13,23 20,23" fill="none" stroke="#B5828C" strokeWidth="2" strokeLinejoin="round"/></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">eCommerce Remarketing</h3>
                            <p className="text-gray-700 text-sm">We re-engage past visitors with dynamic ads and email campaigns, bringing them back to complete their purchase. Our remarketing strategies boost your conversion rates and customer lifetime value.</p>
                        </div>
                        {/* Google Shopping Ads Optimization */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Shopping cart SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="14" width="24" height="14" rx="3" stroke="#B5828C" strokeWidth="3" fill="#fff"/><circle cx="14" cy="32" r="2" fill="#B5828C"/><circle cx="26" cy="32" r="2" fill="#B5828C"/><path d="M12 18h16" stroke="#B5828C" strokeWidth="2"/></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">Google Shopping Ads Optimization</h3>
                            <p className="text-gray-700 text-sm">We optimize your product feed, structure your campaigns, and use advanced bidding to maximize your visibility and sales on Google Shopping. Our experts ensure your products stand out and convert.</p>
                        </div>
                        {/* Google Showcase Shopping Ads Management */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Showcase SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="10" width="24" height="20" rx="3" stroke="#B5828C" strokeWidth="3" fill="#fff"/><rect x="14" y="16" width="12" height="8" rx="2" fill="#B5828C"/><rect x="18" y="20" width="4" height="4" rx="1" fill="#fff"/></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">Google Showcase Shopping Ads Management</h3>
                            <p className="text-gray-700 text-sm">We manage your Showcase Shopping Ads from account setup to ongoing optimization, helping more people discover your brand and products. Our creative approach increases reach and revenue.</p>
                        </div>
                        {/* Ads A/B Split Testing */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Split test SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M10 10h20M20 10v20M10 30h20" stroke="#B5828C" strokeWidth="3" strokeLinecap="round"/><circle cx="20" cy="20" r="3" fill="#B5828C"/></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">Ads A/B Split Testing</h3>
                            <p className="text-gray-700 text-sm">We continuously test multiple ad variations and landing pages to find the highest ROI for your store. Our data-driven approach ensures your campaigns are always improving and outperforming the competition.</p>
                        </div>
                        {/* Conversion Rate Optimization */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Funnel SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M8 10h24l-8 10v8a4 4 0 01-8 0v-8L8 10z" stroke="#B5828C" strokeWidth="3" fill="#fff"/></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">Conversion Rate Optimization</h3>
                            <p className="text-gray-700 text-sm">We implement advanced CRO practices to increase your eCommerce store's conversion rates, from product pages to checkout. Our team uses analytics and user testing to remove friction and boost sales.</p>
                        </div>
                        {/* Social Media Advertising */}
                        <div className="flex flex-col items-start bg-[#f3f4f6] p-6 rounded-xl shadow group transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <span className="mb-3">
                                {/* Social media SVG */}
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="#B5828C" strokeWidth="3"/><circle cx="20" cy="20" r="6" stroke="#B5828C" strokeWidth="3"/><rect x="28" y="10" width="4" height="4" rx="2" fill="#B5828C"/><rect x="8" y="26" width="4" height="4" rx="2" fill="#B5828C"/></svg>
                            </span>
                            <h3 className="font-bold mb-2 text-lg text-[#B5828C]">Social Media Advertising</h3>
                            <p className="text-gray-700 text-sm">We launch targeted ad campaigns on Facebook, Instagram, and more, helping you reach new audiences and drive high-conversion traffic to your store. Our creative team crafts scroll-stopping ads that get results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B5828C]">Our eCommerce PPC Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Tag className="w-10 h-10 text-[#B5828C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Google Shopping Ads</h3>
                            <p className="text-gray-700 mb-2">Showcase your products directly in Google search results with rich product info.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Globe className="w-10 h-10 text-[#B5828C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Amazon PPC</h3>
                            <p className="text-gray-700 mb-2">Advertise on Amazon to reach millions of active shoppers.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <FileText className="w-10 h-10 text-[#B5828C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Facebook & Instagram Ads</h3>
                            <p className="text-gray-700 mb-2">Target shoppers on social media with dynamic product ads.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <BarChart className="w-10 h-10 text-[#B5828C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Retargeting Campaigns</h3>
                            <p className="text-gray-700 mb-2">Bring back visitors who didn't buy the first time with smart retargeting.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <CheckCircle className="w-10 h-10 text-[#B5828C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Conversion Rate Optimization</h3>
                            <p className="text-gray-700 mb-2">Optimize your landing pages and checkout for more sales.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Mail className="w-10 h-10 text-[#B5828C] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Email Remarketing</h3>
                            <p className="text-gray-700 mb-2">Recover abandoned carts and nurture leads with targeted emails.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Stepper */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B5828C]">Our eCommerce PPC Process</h2>
                    <div className="max-w-4xl mx-auto">
                        {[
                            { title: "Account Audit & Strategy", desc: "We review your current PPC setup and develop a custom strategy for your store." },
                            { title: "Campaign Build", desc: "We create and launch high-converting campaigns across Google, Amazon, and social platforms." },
                            { title: "Ongoing Optimization", desc: "We monitor, test, and optimize your ads for the best ROI." },
                            { title: "Reporting & Insights", desc: "You get transparent reports and regular strategy calls." }
                        ].map((step, idx) => (
                            <div key={step.title} className="flex items-start mb-8">
                                <div className="flex flex-col items-center mr-6">
                                    <div className="w-12 h-12 rounded-full bg-[#B5828C] text-white flex items-center justify-center font-bold text-lg">
                                        {idx + 1}
                                    </div>
                                    {idx < 3 && <div className="w-1 h-16 bg-[#B5828C]" />}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#B5828C] mb-2">{step.title}</h3>
                                    <p className="text-gray-700">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Types of eCommerce PPC Campaigns */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B5828C]">Types of eCommerce PPC Campaigns</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#B5828C] mb-2">Search Ads</h3>
                            <p className="text-gray-700 text-sm mb-2">Appear at the top of Google/Bing search results for high-intent keywords.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#B5828C] mb-2">Shopping Ads</h3>
                            <p className="text-gray-700 text-sm mb-2">Showcase your products visually in Google Shopping and Bing Shopping.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#B5828C] mb-2">Display Ads</h3>
                            <p className="text-gray-700 text-sm mb-2">Reach shoppers across the web with eye-catching banners and visuals.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#B5828C] mb-2">Retargeting Ads</h3>
                            <p className="text-gray-700 text-sm mb-2">Bring back visitors who left your site without purchasing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories/Case Studies */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B5828C]">eCommerce PPC Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#B5828C] mb-2">Fashion Retailer</h3>
                            <p className="text-gray-700 text-sm mb-2">Increased ROAS by <span className="font-bold text-[#B5828C]">350%</span> and sales by <span className="font-bold text-[#B5828C]">200%</span> in 4 months.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>Google Shopping & Facebook Ads</li>
                                <li>Dynamic retargeting</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#B5828C] mb-2">Home Goods Store</h3>
                            <p className="text-gray-700 text-sm mb-2">Reduced cost per sale by <span className="font-bold text-[#B5828C]">40%</span> and doubled order volume.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>Amazon PPC & Google Shopping</li>
                                <li>Landing page optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B5828C]">eCommerce PPC FAQs</h2>
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div>
                            <h3 className="font-semibold text-[#B5828C] mb-2">How quickly can I see results?</h3>
                            <p className="text-gray-700 text-sm">Most stores see increased traffic and sales within the first month of launching campaigns.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#B5828C] mb-2">Which platforms do you manage?</h3>
                            <p className="text-gray-700 text-sm">We manage Google, Bing, Amazon, Facebook, Instagram, and more.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#B5828C] mb-2">Do you provide reporting?</h3>
                            <p className="text-gray-700 text-sm">Yes! You'll receive regular, easy-to-understand reports and have access to our team for strategy calls and support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Overview Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B5828C]">eCommerce PPC Management Pricing</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#B5828C] mb-2">Starter</h3>
                            <p className="text-3xl font-bold text-[#B5828C] mb-2">$799</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to $5,000 ad spend</li>
                                <li>2 Platforms</li>
                                <li>Monthly Reporting</li>
                            </ul>
                            <Button
                                className="bg-[#B5828C] text-white w-full"
                                onClick={() => router.push('/contact?service=ecommerce-ppc')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow text-center border-2 border-[#B5828C]">
                            <h3 className="font-bold text-[#B5828C] mb-2">Growth</h3>
                            <p className="text-3xl font-bold text-[#B5828C] mb-2">$1,699</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to $25,000 ad spend</li>
                                <li>Up to 4 Platforms</li>
                                <li>Bi-Weekly Reporting</li>
                                <li>Advanced Optimization</li>
                            </ul>
                            <Button
                                className="bg-[#B5828C] text-white w-full"
                                onClick={() => router.push('/contact?service=ecommerce-ppc')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#B5828C] mb-2">Enterprise</h3>
                            <p className="text-3xl font-bold text-[#B5828C] mb-2">Custom</p>
                            <p className="text-gray-700 mb-4">Contact Us</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Unlimited ad spend</li>
                                <li>Unlimited Platforms</li>
                                <li>Dedicated Account Manager</li>
                                <li>Custom Reporting & Strategy</li>
                            </ul>
                            <Button
                                className="bg-[#B5828C] text-white w-full"
                                onClick={() => router.push('/contact?service=ecommerce-ppc')}
                            >
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                        All plans include campaign setup, ongoing optimization, and transparent reporting. Need a custom solution? <a href="/contact?service=ecommerce-ppc" className="text-[#B5828C] underline">Contact us</a> for a personalized quote.
                    </p>
                </div>
            </section>

            {/* Meet Your eCommerce PPC Team Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B5828C]">Meet Your eCommerce PPC Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#B5828C]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#B5828C" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="26" cy="24" r="2" fill="#B5828C" />
                                    <circle cx="34" cy="24" r="2" fill="#B5828C" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#B5828C" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#B5828C] mb-1">Ali Raza</h3>
                            <p className="text-gray-700 text-sm mb-1">PPC Strategist</p>
                            <p className="text-gray-500 text-xs">Google & Amazon PPC</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#B5828C]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#B5828C" />
                                    <ellipse cx="30" cy="26" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="46" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="26" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="25" cy="25" r="2" fill="#B5828C" />
                                    <circle cx="35" cy="25" r="2" fill="#B5828C" />
                                    <ellipse cx="30" cy="32" rx="4" ry="2" fill="#B5828C" />
                                    <rect x="22" y="38" width="16" height="3" rx="1.5" fill="#B5828C" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#B5828C] mb-1">Sara Malik</h3>
                            <p className="text-gray-700 text-sm mb-1">Ad Copywriter</p>
                            <p className="text-gray-500 text-xs">Ad Copy, Landing Pages</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#B5828C]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#B5828C" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="27" cy="24" r="2" fill="#B5828C" />
                                    <circle cx="33" cy="24" r="2" fill="#B5828C" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#B5828C" />
                                    <rect x="25" y="36" width="10" height="3" rx="1.5" fill="#B5828C" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#B5828C] mb-1">Bilal Ahmed</h3>
                            <p className="text-gray-700 text-sm mb-1">Analytics Lead</p>
                            <p className="text-gray-500 text-xs">Data Analysis, Reporting</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-6 rounded-xl shadow text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#B5828C]/10 flex items-center justify-center">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#B5828C" />
                                    <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                    <ellipse cx="30" cy="45" rx="16" ry="8" fill="#f3f4f6" />
                                    <ellipse cx="30" cy="25" rx="8" ry="10" fill="#f3f4f6" />
                                    <circle cx="28" cy="24" r="2" fill="#B5828C" />
                                    <circle cx="32" cy="24" r="2" fill="#B5828C" />
                                    <ellipse cx="30" cy="30" rx="4" ry="2" fill="#B5828C" />
                                    <rect x="27" y="38" width="6" height="3" rx="1.5" fill="#B5828C" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#B5828C] mb-1">Omar Siddiqui</h3>
                            <p className="text-gray-700 text-sm mb-1">PPC Account Manager</p>
                            <p className="text-gray-500 text-xs">Google, Amazon, Social PPC</p>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                        Our team brings together years of experience, creativity, and a passion for results. We're here to help you succeed with eCommerce PPC!
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B5828C]">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                "Our ROAS and sales skyrocketed after working with this team. They know eCommerce PPC inside and out!"
                            </p>
                            <p className="font-semibold text-[#B5828C]">— Zara M., Fashion Retailer</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow">
                            <p className="text-gray-700 italic mb-4">
                                "They helped us dominate Amazon and Google Shopping. Highly recommended for any online store."
                            </p>
                            <p className="font-semibold text-[#B5828C]">— Ali R., Home Goods Store</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Digital Marketing Proposal Section */}
            <section className="py-20 bg-white border-t border-[#B5828C]/10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                        An <span className="text-[#B5828C]">eCommerce PPC agency</span> that delivers results
                    </h2>
                    <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                        Markov is an award-winning eCommerce PPC agency that provides effective paid advertising services to clients throughout the U.S.
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Get My <span className="text-[#B5828C]">FREE</span> Digital Marketing Proposal
                    </h3>
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-stretch max-w-4xl mx-auto mb-10">
                        {/* Left: Testimonial/Graphic */}
                        <div className="md:w-1/2 flex flex-col justify-center items-center bg-[#f3e6ea] rounded-xl p-6">
                            <div className="mb-6">
                                <div className="text-2xl font-bold text-[#B5828C] mb-2">Experience Real Results</div>
                                <div className="text-gray-800 mb-4">Partner with our agency and scale your business.</div>
                                <div className="flex flex-col gap-2 text-[#B5828C] font-semibold">
                                    <div>+810% Google Impressions</div>
                                    <div>+257% Conversion Rate</div>
                                </div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80" alt="Phone with results" className="rounded-lg shadow w-40 h-40 object-cover" />
                        </div>
                        {/* Right: Lead Form */}
                        <form className="md:w-1/2 grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name*" className="col-span-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#B5828C]" required />
                            <input type="text" placeholder="Last Name*" className="col-span-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#B5828C]" required />
                            <input type="text" placeholder="Company/Organization*" className="col-span-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#B5828C]" required />
                            <input type="text" placeholder="Website" className="col-span-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#B5828C]" />
                            <input type="email" placeholder="Email Address*" className="col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#B5828C]" required />
                            <select className="col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#B5828C]">
                                <option>Services*</option>
                                <option>eCommerce PPC</option>
                                <option>Google Ads</option>
                                <option>Social Media</option>
                                <option>Content Marketing</option>
                                <option>Other</option>
                            </select>
                            <select className="col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#B5828C]">
                                <option>Company Size</option>
                                <option>1-10</option>
                                <option>11-50</option>
                                <option>51-200</option>
                                <option>201-1000</option>
                                <option>1000+</option>
                            </select>
                            <input type="text" placeholder="How Did You Hear About Us?" className="col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#B5828C]" />
                            <textarea placeholder="Tell us about your business" className="col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#B5828C] min-h-[60px]" />
                            <button type="submit" className="col-span-2 bg-[#B5828C] hover:bg-[#8c5a6a] text-white font-bold py-3 rounded-lg mt-2 transition-all">SEND MY FREE PROPOSAL</button>
                            <div className="col-span-2 text-xs text-gray-500 mt-2 text-center">
                                In a hurry? Give us a call now at <a href="tel:8669084748" className="text-[#B5828C] font-semibold">866.908.4748</a><br />
                                By submitting your phone number, you agree to receiving texts from our agency.
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-[#B5828C]">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Grow with eCommerce PPC?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let our certified experts manage your campaigns for better results and less stress.
                        </p>
                        <Button
                            className="bg-white text-[#B5828C] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold"
                            onClick={() => router.push("/contact?service=ecommerce-ppc")}
                        >
                            Start Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}