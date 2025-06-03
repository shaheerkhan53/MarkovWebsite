"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
    Search, ChevronRight, Zap, Target, Brain, BarChart3, Lightbulb, Users, CheckCircle, 
    ShieldCheck, DollarSign, MessageSquare, ArrowRight, Layers, BookOpen, Handshake, 
    Settings2, Share2, SlidersHorizontal, RefreshCw, Award, Cpu, Eye, UserCheck, Mail,
    Building, Globe, UsersRound, Scaling, Briefcase, Server // Added more relevant icons
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import React, { useRef } from 'react';

export default function EnterpriseDigitalMarketingPage() {
  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Hero Parallax/Scroll Effects
  const heroBgPatternY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroBgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.07, 0.25]); // Slightly more visible pattern
  const heroElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]); // Content moves up faster
  const heroImageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]); 
  const heroImageScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.75]);

  const navigateToContact = (serviceType: string = 'enterprise-digital-marketing', service: string = 'general', context?: string) => {
    const url = context
      ? `/contact?type=${serviceType}&service=${service}&context=${context}` // Use serviceType for type
      : `/contact?type=${serviceType}&service=${service}`;
    router.push(url);
  };

  // Animation Variants
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.9, ease: "circOut" } } };
  const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } } };
  const staggerContainer = (staggerAmount = 0.15, delayChildren = 0.2) => ({ // Faster stagger for enterprise
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: staggerAmount, delayChildren: delayChildren } }
  });
  const cardHoverDark = { 
    scale: 1.03, 
    y: -6, 
    boxShadow: "0px 15px 25px rgba(0,0,0,0.3)", 
    transition: { type: "spring", stiffness: 300, damping: 15 } 
  };
  const cardHoverLight = { 
    scale: 1.03, 
    y: -6, 
    boxShadow: "0px 15px 25px rgba(120, 29, 57, 0.18)", // Maroon shadow for light
    transition: { type: "spring", stiffness: 300, damping: 15 } 
  };
  const buttonHover = { scale: 1.05, transition: { type: "spring", stiffness: 350, damping: 12 }};
  
  const heroTitleContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04, delayChildren: 0.4 } } 
  };
  const heroLetterVariant = {
    hidden: { opacity: 0, y: 25, skewY: 3, rotateX: -70 },
    visible: { opacity: 1, y: 0, skewY: 0, rotateX: 0, transition: { type: "spring", stiffness: 180, damping: 18, duration: 0.7 } }
  };
  const heroContentVariants = {
    hidden: { opacity:0, y:25},
    visible: {opacity:1, y:0, transition: {duration:0.8, ease:"easeOut"}}
  };


  // Dominant Blue Theme Colors (replacing Maroon)
  const colors = {
    bgBase: "bg-slate-900", 
    bgSectionDark: "bg-slate-800",
    bgSectionMedium: "bg-slate-700", 
    bgSectionLight: "bg-slate-600", 
    bgCard: "bg-slate-800/60 backdrop-blur-lg border border-slate-700/70", 
    bgCardSolid: "bg-slate-800 border border-slate-700",
    textPrimary: "text-slate-50", 
    textSecondary: "text-slate-200", 
    textAccent: "text-sky-400", 
    highlightStrong: "text-white", 
    buttonPrimaryBg: "bg-sky-500", 
    buttonPrimaryText: "text-slate-900", 
    buttonPrimaryHoverBg: "bg-sky-400",
    buttonSecondaryBg: "bg-slate-100", 
    buttonSecondaryText: "text-slate-800",
    buttonSecondaryHoverBg: "bg-white",
    borderLight: "border-slate-700/50",
    borderAccent: "border-sky-400",
    gradientFrom: "from-slate-600",
    gradientTo: "to-sky-500", 
  };

  // For light sections
  const lightThemeColors = {
    bgBase: "bg-white",
    bgSection: "bg-slate-50", 
    textHeader: "text-slate-900",
    textBody: "text-slate-700",
    textAccent: "text-sky-600",
    buttonPrimaryBg: "bg-slate-700",
    buttonPrimaryText: "text-white",
    buttonPrimaryHoverBg: "bg-slate-800",
    buttonSecondaryBg: "bg-slate-900", 
    buttonSecondaryText: "text-white",
    buttonSecondaryHoverBg: "bg-sky-600",
    cardBg: "bg-white",
    cardBorder: "border-slate-200",
    cardHoverBorder: "border-sky-400",
  };


  return (
    <div className={`font-sans overflow-x-hidden`}>

      {/* 1. Hero Section - Enterprise Focus (Dark Maroon Theme) */}
      <section ref={heroRef} className={`relative min-h-screen h-auto md:h-[120vh] flex flex-col justify-center ${colors.bgBase} overflow-hidden py-24 md:py-0`}>
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroBgPatternY, opacity: heroBgOpacity }} 
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-25">
            <defs>
              <pattern id="enterpriseHeroGrid" patternUnits="userSpaceOnUse" width="100" height="100">
                <circle cx="50" cy="50" r="0.5" fill="rgba(254, 205, 211, 0.2)"/>
                <path d="M0 25 H100 M0 75 H100 M25 0 V100 M75 0 V100" stroke="rgba(254, 205, 211, 0.05)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#enterpriseHeroGrid)" />
          </svg>
        </motion.div>

        <motion.div className="absolute -top-1/4 -left-1/3 w-3/4 h-3/4 bg-gradient-to-br from-slate-700/25 to-transparent rounded-full filter blur-3xl animate-blob opacity-50" />
        <motion.div className="absolute -bottom-1/4 -right-1/3 w-3/4 h-3/4 bg-gradient-to-tl from-sky-600/15 to-transparent rounded-full filter blur-3xl animate-blob animation-delay-3500 opacity-40" />
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <motion.div 
                className="w-full"
                style={{ y: heroElementsY }}
                initial="hidden"
                animate="visible"
                variants={heroTitleContainer}
            >
                <motion.div variants={heroLetterVariant} className={`inline-flex items-center gap-2.5 text-sm font-semibold ${colors.textAccent} bg-slate-800/60 border ${colors.borderAccent} px-5 py-2 rounded-full mb-10 backdrop-blur-md shadow-lg`}>
                    <Briefcase className="w-4.5 h-4.5" />
                    <span>MarkovWeb: Enterprise Digital Command</span>
                </motion.div>

                <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-10 leading-tight tracking-tight">
                  { "Elevate.".split("").map((char, i) => <motion.span key={`e-${i}`} variants={heroLetterVariant} className="inline-block">{char}</motion.span>) }
                  { " ".split("").map((char, i) => <motion.span key={`sp-${i}`} variants={heroLetterVariant} className="inline-block">{char}</motion.span>) }
                  { "Expand.".split("").map((char, i) => <motion.span key={`x-${i}`} variants={heroLetterVariant} className="inline-block">{char}</motion.span>) }
                  <br/>
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} via-sky-400`}>
                    { "Dominate.".split("").map((char, i) => <motion.span key={`d-${i}`} variants={heroLetterVariant} className="inline-block">{char}</motion.span>) }
                  </span>
                </motion.h1>
                
                <motion.p 
                    variants={heroContentVariants} transition={{delay:0.9}} 
                    className={`text-xl md:text-2xl ${colors.textSecondary} mb-14 max-w-3xl mx-auto leading-relaxed`}
                >
                    Tailored for global enterprises, our strategic digital marketing solutions integrate cutting-edge technology with deep market intelligence, driving scalable growth and fortifying your industry leadership across all frontiers.
                </motion.p>

                <motion.div 
                    variants={heroContentVariants} transition={{delay:1.1}} 
                    className={`max-w-xl mx-auto ${colors.bgCard} p-6 sm:p-8 rounded-2xl shadow-2xl border ${colors.borderLight}`}
                >
                    <p className={`${colors.textPrimary} text-lg font-semibold mb-5`}>Unlock Your Enterprise Potential – Request a Consultation:</p>
                    <form onSubmit={(e) => { e.preventDefault(); navigateToContact('enterprise-digital-marketing', 'strategy', 'hero-email-submit'); }} className="flex flex-col sm:flex-row gap-4 items-center">
                        <div className="relative flex-grow w-full sm:w-auto">
                            <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${colors.textSecondary} h-5 w-5 opacity-70`} />
                            <Input
                                type="email"
                                name="hero_enterprise_email"
                                required
                                placeholder="Your Corporate Email Address"
                                className={`pl-12 pr-4 py-4 bg-slate-900/70 ${colors.textPrimary} text-base border ${colors.borderLight} focus:ring-2 focus:ring-sky-400 focus:border-sky-500 w-full rounded-xl placeholder-slate-300 transition-all duration-300 text-lg`}
                            />
                        </div>
                        <motion.div whileHover={buttonHover} className="w-full sm:w-auto">
                        <Button
                            type="submit"
                            className={`${colors.buttonPrimaryBg} hover:${colors.buttonPrimaryHoverBg} ${colors.buttonPrimaryText} text-md font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg w-full sm:w-auto whitespace-nowrap`}
                        >
                            Request Consultation <ArrowRight className="inline-block ml-2.5 w-5 h-5"/>
                        </Button>
                        </motion.div>
                    </form>
                     <p className={`text-xs ${colors.textSecondary} mt-5 opacity-70`}>Confidential & tailored for enterprise-level inquiries.</p>
                </motion.div>
            </motion.div>
        </div>
        
        {/* Conceptual Enterprise Network Visual */}
        <motion.div 
            className="absolute inset-x-0 bottom-0 h-1/2 md:h-2/3 lg:h-3/4 z-0 pointer-events-none"
            style={{ 
                opacity: heroImageOpacity,
                scale: heroImageScale,
                y: heroElementsY 
            }}
        >
            <Building // Using Building icon for enterprise feel
                className="w-full h-full object-contain text-sky-500/5 animate-pulse-slow" 
                strokeWidth={0.5} // Make lines thinner for abstract look
            />
        </motion.div>
        
        <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3, duration:1}}
        >
            <ChevronRight className={`w-10 h-10 ${colors.textSecondary} opacity-40 animate-bounce-vertical transform rotate-90`} />
        </motion.div>
      </section>

      {/* --- SECTION 2: The Enterprise Challenge (Light Background Theme) --- */}
      <section className={`py-24 ${lightThemeColors.bgSection} ${lightThemeColors.textBody}`}>
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${lightThemeColors.textHeader} mb-6`}>
            The Enterprise <span className={lightThemeColors.textAccent}>Digital Conundrum</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-xl ${lightThemeColors.textBody} opacity-80 mb-16 max-w-3xl mx-auto`}>
            Standard marketing approaches falter against the complexities of enterprise scale: fragmented data, siloed departments, global market variations, and the demand for provable, C-suite level ROI.
          </motion.p>
          <motion.div variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Siloed Operations & Data", desc: "Disconnected teams and data sources hindering a unified customer view and cohesive strategy.", icon: <Server className={`w-12 h-12 ${lightThemeColors.textAccent}`} /> },
              { title: "Global-Local Balancing Act", desc: "Maintaining brand consistency while adapting to diverse cultural and market nuances worldwide.", icon: <Globe className={`w-12 h-12 ${lightThemeColors.textAccent}`} /> },
              { title: "Scalability & Governance", desc: "Implementing strategies and technologies that can scale efficiently while ensuring compliance.", icon: <Scaling className={`w-12 h-12 ${lightThemeColors.textAccent}`} /> }
            ].map(item => (
              <motion.div 
                variants={fadeInUp} 
                key={item.title} 
                className={`${lightThemeColors.cardBg} p-10 rounded-2xl shadow-xl border ${lightThemeColors.cardBorder} hover:${lightThemeColors.cardHoverBorder} transition-all duration-300`} 
                whileHover={cardHoverLight}
              >
                <div className={`bg-slate-100 p-4 inline-block rounded-xl mb-6`}>
                    {React.cloneElement(item.icon, {className: `w-10 h-10 ${lightThemeColors.textAccent}`})}
                </div>
                <h3 className={`text-2xl font-semibold ${lightThemeColors.textHeader} mb-4`}>{item.title}</h3>
                <p className={`${lightThemeColors.textBody} opacity-90 text-md leading-relaxed`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: Our Enterprise-Grade Strategic Pillars (Dark Maroon Theme) --- */}
      <section className={`py-24 ${colors.bgBase}`}>
        <div className="container mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} text-center mb-20`}>
            Pillars of Our <span className={`${colors.textAccent} underline decoration-wavy decoration-sky-500`}>Enterprise Excellence</span>
          </motion.h2>
          <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Unified Data Intelligence", desc: "Consolidating enterprise-wide data into a single source of truth for strategic decisioning.", icon: <BarChart3 /> },
              { title: "Global-Local Strategy Orchestration", desc: "Centralized strategic oversight with frameworks for localized execution and adaptation.", icon: <Globe /> },
              { title: "Enterprise MarTech Architecture", desc: "Designing and integrating scalable marketing technology stacks for optimal performance.", icon: <Cpu /> },
              { title: "C-Suite Strategic Alignment", desc: "Ensuring digital strategy directly supports and drives overarching business objectives.", icon: <Briefcase /> }
            ].map(pillar => (
              <motion.div 
                variants={fadeInUp} 
                key={pillar.title} 
                className={`${colors.bgCard} p-8 rounded-2xl shadow-2xl ${colors.borderLight} border-2 transform transition-all duration-300 hover:-translate-y-2.5`} 
                whileHover={cardHoverDark}
              >
                <div className={`bg-slate-900/50 w-20 h-20 rounded-xl flex items-center justify-center mb-8 shadow-inner`}>
                    {React.cloneElement(pillar.icon, {className: `w-10 h-10 ${colors.textAccent}`})}
                </div>
                <h3 className={`text-2xl font-semibold ${colors.textPrimary} mb-4`}>{pillar.title}</h3>
                <p className={`${colors.textSecondary} text-md leading-relaxed`}>{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: The MarkovWeb Enterprise Blueprint (Light Background Theme) --- */}
      <section id="our-enterprise-blueprint" className={`py-28 bg-white ${lightThemeColors.textBody} relative`}>
        {/* Omitting decorative blobs for cleaner light section, can be added back if desired */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${lightThemeColors.textHeader} text-center mb-8`}>The MarkovWeb Enterprise Blueprint</motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-xl ${lightThemeColors.textBody} opacity-80 text-center mb-24 max-w-3xl mx-auto`}>
            Our proprietary four-phase methodology, refined for the unique demands of enterprise organizations, ensuring comprehensive strategy and impactful execution.
          </motion.p>
          <div className="relative">
            {/* Optional: Subtle connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-1 bg-slate-200 transform -translate-y-1/2 -z-1"></div>

            <motion.div variants={staggerContainer(0.25)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-10">
              {[
                { num: "01", title: "Enterprise Immersion & Audit", desc: "Deep analysis of existing infrastructure, multi-market presence, data silos, and stakeholder objectives.", icon: <Building/>},
                { num: "02", title: "Strategic Synthesis & Modeling", desc: "AI-driven data consolidation, predictive modeling, and global opportunity identification.", icon: <Brain/>},
                { num: "03", title: "Architectural Framework Design", desc: "Building scalable, adaptable strategic frameworks with clear governance and global-local integration.", icon: <Layers/>},
                { num: "04", title: "Performance Command & Evolution", desc: "Establishing C-suite dashboards, continuous optimization loops, and strategic advisory.", icon: <Award/> }
              ].map((step) => (
                <motion.div 
                    variants={fadeInUp} 
                    key={step.num} 
                    className={`text-center relative flex flex-col items-center p-8 rounded-2xl ${lightThemeColors.cardBg} border-2 ${lightThemeColors.cardBorder} shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-sky-500`}
                    whileHover={cardHoverLight}
                >
                    <div className={`absolute -top-px -left-px -right-px h-2 bg-gradient-to-r from-sky-500 to-sky-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div> {/* Accent line on hover */}
                    <div className={`w-24 h-24 rounded-full bg-slate-100 border-4 border-slate-200 flex items-center justify-center mb-8 shadow-lg relative`}>
                        {React.cloneElement(step.icon, {className: `w-12 h-12 ${lightThemeColors.textAccent}`})}
                        <span className={`absolute -top-3 -right-3 bg-slate-700 text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center border-2 border-white shadow-md`}>{step.num}</span>
                    </div>
                  <h3 className={`text-2xl font-semibold ${lightThemeColors.textHeader} mb-4`}>{step.title}</h3>
                  <p className={`${lightThemeColors.textBody} opacity-90 text-md leading-relaxed`}>{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: Global Scale, Local Precision (Dark Maroon Theme) --- */}
      <section className={`py-24 ${colors.bgSectionDark}`}>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Globe className={`w-24 h-24 ${colors.textAccent} mb-8 opacity-70`}/>
            <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-8`}>Global Scale, <span className={colors.textAccent}>Local Precision</span></h2>
            <p className={`text-xl ${colors.textSecondary} mb-10 leading-relaxed`}>
              Enterprise success hinges on mastering the art of global consistency while delivering locally resonant experiences. Our strategies are designed to empower your brand across diverse markets.
            </p>
            <ul className={`space-y-5 ${colors.textSecondary} mb-12 text-lg`}>
              {[
                "Centralized Brand Governance with Decentralized Execution Frameworks.",
                "Multi-Lingual & Multi-Cultural Content Adaptation Strategies.",
                "Geo-Targeted Campaign Orchestration & Performance Tracking.",
                "International SEO & Localized Digital Footprint Optimization."
              ].map(item => (
                 <li key={item} className="flex items-start">
                    <CheckCircle className={`w-7 h-7 ${colors.textAccent} mr-4 mt-1 flex-shrink-0`} /> 
                    <span>{item}</span>
                </li>
              ))}
            </ul>
            <motion.div whileHover={buttonHover}>
            <Button
                className={`${colors.buttonSecondaryBg} ${colors.buttonSecondaryText} hover:${colors.buttonSecondaryHoverBg} text-lg font-bold px-10 py-4 rounded-xl transition duration-300 shadow-lg`}
                onClick={() => navigateToContact('enterprise-digital-marketing', 'global-strategy', 'global-local-solutions')}
              >
                Conquer Global Markets
            </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={fadeIn} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="hidden lg:block relative aspect-square max-w-lg mx-auto"
          >
             {/* Conceptual Globe/Network Image - Replace with actual */}
            <img 
                src="/globalscale.jpg" 
                alt="Global Network Visualization" 
                className="rounded-3xl shadow-2xl object-cover w-full h-full filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 via-transparent to-sky-500/20 rounded-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 6: Integrated MarTech & Data Ecosystems (Light Background Theme) --- */}
      <section className={`py-24 ${lightThemeColors.bgSection} ${lightThemeColors.textBody}`}>
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Layers className={`w-20 h-20 ${lightThemeColors.textAccent} mx-auto mb-8 opacity-90`}/>
            <h2 className={`text-4xl md:text-5xl font-bold ${lightThemeColors.textHeader} mb-8`}>
              Integrated MarTech & <span className={lightThemeColors.textAccent}>Data Ecosystems</span>
            </h2 >
            <p className={`text-xl ${lightThemeColors.textBody} opacity-80 mb-16 max-w-3xl mx-auto`}>
              We architect and optimize your marketing technology stack, ensuring seamless data flow, enhanced automation, and a unified view of your customer across all enterprise touchpoints.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer(0.15)} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "MarTech Stack Audit & Roadmap", desc: "Assessing current tools and designing an optimal future-state architecture."},
              { title: "CRM & CDP Integration Strategy", desc: "Unifying customer data for hyper-personalization and advanced segmentation."},
              { title: "Marketing Automation at Scale", desc: "Implementing and optimizing enterprise-level automation for efficiency and impact."}
            ].map(item => (
              <motion.div 
                variants={fadeInUp} 
                key={item.title} 
                className={`${lightThemeColors.cardBg} p-8 rounded-2xl shadow-xl border ${lightThemeColors.cardBorder} hover:${lightThemeColors.cardHoverBorder} transition-all duration-300`}
                whileHover={cardHoverLight}
              >
                <div className={`bg-slate-100 p-4 inline-block rounded-xl mb-6`}>
                  <Settings2 className={`w-8 h-8 ${lightThemeColors.textAccent}`}/>
                </div>
                <h3 className={`text-2xl font-semibold ${lightThemeColors.textHeader} mb-4`}>{item.title}</h3>
                <p className={`${lightThemeColors.textBody} opacity-90 text-md leading-relaxed`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* --- SECTION 7: Measurable Impact Across BUs (Dark Maroon Theme) --- */}
      <section className={`py-24 ${colors.bgBase}`}>
         <div className="container mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} text-center mb-20`}>
            Measurable Impact <span className={`${colors.textAccent} underline decoration-wavy decoration-sky-500 decoration-2`}>Across Business Units</span>
          </motion.h2>
          <motion.div variants={staggerContainer(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { unit: "Enterprise SaaS Division", metric: "+180% MQL Velocity", image: "/Financial-Services-Portfolio.webp" },
              { unit: "Global Consumer Goods", metric: "2.5x eCommerce Conversion Uplift", image: "/Financial-Services-Portfolio.webp" },
              { unit: "Financial Services Portfolio", metric: "35% Reduction in Cost Per Acquisition", image: "/Financial-Services-Portfolio.webp" }
            ].map(cs => (
              <motion.div 
                variants={fadeInUp} 
                key={cs.unit} 
                className="group rounded-2xl overflow-hidden shadow-2xl relative border-2 border-slate-800 hover:border-sky-400 transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{boxShadow: "0px 25px 40px rgba(14, 165, 233, 0.2)"}} // Sky blue glow
              >
                <img src={cs.image} alt={cs.unit} className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-75 group-hover:brightness-90"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-slate-950/70 to-transparent p-8 flex flex-col justify-end">
                  <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-2 drop-shadow-lg`}>{cs.unit}</h3>
                  <p className={`text-xl ${colors.textAccent} font-semibold drop-shadow-lg`}>{cs.metric}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
           <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-20">
                <Button
                    className={`${colors.buttonPrimaryBg} hover:${colors.buttonPrimaryHoverBg} ${colors.buttonPrimaryText} text-lg font-bold px-12 py-4 rounded-xl transition duration-300 shadow-xl`}
                    onClick={() => router.push('/enterprise-case-studies')}
                >
                    View Enterprise Case Studies
                </Button>
            </motion.div>
        </div>
      </section>

      {/* --- SECTION 9: Enterprise Strategy Health Audit (Dark Maroon Theme) --- */}
      <section className={`py-28 ${colors.bgBase}`}>
         <div className="container mx-auto px-6">
          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={`bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} via-slate-700 p-12 md:p-20 rounded-3xl shadow-2xl text-center border-2 ${colors.borderAccent}`}
          >
            <ShieldCheck className={`w-24 h-24 text-white mx-auto mb-10 opacity-90`}/>
            <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-10`}>Enterprise Strategy <span className={`underline decoration-wavy decoration-sky-300 decoration-2`}>Health Audit</span></h2>
            <p className={`text-xl text-slate-100 mb-14 max-w-3xl mx-auto leading-relaxed`}>
              Is your current digital strategy robust enough for enterprise demands? Our comprehensive audit identifies vulnerabilities, benchmarks against industry leaders, and pinpoints critical optimization opportunities for large-scale impact.
            </p>
            <motion.div whileHover={buttonHover}>
            <Button
              className={`${colors.buttonSecondaryBg} ${colors.buttonSecondaryText} hover:${colors.buttonSecondaryHoverBg} text-lg font-bold px-14 py-4 rounded-xl transition duration-300 shadow-xl transform hover:shadow-sky-500/20`}
              onClick={() => navigateToContact('enterprise-digital-marketing', 'strategy-audit', 'health-audit-cta')}
            >
              Request Enterprise Audit
            </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 10: Bespoke Enterprise Engagement Models (Light Background Theme) --- */}
      <section className={`py-24 ${lightThemeColors.bgSection} ${lightThemeColors.textBody}`}>
        <div className="container mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${lightThemeColors.textHeader} text-center mb-8`}>
            Bespoke <span className={lightThemeColors.textAccent}>Enterprise Engagements</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-xl ${lightThemeColors.textBody} opacity-80 text-center mb-20 max-w-3xl mx-auto`}>
            We understand that enterprise needs are unique. We move beyond standard packages to co-create engagement models that align perfectly with your organizational structure, objectives, and operational cadence.
          </motion.p>
          <motion.div 
            variants={staggerContainer(0.15)} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid lg:grid-cols-3 gap-10 items-stretch"
          >
            {[
              { title: "Strategic Advisory Retainer", desc: "Ongoing access to senior strategists for C-suite counsel, market analysis, and strategic oversight.", icon: <Handshake /> },
              { title: "Full-Scale Strategy & Execution Partnership", desc: "Comprehensive strategy development, implementation, and ongoing optimization across all chosen channels.", icon: <Briefcase /> },
              { title: "Project-Based Strategic Initiatives", desc: "Targeted engagements for specific challenges like new market entry, product launches, or digital transformation projects.", icon: <Lightbulb /> }
            ].map(model => (
              <motion.div 
                variants={fadeInUp} 
                key={model.title} 
                className={`${lightThemeColors.cardBg} p-10 rounded-2xl shadow-xl flex flex-col border ${lightThemeColors.cardBorder} hover:${lightThemeColors.cardHoverBorder} transition-all duration-300`}
                whileHover={cardHoverLight}
              >
                <div className={`p-5 bg-slate-100 inline-block rounded-xl mb-8 self-start`}>
                   {React.cloneElement(model.icon, {className: `w-10 h-10 ${lightThemeColors.textAccent}`})}
                </div>
                <h3 className={`text-2xl font-semibold ${lightThemeColors.textHeader} mb-5`}>{model.title}</h3>
                <p className={`${lightThemeColors.textBody} opacity-90 text-md leading-relaxed mb-8 flex-grow`}>{model.desc}</p>
                <motion.div whileHover={buttonHover} className="w-full">
                <Button
                  className={`w-full mt-auto ${lightThemeColors.buttonPrimaryBg} hover:${lightThemeColors.buttonPrimaryHoverBg} ${lightThemeColors.buttonPrimaryText} font-semibold py-3.5 rounded-xl transition duration-300 text-md`}
                  onClick={() => navigateToContact('enterprise-digital-marketing', 'engagement-model', model.title.toLowerCase().replace(/\s+/g, '-'))}
                >
                  Discuss This Model
                </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* --- SECTION 11: Enterprise Marketing FAQ (Dark Maroon Theme) --- */}
      <section className={`py-24 ${colors.bgBase}`}>
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} text-center mb-16`}>
            Enterprise <span className={`${colors.textAccent} underline decoration-wavy decoration-sky-500 decoration-2`}>Strategy FAQs</span>
          </motion.h2>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            {[
              { q: "How do you handle complex internal stakeholder management?", a: "Our process includes structured stakeholder interviews, collaborative workshops, and clear communication protocols to ensure alignment and buy-in across diverse departments and leadership levels." },
              { q: "Can your strategies integrate with our existing legacy systems?", a: "Yes, a key part of our enterprise audit involves understanding your current tech stack. We design strategies that leverage existing investments where possible and recommend integrations or new technologies where necessary for optimal performance." },
              { q: "What is your approach to budget allocation for large, multi-channel campaigns?", a: "We use a data-driven modeling approach, often incorporating insights from our AI Simulator, to allocate budgets based on potential ROI, market opportunity, and strategic priorities across different channels and business units." },
              { q: "How do you ensure brand consistency across multiple global markets?", a: "We develop a core global brand strategy and then create adaptable frameworks and guidelines that allow for local market nuances while maintaining overall brand integrity and messaging consistency." }
            ].map((faq, i) => (
              <motion.div variants={fadeInUp} key={i}>
                <Accordion type="single" collapsible className={`w-full ${colors.bgCardSolid} rounded-xl shadow-xl border ${colors.borderLight} overflow-hidden`}>
                  <AccordionItem value={`item-${i}`} className="border-b-0">
                    <AccordionTrigger className={`text-left text-lg font-semibold ${colors.textPrimary} hover:text-sky-300 p-8 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-inset transition-colors duration-200`}>
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className={`${colors.textSecondary} p-8 pt-0 leading-relaxed text-md bg-slate-900/40`}>
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 12: Forge Your Enterprise Legacy (Final CTA - Light Background Theme) --- */}
      <section className={`py-28 bg-gradient-to-br from-slate-100 via-white to-sky-50 ${lightThemeColors.textBody}`}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Award className={`w-24 h-24 ${lightThemeColors.textAccent} mx-auto mb-10 opacity-80`}/>
          </motion.div>
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-5xl md:text-7xl font-extrabold ${lightThemeColors.textHeader} mb-10 leading-tight drop-shadow-lg`}>
            Forge Your <span className={`bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-sky-500`}>Enterprise Legacy.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-xl md:text-2xl ${lightThemeColors.textBody} opacity-80 mb-16 max-w-3xl mx-auto leading-relaxed`}>
            The future of enterprise is forged by bold strategies and decisive action. Partner with MarkovWeb to architect a digital marketing framework that not only meets today's challenges but defines tomorrow's market leadership.
          </motion.p>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={buttonHover}>
            <Button
              className={`${lightThemeColors.buttonSecondaryBg} hover:${lightThemeColors.buttonSecondaryHoverBg} ${lightThemeColors.buttonSecondaryText} text-xl font-bold px-16 py-5 rounded-2xl transition duration-300 shadow-2xl transform hover:shadow-sky-500/30`}
              onClick={() => navigateToContact('enterprise-digital-marketing', 'strategy', 'final-enterprise-cta')}
            >
              Secure Your Market Leadership <ArrowRight className="inline-block ml-4 w-7 h-7"/>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* Global CSS (ensure these are in your global styles) */
/*
@keyframes tilt { 0%, 100% { transform: rotate(-1deg); } 50% { transform: rotate(1deg); } }
.animate-tilt { animation: tilt 10s infinite linear alternate; }

@keyframes pulse-slow { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 0.9; transform: scale(1.05); } }
.animate-pulse-slow { animation: pulse-slow 4s infinite ease-in-out; }

@keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
.animate-blob { animation: blob 15s infinite ease-in-out; }
.animation-delay-3000 { animation-delay: -10s; }
.animation-delay-3500 { animation-delay: -11.5s; }


@keyframes bounce-vertical { 0%, 100% { transform: translateY(-25%) rotate(90deg); animation-timing-function: cubic-bezier(0.8,0,1,1); } 50% { transform: translateY(0) rotate(90deg); animation-timing-function: cubic-bezier(0,0,0.2,1); } }
.animate-bounce-vertical { animation: bounce-vertical 1.5s infinite; }

@keyframes spin-slow { to { transform: rotate(360deg); } }
.animate-spin-slow { animation: spin-slow 60s linear infinite; }
*/