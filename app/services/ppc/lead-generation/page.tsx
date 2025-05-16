"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BarChart, Target as TargetIcon, Users, Brain, Laptop, LineChart, MonitorPlay,
  Handshake, Heart, UsersRound, DollarSign, LayoutGrid, FileText, CalendarDays, Rocket, Sparkles, ShoppingCart, Layers, Tv,
  ClipboardList, Telescope, ChevronRight, Star, ThumbsUp, Goal, AlertTriangle, BarChart3, Info, MessageSquare, Clock, Award, Briefcase,
  Settings, Filter, PieChart, UserCheck, Eye, Maximize2, Minimize2, PlayCircle, TrendingUp, Search, Shield, Lightbulb, Zap, CheckCircle, ImageIcon,
  HelpCircle, ChevronDown, Users2, TrendingUpIcon, ListChecks, LightbulbIcon, MailQuestion, GitFork, Bot, Palette, PhoneCall
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Color Palette & Backgrounds for Lead Generation
const primaryColor = "#1A4D2E"; // Dark Green (from existing page)
const primaryHoverColor = "#13381f"; // Darker Green (from existing page)
const lightBg = "bg-[#f3f4f6]"; // Light Gray (from existing page)
const heroBg = "bg-gradient-to-b from-[#f3f4f6] to-[#ffffff]"; // Light Gray gradient to white (from existing page)

// Reusable Section Components
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

const ModernCard = ({ icon, title, description, className = "", cardPrimaryColor = primaryColor, delay = 0 }: { icon: React.ReactNode, title: string, description: string, className?: string, cardPrimaryColor?: string, delay?: number }) => (
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

const FeatureListItem = ({ icon, text, itemPrimaryColor = primaryColor }: { icon: React.ReactNode, text: string, itemPrimaryColor?: string }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0 mt-0.5" style={{ color: itemPrimaryColor }}>
      {icon}
    </div>
    <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: text }} />
  </li>
);

export default function LeadGenerationPage() {
  const router = useRouter();

  // State for Hero Form (Audit Request)
  const [heroFormWebsite, setHeroFormWebsite] = useState("");
  const [isHeroFormLoading, setIsHeroFormLoading] = useState(false);

  // State for Final Contact Form
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactWebsite, setContactWebsite] = useState(""); 
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroFormWebsite.trim()) {
      toast.error("Please enter your website URL for the audit.");
      return;
    }
    setIsHeroFormLoading(true);
    setTimeout(() => {
      setIsHeroFormLoading(false);
      toast.success("Your audit request has been received! We'll analyze your lead generation potential.");
      setHeroFormWebsite("");
    }, 1500);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      toast.error("Please fill in all required fields (Name, Email, Message).");
      return;
    }
    setIsSubmittingContact(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      toast.success("Thank you! Your message has been sent. We'll be in touch soon to discuss your lead generation needs.");
      setContactName("");
      setContactEmail("");
      setContactCompany("");
      setContactWebsite("");
      setContactMessage("");
    } catch (error) {
      toast.error("There was an issue sending your message. Please try again later.");
    } finally {
      setIsSubmittingContact(false);
    }
  };

  // Placeholder data - will be updated with lead-generation specific content
  const leadGenStats = [
    { icon: <TrendingUpIcon size={32} />, value: "70%+", label: "Higher Conversion with Targeted Leads." },
    { icon: <BarChart3 size={32} />, value: " Measurable ROI", label: "Track Cost-Per-Lead and Optimize Spend." },
    { icon: <Users2 size={32} />, value: "Quality Prospects", label: "Focus Sales Efforts on Interested Buyers." },
    { icon: <Zap size={32} />, value: "Scalable Growth", label: "Consistently Fill Your Sales Pipeline." }
  ];


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <SectionWrapper className={heroBg} id="hero-leadgen">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="md:pr-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              >
                Drive Quality Leads with <span style={{color: primaryColor}}>PPC Lead Generation</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Maximize your sales pipeline with our expert PPC lead generation services. We connect you with high-intent customers ready to convert.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Button
                  size="lg"
                  style={{ backgroundColor: primaryColor, color: 'white' }}
                  className="shadow-lg hover:opacity-90 transition-opacity px-8 py-3 text-lg"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryHoverColor}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryColor}
                  onClick={() => document.getElementById('leadgen-contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get a Free Proposal
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  style={{ borderColor: primaryColor, color: primaryColor }}
                  className="shadow-lg hover:bg-gray-100 transition-colors px-8 py-3 text-lg"
                  onClick={() => router.push('/contact?service=lead-generation')}
                >
                  Speak to an Expert
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
                Get Your <span style={{color: primaryColor}}>Free</span> Lead Gen Audit
              </h2>
              <form onSubmit={handleHeroFormSubmit} className="space-y-5">
                <div>
                  <label htmlFor="heroFormWebsiteLeadGen" className="block text-sm font-medium text-gray-700 mb-1">Your Website URL*</label>
                  <Input 
                    id="heroFormWebsiteLeadGen" type="text" placeholder="https://www.yourwebsite.com"
                    className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md focus:ring-[#1A4D2E]"
                    value={heroFormWebsite} onChange={(e) => setHeroFormWebsite(e.target.value)} required
                  />
                </div>
                <Button 
                  type="submit" style={{ backgroundColor: primaryColor, color: 'white' }}
                  className="w-full py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:opacity-90 text-base"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryHoverColor}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryColor}
                  disabled={isHeroFormLoading}
                >
                  {isHeroFormLoading ? "Analyzing..." : "Request Free Audit"}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Discover your lead generation potential. No obligations.
                </p>
              </form>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Section 2: Stats/Impact Section */}
        <SectionWrapper className="bg-white" id="leadgen-impact">
          <SectionHeading 
            title="The Impact of Strategic Lead Generation"
            subtitle="Unlock growth with a consistent flow of high-quality leads that convert into loyal customers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {leadGenStats.map((stat, index) => (
              <motion.div
                key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${lightBg} p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200`}
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

        {/* Section 3: Why Markov Digital for Lead Generation? */}
        <SectionWrapper className={lightBg} id="why-markov-leadgen">
          <SectionHeading 
            title="Why Markov Digital for Your Lead Generation?" 
            subtitle="Partner with PPC experts dedicated to filling your sales pipeline with high-quality, conversion-ready leads."
          />
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <TargetIcon size={24}/>, title: "Precision Audience Targeting", desc: "We go beyond basic demographics, leveraging psychographics, intent data, and behavioral analytics to pinpoint your ideal customers.", cardPrimaryColor: primaryColor },
              { icon: <ListChecks size={24}/>, title: "Focus on Lead Quality", desc: "Our strategies are designed to attract genuinely interested prospects, reducing wasted ad spend and improving sales team efficiency.", cardPrimaryColor: primaryColor },
              { icon: <BarChart3 size={24}/>, title: "Data-Driven Optimization", desc: "Continuous A/B testing of ads, landing pages, and targeting parameters ensures your campaigns are always improving for maximum CPL and ROI.", cardPrimaryColor: primaryColor },
              { icon: <Brain size={24}/>, title: "Strategic Campaign Development", desc: "From compelling ad copy and creatives to high-converting landing pages, every element is meticulously crafted for lead capture.", cardPrimaryColor: primaryColor },
              { icon: <Zap size={24}/>, title: "Rapid Campaign Deployment", desc: "Our efficient processes mean we can get your lead generation campaigns launched quickly, so you start seeing results sooner.", cardPrimaryColor: primaryColor },
              { icon: <Handshake size={24}/>, title: "Transparent & Collaborative", desc: "We provide clear, regular reporting and work as an extension of your team, ensuring alignment with your business goals.", cardPrimaryColor: primaryColor }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} cardPrimaryColor={item.cardPrimaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 4: Our Lead Generation Process */}
        <SectionWrapper className="bg-white" id="leadgen-process">
          <SectionHeading 
            title="Our Proven Lead Generation Process"
            subtitle="A systematic, transparent approach from strategy to optimization, designed to consistently deliver qualified leads."
          />
          <div className="max-w-4xl mx-auto space-y-10">
            {[
              { 
                icon: <Search size={32} />, 
                title: "1. Discovery & Goal Alignment", 
                desc: "We dive deep into your business, target audience, ideal lead profile, unique selling propositions, and specific lead volume or CPL goals. This forms the foundation of our tailored strategy.",
              },
              { 
                icon: <Settings size={32} />, 
                title: "2. Strategy & Campaign Blueprint", 
                desc: "We map out the optimal channels (Google, LinkedIn, Facebook, etc.), targeting methods, ad formats, offer strategies, and design high-converting landing pages or lead forms.",
              },
              { 
                icon: <Rocket size={32} />, 
                title: "3. Campaign Build & Launch", 
                desc: "Our experts meticulously set up your campaigns with precise targeting, compelling ad copy, and robust tracking. Campaigns are launched after thorough quality checks.",
              },
              { 
                icon: <TrendingUpIcon size={32} />, 
                title: "4. Performance Monitoring & Optimization", 
                desc: "We continuously monitor key metrics (impressions, clicks, CTR, CPL, lead quality), A/B test variables, and refine bids and targeting to maximize results and ROI.",
              },
              { 
                icon: <FileText size={32} />, 
                title: "5. Reporting & Strategic Iteration", 
                desc: "You receive regular, transparent performance reports with actionable insights. We conduct strategy reviews to discuss results, identify new opportunities, and scale success.",
              }
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 5: What We Manage (Lead Gen Channels/Strategies) */}
        <SectionWrapper className={lightBg} id="leadgen-scope">
          <SectionHeading 
            title="Comprehensive Lead Generation Solutions"
            subtitle="We manage every facet of your PPC lead generation, from channel selection to conversion optimization, ensuring a steady flow of qualified prospects."
          />
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {[                
                { icon: <TargetIcon size={20} />, text: "<strong>Multi-Channel PPC Campaigns:</strong> Expertise across Google Ads (Search, Display, YouTube), Microsoft Ads, LinkedIn Ads, Facebook/Instagram Ads, and other relevant platforms." },
                { icon: <LayoutGrid size={20} />, text: "<strong>Custom Landing Page Design & Optimization:</strong> Creating high-converting, mobile-responsive landing pages tailored to your offers and target audience for maximum lead capture." },
                { icon: <UsersRound size={20} />, text: "<strong>Advanced Audience Segmentation:</strong> Utilizing demographic, firmographic, interest, intent-based, retargeting, and custom audiences to reach the right prospects." },
                { icon: <CheckCircle size={20} />, text: "<strong>Compelling Ad Copy & Creative Development:</strong> Crafting persuasive ad messaging and visually appealing creatives that resonate with your target audience and drive action." },
                { icon: <DollarSign size={20} />, text: "<strong>Strategic Bid Management & Budget Allocation:</strong> Optimizing bids and allocating budget effectively across campaigns and channels to achieve the best Cost Per Lead (CPL)." },
                { icon: <MailQuestion size={20} />, text: "<strong>Lead Form Optimization & A/B Testing:</strong> Designing user-friendly lead forms and continuously testing variations to improve submission rates." },
                { icon: <BarChart3 size={20} />, text: "<strong>Conversion Tracking & Analytics Setup:</strong> Ensuring accurate tracking of leads and key performance indicators (KPIs) for data-driven decision-making." },
                { icon: <GitFork size={20} />, text: "<strong>Lead Qualification & Nurturing Strategies (Consultation):</strong> Advising on best practices for qualifying leads and nurturing them through your sales funnel." }
              ].map(item => <FeatureListItem key={item.text} icon={item.icon} text={item.text} itemPrimaryColor={primaryColor}/>)}
            </div>
          </div>
        </SectionWrapper>

        {/* Section 6: Types of Lead Generation Campaigns */}
        <SectionWrapper className="bg-white" id="leadgen-campaign-types">
          <SectionHeading 
            title="Versatile Lead Generation Campaigns We Deliver"
            subtitle="Tailored PPC strategies to capture leads across various platforms and funnel stages, whether B2B or B2C."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Search size={24}/>, title: "Search Engine PPC (Google/Bing)", desc: "Capture high-intent leads actively searching for your products or services with optimized search ad campaigns.", cardPrimaryColor: primaryColor },
              { icon: <Users size={24}/>, title: "Social Media Lead Ads (Facebook, LinkedIn)", desc: "Generate leads directly within social platforms using native lead forms and highly targeted audience segmentation.", cardPrimaryColor: primaryColor },
              { icon: <MonitorPlay size={24}/>, title: "Display & Retargeting Campaigns", desc: "Build brand awareness and recapture lost prospects with visually engaging display ads and strategic retargeting lists.", cardPrimaryColor: primaryColor },
              { icon: <LayoutGrid size={24}/>, title: "High-Converting Landing Page Funnels", desc: "Design and optimize dedicated landing pages with compelling offers to maximize lead submissions from your PPC traffic.", cardPrimaryColor: primaryColor },
              { icon: <MailQuestion size={24}/>, title: "Content-Driven Lead Magnets", desc: "Attract leads by offering valuable content (eBooks, webinars, guides) promoted through targeted PPC campaigns.", cardPrimaryColor: primaryColor },
              { icon: <PhoneCall size={24}/>, title: "Call-Only & Lead Form Extension Ads", desc: "Drive direct calls and in-SERP lead submissions for immediate engagement, especially for local and service-based businesses.", cardPrimaryColor: primaryColor }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} cardPrimaryColor={item.cardPrimaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 7: Advanced Lead Nurturing & Qualification Strategies */}
        <SectionWrapper className={lightBg} id="leadgen-advanced-strategies">
          <SectionHeading 
            title="Advanced Lead Management Strategies"
            subtitle="Beyond capture: We help you implement strategies to qualify, nurture, and convert leads into loyal customers efficiently."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Filter size={24}/>, title: "Automated Lead Scoring & Segmentation", description: "Implement systems to automatically score leads based on engagement and demographics, segmenting them for targeted follow-up." , cardPrimaryColor: primaryColor},
              { icon: <Bot size={24}/>, title: "CRM Integration & Workflow Automation", description: "Seamlessly integrate lead data into your CRM and automate follow-up sequences and sales team notifications for quick engagement.", cardPrimaryColor: primaryColor },
              { icon: <UsersRound size={24}/>, title: "Personalized Email Nurturing Sequences", description: "Develop tailored email drip campaigns to educate and engage leads, moving them through the sales funnel at their own pace.", cardPrimaryColor: primaryColor },
              { icon: <ListChecks size={24}/>, title: "Multi-Touch Attribution Insights", description: "Understand the complete customer journey and attribute value across multiple touchpoints to optimize your overall marketing mix.", cardPrimaryColor: primaryColor },
              { icon: <MessageSquare size={24}/>, title: "Retargeting for Funnel Progression", description: "Strategically retarget leads who haven't converted with tailored messaging based on their previous interactions and funnel stage.", cardPrimaryColor: primaryColor },
              { icon: <Star size={24}/>, title: "Lead Feedback & Sales Alignment", description: "Establish feedback loops with your sales team to continuously refine lead quality definitions and improve campaign targeting.", cardPrimaryColor: primaryColor }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.description} delay={i} cardPrimaryColor={item.cardPrimaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 8: Our Lead Generation Philosophy/Advantage */}
        <SectionWrapper className="bg-white" id="leadgen-ethos">
          <SectionHeading 
            title="The Markov Digital Advantage in Lead Generation"
            subtitle="Our core principles ensure we deliver not just leads, but sustainable growth and a strong return on your investment."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <TargetIcon size={32}/>, title: "Quality-Focused Approach", desc: "We prioritize generating high-intent leads that are more likely to convert, maximizing your sales team's efficiency and your ROI.", cardPrimaryColor: primaryColor},
              { icon: <LightbulbIcon size={32}/>, title: "Strategic Innovation", desc: "We continuously explore and implement the latest PPC techniques, tools, and channels to keep your lead generation efforts cutting-edge.", cardPrimaryColor: primaryColor },
              { icon: <CheckCircle size={32}/>, title: "Transparent Performance", desc: "You get clear, comprehensive reporting and regular communication, so you always understand how your campaigns are performing.", cardPrimaryColor: primaryColor },
              { icon: <TrendingUpIcon size={32}/>, title: "Partnership for Growth", desc: "We work as an extension of your team, deeply invested in understanding your business and driving meaningful, long-term growth.", cardPrimaryColor: primaryColor }
            ].map((item, i) => (
              <motion.div 
                key={item.title} 
                className={`${lightBg} p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 flex flex-col items-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mb-4 inline-flex items-center justify-center p-3 rounded-full" style={{ backgroundColor: item.cardPrimaryColor + '15', color: item.cardPrimaryColor }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 9: Lead Generation Success Stories (Case Studies) */}
        <SectionWrapper className={lightBg} id="leadgen-case-studies">
          <SectionHeading 
            title="Real Results: Lead Generation Success Stories"
            subtitle="Discover how we've empowered businesses to achieve significant growth through strategic PPC lead generation."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "B2B SaaS Co. Triples MQLs with LinkedIn & Search Ads", 
                challenge: "A growing B2B SaaS provider struggled to generate a consistent flow of marketing qualified leads (MQLs) for their sales team despite a valuable product offering.", 
                solution: "Developed an integrated strategy using LinkedIn Lead Gen Forms targeting specific job titles & industries, combined with high-intent Google Search campaigns. Optimized landing pages for free demo requests.", 
                results: [
                  "Tripled monthly MQL volume within 4 months.", 
                  "Reduced Cost Per MQL by 35%.", 
                  "Increased sales demo conversion rate by 20%."
                ],
                imagePlaceholderIcon: <Users size={48} /> // Placeholder for actual image
              },
              {
                title: "Local Service Business Boosts Bookings by 150%", 
                challenge: "A local home services company needed to increase qualified job bookings and reduce reliance on inconsistent referral business.", 
                solution: "Launched geo-targeted Google Ads campaigns focusing on call-only ads and lead form extensions. Implemented precise location targeting and dayparting for optimal budget allocation.", 
                results: [
                  "Increased qualified phone leads and form submissions by 150%.", 
                  "Achieved a 25% lower Cost Per Lead than previous efforts.", 
                  "Expanded service area coverage due to increased demand."
                ],
                imagePlaceholderIcon: <PhoneCall size={48} /> // Placeholder for actual image
              }
            ].map((study, i) => (
              <motion.div 
                key={study.title} 
                className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  {study.imagePlaceholderIcon || <ImageIcon size={48} />}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3" style={{color: primaryColor}}>{study.title}</h3>
                  <p className="text-sm text-gray-600 mb-2"><strong className="text-gray-700">Challenge:</strong> {study.challenge}</p>
                  <p className="text-sm text-gray-600 mb-4"><strong className="text-gray-700">Solution:</strong> {study.solution}</p>
                  <div className="mb-4 flex-grow">
                    <h4 className="font-semibold text-gray-700 mb-1">Key Results:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      {study.results.map(res => <li key={res}>{res}</li>)}
                    </ul>
                  </div>
                  <Button 
                    variant="outline"
                    style={{borderColor: primaryColor, color: primaryColor}}
                    className="mt-auto w-full hover:bg-gray-100 transition-colors"
                    onClick={() => router.push("/contact?service=lead-generation&case_study=" + study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}
                  >
                    Discuss Similar Results
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 10: Testimonials */}
        <SectionWrapper className="bg-white" id="leadgen-testimonials">
          <SectionHeading 
            title="What Our Clients Say About Our Lead Generation"
            subtitle="Real feedback from partners who've experienced transformative growth through our expert lead generation services."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { quote: "Markov Digital didn't just bring us leads; they brought us high-quality prospects that our sales team loves. Our pipeline has never been stronger!", author: "Sarah L., Marketing Director @ Fintech Solutions", avatarText: "SL", companyLogoPlaceholder: "Fintech Co." },
              { quote: "The team's strategic approach to PPC lead generation was a game-changer. We saw a significant increase in qualified inquiries almost immediately.", author: "Mike P., Owner @ ProBuild Contractors", avatarText: "MP", companyLogoPlaceholder: "ProBuild" }
            ].map((testimonial, i) => (
              <motion.div 
                key={testimonial.author} 
                className={`${lightBg} p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col items-center text-center`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-24 h-10 bg-gray-300 mb-4 flex items-center justify-center text-gray-500 text-xs">
                    {testimonial.companyLogoPlaceholder} Logo
                </div>
                <p className="text-gray-700 italic text-lg mb-6 leading-relaxed flex-grow">\"{testimonial.quote}\"</p>
                <div className="w-16 h-16 rounded-full mb-3 flex items-center justify-center text-xl font-semibold text-white shadow-md" style={{backgroundColor: primaryColor}}>
                  {testimonial.avatarText}
                </div>
                <p className="font-semibold text-gray-800">{testimonial.author.split(', ')[0]}</p>
                <p className="text-sm text-gray-500">{testimonial.author.split(', ')[1]}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 11: Meet Your Dedicated Lead Generation Team */}
        <SectionWrapper className={lightBg} id="leadgen-team">
          <SectionHeading 
            title="Your Expert Lead Generation Partners"
            subtitle="A dedicated team of PPC strategists, campaign managers, and analysts focused on maximizing your lead flow and quality."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: "David Miller", role: "Lead Gen Strategist", expertise: "B2B & SaaS Lead Gen, LinkedIn Ads, Funnel Optimization", avatarInitial: "DM" },
              { name: "Emily Carter", role: "PPC Campaign Manager", expertise: "Google Ads, Social Ads, Landing Page Conversion", avatarInitial: "EC" },
              { name: "Jason Lee", role: "Lead Analyst & Optimizer", expertise: "Data Analysis, A/B Testing, CPL Reduction", avatarInitial: "JL" },
              { name: "Priya Sharma", role: "Client Success Manager", expertise: "Account Management, Reporting, Client Strategy", avatarInitial: "PS" }
            ].map((member, i) => (
              <motion.div 
                key={member.name} 
                className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-semibold text-white shadow-md" style={{backgroundColor: primaryColor}}>
                  {member.avatarInitial}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p style={{color: primaryColor}} className="font-medium text-sm mb-1">{member.role}</p>
                <p className="text-gray-500 text-xs flex-grow">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 12: Preparing for Lead Generation Success */}
        <SectionWrapper className="bg-white" id="preparing-for-leadgen">
          <SectionHeading
            title="Setting Your Business Up for Lead Generation Success"
            subtitle="Key elements and information we'll explore together to ensure your PPC lead generation campaigns hit the ground running."
          />
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-10 rounded-xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{color: primaryColor}}>Essentials for a Powerful Launch:</h3>
            <ul className="space-y-5">
              {[ 
                { icon: <Goal size={24}/>, text: "<strong>Clear Business Objectives:</strong> What defines a quality lead for you? What are your target CPL, lead volume, and sales goals?" },
                { icon: <UsersRound size={24}/>, text: "<strong>Defined Target Audience Persona(s):</strong> Deep understanding of your ideal customer demographics, psychographics, pain points, and online behavior." },
                { icon: <Sparkles size={24}/>, text: "<strong>Compelling Offer / Lead Magnet:</strong> What valuable incentive will motivate prospects to share their information (e.g., consultation, demo, guide, checklist, quote)?" },
                { icon: <LayoutGrid size={24}/>, text: "<strong>Website & Landing Page Readiness:</strong> Ensuring your website can support lead capture and considering dedicated landing pages for optimal conversion rates." },
                { icon: <BarChart3 size={24}/>, text: "<strong>Tracking & Analytics Foundation:</strong> Access to website analytics, and any existing ad platform accounts; ensuring conversion tracking (pixels, events) can be properly implemented." },
                { icon: <GitFork size={24}/>, text: "<strong>Sales Process & Lead Handoff:</strong> How will leads be followed up with? Understanding your CRM and sales workflow helps us align marketing with sales." }
              ].map(item => <FeatureListItem key={item.text} icon={item.icon} text={item.text} itemPrimaryColor={primaryColor}/>)}
            </ul>
            <p className="text-center text-gray-600 mt-8 text-sm">
              Don't worry if you don't have all the answers yet! Our onboarding process is designed to help you clarify these crucial elements.
            </p>
          </div>
        </SectionWrapper>

        {/* Section 13: Simplified Onboarding for Lead Generation */}
        <SectionWrapper className={lightBg} id="leadgen-onboarding">
          <SectionHeading 
            title="Streamlined Onboarding, Rapid Results"
            subtitle="Our efficient onboarding process gets your lead generation engine running smoothly and quickly, minimizing delays to your success."
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { icon: <Handshake size={32}/>, title: "Kick-off Call & Deep Dive", desc: "We start with a comprehensive consultation to understand your business, goals, ideal customer profile, and current marketing efforts. We'll discuss your offer and sales process.", cardPrimaryColor: primaryColor },
                { icon: <FileText size={32}/>, title: "Account Access & Asset Collection", desc: "We securely gather access to necessary ad accounts, analytics, and collect any existing brand assets, creative guidelines, or target audience research you may have.", cardPrimaryColor: primaryColor },
                { icon: <Settings size={32}/>, title: "Strategy Finalization & Campaign Setup", desc: "Based on our discovery, we finalize the lead generation strategy, select channels, define targeting, and build out your initial campaigns, including ad copy and landing page recommendations.", cardPrimaryColor: primaryColor },
                { icon: <Rocket size={32}/>, title: "Launch & Initial Optimization Phase", desc: "Your campaigns go live! We closely monitor performance in the crucial early days, making rapid adjustments to bids, targeting, and creatives to gather data and optimize for quality leads.", cardPrimaryColor: primaryColor }
              ].map((step, idx) => (
                <motion.div 
                  key={step.title} 
                  className="flex flex-col sm:flex-row items-start p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="mr-0 mb-4 sm:mr-5 sm:mb-0 shrink-0 p-3 rounded-full" style={{backgroundColor: step.cardPrimaryColor + '10', color: step.cardPrimaryColor}}>
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

        {/* Section 14: Lead Generation Pricing */}
        <SectionWrapper className="bg-white" id="leadgen-pricing">
          <SectionHeading 
            title="Transparent Lead Generation Management Pricing"
            subtitle="Choose a plan that aligns with your lead generation ambitions and budget. Custom solutions are always available."
          />
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
            {[
              { name: "Lead Gen Starter", price: "$599", features: ["Up to $2,500 Ad Spend Managed", "1-2 Core Lead Channels (e.g., Google Search, Facebook Lead Ads)", "Targeted Audience Setup", "Monthly Performance Reports & Basic Insights", "Initial Campaign Setup & Configuration"], popular: false, primaryColor: primaryColor, primaryHoverColor: primaryHoverColor },
              { name: "Lead Gen Growth", price: "$1199", features: ["Up to $10,000 Ad Spend Managed", "Up to 3 Lead Channels", "Advanced Audience Targeting & Retargeting", "Bi-Weekly Strategy Calls & Detailed Reporting", "Landing Page Optimization Recommendations", "A/B Testing for Ads & Forms"], popular: true, primaryColor: primaryColor, primaryHoverColor: primaryHoverColor },
              { name: "Lead Gen Scale / Custom", price: "Custom", features: ["$10,000+ Ad Spend Managed", "All Relevant Lead Channels Explored", "Custom Audience Development & CRM Integration", "Dedicated Account Manager & Weekly Strategy Calls", "Advanced Conversion Tracking & Attribution", "Full Funnel Lead Generation Strategy"], popular: false, primaryColor: primaryColor, primaryHoverColor: primaryHoverColor }
            ].map((plan, i) => (
              <motion.div 
                key={plan.name} 
                className={`bg-gray-50 p-8 rounded-xl shadow-xl flex flex-col text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${plan.popular ? `border-2 border-[${plan.primaryColor}] relative` : 'border border-gray-200'}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {plan.popular && <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-4 py-1 text-xs font-semibold rounded-full shadow-md`} style={{backgroundColor: plan.primaryColor}}>POPULAR CHOICE</div>}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-4xl font-extrabold mb-1" style={{color: plan.primaryColor}}>{plan.price}</p>
                <p className="text-gray-500 mb-6 text-sm">{plan.price !== "Custom" ? "/month + Ad Spend" : "Tailored to Your Objectives"}</p>
                <ul className="text-gray-600 text-sm mb-8 space-y-3 text-left flex-grow">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle size={16} className="mr-2 mt-1 flex-shrink-0" style={{color: plan.primaryColor}}/> {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  style={{ backgroundColor: plan.popular ? plan.primaryColor : '#E5E7EB', color: plan.popular ? 'white' : '#374151' }}
                  className="w-full py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:opacity-90"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = plan.popular ? plan.primaryHoverColor : '#D1D5DB'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = plan.popular ? plan.primaryColor : '#E5E7EB'}
                  onClick={() => router.push(`/contact?service=lead-generation&plan=${plan.name.toLowerCase().replace(/ /g, '-')}`)}
                >
                  {plan.price === "Custom" ? "Request a Custom Quote" : "Choose Plan"}
                </Button>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto text-sm">
            PPC ad spend is separate and paid directly to the advertising platforms. Our management fees cover strategic planning, campaign execution, continuous optimization, and transparent reporting.
            <br/>Have unique lead generation needs? <a href="/contact?service=lead-generation&source=custom-pricing" style={{color: primaryColor}} className="font-semibold underline hover:opacity-80 transition-opacity">Contact us for a personalized consultation.</a>
          </p>
        </SectionWrapper>

        {/* Section 15: Future Trends in Lead Generation */}
        <SectionWrapper className={lightBg} id="future-of-leadgen">
          <SectionHeading 
            title="The Evolving Landscape of Lead Generation"
            subtitle="Staying ahead of the curve: We embrace innovation to future-proof your lead generation strategies for sustained success."
          />
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Bot size={24} />, title: "AI-Powered Lead Scoring & Qualification", description: "Leveraging artificial intelligence to analyze lead behavior and data points, prioritizing high-quality prospects for sales teams.", cardPrimaryColor: primaryColor },
              { icon: <MessageSquare size={24} />, title: "Conversational Marketing & Chatbots", description: "Utilizing AI-driven chatbots and live chat to engage website visitors 24/7, answer queries, and capture leads in real-time.", cardPrimaryColor: primaryColor },
              { icon: <Palette size={24} />, title: "Hyper-Personalization at Scale", description: "Creating dynamic ad creatives, landing page content, and offers tailored to individual user preferences and behaviors for higher conversion rates.", cardPrimaryColor: primaryColor },
              { icon: <UsersRound size={24} />, title: "Privacy-First Data Strategies", description: "Adapting to cookieless environments by maximizing first-party data, consent management, and privacy-enhancing technologies.", cardPrimaryColor: primaryColor },
              { icon: <PlayCircle size={24} />, title: "Interactive & Video Lead Magnets", description: "Employing interactive quizzes, calculators, and engaging video content as lead magnets to improve capture rates and user experience.", cardPrimaryColor: primaryColor },
              { icon: <Shield size={24} />, title: "Enhanced Focus on Lead Quality & Intent", description: "Moving beyond volume metrics to focus on lead scoring, intent signals, and sales feedback to drive truly valuable opportunities.", cardPrimaryColor: primaryColor }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.description} delay={i} cardPrimaryColor={item.cardPrimaryColor}/>)}
          </div>
           <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            Partner with Markov Digital to navigate these future trends and maintain a competitive edge in your lead generation efforts.
          </p>
        </SectionWrapper>

        {/* Section 16: FAQs (Lead Generation) */}
        <SectionWrapper className="bg-white" id="leadgen-faqs">
          <SectionHeading 
            title="Your Lead Generation Questions Answered"
            subtitle="Find answers to common queries about our PPC lead generation services and how we can help your business grow."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How quickly can I expect to see leads from PPC campaigns?",
                a: "While it varies by industry and budget, PPC campaigns can start generating leads very quickly, often within the first week of launch, as ads go live almost immediately.",
                icon: <Clock size={20} style={{ color: primaryColor }} />
              },
              {
                q: "What kind of information do you need from me to start?",
                a: "We'll typically need to understand your business goals, target audience, any existing marketing efforts, access to your website/analytics, and details about your products/services and offers.",
                icon: <Info size={20} style={{ color: primaryColor }} />
              },
              {
                q: "What PPC platforms do you use for lead generation?",
                a: "We leverage a range of platforms based on your goals, including Google Ads (Search, Display, YouTube), Microsoft Ads, LinkedIn Ads, Facebook/Instagram Ads, and others as appropriate.",
                icon: <Laptop size={20} style={{ color: primaryColor }} />
              },
              {
                q: "How do you measure the success of lead generation campaigns?",
                a: "Success is measured against your specific KPIs, which can include lead volume, Cost Per Lead (CPL), lead quality score, conversion rates (e.g., lead-to-MQL, MQL-to-SQL), and ultimately, Return on Ad Spend (ROAS).",
                icon: <BarChart size={20} style={{ color: primaryColor }} />
              },
              {
                q: "Do you help with landing page creation for lead capture?",
                a: "Yes, we can design and optimize dedicated landing pages or work with your existing pages to ensure they are set up for maximum lead conversion rates. This is a critical part of successful lead generation.",
                icon: <LayoutGrid size={20} style={{ color: primaryColor }} />
              },
              {
                q: "What makes your lead generation service different?",
                a: "We focus on a holistic strategy that combines precision targeting, compelling creatives, optimized landing pages, continuous data analysis, and transparent reporting, all aimed at delivering high-quality leads that drive real business growth.",
                icon: <Star size={20} style={{ color: primaryColor }} />
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-100 p-5 rounded-lg shadow-md border border-gray-200"
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="flex items-center">
                      <span className="mr-3">{faq.icon}</span>
                      {faq.q}
                    </span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown size={20} />
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn pl-8">
                    {faq.a}
                  </p>
                </details>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 17: Final Lead Form / Get Started - Verify this section is complete and correct */}
        <SectionWrapper className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900" id="leadgen-contact-form">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
            <SectionHeading 
              title="Ready to Grow Your Business with More Leads?"
              subtitle="Let's discuss your lead generation goals. Fill out the form below for a personalized strategy and proposal from our experts."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-200"
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                {/* Form fields are expected to be here from the initial setup */}
                {/* Verifying name, email, company, website, message, and button */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactNameLeadGen" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <Input 
                      id="contactNameLeadGen" type="text" placeholder="e.g., Alex Smith" 
                      value={contactName} onChange={(e) => setContactName(e.target.value)} required
                      className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md focus:ring-[#1A4D2E]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmailLeadGen" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <Input 
                      id="contactEmailLeadGen" type="email" placeholder="alex.smith@example.com" 
                      value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required
                      className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md focus:ring-[#1A4D2E]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactCompanyLeadGen" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <Input 
                      id="contactCompanyLeadGen" type="text" placeholder="e.g., Innovate Solutions"
                      value={contactCompany} onChange={(e) => setContactCompany(e.target.value)}
                      className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md focus:ring-[#1A4D2E]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactWebsiteLeadGen" className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                    <Input 
                      id="contactWebsiteLeadGen" type="url" placeholder="https://yourcompany.com"
                      value={contactWebsite} onChange={(e) => setContactWebsite(e.target.value)}
                      className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md focus:ring-[#1A4D2E]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contactMessageLeadGen" className="block text-sm font-medium text-gray-700 mb-1">Your Message/Requirements*</label>
                  <Textarea
                    id="contactMessageLeadGen"
                    rows={5}
                    placeholder="Tell us about your lead generation needs, target audience, or current challenges."
                    value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} required
                    className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md resize-y focus:ring-[#1A4D2E]"
                  />
                </div>
                <div>
                  <Button
                    type="submit" size="lg"
                    className="w-full py-3.5 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: primaryColor, color: 'white' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryHoverColor}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryColor}
                    disabled={isSubmittingContact}
                  >
                    {isSubmittingContact ? "Sending..." : "Get My Lead Gen Proposal"}
                  </Button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                  We value your privacy. Your information is used solely to prepare your proposal.
                </p>
              </form>
            </motion.div>
          </div>
        </SectionWrapper>

      </main>
      {/* Optional: Shared Footer Component can be added here */}
    </div>
  );
}