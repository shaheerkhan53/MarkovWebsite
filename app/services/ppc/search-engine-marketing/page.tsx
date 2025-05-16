'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search, BarChart, Target, Zap, TrendingUp, Shield, ArrowRight, CheckCircle, Users, Brain, Laptop, LineChart,
  Target as TargetIcon, ChartBar as ChartBarIcon, Lightbulb, MousePointer, Handshake, Heart, UsersRound, DollarSign,
  LayoutGrid, FileText, CalendarDays, Rocket, Sparkles, ShoppingCart, Layers, Tv, ClipboardList, Telescope,
  ChevronRight, Star, ThumbsUp, Goal, AlertTriangle, BarChart3, Info, MessageSquare, Clock, Award, Briefcase,
  Settings, Filter, PieChart, UserCheck, Eye, Maximize2, Minimize2, PlayCircle
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Color Palette & Backgrounds
const primaryColor = "#A04747";
const primaryHoverColor = "#8a3d3d";
const lightBg = "bg-gradient-to-b from-[#f5e6e6] to-[#faf5f5]";

// Reusable Section Components (Adapted from YouTube Ads Page)
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
      toast.success("Your analysis request has been received! We'll be in touch.");
      setWebsiteUrl("");
    }, 1500);
  };

  // Data for sections (New Structure)
  const semStats = [
    { icon: <TrendingUp size={32} />, value: "75%", label: "of users never scroll past the first page of search results." },
    { icon: <TargetIcon size={32} />, value: "Top 3", label: "paid ads on Google get 46% of the clicks on the page." },
    { icon: <DollarSign size={32} />, value: "$2 ROI", label: "for every $1 spent on Google Ads is the average." },
    { icon: <UsersRound size={32} />, value: "80%", label: "increase in brand awareness can be achieved through SEM." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50"> {/* Main page background */}
      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <SectionWrapper className={lightBg} id="hero-sem">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="md:pr-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              >
                Boost Your Online Presence with <span style={{color: primaryColor}}>Search Engine Marketing</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Drive targeted traffic, generate qualified leads, and maximize your ROI with our expert Pay-Per-Click (PPC) management and SEM strategies.
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
                  onClick={() => document.getElementById('sem-proposal-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get a Free SEM Proposal
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  style={{ borderColor: primaryColor, color: primaryColor }}
                  className="shadow-lg hover:bg-gray-100 transition-colors px-8 py-3 text-lg"
                  onClick={() => router.push('/services/ppc')}
                >
                  Explore Our Services
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
                Get Your <span style={{color: primaryColor}}>Free</span> Website SEM Analysis
              </h2>
              <form onSubmit={handleAnalysisRequest} className="space-y-5">
                <div>
                  <label htmlFor="websiteUrlHero" className="block text-sm font-medium text-gray-700 mb-1">Your Website URL*</label>
                  <Input
                    id="websiteUrlHero"
                    type="text"
                    placeholder="https://www.yourwebsite.com"
                    className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:ring-[${primaryColor}] focus:border-[${primaryColor}] transition-shadow focus:shadow-md"
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
                  {isLoading ? "Analyzing..." : "Analyze My Website"}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Receive a complimentary analysis of your site's SEM potential. No obligations.
                </p>
              </form>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Section 2: Stats/Impact Section */}
        <SectionWrapper className="bg-white" id="sem-impact">
          <SectionHeading 
            title="The Undeniable Impact of SEM"
            subtitle="Unlock growth and reach your customers effectively with data-driven Search Engine Marketing."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {semStats.map((stat, index) => (
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

        {/* Section 3: Why Markov Digital for SEM? */}
        <SectionWrapper className={lightBg} id="why-markov-sem">
          <SectionHeading 
            title="Why Markov Digital for Your SEM Success?"
            subtitle="Your dedicated partner for high-performance Search Engine Marketing campaigns that deliver measurable results."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <UserCheck size={24}/>, title: "Experienced SEM Specialists", desc: "Our team comprises certified SEM experts with a proven track record of managing successful campaigns across diverse industries and budgets." },
              { icon: <TargetIcon size={24}/>, title: "Data-Driven Strategies", desc: "We leverage advanced analytics and data insights to craft targeted SEM strategies that maximize your ROI and achieve your specific business goals." },
              { icon: <Handshake size={24}/>, title: "Transparent Reporting", desc: "Receive clear, comprehensive reports detailing campaign performance, key metrics, and actionable insights for continuous improvement." },
              { icon: <Brain size={24}/>, title: "Holistic Approach", desc: "We integrate SEM with your overall digital marketing strategy, ensuring a cohesive approach that amplifies your brand's online presence." },
              { icon: <Lightbulb size={24}/>, title: "Proactive Optimization", desc: "Continuous monitoring and A/B testing allow us to proactively optimize campaigns, adapting to market changes and seizing new opportunities." },
              { icon: <DollarSign size={24}/>, title: "Focus on ROI", desc: "Our primary goal is to deliver a strong return on your investment, focusing on lead quality, conversion rates, and cost-efficiency." }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} primaryColor={primaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 4: Our SEM Management Process */}
        <SectionWrapper className="bg-white" id="sem-process">
          <SectionHeading 
            title="Our Proven SEM Management Process"
            subtitle="A streamlined, transparent approach designed to get your campaigns delivering results, fast."
          />
          <div className="max-w-4xl mx-auto space-y-10">
            {[
              { 
                icon: <Search size={32} />, 
                title: "1. Discovery & Strategy Development", 
                desc: "We start by understanding your business, goals, target audience, and competitive landscape. This informs a bespoke SEM strategy, including keyword research and campaign planning.",
                color: primaryColor + '15'
              },
              { 
                icon: <Settings size={32} />, 
                title: "2. Campaign Setup & Implementation", 
                desc: "Our experts meticulously set up your campaigns across relevant platforms (Google Ads, Microsoft Ads), ensuring optimal structure, ad copy, landing page alignment, and tracking.",
                color: primaryColor + '25' 
              },
              { 
                icon: <TrendingUp size={32} />, 
                title: "3. Launch & Proactive Monitoring", 
                desc: "Once launched, we continuously monitor campaign performance, analyzing data in real-time to identify initial trends and areas for immediate optimization.",
                color: primaryColor + '35'
              },
              { 
                icon: <PieChart size={32} />, 
                title: "4. Optimization & Scaling", 
                desc: "Through ongoing A/B testing, bid management, and strategic adjustments, we refine your campaigns to improve key metrics like CTR, conversion rates, and ROAS, scaling what works.",
                color: primaryColor + '45'
              },
              { 
                icon: <ClipboardList size={32} />, 
                title: "5. Reporting & Future Planning", 
                desc: "You receive regular, transparent reports on performance. We discuss results, insights, and plan future strategies to ensure sustained growth and adaptation to market dynamics.",
                color: primaryColor + '55'
              }
            ].map((step, idx) => (
              <motion.div 
                key={step.title} 
                className="flex flex-col md:flex-row items-start p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="mr-0 mb-4 md:mr-6 md:mb-0 shrink-0 text-white p-4 rounded-full flex items-center justify-center" style={{ backgroundColor: step.color.replace('15', primaryColor).replace('25', primaryColor).replace('35', primaryColor).replace('45', primaryColor).replace('55', primaryColor) }}>
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

        {/* Section 5: What We Manage in Your SEM Campaigns */}
        <SectionWrapper className={lightBg} id="sem-management-scope">
          <SectionHeading 
            title="Comprehensive Management for Your SEM Success"
            subtitle="We handle every facet of your Search Engine Marketing campaigns to ensure optimal performance and growth."
          />
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-xl">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[ 
                { icon: <Search size={20}/>, text: "<strong>In-Depth Keyword Research & Strategy:</strong> Identifying high-intent keywords your customers are searching for." },
                { icon: <Award size={20}/>, text: "<strong>Compelling Ad Copywriting & A/B Testing:</strong> Crafting engaging ads that convert and continuously testing for improvement." },
                { icon: <TargetIcon size={20}/>, text: "<strong>Precise Audience Targeting & Segmentation:</strong> Reaching the right audience with tailored messaging." },
                { icon: <DollarSign size={20}/>, text: "<strong>Strategic Bid Management & Budget Optimization:</strong> Maximizing your ad spend for the best possible ROI." },
                { icon: <LayoutGrid size={20}/>, text: "<strong>Landing Page Analysis & Optimization Recommendations:</strong> Ensuring your landing pages are primed for conversion." },
                { icon: <BarChart3 size={20}/>, text: "<strong>Performance Tracking & Analytics:</strong> Monitoring key metrics and providing insightful reports." },
                { icon: <Shield size={20}/>, text: "<strong>Competitor Analysis & Benchmarking:</strong> Staying ahead of the competition with informed strategies." },
                { icon: <TrendingUp size={20}/>, text: "<strong>Conversion Rate Optimization (CRO) for SEM:</strong> Systematically improving the path from click to customer." },
                { icon: <Filter size={20}/>, text: "<strong>Campaign Structuring & Restructuring:</strong> Building and refining campaigns for clarity and performance." },
                { icon: <MessageSquare size={20}/>, text: "<strong>Regular Communication & Strategic Reviews:</strong> Keeping you informed and aligning on future steps." }
              ].map(item => <FeatureListItem key={item.text} icon={item.icon} text={item.text} primaryColor={primaryColor}/>)}
            </ul>
          </div>
        </SectionWrapper>

        {/* Section 6: Types of SEM Campaigns We Master */}
        <SectionWrapper className="bg-white" id="sem-campaign-types">
          <SectionHeading 
            title="Types of SEM Campaigns We Excel In"
            subtitle="Targeting your audience effectively across the entire search landscape with tailored campaign types."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Search size={24}/>, title: "Google Search Ads", desc: "Dominate Google SERPs with targeted text ads. We optimize for high Quality Scores, CTR, and conversions for your most important keywords." },
              { icon: <Laptop size={24}/>, title: "Microsoft Advertising (Bing Ads)", desc: "Reach a valuable audience on Bing, Yahoo, and AOL. Often a lower CPC and a unique demographic complement to Google Ads." },
              { icon: <ShoppingCart size={24}/>, title: "Shopping Campaigns (PLA)", desc: "Showcase your products directly in search results with Product Listing Ads. Essential for e-commerce to drive sales." },
              { icon: <Layers size={24}/>, title: "Display Network Campaigns", desc: "Build brand awareness and re-engage users across a vast network of websites with visually compelling display advertisements." },
              { icon: <PlayCircle size={24}/>, title: "Video Ads (e.g., YouTube via Google Ads)", desc: "Leverage the power of video on platforms like YouTube to engage users at different stages of the funnel. (Links to broader video ad strategies)." },
              { icon: <TargetIcon size={24}/>, title: "Remarketing & Retargeting", desc: "Reconnect with past website visitors or existing customers with tailored ads to nurture leads and drive repeat business across networks." }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} primaryColor={primaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 7: Advanced SEM Strategies We Implement */}
        <SectionWrapper className={lightBg} id="sem-advanced-strategies">
          <SectionHeading 
            title="Advanced SEM Strategies for Superior Results"
            subtitle="Going beyond the basics to give you a competitive edge and maximize your campaign performance."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Brain size={24}/>, title: "AI-Powered Bidding & Automation", desc: "Leveraging machine learning for smart bidding (tCPA, tROAS) and campaign automation, while maintaining strategic oversight." },
              { icon: <UsersRound size={24}/>, title: "Advanced Audience Segmentation", desc: "Utilizing custom audiences, similar audiences, in-market segments, and demographic layering for hyper-targeted campaigns." },
              { icon: <Shield size={24}/>, title: "Competitor Conquesting & Analysis", desc: "Strategic bidding on competitor terms and in-depth analysis of their strategies to identify opportunities and threats." },
              { icon: <LayoutGrid size={24}/>, title: "Full-Funnel SEM Approach", desc: "Crafting campaigns that address every stage of the customer journey, from awareness and consideration to conversion and loyalty." },
              { icon: <MessageSquare size={24}/>, title: "Dynamic Search Ads (DSA)", desc: "Capturing relevant searches with ads automatically generated based on your website content, ideal for large inventories." },
              { icon: <BarChart3 size={24}/>, title: "Data Feed Optimization (for Shopping)", desc: "Enhancing product data feeds for Shopping campaigns to improve ad relevance, visibility, and performance." }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} primaryColor={primaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 8: The Markov Advantage for SEM (Why Partner with Markov) */}
        <SectionWrapper className="bg-white" id="sem-markov-advantage">
          <SectionHeading 
            title="The Markov Digital Advantage in SEM"
            subtitle="Experience the difference of a dedicated, expert team committed to your search marketing success."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award size={24}/>, title: "Customized Strategies, Not Templates", desc: "We don't believe in one-size-fits-all. Your SEM strategy is tailored to your unique business, industry, and objectives for optimal impact." },
              { icon: <TrendingUp size={24}/>, title: "Relentless Performance Focus", desc: "Our team is obsessed with data and driving results. We continuously analyze, test, and optimize to exceed your goals and maximize ROI." },
              { icon: <Handshake size={24}/>, title: "Transparent & Collaborative Partnership", desc: "You'll have a dedicated point of contact, regular communication, and clear, insightful reporting. We see ourselves as an extension of your team." },
              { icon: <Lightbulb size={24}/>, title: "Innovation & Adaptation", desc: "The SEM landscape is always evolving. We stay ahead of trends, continuously testing and implementing new features to keep your campaigns cutting-edge." },
              { icon: <UserCheck size={24}/>, title: "Certified & Experienced Professionals", desc: "Our SEM managers are Google Ads certified and bring years of experience in delivering success across a multitude of campaign types and industries." },
              { icon: <Heart size={24}/>, title: "Client Success is Our Success", desc: "We are genuinely invested in your growth. Your wins are our wins, and we go the extra mile to ensure your SEM investment pays off significantly." }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} primaryColor={primaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 9: Our Guiding Principles: The Markov Ethos */}
        <SectionWrapper className={lightBg} id="sem-ethos">
          <SectionHeading 
            title="Our Guiding Principles: The Markov Ethos"
            subtitle="The core values that drive our work, our partnerships, and our commitment to your SEM success."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <TargetIcon size={32}/>, title: "Client-Centricity", desc: "Your goals are our goals. We immerse ourselves in your business to deliver SEM strategies that truly make an impact." },
              { icon: <Brain size={32}/>, title: "Data-Driven Decisions", desc: "Every recommendation and optimization is backed by thorough analysis and data, ensuring a scientific approach to SEM." },
              { icon: <TrendingUp size={32}/>, title: "Continuous Improvement", desc: "The search landscape never stands still, and neither do we. We are committed to perpetual learning and refinement." },
              { icon: <Handshake size={32}/>, title: "Transparent Partnership", desc: "Open communication, clear reporting, and a collaborative spirit define our relationships with every client." }
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

        {/* Section 10: SEM Success Stories/Case Studies */}
        <SectionWrapper className="bg-white" id="sem-case-studies">
          <SectionHeading 
            title="Search Engine Marketing Success Stories"
            subtitle="See how we've helped businesses like yours achieve remarkable results with targeted SEM campaigns."
          />
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {[
              { title: "E-commerce Sales Growth", results: ["+350% SEM-Driven Revenue", "60% Reduction in Cost Per Acquisition", "2.5X Increase in Conversion Rate"], story: "Implemented a full-funnel SEM strategy, combining meticulous keyword targeting, compelling ad copy, and optimized Shopping campaigns to significantly boost online sales and ROAS for an ambitious e-commerce brand.", icon: <ShoppingCart size={24}/> },
              { title: "B2B Lead Generation Boost", results: ["+400% Qualified Leads via Search Ads", "70% Lower Cost Per Lead (CPL)", "Significant Improvement in Lead-to-Customer Ratio"], story: "Revamped Google Ads and Microsoft Ads campaigns with a focus on high-intent keywords, precise audience targeting, and conversion-optimized landing pages, leading to a surge in high-quality B2B leads.", icon: <UsersRound size={24}/> }
            ].map((study, i) => (
              <motion.div 
                key={study.title} 
                className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 hover:border-red-700"
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
                    onClick={() => router.push('/contact?case_study=' + study.title.replace(/ /g, '-').toLowerCase())}
                >
                    Discuss a Similar Project
                </Button>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 11: Testimonials */}
        <SectionWrapper className={lightBg} id="sem-testimonials">
          <SectionHeading 
            title="Hear From Our Satisfied SEM Clients"
            subtitle="Real feedback from businesses that have achieved significant growth with our expert Search Engine Marketing services."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { quote: "Markov Digital transformed our SEM approach. Our lead quality and volume have skyrocketed, and the ROAS is fantastic!", author: "Sarah L., Marketing Director @ TechStartup Inc.", avatarText: "SL" },
              { quote: "We were struggling to make SEM profitable until we partnered with this team. Their strategic insights and optimization skills are top-notch.", author: "David K., Owner @ LocalService Pro", avatarText: "DK" }
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
                        className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-semibold text-lg"
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

        {/* Section 12: Meet Your Dedicated SEM Team */}
        <SectionWrapper className="bg-white" id="sem-team">
          <SectionHeading 
            title="Meet Your Dedicated SEM Experts"
            subtitle="A passionate team of certified professionals committed to maximizing your Search Engine Marketing success."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Alex Johnson", role: "Senior SEM Strategist", expertise: "Google Ads Certified, 8+ Yrs Exp.", avatarInitial: "AJ" },
              { name: "Maria Garcia", role: "PPC Campaign Manager", expertise: "Microsoft Ads Pro, Analytics Whiz", avatarInitial: "MG" },
              { name: "Sam Chen", role: "Conversion Rate Optimizer", expertise: "Landing Page Expert, A/B Testing", avatarInitial: "SC" },
              { name: "Laura Davies", role: "Client Success Manager", expertise: "Dedicated Support, Reporting Lead", avatarInitial: "LD" }
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
            Our specialists combine analytical rigor with creative SEM tactics to craft campaigns that not only perform well but also align perfectly with your business objectives, ensuring sustainable growth.
          </p>
        </SectionWrapper>

        {/* Section 13: Preparing Your Business for SEM Success */}
        <SectionWrapper className={lightBg} id="preparing-for-sem">
          <SectionHeading
            title="Setting the Stage for SEM Success"
            subtitle="A little preparation goes a long way. Here's what helps us hit the ground running with your campaigns."
          />
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{color: primaryColor}}>Key Elements for a Strong Start:</h3>
            <ul className="space-y-5">
              {[ 
                { icon: <Goal size={24}/>, text: "<strong>Clear Business Objectives:</strong> What do you aim to achieve with SEM (e.g., leads, sales, brand awareness)?" },
                { icon: <UsersRound size={24}/>, text: "<strong>Defined Target Audience:</strong> Who are your ideal customers? Their demographics, interests, and online behavior?" },
                { icon: <LayoutGrid size={24}/>, text: "<strong>Optimized Landing Pages:</strong> Are your destination pages relevant, user-friendly, and designed to convert ad clicks?" },
                { icon: <DollarSign size={24}/>, text: "<strong>Realistic Budget Expectations:</strong> A budget that allows for effective testing, learning, and scaling is crucial." },
                { icon: <BarChart3 size={24}/>, text: "<strong>Access to Analytics & Ad Accounts:</strong> Google Analytics and any existing ad account access helps us understand past performance and set up tracking." },
                { icon: <CheckCircle size={24}/>, text: "<strong>Unique Selling Propositions (USPs):</strong> What makes your product/service stand out from competitors?" }
              ].map(item => <FeatureListItem key={item.text} icon={item.icon} text={item.text} primaryColor={primaryColor}/>)}
            </ul>
            <p className="text-center text-gray-600 mt-8 text-sm">
              Don't worry if you don't have everything perfectly in place! Part of our process is to help you refine these elements for optimal SEM performance.
            </p>
          </div>
        </SectionWrapper>

        {/* Section 14: Simplified Onboarding for SEM */}
        <SectionWrapper className="bg-white" id="sem-onboarding">
          <SectionHeading 
            title="Your Journey to SEM Success: Simplified Onboarding"
            subtitle="We make getting started easy, ensuring a smooth transition and rapid campaign deployment for your business."
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { icon: <Handshake size={32}/>, title: "Initial Consultation & Goal Alignment (Free)", desc: "We begin with a no-obligation discussion to understand your business, objectives, target audience, and how SEM can drive your growth." },
                { icon: <FileText size={32}/>, title: "Custom SEM Strategy & Proposal", desc: "Based on our consultation, we develop a tailored SEM strategy and a detailed proposal outlining our approach, deliverables, and transparent pricing." },
                { icon: <CalendarDays size={32}/>, title: "Kick-Off Meeting & Asset Collection", desc: "Once you partner with us, we schedule a formal kick-off, dive deeper into specifics, and gather necessary assets (e.g., account access, brand guidelines)." },
                { icon: <Rocket size={32}/>, title: "Campaign Build, Launch & Initial Monitoring", desc: "Our expert team builds your SEM campaigns, implements tracking, and launches. We then closely monitor initial performance for immediate optimizations and insights." }
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

        {/* Section 15: SEM Management Pricing */}
        <SectionWrapper className={lightBg} id="sem-pricing">
          <SectionHeading 
            title="Transparent SEM Management Pricing"
            subtitle="Choose a plan that fits your needs, or let us create a custom package for your unique Search Engine Marketing goals."
          />
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
            {[
              { name: "SEM Starter", price: "$599", features: ["Up to $3,000 Ad Spend Managed", "1-2 Core Search Campaigns", "Keyword Research & Selection", "Monthly Performance Reports"], popular: false },
              { name: "SEM Growth", price: "$1199", features: ["Up to $10,000 Ad Spend Managed", "Multiple Campaigns (Search, Display Basics)", "Advanced Keyword & Audience Targeting", "Bi-Weekly Strategy Calls", "Conversion Tracking Setup"], popular: true },
              { name: "SEM Dominator", price: "Custom", features: ["Unlimited Ad Spend Potential", "Full Funnel SEM Strategy (Search, Display, Shopping)", "Dedicated SEM Strategist", "Custom Analytics Dashboards", "Ongoing CRO for SEM"], popular: false }
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
                <p className="text-gray-500 mb-6 text-sm">{plan.price !== "Custom" ? "/month + Ad Spend" : "Tailored For You"}</p>
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
                  onClick={() => router.push(`/contact?service=sem&plan=${plan.name.toLowerCase().replace(/ /g, '-')}`)}
                >
                  {plan.price === "Custom" ? "Get a Custom Quote" : "Select Plan"}
                </Button>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto text-sm">
            Ad spend is separate and paid directly to the respective ad platforms (e.g., Google, Microsoft). Management fees are for our expertise, strategy, and campaign handling.
            <br/>Need a bespoke solution? <a href="/contact?service=sem&source=custom-pricing" style={{color: primaryColor}} className="font-semibold underline hover:opacity-80 transition-opacity">Contact us for a personalized strategy session.</a>
          </p>
        </SectionWrapper>

        {/* Section 16: The Future of Search Marketing */}
        <SectionWrapper className="bg-white" id="future-of-sem">
          <SectionHeading
            title="The Evolving Landscape of Search Marketing"
            subtitle="We stay ahead of the curve, preparing your brand for the next wave of SEM innovation."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Sparkles size={24} />, title: "AI & Automation in SEM", description: "Increasing reliance on AI for bidding, targeting, ad copy generation, and campaign optimization (e.g., Performance Max). We help you leverage AI strategically." },
              { icon: <UsersRound size={24} />, title: "Privacy-First Search & Data", description: "Navigating a cookieless future with server-side tagging, first-party data strategies, and privacy-enhancing technologies in SEM." },
              { icon: <MessageSquare size={24} />, title: "Conversational Search & Voice", description: "Optimizing for longer, more natural language queries driven by voice search and AI chatbots, impacting keyword strategy." },
              { icon: <Layers size={24} />, title: "Visual Search & Multimedia Ads", description: "Growth in visual search capabilities (e.g., Google Lens) and the importance of image and video assets within search campaigns." },
              { icon: <Shield size={24} />, title: "Brand Building through SEM", description: "Beyond direct response, using SEM strategically for brand awareness, consideration, and building trust throughout the customer journey." },
              { icon: <BarChart3 size={24} />, title: "Advanced Analytics & Attribution", description: "Deeper understanding of cross-channel impact and sophisticated attribution models to measure the true value of SEM efforts." }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.description} delay={i} primaryColor={primaryColor}/>)}
          </div>
          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            Partnering with Markov Digital means your Search Engine Marketing strategy is not just current, but future-ready.
          </p>
        </SectionWrapper>

        {/* Section 17: SEM FAQs */}
        <SectionWrapper className={lightBg} id="sem-faq">
          <SectionHeading 
            title="Your SEM Questions, Answered"
            subtitle="Clearing up common queries to help you make informed decisions about your Search Engine Marketing strategy."
          />
          <div className="max-w-3xl mx-auto space-y-5">
            {[
              { q: "How much should I budget for SEM ad spend?", a: "Your ideal ad spend depends on your industry, goals, competition, and desired pace of growth. We typically recommend starting with a budget that allows for robust data collection and optimization, often $1,000-$5,000+/month for initial campaigns, scaling based on performance." },
              { q: "What kind of results can I expect from SEM?", a: "Results vary, but common outcomes include increased website traffic, higher lead generation, improved sales, better brand visibility, and a strong ROI. We set clear KPIs based on your specific objectives." },
              { q: "How long does it take to see results from SEM?", a: "While initial traffic can be seen quickly (within days of launch), meaningful business results like consistent leads or sales typically take 1-3 months to optimize as we gather data, test, and refine campaigns. SEM is an ongoing process." },
              { q: "What platforms do you manage SEM campaigns on?", a: "We primarily manage campaigns on Google Ads (including Search, Display, Shopping, YouTube) and Microsoft Advertising (Bing Ads). We select platforms based on where your target audience is most active." },
              { q: "Do you require long-term contracts for SEM management?", a: "We offer flexible engagement models. While SEM benefits from ongoing management for best results, we can discuss options that suit your needs, typically starting with a 3-6 month initial commitment to allow for proper strategy execution and optimization." },
              { q: "How is SEM different from SEO?", a: "SEM involves paying for ads to appear in search results (e.g., Google Ads), offering immediate visibility. SEO (Search Engine Optimization) focuses on organically improving your website\'s ranking in search results, which takes more time but can provide long-term sustainable traffic." }
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

        {/* Section 18: Get Your Free SEM Growth Proposal (Lead Form) */}
        <SectionWrapper className={lightBg} id="sem-proposal-form">
          <div className="max-w-4xl mx-auto text-center py-8 md:py-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-700 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Let's craft a high-impact Search Engine Marketing strategy that drives targeted traffic, generates quality leads, and boosts your sales. Request your free, no-obligation proposal today.
            </p>
          </div>
          <div className={`bg-gradient-to-br from-[${primaryColor}] via-[${primaryHoverColor}] to-[#703030] rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto relative z-10`}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Get Your <span className="underline">FREE</span> SEM Growth Proposal
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5" onSubmit={(e) => {e.preventDefault(); toast.success("Proposal requested! We'll be in touch.");}}>
              <Input type="text" placeholder="First Name*" className="col-span-1 md:col-span-1 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[${primaryColor}] text-gray-700 placeholder:text-gray-500" required />
              <Input type="text" placeholder="Last Name*" className="col-span-1 md:col-span-1 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[${primaryColor}] text-gray-700 placeholder:text-gray-500" required />
              <Input type="email" placeholder="Work Email Address*" className="md:col-span-2 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[${primaryColor}] text-gray-700 placeholder:text-gray-500" required />
              <Input type="text" placeholder="Company Name*" className="md:col-span-2 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[${primaryColor}] text-gray-700 placeholder:text-gray-500" required />
              <Input type="text" placeholder="Website URL (Optional)" className="md:col-span-2 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[${primaryColor}] text-gray-700 placeholder:text-gray-500" />
              <select defaultValue="" className="md:col-span-2 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[${primaryColor}] text-gray-700 placeholder:text-gray-500 appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }} required>
                  <option value="" disabled className="text-gray-500">Primary Goal with SEM*</option>
                  <option className="text-gray-700" value="Increase Brand Awareness">Increase Brand Awareness</option>
                  <option className="text-gray-700" value="Generate Leads">Generate Leads</option>
                  <option className="text-gray-700" value="Drive Website Traffic">Drive Website Traffic</option>
                  <option className="text-gray-700" value="Boost Sales / Conversions">Boost Sales / Conversions</option>
                  <option className="text-gray-700" value="Improve ROAS">Improve ROAS</option>
                  <option className="text-gray-700" value="Not Sure Yet / Need Audit">Not Sure Yet / Need Audit</option>
              </select>
              <textarea placeholder="Briefly describe your business and what you hope to achieve... (Optional)" className="md:col-span-2 bg-white border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[${primaryColor}] text-gray-700 placeholder:text-gray-500 min-h-[100px]" />
              <Button
                type="submit"
                style={{ backgroundColor: primaryColor, color: 'white' }}
                className="md:col-span-2 py-3.5 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 ring-offset-2 ring-white"
                onMouseEnter={(e) => {
                    const button = e.currentTarget;
                    button.style.backgroundColor = primaryHoverColor;
                    // Ensure button text remains white on hover if not already
                    if (button.style.color !== 'white') button.style.color = 'white';
                }}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryColor}
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