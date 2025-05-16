"use client";

import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
    BarChart, PieChart, LineChart, Users, Clock, Activity, Brain, Database, ArrowRight, TrendingUp,
    Search, CheckCircle, ChevronRight, Target, Eye, Lightbulb, Mail, Sparkles, DollarSign, BarChart3,
    Layers, Zap, ShieldCheck, Settings2, Cpu, RefreshCw, UserCheck, BookOpen, SlidersHorizontal, Handshake
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

// Animation Variants (from DigitalMarketingStrategyPage template)
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.9, ease: "circOut" } } };
const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } } };
const staggerContainer = (staggerAmount = 0.2, delayChildren = 0.2) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: staggerAmount, delayChildren: delayChildren } }
});
// Hero Title Animation Variants
const heroTitleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } }
};
const heroTitleWord = {
  hidden: { opacity: 0, y: 30, skewY: 5 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};
const heroSubtitle = {
  hidden: { opacity:0, y:20},
  visible: {opacity:1, y:0, transition: {duration:0.7, delay:1.2, ease:"easeOut"}}
};
const heroCTAs = {
  hidden: { opacity:0, y:20},
  visible: {opacity:1, y:0, transition: {duration:0.7, delay:1.6, ease:"easeOut"}}
};


export default function UserBehaviorAnalyticsPage() {
    const router = useRouter();
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ["start start", "end start"]
    });

    // Hero Parallax/Scroll Effects
    const heroBgPatternY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const heroElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const heroImageOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const heroImageScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

    const navigateToContact = (serviceType: string = 'user-behavior-analytics', service: string = 'general', context?: string) => {
        const url = context
          ? `/contact?type=${serviceType}&service=${service}&context=${context}`
          : `/contact?type=${serviceType}&service=${service}`;
        router.push(url);
    };

    // New Brown/Amber Theme Colors (based on #74512D)
    const colors = {
        bgBase: "bg-stone-950", // Very dark grayish brown
        bgSectionDark: "bg-stone-900",
        bgSectionMedium: "bg-yellow-950", // Darker warm brown
        bgCard: "bg-stone-800/70 backdrop-blur-md",
        bgCardSolid: "bg-stone-800",
        textPrimary: "text-stone-100", // Off-white
        textSecondary: "text-stone-300", // Light gray-brown
        textAccent: "text-amber-400", // Bright warm accent (e.g. #fbbf24)
        highlightStrong: "text-white",
        buttonPrimaryBg: "bg-amber-500", // e.g. #f59e0b
        buttonPrimaryText: "text-stone-900", // Dark text on amber
        buttonPrimaryHoverBg: "bg-amber-600",
        buttonSecondaryBg: "bg-stone-200", // Light beige/gray for buttons on dark bg
        buttonSecondaryText: "text-stone-800",
        buttonSecondaryHoverBg: "bg-stone-300",
        borderLight: "border-stone-700/50",
        borderAccent: "border-amber-500",
        gradientFrom: "from-amber-500",
        gradientTo: "to-yellow-600", // Warm gradient
    };

    const lightThemeColors = {
        bgBase: "bg-stone-50", // Very light cream/beige
        bgSection: "bg-orange-50", // Light peachy cream for sections
        textHeader: "text-yellow-900", // Dark warm brown (close to #74512D)
        textBody: "text-stone-700", // Medium-dark brown/gray
        textAccent: "text-yellow-700", // Accent color (main brown #74512D like)
        buttonPrimaryBg: "bg-yellow-800", // Main brown for buttons
        buttonPrimaryText: "text-white",
        buttonPrimaryHoverBg: "bg-yellow-900",
        buttonSecondaryBg: "bg-stone-800", // Dark brown button on light bg
        buttonSecondaryText: "text-white",
        buttonSecondaryHoverBg: "bg-stone-900",
        cardBg: "bg-white",
        cardBorder: "border-stone-200",
        cardHoverBorder: "border-yellow-700", // Main brown for hover
    };

    // Card hover effects adapted for new theme
    const cardHoverDark = { 
      scale: 1.04, 
      y: -8, 
      boxShadow: "0px 20px 30px rgba(0,0,0,0.25)", // Darker shadow for brown theme
      transition: { type: "spring", stiffness: 280, damping: 12 } 
    };
    const cardHoverLight = { 
      scale: 1.04, 
      y: -8, 
      boxShadow: "0px 20px 30px rgba(116, 81, 45, 0.18)", // Shadow based on #74512D
      transition: { type: "spring", stiffness: 280, damping: 12 } 
    };
    const buttonHover = { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 }};


    return (
        <main className={`font-sans overflow-x-hidden`}>
            {/* 1. Hero Section (Dark Theme) */}
            <section ref={heroRef} className={`relative min-h-screen h-auto md:h-[110vh] flex flex-col justify-center ${colors.bgBase} overflow-hidden py-20 md:py-0`}>
                <motion.div 
                  className="absolute inset-0 z-0"
                  style={{ y: heroBgPatternY }}
                >
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
                    <defs>
                      <pattern id="animatedBrownGrid" patternUnits="userSpaceOnUse" width="80" height="80">
                        <path d="M80 0 L0 0 0 80" fill="none" stroke="rgba(251, 191, 36, 0.2)" strokeWidth="0.5" /> {/* Amber stroke */}
                        <motion.circle cx="40" cy="40" r="1.5" fill="rgba(245, 158, 11, 0.3)" /* Amber fill */
                          animate={{ r: [1.5, 0.5, 1.5], opacity: [0.5, 0.2, 0.5] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#animatedBrownGrid)" />
                  </svg>
                </motion.div>

                <motion.div className={`absolute -top-1/4 -left-1/4 w-1/2 h-1/2 md:w-2/5 md:h-2/5 bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} rounded-full filter blur-3xl opacity-25 animate-blob`} />
                <motion.div className={`absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 md:w-2/5 md:h-2/5 bg-gradient-to-tl from-yellow-700 to-amber-600 rounded-full filter blur-3xl opacity-25 animate-blob animation-delay-3000`} />
                
                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        className="w-full"
                        style={{ y: heroElementsY }}
                        initial="hidden"
                        animate="visible"
                        variants={heroTitleContainer}
                    >
                        <motion.div variants={heroTitleWord} className={`inline-flex items-center gap-2 text-sm font-medium ${colors.textAccent} bg-stone-800/50 border ${colors.borderAccent} px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm shadow-lg`}>
                            <Brain className="w-4 h-4" />
                            <span>MarkovWeb User Behavior Analytics</span>
                        </motion.div>

                        <motion.h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold ${colors.highlightStrong} mb-6 leading-tight`}>
                        { "Understand.".split("").map((char, i) => <motion.span key={`u-${i}`} variants={heroTitleWord} className="inline-block">{char}</motion.span>) }
                        <br className="md:hidden"/>
                        { "Optimize.".split("").map((char, i) => <motion.span key={`o-${i}`} variants={heroTitleWord} className="inline-block">{char}</motion.span>) }
                        <br className="hidden md:inline"/>
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo}`}>
                            { "Convert.".split("").map((char, i) => <motion.span key={`c-${i}`} variants={heroTitleWord} className="inline-block">{char}</motion.span>) }
                        </span>
                        </motion.h1>
                        
                        <motion.p variants={heroSubtitle} className={`text-xl md:text-2xl ${colors.textSecondary} mb-10 max-w-3xl mx-auto`}>
                            Dive deep into user interactions. We decode complex behavioral data to unlock actionable insights, enhance user experience, and drive substantial growth for your digital platforms.
                        </motion.p>

                        <motion.div variants={heroCTAs} className={`max-w-xl mx-auto bg-stone-900/50 backdrop-blur-lg p-6 rounded-xl shadow-2xl border ${colors.borderLight}`}>
                            <p className={`${colors.textPrimary} text-md font-semibold mb-4`}>Ready to see what your users are *really* doing? Get a free preliminary analysis:</p>
                            <form onSubmit={(e) => { e.preventDefault(); navigateToContact('user-behavior-analytics', 'consultation', 'hero-email-submit'); }} className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-grow">
                                    <Mail className={`absolute left-3.5 top-1/2 transform -translate-y-1/2 ${colors.textSecondary} h-5 w-5 opacity-70`} />
                                    <Input
                                        type="email"
                                        name="hero_uba_email"
                                        required
                                        placeholder="Enter your business email"
                                        className={`pl-11 pr-4 py-3.5 bg-stone-800/60 ${colors.textPrimary} text-base border ${colors.borderLight} focus:ring-2 focus:ring-amber-500 focus:border-amber-500 w-full rounded-lg placeholder-stone-400 transition-all duration-300`}
                                    />
                                </div>
                                <motion.div whileHover={buttonHover} className="w-full sm:w-auto">
                                <Button
                                    type="submit"
                                    className={`${colors.buttonPrimaryBg} hover:${colors.buttonPrimaryHoverBg} ${colors.buttonPrimaryText} text-base font-bold px-8 py-3.5 rounded-lg transition duration-300 shadow-lg w-full sm:w-auto whitespace-nowrap`}
                                >
                                    Request Analysis <ArrowRight className="inline-block ml-2 w-5 h-5"/>
                                </Button>
                                </motion.div>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
                
                <motion.div 
                    className="absolute inset-x-0 bottom-0 h-1/3 md:h-1/2 lg:h-2/3 z-0 pointer-events-none"
                    style={{ opacity: heroImageOpacity, scale: heroImageScale, y: heroElementsY }}
                >
                     <BarChart3 // Using a generic analytics icon as placeholder
                        className={`w-full h-full object-contain ${colors.textAccent} opacity-10 animate-pulse-slow`} 
                        strokeWidth={0.5} 
                    />
                </motion.div>
                
                <motion.div 
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                    initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5, duration:1}}
                >
                    <ChevronRight className={`w-8 h-8 ${colors.textSecondary} opacity-50 animate-bounce-vertical transform rotate-90`} />
                </motion.div>
            </section>

            {/* Section 2: Why User Behavior Analytics Matters (Light Theme) */}
            <section className={`py-20 ${lightThemeColors.bgSection} ${lightThemeColors.textBody}`}>
                <div className="container mx-auto px-6 text-center">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl font-bold ${lightThemeColors.textHeader} mb-4`}>
                    Why User Behavior <span className={lightThemeColors.textAccent}>Analytics is Crucial</span>
                </motion.h2>
                <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg ${lightThemeColors.textBody} opacity-80 mb-12 max-w-3xl mx-auto`}>
                    Without understanding user behavior, you're navigating in the dark. UBA illuminates the path to higher conversions and superior user experiences.
                </motion.p>
                <motion.div variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
                    {[
                    { title: "Missed Opportunities", desc: "Businesses not leveraging UBA miss up to 70% of conversion optimization opportunities.", icon: <DollarSign /> },
                    { title: "User Frustration", desc: "Poor UX due to unaddressed friction points leads to 88% of users unlikely to return.", icon: <Target /> }, // Target can represent hitting pain points
                    { title: "Inefficient Spend", desc: "Marketing efforts without UBA insights often misallocate resources, impacting ROI.", icon: <BarChart3 /> }
                    ].map(item => (
                    <motion.div 
                        variants={fadeInUp} 
                        key={item.title} 
                        className={`${lightThemeColors.cardBg} p-8 rounded-xl shadow-xl border ${lightThemeColors.cardBorder} hover:shadow-yellow-700/10 transition-shadow duration-300`} 
                        whileHover={cardHoverLight}
                    >
                        <div className="flex justify-center mb-6">
                            {React.cloneElement(item.icon, {className: `w-12 h-12 ${lightThemeColors.textAccent}`})}
                        </div>
                        <h3 className={`text-2xl font-semibold ${lightThemeColors.textHeader} mb-3`}>{item.title}</h3>
                        <p className={`${lightThemeColors.textBody} opacity-90`}>{item.desc}</p>
                    </motion.div>
                    ))}
                </motion.div>
                </div>
            </section>

            {/* Section 3: What We Track & Analyze (Dark Theme) */}
            <section className={`py-20 ${colors.bgBase}`}>
                <div className="container mx-auto px-6">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl font-bold ${colors.textPrimary} text-center mb-20`}>
                    Unveiling Insights: <span className={`${colors.textAccent} underline decoration-wavy decoration-amber-600`}>What We Analyze</span>
                </motion.h2>
                <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <Activity />, title: "User Journey Mapping", description: "Tracing user paths to identify common routes, drop-off points, and optimization opportunities within your digital ecosystem." },
                        { icon: <Clock />, title: "Engagement & Time Metrics", description: "Measuring time-on-page, session duration, scroll depth, and interaction rates to gauge content effectiveness and user interest." },
                        { icon: <Brain />, title: "Behavioral Patterns & Segmentation", description: "Identifying trends, anomalies, and user segments to understand the drivers behind decisions, preferences, and conversions." }
                    ].map(pillar => (
                    <motion.div 
                        variants={fadeInUp} 
                        key={pillar.title} 
                        className={`${colors.bgCard} p-8 rounded-xl shadow-xl ${colors.borderLight} border-2 transform transition-all duration-300 hover:-translate-y-2`} 
                        whileHover={cardHoverDark}
                    >
                        <div className={`bg-stone-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-inner`}>
                            {React.cloneElement(pillar.icon, {className: `w-8 h-8 ${colors.textAccent}`})}
                        </div>
                        <h3 className={`text-xl font-semibold ${colors.textPrimary} mb-3`}>{pillar.title}</h3>
                        <p className={`${colors.textSecondary} text-sm leading-relaxed`}>{pillar.description}</p>
                    </motion.div>
                    ))}
                </motion.div>
                </div>
            </section>

            {/* Section 4: Our Analytics Process (Light Theme) */}
            <section className={`py-24 ${lightThemeColors.bgBase} ${lightThemeColors.textBody} relative overflow-hidden`}>
                <div className={`absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-amber-100/30 rounded-full filter blur-3xl opacity-70`}></div>
                <div className={`absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-yellow-100/30 rounded-full filter blur-3xl opacity-70`}></div>
                <div className="container mx-auto px-6 relative z-10">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${lightThemeColors.textHeader} text-center mb-6`}>Our Blueprint for User Behavior Mastery</motion.h2>
                <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg ${lightThemeColors.textBody} opacity-80 text-center mb-20 max-w-3xl mx-auto`}>
                    A systematic, data-centric journey to uncover deep user insights and translate them into tangible business growth.
                </motion.p>
                <div className="relative">
                    <motion.div variants={staggerContainer(0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {[
                        { num: "01", title: "Data Collection Setup", desc: "Implementing robust tracking tools (GA4, Hotjar, etc.) to capture comprehensive user interactions.", icon: <Database/>},
                        { num: "02", title: "Processing & Visualization", desc: "Cleaning data and creating intuitive dashboards, heatmaps, and flow diagrams for clarity.", icon: <PieChart/>}, // PieChart for visualization
                        { num: "03", title: "Pattern Analysis", desc: "Identifying key behavioral patterns, trends, and anomalies to uncover actionable insights.", icon: <Search/>},
                        { num: "04", title: "Actionable Recommendations", desc: "Delivering prioritized, data-backed recommendations for UX and conversion improvements.", icon: <Lightbulb/> }
                    ].map((step, index) => (
                        <motion.div 
                            variants={fadeInUp} 
                            key={step.num} 
                            className={`text-center relative flex flex-col items-center p-6 rounded-2xl ${lightThemeColors.cardBg} border ${lightThemeColors.cardBorder} shadow-2xl`}
                            whileHover={cardHoverLight}
                        >
                            <div className={`absolute -top-0.5 -left-0.5 -right-0.5 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            <div className={`w-20 h-20 rounded-full ${lightThemeColors.textAccent}/10 border-2 border-yellow-400 flex items-center justify-center mb-6 shadow-lg relative`}>
                                {React.cloneElement(step.icon, {className: `w-10 h-10 ${lightThemeColors.textAccent}`})}
                                <span className={`absolute -top-3 -right-3 bg-yellow-700 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white`}>{step.num}</span>
                            </div>
                        <h3 className={`text-xl font-semibold ${lightThemeColors.textHeader} mb-3`}>{step.title}</h3>
                        <p className={`${lightThemeColors.textBody} opacity-90 text-sm leading-relaxed`}>{step.desc}</p>
                        {index < 3 && <div className="hidden lg:block absolute top-1/2 right-[-2rem] transform -translate-y-1/2 text-yellow-300 opacity-80"><ChevronRight size={32}/></div>}
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
                </div>
            </section>
            
            {/* Section 5: Tools & Technologies (Dark Theme) */}
            <section className={`py-20 ${colors.bgSectionMedium}`}>
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className={`text-4xl font-bold ${colors.textPrimary} mb-6`}>Powered by <span className={colors.textAccent}>Advanced Analytics Stack</span></h2>
                        <p className={`text-lg ${colors.textSecondary} mb-8`}>
                            We leverage a cutting-edge suite of analytics tools and proprietary methods to ensure deep, accurate, and actionable insights from your user data.
                        </p>
                        <ul className={`space-y-4 ${colors.textSecondary} mb-10`}>
                        {[
                            "Google Analytics 4 (GA4) & Tag Manager",
                            "Heatmapping & Session Recording (e.g., Hotjar, Clarity)",
                            "A/B Testing & Personalization Platforms",
                            "Customer Data Platforms (CDPs) Integration",
                            "Custom Python & R Scripts for Advanced Analysis"
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
                            onClick={() => navigateToContact('user-behavior-analytics', 'tools-inquiry', 'tools-tech-section')}
                        >
                            Learn About Our Tech Stack
                        </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-6">
                        {[
                            {name: "Data Collection", icon: <Database/>}, 
                            {name: "Visualization", icon: <BarChart/>},
                            {name: "Testing & Opt.", icon: <Settings2/>},
                            {name: "Insight Generation", icon: <Cpu/>}
                        ].map(toolCat => (
                        <motion.div variants={fadeInUp} key={toolCat.name} className={`${colors.bgCardSolid} p-8 rounded-xl shadow-xl text-center aspect-square flex flex-col justify-center items-center border ${colors.borderLight} hover:${colors.borderAccent} transition-all duration-300 transform hover:scale-105`}>
                            {React.cloneElement(toolCat.icon, {className: `w-12 h-12 ${colors.textAccent} mb-4`})}
                            <h4 className={`text-lg font-semibold ${colors.textPrimary}`}>{toolCat.name}</h4>
                        </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 6: Client Success Stories (Light Theme) */}
            <section className={`py-24 ${lightThemeColors.bgSection} ${lightThemeColors.textBody}`}>
                <div className="container mx-auto px-6 text-center">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${lightThemeColors.textHeader} mb-8`}>
                    Real Impact: <span className={`bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-amber-600`}>Client Transformations</span>
                </motion.h2>
                <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg ${lightThemeColors.textBody} opacity-80 mb-16 max-w-3xl mx-auto`}>
                    Our user behavior analytics have empowered diverse businesses to achieve remarkable improvements in engagement and conversions.
                </motion.p>
                <motion.div 
                    variants={staggerContainer(0.2)} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    className="grid md:grid-cols-3 gap-8"
                >
                    {[
                        { quote: "The UBA insights helped us redesign our checkout. Conversions jumped 25%!", name: "Olivia Martin", title: "E-commerce Manager, BloomWell", stars: 5, image: "https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80" },
                        { quote: "Understanding user paths on our SaaS platform was eye-opening. We cut onboarding friction by half.", name: "Ethan Kim", title: "Product Lead, TechCore", stars: 5, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80" },
                        { quote: "The heatmaps and session recordings showed exactly where users struggled. A few small tweaks boosted engagement significantly.", name: "Ava Rossi", title: "UX Designer, MediaStream", stars: 5, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80" }
                    ].map(t => (
                    <motion.div 
                        variants={fadeInUp} 
                        key={t.name} 
                        className={`${lightThemeColors.cardBg} p-8 rounded-2xl shadow-xl border ${lightThemeColors.cardBorder} hover:${lightThemeColors.cardHoverBorder} flex flex-col items-center text-center`}
                        whileHover={cardHoverLight}
                    >
                        <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full mb-4 object-cover shadow-md"/>
                        <div className="flex mb-3">
                            {Array.from({ length: t.stars }).map((_, idx) => (
                            <span key={idx} className="text-yellow-400 text-xl">★</span>
                            ))}
                        </div>
                        <p className={`${lightThemeColors.textBody} italic text-md mb-4 flex-1`}>“{t.quote}”</p>
                        <div className="mt-auto">
                            <span className={`font-semibold text-lg ${lightThemeColors.textHeader}`}>{t.name}</span>
                            <div className={`text-sm ${lightThemeColors.textBody} opacity-70`}>{t.title}</div>
                        </div>
                    </motion.div>
                    ))}
                </motion.div>
                </div>
            </section>

            {/* Section 7: Benefits of UBA (Dark Theme) */}
            <section className={`py-24 ${colors.bgSectionDark}`}>
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
                        <ShieldCheck className={`w-20 h-20 ${colors.textAccent} mx-auto mb-8 opacity-80`}/>
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-6`}>Unlock Tangible <span className={colors.textAccent}>Business Advantages</span></h2>
                        <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto`}>
                            User Behavior Analytics isn't just data; it's a direct path to enhanced performance, smarter decisions, and a stronger bottom line.
                        </p>
                    </motion.div>
                    <motion.div 
                        variants={staggerContainer(0.1)} 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true }} 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { title: "Data-Driven Decisions", icon: <Database/>, desc: "Base your strategies on concrete evidence of user actions, not assumptions." },
                            { title: "Friction Point Identification", icon: <Target/>, desc: "Quickly pinpoint and resolve obstacles in user journeys that hinder conversions." },
                            { title: "Conversion Funnel Optimization", icon: <TrendingUp/>, desc: "Systematically improve each step of your funnel for maximum throughput." },
                            { title: "Enhanced User Experience (UX)", icon: <Users/>, desc: "Create more intuitive, satisfying, and effective interactions for your users." },
                            { title: "Increased Conversion Rates", icon: <DollarSign/>, desc: "Directly boost the percentage of visitors who complete desired actions." },
                            { title: "Reduced Bounce Rates", icon: <Activity/>, desc: "Keep users engaged longer by understanding why they leave and fixing it." },
                        ].map((benefit) => (
                        <motion.div 
                            key={benefit.title} 
                            variants={fadeInUp}
                            className={`${colors.bgCard} p-8 rounded-2xl shadow-xl border ${colors.borderLight} flex flex-col items-start`}
                            whileHover={cardHoverDark}
                        >
                            <div className={`p-4 rounded-lg mb-6 bg-stone-900/50 shadow-inner`}>
                            {React.cloneElement(benefit.icon, {className: `w-10 h-10 ${colors.textAccent}`})}
                            </div>
                            <h3 className={`text-xl font-semibold ${colors.textPrimary} mb-3`}>{benefit.title}</h3>
                            <p className={`${colors.textSecondary} text-sm leading-relaxed`}>{benefit.desc}</p>
                        </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 8: Analytics Essentials (Light Theme - Similar to original UBA section, styled like template) */}
             <section className={`py-20 ${lightThemeColors.bgBase} text-gray-800`}>
                <div className="container mx-auto px-6 text-center">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl font-bold ${lightThemeColors.textHeader} mb-4`}>
                    Essentials of Our <span className={lightThemeColors.textAccent}>UBA Service</span>
                </motion.h2>
                <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg ${lightThemeColors.textBody} opacity-80 mb-12 max-w-3xl mx-auto`}>
                    Our approach combines thorough data collection, clear visualization, and a focus on actionable outcomes to ensure you get the most from your analytics.
                </motion.p>
                <motion.div variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Comprehensive Tracking", desc: "We capture every crucial click, scroll, and interaction to build a complete picture of user journeys.", icon: <BarChart /> },
                        { title: "Visual Insights", desc: "Our dashboards and heatmaps make it easy to spot trends, identify friction, and uncover opportunities for growth.", icon: <PieChart /> },
                        { title: "Actionable Outcomes", desc: "You receive clear, prioritized recommendations rooted in data, designed to boost engagement and conversions.", icon: <TrendingUp /> }
                    ].map(item => (
                    <motion.div 
                        variants={fadeInUp} 
                        key={item.title} 
                        className={`${lightThemeColors.cardBg} p-8 rounded-xl shadow-xl border ${lightThemeColors.cardBorder} hover:shadow-yellow-700/10 transition-shadow duration-300`} 
                        whileHover={cardHoverLight}
                    >
                        <div className="flex justify-center mb-6">
                            {React.cloneElement(item.icon, {className: `w-12 h-12 ${lightThemeColors.textAccent}`})}
                        </div>
                        <h3 className={`text-2xl font-semibold ${lightThemeColors.textHeader} mb-3`}>{item.title}</h3>
                        <p className={`${lightThemeColors.textBody} opacity-90`}>{item.desc}</p>
                    </motion.div>
                    ))}
                </motion.div>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-16">
                    <motion.div whileHover={buttonHover}>
                    <Button
                        className={`${lightThemeColors.buttonPrimaryBg} hover:${lightThemeColors.buttonPrimaryHoverBg} ${lightThemeColors.buttonPrimaryText} text-lg font-bold px-10 py-4 rounded-xl transition duration-300 shadow-xl`}
                        onClick={() => navigateToContact('user-behavior-analytics', 'free-assessment', 'essentials-cta')}
                    >
                        Get Your Free Analytics Assessment
                    </Button>
                    </motion.div>
                </motion.div>
                </div>
            </section>

            {/* Section 9: FAQ (Dark Theme) */}
            <section className={`py-20 ${colors.bgBase}`}>
                <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} text-center mb-16`}>
                    Your <span className={`${colors.textAccent} underline decoration-wavy decoration-amber-600 decoration-2`}>Analytics Questions, Answered</span>
                </motion.h2>
                <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
                    {[
                        { q: "How long does it take to see results from UBA?", a: "Initial insights can often be gathered within a few weeks of data collection. Significant improvements depend on implementation speed but typically become evident within 1-3 months." },
                        { q: "What tools do you primarily use for UBA?", a: "We use a suite of tools including Google Analytics 4, Hotjar, Mixpanel, FullStory, and custom data analysis scripts, tailored to project needs." },
                        { q: "Is UBA suitable for small businesses?", a: "Absolutely. Understanding user behavior is vital for businesses of all sizes. We offer scalable solutions to fit different budgets and needs." },
                        { q: "How do you ensure data privacy and compliance?", a: "We adhere strictly to data privacy regulations like GDPR and CCPA, employing anonymization and ethical data handling practices throughout our process." },
                        { q: "What kind of report will I receive?", a: "You'll receive comprehensive reports with visual data, key findings, actionable recommendations prioritized by impact, and clear next steps." }
                    ].map((faq, i) => (
                    <motion.div variants={fadeInUp} key={i}>
                        <Accordion type="single" collapsible className={`w-full ${colors.bgCardSolid} rounded-xl shadow-lg border ${colors.borderLight} overflow-hidden`}>
                        <AccordionItem value={`item-${i}`} className="border-b-0">
                            <AccordionTrigger className={`text-left text-lg font-semibold ${colors.textPrimary} hover:text-amber-300 p-6 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset transition-colors duration-200`}>
                            {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className={`${colors.textSecondary} p-6 pt-0 leading-relaxed text-md bg-stone-900/30`}>
                            {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    </motion.div>
                    ))}
                </motion.div>
                </div>
            </section>

            {/* Section 10: Final CTA (Dark Gradient Theme) */}
            <section className={`py-28 bg-gradient-to-r ${colors.bgSectionMedium} via-yellow-900 to-stone-800 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="finalUbaPattern" patternUnits="userSpaceOnUse" width="60" height="60"><circle cx="15" cy="15" r="1.2" fill={colors.textAccent}/><path d="M0 30 H60 M30 0 V60" stroke={colors.textAccent} strokeWidth="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(#finalUbaPattern)"/></svg>
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-5xl md:text-7xl font-extrabold ${colors.textPrimary} mb-10 leading-tight drop-shadow-xl`}>
                    Unlock Your <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.gradientFrom} to-amber-300`}>Digital Potential.</span>
                </motion.h2>
                <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-xl md:text-2xl ${colors.textSecondary} mb-16 max-w-3xl mx-auto leading-relaxed`}>
                    Stop guessing and start understanding. Partner with MarkovWeb to transform your user behavior data into your most powerful asset for growth and innovation.
                </motion.p>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={buttonHover}>
                    <Button
                    className={`${colors.buttonSecondaryBg} ${colors.buttonSecondaryText} hover:${colors.buttonSecondaryHoverBg} text-xl font-bold px-14 py-5 rounded-2xl transition duration-300 shadow-2xl transform hover:shadow-amber-500/30`}
                    onClick={() => navigateToContact('user-behavior-analytics', 'get-started', 'final-cta')}
                    >
                    Begin Your Analytics Journey <ArrowRight className="inline-block ml-4 w-7 h-7"/>
                    </Button>
                </motion.div>
                </div>
            </section>
        </main>
    );
}

/* 
  Add this to your global CSS (e.g., globals.css or tailwind.config.js theme extensions) 
  if not already present from the DigitalMarketingStrategyPage.
  Most of these keyframes are standard from that template.
*/
/*
@keyframes tilt { 0%, 100% { transform: rotate(-1deg); } 50% { transform: rotate(1deg); } }
.animate-tilt { animation: tilt 10s infinite linear alternate; }

@keyframes pulse-slow { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 0.9; transform: scale(1.05); } }
.animate-pulse-slow { animation: pulse-slow 4s infinite ease-in-out; }

@keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
.animate-blob { animation: blob 15s infinite ease-in-out; }
.animation-delay-3000 { animation-delay: -10s; }


@keyframes bounce-vertical { 0%, 100% { transform: translateY(-25%) rotate(90deg); animation-timing-function: cubic-bezier(0.8,0,1,1); } 50% { transform: translateY(0) rotate(90deg); animation-timing-function: cubic-bezier(0,0,0.2,1); } }
.animate-bounce-vertical { animation: bounce-vertical 1.5s infinite; }
*/