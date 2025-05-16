"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BarChart, Target as TargetIcon, Users, Brain, Laptop, LineChart, MonitorPlay,
  Handshake, Heart, UsersRound, DollarSign, LayoutGrid, FileText, CalendarDays, Rocket, Sparkles, ShoppingCart, Layers, Tv,
  ClipboardList, Telescope, ChevronRight, Star, ThumbsUp, Goal, AlertTriangle, BarChart3, Info, MessageSquare, Clock, Award, Briefcase,
  Settings, Filter, PieChart, UserCheck, Eye, Maximize2, Minimize2, PlayCircle, TrendingUp, Search, Shield, Lightbulb, Zap, CheckCircle, ImageIcon, HelpCircle, ChevronDown
} from "lucide-react";
import { motion } from "framer-motion";
// import Image from "next/image"; // No prominent image in current version, can be added if needed
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Color Palette & Backgrounds for Programmatic Advertising
const primaryColor = "#393E46"; // Main dark gray/charcoal
const primaryHoverColor = "#22252a"; // Darker gray for hover
const lightBg = "bg-[#f3f4f6]"; // Existing light gray
const heroBg = "bg-gradient-to-b from-[#f3f4f6] to-[#ffffff]"; // Existing hero gradient

// Reusable Section Components (Adapted for Programmatic Advertising)
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

export default function ProgrammaticAdvertisingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");

  // State for the final contact form
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactWebsite, setContactWebsite] = useState(""); // Optional
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const handleAuditRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl.trim()) {
      toast.error("Please enter your website URL");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Your audit request has been received! We'll be in touch.");
      setWebsiteUrl("");
    }, 1500);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      toast.error("Please fill in all required fields (Name, Email, Message).");
      return;
    }
    setIsSubmittingContact(true);
    // Simulate API call
    try {
      // In a real app, you'd send this data to your backend:
      // await api.submitLead({
      //   name: contactName,
      //   email: contactEmail,
      //   company: contactCompany,
      //   website: contactWebsite,
      //   message: contactMessage,
      //   service: "Programmatic Advertising"
      // });
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      toast.success("Thank you! Your message has been sent. We'll be in touch soon.");
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

  const programmaticStats = [
    { icon: <TrendingUp size={32} />, value: "90%+", label: "of digital display ad spend in the US is programmatic." },
    { icon: <TargetIcon size={32} />, value: "Global Reach", label: "Access to vast ad inventory across web, mobile, video, and CTV." },
    { icon: <Zap size={32} />, value: "Real-Time", label: "Bidding and ad delivery optimized in milliseconds for efficiency." },
    { icon: <BarChart3 size={32} />, value: "Data-Driven", label: "Leverages 1st, 2nd, and 3rd party data for precise targeting." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <SectionWrapper className={heroBg} id="hero-programmatic">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="md:pr-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              >
                Advanced <span style={{color: primaryColor}}>Programmatic Advertising</span> Solutions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Automate and optimize your digital ad buying with our real-time, data-driven programmatic strategies designed to maximize reach and ROI.
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
                  onClick={() => document.getElementById('programmatic-proposal-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get a Free Programmatic Audit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  style={{ borderColor: primaryColor, color: primaryColor }}
                  className="shadow-lg hover:bg-gray-200 transition-colors px-8 py-3 text-lg" // Adjusted hover for better visibility with gray primary
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
                Request Your <span style={{color: primaryColor}}>Free</span> Programmatic Audit
              </h2>
              <form onSubmit={handleAuditRequest} className="space-y-5">
                <div>
                  <label htmlFor="websiteUrlHeroProgrammatic" className="block text-sm font-medium text-gray-700 mb-1">Your Website URL*</label>
                  <Input 
                    id="websiteUrlHeroProgrammatic"
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
                  {isLoading ? "Requesting..." : "Request Free Audit"}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Discover your programmatic advertising potential. No obligations.
                </p>
              </form>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Section 2: Stats/Impact Section */}
        <SectionWrapper className="bg-white" id="programmatic-impact">
          <SectionHeading 
            title="The Power of Programmatic Advertising"
            subtitle="Unlock unparalleled efficiency, reach, and targeting precision with automated, data-driven ad buying."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {programmaticStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

        {/* Section 3: Why Markov Digital for Programmatic Success? */}
        <SectionWrapper className={lightBg} id="why-markov-programmatic">
          <SectionHeading 
            title="Why Markov Digital for Your Programmatic Advertising Success?"
            subtitle="Harness the full potential of programmatic with our expert strategies, transparent execution, and relentless focus on your ROI."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Brain size={24}/>, title: "Expert Programmatic Strategists", desc: "Our team consists of seasoned programmatic traders and strategists who understand the nuances of DSPs, DMPs, and data-driven ad buying.", cardPrimaryColor: primaryColor },
              { icon: <TargetIcon size={24}/>, title: "Advanced Audience Targeting", desc: "We leverage sophisticated data sources and segmentation techniques to reach your ideal customers with precision, minimizing waste and maximizing impact.", cardPrimaryColor: primaryColor },
              { icon: <ClipboardList size={24}/>, title: "Full Transparency & Reporting", desc: "Gain clear insights into your campaign performance, ad spend, and key metrics through comprehensive, easy-to-understand reports and dashboards.", cardPrimaryColor: primaryColor },
              { icon: <Layers size={24}/>, title: "Cross-Channel Mastery", desc: "We manage programmatic campaigns across display, video, native, audio, CTV, and emerging channels, ensuring a cohesive brand presence.", cardPrimaryColor: primaryColor },
              { icon: <TrendingUp size={24}/>, title: "Continuous Optimization", desc: "Real-time monitoring, A/B testing, and algorithmic bidding adjustments allow us to continuously refine campaigns for optimal performance.", cardPrimaryColor: primaryColor },
              { icon: <Handshake size={24}/>, title: "Dedicated Partnership", desc: "We work as an extension of your team, providing dedicated support and strategic guidance to achieve your specific business objectives.", cardPrimaryColor: primaryColor }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} cardPrimaryColor={item.cardPrimaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 4: Our Programmatic Advertising Management Process */}
        <SectionWrapper className="bg-white" id="programmatic-process">
          <SectionHeading 
            title="Our Proven Programmatic Advertising Process"
            subtitle="A systematic approach from strategy to optimization, ensuring your programmatic campaigns are set up for success and deliver tangible results."
          />
          <div className="max-w-4xl mx-auto space-y-10">
            {[
              { 
                icon: <Search size={32} />, 
                title: "1. Discovery & Strategic Planning", 
                desc: "We start by understanding your business, target audience, KPIs, and competitive landscape to develop a tailored programmatic strategy. This includes selecting the right DSPs and data partners.",
              },
              { 
                icon: <Settings size={32} />, 
                title: "2. Campaign Setup & Audience Building", 
                desc: "Our experts meticulously set up your campaigns, including audience segmentation (demographics, interests, intent, lookalikes), pixel implementation, and creative asset trafficking.",
              },
              { 
                icon: <Rocket size={32} />, 
                title: "3. Launch & Initial Optimization", 
                desc: "Campaigns are launched, and we closely monitor initial performance, making immediate adjustments to bids, targeting, and placements to ensure efficient ad spend and quick learnings.",
              },
              { 
                icon: <BarChart3 size={32} />, 
                title: "4. Ongoing Performance Management & Scaling", 
                desc: "Through continuous A/B testing, budget allocation adjustments, and analysis of real-time data, we optimize for your KPIs, scaling successful tactics and exploring new opportunities.",
              },
              { 
                icon: <FileText size={32} />, 
                title: "5. Transparent Reporting & Strategic Reviews", 
                desc: "You receive regular, detailed reports on campaign performance, insights, and recommendations. We conduct strategic reviews to discuss results and align on future initiatives.",
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

        {/* Section 5: What We Manage in Your Programmatic Campaigns (Scope) */}
        <SectionWrapper className={lightBg} id="programmatic-scope">
          <SectionHeading 
            title="Comprehensive Programmatic Campaign Management"
            subtitle="We handle every facet of your programmatic advertising to ensure seamless execution and optimal performance across all chosen platforms."
          />
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {[                
                { icon: <TargetIcon size={20} />, text: "<strong>Audience Strategy & Segmentation:</strong> Leveraging 1st, 2nd, and 3rd party data, lookalike modeling, contextual targeting, and retargeting strategies." },
                { icon: <Layers size={20} />, text: "<strong>Cross-Channel Campaign Execution:</strong> Managing campaigns across Display (Banners, Rich Media), Video (In-stream, Out-stream, CTV/OTT), Native, and Audio ads." },
                { icon: <MonitorPlay size={20} />, text: "<strong>DSP & Platform Management:</strong> Expertise in leading Demand-Side Platforms (DSPs) like DV360, The Trade Desk, Xandr, and others suitable for your goals." },
                { icon: <DollarSign size={20} />, text: "<strong>Budget Allocation & Bid Management:</strong> Algorithmic and manual bid strategies to optimize ad spend for maximum ROI and efficiency." },
                { icon: <CheckCircle size={20} />, text: "<strong>Ad Creative Trafficking & Management:</strong> Ensuring correct ad specs, rotation, and A/B testing of creative assets for improved engagement." },
                { icon: <Shield size={20} />, text: "<strong>Brand Safety & Viewability Monitoring:</strong> Implementing measures to protect your brand and ensure ads are seen by real users in appropriate environments." },
                { icon: <PieChart size={20} />, text: "<strong>Data Management & DMP Integration:</strong> Utilizing Data Management Platforms (DMPs) for enhanced audience insights and activation (if applicable)." },
                { icon: <BarChart3 size={20} />, text: "<strong>Performance Analytics & Reporting:</strong> Custom dashboards and regular reports detailing key metrics, insights, and areas for improvement." },
              ].map(item => <FeatureListItem key={item.text} icon={item.icon} text={item.text} itemPrimaryColor={primaryColor}/>)}
            </div>
          </div>
        </SectionWrapper>

        {/* Section 6: Types of Programmatic Campaigns We Master */}
        <SectionWrapper className="bg-white" id="programmatic-campaign-types">
          <SectionHeading 
            title="Types of Programmatic Campaigns We Master"
            subtitle="Reaching your audience effectively across a diverse range of digital channels and formats with precision targeting."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MonitorPlay size={24}/>, title: "Programmatic Display Ads", desc: "Targeted banner and rich media ads across a vast network of websites and apps, optimized for awareness and conversions." , cardPrimaryColor: primaryColor},
              { icon: <PlayCircle size={24}/>, title: "Programmatic Video Ads", desc: "Engaging in-stream, out-stream, and Connected TV (CTV/OTT) video campaigns on premium publishers and platforms.", cardPrimaryColor: primaryColor },
              { icon: <LayoutGrid size={24}/>, title: "Programmatic Native Ads", desc: "Ads that seamlessly blend with the content of publisher sites and apps, offering a non-disruptive user experience.", cardPrimaryColor: primaryColor },
              { icon: <Laptop size={24}/>, title: "Digital Out-of-Home (DOOH)", desc: "Target audiences on digital billboards and screens in real-world locations using programmatic buying techniques.", cardPrimaryColor: primaryColor },
              { icon: <MessageSquare size={24}/>, title: "Programmatic Audio Ads", desc: "Reach listeners on music streaming services, podcasts, and digital radio with targeted audio advertisements.", cardPrimaryColor: primaryColor },
              { icon: <TrendingUp size={24}/>, title: "Emerging Programmatic Channels", desc: "Exploring and leveraging new programmatic opportunities in areas like in-game advertising and other innovative formats.", cardPrimaryColor: primaryColor }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={i} cardPrimaryColor={item.cardPrimaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 7: Advanced Programmatic Strategies We Implement */}
        <SectionWrapper className={lightBg} id="programmatic-advanced-strategies">
          <SectionHeading 
            title="Advanced Programmatic Strategies We Implement"
            subtitle="Going beyond basic targeting to unlock sophisticated programmatic capabilities that drive superior results and efficiency."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Sparkles size={24}/>, title: "Dynamic Creative Optimization (DCO)", description: "Automatically tailoring ad creatives in real-time based on user data, context, and behavior to deliver personalized messages at scale." , cardPrimaryColor: primaryColor},
              { icon: <TargetIcon size={24}/>, title: "Hyperlocal & Geo-Fencing Tactics", description: "Targeting users within precise geographic boundaries or based on their real-world visitation patterns to drive local engagement.", cardPrimaryColor: primaryColor },
              { icon: <UsersRound size={24}/>, title: "First-Party Data Onboarding & Activation", description: "Securely leveraging your CRM and customer data for highly targeted programmatic campaigns and audience insights.", cardPrimaryColor: primaryColor },
              { icon: <Shield size={24}/>, title: "Private Marketplace (PMP) Deals", description: "Accessing premium ad inventory and audiences through invite-only marketplaces for enhanced brand safety and performance.", cardPrimaryColor: primaryColor },
              { icon: <PieChart size={24}/>, title: "Cross-Device & Identity Resolution", description: "Understanding and targeting users consistently across their multiple devices for a unified customer journey view.", cardPrimaryColor: primaryColor },
              { icon: <BarChart3 size={24}/>, title: "Predictive Audience Modeling", description: "Utilizing machine learning to identify and target users most likely to convert or exhibit desired behaviors based on historical data.", cardPrimaryColor: primaryColor }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.description} delay={i} cardPrimaryColor={item.cardPrimaryColor}/>)}
          </div>
        </SectionWrapper>

        {/* Section 8: The Markov Digital Advantage for Programmatic */}
        <SectionWrapper className="bg-white" id="programmatic-ethos">
          <SectionHeading 
            title="The Markov Digital Advantage for Programmatic Advertising"
            subtitle="Our core principles guide our programmatic strategies, ensuring ethical practices, client focus, and outstanding results."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Heart size={32}/>, title: "Client-Centric Approach", desc: "Your business goals are our top priority. We tailor programmatic strategies to your unique needs, ensuring our efforts directly contribute to your success." , cardPrimaryColor: primaryColor},
              { icon: <Lightbulb size={32}/>, title: "Innovation & Adaptability", desc: "The programmatic landscape evolves rapidly. We stay at the forefront of new technologies and strategies to keep your campaigns ahead of the curve.", cardPrimaryColor: primaryColor },
              { icon: <CheckCircle size={32}/>, title: "Ethical & Transparent Practices", desc: "We believe in full transparency in our operations, from media buying to reporting, coupled with a strong commitment to brand safety and ethical data use.", cardPrimaryColor: primaryColor },
              { icon: <TrendingUp size={32}/>, title: "Results-Driven Performance", desc: "Our focus is on delivering measurable results. We continuously optimize campaigns to maximize your ROI and achieve your key performance indicators.", cardPrimaryColor: primaryColor }
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

        {/* Section 9: Programmatic Advertising Success Stories (Case Studies) */}
        <SectionWrapper className={lightBg} id="programmatic-case-studies">
          <SectionHeading 
            title="Programmatic Advertising Success Stories"
            subtitle="Discover how we've helped businesses like yours achieve remarkable results through strategic programmatic campaigns."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "E-Commerce Brand Skyrockets ROAS by 120%", 
                challenge: "An online retailer was struggling with low return on ad spend and inefficient targeting across multiple display networks.", 
                solution: "Implemented a unified programmatic strategy using DV360, leveraging first-party data for retargeting and lookalike audiences. Utilized DCO for personalized product ads.", 
                results: ["Achieved a 120% increase in ROAS within 4 months.", "Reduced Cost Per Acquisition (CPA) by 30%.", "Increased overall conversion volume by 75%."],
                image: "/images/case-studies/ecommerce-programmatic.jpg" // Placeholder image path
              },
              {
                title: "B2B SaaS Doubles Qualified Leads with ABM", 
                challenge: "A B2B SaaS company needed to reach specific decision-makers in target accounts and improve lead quality from their ad spend.", 
                solution: "Developed an Account-Based Marketing (ABM) strategy using programmatic display and native ads. Targeted specific companies and job titles, combined with intent data.", 
                results: ["Doubled the number of Marketing Qualified Leads (MQLs).", "Achieved a 3.5x return on ad spend (ROAS).", "Improved sales team efficiency with higher quality leads."],
                image: "/images/case-studies/b2b-saas-programmatic.jpg" // Placeholder image path
              }
            ].map((study, i) => (
              <motion.div 
                key={study.title} 
                className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* <Image src={study.image} alt={study.title} width={600} height={300} className="w-full h-48 object-cover" /> */}
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  <ImageIcon size={48} /> {/* Placeholder if no image */}
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
                    onClick={() => router.push("/contact?case_study=" + study.title.toLowerCase().replace(/ /g, '-'))}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Section 10: Testimonials */}
        <SectionWrapper className="bg-white" id="programmatic-testimonials">
          <SectionHeading 
            title="What Our Clients Say About Our Programmatic Expertise"
            subtitle="Real feedback from partners who have experienced the Markov Digital difference in programmatic advertising."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { quote: "Markov Digital's programmatic team took our campaigns to a new level. Their strategic approach and transparent reporting gave us confidence and delivered outstanding ROAS.", author: "Olivia Chen, CMO @ Tech Innovators Inc.", avatarText: "OC", companyLogo: "/images/logos/tech-innovators.png" },
              { quote: "We were new to programmatic, but Markov Digital made the process seamless. They educated us, set clear goals, and significantly increased our brand reach and qualified leads.", author: "Liam Davis, Founder @ Artisan Goods Co.", avatarText: "LD", companyLogo: "/images/logos/artisan-goods.png" }
            ].map((testimonial, i) => (
              <motion.div 
                key={testimonial.author} 
                className={`${lightBg} p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col items-center text-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* <Image src={testimonial.companyLogo} alt={testimonial.author.split('@ ')[1]} width={120} height={40} className="mb-4 grayscale opacity-75" /> */}
                <div className="w-24 h-10 bg-gray-300 mb-4 flex items-center justify-center text-gray-500 text-xs">
                    Logo Placeholder
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

        {/* Section 11: Meet Your Dedicated Programmatic Advertising Team */}
        <SectionWrapper className={lightBg} id="programmatic-team">
          <SectionHeading 
            title="Meet Your Dedicated Programmatic Experts"
            subtitle="A passionate team of certified strategists and traders committed to maximizing your programmatic advertising success."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Ayesha Khan", role: "Head of Programmatic", expertise: "10+ Yrs Exp, Advanced DSP Certified, Data Strategy", avatarInitial: "AK" },
              { name: "Ben Carter", role: "Senior Programmatic Trader", expertise: "DV360, The Trade Desk, Audience Segmentation", avatarInitial: "BC" },
              { name: "Chloe Davis", role: "Programmatic Campaign Manager", expertise: "Cross-Channel Optimization, Reporting & Analytics", avatarInitial: "CD" },
              { name: "Marcus Lee", role: "Programmatic Operations Specialist", expertise: "Ad Trafficking, Pixel Implementation, Brand Safety", avatarInitial: "ML" }
            ].map((member, i) => (
              <motion.div 
                key={member.name} 
                className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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

        {/* Section 12: Preparing Your Business for Programmatic Success */}
        <SectionWrapper className="bg-white" id="preparing-for-programmatic">
          <SectionHeading
            title="Setting the Stage for Programmatic Advertising Success"
            subtitle="Key considerations and preparations to help us launch impactful programmatic campaigns for your business swiftly and effectively."
          />
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-10 rounded-xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{color: primaryColor}}>Essential Elements for a Strong Start:</h3>
            <ul className="space-y-5">
              {[ 
                { icon: <Goal size={24}/>, text: "<strong>Clear Campaign Objectives:</strong> Define what you want to achieve (e.g., awareness, consideration, conversions, ROAS targets)." },
                { icon: <UsersRound size={24}/>, text: "<strong>Target Audience Profiles:</strong> Detailed understanding of your ideal customers, including demographics, interests, online behaviors, and potential data segments." },
                { icon: <LayoutGrid size={24}/>, text: "<strong>Creative Assets & Brand Guidelines:</strong> Availability of various ad sizes, formats (image, video), and brand guidelines for consistent messaging." },
                { icon: <DollarSign size={24}/>, text: "<strong>Defined Budget & Flight Dates:</strong> A clear understanding of your advertising budget and desired campaign duration to plan media spend effectively." },
                { icon: <BarChart3 size={24}/>, text: "<strong>Measurement & Tracking Setup:</strong> Access to website analytics and any existing ad platform accounts; ensuring conversion tracking pixels are in place or can be implemented." },
                { icon: <CheckCircle size={24}/>, text: "<strong>Understanding of Your Sales Funnel:</strong> How programmatic fits into your broader marketing and sales process to attribute success correctly." }
              ].map(item => <FeatureListItem key={item.text} icon={item.icon} text={item.text} itemPrimaryColor={primaryColor}/>)}
            </ul>
            <p className="text-center text-gray-600 mt-8 text-sm">
              Even if not all elements are perfectly in place, our team will guide you through the preparation phase to ensure a solid foundation for your campaigns.
            </p>
          </div>
        </SectionWrapper>

        {/* Section 13: Simplified Onboarding for Programmatic Advertising */}
        <SectionWrapper className={lightBg} id="programmatic-onboarding">
          <SectionHeading 
            title="Streamlined Onboarding for Your Programmatic Campaigns"
            subtitle="Our efficient process ensures a smooth start, getting your programmatic advertising efforts up and running quickly."
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { icon: <Handshake size={32}/>, title: "Initial Consultation & Strategy Alignment", desc: "We start with a thorough discussion to understand your business, goals, audience, and how programmatic can best serve your objectives. We align on KPIs and initial strategy.", cardPrimaryColor: primaryColor },
                { icon: <FileText size={32}/>, title: "Data & Asset Collection", desc: "We gather necessary information, including access to any existing ad accounts, audience data (if available), creative assets, and brand guidelines.", cardPrimaryColor: primaryColor },
                { icon: <Settings size={32}/>, title: "Platform Setup & Campaign Configuration", desc: "Our team configures the chosen DSPs, sets up tracking pixels, defines audience segments, and structures your campaigns according to the agreed strategy.", cardPrimaryColor: primaryColor },
                { icon: <Rocket size={32}/>, title: "Launch, Monitoring & Initial Learnings", desc: "Campaigns go live! We closely monitor initial performance, gather data, and make swift optimizations to ensure your budget is working efficiently from day one.", cardPrimaryColor: primaryColor }
              ].map((step, idx) => (
                <motion.div 
                  key={step.title} 
                  className="flex flex-col sm:flex-row items-start p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
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

        {/* Section 14: Programmatic Advertising Management Pricing */}
        <SectionWrapper className="bg-white" id="programmatic-pricing">
          <SectionHeading 
            title="Transparent Programmatic Advertising Pricing"
            subtitle="Choose a plan that fits your needs, or contact us for a custom programmatic advertising solution tailored to your goals."
          />
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
            {[
              { name: "Programmatic Starter", price: "$799", features: ["Up to $5,000 Ad Spend Managed", "1-2 Core Channels (e.g., Display, Native)", "Basic Audience Targeting", "Monthly Performance Reports", "Initial Setup & Configuration"], popular: false, primaryColor: primaryColor, primaryHoverColor: primaryHoverColor },
              { name: "Programmatic Growth", price: "$1599", features: ["Up to $25,000 Ad Spend Managed", "Up to 3 Channels (Display, Video, Native, Audio)", "Advanced Audience Segmentation & Retargeting", "Bi-Weekly Strategy Calls & Reporting", "Dynamic Creative Considerations", "A/B Testing Framework"], popular: true, primaryColor: primaryColor, primaryHoverColor: primaryHoverColor },
              { name: "Programmatic Scale", price: "Custom", features: ["$25,000+ Ad Spend Managed", "All Relevant Channels (Incl. CTV, DOOH)", "Custom Audience & Data Strategy (DMP optional)", "Dedicated Account Team & Weekly Calls", "Advanced Analytics & Attribution Modeling", "Bespoke Programmatic Solutions"], popular: false, primaryColor: primaryColor, primaryHoverColor: primaryHoverColor }
            ].map((plan, i) => (
              <motion.div 
                key={plan.name} 
                className={`bg-gray-50 p-8 rounded-xl shadow-xl flex flex-col text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${plan.popular ? `border-2 border-[${plan.primaryColor}] relative` : 'border border-gray-200'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {plan.popular && <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-4 py-1 text-xs font-semibold rounded-full shadow-md`} style={{backgroundColor: plan.primaryColor}}>POPULAR CHOICE</div>}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-4xl font-extrabold mb-1" style={{color: plan.primaryColor}}>{plan.price}</p>
                <p className="text-gray-500 mb-6 text-sm">{plan.price !== "Custom" ? "/month + Ad Spend" : "Tailored For Your Objectives"}</p>
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
                  onClick={() => router.push(`/contact?service=programmatic-ads&plan=${plan.name.toLowerCase().replace(/ /g, '-')}`)}
                >
                  {plan.price === "Custom" ? "Get a Custom Quote" : "Select Plan"}
                </Button>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto text-sm">
            Programmatic media costs (ad spend) are separate and paid directly to the demand-side platforms or publishers. Management fees cover our strategic expertise, campaign execution, and ongoing optimization.
            <br/>Need a bespoke programmatic strategy? <a href="/contact?service=programmatic-ads&source=custom-pricing" style={{color: primaryColor}} className="font-semibold underline hover:opacity-80 transition-opacity">Contact us for a personalized consultation.</a>
          </p>
        </SectionWrapper>

        {/* Section 15: The Future of Programmatic Advertising */}
        <SectionWrapper className={lightBg} id="future-of-programmatic">
          <SectionHeading
            title="The Evolving Frontier of Programmatic Advertising"
            subtitle="Staying ahead of the curve: We embrace innovation to future-proof your programmatic strategies for sustained success."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Brain size={24} />, title: "AI & Machine Learning Advancements", description: "Enhanced AI algorithms for more predictive targeting, automated bid strategies, and sophisticated campaign optimization at scale.", cardPrimaryColor: primaryColor },
              { icon: <Shield size={24} />, title: "Cookieless Solutions & Privacy", description: "Navigating the post-cookie landscape with first-party data strategies, contextual targeting, and privacy-enhancing technologies (PETs).", cardPrimaryColor: primaryColor },
              { icon: <Tv size={24} />, title: "Growth of CTV & OTT Advertising", description: "Expanding opportunities in Connected TV (CTV) and Over-The-Top (OTT) platforms, offering premium video inventory and engaged audiences.", cardPrimaryColor: primaryColor },
              { icon: <Layers size={24} />, title: "Omnichannel Programmatic", description: "Seamlessly integrated campaigns across all digital touchpoints (display, video, audio, DOOH, social) for a unified customer experience.", cardPrimaryColor: primaryColor },
              { icon: <BarChart3 size={24} />, title: "Advanced Measurement & Attribution", description: "Sophisticated attribution models and cross-channel measurement to understand the true impact of programmatic spend and optimize for holistic business goals.", cardPrimaryColor: primaryColor },
              { icon: <Sparkles size={24} />, title: "Interactive & Shoppable Ad Formats", description: "Increasing use of engaging ad formats like interactive rich media, shoppable video, and augmented reality (AR) experiences within programmatic buys.", cardPrimaryColor: primaryColor }
            ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.description} delay={i} cardPrimaryColor={item.cardPrimaryColor}/>)}
          </div>
          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            Partner with Markov Digital to leverage these future trends and maintain a competitive edge in the dynamic world of programmatic advertising.
          </p>
        </SectionWrapper>

        {/* Section 16: FAQs - Programmatic Advertising */}
        <SectionWrapper className={lightBg} id="programmatic-faqs">
          <SectionHeading 
            title="Frequently Asked Questions about Programmatic Advertising"
            subtitle="Get answers to common queries about our programmatic services and how they can benefit your business."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What is programmatic advertising?",
                a: "Programmatic advertising is the automated buying and selling of digital ad inventory in real-time through ad exchanges and platforms. It uses data and algorithms to target specific audiences with relevant ads across various channels like display, video, mobile, and CTV.",
                icon: <HelpCircle size={20} style={{ color: primaryColor }} />
              },
              {
                q: "How does programmatic targeting work?",
                a: "Programmatic platforms leverage various data sources (1st, 2nd, 3rd party) and targeting parameters such as demographics, geolocations, interests, behaviors, contextual relevance, and lookalike audiences to reach the most relevant users for your campaign goals.",
                icon: <TargetIcon size={20} style={{ color: primaryColor }} />
              },
              {
                q: "What are the benefits of programmatic advertising?",
                a: "Key benefits include improved efficiency through automation, precise audience targeting, real-time optimization, greater transparency, access to vast ad inventory, and the ability to manage campaigns across multiple channels from a single platform, ultimately leading to better ROI.",
                icon: <TrendingUp size={20} style={{ color: primaryColor }} />
              },
              {
                q: "What kind of budget do I need for programmatic advertising?",
                a: "Budgets can vary widely based on your goals, target audience, and campaign scope. We work with businesses of various sizes and can tailor strategies to different budget levels. Our pricing section provides some starting points, but we recommend a custom consultation.",
                icon: <DollarSign size={20} style={{ color: primaryColor }} />
              },
              {
                q: "How do you ensure brand safety in programmatic campaigns?",
                a: "We employ rigorous brand safety measures, including whitelists, blacklists, private marketplace deals (PMPs), pre-bid filtering technologies, and contextual targeting to ensure your ads appear in brand-appropriate environments and alongside suitable content.",
                icon: <Shield size={20} style={{ color: primaryColor }} />
              },
              {
                q: "Can I use my own audience data?",
                a: "Absolutely. We can integrate your first-party data (e.g., CRM lists, website visitors) into programmatic campaigns for retargeting and building more precise custom audiences, ensuring data privacy and compliance.",
                icon: <UserCheck size={20} style={{ color: primaryColor }} />
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-5 rounded-lg shadow-md border border-gray-200"
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

        {/* Section 17: Final Lead Form / Get Started */}
        <SectionWrapper className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900" id="programmatic-contact-form">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
            <SectionHeading 
              title="Ready for a Programmatic Edge?"
              subtitle="Let's discuss how our tailored programmatic advertising strategies can elevate your brand and drive measurable results. Fill out the form below for a personalized consultation."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-200" // Enhanced shadow and border
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactNameProgrammatic" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <Input 
                      id="contactNameProgrammatic" 
                      type="text" 
                      placeholder="e.g., Jane Doe" 
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md focus:ring-[#393E46]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmailProgrammatic" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <Input 
                      id="contactEmailProgrammatic" 
                      type="email" 
                      placeholder="you@example.com" 
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md focus:ring-[#393E46]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactCompanyProgrammatic" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <Input 
                      id="contactCompanyProgrammatic" 
                      type="text" 
                      placeholder="e.g., Acme Corp"
                      value={contactCompany}
                      onChange={(e) => setContactCompany(e.target.value)}
                      className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md focus:ring-[#393E46]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactWebsiteProgrammatic" className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                    <Input 
                      id="contactWebsiteProgrammatic" 
                      type="url" 
                      placeholder="https://yourcompany.com"
                      value={contactWebsite}
                      onChange={(e) => setContactWebsite(e.target.value)}
                      className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md focus:ring-[#393E46]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contactMessageProgrammatic" className="block text-sm font-medium text-gray-700 mb-1">Your Message/Requirements*</label>
                  <textarea
                    id="contactMessageProgrammatic"
                    rows={5}
                    placeholder="Tell us about your programmatic advertising needs, goals, or any questions you have."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-shadow focus:shadow-md resize-y focus:ring-[#393E46]"
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full py-3.5 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: primaryColor, color: 'white' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryHoverColor}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryColor}
                    disabled={isSubmittingContact}
                  >
                    {isSubmittingContact ? "Sending Message..." : "Get My Free Consultation"}
                  </Button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                  We respect your privacy. Your information will only be used to contact you about our services.
                </p>
              </form>
            </motion.div>
          </div>
        </SectionWrapper>

      </main>
    </div>
  );
}