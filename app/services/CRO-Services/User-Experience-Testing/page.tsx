"use client";

import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input'; // Assuming you might want a form section
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
    UserPlus, Eye, Target, Users, Monitor, Cpu, MousePointer, ArrowRight,
    ChevronRight, Mail, Sparkles, DollarSign, BarChart3, Brain, Zap, ShieldCheck,
    Search, Layers, CheckCircle, Share2, RefreshCw, Settings2, Handshake, BookOpen, UserCheck, Lightbulb,
    SlidersHorizontal, TrendingUp, PieChart, Activity, Clock // Added more relevant icons from template & original
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

export default function UserExperienceTestingPage() {
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

    const navigateToContact = (serviceType: string = 'ux-testing', service: string = 'general', context?: string) => {
        const url = context
          ? `/contact?type=${serviceType}&service=${service}&context=${context}`
          : `/contact?type=${serviceType}&service=${service}`;
        router.push(url);
    };
    
    // Dark Teal/Cyan Theme Colors (based on #034C53)
    const colors = {
        bgBase: "bg-teal-950", // #0A383A
        bgSectionDark: "bg-teal-900", // #115E59
        bgSectionMedium: "bg-teal-800", // #15807A (Used for gradient in final CTA)
        bgCard: "bg-teal-800/70 backdrop-blur-md border border-teal-700/50",
        bgCardSolid: "bg-teal-800 border border-teal-700",
        textPrimary: "text-teal-50", // #EFFBFA
        textSecondary: "text-teal-200", // #A7F3E8
        textAccent: "text-emerald-400", // #34D399 (Brighter green/teal for accents)
        highlightStrong: "text-white",
        buttonPrimaryBg: "bg-emerald-500", // #10B981
        buttonPrimaryText: "text-teal-950", // #0A383A
        buttonPrimaryHoverBg: "bg-emerald-600", // #059669
        buttonSecondaryBg: "bg-teal-100", // #CCFBF1 (Light teal for buttons on dark background)
        buttonSecondaryText: "text-teal-800", // #15807A
        buttonSecondaryHoverBg: "bg-teal-200", // #A7F3E8
        borderLight: "border-teal-700/50",
        borderAccent: "border-emerald-500",
        gradientFrom: "from-emerald-500",
        gradientTo: "to-teal-500", // #14B8A6
    };

    const lightThemeColors = {
        bgBase: "bg-teal-50", // #EFFBFA (Using this for main light sections)
        bgSection: "bg-white", // Or specific like bg-emerald-50 for variation
        textHeader: "text-teal-900", // #115E59
        textBody: "text-gray-700", // Standard for readability
        textAccent: "text-teal-700", // #0D9488 (Closer to #034C53 but brighter)
        buttonPrimaryBg: "bg-teal-700", // #0D9488
        buttonPrimaryText: "text-white",
        buttonPrimaryHoverBg: "bg-teal-800", // #15807A
        buttonSecondaryBg: "bg-teal-900", // #115E59 (Dark button on light bg)
        buttonSecondaryText: "text-white",
        buttonSecondaryHoverBg: "bg-teal-950", // #0A383A
        cardBg: "bg-white",
        cardBorder: "border-teal-200", // #A7F3E8
        cardHoverBorder: "border-teal-500", // #14B8A6
        gradientTextFrom: "from-teal-600", // For highlighted text on light bg
        gradientTextTo: "to-emerald-600",
    };
    
    // Card hover effects
    const cardHoverDark = { 
      scale: 1.04, 
      y: -8, 
      boxShadow: "0px 20px 30px rgba(0,0,0,0.25)",
      transition: { type: "spring", stiffness: 280, damping: 12 } 
    };
    const cardHoverLight = { 
      scale: 1.04, 
      y: -8, 
      boxShadow: `0px 20px 30px rgba(3, 76, 83, 0.15)`, // Shadow based on #034C53
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
                      <pattern id="animatedTealGrid" patternUnits="userSpaceOnUse" width="80" height="80">
                        <path d="M80 0 L0 0 0 80" fill="none" stroke={colors.textAccent} strokeWidth="0.3" />
                        <motion.circle cx="40" cy="40" r="1.2" fill={colors.textAccent}
                          animate={{ r: [1.2, 0.4, 1.2], opacity: [0.6, 0.2, 0.6] }}
                          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#animatedTealGrid)" />
                  </svg>
                </motion.div>

                <motion.div className={`absolute -top-1/4 -left-1/4 w-1/2 h-1/2 md:w-2/5 md:h-2/5 bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} rounded-full filter blur-3xl opacity-20 animate-blob`} />
                <motion.div className={`absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 md:w-2/5 md:h-2/5 bg-gradient-to-tl from-teal-700 to-emerald-600 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-3000`} />
                
                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        className="w-full"
                        style={{ y: heroElementsY }}
                        initial="hidden"
                        animate="visible"
                        variants={heroTitleContainer}
                    >
                        <motion.div variants={heroTitleWord} className={`inline-flex items-center gap-2 text-sm font-medium ${colors.textAccent} bg-teal-800/50 border ${colors.borderAccent} px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm shadow-lg`}>
                            <UserPlus className="w-4 h-4" />
                            <span>MarkovWeb User Experience Testing</span>
                        </motion.div>

                        <motion.h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold ${colors.highlightStrong} mb-6 leading-tight`}>
                        { "See.".split("").map((char, i) => <motion.span key={`s-${i}`} variants={heroTitleWord} className="inline-block">{char}</motion.span>) }
                        <br className="md:hidden"/>
                        { "Feel.".split("").map((char, i) => <motion.span key={`f-${i}`} variants={heroTitleWord} className="inline-block">{char}</motion.span>) }
                        <br className="hidden md:inline"/>
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo}`}>
                            { "Improve.".split("").map((char, i) => <motion.span key={`i-${i}`} variants={heroTitleWord} className="inline-block">{char}</motion.span>) }
                        </span>
                        </motion.h1>
                        
                        <motion.p variants={heroSubtitle} className={`text-xl md:text-2xl ${colors.textSecondary} mb-10 max-w-3xl mx-auto`}>
                            Unlock unparalleled insights into your users' interactions. Our UX testing services illuminate the path to enhanced usability, satisfaction, and conversion.
                        </motion.p>

                        <motion.div variants={heroCTAs} className={`max-w-xl mx-auto bg-teal-900/50 backdrop-blur-lg p-6 rounded-xl shadow-2xl border ${colors.borderLight}`}>
                            <p className={`${colors.textPrimary} text-md font-semibold mb-4`}>Ready to transform your user experience? Get a complimentary UX audit:</p>
                            <form onSubmit={(e) => { e.preventDefault(); navigateToContact('ux-testing', 'consultation', 'hero-email-submit'); }} className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-grow">
                                    <Mail className={`absolute left-3.5 top-1/2 transform -translate-y-1/2 ${colors.textSecondary} h-5 w-5 opacity-70`} />
                                    <Input
                                        type="email"
                                        name="hero_ux_email"
                                        required
                                        placeholder="Enter your business email"
                                        className={`pl-11 pr-4 py-3.5 bg-teal-800/60 ${colors.textPrimary} text-base border ${colors.borderLight} focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full rounded-lg placeholder-teal-400 transition-all duration-300`}
                                    />
                                </div>
                                <motion.div whileHover={buttonHover} className="w-full sm:w-auto">
                                <Button
                                    type="submit"
                                    className={`${colors.buttonPrimaryBg} hover:${colors.buttonPrimaryHoverBg} ${colors.buttonPrimaryText} text-base font-bold px-8 py-3.5 rounded-lg transition duration-300 shadow-lg w-full sm:w-auto whitespace-nowrap`}
                                >
                                    Request UX Audit <ArrowRight className="inline-block ml-2 w-5 h-5"/>
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
                    <Eye // Conceptual User Eye / Observation
                        className={`w-full h-full object-contain ${colors.textAccent} opacity-5 animate-pulse-slow`} 
                        strokeWidth={0.3} 
                    />
                </motion.div>
                
                <motion.div 
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                    initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5, duration:1}}
                >
                    <ChevronRight className={`w-8 h-8 ${colors.textSecondary} opacity-50 animate-bounce-vertical transform rotate-90`} />
                </motion.div>
            </section>

            {/* Section 2: Elevate Your User Experience (Light Theme - Why UX Testing) */}
            <section className={`py-20 ${lightThemeColors.bgBase} ${lightThemeColors.textBody}`}>
                <div className="container mx-auto px-6 text-center">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl font-bold ${lightThemeColors.textHeader} mb-4`}>
                    Why <span className={lightThemeColors.textAccent}>User Experience Testing</span> is Essential
                </motion.h2>
                <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg ${lightThemeColors.textBody} opacity-80 mb-12 max-w-3xl mx-auto`}>
                    Assumptions are costly. UX testing replaces guesswork with real user data, directly impacting your bottom line and brand perception.
                </motion.p>
                <motion.div variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
                    {[
                    { title: "Reduced Development Waste", desc: "Fixing a problem post-development costs 100x more than fixing it during design. UX testing catches issues early.", icon: <DollarSign /> },
                    { title: "Increased User Satisfaction", desc: "Sites with superior UX see up to a 400% increase in conversion rates and higher user loyalty.", icon: <UserCheck /> },
                    { title: "Lower Support Costs", desc: "Intuitive interfaces reduce user errors and inquiries, significantly lowering customer support overhead.", icon: <Cpu /> } // Cpu for system efficiency
                    ].map(item => (
                    <motion.div 
                        variants={fadeInUp} 
                        key={item.title} 
                        className={`${lightThemeColors.cardBg} p-8 rounded-xl shadow-xl border ${lightThemeColors.cardBorder} hover:shadow-teal-700/10 transition-shadow duration-300`} 
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

            {/* Section 3: Our UX Testing Methods (Dark Theme) */}
            <section className={`py-20 ${colors.bgBase}`}>
                <div className="container mx-auto px-6">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl font-bold ${colors.textPrimary} text-center mb-20`}>
                    Methodologies for <span className={`${colors.textAccent} underline decoration-wavy decoration-emerald-600`}>Comprehensive Insight</span>
                </motion.h2>
                <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <Users />, title: "Moderated Usability Testing", description: "Observing real users interact with your product in real-time, guided by a facilitator to uncover deep qualitative insights." },
                        { icon: <Monitor />, title: "A/B & Multivariate Testing", description: "Comparing different design versions or elements scientifically to determine which performs best against key metrics." },
                        { icon: <MousePointer />, title: "Heatmap & Clickstream Analysis", description: "Visualizing user interactions, scroll depth, and click patterns to understand engagement and identify areas of interest or confusion." }
                    ].map(method => (
                    <motion.div 
                        variants={fadeInUp} 
                        key={method.title} 
                        className={`${colors.bgCard} p-8 rounded-xl shadow-xl ${colors.borderLight} border-2 transform transition-all duration-300 hover:-translate-y-2`} 
                        whileHover={cardHoverDark}
                    >
                        <div className={`bg-teal-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-inner`}>
                            {React.cloneElement(method.icon, {className: `w-8 h-8 ${colors.textAccent}`})}
                        </div>
                        <h3 className={`text-xl font-semibold ${colors.textPrimary} mb-3`}>{method.title}</h3>
                        <p className={`${colors.textSecondary} text-sm leading-relaxed`}>{method.description}</p>
                    </motion.div>
                    ))}
                </motion.div>
                </div>
            </section>

            {/* Section 4: Our UX Testing Process (Light Theme) */}
            <section className={`py-24 ${lightThemeColors.bgBase} ${lightThemeColors.textBody} relative overflow-hidden`}>
                <div className={`absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-emerald-100/30 rounded-full filter blur-3xl opacity-60`}></div>
                <div className={`absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-teal-100/30 rounded-full filter blur-3xl opacity-60`}></div>
                <div className="container mx-auto px-6 relative z-10">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${lightThemeColors.textHeader} text-center mb-6`}>Our Blueprint for UX Excellence</motion.h2>
                <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg ${lightThemeColors.textBody} opacity-80 text-center mb-20 max-w-3xl mx-auto`}>
                    A structured, iterative process designed to deliver actionable insights and measurable improvements to your user experience.
                </motion.p>
                <div className="relative">
                    <motion.div variants={staggerContainer(0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {[
                        { num: "01", title: "Discovery & Planning", desc: "Defining clear objectives, target user personas, and crafting precise test scenarios and scripts.", icon: <Search/>},
                        { num: "02", title: "Participant Recruitment", desc: "Sourcing and screening test participants who accurately represent your target audience.", icon: <UserCheck/>},
                        { num: "03", title: "Testing & Observation", desc: "Executing tests, meticulously observing interactions, and gathering both quantitative and qualitative data.", icon: <Eye/>},
                        { num: "04", title: "Analysis & Reporting", desc: "Synthesizing findings into actionable recommendations, prioritized for impact and feasibility.", icon: <Lightbulb/> }
                    ].map((step, index) => (
                        <motion.div 
                            variants={fadeInUp} 
                            key={step.num} 
                            className={`text-center relative flex flex-col items-center p-6 rounded-2xl ${lightThemeColors.cardBg} border ${lightThemeColors.cardBorder} shadow-2xl`}
                            whileHover={cardHoverLight}
                        >
                            <div className={`absolute -top-0.5 -left-0.5 -right-0.5 h-1.5 bg-gradient-to-r ${lightThemeColors.gradientTextFrom} ${lightThemeColors.gradientTextTo} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            <div className={`w-20 h-20 rounded-full ${lightThemeColors.textAccent}/10 border-2 border-teal-400 flex items-center justify-center mb-6 shadow-lg relative`}>
                                {React.cloneElement(step.icon, {className: `w-10 h-10 ${lightThemeColors.textAccent}`})}
                                <span className={`absolute -top-3 -right-3 bg-teal-700 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white`}>{step.num}</span>
                            </div>
                        <h3 className={`text-xl font-semibold ${lightThemeColors.textHeader} mb-3`}>{step.title}</h3>
                        <p className={`${lightThemeColors.textBody} opacity-90 text-sm leading-relaxed`}>{step.desc}</p>
                        {index < 3 && <div className="hidden lg:block absolute top-1/2 right-[-2rem] transform -translate-y-1/2 text-teal-300 opacity-80"><ChevronRight size={32}/></div>}
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
                </div>
            </section>
            
            {/* Section 5: Benefits of UX Testing (Dark Theme) */}
            <section className={`py-24 ${colors.bgSectionDark}`}>
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
                        <Target className={`w-20 h-20 ${colors.textAccent} mx-auto mb-8 opacity-80`}/>
                        <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-6`}>Key Advantages of <span className={colors.textAccent}>Investing in UX Testing</span></h2>
                        <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto`}>
                            Our UX testing services translate directly into tangible benefits for your business, users, and development processes.
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
                            { title: "Identify Usability Issues Early", icon: <Search/>, desc: "Catch and fix problems before they impact a wider audience or require costly re-developments." },
                            { title: "Improve User Satisfaction", icon: <UserCheck/>, desc: "Create delightful experiences that keep users happy, engaged, and loyal to your brand." },
                            { title: "Increase Conversion Rates", icon: <TrendingUp/>, desc: "Optimize user flows and remove friction to guide more users towards desired actions and goals." },
                            { title: "Reduce Development Costs", icon: <DollarSign/>, desc: "Address issues in the design phase, saving significant time and resources compared to post-launch fixes." },
                            { title: "Gain Deep User Insights", icon: <Brain/>, desc: "Understand not just *what* users do, but *why* they do it, informing broader strategic decisions." },
                            { title: "Data-Driven Design Decisions", icon: <BarChart3/>, desc: "Move beyond assumptions and base your design choices on real user feedback and behavior." },
                        ].map((benefit) => (
                        <motion.div 
                            key={benefit.title} 
                            variants={fadeInUp}
                            className={`${colors.bgCard} p-8 rounded-2xl shadow-xl border ${colors.borderLight} flex flex-col items-start`}
                            whileHover={cardHoverDark}
                        >
                            <div className={`p-4 rounded-lg mb-6 bg-teal-900/50 shadow-inner`}>
                            {React.cloneElement(benefit.icon, {className: `w-10 h-10 ${colors.textAccent}`})}
                            </div>
                            <h3 className={`text-xl font-semibold ${colors.textPrimary} mb-3`}>{benefit.title}</h3>
                            <p className={`${colors.textSecondary} text-sm leading-relaxed`}>{benefit.desc}</p>
                        </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 6: Client Testimonials (Light Theme) */}
            <section className={`py-24 ${lightThemeColors.bgBase} ${lightThemeColors.textBody}`}>
                <div className="container mx-auto px-6 text-center">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${lightThemeColors.textHeader} mb-8`}>
                    Hear From Our <span className={`bg-clip-text text-transparent bg-gradient-to-r ${lightThemeColors.gradientTextFrom} ${lightThemeColors.gradientTextTo}`}>Satisfied Partners</span>
                </motion.h2>
                <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-lg ${lightThemeColors.textBody} opacity-80 mb-16 max-w-3xl mx-auto`}>
                    Discover how our UX testing has helped businesses like yours achieve significant improvements and gain a competitive edge.
                </motion.p>
                <motion.div 
                    variants={staggerContainer(0.2)} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    className="grid md:grid-cols-3 gap-8"
                >
                    {[
                        { quote: "The UX testing process uncovered friction points we never realized existed. Our checkout flow is now seamless!", name: "Liam Turner", title: "Product Manager, QuickCart", stars: 5, image: "https://i.pravatar.cc/150?img=1" },
                        { quote: "We saw a 25% increase in user engagement after implementing the recommended changes from the UX tests.", name: "Sophia Patel", title: "UX Lead, EduPro", stars: 5, image: "https://i.pravatar.cc/150?img=2" },
                        { quote: "The insights from real users were invaluable. Our bounce rate dropped significantly, and task completion soared.", name: "Carlos Rivera", title: "Marketing Director, TravelNow", stars: 5, image: "https://i.pravatar.cc/150?img=3" }
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

            {/* Section 7: UX Testing Essentials (Dark Theme) */}
            <section className={`py-20 ${colors.bgBase}`}>
                <div className="container mx-auto px-6">
                    <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl font-bold ${colors.textPrimary} text-center mb-20`}>
                        Core Tenets of <span className={`${colors.textAccent} underline decoration-wavy decoration-emerald-600`}>Our UX Testing</span>
                    </motion.h2>
                    <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Eye />, title: "Real User Feedback", description: "Gathering authentic insights directly from your target audience to ensure intuitive and frustration-free experiences." },
                            { icon: <Monitor />, title: "Comprehensive Device Testing", description: "Ensuring a consistent and optimal experience across all relevant devices, browsers, and operating systems." },
                            { icon: <Target />, title: "Actionable, Prioritized Recommendations", description: "Delivering clear, impactful improvements, ranked by potential impact and ease of implementation." }
                        ].map(essential => (
                        <motion.div 
                            variants={fadeInUp} 
                            key={essential.title} 
                            className={`${colors.bgCard} p-8 rounded-xl shadow-xl ${colors.borderLight} border-2 text-center flex flex-col items-center`} 
                            whileHover={cardHoverDark}
                        >
                            <div className={`bg-teal-900/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-inner`}>
                                {React.cloneElement(essential.icon, {className: `w-8 h-8 ${colors.textAccent}`})}
                            </div>
                            <h3 className={`text-xl font-semibold ${colors.textPrimary} mb-3`}>{essential.title}</h3>
                            <p className={`${colors.textSecondary} text-sm leading-relaxed`}>{essential.description}</p>
                        </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* Section 8: FAQ (Light Theme) */}
            <section className={`py-20 ${lightThemeColors.bgBase}`}>
                <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${lightThemeColors.textHeader} text-center mb-16`}>
                    Your UX Testing <span className={`${lightThemeColors.textAccent} underline decoration-wavy decoration-teal-500 decoration-2`}>Questions Answered</span>
                </motion.h2>
                <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
                    {[
                        { q: "How many users are typically involved in a usability test?", a: "For qualitative usability testing, 5-8 users per segment can uncover around 85% of usability problems. The exact number depends on project scope and goals." },
                        { q: "What's the difference between moderated and unmoderated testing?", a: "Moderated tests involve a facilitator guiding the user and probing for insights in real-time. Unmoderated tests allow users to complete tasks independently, often providing quicker, broader feedback." },
                        { q: "How long does a typical UX testing project take?", a: "A full cycle, from planning to final report, can range from 2 to 6 weeks, depending on complexity, recruitment, and the number of test iterations." },
                        { q: "Can you test existing products as well as new designs/prototypes?", a: "Absolutely. We test live websites, applications, early-stage prototypes, wireframes, and even concepts to provide feedback at any stage of development." },
                        { q: "What kind of deliverables can I expect?", a: "You'll receive a detailed report including key findings, video highlights (if applicable), severity ratings for issues, user personas, journey maps, and prioritized, actionable recommendations." }
                    ].map((faq, i) => (
                    <motion.div variants={fadeInUp} key={i}>
                        <Accordion type="single" collapsible className={`w-full bg-white rounded-xl shadow-lg border ${lightThemeColors.cardBorder} overflow-hidden`}>
                        <AccordionItem value={`item-${i}`} className="border-b-0">
                            <AccordionTrigger className={`text-left text-lg font-semibold ${lightThemeColors.textHeader} hover:${lightThemeColors.textAccent} p-6 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset transition-colors duration-200`}>
                            {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className={`${lightThemeColors.textBody} opacity-90 p-6 pt-0 leading-relaxed text-md bg-teal-50/50`}>
                            {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    </motion.div>
                    ))}
                </motion.div>
                </div>
            </section>

            {/* Section 9: Free Assessment Form (Light Theme - Gradient Background) */}
            <section className={`py-24 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 ${lightThemeColors.textBody}`}>
                <div className="container mx-auto px-6">
                <motion.div 
                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className={`max-w-3xl mx-auto ${lightThemeColors.cardBg} p-8 md:p-12 rounded-3xl shadow-2xl border-2 ${lightThemeColors.cardBorder}`}
                >
                    <h2 className={`text-3xl md:text-4xl font-bold ${lightThemeColors.textHeader} text-center mb-6`}>Ready for a <span className={`${lightThemeColors.textAccent} underline decoration-teal-500 decoration-solid decoration-2`}>UX Checkup?</span></h2>
                    <p className={`${lightThemeColors.textBody} opacity-90 text-center mb-10 text-lg`}>
                    Share a few details, and let's start outlining how UX testing can elevate your product with a complimentary, no-obligation assessment.
                    </p>
                    <form className="space-y-6">
                    <div>
                        <label htmlFor="assess-name-ux" className={`block text-sm font-medium ${lightThemeColors.textBody} opacity-90 mb-1.5`}>Your Name</label>
                        <Input id="assess-name-ux" type="text" placeholder="e.g., Jamie Riley" className={`w-full px-4 py-3.5 rounded-lg ${lightThemeColors.textBody} bg-teal-50/70 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-500 shadow-sm`} />
                    </div>
                    <div>
                        <label htmlFor="assess-email-ux" className={`block text-sm font-medium ${lightThemeColors.textBody} opacity-90 mb-1.5`}>Business Email</label>
                        <Input id="assess-email-ux" type="email" placeholder="you@company.com" className={`w-full px-4 py-3.5 rounded-lg ${lightThemeColors.textBody} bg-teal-50/70 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-500 shadow-sm`} />
                    </div>
                    <div>
                        <label htmlFor="assess-website-ux" className={`block text-sm font-medium ${lightThemeColors.textBody} opacity-90 mb-1.5`}>Website/App URL (Optional)</label>
                        <Input id="assess-website-ux" type="url" placeholder="www.yourproduct.com" className={`w-full px-4 py-3.5 rounded-lg ${lightThemeColors.textBody} bg-teal-50/70 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-500 shadow-sm`} />
                    </div>
                    <div>
                        <label htmlFor="assess-challenge-ux" className={`block text-sm font-medium ${lightThemeColors.textBody} opacity-90 mb-1.5`}>Primary UX Challenge</label>
                        <Input id="assess-challenge-ux" type="text" placeholder="e.g., High cart abandonment, low feature adoption" className={`w-full px-4 py-3.5 rounded-lg ${lightThemeColors.textBody} bg-teal-50/70 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-500 shadow-sm`} />
                    </div>
                    <motion.div whileHover={buttonHover} className="pt-3">
                    <Button
                        type="submit"
                        className={`w-full ${lightThemeColors.buttonPrimaryBg} hover:${lightThemeColors.buttonPrimaryHoverBg} ${lightThemeColors.buttonPrimaryText} text-lg font-bold py-4 rounded-xl transition duration-300 shadow-lg transform hover:shadow-teal-500/30`}
                        onClick={(e) => { e.preventDefault(); navigateToContact('ux-testing', 'assessment', 'assessment-form-submit'); }}
                    >
                        Request My Free UX Assessment
                    </Button>
                    </motion.div>
                    <p className={`text-xs ${lightThemeColors.textBody} opacity-70 text-center`}>No obligation. We prioritize your privacy and aim to provide actionable preliminary insights.</p>
                    </form>
                </motion.div>
                </div>
            </section>

            {/* Section 10: Final CTA (Dark Theme, Gradient Background) */}
            <section className={`py-28 bg-gradient-to-r ${colors.bgSectionMedium} via-teal-900 to-teal-950 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-15 mix-blend-overlay">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="finalUXPattern" patternUnits="userSpaceOnUse" width="50" height="50"><path d="M0 50L50 0ZM25 25L0 0L50 50Z" stroke={colors.textAccent} strokeWidth="0.2"/><circle cx="25" cy="25" r="0.8" fill={colors.textAccent}/></pattern></defs><rect width="100%" height="100%" fill="url(#finalUXPattern)"/></svg>
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-5xl md:text-7xl font-extrabold ${colors.textPrimary} mb-10 leading-tight drop-shadow-xl`}>
                    Craft Experiences <br className="sm:hidden"/><span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.gradientFrom} to-emerald-300`}>Users Adore.</span>
                </motion.h2>
                <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-xl md:text-2xl ${colors.textSecondary} mb-16 max-w-3xl mx-auto leading-relaxed`}>
                    Elevate your digital product from functional to exceptional. Partner with MarkovWeb to harness the power of user experience testing and build interfaces that captivate, convert, and retain.
                </motion.p>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={buttonHover}>
                    <Button
                    className={`${colors.buttonSecondaryBg} ${colors.buttonSecondaryText} hover:${colors.buttonSecondaryHoverBg} text-xl font-bold px-14 py-5 rounded-2xl transition duration-300 shadow-2xl transform hover:shadow-emerald-500/30`}
                    onClick={() => navigateToContact('ux-testing', 'get-started', 'final-cta')}
                    >
                    Start Optimizing Your UX <ArrowRight className="inline-block ml-4 w-7 h-7"/>
                    </Button>
                </motion.div>
                </div>
            </section>
        </main>
    );
}

/* 
  Add this to your global CSS (e.g., globals.css or tailwind.config.js theme extensions) 
  if not already present from the DigitalMarketingStrategyPage or other similar pages.
*/
/*
@keyframes tilt { 0%, 100% { transform: rotate(-1deg); } 50% { transform: rotate(1deg); } }
.animate-tilt { animation: tilt 10s infinite linear alternate; }

@keyframes pulse-slow { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 0.9; transform: scale(1.05); } }
.animate-pulse-slow { animation: pulse-slow 4s infinite ease-in-out; }

@keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
.animate-blob { animation: blob 15s infinite ease-in-out; }
.animation-delay-3000 { animation-delay: -10s; } // Adjust if needed

@keyframes bounce-vertical { 0%, 100% { transform: translateY(-25%) rotate(90deg); animation-timing-function: cubic-bezier(0.8,0,1,1); } 50% { transform: translateY(0) rotate(90deg); animation-timing-function: cubic-bezier(0,0,0.2,1); } }
.animate-bounce-vertical { animation: bounce-vertical 1.5s infinite; }
*/