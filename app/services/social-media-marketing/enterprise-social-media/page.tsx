"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button' // Assuming this is Shadcn Button
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card' // Assuming Shadcn Card
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion' // Assuming Shadcn Accordion
import { 
  CheckCircle, Star, Users, TrendingUp, Globe2, ThumbsUp, BarChartHorizontal, 
  MessageCircle, ChevronRight, Target, Puzzle, Lightbulb, ShieldCheck, FileText, 
  MessageSquare, UsersRound, Palette, Activity, Zap, TrendingDown, Scale, 
  Briefcase, ArrowRight, Brain, LifeBuoy, HelpCircle, Award, BookOpen, Building,
  Search, Edit3, CalendarCheck, BarChartBig, LineChart, Mail,
  Facebook, Instagram, Linkedin, Twitter, Youtube, Share2
} from 'lucide-react'

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1 // Slightly faster stagger for a smoother feel
    }
  }
};

// Reusable Class Strings
const iconWrapperBase = "flex items-center justify-center text-white shrink-0";
const iconCircleClassSmall = `${iconWrapperBase} w-10 h-10 rounded-full mr-3`;
const iconCircleClassMedium = `${iconWrapperBase} w-12 h-12 rounded-full mr-4`;
const iconCircleClassLarge = `${iconWrapperBase} w-16 h-16 rounded-full mb-4`;

const sectionTitleClass = "text-3xl md:text-4xl lg:text-5xl font-bold text-[#015551] mb-4";
const sectionSubtitleClass = "text-lg md:text-xl text-[#57B4BA] mb-10 md:mb-12"; // Increased bottom margin slightly
const primaryButtonClass = "bg-[#FE4F2D] hover:bg-[#e64325] text-white font-bold py-3.5 px-7 sm:px-9 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FE4F2D] focus:ring-offset-2"; // Added focus states
const secondaryButtonClass = "bg-[#57B4BA] hover:bg-[#468e93] text-white font-bold py-3.5 px-7 sm:px-9 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#57B4BA] focus:ring-offset-2"; // Added focus states
const cardBaseClass = "bg-white rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out";
const darkCardBaseClass = "bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out";
const lightThemedCardClass = "bg-[#FDFBEE] p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"; // Added md:p-8 for consistency

export default function EnterpriseSocialMediaPage2025() {
  return (
    <div className="bg-gradient-to-b from-[#FDFBEE] via-white to-[#FDFBEE] text-[#333] selection:bg-[#FE4F2D] selection:text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative py-28 md:py-40 text-white overflow-hidden" // Increased padding
        style={{ backgroundImage: 'linear-gradient(rgba(1, 85, 81, 0.88), rgba(1, 51, 47, 0.96)), url("/images/enterprise/hero-background-abstract-network.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black/20 z-0"></div> {/* Subtle overlay for better text contrast */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"> {/* Standard container padding */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight" // Bolder font, tighter tracking
            variants={fadeInUp}
          >
            Elevate Your Enterprise: <span className="text-[#FE4F2D]">Dominant</span> Social Media Strategies
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-200" // Increased bottom margin
            variants={fadeInUp}
          >
            Unlock scalable, data-driven social media solutions meticulously designed for complex organizations. Drive unparalleled brand authority, engagement, and measurable ROI.
          </motion.p>
          
          <motion.div 
            className="bg-white/95 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-2xl max-w-2xl mx-auto mb-12" // Increased max-width slightly, increased blur
            variants={fadeInUp}
          >
            <p className="text-lg font-semibold text-[#015551] mb-5 text-center">Ready to transform your social presence?</p>
            {/* Using a form tag for semantic input grouping */}
            <form className="flex flex-col sm:flex-row gap-4 items-center" onSubmit={(e) => e.preventDefault()}> {/* Prevent default for demo */}
              <div className="relative flex-1 w-full">
                <Building className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input 
                  type="text" 
                  placeholder="Your Company Website (e.g., example.com)" 
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#57B4BA] focus:border-[#57B4BA] text-gray-700 placeholder-gray-500 transition-colors" 
                />
              </div>
              <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise-hero" className="w-full sm:w-auto">
                <Button type="submit" className={`${primaryButtonClass} w-full text-lg`}>GET FREE PROPOSAL</Button>
              </Link>
            </form>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center text-sm text-gray-300 mt-16 space-x-1.5" // Increased top margin
            variants={fadeInUp}
          >
            <Link href="/" className="hover:text-[#FE4F2D] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 opacity-70" /> {/* Adjusted icon size and opacity */}
            <Link href="/services" className="hover:text-[#FE4F2D] transition-colors">Digital Marketing</Link>
            <ChevronRight className="w-4 h-4 opacity-70" />
            <span className="text-white font-medium">Enterprise Social Media</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 1: The Enterprise Social Media Maze (Problem) */}
      <motion.section 
        className="py-20 md:py-28 bg-white" // Increased padding
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className={`${sectionTitleClass} text-center`} variants={fadeInUp}>The Enterprise Social Media <span className="text-[#FE4F2D]">Labyrinth</span></motion.h2>
          <motion.p className={`${sectionSubtitleClass} text-center max-w-3xl mx-auto`} variants={fadeInUp}>
            Large organizations navigate unique social media complexities. Do these challenges resonate with your current landscape?
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Puzzle, title: "Brand Voice Fragmentation", desc: "Struggling to maintain a unified brand identity across numerous departments, regions, or product lines, leading to inconsistent messaging." },
              { icon: Scale, title: "Scalability & Resource Drain", desc: "Managing exponential growth in audiences, content, and interactions without overwhelming internal teams or compromising quality." },
              { icon: ShieldCheck, title: "Regulatory & Compliance Risks", desc: "Navigating intricate legal, industry-specific, and internal governance policies with precision to avoid costly errors." },
              { icon: TrendingDown, title: "Diminishing Organic Impact", desc: "Battling algorithm changes and content saturation to achieve meaningful organic reach and engagement in a crowded digital space." },
              { icon: UsersRound, title: "Hyper-Targeting Complexity", desc: "Effectively segmenting and reaching diverse, niche audience personas with tailored messaging that resonates and converts." },
              { icon: LineChart, title: "Quantifying Business Value", desc: "Attributing social media activities to concrete business outcomes and proving demonstrable ROI to stakeholders." },
            ].map((item, index) => (
              <motion.div key={index} className={`${lightThemedCardClass} border border-transparent hover:border-[#57B4BA]/30 flex flex-col`} variants={fadeInUp}> {/* Added flex flex-col */}
                <div className="flex items-center mb-5"> {/* Increased margin */}
                  <div className={`${iconCircleClassMedium} bg-[#57B4BA]`}><item.icon className="w-6 h-6" /></div>
                  <h3 className="text-xl font-semibold text-[#015551]">{item.title}</h3> {/* Increased font size */}
                </div>
                <p className="text-base text-[#015551] opacity-90 leading-relaxed flex-grow">{item.desc}</p> {/* Increased font size, added flex-grow */}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 2: Your Navigator: Thrive's Strategic Approach (Solution) */}
      <motion.section 
        className="py-20 md:py-28 bg-gradient-to-br from-[#015551] to-[#01332F] text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 text-white" variants={fadeInUp}>Your Navigator: Thrive's <span className="text-[#FE4F2D]">Strategic Blueprint</span></motion.h2>
          <motion.p className="text-lg md:text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto" variants={fadeInUp}>
            We transform enterprise social media complexity into clear, potent strategies that fuel sustainable growth and market leadership.
          </motion.p>
          <motion.div className="text-center mb-12" variants={fadeInUp}>
             <Image 
                src="/marketing-blueprint.webp" 
                alt="Thrive's Strategic Social Media Blueprint for Enterprises" 
                width={800} 
                height={450}
                className="rounded-xl shadow-2xl mx-auto border-4 border-white/20 object-cover" // Added rounded-xl
              />
          </motion.div>
          <motion.p className="text-lg text-center mb-6 max-w-3xl mx-auto leading-relaxed" variants={fadeInUp}> {/* Added leading-relaxed */}
            With <strong className="text-[#FE4F2D]">over 5 billion global social media users</strong> spending an average of <strong className="text-[#FE4F2D]">2 hours and 27 minutes daily</strong>, the digital landscape is ripe with opportunity. For enterprises, this represents a critical arena for influence and expansion.
          </motion.p>
          <motion.p className="text-xl font-semibold text-center text-[#57B4BA] mb-12 max-w-3xl mx-auto" variants={fadeInUp}>
            Is your current social strategy engineered to convert this vast potential into tangible enterprise value?
          </motion.p>
          <motion.div className="text-center" variants={fadeInUp}>
            <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise-strategy">
              <Button className={`${secondaryButtonClass} text-lg px-10 py-4`}>MAP YOUR SUCCESS WITH US</Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3: Core Pillars of Our Enterprise SMM */}
      <motion.section 
        className="py-20 md:py-28 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className={`${sectionTitleClass} text-center`} variants={fadeInUp}>Core Pillars of Our Enterprise <span className="text-[#FE4F2D]">Social Mastery</span></motion.h2>
          <motion.p className={`${sectionSubtitleClass} text-center max-w-3xl mx-auto`} variants={fadeInUp}>
            Robust, integrated solutions architected for strategic excellence and verifiable results at scale.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Enterprise Strategy & Governance", desc: "Bespoke social blueprints aligned with overarching business objectives, KPIs, and comprehensive compliance frameworks." },
              { icon: Edit3, title: "High-Impact Content Ecosystems", desc: "Platform-native, engaging content engines that fuel resonance, build authority, and drive action across diverse enterprise audiences." },
              { icon: Share2, title: "Advanced Community Orchestration", desc: "Proactive engagement, sophisticated sentiment analysis, and strategic brand advocacy cultivation for a loyal following." },
              { icon: Target, title: "Precision-Guided Paid Media", desc: "Data-driven paid campaigns maximizing reach, conversion, and ROI across all key social platforms with efficient ad spend." },
              { icon: BarChartBig, title: "Holistic Performance Intelligence", desc: "Granular tracking, transparent reporting, and continuous data-backed optimization cycles for sustained growth." },
              { icon: Building, title: "Global/Local Harmonization", desc: "Cohesive strategies for multi-location or franchised organizations, balancing central control with impactful local relevance." },
            ].map(pillar => (
              <motion.div key={pillar.title} className={`${lightThemedCardClass} flex flex-col items-center text-center`} variants={fadeInUp}>
                <div className={`${iconCircleClassLarge} bg-[#FE4F2D] shadow-lg`}> {/* Added shadow */}
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#015551] mb-3 mt-1">{pillar.title}</h3> {/* Added mt-1 */}
                <p className="text-base text-[#015551] opacity-90 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Section 5: Our Proven Process for Enterprise Success (Moved before Platform Showcase for flow) */}
      <motion.section 
        className="py-20 md:py-28 bg-white" // Changed background for visual break if desired, or keep it consistent
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }} // Adjusted amount for earlier trigger on longer section
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className={`${sectionTitleClass} text-center`} variants={fadeInUp}>Our Phased Approach to <span className="text-[#FE4F2D]">Enterprise Triumph</span></motion.h2>
          <motion.p className={`${sectionSubtitleClass} text-center max-w-3xl mx-auto`} variants={fadeInUp}>
            A transparent, collaborative journey from deep strategic insight to sustained, scalable growth.
          </motion.p>
          <div className="relative mt-12 md:mt-16"> {/* Added md:mt-16 */}
            {/* Desktop Timeline - thicker line */}
            <div className="hidden md:block border-l-[3px] border-[#57B4BA] absolute h-full top-0 left-1/2 transform -translate-x-1/2 rounded-full"></div>
            
            {[
              { num: 1, title: "Deep Discovery & Audit", desc: "Comprehensive analysis of your brand ecosystem, objectives, audience intelligence, competitive landscape, and current social footprint.", icon: Search },
              { num: 2, title: "Strategic Architecture", desc: "Crafting a bespoke enterprise SMM blueprint with clearly defined goals, KPIs, governance protocols, and content pillars.", icon: Target },
              { num: 3, title: "Content & Campaign Blueprinting", desc: "Developing compelling narratives, platform-specific content strategies, editorial calendars, and integrated campaign plans.", icon: Edit3 },
              { num: 4, title: "Activation & Management", desc: "Flawless execution of campaigns, dynamic community management, proactive engagement, and consistent brand voice amplification.", icon: Zap },
              { num: 5, title: "Performance Analytics & Iteration", desc: "Continuous monitoring, data interpretation, A/B testing, and agile optimization to maximize impact and efficiency.", icon: Activity },
              { num: 6, title: "Strategic Reporting & Evolution", desc: "Delivering transparent, actionable insights, executive summaries, and evolving strategies for long-term market leadership.", icon: BarChartBig },
            ].map((step, index, arr) => (
              <motion.div 
                key={step.num} 
                className="mb-12 md:mb-0 relative" // Increased mobile bottom margin
                variants={fadeInUp}
              >
                {/* Mobile Layout */}
                <div className="md:hidden flex">
                  <div className="flex flex-col items-center mr-5"> {/* Adjusted margin */}
                    <div className={`w-16 h-16 bg-[#FE4F2D] text-white rounded-full flex flex-col items-center justify-center text-2xl font-bold shadow-lg z-10 shrink-0`}> {/* Added shrink-0 */}
                        {step.num}
                        <step.icon className="w-5 h-5 mt-0.5" />
                    </div>
                    {index < arr.length - 1 && <div className="w-1 flex-grow bg-[#57B4BA]/70 mt-2 rounded-full"></div>} {/* Thicker line, rounded */}
                  </div>
                  <div className="pb-8 pt-1"> {/* Added pt-1 for better alignment */}
                    <h3 className="text-xl font-semibold text-[#015551] mb-2">{step.title}</h3> {/* Increased bottom margin */}
                    <p className="text-base text-gray-700 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  <div className="md:w-5/12"></div> {/* Spacer */}
                  <div className="md:w-2/12 flex justify-center">
                    <div className={`w-20 h-20 bg-[#FE4F2D] text-white rounded-full flex flex-col items-center justify-center text-3xl font-bold shadow-xl z-10`}> {/* Larger shadow */}
                      {step.num}
                      <step.icon className="w-7 h-7 mt-1" /> {/* Slightly larger icon */}
                    </div>
                  </div>
                  <div className="md:w-5/12">
                    <div className={`p-6 rounded-xl shadow-lg bg-[#FDFBEE] border border-gray-200/70 ${index % 2 === 0 ? 'text-left md:mr-8' : 'text-right md:ml-8'}`}> {/* Added margin for card spacing from center line */}
                      <h3 className="text-xl font-semibold text-[#015551] mb-2">{step.title}</h3>
                      <p className="text-base text-gray-700 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
                {/* Desktop line connector to next item (except last) - Adjusted height and ensuring it ends before the next circle */}
                {index < arr.length - 1 && <div className="hidden md:block h-24 border-l-[3px] border-[#57B4BA] absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-10 rounded-full"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 4: Platform Expertise Showcase (Moved after Process for better flow) */}
      <motion.section 
        className="py-20 md:py-28 bg-[#F0F5F5]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className={`${sectionTitleClass} text-center`} variants={fadeInUp}>Multi-Platform <span className="text-[#FE4F2D]">Mastery</span></motion.h2>
          <motion.p className={`${sectionSubtitleClass} text-center max-w-3xl mx-auto`} variants={fadeInUp}>
            We leverage the unique strengths of each platform to amplify your enterprise's voice and impact effectively.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <Image 
              src="/social-media-integration.webp" 
              alt="Enterprise Social Media Platforms Integration by Thrive" 
              width={900} 
              height={550}
              className="w-full max-w-4xl mx-auto rounded-xl shadow-xl border-4 border-white object-cover" // Added rounded-xl
            />
          </motion.div>
        </div>
      </motion.section>


      {/* ... (Rest of the sections will follow similar refinement principles) ... */}
      {/* I will continue refining key sections as examples, then you can apply these patterns to the rest. */}

      {/* Section 6 & 7: Organic vs. Paid Synergy */}
      <section className="py-20 md:py-28 bg-[#FDFBEE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className={`${sectionTitleClass} text-center mb-5`}
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}
          >
            Organic Marketing vs. Paid Advertising: <span className="text-[#FE4F2D]">The Enterprise Synergy</span>
          </motion.h2>
          <motion.p 
            className={`${sectionSubtitleClass} text-center max-w-3xl mx-auto`}
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}
          >
            Mastering the interplay of organic foundation and paid acceleration is crucial for a dominant enterprise social media presence. We architect your optimal blend.
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-10" // Increased lg:gap
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerChildren}
          >
            {/* Organic Marketing Card */}
            <motion.div className={`${cardBaseClass} border-t-4 border-[#57B4BA]`} variants={fadeInUp}> {/* Added top border for distinction */}
              <div className="flex items-center mb-5">
                <div className={`${iconCircleClassMedium} bg-[#57B4BA]`}><Globe2 className="w-6 h-6"/></div>
                <h3 className="text-2xl font-bold text-[#015551]">Enterprise Organic SMM</h3>
              </div>
              <p className="mb-4 text-gray-700 leading-relaxed text-base">Focuses on cultivating authentic brand presence, fostering community, and achieving sustainable long-term engagement through valuable, non-promoted content.</p>
              <p className="mb-6 text-gray-700 leading-relaxed text-base">Tactics include strategic storytelling, proactive user interaction, establishing thought leadership, and optimizing social profiles for discoverability.</p>
              <h4 className="font-bold text-[#015551] mt-6 mb-4 text-lg">Core Advantages:</h4>
              <ul className="space-y-3.5 text-gray-600 text-base"> {/* Increased space-y */}
                {[
                  { icon: ThumbsUp, text: "Builds profound, authentic brand loyalty and deep-seated trust." },
                  { icon: MessageCircle, text: "Fosters meaningful two-way dialogues and lasting customer relationships." },
                  { icon: Search, text: "Enhances brand discoverability and sustainable organic reach over time." },
                  { icon: TrendingUp, text: "Supports broader SEO objectives through valuable social signals." }
                ].map(item => (
                  <li key={item.text} className="flex items-start">
                    <item.icon className="w-5 h-5 text-[#FE4F2D] mr-3 mt-1 shrink-0" />
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Paid Advertising Card */}
            <motion.div className={`${cardBaseClass} border-t-4 border-[#FE4F2D]`} variants={fadeInUp}> {/* Added top border for distinction */}
              <div className="flex items-center mb-5">
                <div className={`${iconCircleClassMedium} bg-[#FE4F2D]`}><Zap className="w-6 h-6"/></div>
                <h3 className="text-2xl font-bold text-[#015551]">Enterprise Paid Social Ads</h3>
              </div>
              <p className="mb-4 text-gray-700 leading-relaxed text-base">Utilizes strategic paid placements to achieve specific, measurable objectives like high-value lead generation, targeted conversions, or rapid market penetration.</p>
              <p className="mb-6 text-gray-700 leading-relaxed text-base">Leverages sophisticated, multi-layered targeting based on demographics, firmographics, interests, behaviors, and custom/lookalike audiences.</p>
              <h4 className="font-bold text-[#015551] mt-6 mb-4 text-lg">Core Advantages:</h4>
              <ul className="space-y-3.5 text-gray-600 text-base">
                {[
                  { icon: Target, text: "Pinpoint audience targeting for unparalleled relevance and efficiency." },
                  { icon: BarChartHorizontal, text: "Directly measurable ROI with granular analytics and performance tracking." },
                  { icon: UsersRound, text: "Scalable, immediate reach to new, highly qualified audience segments." },
                  { icon: CalendarCheck, text: "Accelerated results for time-sensitive campaigns and product launches." }
                ].map(item => (
                  <li key={item.text} className="flex items-start">
                    <item.icon className="w-5 h-5 text-[#57B4BA] mr-3 mt-1 shrink-0" />
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-16 text-center"
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}
          >
            <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise-strategy-blend">
              <Button className={`${primaryButtonClass} text-lg px-10 py-4`}>ENGINEER MY OPTIMAL SOCIAL STRATEGY</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 11: Thrive's Enterprise Social Media Results */}
      <motion.section 
        className="py-20 md:py-28 bg-gradient-to-r from-[#015551] to-[#01332F] text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white" variants={fadeInUp}>
            Proven Results: Thrive's <span className="text-[#FE4F2D]">Enterprise Impact Engine</span>
          </motion.h2>
          <motion.p className="text-lg md:text-xl text-center text-gray-300 mb-12" variants={fadeInUp}>Solidify Your Market Dominance with Verifiable, Transformative Outcomes.</motion.p>
          
          <motion.p className="text-center mb-16 max-w-3xl mx-auto text-gray-200 leading-relaxed text-lg" variants={fadeInUp}>
            Thrive's dedicated enterprise social media division consistently drives exceptional success across diverse B2B and B2C verticals. We empower enterprises and multi-location conglomerates with a <strong className="text-[#57B4BA]">comprehensive, battle-tested toolkit for achieving and sustaining social media supremacy</strong>.
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> {/* Adjusted for 2-col on medium screens */}
            {[
              { image: "/chemical-ent.jpg", title: "PERFORMANCE CHEMICAL MFG.", stat1: "+657%", label1: "Twitter Engagement", stat2: "+138%", label2: "LinkedIn Follower Growth", desc: "Orchestrated a content and engagement strategy leading to a record 8,299+ referral sessions and significantly elevated search rankings." },
              { image: "/therapy-ent.jpg", title: "MULTI-LOCATION ABA THERAPY", stat1: "+668k", label1: "Targeted Social Reach", stat2: "+1,300%", label2: "Lead Form Submissions", desc: "Drove 12,591 qualified site visitors and achieved a 20x increase in leads within six months via hyper-targeted paid social and video content." },
              { image: "/landscape-ent.jpg", title: "PREMIER LANDSCAPE CONSTRUCTION", stat1: "+100%", label1: "Instagram Follower Base", stat2: "+15k", label2: "Monthly Facebook Impressions", desc: "Revitalized online presence and credibility, doubling Instagram followers and boosting Facebook engagement by 76.9% in 5 months." },
            ].map((study, index) => (
              <motion.div key={index} className={`${darkCardBaseClass} overflow-hidden group flex flex-col`} variants={fadeInUp}> {/* Added flex flex-col */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-md"> {/* Increased height */}
                  <Image src={study.image} alt={study.title} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-500 ease-in-out"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div> {/* Stronger gradient */}
                  <h3 className="absolute bottom-3 left-4 right-4 font-bold text-md uppercase tracking-wider text-white p-2.5 bg-[#FE4F2D]/90 rounded-md text-center line-clamp-2">{study.title}</h3> {/* Improved styling and centering */}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 px-2">
                  <div className="text-center">
                    <p className="font-bold text-3xl lg:text-4xl text-white tabular-nums">{study.stat1}</p> {/* Added tabular-nums for better number alignment */}
                    <p className="text-xs text-gray-300 uppercase tracking-wider">{study.label1}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-3xl lg:text-4xl text-white tabular-nums">{study.stat2}</p>
                    <p className="text-xs text-gray-300 uppercase tracking-wider">{study.label2}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed px-2 flex-grow">{study.desc}</p> {/* Added flex-grow */}
              </motion.div>
            ))}
          </div>
          
          <motion.p className="text-center mb-12 max-w-3xl mx-auto text-gray-200 text-lg leading-relaxed" variants={fadeInUp}>
            Our holistic, data-centric methodology meticulously defines growth objectives, selects optimal platform ecosystems, and engineers winning content strategies that demonstrably drive revenue and market share for your enterprise.
          </motion.p>
          
          <motion.div className="flex justify-center" variants={fadeInUp}>
            <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise-competition-win">
              <Button className={`${secondaryButtonClass} text-lg px-10 py-4 border-2 border-[#57B4BA] hover:bg-[#68c9cf]`}>ECLIPSE YOUR COMPETITION</Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 14: Comprehensive FAQ Section */}
      <motion.section 
        className="py-20 md:py-28 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.h2 className={`${sectionTitleClass} text-center`} variants={fadeInUp}>Your Enterprise SMM <span className="text-[#FE4F2D]">Queries, Answered</span></motion.h2>
          <motion.p className={`${sectionSubtitleClass} text-center`} variants={fadeInUp}>
            Navigating the complexities of enterprise social media? Find clear answers here.
          </motion.p>
          <Accordion type="single" collapsible className="w-full space-y-5"> {/* Increased space-y */}
            {[
              // FAQ content from your original code
              { q: "How does enterprise SMM fundamentally differ from standard SMM practices?", a: "Enterprise SMM addresses significantly greater scale and complexity. This includes managing multiple brand entities or locations, catering to vast and diverse audiences, adhering to stringent governance and compliance, utilizing advanced analytics suites, and deep integration with other enterprise-grade software (CRM, ERP). It demands robust, scalable processes, sophisticated tools, and profound strategic alignment with overarching corporate objectives." },
              { q: "What specific, measurable results can our enterprise anticipate?", a: "Results are tailored to your unique goals but typically encompass significantly increased brand authority and share of voice, substantial lead generation and pipeline contribution, improved customer lifetime value through enhanced engagement, fortified brand reputation and crisis resilience, increased qualified website traffic, and ultimately, demonstrable contribution to revenue growth and market share. We establish clear, quantifiable KPIs from the outset and track progress with meticulous transparency." },
              { q: "How do you ensure brand consistency and compliance across numerous departments or global locations?", a: "We establish a centralized strategic framework, including comprehensive brand voice and visual guidelines, shared content calendars, and multi-tiered approval workflows. This is often augmented by a 'Center of Excellence' model, providing training, resources, and support for local or departmental teams while maintaining central oversight on strategy, compliance, and core messaging to ensure global consistency and local relevance." },
              { q: "What is your pricing structure for enterprise-level SMM services?", a: "Our pricing is bespoke, reflecting the specific scope, complexity, and strategic objectives of your enterprise. Factors include the number of brands/platforms, content volume and sophistication, paid media ad spend, required analytics depth, and level of strategic consultancy. We provide transparent, detailed proposals typically based on a retainer model, following a thorough discovery and needs assessment." },
              { q: "What is a realistic timeframe to observe significant results from an enterprise SMM program?", a: "While targeted paid campaigns can yield immediate tactical wins (e.g., lead spikes), the strategic benefits of enterprise SMM—such as organic growth, brand authority, and community building—are cumulative. Initial positive trends and an uplift in key metrics are often observable within 3-6 months. Substantial, transformative impact and deep market penetration typically build and compound over 6-12 months and beyond, especially with consistent, data-driven optimization." },
              { q: "How do you integrate SMM with our existing marketing technology stack?", a: "We have extensive experience integrating with a wide array of enterprise martech, including CRM (Salesforce, HubSpot), marketing automation (Marketo, Pardot), analytics platforms (Google Analytics, Adobe Analytics), and business intelligence tools. This ensures seamless data flow, unified reporting, and a holistic view of the customer journey, maximizing the value of your existing technology investments." }
            ].map((faq, index) => (
              <motion.div variants={fadeInUp} key={index} className="bg-[#FDFBEE]/80 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Increased roundness and shadow */}
                <AccordionItem value={`item-${index}`} className="border-b-0">
                  <AccordionTrigger className="text-left hover:text-[#FE4F2D] text-lg font-semibold text-[#015551] p-6 transition-colors duration-200 group"> {/* Increased font-weight, group for icon hover */}
                    <HelpCircle className="w-6 h-6 mr-4 text-[#57B4BA] inline-block shrink-0 group-hover:text-[#FE4F2D] transition-colors duration-200" /> {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed px-6 pb-6 pt-0 text-base"> {/* Ensured consistent padding */}
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className="py-28 md:py-40 bg-gradient-to-br from-[#015551] via-[#014844] to-[#01332f] text-white" // Refined gradient
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight" // Bolder font
            variants={fadeInUp}
          >
            Ready to Catapult Your Enterprise Social Presence to New Heights?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed"
            variants={fadeInUp}
          >
            Allow Thrive's elite team of enterprise social media strategists to architect and execute a potent, bespoke strategy tailored to your unique organizational DNA. The time to unlock your enterprise's full digital potential is now.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-6"> {/* Flex for multiple buttons if needed */}
            <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise-final-cta">
              <Button className={`${primaryButtonClass} text-xl py-5 px-12 transform hover:scale-110 w-full sm:w-auto`}>
                IGNITE MY ENTERPRISE GROWTH
              </Button>
            </Link>
            <Link href="/case-studies?industry=enterprise">
                <Button className={`${secondaryButtonClass} text-lg py-4 px-10 border-2 border-transparent hover:border-white/50 w-full sm:w-auto`}> {/* Adjusted secondary button */}
                    VIEW ENTERPRISE CASE STUDIES
                </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}