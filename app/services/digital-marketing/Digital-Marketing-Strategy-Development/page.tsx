"use client"

import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Sparkles, Navigation, Compass, Map, ChevronRight, Mail, ArrowRight,
  DollarSign, Target, BarChart3, Brain, Users, Zap, ShieldCheck,
  Search, Layers, CheckCircle, Eye, Share2, Cpu, RefreshCw,
  Settings2, Handshake, BookOpen, UserCheck, Lightbulb,
  SlidersHorizontal
} from 'lucide-react'

// ... (Keep existing router, navigateToContact, animation variants, colors object)

export default function DigitalMarketingStrategyPage() {
  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // --- Hero Parallax/Scroll Effects ---
  const heroBgPatternY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]); // Content moves up faster
  const heroImageOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]); // Image fades out
  const heroImageScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

  const navigateToContact = (serviceType: string = 'digital-marketing', service: string = 'strategy', context?: string) => {
    const url = context
      ? `/contact?type=${serviceType}&service=${service}&context=${context}`
      : `/contact?type=${serviceType}&service=${service}`;
    router.push(url);
  };

  // Animation Variants
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.9, ease: "circOut" } } };
  const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } } };
  const staggerContainer = (staggerAmount = 0.2, delayChildren = 0.2) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: staggerAmount, delayChildren: delayChildren } }
  });
  const cardHover = { 
    scale: 1.04, 
    y: -8, 
    boxShadow: "0px 20px 30px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 280, damping: 12 } 
  };
   const cardHoverLight = { 
    scale: 1.04, 
    y: -8, 
    boxShadow: "0px 20px 30px rgba(124, 58, 237, 0.15)", 
    transition: { type: "spring", stiffness: 280, damping: 12 } 
  };
  const buttonHover = { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 }};
  

  // Enhanced Hero Title Animation
  const heroTitleContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } } // Increased delay for main content
  };
  const heroTitleWord = {
    hidden: { opacity: 0, y: 30, skewY: 5 },
    visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } } // Smoother ease
  };
  const heroSubtitle = {
    hidden: { opacity:0, y:20},
    visible: {opacity:1, y:0, transition: {duration:0.7, delay:1.2, ease:"easeOut"}}
  }
  const heroParagraph = {
    hidden: { opacity:0, y:20},
    visible: {opacity:1, y:0, transition: {duration:0.7, delay:1.4, ease:"easeOut"}}
  }
  const heroCTAs = {
    hidden: { opacity:0, y:20},
    visible: {opacity:1, y:0, transition: {duration:0.7, delay:1.6, ease:"easeOut"}}
  }


  const colors = {
    bgBase: "bg-violet-950",
    bgSectionDark: "bg-violet-900",
    bgSectionMedium: "bg-purple-900", 
    bgSectionLight: "bg-violet-800", 
    bgCard: "bg-violet-800/70 backdrop-blur-md", 
    bgCardSolid: "bg-violet-800", 
    textPrimary: "text-white",
    textSecondary: "text-violet-300", 
    textAccent: "text-purple-400",
    highlightStrong: "text-white",
    buttonPrimaryBg: "bg-purple-600", 
    buttonPrimaryHoverBg: "bg-purple-700",
    buttonSecondaryBg: "bg-white", 
    buttonSecondaryText: "text-purple-700",
    buttonSecondaryHoverBg: "bg-gray-100",
    borderLight: "border-violet-700/50", 
    borderAccent: "border-purple-500",
    gradientFrom: "from-purple-500", // Slightly brighter gradient
    gradientTo: "to-indigo-500",
  };


  return (
    <div className={`font-sans overflow-x-hidden`}> {/* Base bg removed, will alternate */}

      {/* 1. Hero Section - Unique Redesign (Dark Background Theme) */}
      <section ref={heroRef} className={`relative min-h-screen h-auto md:h-[110vh] flex flex-col justify-center ${colors.bgBase} overflow-hidden py-20 md:py-0`}>
        {/* Layer 1: Animated Subtle Background Grid/Pattern */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroBgPatternY }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
            <defs>
              <pattern id="animatedGrid" patternUnits="userSpaceOnUse" width="80" height="80">
                <path d="M80 0 L0 0 0 80" fill="none" stroke="rgba(167, 139, 250, 0.3)" strokeWidth="0.5" />
                <motion.circle cx="40" cy="40" r="1.5" fill="rgba(196, 181, 253, 0.5)"
                  animate={{ r: [1.5, 0.5, 1.5], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animatedGrid)" />
          </svg>
        </motion.div>

        {/* Layer 2: Gradient Orbs - More Dynamic */}
        <motion.div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 md:w-2/5 md:h-2/5 bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} rounded-full filter blur-3xl opacity-30 animate-blob" />
        <motion.div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 md:w-2/5 md:h-2/5 bg-gradient-to-tl from-indigo-600 to-purple-600 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-3000" />
        
        {/* Layer 3: Content Container */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <motion.div 
                className="w-full"
                style={{ y: heroElementsY }} // Parallax for content
                initial="hidden"
                animate="visible"
                variants={heroTitleContainer}
            >
                <motion.div variants={heroTitleWord} className={`inline-flex items-center gap-2 text-sm font-medium ${colors.textAccent} bg-violet-800/50 border ${colors.borderAccent} px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm`}>
                    <Sparkles className="w-4 h-4" />
                    <span>MarkovWeb Strategic Solutions</span>
                </motion.div>

                <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight">
                { "Navigate.".split("").map((char, i) => <motion.span key={`n-${i}`} variants={heroTitleWord} className="inline-block">{char}</motion.span>) }
                <br className="md:hidden"/>
                { "Innovate.".split("").map((char, i) => <motion.span key={`i-${i}`} variants={heroTitleWord} className="inline-block">{char}</motion.span>) }
                <br className="hidden md:inline"/>
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo}`}>
                    { "Dominate.".split("").map((char, i) => <motion.span key={`d-${i}`} variants={heroTitleWord} className="inline-block">{char}</motion.span>) }
                </span>
                </motion.h1>
                
                <motion.p variants={heroSubtitle} className={`text-xl md:text-2xl ${colors.textSecondary} mb-10 max-w-3xl mx-auto`}>
                    We don't just build campaigns; we architect futures. Partner with MarkovWeb to unlock data-driven strategies that transform your digital presence from a cost center into a powerful revenue engine.
                </motion.p>

                <motion.div variants={heroCTAs} className={`max-w-xl mx-auto bg-violet-900/50 backdrop-blur-lg p-6 rounded-xl shadow-2xl border ${colors.borderLight}`}>
                    <p className={`${colors.textPrimary} text-md font-semibold mb-4`}>Ready to chart your course? Get a complimentary strategy outline:</p>
                    <form onSubmit={(e) => { e.preventDefault(); navigateToContact('digital-marketing', 'strategy', 'hero-email-submit'); }} className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-grow">
                            <Mail className={`absolute left-3.5 top-1/2 transform -translate-y-1/2 ${colors.textSecondary} h-5 w-5 opacity-70`} />
                            <Input
                                type="email"
                                name="hero_email"
                                required
                                placeholder="Enter your business email"
                                className={`pl-11 pr-4 py-3.5 bg-violet-800/60 ${colors.textPrimary} text-base border ${colors.borderLight} focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full rounded-lg placeholder-violet-400 transition-all duration-300`}
                            />
                        </div>
                        <motion.div whileHover={buttonHover} className="w-full sm:w-auto">
                        <Button
                            type="submit"
                            className={`${colors.buttonPrimaryBg} hover:${colors.buttonPrimaryHoverBg} ${colors.textPrimary} text-base font-bold px-8 py-3.5 rounded-lg transition duration-300 shadow-lg w-full sm:w-auto whitespace-nowrap`}
                        >
                            Initiate Strategy <ArrowRight className="inline-block ml-2 w-5 h-5"/>
                        </Button>
                        </motion.div>
                    </form>
                </motion.div>
            </motion.div>
        </div>

        {/* Layer 4: Conceptual "Navigational / Constellation" Image - Fades on scroll */}
        <motion.div 
            className="absolute inset-x-0 bottom-0 h-1/3 md:h-1/2 lg:h-2/3 z-0 pointer-events-none"
            style={{ 
                opacity: heroImageOpacity,
                scale: heroImageScale,
                y: heroElementsY // Moves with content but fades faster
            }}
        >
            
        </motion.div>
        
        {/* Scroll Down Indicator (Optional) */}
        <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5, duration:1}}
        >
            <ChevronRight className={`w-8 h-8 ${colors.textSecondary} opacity-50 animate-bounce-vertical transform rotate-90`} />
        </motion.div>
      </section>

      {/* Rest of the sections (2-19) would follow, alternating backgrounds */}
      {/* For brevity, I'll just show the structure for the next section */}

      {/* --- SECTION 2 (Light Background Theme) --- */}
      <section className={`py-20 bg-gray-50 text-gray-800`}>
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl font-bold text-gray-900 mb-4`}>
            Why a <span className="text-purple-600">Precision Strategy</span> is Non-Negotiable
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg text-gray-600 mb-12 max-w-3xl mx-auto`}>
            In today's volatile digital arena, ambiguity is the enemy. A meticulously crafted strategy is your unassailable advantage.
          </motion.p>
          <motion.div variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Resource Drain", desc: "Suboptimal strategies bleed an average of 25% of marketing budgets annually.", icon: <DollarSign className={`w-10 h-10 text-purple-600`} /> },
              { title: "Market Blindness", desc: "Without strategic insight, businesses miss 80% of emerging competitor moves.", icon: <Target className={`w-10 h-10 text-purple-600`} /> },
              { title: "Growth Stagnation", desc: "Directionless efforts correlate with a 60% lower chance of sustained revenue growth.", icon: <BarChart3 className={`w-10 h-10 text-purple-600`} /> }
            ].map(item => (
              <motion.div variants={fadeInUp} key={item.title} className={`bg-white p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-purple-500/10 transition-shadow duration-300`} whileHover={cardHoverLight}>
                <div className="flex justify-center mb-6">{React.cloneElement(item.icon, {className: `w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform`})}</div>
                <h3 className={`text-2xl font-semibold text-gray-900 mb-3`}>{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

       {/* --- SECTION 3 (Dark Background Theme) --- */}
      <section className={`py-20 ${colors.bgBase}`}>
        <div className="container mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl font-bold ${colors.textPrimary} text-center mb-20`}> {/* Increased margin */}
            Pillars of Our <span className={`${colors.textAccent} underline decoration-wavy decoration-purple-600`}>Unwavering Strategy</span>
          </motion.h2>
          <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Predictive Analytics", desc: "Leveraging AI to forecast trends and inform proactive decision-making.", icon: <Brain className={`w-8 h-8 ${colors.textAccent}`} /> },
              { title: "Hyper-Personalization", desc: "Crafting deeply resonant experiences by understanding individual customer journeys.", icon: <Users className={`w-8 h-8 ${colors.textAccent}`} /> },
              { title: "Adaptive Ecosystems", desc: "Building flexible strategies that evolve with market dynamics and consumer behavior.", icon: <Zap className={`w-8 h-8 ${colors.textAccent}`} /> },
              { title: "Resilient Frameworks", desc: "Designing for long-term sustainability and competitive advantage in a shifting digital world.", icon: <ShieldCheck className={`w-8 h-8 ${colors.textAccent}`} /> }
            ].map(pillar => (
              <motion.div variants={fadeInUp} key={pillar.title} className={`${colors.bgCard} p-8 rounded-xl shadow-xl ${colors.borderLight} border-2 transform transition-all duration-300 hover:-translate-y-2`} whileHover={cardHover}>
                <div className={`bg-violet-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-inner`}>{pillar.icon}</div>
                <h3 className={`text-xl font-semibold ${colors.textPrimary} mb-3`}>{pillar.title}</h3>
                <p className={`${colors.textSecondary} text-sm leading-relaxed`}>{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4 (Light Background Theme) --- */}
      <section id="our-blueprint" className={`py-24 bg-white text-gray-800 relative overflow-hidden`}>
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-100/50 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-indigo-100/50 rounded-full filter blur-3xl opacity-70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6`}>Our Blueprint for Your Digital Dominance</motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg text-gray-600 text-center mb-20 max-w-3xl mx-auto`}>
            A meticulously designed, collaborative journey to architect impactful and future-ready digital marketing strategies that deliver tangible results.
          </motion.p>
          <div className="relative">
            <motion.div variants={staggerContainer(0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { num: "01", title: "Immersion & Audit", desc: "Deep dive into your business, market, and existing digital footprint. We listen first.", icon: <Search/>},
                { num: "02", title: "Intelligence Synthesis", desc: "Advanced research and data modeling to uncover critical insights and opportunities.", icon: <Brain/>},
                { num: "03", title: "Architectural Design", desc: "Crafting a bespoke, multi-faceted strategy with precise KPIs and actionable steps.", icon: <Layers/>},
                { num: "04", title: "Dynamic Activation", desc: "Guidance, iterative refinement, and performance-driven evolution for sustained success.", icon: <Zap/> }
              ].map((step, index) => (
                <motion.div variants={fadeInUp} key={step.num} className={`text-center relative flex flex-col items-center p-6 rounded-2xl bg-white border border-gray-200 shadow-2xl`}>
                    <div className="absolute -top-0.5 -left-0.5 -right-0.5 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className={`w-20 h-20 rounded-full bg-purple-50 border-2 border-purple-300 flex items-center justify-center mb-6 shadow-lg relative`}>
                        {React.cloneElement(step.icon, {className: `w-10 h-10 text-purple-600`})}
                        <span className={`absolute -top-3 -right-3 bg-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white`}>{step.num}</span>
                    </div>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-3`}>{step.title}</h3>
                  <p className={`text-gray-600 text-sm leading-relaxed`}>{step.desc}</p>
                   {index < 3 && <div className="hidden lg:block absolute top-1/2 right-[-2rem] transform -translate-y-1/2 text-purple-300 opacity-80"><ChevronRight size={32}/></div>}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* ... Continue alternating for sections 5 through 19 ... */}
      {/* Ensure to adapt styles for light/dark themes for each section */}

       {/* --- SECTION 5 (Dark Background Theme) --- */}
      <section className={`py-20 ${colors.bgBase}`}>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className={`text-4xl font-bold ${colors.textPrimary} mb-6`}>Strategies Engineered for <span className={colors.textAccent}>Your Sector</span></h2>
            <p className={`text-lg ${colors.textSecondary} mb-8`}>
              Generic strategies yield generic results. We specialize in dissecting industry-specific challenges and opportunities—from SaaS to D2C, B2B to regulated markets—to construct strategies that deliver a decisive competitive edge.
            </p>
            <ul className={`space-y-4 ${colors.textSecondary} mb-10`}>
              {[
                "Sector-Specific Competitive Benchmarking",
                "Nuanced Channel & Platform Prioritization",
                "Compliance & Regulatory Intelligence Integration",
                "Industry-Tailored KPI & Measurement Frameworks"
              ].map(item => (
                 <li key={item} className="flex items-start">
                    <CheckCircle className={`w-6 h-6 ${colors.textAccent} mr-3 mt-1 flex-shrink-0`} /> 
                    <span>{item}</span>
                </li>
              ))}
            </ul>
            <motion.div whileHover={buttonHover}>
            <Button
                className={`${colors.buttonSecondaryBg} ${colors.buttonSecondaryText} hover:${colors.buttonSecondaryHoverBg} text-lg font-semibold px-8 py-3 rounded-xl transition duration-300 shadow-md`}
                onClick={() => navigateToContact('digital-marketing', 'strategy', 'industry-solutions')}
              >
                Tailor My Industry Strategy
            </Button>
            </motion.div>
          </motion.div>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-6">
            {["SaaS Acceleration", "eCommerce Velocity", "B2B Pipeline Mastery", "Local Market Dominance"].map(industry => (
              <motion.div variants={fadeInUp} key={industry} className={`${colors.bgCard} p-8 rounded-xl shadow-xl text-center aspect-square flex flex-col justify-center items-center border ${colors.borderLight} hover:${colors.borderAccent} transition-all duration-300 transform hover:scale-105`}>
                <Layers className={`w-12 h-12 ${colors.textAccent} mb-4`}/>
                <h4 className={`text-lg font-semibold ${colors.textPrimary}`}>{industry}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 6 (Light Background Theme) --- */}
      <section className={`py-24 bg-gray-100 text-gray-800`}>
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold text-gray-900 mb-8`}>
            AI-Powered Foresight: <span className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600`}>Your Strategic Co-Pilot</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg text-gray-600 mb-16 max-w-3xl mx-auto`}>
            Our proprietary AI Strategy Simulator™ and advanced analytics platforms don't just analyze the past; they predict the future, allowing you to test, refine, and deploy strategies with unprecedented confidence and precision.
          </motion.p>
          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className={`bg-white p-10 md:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto border-2 border-purple-200 transform hover:scale-[1.02] transition-transform duration-500`}
            >
            <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 text-left">
                    <h3 className={`text-3xl font-semibold text-gray-900 mb-5`}>MarkovWeb AI Simulator™</h3>
                    <p className={`text-gray-700 mb-8 text-md leading-relaxed`}>Simulate market responses, forecast ROI for various scenarios, and de-risk your strategic investments. Turn uncertainty into a calculated advantage with actionable, predictive insights.</p>
                    <motion.div whileHover={buttonHover}>
                    <Button
                        className={`bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-4 rounded-xl transition duration-300 text-lg shadow-lg`}
                        onClick={() => navigateToContact('digital-marketing', 'strategy', 'ai-simulator')}
                        >
                        Explore AI Impact
                    </Button>
                    </motion.div>
                </div>
                <motion.div 
                    className="md:col-span-5 flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                    viewport={{ once: true }}
                >
                    <Brain className={`w-40 h-40 md:w-56 md:h-56 text-purple-500 opacity-80 animate-pulse-slow`}/>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 7 (Dark Background Theme) --- */}
      <section className={`py-24 ${colors.bgBase}`}>
         <div className="container mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} text-center mb-20`}>
            Evidence of <span className={`${colors.textAccent} underline decoration-wavy decoration-purple-600 decoration-2`}>Strategic Transformation</span>
          </motion.h2>
          <motion.div variants={staggerContainer(0.25)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-10">
            {[
              { client: "FinTech Innovators", result: "+320% Qualified Leads", image: "/FinTech-Innovators.webp" },
              { client: "Global D2C Brand", result: "95% ROAS Improvement", image: "/D2C.webp" },
              { client: "B2B SaaS Leader", result: "6-Month Sales Cycle Reduction", image: "/B2B-SaaS-Leader.webp" }
            ].map(cs => (
              <motion.div 
                variants={fadeInUp} 
                key={cs.client} 
                className="group rounded-2xl overflow-hidden shadow-2xl relative border-2 border-violet-800 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{boxShadow: "0px 25px 40px rgba(124, 58, 237, 0.3)"}}
              >
                <img src={cs.image} alt={cs.client} className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 flex flex-col justify-end">
                  <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-1 drop-shadow-md`}>{cs.client}</h3>
                  <p className={`text-xl ${colors.textAccent} font-semibold drop-shadow-md`}>{cs.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
           <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-16">
                <Button
                    className={`${colors.buttonPrimaryBg} hover:${colors.buttonPrimaryHoverBg} text-white text-lg font-semibold px-10 py-3.5 rounded-xl transition duration-300 shadow-lg`}
                    onClick={() => router.push('/case-studies')}
                >
                    Explore All Success Stories
                </Button>
            </motion.div>
        </div>
      </section>

      {/* --- SECTION 9 (Dark Background Theme) --- */}
      <section className={`py-24 ${colors.bgBase}`}>
         <div className="container mx-auto px-6">
          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={`bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} p-10 md:p-16 rounded-3xl shadow-2xl text-center border ${colors.borderAccent}`}
          >
            <Settings2 className={`w-20 h-20 text-white mx-auto mb-8 opacity-90`}/>
            <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-8`}>Blueprint Your <span className={`underline decoration-wavy decoration-purple-300 decoration-2`}>Growth Engine</span></h2>
            <p className={`text-xl text-purple-100 mb-12 max-w-3xl mx-auto`}>
              Curious how a MarkovWeb strategy would look for your unique business? Use our interactive tool to get a preliminary sketch of key focus areas based on your goals and industry.
            </p>
            <motion.div whileHover={buttonHover}>
            <Button
              className={`${colors.buttonSecondaryBg} ${colors.buttonSecondaryText} hover:${colors.buttonSecondaryHoverBg} text-lg font-bold px-12 py-4 rounded-xl transition duration-300 shadow-xl`}
              onClick={() => navigateToContact('digital-marketing', 'strategy', 'interactive-customizer')}
            >
              Customize My Strategy Outline
            </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 10 (Light Background Theme) --- */}
      <section className={`py-20 bg-white text-gray-800`}>
         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Handshake className={`w-24 h-24 text-purple-600 mb-8 opacity-90`}/>
            <h2 className={`text-4xl font-bold text-gray-900 mb-6`}>Your Success, <span className="text-purple-600">Our Shared Journey</span></h2>
            <p className={`text-lg text-gray-700 mb-8 leading-relaxed`}>
              We believe in true partnership. This means complete transparency in our processes, clear communication at every step, and collaborative strategy sessions where your insights are integral to shaping the path forward.
            </p>
            <ul className={`space-y-4 text-gray-700 mb-10`}>
              {[
                "Dedicated Strategy Lead & Regular Progress Huddles",
                "Comprehensive, Understandable Performance Dashboards",
                "Direct Access to Our Knowledge Base & Expert Workshops",
                "Proactive Communication on Market Shifts & Opportunities"
              ].map(item => (
                <li key={item} className="flex items-start">
                    <CheckCircle className={`w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0`} /> 
                    <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className={`bg-violet-50 p-10 rounded-2xl shadow-2xl border border-purple-200`}
            whileHover={cardHoverLight}
            >
              <Users className={`w-12 h-12 text-purple-600 mb-6`}/>
              <h3 className={`text-2xl font-semibold text-gray-900 mb-4`}>From a Valued Partner:</h3>
              <blockquote className="italic text-gray-700 border-l-4 border-purple-500 pl-6 py-3 mb-6 text-lg leading-relaxed">
                "MarkovWeb isn't just a vendor; they're an extension of our core team. Their strategic insights and unwavering commitment to transparent reporting have been absolutely game-changing for our sustained growth trajectory."
              </blockquote>
              <p className={`font-semibold text-gray-900 text-md`}>- Sarah Chen, CMO of Innovatech Solutions</p>
              <p className={`text-gray-600 text-sm`}>Partner Since 2021</p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 11 (Dark Background Theme) --- */}
      <section className={`py-24 ${colors.bgBase}`}>
        <div className="container mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} text-center mb-6`}>
            Strategy Packages <span className={`${colors.textAccent} underline decoration-wavy decoration-purple-600 decoration-2`}>Crafted for Ambition</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg ${colors.textSecondary} text-center mb-20 max-w-3xl mx-auto`}>
            From foundational roadmaps for emerging businesses to comprehensive blueprints for market leaders, find the strategic engagement that aligns with your current needs and future aspirations.
          </motion.p>
          <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-3 gap-10 items-stretch">
            {[
              { name: "Ignite", price: "Foundational", features: ["Market Snapshot Analysis", "Core Audience Definition", "Essential Strategy Outline", "Quick Wins Identification", "Initial 3-Month Roadmap"], ideal: "Startups & Small Businesses" },
              { name: "Accelerate", price: "Growth-Focused", features: ["Comprehensive Digital Audit", "Full-Funnel Conversion Strategy", "Multi-Channel Action Blueprint", "Advanced KPI & Analytics Setup", "In-depth Competitive Edge Analysis", "6-Month Strategic Plan"], ideal: "Scaling Businesses", popular: true },
              { name: "Dominate", price: "Enterprise-Grade", features: ["Bespoke Research & Intelligence Suite", "Advanced Predictive Modeling & AI", "Global or Multi-Market Strategy Design", "Innovation & Market Disruption Planning", "Executive Strategy Council Access", "Annual Strategic Partnership"], ideal: "Market Leaders & Large Corps" }
            ].map(pkg => (
              <motion.div 
                variants={fadeInUp} 
                key={pkg.name} 
                className={`${colors.bgCard} p-8 rounded-3xl shadow-2xl flex flex-col border-2 ${pkg.popular ? colors.borderAccent : colors.borderLight} relative transition-all duration-300`}
                whileHover={cardHover}
              >
                {pkg.popular && <div className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ${colors.buttonPrimaryBg} ${colors.textPrimary} px-5 py-1.5 rounded-full text-sm font-bold shadow-lg`}>Most Popular</div>}
                <h3 className={`text-4xl font-extrabold ${colors.textPrimary} mb-4`}>{pkg.name}</h3>
                <p className={`${colors.textAccent} text-xl font-semibold mb-8`}>{pkg.price} Blueprint</p>
                <ul className={`space-y-3.5 ${colors.textSecondary} mb-10 flex-grow text-sm`}>
                  {pkg.features.map(f => <li key={f} className="flex items-start"><CheckCircle className={`w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0`} /> {f}</li>)}
                </ul>
                <p className={`text-xs text-violet-400 mb-8 uppercase tracking-wider`}>Best for: {pkg.ideal}</p>
                <motion.div whileHover={buttonHover} className="w-full">
                <Button
                  className={`w-full mt-auto ${pkg.popular ? `${colors.buttonPrimaryBg} hover:${colors.buttonPrimaryHoverBg}` : `bg-purple-500 hover:bg-purple-600`} ${colors.textPrimary} font-bold py-3.5 rounded-xl transition duration-300 text-md`}
                  onClick={() => navigateToContact('digital-marketing', 'strategy', `package-${pkg.name.toLowerCase()}`)}
                >
                  Choose {pkg.name} Plan
                </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* --- SECTION 12 (Light Background Theme) --- */}
      <section className={`py-24 bg-gray-50 text-gray-800`}>
        <div className="container mx-auto px-6 text-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <BookOpen className={`w-20 h-20 text-purple-600 mx-auto mb-8 opacity-90`}/>
                <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-8`}>Unlock Strategic <span className={`text-purple-600 underline decoration-wavy decoration-purple-400`}>Wisdom & Insights</span></h2>
                <p className={`text-xl text-gray-600 mb-16 max-w-3xl mx-auto`}>
                    Dive deeper into the world of digital strategy. Explore our latest articles, whitepapers, and case studies crafted by our leading experts to keep you ahead of the curve.
                </p>
            </motion.div>
            <motion.div variants={staggerContainer(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "The Future of AI in Marketing Strategy: A 2025 Outlook", type: "Whitepaper", link: "/resources/ai-strategy-whitepaper" },
                    { title: "Decoding Hyper-Personalization: Beyond Segmentation", type: "Blog Post", link: "/blog/hyper-personalization-decoded" },
                    { title: "Case Study: Revolutionizing D2C Growth with Predictive Analytics", type: "Case Study", link: "/case-studies/d2c-predictive-analytics" }
                ].map(resource => (
                    <motion.div 
                        variants={fadeInUp} 
                        key={resource.title} 
                        className={`bg-white p-8 rounded-xl shadow-xl text-left border border-gray-200 hover:border-purple-400 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1`}
                        whileHover={cardHoverLight}
                    >
                        <div>
                            <span className={`text-xs font-semibold uppercase text-purple-600 mb-3 block tracking-wider`}>{resource.type}</span>
                            <h3 className={`text-xl font-semibold text-gray-900 mb-4 leading-tight`}>{resource.title}</h3>
                        </div>
                        <Link href={resource.link} passHref>
                             <motion.div whileHover={{ x: 5, color: 'text-purple-700' }} className="inline-block">
                                <Button variant="link" className={`text-purple-600 p-0 hover:text-purple-700 text-md font-semibold group`}>
                                    Read More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                                </Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* --- SECTION 13 (Dark Background Theme) --- */}
      <section className={`py-24 ${colors.bgBase}`}>
        <div className="container mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} text-center mb-6`}>
            Anatomy of a <span className={colors.textAccent}>MarkovWeb Strategy</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg ${colors.textSecondary} text-center mb-20 max-w-3xl mx-auto`}>
            Our strategies are comprehensive, multi-layered blueprints designed for maximum impact. Here's a glimpse into the core components that drive success.
          </motion.p>
          <motion.div 
            variants={staggerContainer(0.1)} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Deep Market & Audience Intelligence", icon: <Eye/>, desc: "Exhaustive research into market dynamics, competitor landscapes, and nuanced audience psychographics." },
              { title: "Persona & Journey Architecting", icon: <Users/>, desc: "Crafting detailed buyer personas and mapping intricate customer journeys to identify key touchpoints." },
              { title: "Goal-Oriented KPI Framework", icon: <Target/>, desc: "Defining clear, measurable objectives and the key performance indicators to track progress towards them." },
              { title: "Integrated Channel & Content Matrix", icon: <Share2/>, desc: "Strategic selection and synchronization of digital channels paired with a resonant content strategy." },
              { title: "Technology & Automation Roadmap", icon: <Cpu/>, desc: "Leveraging the right marketing technology stack for efficiency, scale, and data-driven automation." },
              { title: "Performance & Evolution Model", icon: <RefreshCw/>, desc: "A built-in system for continuous monitoring, reporting, and agile adaptation to ensure ongoing relevance and results." },
            ].map((component) => (
              <motion.div 
                key={component.title} 
                variants={fadeInUp}
                className={`${colors.bgCard} p-8 rounded-2xl shadow-xl border ${colors.borderLight} flex flex-col items-start`}
                whileHover={cardHover}
              >
                <div className={`p-4 rounded-lg mb-6 bg-violet-900/50 shadow-inner`}>
                  {React.cloneElement(component.icon, {className: `w-10 h-10 ${colors.textAccent}`})}
                </div>
                <h3 className={`text-xl font-semibold ${colors.textPrimary} mb-3`}>{component.title}</h3>
                <p className={`${colors.textSecondary} text-sm leading-relaxed`}>{component.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 14 (Light Background Theme) --- */}
      <section className={`py-24 bg-violet-50 text-gray-800`}>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative aspect-video lg:aspect-auto lg:h-[550px] rounded-2xl shadow-2xl overflow-hidden group"
          >
             <img 
                src="/Continuous-Evolution.webp" 
                alt="Strategic partnership and evolution"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700/60 via-purple-500/20 to-transparent rounded-2xl"></div> {/* Adjusted gradient for light theme */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <Zap className={`w-16 h-16 text-white mb-4 opacity-90 drop-shadow-lg`}/>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg">Strategy That Breathes & Adapts</h3>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className={`text-4xl font-bold text-gray-900 mb-6`}>Beyond the Initial Blueprint: <span className="text-purple-600">Continuous Evolution</span></h2>
            <p className={`text-lg text-gray-700 mb-8 leading-relaxed`}>
              A MarkovWeb strategy is not a static document; it's the beginning of an evolutionary journey. We partner with you for the long haul, ensuring your strategy remains potent and adaptive in a perpetually shifting digital ecosystem.
            </p>
            <ul className={`space-y-4 text-gray-700 mb-10 text-md`}>
              {[
                { text: "Ongoing Performance Analytics & Insight Reporting", icon: <BarChart3/> },
                { text: "Quarterly Strategic Reviews & Adaptation Workshops", icon: <Lightbulb/> },
                { text: "Proactive Trend-Spotting & Opportunity Seizing", icon: <Eye/> },
                { text: "Access to Dedicated Strategic Advisory", icon: <Handshake/> }
              ].map(item => (
                <li key={item.text} className="flex items-center">
                  {React.cloneElement(item.icon, {className: `w-6 h-6 text-purple-600 mr-4 flex-shrink-0`})}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <motion.div whileHover={buttonHover}>
            <Button
              className={`bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-10 py-3.5 rounded-xl transition duration-300 shadow-lg`}
              onClick={() => navigateToContact('digital-marketing', 'strategy', 'ongoing-partnership')}
            >
              Discuss Long-Term Partnership
            </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 15 (Dark Background Theme) --- */}
      <section className={`py-24 ${colors.bgBase}`}>
        <div className="container mx-auto px-6">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
                <Share2 className={`w-20 h-20 ${colors.textAccent} mx-auto mb-8 opacity-80`}/>
                <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-6`}>Seamless Collaboration, <span className={colors.textAccent}>Shared Vision</span></h2>
                <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto`}>
                    Experience a strategy development process built on transparency, open communication, and true partnership. Your insights are pivotal to our collective success.
                </p>
            </motion.div>
            <motion.div 
                variants={staggerContainer(0.2)} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                className="grid md:grid-cols-3 gap-8"
            >
                {[
                    { title: "Dedicated Point of Contact", desc: "A senior strategist as your consistent guide and partner throughout the journey.", icon: <UserCheck/> }, 
                    { title: "Interactive Workshops", desc: "Collaborative sessions to align on goals, insights, and strategic directions.", icon: <Users/> },
                    { title: "Transparent Progress Tracking", desc: "Regular updates and access to dashboards showing how your strategy is taking shape.", icon: <BarChart3/> }
                ].map(item => (
                    <motion.div 
                        variants={fadeInUp} 
                        key={item.title} 
                        className={`${colors.bgCard} p-8 rounded-2xl shadow-xl border ${colors.borderLight} text-center`}
                        whileHover={cardHover}
                    >
                        <div className={`w-16 h-16 rounded-full bg-violet-900/50 flex items-center justify-center mx-auto mb-6 shadow-inner`}>
                            {React.cloneElement(item.icon, {className: `w-8 h-8 ${colors.textAccent}`})}
                        </div>
                        <h3 className={`text-xl font-semibold ${colors.textPrimary} mb-3`}>{item.title}</h3>
                        <p className={`${colors.textSecondary} text-sm leading-relaxed`}>{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* --- SECTION 16 (Light Background Theme) --- */}
      <section className={`py-24 bg-white text-gray-800`}>
        <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
            <motion.div 
                variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="lg:col-span-2 flex justify-center"
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <Cpu className={`w-full h-full text-purple-200`}/>
                    <motion.div 
                        className={`absolute top-1/2 left-1/2 w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl transform -translate-x-1/2 -translate-y-1/2`}
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0]}}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Lightbulb className="w-12 h-12 text-white"/>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3">
                <h2 className={`text-4xl font-bold text-gray-900 mb-6`}>The <span className="text-purple-600">Intelligence</span> Behind the Strategy</h2>
                <p className={`text-lg text-gray-700 mb-8 leading-relaxed`}>
                    Our strategic recommendations are powered by a sophisticated suite of analytical tools and proprietary technologies. We harness the power of:
                </p>
                <motion.ul variants={staggerContainer(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 text-md">
                    {[
                        "Advanced Web & Audience Analytics Platforms",
                        "AI-Driven Predictive Modeling & Trend Analysis",
                        "Comprehensive Competitive Intelligence Software",
                        "Social Listening & Sentiment Analysis Tools",
                        "Proprietary Data Synthesis Frameworks"
                    ].map(item => (
                        <motion.li variants={fadeInUp} key={item} className={`flex items-center text-gray-700`}>
                            <SlidersHorizontal className={`w-5 h-5 text-purple-600 mr-4 flex-shrink-0`}/> {item}
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.p variants={fadeInUp} className={`mt-8 text-sm text-gray-500`}>
                    *This curated tech stack ensures we uncover deep insights and build strategies with a quantifiable edge.
                </motion.p>
            </motion.div>
        </div>
      </section>

      {/* --- SECTION 17 (Dark Background Theme) --- */}
      <section className={`py-20 ${colors.bgBase}`}>
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} text-center mb-16`}>
            Clearing Your <span className={`${colors.textAccent} underline decoration-wavy decoration-purple-600 decoration-2`}>Strategic Queries</span>
          </motion.h2>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
            {[
              { q: "How quickly can we start strategy development?", a: "We can typically initiate the discovery phase within one week of engagement, ensuring a swift start to your strategic transformation." },
              { q: "What level of involvement is required from my team?", a: "We value collaboration. Key stakeholder input during discovery and review stages is crucial, but we handle the heavy lifting of research and formulation." },
              { q: "Do you work with businesses of all sizes?", a: "Yes, our flexible packages and bespoke approach allow us to effectively serve startups, SMEs, and large enterprises with tailored strategic solutions." },
              { q: "How do you ensure strategies stay relevant in a fast-changing digital world?", a: "Our strategies are built on agile principles, incorporating regular performance reviews, trend monitoring, and proactive adaptation to maintain effectiveness." },
              { q: "What makes your strategy process unique?", a: "It's our synergistic blend of deep data intelligence, human-centric creative thinking, industry-specific acumen, our proprietary AI Simulator, and an unwavering commitment to true partnership." }
            ].map((faq, i) => (
              <motion.div variants={fadeInUp} key={i}>
                <Accordion type="single" collapsible className={`w-full ${colors.bgCardSolid} rounded-xl shadow-lg border ${colors.borderLight} overflow-hidden`}>
                  <AccordionItem value={`item-${i}`} className="border-b-0">
                    <AccordionTrigger className={`text-left text-lg font-semibold ${colors.textPrimary} hover:text-purple-300 p-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset transition-colors duration-200`}>
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className={`${colors.textSecondary} p-6 pt-0 leading-relaxed text-md bg-violet-900/30`}>
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 18 (Light Background Theme) --- */}
       <section className={`py-24 bg-gradient-to-br from-purple-50 via-gray-50 to-indigo-50 text-gray-800`}>
        <div className="container mx-auto px-6">
          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={`max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-purple-200`}
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6`}>Ready for a <span className={`text-purple-600 underline decoration-purple-400 decoration-solid decoration-2`}>Strategic Leap?</span></h2>
            <p className={`text-gray-700 text-center mb-10 text-lg`}>
              Share a few details, and let's start outlining your path to digital excellence with a complimentary, no-obligation strategy assessment.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="assess-name-light" className={`block text-sm font-medium text-gray-700 mb-1.5`}>Your Name</label>
                <Input id="assess-name-light" type="text" placeholder="e.g., Alex Johnson" className={`w-full px-4 py-3.5 rounded-lg text-gray-800 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 shadow-sm`} />
              </div>
              <div>
                <label htmlFor="assess-email-light" className={`block text-sm font-medium text-gray-700 mb-1.5`}>Business Email</label>
                <Input id="assess-email-light" type="email" placeholder="you@company.com" className={`w-full px-4 py-3.5 rounded-lg text-gray-800 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 shadow-sm`} />
              </div>
              <div>
                <label htmlFor="assess-website-light" className={`block text-sm font-medium text-gray-700 mb-1.5`}>Company Website (Optional)</label>
                <Input id="assess-website-light" type="url" placeholder="www.yourcompany.com" className={`w-full px-4 py-3.5 rounded-lg text-gray-800 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 shadow-sm`} />
              </div>
               <div>
                <label htmlFor="assess-challenge-light" className={`block text-sm font-medium text-gray-700 mb-1.5`}>Biggest Strategic Challenge</label>
                <Input id="assess-challenge-light" type="text" placeholder="e.g., Low lead conversion, market saturation" className={`w-full px-4 py-3.5 rounded-lg text-gray-800 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 shadow-sm`} />
              </div>
              <motion.div whileHover={buttonHover} className="pt-3">
              <Button
                type="submit"
                className={`w-full bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-4 rounded-xl transition duration-300 shadow-lg transform hover:shadow-purple-500/30`}
                onClick={(e) => { e.preventDefault(); navigateToContact('digital-marketing', 'strategy', 'assessment-form-submit-light'); }}
              >
                Request My Free Assessment
              </Button>
              </motion.div>
              <p className={`text-xs text-gray-500 text-center`}>No obligation. We respect your privacy and aim to provide actionable insights.</p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 19 (Dark Background Theme) --- */}
      <section className={`py-28 bg-gradient-to-r ${colors.bgSectionMedium} via-purple-800 to-violet-800 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="finalCtaPattern" patternUnits="userSpaceOnUse" width="50" height="50"><circle cx="10" cy="10" r="1" fill="white"/><circle cx="30" cy="30" r="1" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#finalCtaPattern)"/></svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-5xl md:text-7xl font-extrabold ${colors.textPrimary} mb-10 leading-tight drop-shadow-xl`}>
            Elevate Your Brand. <br className="sm:hidden"/><span className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-white`}>Master Your Market.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-xl md:text-2xl ${colors.textSecondary} mb-16 max-w-3xl mx-auto leading-relaxed`}>
            The future of your business is forged by the strategic decisions enacted today. Partner with MarkovWeb to architect a resilient, growth-centric digital presence that commands attention and delivers results.
          </motion.p>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={buttonHover}>
            <Button
              className={`${colors.buttonSecondaryBg} ${colors.buttonSecondaryText} hover:${colors.buttonSecondaryHoverBg} text-xl font-bold px-14 py-5 rounded-2xl transition duration-300 shadow-2xl transform hover:shadow-purple-500/40`}
              onClick={() => navigateToContact('digital-marketing', 'strategy', 'final-cta')}
            >
              Begin My Strategic Transformation <ArrowRight className="inline-block ml-4 w-7 h-7"/>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

/* Add this to your global CSS (e.g., globals.css or tailwind.config.js theme extensions) */
/*
@keyframes tilt {
  0%, 100% { transform: rotate(-1deg); }
  50% { transform: rotate(1deg); }
}
.animate-tilt { animation: tilt 10s infinite linear alternate; }

@keyframes pulse-slow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.05); }
}
.animate-pulse-slow { animation: pulse-slow 4s infinite ease-in-out; }

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob { animation: blob 15s infinite ease-in-out; }
.animation-delay-2000 { animation-delay: -7.5s; } // For second blob, if you have one

@keyframes bounce-vertical {
  0%, 100% { transform: translateY(-25%) rotate(90deg); animation-timing-function: cubic-bezier(0.8,0,1,1); }
  50% { transform: translateY(0) rotate(90deg); animation-timing-function: cubic-bezier(0,0,0.2,1); }
}
.animate-bounce-vertical { animation: bounce-vertical 1.5s infinite; }

*/