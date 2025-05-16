"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BarChart, Target as TargetIcon, Zap, CheckCircle, Users, Brain, Laptop, LineChart,
  Handshake, Heart, UsersRound, DollarSign, LayoutGrid, FileText, CalendarDays, Rocket, Sparkles, ShoppingCart, Layers, Tv,
  ClipboardList, Telescope, ChevronRight, Star, ThumbsUp, Goal, AlertTriangle, BarChart3, Info, MessageSquare, Clock, Award, Briefcase,
  Settings, Filter, PieChart, UserCheck, Eye, Maximize2, Minimize2, PlayCircle, TrendingUp, Search, Shield, Lightbulb
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Color Palette & Backgrounds for Google Ads Management
const primaryColor = "#328E6E"; // Main green
const primaryHoverColor = "#256e56"; // Darker green for hover
const lightBg = "bg-gradient-to-b from-[#e6f5f0] to-[#f5faf8]"; // Existing light green gradient

// Reusable Section Components (Adapted for Google Ads Management)
const SectionWrapper = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-12 md:py-20 ${className}`}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const SectionHeading = ({ title, subtitle, className = "" }: { title: string, subtitle?: string, className?: string }) => (
  <div className={`text-center mb-10 md:mb-16 ${className}`}>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">{title}</h2>
    {subtitle && <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

const ModernCard = ({ icon, title, description, className = "", primaryColor: cardPrimaryColor = primaryColor, delay = 0 }: { icon: React.ReactNode, title: string, description: string, className?: string, primaryColor?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
  >
    <div className="flex items-center mb-4">
      <div style={{ backgroundColor: cardPrimaryColor + '20', color: cardPrimaryColor }} className="p-3 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const FeatureListItem = ({ icon, text, primaryColor: itemPrimaryColor = primaryColor }: { icon: React.ReactNode, text: string, primaryColor?: string }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0 mt-0.5" style={{ color: itemPrimaryColor }}>
      {icon}
    </div>
    <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: text }} />
  </li>
);

export default function GoogleAdsManagementPage() {
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
      toast.success("Your analysis request has been received! We'll be in touch.");
      setWebsiteUrl("");
    }, 1500);
  };

  const googleAdsStats = [
    { icon: <TrendingUp size={32} />, value: "$8 Profit", label: "For every $1 spent on Google Ads is the estimated average return." },
    { icon: <TargetIcon size={32} />, value: "4.2%", label: "Average conversion rate across all industries on Google Search Ads." },
    { icon: <UsersRound size={32} />, value: "Top 3", label: "Ads on Google search get approx. 40-50% of the clicks." },
    { icon: <CheckCircle size={32} />, value: "600M+", label: "Businesses globally use Google Ads to reach customers." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <SectionWrapper className={lightBg} id="hero-google-ads">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="md:pr-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              >
                Expert Google Ads Management for <span style={{color: primaryColor}}>Maximum ROI</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Maximize your advertising returns and reach your ideal customers with our data-driven Google Ads strategies and expert campaign management.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Button
                  size="lg"
                  style={{ backgroundColor: primaryColor, color: 'white' }}
                  className="shadow-lg hover:opacity-90 transition-opacity px-8 py-3 text-lg"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryHoverColor}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryColor}
                  onClick={() => document.getElementById('google-ads-proposal-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get a Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  style={{ borderColor: primaryColor, color: primaryColor }}
                  className="shadow-lg hover:bg-gray-100 transition-colors px-8 py-3 text-lg"
                  onClick={() => router.push('/services/ppc')}
                >
                  Explore PPC Services
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
                Get Your <span style={{color: primaryColor}}>Free</span> Google Ads Account Audit
              </h2>
              <form onSubmit={handleAnalysisRequest} className="space-y-5">
                <div>
                  <label htmlFor="websiteUrlHeroGoogleAds" className="block text-sm font-medium text-gray-700 mb-1">Your Website URL*</label>
                  <Input 
                    id="websiteUrlHeroGoogleAds"
                    type="text" 
                    placeholder="https://www.yourwebsite.com"
                    className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md"
                    style={{'--tw-ring-color': primaryColor} as React.CSSProperties}
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  style={{ backgroundColor: primaryColor, color: 'white' }}
                  className="w-full py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:opacity-90 text-base"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryHoverColor}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryColor}
                  disabled={isLoading}
                >
                  {isLoading ? "Analyzing..." : "Request Free Audit"}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Receive a complimentary audit of your Google Ads potential. No obligations.
                </p>
              </form>
            </motion.div>
          </div>
           <motion.div 
            className="mt-12 md:mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
          </motion.div>
        </SectionWrapper>

        {/* Section 2: Stats/Impact Section */}
        <SectionWrapper className="bg-white" id="google-ads-impact">
          <SectionHeading 
            title="The Tangible Impact of Expert Google Ads Management"
            subtitle="Unlock significant growth and reach your target audience effectively with data-driven Google Ads campaigns."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {googleAdsStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200"
              >
                <div className="mb-4 inline-flex items-center justify-center p-3 rounded-full" style={{ backgroundColor: primaryColor + '15', color: primaryColor }}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>{stat.value}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 3: Why Markov Digital for Your Google Ads Success? */}
        <SectionWrapper className={lightBg} id="why-markov-google-ads">
          <SectionHeading 
            title="Why Markov Digital for Your Google Ads Success?"
            subtitle="Your dedicated partner for high-performance Google Ads campaigns that deliver measurable results and significant ROI."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <UserCheck size={24}/>, title: "Certified Google Ads Experts", desc: "Our team comprises Google Ads certified professionals with a proven track record of managing successful campaigns across diverse industries and budgets." },
              { icon: <TargetIcon size={24}/>, title: "Data-Driven Strategies", desc: "We leverage advanced analytics and data insights to craft targeted Google Ads strategies that maximize your ROI and achieve specific business goals." },
              { icon: <ClipboardList size={24}/>, title: "Transparent Reporting", desc: "Receive clear, comprehensive reports detailing campaign performance, key metrics, and actionable insights for continuous improvement and strategy refinement." },
              { icon: <Brain size={24}/>, title: "Holistic PPC Approach", desc: "We integrate Google Ads with your overall digital marketing strategy, ensuring a cohesive approach that amplifies your brand\'s online presence effectively." },
              { icon: <TrendingUp size={24}/>, title: "Proactive Optimization", desc: "Continuous monitoring, A/B testing of ads and landing pages, and bid adjustments allow us to proactively optimize campaigns for peak performance." },
              { icon: <DollarSign size={24}/>, title: "Focus on ROAS & Growth", desc: "Our primary objective is to deliver a strong Return on Ad Spend, focusing on lead quality, conversion rates, cost-efficiency, and scalable growth." }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} primaryColor={primaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 4: Our Proven Google Ads Management Process */}
        <SectionWrapper className="bg-white" id="google-ads-process">
          <SectionHeading 
            title="Our Proven Google Ads Management Process"
            subtitle="A streamlined, transparent approach designed to get your campaigns delivering results, efficiently and effectively."
          />
          <div className="max-w-4xl mx-auto space-y-10">
            {[
              { 
                icon: <Search size={32} />, 
                title: "1. Account Audit & Discovery", 
                desc: "We start with a comprehensive audit of your existing Google Ads account (if any) or a deep dive into your business, goals, target audience, and competitive landscape.",
              },
              { 
                icon: <Settings size={32} />, 
                title: "2. Strategy Development & Campaign Setup", 
                desc: "Based on insights, we develop a bespoke Google Ads strategy, including keyword research, audience definition, ad group structuring, and meticulous campaign setup with conversion tracking.",
              },
              { 
                icon: <PlayCircle size={32} />, 
                title: "3. Ad Creation, Launch & Monitoring", 
                desc: "Compelling ad copy and creatives are developed. Campaigns are launched, followed by intensive real-time monitoring to analyze initial data and performance trends.",
              },
              { 
                icon: <PieChart size={32} />, 
                title: "4. Continuous Optimization & Scaling", 
                desc: "Through ongoing A/B testing, bid management, keyword refinement, and strategic adjustments, we continuously optimize for key metrics (CTR, CPA, ROAS) and scale successful elements.",
              },
              { 
                icon: <FileText size={32} />, 
                title: "5. Performance Reporting & Strategy Reviews", 
                desc: "You receive regular, transparent reports detailing performance. We conduct strategy reviews to discuss results, insights, and collaboratively plan future steps for sustained growth.",
              }
            ].map((step, idx) => (
              <motion.div 
                key={step.title} 
                className="flex flex-col md:flex-row items-start p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="mr-0 mb-4 md:mr-6 md:mb-0 shrink-0 text-white p-4 rounded-full flex items-center justify-center" style={{ backgroundColor: primaryColor }}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 5: What We Manage in Your Google Ads Campaigns */}
        <SectionWrapper className={lightBg} id="google-ads-management-scope">
          <SectionHeading 
            title="Comprehensive Management for Your Google Ads Success"
            subtitle="We handle every facet of your Google Ads campaigns to ensure optimal performance, maximum reach, and continuous growth."
          />
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-200">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[ 
                { icon: <Search size={20}/>, text: "<strong>In-Depth Keyword Research & Strategy:</strong> Identifying high-intent keywords and negative keywords to capture relevant traffic." },
                { icon: <Award size={20}/>, text: "<strong>Compelling Ad Copywriting & A/B Testing:</strong> Crafting engaging ad creatives that convert and continuously testing for higher performance." },
                { icon: <TargetIcon size={20}/>, text: "<strong>Precise Audience Targeting & Segmentation:</strong> Reaching the right users with demographic, interest, in-market, and remarketing audiences." },
                { icon: <DollarSign size={20}/>, text: "<strong>Strategic Bid Management & Budget Optimization:</strong> Maximizing your ad spend efficiency using manual and smart bidding strategies." },
                { icon: <LayoutGrid size={20}/>, text: "<strong>Landing Page Analysis & Conversion Optimization:</strong> Providing recommendations to ensure your landing pages are primed for conversions from ad clicks." },
                { icon: <BarChart3 size={20}/>, text: "<strong>Performance Tracking, Analytics & Reporting:</strong> Monitoring key metrics (KPIs) and delivering insightful, transparent performance reports." },
                { icon: <Shield size={20}/>, text: "<strong>Competitor Analysis & Benchmarking:</strong> Understanding the competitive landscape to identify opportunities and maintain an edge." },
                { icon: <TrendingUp size={20}/>, text: "<strong>Conversion Rate Optimization (CRO) for Ads:</strong> Systematically improving the path from impression to click to conversion." },
                { icon: <Filter size={20}/>, text: "<strong>Campaign Structuring & Restructuring:</strong> Building and refining campaigns for optimal Quality Score, relevance, and manageability." },
                { icon: <Settings size={20}/>, text: "<strong>Account Setup & Technical Configuration:</strong> Ensuring all tracking codes, linking (e.g., Analytics, Merchant Center), and settings are correctly implemented." }
              ].map(item => <FeatureListItem key={item.text} icon={item.icon} text={item.text} primaryColor={primaryColor}/>)}
            </ul>
          </div>
        </SectionWrapper>

        {/* Section 6: Types of Google Ads Campaigns We Excel In */}
        <SectionWrapper className="bg-white" id="google-ads-campaign-types">
          <SectionHeading 
            title="Types of Google Ads Campaigns We Master"
            subtitle="Targeting your audience effectively across the entire Google ecosystem with tailored campaign types."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Search size={24}/>, title: "Google Search Ads", desc: "Dominate Google SERPs with targeted text ads. We optimize for high Quality Scores, CTR, and conversions for your most important keywords." },
              { icon: <Layers size={24}/>, title: "Google Display Network (GDN)", desc: "Build brand awareness and re-engage users across millions of websites, apps, and Google properties with visually compelling display ads." },
              { icon: <ShoppingCart size={24}/>, title: "Google Shopping Campaigns (PLAs)", desc: "Showcase your products directly in search results with Product Listing Ads. Essential for e-commerce to drive sales and visibility." },
              { icon: <PlayCircle size={24}/>, title: "YouTube Video Ads", desc: "Leverage the power of video on YouTube to engage users at different stages of the funnel with various ad formats (e.g., TrueView, Bumper)." },
              { icon: <Tv size={24}/>, title: "Google Discovery Campaigns", desc: "Reach users across Google Discover, YouTube home feed, and Gmail Promotions tab with visually rich, native ad experiences." },
              { icon: <Laptop size={24}/>, title: "Google App Campaigns (UAC)", desc: "Promote your mobile app across Google Search, Play, YouTube, Discover, and the Display Network to drive installs and in-app actions." }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} primaryColor={primaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 7: Advanced Google Ads Strategies We Implement */}
        <SectionWrapper className={lightBg} id="google-ads-advanced-strategies">
          <SectionHeading 
            title="Advanced Google Ads Strategies for Superior Results"
            subtitle="Going beyond the basics to give you a competitive edge and maximize your Google Ads campaign performance."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Brain size={24}/>, title: "AI-Powered Bidding & Automation", desc: "Leveraging Google\'s machine learning for smart bidding (tCPA, tROAS, Maximize Conversions) and campaign automation, while maintaining strategic human oversight." },
              { icon: <UsersRound size={24}/>, title: "Advanced Audience Segmentation", desc: "Utilizing custom audiences, similar audiences, in-market segments, remarketing lists (RLSA), and demographic layering for hyper-targeted campaigns." },
              { icon: <Shield size={24}/>, title: "Competitor Conquesting & Analysis", desc: "Strategic bidding on competitor keywords and in-depth analysis of their ad strategies to identify opportunities and defend market share." },
              { icon: <TrendingUp size={24}/>, title: "Full-Funnel Google Ads Approach", desc: "Crafting campaigns that address every stage of the customer journey, from awareness and consideration to conversion and loyalty, using appropriate ad formats." },
              { icon: <Filter size={24}/>, title: "Dynamic Search Ads (DSA) & Keyword Insertion", desc: "Capturing relevant long-tail searches with DSA and personalizing ads at scale with Dynamic Keyword Insertion (DKI)." },
              { icon: <BarChart3 size={24}/>, title: "Data Feed Optimization (for Shopping & PMax)", desc: "Enhancing product data feeds for Shopping and Performance Max campaigns to improve ad relevance, visibility, and overall performance." }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} primaryColor={primaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 8: The Markov Digital Advantage for Google Ads */}
        <SectionWrapper className="bg-white" id="google-ads-markov-advantage">
          <SectionHeading 
            title="The Markov Digital Advantage in Google Ads"
            subtitle="Experience the difference of a dedicated, expert team committed to your Google advertising success and growth."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award size={24}/>, title: "Customized Strategies, Not Templates", desc: "We don\'t believe in one-size-fits-all. Your Google Ads strategy is meticulously tailored to your unique business, industry, and objectives for optimal impact." },
              { icon: <TrendingUp size={24}/>, title: "Relentless Performance Focus & ROI Driven", desc: "Our team is obsessed with data and driving measurable results. We continuously analyze, test, and optimize to exceed your goals and maximize your ROAS." },
              { icon: <Handshake size={24}/>, title: "Transparent & Collaborative Partnership", desc: "You'll have a dedicated point of contact, regular, clear communication, and insightful reporting. We work as an extension of your team, fostering true partnership." },
              { icon: <Lightbulb size={24}/>, title: "Innovation & Proactive Adaptation", desc: "The Google Ads landscape is ever-evolving. We stay ahead of platform updates and trends, proactively testing and implementing new features to keep your campaigns cutting-edge." },
              { icon: <UserCheck size={24}/>, title: "Certified & Continuously Trained Professionals", desc: "Our Google Ads managers are Google certified and undergo continuous training to master the latest tools, features, and best practices for superior campaign management." },
              { icon: <Heart size={24}/>, title: "Client Success is Our Core Mission", desc: "We are genuinely invested in your business growth. Your wins are our wins, and we go the extra mile to ensure your Google Ads investment yields significant and sustainable returns." }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} primaryColor={primaryColor}/>)}
            </div>
        </SectionWrapper>

        {/* Section 9: Our Guiding Principles: The Markov Ethos for Google Ads */}
        <SectionWrapper className={lightBg} id="google-ads-ethos">
          <SectionHeading 
            title="Our Guiding Principles: The Markov Ethos for Google Ads"
            subtitle="The core values that drive our Google Ads management, our partnerships, and our commitment to your success."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <TargetIcon size={32}/>, title: "Client-Centricity First", desc: "Your goals are paramount. We immerse ourselves in your business to deliver Google Ads strategies that achieve your specific objectives and drive real impact." },
              { icon: <Brain size={32}/>, title: "Data-Driven Decisions Always", desc: "Every recommendation, bid adjustment, and optimization is backed by thorough data analysis, ensuring a scientific and effective approach to managing your Google Ads." },
              { icon: <TrendingUp size={32}/>, title: "Continuous Improvement & Adaptation", desc: "The Google Ads platform constantly evolves, and so do we. We are committed to perpetual learning, testing, and refining campaigns for sustained peak performance." },
              { icon: <Handshake size={32}/>, title: "Transparent & Accountable Partnership", desc: "Open communication, clear reporting, and full accountability define our client relationships. We provide insights, not just data, fostering a truly collaborative partnership." }
            ].map((value, i) => (
              <motion.div 
                key={value.title} 
                className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mb-4 inline-block p-3 rounded-full" style={{backgroundColor: primaryColor+'10', color: primaryColor}}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 10: Google Ads Success Stories/Case Studies */}
        <SectionWrapper className="bg-white" id="google-ads-case-studies">
          <SectionHeading 
            title="Google Ads Success Stories"
            subtitle="See how we've helped businesses like yours achieve remarkable results with targeted and optimized Google Ads campaigns."
          />
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {[
              { title: "E-commerce Sales Surge via Google Shopping", results: ["+280% Increase in ROAS", "70% Growth in Online Sales Revenue", "35% Reduction in Cost Per Acquisition (CPA)"], story: "Implemented a full-funnel Google Ads strategy, focusing on optimized Shopping campaigns, granular keyword targeting for Search, and strategic Display remarketing to significantly boost online sales and profitability for a competitive e-commerce client.", icon: <ShoppingCart size={24}/> },
              { title: "B2B Lead Generation Triumph with Search Ads", results: ["+450% Increase in Qualified Leads", "60% Lower Cost Per Lead (CPL)", "Improved Lead-to-Customer Conversion Rate by 25%"], story: "Revamped Google Search Ad campaigns with a focus on high-intent B2B keywords, precise audience targeting (including custom intent and in-market segments), and conversion-optimized landing pages, leading to a substantial surge in high-quality leads.", icon: <UsersRound size={24}/> }
            ].map((study, i) => (
              <motion.div 
                key={study.title} 
                className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 hover:border-green-700"
                style={{borderColor: primaryColor}}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 rounded-full" style={{backgroundColor: primaryColor+'10', color:primaryColor}}>{study.icon}</div>
                    <h3 className="text-2xl font-semibold mb-1" style={{color: primaryColor}}>{study.title}</h3>
                </div>
                <p className="text-gray-700 mb-5 italic text-sm">\"{study.story}\"</p>
                <ul className="space-y-2.5 mb-6">
                  {study.results.map(result => (
                    <li key={result} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0" /> {result}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  style={{borderColor: primaryColor, color: primaryColor}}
                  className="w-full sm:w-auto hover:bg-[${primaryColor}]/5"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryColor+'10'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  onClick={() => router.push('/contact?case_study=' + study.title.replace(/ /g, '-').toLowerCase() + '&service=google-ads')}
                >
                  Discuss a Similar Project
                </Button>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 11: Testimonials for Google Ads Services */}
        <SectionWrapper className={lightBg} id="google-ads-testimonials">
          <SectionHeading 
            title="Hear From Our Satisfied Google Ads Clients"
            subtitle="Real feedback from businesses that have achieved significant growth and outstanding results with our expert Google Ads management."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { quote: "Markov Digital completely transformed our Google Ads performance. Our lead quality and volume have skyrocketed, and the ROAS is simply fantastic! Highly recommend their expertise.", author: "Fatima R., E-Commerce Director @ ScaleUp Ltd.", avatarText: "FR" },
              { quote: "We were struggling to make Google Ads profitable. The Markov team brought strategic insights, meticulous optimization, and clear reporting that turned it all around. True professionals!", author: "Imran S., Services Pro Owner", avatarText: "IS" }
            ].map((testimonial, i) => (
              <motion.div 
                key={testimonial.author} 
                className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center mb-5">
                    <div 
                        className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-semibold text-lg shadow-md"
                        style={{backgroundColor: primaryColor}}
                    >
                        {testimonial.avatarText}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">{testimonial.author.split(', ')[0]}</p>
                        <p className="text-xs text-gray-500">{testimonial.author.split(', ')[1]}</p>
                    </div>
                </div>
                <Star size={20} className="mb-3" style={{color: '#FACC15' /* yellow-400 */}} fill="currentColor" />
                <p className="text-gray-700 italic text-lg mb-1 leading-relaxed">\"{testimonial.quote}\"</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 12: Meet Your Dedicated Google Ads Team */}
        <SectionWrapper className="bg-white" id="google-ads-team">
          <SectionHeading 
            title="Meet Your Dedicated Google Ads Experts"
            subtitle="A passionate team of certified professionals committed to maximizing your Google Ads success and achieving your business objectives."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Liam Miller", role: "Senior Google Ads Strategist", expertise: "Google Search & Shopping Certified, 9+ Yrs Exp.", avatarInitial: "LM" },
              { name: "Olivia Chen", role: "PPC Campaign Manager", expertise: "Display, Video & App Campaign Pro", avatarInitial: "OC" },
              { name: "Noah Davis", role: "Conversion Rate Optimizer (CRO)", expertise: "Landing Page Expert, Google Analytics Whiz", avatarInitial: "ND" },
              { name: "Sophia Wilson", role: "Client Success Manager (Google Ads)", expertise: "Dedicated Support, Reporting & Insights Lead", avatarInitial: "SW" }
            ].map((member, i) => (
              <motion.div 
                key={member.name} 
                className="bg-gray-50 p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div 
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-semibold text-white shadow-md"
                  style={{backgroundColor: primaryColor}}
                >
                  {member.avatarInitial}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p style={{color: primaryColor}} className="font-medium text-sm mb-1">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            Our Google Ads specialists combine deep platform knowledge with analytical rigor and creative campaign strategies to ensure your advertising budget delivers exceptional results and sustainable growth.
          </p>
        </SectionWrapper>

        {/* Section 13: Preparing Your Business for Google Ads Success */}
        <SectionWrapper className={lightBg} id="preparing-for-google-ads">
          <SectionHeading
            title="Setting the Stage for Google Ads Success"
            subtitle="A little preparation goes a long way. Here's what helps us hit the ground running with your Google Ads campaigns."
          />
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{color: primaryColor}}>Key Elements for a Strong Start:</h3>
            <ul className="space-y-5">
              {[ 
                { icon: <Goal size={24}/>, text: "<strong>Clear Business Objectives:</strong> What do you aim to achieve (e.g., leads, sales, brand awareness, app installs)?" },
                { icon: <UsersRound size={24}/>, text: "<strong>Defined Target Audience:</strong> Who are your ideal customers? Their demographics, interests, online behavior, and search intent?" },
                { icon: <LayoutGrid size={24}/>, text: "<strong>Optimized Landing Pages/Website:</strong> Are your destination URLs relevant, user-friendly, fast-loading, and designed to convert ad clicks?" },
                { icon: <DollarSign size={24}/>, text: "<strong>Realistic Advertising Budget:</strong> A budget that allows for effective testing, data collection, optimization, and scaling is crucial for success." },
                { icon: <BarChart3 size={24}/>, text: "<strong>Access to Google Analytics & Ad Account:</strong> Existing Google Analytics and any current/past Google Ads account access helps us understand history and set up tracking." },
                { icon: <CheckCircle size={24}/>, text: "<strong>Compelling Offers & USPs:</strong> What makes your product/service stand out? Clear unique selling propositions are vital for ad copy and conversions." }
              ].map(item => <FeatureListItem key={item.text} icon={item.icon} text={item.text} primaryColor={primaryColor}/>)}
            </ul>
            <p className="text-center text-gray-600 mt-8 text-sm">
              Don't worry if you don't have all these elements perfectly defined! Our onboarding process includes helping you refine these for optimal Google Ads performance.
            </p>
          </div>
        </SectionWrapper>

        {/* Section 14: Simplified Onboarding for Google Ads */}
        <SectionWrapper className="bg-white" id="google-ads-onboarding">
          <SectionHeading 
            title="Your Journey to Google Ads Success: Simplified Onboarding"
            subtitle="We make getting started with Google Ads easy, ensuring a smooth transition and rapid campaign deployment for your business."
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { icon: <Handshake size={32}/>, title: "Initial Consultation & Goal Alignment (Free)", desc: "We begin with a no-obligation discussion to understand your business, advertising objectives, target audience, and how Google Ads can drive your specific growth goals." },
                { icon: <FileText size={32}/>, title: "Custom Google Ads Strategy & Proposal", desc: "Based on our consultation and any account audit, we develop a tailored Google Ads strategy and a detailed proposal outlining our approach, deliverables, and transparent pricing." },
                { icon: <CalendarDays size={32}/>, title: "Kick-Off Meeting & Asset Collection", desc: "Once you partner with us, we schedule a formal kick-off call, dive deeper into specifics, and gather necessary assets (e.g., account access, brand guidelines, product feeds if applicable)." },
                { icon: <Rocket size={32}/>, title: "Campaign Build, Launch & Initial Optimization", desc: "Our expert team builds your Google Ads campaigns with best practices, implements robust tracking, and launches. We then closely monitor initial performance for immediate optimizations and insights." }
              ].map((step, idx) => (
                <motion.div 
                  key={step.title} 
                  className="flex flex-col sm:flex-row items-start p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="mr-0 mb-4 sm:mr-5 sm:mb-0 shrink-0 p-3 rounded-full" style={{backgroundColor: primaryColor+'10', color: primaryColor}}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{idx + 1}. {step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Section 15: Google Ads Management Pricing */}
        <SectionWrapper className={lightBg} id="google-ads-pricing">
          <SectionHeading 
            title="Transparent Google Ads Management Pricing"
            subtitle="Choose a plan that aligns with your needs, or let us create a custom package for your unique Google Ads objectives."
          />
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
            {[
              { name: "Ads Starter", price: "$499", features: ["Up to $2,500 Ad Spend Managed", "1-2 Core Campaigns (Search/Display)", "Keyword Research & Selection", "Monthly Performance Reports"], popular: false },
              { name: "Ads Growth", price: "$999", features: ["Up to $10,000 Ad Spend Managed", "Multiple Campaign Types", "Advanced Audience & Keyword Targeting", "Bi-Weekly Strategy Calls", "Conversion Tracking Setup & Audit"], popular: true },
              { name: "Ads Dominator", price: "Custom", features: ["Unlimited Ad Spend Potential", "Full Funnel Google Ads Strategy", "Dedicated Senior Strategist", "Custom Analytics Dashboards & Insights", "Ongoing CRO for Ads & Landing Pages"], popular: false }
            ].map((plan, i) => (
              <motion.div 
                key={plan.name} 
                className={`bg-white p-8 rounded-xl shadow-xl flex flex-col text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${plan.popular ? `border-2 border-[${primaryColor}] relative` : 'border border-gray-200'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {plan.popular && <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-4 py-1 text-xs font-semibold rounded-full shadow-md`} style={{backgroundColor: primaryColor}}>POPULAR CHOICE</div>}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-4xl font-extrabold mb-1" style={{color: primaryColor}}>{plan.price}</p>
                <p className="text-gray-500 mb-6 text-sm">{plan.price !== "Custom" ? "/month + Ad Spend" : "Tailored For Your Goals"}</p>
                <ul className="text-gray-600 text-sm mb-8 space-y-3 text-left flex-grow">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  style={{ backgroundColor: plan.popular ? primaryColor : '#E5E7EB', color: plan.popular ? 'white' : '#374151' }}
                  className="w-full py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:opacity-90"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = plan.popular ? primaryHoverColor : '#D1D5DB'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = plan.popular ? primaryColor : '#E5E7EB'}
                  onClick={() => router.push(`/contact?service=google-ads&plan=${plan.name.toLowerCase().replace(/ /g, '-')}`)}
                >
                  {plan.price === "Custom" ? "Get a Custom Quote" : "Select Plan"}
                </Button>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto text-sm">
            Ad spend is separate and paid directly to Google. Management fees cover our expertise, strategic planning, campaign execution, and ongoing optimization.
            <br/>Need a bespoke solution for complex needs? <a href="/contact?service=google-ads&source=custom-pricing" style={{color: primaryColor}} className="font-semibold underline hover:opacity-80 transition-opacity">Contact us for a personalized strategy session.</a>
          </p>
        </SectionWrapper>

        {/* Section 16: The Future of Google Ads & Search Advertising */}
        <SectionWrapper className="bg-white" id="future-of-google-ads">
          <SectionHeading
            title="The Evolving Landscape of Google Ads & Search Advertising"
            subtitle="We stay ahead of the curve, preparing your brand for the next wave of Google Ads innovation and search trends."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Sparkles size={24} />, title: "AI & Automation (Performance Max)", description: "Increasing reliance on AI for bidding, targeting, ad copy generation, and campaign optimization (e.g., Performance Max). We help you leverage AI strategically." },
              { icon: <UsersRound size={24} />, title: "Privacy-First Advertising", description: "Navigating a cookieless future with enhanced conversions, server-side tagging, first-party data strategies, and privacy-enhancing tech in Google Ads." },
              { icon: <MessageSquare size={24} />, title: "Broad Match & Smart Bidding Synergy", description: "Strategic use of Broad Match keywords combined with Smart Bidding to capture wider relevant audiences effectively and efficiently." },
              { icon: <Layers size={24} />, title: "Visual Storytelling in Search (Images/Video)", description: "Growth in visual assets within Search ads (image extensions, video extensions) and the increasing importance of multimedia in ads." },
              { icon: <Shield size={24} />, title: "Brand Building & Full-Funnel Strategies", description: "Beyond direct response, using Google Ads strategically for brand awareness, consideration, and building trust throughout the entire customer journey." },
              { icon: <BarChart3 size={24} />, title: "Advanced Measurement & Attribution", description: "Deeper understanding of cross-channel impact and sophisticated attribution models (e.g., data-driven attribution) to measure the true value of Google Ads." }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.description} delay={i} primaryColor={primaryColor}/>)}
          </div>
          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            Partnering with Markov Digital means your Google Ads strategy is not just current, but future-proofed for sustained success.
          </p>
        </SectionWrapper>

        {/* Section 17: Google Ads FAQs */}
        <SectionWrapper className={lightBg} id="google-ads-faq">
          <SectionHeading 
            title="Your Google Ads Questions, Answered"
            subtitle="Clearing up common queries to help you make informed decisions about your Google Ads strategy and investment."
          />
          <div className="max-w-3xl mx-auto space-y-5">
            {[
              { q: "How much should I budget for Google Ads spend?", a: "Your ideal ad spend depends on your industry, goals, competition, and desired pace of growth. We typically recommend starting with a budget that allows for robust data collection and optimization, often $1,000-$5,000+/month for initial campaigns, scaling based on performance and ROAS." },
              { q: "What kind of results can I expect from Google Ads?", a: "Results vary, but common outcomes include increased website traffic, higher lead generation, improved sales, better brand visibility on search, and a strong ROI. We set clear, measurable KPIs based on your specific objectives." },
              { q: "How long does it take to see results from Google Ads?", a: "While initial traffic and impressions can be seen quickly (within days of launch), meaningful business results like consistent leads or sales typically take 1-3 months to optimize as we gather data, test, and refine campaigns. Google Ads is an ongoing optimization process." },
              { q: "What makes a Google Ads campaign successful?", a: "Success hinges on relevant keywords, compelling ad copy, optimized landing pages, smart bidding, precise audience targeting, continuous monitoring, and strategic adjustments based on performance data." },
              { q: "Do you require long-term contracts for Google Ads management?", a: "We offer flexible engagement models. While Google Ads benefits from ongoing management for best results, we can discuss options that suit your needs, typically starting with a 3-6 month initial commitment to allow for proper strategy execution and optimization." },
              { q: "Can you manage Google Shopping and YouTube Ads as well?", a: "Yes! We manage the full suite of Google Ads campaign types, including Search, Display, Shopping (Product Listing Ads), Video (YouTube Ads), App Campaigns, and Discovery campaigns, tailoring the mix to your goals." }
            ].map((item, index) => (
              <details key={index} className="bg-white p-6 rounded-lg shadow-md group border border-gray-200 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-800 cursor-pointer flex justify-between items-center list-none group-open:text-[${primaryColor}]">
                  {item.q}
                  <ChevronRight size={20} className="transform transition-transform duration-200 group-open:rotate-90 shrink-0 ml-2" />
                </summary>
                <p className="text-gray-600 mt-4 pt-4 border-t border-gray-200 leading-relaxed text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 18: Get Your Free Google Ads Growth Proposal (Lead Form) */}
        <SectionWrapper className={lightBg} id="google-ads-proposal-form"> {/* Ensures light background for the section */}
          <div className="max-w-4xl mx-auto text-center py-8 md:py-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Ready to Dominate Google Search & Beyond?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-700 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Let's craft a high-impact Google Ads strategy that drives targeted traffic, generates quality leads, and boosts your sales. Request your free, no-obligation proposal today.
            </p>
          </div>
          {/* Form container with dark background, similar to SEM page but using Google Ads colors */}
          <div className={`bg-gradient-to-br from-[${primaryColor}] via-[${primaryHoverColor}] to-[#1c5640] rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto relative z-10`}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#328e6e]">
              Get Your <span className="underline">FREE</span> Google Ads Growth Proposal
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5" onSubmit={(e) => {e.preventDefault(); toast.success("Proposal requested! We'll be in touch soon.");}}>
              <Input type="text" placeholder="First Name*" className="col-span-1 md:col-span-1 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-white text-gray-700 placeholder:text-gray-500 transition-shadow focus:shadow-md" required />
              <Input type="text" placeholder="Last Name*" className="col-span-1 md:col-span-1 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-white text-gray-700 placeholder:text-gray-500 transition-shadow focus:shadow-md" required />
              <Input type="email" placeholder="Work Email Address*" className="md:col-span-2 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-white text-gray-700 placeholder:text-gray-500 transition-shadow focus:shadow-md" required />
              <Input type="text" placeholder="Company Name*" className="md:col-span-2 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-white text-gray-700 placeholder:text-gray-500 transition-shadow focus:shadow-md" required />
              <Input type="text" placeholder="Website URL (Optional)" className="md:col-span-2 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-white text-gray-700 placeholder:text-gray-500 transition-shadow focus:shadow-md" />
              <select defaultValue="" className="md:col-span-2 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-white text-gray-700 placeholder:text-gray-500 appearance-none transition-shadow focus:shadow-md" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }} required>
                  <option value="" disabled className="text-gray-500">Primary Goal with Google Ads*</option>
                  <option className="text-gray-700" value="Increase Brand Awareness">Increase Brand Awareness</option>
                  <option className="text-gray-700" value="Generate Leads">Generate Leads</option>
                  <option className="text-gray-700" value="Drive Website Traffic">Drive Website Traffic</option>
                  <option className="text-gray-700" value="Boost Sales / Conversions">Boost Sales / Conversions</option>
                  <option className="text-gray-700" value="Improve ROAS">Improve ROAS</option>
                  <option className="text-gray-700" value="App Installs / Engagement">App Installs / Engagement</option>
                  <option className="text-gray-700" value="Not Sure Yet / Need Audit">Not Sure Yet / Need Audit</option>
              </select>
              <textarea placeholder="Briefly describe your business and what you hope to achieve... (Optional)" className="md:col-span-2 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-white text-gray-700 placeholder:text-gray-500 min-h-[100px] transition-shadow focus:shadow-md" />
              <Button
                type="submit"
                style={{ backgroundColor: 'white', color: primaryColor }} /* White button with primary green text */
                className="md:col-span-2 py-3.5 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 ring-offset-2 ring-white"
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0f0f0'; // Lighter gray hover for white button
                    e.currentTarget.style.color = primaryHoverColor;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = primaryColor;
                }}
              >
                Request My Free Proposal
              </Button>
              <div className="md:col-span-2 text-xs text-gray-300 mt-2 text-center">
                We'll get back to you within 1 business day.
                <br />Or call us now: <a href="tel:8669084748" className="font-semibold hover:underline text-gray-200 hover:text-white transition-opacity">866.908.4748</a>
              </div>
            </form>
          </div>
        </SectionWrapper>

      </main>
    </div>
  );
}