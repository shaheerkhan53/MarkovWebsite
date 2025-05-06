'use client';

import React from 'react';
import { PageHeaderLine } from "@/components/ui/page-header-line";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BarChart, Target, Zap, TrendingUp, Shield, ArrowRight, CheckCircle, Users, Brain, Laptop, LineChart, Target as TargetIcon, ChartBar, Lightbulb, MousePointer, HandshakeIcon, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SearchEngineMarketingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");

  const handleAnalysisRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl.trim()) {
      toast.error("Please enter your website URL");
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Your analysis request has been received!");
      router.push("/contact?service=sem");
    }, 1500);
  };

  const features = [
    "Keyword Research & Optimization",
    "Ad Copy Creation & Testing",
    "Landing Page Optimization",
    "Conversion Rate Optimization",
    "A/B Testing & Analytics",
    "Budget Management",
    "Competitor Analysis",
    "ROI Tracking"
  ];

  const keyAreas = [
    {
      number: "1.",
      title: "Audience Analysis",
      icon: <Users className="w-6 h-6 text-white" />,
      description: "Evaluates your target audience demographics, behavior patterns, and search intent to create highly targeted PPC campaigns"
    },
    {
      number: "2.",
      title: "Keyword Strategy",
      icon: <Brain className="w-6 h-6 text-white" />,
      description: "Develops comprehensive keyword research and mapping to capture high-intent search traffic and optimize ad spend"
    },
    {
      number: "3.",
      title: "Campaign Structure",
      icon: <Laptop className="w-6 h-6 text-white" />,
      description: "Creates optimized campaign architecture with proper ad groups, targeting settings, and bid strategies"
    },
    {
      number: "4.",
      title: "Performance Tracking",
      icon: <LineChart className="w-6 h-6 text-white" />,
      description: "Implements advanced tracking and analytics to monitor campaign metrics, conversions, and ROI in real-time"
    },
    {
      number: "5.",
      title: "Conversion Optimization",
      icon: <TargetIcon className="w-6 h-6 text-white" />,
      description: "Optimizes landing pages and ad elements to improve quality scores and conversion rates"
    },
    {
      number: "6.",
      title: "ROI Measurement",
      icon: <ChartBar className="w-6 h-6 text-white" />,
      description: "Tracks and analyzes key performance indicators including cost per acquisition, ROAS, and customer lifetime value"
    }
  ];

  const strategySteps = [
    {
      number: "1",
      title: "STRATEGIZE",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      description: "We develop a comprehensive SEM strategy aligned with your business goals, analyzing competitors and identifying key opportunities.",
      includes: [
        "Keyword Research",
        "Competitor Analysis",
        "Budget Planning",
        "Campaign Structure"
      ]
    },
    {
      number: "2",
      title: "ATTRACT",
      icon: <MousePointer className="w-6 h-6 text-white" />,
      description: "Create compelling ad campaigns that attract your ideal target audience with precision targeting and engaging ad copy.",
      includes: [
        "Ad Copy Creation",
        "Landing Pages",
        "Audience Targeting",
        "Bid Management"
      ]
    },
    {
      number: "3",
      title: "CONVERT",
      icon: <Target className="w-6 h-6 text-white" />,
      description: "Optimize campaigns to maximize conversions through continuous testing and refinement of ad elements.",
      includes: [
        "A/B Testing",
        "Conversion Tracking",
        "Quality Score Optimization",
        "Landing Page CRO"
      ]
    },
    {
      number: "4",
      title: "CLOSE",
      icon: <HandshakeIcon className="w-6 h-6 text-white" />,
      description: "Turn qualified leads into customers with targeted remarketing and strategic ad placement.",
      includes: [
        "Lead Nurturing",
        "Remarketing",
        "ROI Tracking",
        "Performance Analysis"
      ]
    },
    {
      number: "5",
      title: "DELIGHT",
      icon: <Heart className="w-6 h-6 text-white" />,
      description: "Keep customers coming back with personalized campaigns and loyalty-focused advertising strategies.",
      includes: [
        "Customer Retention",
        "Brand Advocacy",
        "Loyalty Programs",
        "Customer Feedback"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeaderLine 
        title="PAY-PER-CLICK (PPC) & SEARCH ENGINE MARKETING"
        color="bg-[#A04747]"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
        link={{
          text: "View Google Ads Help",
          url: "https://support.google.com/google-ads"
        }}
      />

      <main className="flex-grow">
        {/* What Are Search Engines? */}
      

       

        {/* How Does SEM Work? */}
       
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-b from-[#f5e6e6] to-[#faf5f5]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Boost Your Online Presence with Search Engine Marketing
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Drive targeted traffic and increase conversions with our expert PPC management services
              </p>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Get Your Free Website Analysis</h2>
                <form onSubmit={handleAnalysisRequest}>
                  <div className="flex gap-4">
                    <Input 
                      type="text" 
                      placeholder="Enter your website URL" 
                      className="flex-1"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                    />
                    <Button 
                      type="submit"
                      className="bg-[#A04747] hover:bg-[#8a3d3d] text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Analyze Now"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#A04747] mb-8 text-center">What Are Search Engines?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  Search engines are software systems designed to carry out web searches, which means to search the World Wide Web in a systematic way for particular information specified in a textual web search query. The search results are generally presented in a line of results, often referred to as search engine results pages (SERPs). The information may be a mix of web pages, images, videos, articles, and other types of files.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><b>Crawl:</b> Search engines crawl and scan websites to discover new and updated content.</li>
                  <li><b>Index:</b> They store and organize the content found during the crawling process.</li>
                  <li><b>Rank:</b> They order results based on relevance to the user's query, using complex algorithms.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  The most popular search engines include Google, Bing, Yahoo, Baidu, and DuckDuckGo. Google dominates the market with a significant share.
                </p>
                <div className="flex justify-center">
                  <svg
                    width="180"
                    height="140"
                    viewBox="0 0 180 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Search Engines Illustration"
                  >
                    <rect x="10" y="30" width="160" height="80" rx="10" fill="#f5e6e6" stroke="#A04747" strokeWidth="3"/>
                    <rect x="25" y="50" width="100" height="15" rx="5" fill="#fff" />
                    <circle cx="140" cy="57.5" r="7.5" fill="#A04747" />
                    <rect x="25" y="75" width="60" height="10" rx="5" fill="#fff" />
                    <circle cx="120" cy="80" r="5" fill="#A04747" />
                    <circle cx="150" cy="110" r="18" fill="#fff" stroke="#A04747" strokeWidth="3"/>
                    <rect x="162" y="122" width="18" height="5" rx="2.5" fill="#A04747" transform="rotate(45 162 122)" />
                    <circle cx="150" cy="110" r="8" fill="#f5e6e6" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/SEO.png" alt="Search Engines Illustration" className="max-w-xl w-full" />
              </div>
            </div>
          </div>
        </section>

         {/* What Is Search Engine Marketing? */}
         <section className="py-16 bg-gradient-to-b from-[#f5e6e6] to-[#faf5f5]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#A04747] mb-8 text-center">What Is Search Engine Marketing?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <img src="/SEO1.png" alt="Search Engine Marketing Illustration" className="max-w-xs w-full" />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-700 mb-4">
                  Search Engine Marketing (SEM) is a digital marketing strategy used to increase the visibility of a website in search engine results pages (SERPs). SEM primarily refers to paid search advertising, such as Google Ads or Bing Ads, but can also include organic efforts.
                </p>
                <p className="text-gray-700 mb-4">
                  SEM allows businesses to target users who are actively searching for products or services like theirs, making it one of the most effective ways to grow your business online. With SEM, you can control your budget, target specific locations, and measure results in real time.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-[#A04747] text-white px-4 py-2 rounded-full text-xs font-semibold">Higher Quality Leads</span>
                  <span className="bg-[#A04747] text-white px-4 py-2 rounded-full text-xs font-semibold">Higher ROI</span>
                  <span className="bg-[#A04747] text-white px-4 py-2 rounded-full text-xs font-semibold">Targeted Reach</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#A04747] mb-8 text-center">How Does SEM Work?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="flex-1 flex justify-center">
                <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="110" cy="110" r="100" stroke="#A04747" strokeWidth="8" fill="#f5e6e6" />
                  <text x="50%" y="50%" textAnchor="middle" fill="#A04747" fontSize="16" fontWeight="bold" dy=".3em">Search Engine Marketing Process</text>
                </svg>
              </div>
              <div className="flex-1">
                <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                  <li><b>Keyword Research and Analysis:</b> Identify the best keywords to target for your business and audience.</li>
                  <li><b>Ad Creation and Landing Page Development:</b> Write compelling ads and design high-converting landing pages.</li>
                  <li><b>Campaign Launch and Monitoring:</b> Launch your campaigns and monitor their performance closely.</li>
                  <li><b>Evaluation and Analysis:</b> Analyze results and optimize campaigns for better ROI.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive PPC Services</h2>
              <p className="text-xl text-gray-600">Everything you need to succeed in paid search marketing</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A04747] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our PPC Services</h2>
              <p className="text-xl text-gray-600">Tailored solutions for your business goals</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="w-7 h-7 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Google Ads Management</h3>
                <p className="text-gray-600 mb-6">Expert management of your Google Ads campaigns for maximum ROI and performance.</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => router.push('/contact?service=google-ads-management')}
                >
                  Learn More
                </Button>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Performance Tracking</h3>
                <p className="text-gray-600 mb-6">Detailed analytics and reporting to measure and optimize campaign performance.</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => router.push('/contact?service=performance-tracking')}
                >
                  Learn More
                </Button>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-14 h-14 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Conversion Optimization</h3>
                <p className="text-gray-600 mb-6">Strategic optimization to improve conversion rates and reduce cost per acquisition.</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => router.push('/contact?service=conversion-optimization')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Areas Section */}
        <section className="py-16 bg-gradient-to-b from-[#f5e6e6] to-[#faf5f5]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Areas of Focus</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Area 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#f5e6e6] rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
                <p className="text-gray-600">Developing comprehensive PPC strategies aligned with your business goals.</p>
              </div>

              {/* Area 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#f5e6e6] rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Audience Targeting</h3>
                <p className="text-gray-600">Precise targeting to reach your ideal customers effectively.</p>
              </div>

              {/* Area 3 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#f5e6e6] rounded-lg flex items-center justify-center mb-4">
                  <ChartBar className="w-6 h-6 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Analysis</h3>
                <p className="text-gray-600">Continuous monitoring and optimization of campaign metrics.</p>
              </div>

              {/* Area 4 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#f5e6e6] rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Creative Excellence</h3>
                <p className="text-gray-600">Compelling ad copy and visuals that drive engagement.</p>
              </div>

              {/* Area 5 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#f5e6e6] rounded-lg flex items-center justify-center mb-4">
                  <MousePointer className="w-6 h-6 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Landing Page Optimization</h3>
                <p className="text-gray-600">Conversion-focused landing page design and testing.</p>
              </div>

              {/* Area 6 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#f5e6e6] rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">ROI Maximization</h3>
                <p className="text-gray-600">Strategic budget allocation for optimal return on investment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Steps Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Marketing Strategy Process</h2>
            
            {/* Progress Bar */}
            <div className="relative mb-16">
              <div className="h-2 bg-[#f5e6e6] rounded-full">
                <div className="h-2 bg-[#A04747] rounded-full w-full"></div>
              </div>
              <div className="flex justify-between absolute w-full top-0 -mt-2">
                {strategySteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="w-6 h-6 bg-[#A04747] rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {strategySteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-[#f5e6e6] rounded-lg flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#A04747]">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEM Benefits and Statistics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                The Power of Search Engine Marketing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why SEM is Essential for Your Business Growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Stat 1 */}
              <div className="bg-[#f5e6e6] p-8 rounded-xl">
                <div className="text-4xl font-bold text-[#A04747] mb-2">75%</div>
                <p className="text-gray-700">of users never scroll past the first page of search results</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#f5e6e6] p-8 rounded-xl">
                <div className="text-4xl font-bold text-[#A04747] mb-2">50%</div>
                <p className="text-gray-700">higher conversion rates compared to organic traffic</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#f5e6e6] p-8 rounded-xl">
                <div className="text-4xl font-bold text-[#A04747] mb-2">91%</div>
                <p className="text-gray-700">of B2B buyers use search engines to research products</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefits Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-[#f5e6e6] rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Immediate Visibility</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Appear at the top of search results within hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Target specific keywords and locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Control your ad budget and spending</span>
                  </li>
                </ul>
              </div>

              {/* Benefits Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-[#f5e6e6] rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Precise Targeting</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Reach users actively searching for your products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Target by demographics, interests, and behaviors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Show ads at specific times and locations</span>
                  </li>
                </ul>
              </div>

              {/* Benefits Card 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-[#f5e6e6] rounded-lg flex items-center justify-center mb-6">
                  <LineChart className="w-6 h-6 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Measurable Results</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Track clicks, impressions, and conversions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Monitor ROI and campaign performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Optimize campaigns based on real-time data</span>
                  </li>
                </ul>
              </div>

              {/* Benefits Card 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-[#f5e6e6] rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Competitive Advantage</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Outrank competitors in search results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Target competitor keywords and audiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Build brand awareness and credibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gradient-to-b from-[#f5e6e6] to-[#faf5f5]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose Thrive for Your Digital Marketing Business Plan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage Our Industry Expertise and Knowledge
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Multidisciplinary Team</h3>
                <p className="text-gray-600">
                  Our digital strategy firm combines a team of digital marketing consultants with diverse skill sets. We have a wide range of strategy development experts, including B2B social media strategy specialists. We blend a winning strategy and growth tactics. We invest in training our consultants to stay ahead of industry developments and provide innovative digital marketing ideas and SEO strategies.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <HandshakeIcon className="w-8 h-8 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">No Commitment Necessary</h3>
                <p className="text-gray-600">
                  With our digital marketing strategy agency, you don't have to commit to our SEO services. You have the option to take our social media marketing plan and complete marketing strategy implementation yourself. Our digital strategy services and social media marketing strategy company is more than fit to provide our digital marketing consultant to assist with the digital marketing and social media marketing plan.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Established Reputation</h3>
                <p className="text-gray-600">
                  At Thrive, we don't simply run a digital marketing audit and leave you wondering what to do next. Our digital strategy consultant performs a thorough web audit, analyzes the audit results, provides data-driven marketing predictions and formulates strategic action plans to guide your digital marketing success. Over the years, we've helped numerous clients with their eCommerce marketing plan, link building services and other marketing strategies – we can do the same for you.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Unified Plan Across Delivery Teams</h3>
                <p className="text-gray-600">
                  Every year B2B social media strategy and digital marketing trends evolve to meet changing consumer needs. All digital marketing strategies should be centered on your primary goals to ensure success. By working with a digital strategy consultant, we determine your target objectives and create a unified marketing plan to ensure all digital media platform planning and client marketing strategy align with your business goals.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <LineChart className="w-8 h-8 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Custom Marketing Strategy Packages</h3>
                <p className="text-gray-600">
                  Our marketing and content strategy agency offers customizable strategy development packages based on your digital marketing budget, business objectives, target market demographics and marketing goals. Each client will see marketing strategy executed to fit and meet their needs. We focus on the pricing models of our online marketing and social media strategy services.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-[#A04747]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Holistic Strategy Approach</h3>
                <p className="text-gray-600">
                  We believe that a well-structured digital marketing plan is what sets a thriving company apart from competitors. At Thrive, we analyze all sides of your brand's marketing mix and assess them with the results of your site audit with your marketing consultant to develop a more holistic online marketing strategy. eCommerce marketing plan is B2B lead services. We also offer paid advertising strategy, enterprise-level SEO strategy and a complete marketing plan to capture all market segments.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => router.push('/contact?service=sem')}
                className="bg-[#A04747] hover:bg-[#8a3d3d] text-white px-8 py-4 rounded-lg font-semibold"
              >
                Get Your Roadmap to Success
              </Button>
            </div>
          </div>
        </section>

        {/* SEM Platforms and Tools Section */}
        <section className="py-16 bg-gradient-to-b from-[#f5e6e6] to-[#faf5f5]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our SEM Platforms & Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive Solutions for Every Search Marketing Need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Platform 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#A04747]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Google Ads</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Search Network Campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Display Network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Shopping Campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>YouTube Advertising</span>
                  </li>
                </ul>
              </div>

              {/* Platform 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#A04747]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Microsoft Advertising</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Bing Search Ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Yahoo Search Ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Audience Network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>LinkedIn Integration</span>
                  </li>
                </ul>
              </div>

              {/* Platform 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#f5e6e6] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#A04747]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Analytics & Tools</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Google Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Google Tag Manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Conversion Tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#A04747] flex-shrink-0 mt-1" />
                    <span>Keyword Research Tools</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Our SEM Process</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f5e6e6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#A04747] font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Research</h4>
                  <p className="text-gray-600 text-sm">Keyword & competitor analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f5e6e6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#A04747] font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Strategy</h4>
                  <p className="text-gray-600 text-sm">Campaign planning & setup</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f5e6e6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#A04747] font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <p className="text-gray-600 text-sm">Ad creation & launch</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f5e6e6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#A04747] font-bold">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Optimization</h4>
                  <p className="text-gray-600 text-sm">Continuous monitoring & improvement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#A04747]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Grow Your Business with SEM?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's create a customized strategy that drives results for your business
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-[#A04747] hover:bg-gray-100"
                onClick={() => router.push('/contact?service=sem-strategy')}
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}