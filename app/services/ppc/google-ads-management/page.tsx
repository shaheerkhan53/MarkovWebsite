"use client";

import React from "react";
import { PageHeaderLine } from "@/components/ui/page-header-line";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart, Target, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GoogleAdsManagementPage() {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <PageHeaderLine
                title="Google Ads Management"
                color="bg-[#328E6E]"
                icon={
                    <BarChart className="w-6 h-6 text-white" />
                }
                link={{
                    text: "Learn about Google Ads",
                    url: "https://ads.google.com/"
                }}
            />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="pt-20 pb-16 bg-gradient-to-b from-[#e6f5f0] to-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#328E6E]">
                                Expert Google Ads Management Services
                            </h1>
                            <p className="text-xl text-gray-700 mb-8">
                                Maximize your ROI and reach your ideal customers with our data-driven Google Ads strategies.
                            </p>
                            <Button
                                className="bg-[#328E6E] hover:bg-[#256e56] text-white px-8 py-4 rounded-lg font-semibold"
                                onClick={() => router.push("/contact?service=google-ads")}
                            >
                                Get a Free Consultation
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Value Proposition Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: Text Content */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#328E6E]">Get Maximum Returns<br />on Your Advertising Investment</h2>
                                <p className="text-gray-700 mb-4">
                                    Google Ads is a powerful marketing platform, but it can also be a money pit without the right strategy. It is one of the most effective lead generation tools, generating an estimated <span className="font-bold text-[#328E6E]">$8 return in profit for every $1 a business spends</span>.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Across all industries, the average conversion rate for Google search ads is <span className="font-bold text-[#328E6E]">4.2%</span>, with savvy ads showing that this can climb up to 6% for some sectors.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    The Google Ads platform is user-friendly, and anyone can set up and run campaigns in minutes. However, better platform management leads to better returns on ad spend and a superior bottom line.
                                </p>
                                <p className="text-gray-700 mb-4 font-semibold">Need help setting up your Google Ads Manager?</p>
                                <p className="text-gray-700 mb-4">
                                    Our Google Ads experts set up, monitor, and optimize campaigns to send targeted leads to your website and other online properties. Drive advertising revenue while lowering acquisition costs with our Google Ads management services.
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mb-4">
                                    <li>From campaign setup to managing creatives, our certified Google Ads specialists help you reach the right audience and drive qualified leads to your website.</li>
                                    <li>Our Google Ads management agency gets real results while lowering your cost per lead and increasing ad conversions.</li>
                                    <li>Maximize your advertising budget and leverage the platform to its full potential with our expert services.</li>
                                </ul>
                                <Button 
                                    className="bg-[#328E6E] hover:bg-[#256e56] text-white px-8 py-3 rounded-lg font-semibold mt-4"
                                    onClick={() => router.push("/contact?service=google-ads-boost")}
                                >
                                    BOOST MY AD REVENUE
                                </Button>
                            </div>
                            {/* Right: Illustration */}
                            <div className="flex justify-center">
                                <img src="/Google-ads.png" alt="Google Ads Illustration" className="max-w-md w-full" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* What You Need To Know Section */}
                <section className="py-16 bg-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">What You Need To Know About Google Ads Manager</h2>
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-xl font-bold mb-2 text-[#328E6E]">What are Google Ads?</h3>
                            <p className="text-gray-700 mb-3">
                                Google Ads (formerly Google AdWords) is an advertising platform where businesses pay to display advertisements, product listings, and video content online.
                            </p>
                            <p className="text-gray-700 mb-3">
                                These ads appear on various Google platforms, such as search results pages, YouTube videos, and partner websites, making it easier for prospects to find your business and your offerings.
                            </p>
                            <p className="text-gray-700 mb-3">Google Ads offers brands many ways to be seen:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li><b>Search Network:</b> Ads appear on Google search results pages when users search for keywords related to your business.</li>
                                <li><b>Display Network:</b> Ads are displayed on websites partnered with Google, giving you a wider reach.</li>
                                <li><b>Video Ads:</b> Video ads appear on YouTube before or during a video.</li>
                                <li><b>Shopping Ads:</b> These product listings appear in Google Shopping and search results for eCommerce businesses.</li>
                            </ul>
                            <h3 className="text-xl font-bold mb-2 text-[#328E6E]">How Does Google Ads Work?</h3>
                            <p className="text-gray-700 mb-3">
                                The Google Ads platform works through a pay-per-click (PPC) system where businesses pay each time someone clicks on their ad.
                            </p>
                            <p className="text-gray-700 mb-3">
                                However, unlike traditional pay-per-click advertising, Google Ads also considers ad relevance and quality to determine which ads are displayed and in what order.
                            </p>
                            <p className="text-gray-700 mb-3">
                                Ads targeting specific keywords will appear on the search results page when someone searches for that keyword. The more relevant your ad is to the user's search query, the higher it will rank on the page.
                            </p>
                            <p className="text-gray-700 mb-3">
                                This means that businesses need to strategically choose their keywords and create high-quality ads to see success with Google Ads.
                            </p>
                            <p className="text-gray-700">
                                A Google Ads management agency like ours helps optimize the complexities of the platform and ensure ad campaigns are set up for success.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">Features</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-[#e6f5f0] p-8 rounded-xl shadow flex flex-col items-center text-center">
                                <Target className="w-10 h-10 text-[#328E6E] mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Precise Targeting</h3>
                                <p className="text-gray-700 mb-2">Reach the right audience with advanced keyword, demographic, and location targeting.</p>
                                <CheckCircle className="w-5 h-5 text-[#328E6E]" />
                            </div>
                            {/* Feature 2 */}
                            <div className="bg-[#e6f5f0] p-8 rounded-xl shadow flex flex-col items-center text-center">
                                <BarChart className="w-10 h-10 text-[#328E6E] mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                                <p className="text-gray-700 mb-2">Monitor and optimize campaigns in real time for maximum ROI.</p>
                                <CheckCircle className="w-5 h-5 text-[#328E6E]" />
                            </div>
                            {/* Feature 3 */}
                            <div className="bg-[#e6f5f0] p-8 rounded-xl shadow flex flex-col items-center text-center">
                                <Zap className="w-10 h-10 text-[#328E6E] mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Conversion Optimization</h3>
                                <p className="text-gray-700 mb-2">Boost your conversion rates with expert ad copy, landing pages, and A/B testing.</p>
                                <CheckCircle className="w-5 h-5 text-[#328E6E]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Google Ads Management Process Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Our Google Ads Management Process
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#e6f5f0] flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[#328E6E]">1</span>
                                </div>
                                <h3 className="font-semibold mb-2">Account Audit</h3>
                                <p className="text-gray-700 text-sm">We review your current Google Ads account structure, keywords, and performance to identify opportunities.</p>
                            </div>
                            <div>
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#e6f5f0] flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[#328E6E]">2</span>
                                </div>
                                <h3 className="font-semibold mb-2">Strategy & Setup</h3>
                                <p className="text-gray-700 text-sm">We develop a custom strategy, build campaigns, and set up conversion tracking for measurable results.</p>
                            </div>
                            <div>
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#e6f5f0] flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[#328E6E]">3</span>
                                </div>
                                <h3 className="font-semibold mb-2">Optimization</h3>
                                <p className="text-gray-700 text-sm">We monitor, test, and optimize your ads, keywords, and bids to maximize ROI and lower costs.</p>
                            </div>
                            <div>
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#e6f5f0] flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[#328E6E]">4</span>
                                </div>
                                <h3 className="font-semibold mb-2">Reporting</h3>
                                <p className="text-gray-700 text-sm">You receive transparent, easy-to-understand reports and regular strategy calls with our experts.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Google Ads Campaigns Section */}
                <section className="py-16 bg-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Types of Google Ads Campaigns We Manage
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Search Ads</h3>
                                <p className="text-gray-700 text-sm">Text ads that appear on Google search results when users look for your products or services.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Display Ads</h3>
                                <p className="text-gray-700 text-sm">Banner and image ads shown across millions of websites in the Google Display Network.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Shopping Ads</h3>
                                <p className="text-gray-700 text-sm">Product-based ads that appear in Google Shopping and search results for eCommerce businesses.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Video Ads</h3>
                                <p className="text-gray-700 text-sm">Engaging video ads that run on YouTube and across the Google Video Partner network.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Google Ads Management FAQs Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Google Ads Management FAQs
                        </h2>
                        <div className="max-w-2xl mx-auto space-y-6">
                            <div>
                                <h3 className="font-semibold text-[#328E6E] mb-2">How much should I spend on Google Ads?</h3>
                                <p className="text-gray-700 text-sm">Your budget depends on your industry, goals, and competition. We help you set a budget that maximizes your ROI.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#328E6E] mb-2">How soon will I see results?</h3>
                                <p className="text-gray-700 text-sm">Most clients see initial results within the first month, with ongoing optimization improving performance over time.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#328E6E] mb-2">Do you provide reports?</h3>
                                <p className="text-gray-700 text-sm">Yes! You'll receive regular, easy-to-understand reports and have access to our team for strategy calls and support.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Google Ads Management Implementation Process Stepper Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Our Google Ads Management Implementation Process
                        </h2>
                        <div className="flex flex-col md:flex-row md:items-start md:gap-12 max-w-4xl mx-auto">
                            {/* Stepper */}
                            <div className="flex flex-col items-center md:items-start md:w-2/3">
                                {[
                                    {
                                        title: "Paid Search Analysis",
                                        desc: "Our Ads management services begin with a thorough analysis of your current or past AdWords campaigns to identify areas for improvement and ways to boost returns."
                                    },
                                    {
                                        title: "Campaign Setup",
                                        desc: "With a deep understanding of your business and target audience, we build your campaigns from the ground up or improve your existing ones for maximum performance."
                                    },
                                    {
                                        title: "Ad Variation Testing",
                                        desc: "Once the ad copy is finalized, our Google Ads agency specialists perform A/B testing to determine the best-performing ads."
                                    },
                                    {
                                        title: "Conversion Tracking",
                                        desc: "The ads will be monitored to identify which groups generate the highest number of leads and sales over a time period. Then, we will make adjustments to both the ad copy and landing pages to concentrate on the keywords with the best outcomes."
                                    },
                                    {
                                        title: "ROI Analysis",
                                        desc: "There are two phases to this process: removing non-performing keywords and finding new ones to experiment with. This phase includes testing different landing pages, optimizing ad placements and tweaking budgets to achieve maximum ROI."
                                    },
                                    {
                                        title: "Maintenance and Reporting",
                                        desc: "Google Ads is constantly evolving, and our Google Ads company stays on top of any changes that may affect your campaigns. We also provide regular reports so you can stay informed about the progress of your campaigns."
                                    }
                                ].map((step, idx) => (
                                    <div key={step.title} className="flex items-start mb-8 w-full">
                                        <div className="flex flex-col items-center mr-6">
                                            <div className="w-12 h-12 rounded-full bg-[#328E6E] text-white flex items-center justify-center font-bold text-lg mb-2">
                                                <span>STEP<br />{idx + 1}</span>
                                            </div>
                                            {idx < 5 && <div className="w-1 h-16 bg-[#328E6E]" />}
                                        </div>
                                        <div>
                                            <div className="bg-[#e6f5f0] px-4 py-2 rounded font-semibold text-[#328E6E] mb-2 inline-block">{step.title}</div>
                                            <p className="text-gray-700 text-sm max-w-xl">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* CTA for Stepper */}
                            <div className="md:w-1/3 flex flex-col items-center justify-center mt-8 md:mt-0">
                                <Button
                                    className="bg-[#328E6E] hover:bg-[#256e56] text-white px-8 py-4 rounded-lg font-semibold mt-8"
                                    onClick={() => router.push('/contact?service=google-ads')}
                                >
                                    SET UP MY GOOGLE ADS MANAGER
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Grid Section */}
                <section className="py-16 bg-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Why Choose Us for Google Ads Management?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Campaign Tracking and Reporting</h3>
                                <p className="text-gray-700 text-sm">We provide you with regular, performance-driven reports and insights to ensure your campaigns are always optimized for growth.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Transparent Data Analysis</h3>
                                <p className="text-gray-700 text-sm">Get full access to all your Google Ads data and analytics, so you always know what's working and what's not.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Expert Consultation</h3>
                                <p className="text-gray-700 text-sm">Work directly with certified Google Ads experts for ongoing strategy, support, and campaign improvements.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Certified Google Analytics Partner</h3>
                                <p className="text-gray-700 text-sm">We're certified in Google Analytics and integrate data insights into every campaign for better results.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Diverse Domain Expertise</h3>
                                <p className="text-gray-700 text-sm">Our Google Ads specialists have experience across eCommerce, B2B, local, and service businesses.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Make Sound Business Decisions</h3>
                                <p className="text-gray-700 text-sm">We help you interpret analytics and make data-driven decisions for your business growth.</p>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <Button
                                className="bg-[#328E6E] hover:bg-[#256e56] text-white px-8 py-3 rounded-lg font-semibold"
                                onClick={() => router.push('/contact?service=google-ads')}
                            >
                                SMASH YOUR ADVERTISING GOALS
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Google Ads Success Stories Section */}
                <section className="py-16 bg-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Google Ads Success Stories
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white p-8 rounded-xl shadow">
                                <h3 className="font-semibold text-[#328E6E] mb-2">E-Commerce Brand</h3>
                                <p className="text-gray-700 text-sm mb-2">Increased online sales by <span className="font-bold text-[#328E6E]">120%</span> and reduced cost per acquisition by <span className="font-bold text-[#328E6E]">35%</span> in 6 months.</p>
                                <ul className="list-disc pl-6 text-gray-700 text-sm">
                                    <li>Implemented Shopping and Remarketing campaigns</li>
                                    <li>Optimized product feed and ad copy</li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Local Service Business</h3>
                                <p className="text-gray-700 text-sm mb-2">Doubled qualified leads and achieved a <span className="font-bold text-[#328E6E]">4.8x</span> return on ad spend.</p>
                                <ul className="list-disc pl-6 text-gray-700 text-sm">
                                    <li>Geo-targeted search campaigns</li>
                                    <li>Landing page A/B testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Google Ads Best Practices Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Google Ads Best Practices
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#328E6E] mt-1" />
                                <span className="text-gray-700">Use tightly themed ad groups for higher Quality Scores.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#328E6E] mt-1" />
                                <span className="text-gray-700">Write compelling ad copy with clear calls to action.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#328E6E] mt-1" />
                                <span className="text-gray-700">Regularly test and optimize landing pages for conversions.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#328E6E] mt-1" />
                                <span className="text-gray-700">Leverage negative keywords to filter out irrelevant traffic.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#328E6E] mt-1" />
                                <span className="text-gray-700">Monitor and adjust bids based on device, location, and time of day.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-[#328E6E]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Ready to Grow with Google Ads?
                            </h2>
                            <p className="text-xl text-white/90 mb-8">
                                Let our certified experts manage your campaigns for better results and less stress.
                            </p>
                            <Button
                                className="bg-white text-[#328E6E] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold"
                                onClick={() => router.push("/contact?service=google-ads")}
                            >
                                Start Now
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Google Ads Certifications & Partnerships Section */}
                <section className="py-16 bg-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Certified & Trusted by Industry Leaders
                        </h2>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {/* Certified Google Partner SVG */}
                            <div className="h-16 flex items-center">
                                <svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="8" width="72" height="48" rx="8" fill="#e6f5f0" stroke="#328E6E" strokeWidth="2"/>
                                    <circle cx="24" cy="32" r="10" fill="#328E6E" />
                                    <rect x="40" y="24" width="28" height="16" rx="4" fill="#328E6E" />
                                    <text x="24" y="36" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">G</text>
                                    <text x="54" y="36" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Partner</text>
                                </svg>
                            </div>
                            {/* Google Ads Certification SVG */}
                            <div className="h-16 flex items-center">
                                <svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="8" width="72" height="48" rx="8" fill="#e6f5f0" stroke="#328E6E" strokeWidth="2"/>
                                    <polygon points="40,16 60,48 20,48" fill="#328E6E" />
                                    <circle cx="40" cy="32" r="6" fill="#fff" />
                                    <text x="40" y="36" textAnchor="middle" fill="#328E6E" fontSize="10" fontWeight="bold">Ads</text>
                                </svg>
                            </div>
                            {/* Google Analytics Certified SVG */}
                            <div className="h-16 flex items-center">
                                <svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="8" width="72" height="48" rx="8" fill="#e6f5f0" stroke="#328E6E" strokeWidth="2"/>
                                    <rect x="20" y="36" width="8" height="12" rx="2" fill="#328E6E" />
                                    <rect x="34" y="28" width="8" height="20" rx="2" fill="#328E6E" />
                                    <rect x="48" y="20" width="8" height="28" rx="2" fill="#328E6E" />
                                    <circle cx="60" cy="16" r="4" fill="#328E6E" />
                                    <text x="40" y="60" textAnchor="middle" fill="#328E6E" fontSize="10" fontWeight="bold">Analytics</text>
                                </svg>
                            </div>
                            {/* Clutch Top Agency SVG */}
                            <div className="h-16 flex items-center">
                                <svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="8" width="72" height="48" rx="8" fill="#e6f5f0" stroke="#328E6E" strokeWidth="2"/>
                                    <polygon points="40,16 56,48 24,48" fill="#328E6E" />
                                    <polygon points="40,26 42.35,32.19 49,32.91 43.8,37.09 45.18,43.64 40,40.2 34.82,43.64 36.2,37.09 31,32.91 37.65,32.19" fill="#fff" />
                                    <text x="40" y="36" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Top</text>
                                    <text x="40" y="50" textAnchor="middle" fill="#328E6E" fontSize="10" fontWeight="bold">Agency</text>
                                </svg>
                            </div>
                        </div>
                        <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                            Our team is Google Ads and Analytics certified, and we're proud to be recognized as a top agency by industry authorities. You can trust us to manage your campaigns with the highest level of expertise and integrity.
                        </p>
                    </div>
                </section>

                {/* Google Ads Management Pricing Overview Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Google Ads Management Pricing
                        </h2>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                            <div className="bg-[#e6f5f0] p-8 rounded-xl shadow text-center">
                                <h3 className="font-bold text-[#328E6E] mb-2">Starter</h3>
                                <p className="text-3xl font-bold text-[#328E6E] mb-2">$499</p>
                                <p className="text-gray-700 mb-4">/month</p>
                                <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                    <li>Up to $2,000 ad spend</li>
                                    <li>1 Campaign</li>
                                    <li>Monthly Reporting</li>
                                </ul>
                                <Button
                                    className="bg-[#328E6E] text-white w-full"
                                    onClick={() => router.push('/contact?service=google-ads-starter')}
                                >
                                    Get Started
                                </Button>
                            </div>
                            <div className="bg-[#e6f5f0] p-8 rounded-xl shadow text-center border-2 border-[#328E6E]">
                                <h3 className="font-bold text-[#328E6E] mb-2">Growth</h3>
                                <p className="text-3xl font-bold text-[#328E6E] mb-2">$999</p>
                                <p className="text-gray-700 mb-4">/month</p>
                                <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                    <li>Up to $10,000 ad spend</li>
                                    <li>Up to 5 Campaigns</li>
                                    <li>Bi-Weekly Reporting</li>
                                    <li>Landing Page Optimization</li>
                                </ul>
                                <Button
                                    className="bg-[#328E6E] text-white w-full"
                                    onClick={() => router.push('/contact?service=google-ads-growth')}
                                >
                                    Get Started
                                </Button>
                            </div>
                            <div className="bg-[#e6f5f0] p-8 rounded-xl shadow text-center">
                                <h3 className="font-bold text-[#328E6E] mb-2">Enterprise</h3>
                                <p className="text-3xl font-bold text-[#328E6E] mb-2">Custom</p>
                                <p className="text-gray-700 mb-4">Contact Us</p>
                                <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                    <li>Unlimited ad spend</li>
                                    <li>Unlimited Campaigns</li>
                                    <li>Dedicated Account Manager</li>
                                    <li>Custom Reporting & Strategy</li>
                                </ul>
                                <Button
                                    className="bg-[#328E6E] text-white w-full"
                                    onClick={() => router.push('/contact?service=google-ads-enterprise')}
                                >
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                        <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                            All plans include campaign setup, ongoing optimization, and transparent reporting. Need a custom solution? <span className="text-[#328E6E] underline cursor-pointer" onClick={() => router.push('/contact?service=google-ads-custom')}>Contact us</span> for a personalized quote.
                        </p>
                    </div>
                </section>

                {/* Meet Your Google Ads Team Section */}
                <section className="py-16 bg-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Meet Your Google Ads Team
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#e6f5f0] flex items-center justify-center">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="30" fill="#328E6E" />
                                        <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                        <ellipse cx="30" cy="45" rx="16" ry="8" fill="#e6f5f0" />
                                        <ellipse cx="30" cy="25" rx="8" ry="10" fill="#e6f5f0" />
                                        <circle cx="26" cy="24" r="2" fill="#328E6E" />
                                        <circle cx="34" cy="24" r="2" fill="#328E6E" />
                                        <ellipse cx="30" cy="30" rx="4" ry="2" fill="#328E6E" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-[#328E6E] mb-1">Ayesha Khan</h3>
                                <p className="text-gray-700 text-sm mb-1">Senior Google Ads Strategist</p>
                                <p className="text-gray-500 text-xs">10+ years experience, eCommerce & SaaS</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#e6f5f0] flex items-center justify-center">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="30" fill="#328E6E" />
                                        <ellipse cx="30" cy="26" rx="10" ry="12" fill="#fff" />
                                        <ellipse cx="30" cy="46" rx="16" ry="8" fill="#e6f5f0" />
                                        <ellipse cx="30" cy="26" rx="8" ry="10" fill="#e6f5f0" />
                                        <circle cx="25" cy="25" r="2" fill="#328E6E" />
                                        <circle cx="35" cy="25" r="2" fill="#328E6E" />
                                        <ellipse cx="30" cy="32" rx="4" ry="2" fill="#328E6E" />
                                        <rect x="22" y="38" width="16" height="3" rx="1.5" fill="#328E6E" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-[#328E6E] mb-1">Bilal Ahmed</h3>
                                <p className="text-gray-700 text-sm mb-1">PPC Account Manager</p>
                                <p className="text-gray-500 text-xs">B2B, Lead Gen, Local Services</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#e6f5f0] flex items-center justify-center">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="30" fill="#328E6E" />
                                        <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                        <ellipse cx="30" cy="45" rx="16" ry="8" fill="#e6f5f0" />
                                        <ellipse cx="30" cy="25" rx="8" ry="10" fill="#e6f5f0" />
                                        <circle cx="27" cy="24" r="2" fill="#328E6E" />
                                        <circle cx="33" cy="24" r="2" fill="#328E6E" />
                                        <ellipse cx="30" cy="30" rx="4" ry="2" fill="#328E6E" />
                                        <rect x="25" y="36" width="10" height="3" rx="1.5" fill="#328E6E" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-[#328E6E] mb-1">Sara Malik</h3>
                                <p className="text-gray-700 text-sm mb-1">Conversion Copywriter</p>
                                <p className="text-gray-500 text-xs">Ad Copy, Landing Pages, CRO</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#e6f5f0] flex items-center justify-center">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="30" fill="#328E6E" />
                                        <ellipse cx="30" cy="25" rx="10" ry="12" fill="#fff" />
                                        <ellipse cx="30" cy="45" rx="16" ry="8" fill="#e6f5f0" />
                                        <ellipse cx="30" cy="25" rx="8" ry="10" fill="#e6f5f0" />
                                        <circle cx="28" cy="24" r="2" fill="#328E6E" />
                                        <circle cx="32" cy="24" r="2" fill="#328E6E" />
                                        <ellipse cx="30" cy="30" rx="4" ry="2" fill="#328E6E" />
                                        <rect x="27" y="38" width="6" height="3" rx="1.5" fill="#328E6E" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-[#328E6E] mb-1">Omar Siddiqui</h3>
                                <p className="text-gray-700 text-sm mb-1">Analytics & Reporting Lead</p>
                                <p className="text-gray-500 text-xs">Data Analysis, Tag Manager, Reporting</p>
                            </div>
                        </div>
                        <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                            Our team brings together years of experience, creativity, and a passion for results. We're here to help you succeed with Google Ads!
                        </p>
                    </div>
                </section>

                {/* Industries We Serve Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Industries We Serve
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="bg-[#e6f5f0] p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">E-Commerce</h3>
                                <p className="text-gray-700 text-sm">Drive more sales and maximize ROAS with Shopping, Search, and Display campaigns.</p>
                            </div>
                            <div className="bg-[#e6f5f0] p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Local Services</h3>
                                <p className="text-gray-700 text-sm">Get more calls and bookings from your service area with geo-targeted ads.</p>
                            </div>
                            <div className="bg-[#e6f5f0] p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">B2B & SaaS</h3>
                                <p className="text-gray-700 text-sm">Generate high-quality leads and nurture prospects with targeted campaigns.</p>
                            </div>
                            <div className="bg-[#e6f5f0] p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Healthcare</h3>
                                <p className="text-gray-700 text-sm">Attract new patients and grow your practice with HIPAA-compliant ad strategies.</p>
                            </div>
                            <div className="bg-[#e6f5f0] p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Education</h3>
                                <p className="text-gray-700 text-sm">Increase enrollments and program awareness with smart Google Ads campaigns.</p>
                            </div>
                            <div className="bg-[#e6f5f0] p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Real Estate</h3>
                                <p className="text-gray-700 text-sm">Connect with buyers and sellers in your market with local and display ads.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Google Ads Management Testimonials Section */}
                <section className="py-16 bg-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            What Our Clients Say
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white p-8 rounded-xl shadow">
                                <p className="text-gray-700 italic mb-4">
                                    "We saw a 3x increase in leads and a 40% drop in cost per conversion within the first 90 days. The team is proactive, transparent, and truly cares about our results."
                                </p>
                                <p className="font-semibold text-[#328E6E]">— Fatima R., E-Commerce Director</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow">
                                <p className="text-gray-700 italic mb-4">
                                    "Their Google Ads expertise helped us dominate our local market. We get more calls and bookings than ever before!"
                                </p>
                                <p className="font-semibold text-[#328E6E]">— Imran S., Home Services Owner</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Free Google Ads Audit CTA Section */}
                <section className="py-16 bg-[#328E6E]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Get a Free Google Ads Audit
                            </h2>
                            <p className="text-xl text-white/90 mb-8">
                                Want to know how your campaigns can perform better? Request a free, no-obligation audit from our certified experts.
                            </p>
                            <Button
                                className="bg-white text-[#328E6E] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold"
                                onClick={() => router.push('/contact?service=google-ads-audit')}
                            >
                                Request My Audit
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Google Ads vs. Competitors Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Google Ads vs. Other Platforms
                        </h2>
                        <div className="overflow-x-auto w-full">
                            <table className="min-w-[700px] w-full text-sm text-left border rounded-xl overflow-hidden">
                                <thead className="bg-[#e6f5f0] text-[#328E6E]">
                                    <tr>
                                        <th className="py-3 px-4 font-bold">Feature</th>
                                        <th className="py-3 px-4 font-bold">Google Ads</th>
                                        <th className="py-3 px-4 font-bold">Facebook Ads</th>
                                        <th className="py-3 px-4 font-bold">Bing Ads</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr className="border-b">
                                        <td className="py-3 px-4">Audience Reach</td>
                                        <td className="py-3 px-4">Largest (Search, Display, YouTube)</td>
                                        <td className="py-3 px-4">Social (Facebook, Instagram)</td>
                                        <td className="py-3 px-4">Smaller, but high intent</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 px-4">Ad Formats</td>
                                        <td className="py-3 px-4">Search, Display, Video, Shopping</td>
                                        <td className="py-3 px-4">Image, Video, Carousel</td>
                                        <td className="py-3 px-4">Search, Shopping</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 px-4">Targeting Options</td>
                                        <td className="py-3 px-4">Keywords, Demographics, Interests, Location</td>
                                        <td className="py-3 px-4">Demographics, Interests, Behaviors</td>
                                        <td className="py-3 px-4">Keywords, Demographics</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 px-4">Cost per Click</td>
                                        <td className="py-3 px-4">$1–$2 avg</td>
                                        <td className="py-3 px-4">$0.50–$1 avg</td>
                                        <td className="py-3 px-4">$1.50 avg</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4">Best For</td>
                                        <td className="py-3 px-4">Intent-driven leads, eCommerce, B2B</td>
                                        <td className="py-3 px-4">Brand awareness, retargeting</td>
                                        <td className="py-3 px-4">Supplemental search traffic</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* How We Work Timeline Section */}
                <section className="py-16 bg-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            How We Work: Our Proven Process
                        </h2>
                        <div className="flex flex-col md:flex-row md:justify-center gap-8">
                            {["Discovery & Goals", "Strategy & Planning", "Campaign Launch", "Ongoing Optimization", "Transparent Reporting"].map((step, idx) => (
                                <div key={step} className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-[#328E6E] text-white flex items-center justify-center font-bold mb-2 text-xl">{idx + 1}</div>
                                    <span className="text-[#328E6E] font-semibold mb-2 text-center">{step}</span>
                                    {idx < 4 && <div className="h-8 w-1 bg-[#328E6E] md:h-1 md:w-8 md:my-0 my-2" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Client Results Carousel Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Client Results & Case Studies
                        </h2>
                        <div className="flex overflow-x-auto gap-8 pb-4">
                            {[{
                                title: "E-Commerce Brand",
                                result: "+150% ROAS",
                                desc: "Scaled revenue with Shopping & Search campaigns.",
                                color: "bg-[#e6f5f0]"
                            }, {
                                title: "B2B SaaS",
                                result: "-40% Cost/Lead",
                                desc: "Improved lead quality and reduced acquisition cost.",
                                color: "bg-[#f5faf8]"
                            }, {
                                title: "Local Services",
                                result: "+3x Calls",
                                desc: "Geo-targeted ads tripled inbound calls.",
                                color: "bg-[#e6f5f0]"
                            }].map((item, idx) => (
                                <div key={idx} className={`min-w-[280px] max-w-xs p-6 rounded-xl shadow ${item.color}`}>
                                    <h3 className="font-bold text-[#328E6E] mb-2">{item.title}</h3>
                                    <div className="text-2xl font-bold mb-2">{item.result}</div>
                                    <p className="text-gray-700 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Free Resources Section */}
                <section className="py-16 bg-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Free Google Ads Resources
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Google Ads Checklist</h3>
                                <p className="text-gray-700 text-sm mb-4">Download our step-by-step checklist to launch and optimize your first campaign.</p>
                                <span className="text-[#328E6E] underline font-semibold cursor-pointer" onClick={() => router.push('/contact?service=google-ads-checklist')}>Download PDF</span>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Keyword Research Guide</h3>
                                <p className="text-gray-700 text-sm mb-4">Learn how to find high-converting keywords for your business.</p>
                                <span className="text-[#328E6E] underline font-semibold cursor-pointer" onClick={() => router.push('/contact?service=keyword-research-guide')}>Download Guide</span>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow text-center">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Google Ads Audit Template</h3>
                                <p className="text-gray-700 text-sm mb-4">Use our template to audit your existing campaigns and find quick wins.</p>
                                <span className="text-[#328E6E] underline font-semibold cursor-pointer" onClick={() => router.push('/contact?service=audit-template')}>Download Template</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Get a Custom Proposal CTA Section */}
                <section className="py-16 bg-[#328E6E]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Get a Custom Google Ads Proposal
                            </h2>
                            <p className="text-xl text-white/90 mb-8">
                                Tell us about your business and goals. Our experts will send you a personalized strategy—no obligation!
                            </p>
                            <Button
                                className="bg-white text-[#328E6E] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold"
                                onClick={() => router.push('/contact?service=google-ads-proposal')}
                            >
                                Request My Proposal
                            </Button>
                        </div>
                    </div>
                </section>

                {/* More Testimonials & Trust Badges Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            More Client Success Stories
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="bg-[#e6f5f0] p-6 rounded-xl shadow text-center">
                                <p className="text-gray-700 italic mb-4">
                                    "Our Google Ads ROI doubled in just 2 months. The team is responsive and truly understands our business."
                                </p>
                                <p className="font-semibold text-[#328E6E]">— Zainab M., Retail Owner</p>
                            </div>
                            <div className="bg-[#e6f5f0] p-6 rounded-xl shadow text-center">
                                <p className="text-gray-700 italic mb-4">
                                    "We finally have full transparency and control over our ad spend. Highly recommended!"
                                </p>
                                <p className="font-semibold text-[#328E6E]">— Ali R., SaaS Founder</p>
                            </div>
                            <div className="bg-[#e6f5f0] p-6 rounded-xl shadow text-center">
                                <p className="text-gray-700 italic mb-4">
                                    "Their expertise in Google Ads and Analytics is unmatched. We saw instant improvements."
                                </p>
                                <p className="font-semibold text-[#328E6E]">— Maria S., Healthcare Manager</p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-8 mt-8 flex-wrap">
                            {/* Trust Badges SVGs */}
                            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="76" height="36" rx="8" fill="#e6f5f0" stroke="#328E6E" strokeWidth="2"/>
                                <text x="40" y="25" textAnchor="middle" fill="#328E6E" fontSize="16" fontWeight="bold">Top Rated</text>
                            </svg>
                            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="76" height="36" rx="8" fill="#e6f5f0" stroke="#328E6E" strokeWidth="2"/>
                                <text x="40" y="25" textAnchor="middle" fill="#328E6E" fontSize="16" fontWeight="bold">Certified</text>
                            </svg>
                            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="76" height="36" rx="8" fill="#e6f5f0" stroke="#328E6E" strokeWidth="2"/>
                                <text x="40" y="25" textAnchor="middle" fill="#328E6E" fontSize="16" fontWeight="bold">5-Star</text>
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Common Mistakes in Google Ads Section */}
                <section className="py-16 bg-[#f5faf8]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328E6E]">
                            Common Mistakes in Google Ads (and How to Avoid Them)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-6 rounded-xl shadow">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Not Using Negative Keywords</h3>
                                <p className="text-gray-700 text-sm">Wasting budget on irrelevant clicks. Always add negative keywords to filter out unwanted traffic.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Ignoring Mobile Optimization</h3>
                                <p className="text-gray-700 text-sm">Most searches are on mobile. Make sure your ads and landing pages are mobile-friendly.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Not Tracking Conversions</h3>
                                <p className="text-gray-700 text-sm">Without conversion tracking, you can't measure ROI or optimize effectively.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow">
                                <h3 className="font-semibold text-[#328E6E] mb-2">Setting & Forgetting Campaigns</h3>
                                <p className="text-gray-700 text-sm">Google Ads needs ongoing optimization. Regularly review and adjust your campaigns.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}