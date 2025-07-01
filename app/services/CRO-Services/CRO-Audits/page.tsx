"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { 
    BarChart, Zap, TrendingUp, LineChart, BarChart2, PieChart, ArrowRight, 
    Search, CheckCircle, ChevronRight, Target, Eye, BarChart3, Users, Lightbulb, DollarSign // Added more relevant icons
} from "lucide-react";
import Link from "next/link"; // Keep if direct links are needed, else router.push is primary
import { useRouter } from "next/navigation";
import { motion, circOut, spring } from "framer-motion";

// Animation Variants (from Enterprise theme)
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.9, ease: circOut } } };
const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: circOut } } };
const staggerContainer = (staggerAmount = 0.15, delayChildren = 0.2) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: staggerAmount, delayChildren: delayChildren } }
});
const cardHoverDark = { 
  scale: 1.03, 
  y: -6, 
  boxShadow: "0px 15px 25px rgba(0,0,0,0.3)",
  transition: { stiffness: 300, damping: 15, type: spring }
};
const cardHoverLight = { 
  scale: 1.03, 
  y: -6, 
  boxShadow: "0px 15px 25px rgba(50, 142, 110, 0.18)",
  transition: { stiffness: 300, damping: 15, type: spring }
};
const buttonHover = { scale: 1.05, transition: { stiffness: 350, damping: 12, type: spring }};

export const themeColor = "#328E6E";

export default function CROAuditsPage() {
    const router = useRouter();

    const navigateToContact = (serviceType: string = 'cro-audits', service: string = 'general', context?: string) => {
        const url = context
          ? `/contact?type=${serviceType}&service=${service}&context=${context}`
          : `/contact?type=${serviceType}&service=${service}`;
        router.push(url);
    };

    // New Green Theme Colors (based on #328E6E)
    const colors = {
        bgBase: "bg-teal-950", // Very dark teal
        bgSectionDark: "bg-teal-900",
        bgSectionMedium: "bg-teal-800",
        bgSectionLight: "bg-teal-700",
        bgCard: "bg-teal-800/60 backdrop-blur-lg border border-teal-700/70",
        bgCardSolid: "bg-teal-800 border border-teal-700",
        textPrimary: "text-teal-50", // Off-white/very light teal
        textSecondary: "text-teal-200",
        textAccent: "text-emerald-400", // Brighter, complementary green/teal
        highlightStrong: "text-white",
        buttonPrimaryBg: "bg-emerald-500",
        buttonPrimaryText: "text-teal-950",
        buttonPrimaryHoverBg: "bg-emerald-600",
        buttonSecondaryBg: "bg-teal-100", // Light teal for secondary on dark
        buttonSecondaryText: "text-teal-800",
        buttonSecondaryHoverBg: "bg-teal-200",
        borderLight: "border-teal-700/50",
        borderAccent: "border-emerald-500",
        gradientFrom: "from-teal-600",
        gradientTo: "to-emerald-500",
    };

    const lightThemeColors = {
        bgBase: "bg-white",
        bgSection: "bg-teal-50", // Very light teal
        textHeader: "text-teal-800", // Dark teal
        textBody: "text-gray-700", // Standard gray for readability
        textAccent: "text-teal-600", // Main theme color #328E6E equivalent
        buttonPrimaryBg: "bg-teal-700",
        buttonPrimaryText: "text-white",
        buttonPrimaryHoverBg: "bg-teal-800",
        buttonSecondaryBg: "bg-teal-900", // Dark teal button on light
        buttonSecondaryText: "text-white",
        buttonSecondaryHoverBg: "bg-teal-950",
        cardBg: "bg-white",
        cardBorder: "border-teal-200",
        cardHoverBorder: "border-teal-500", // Main theme color for hover border
    };

    return (
        <main className={`flex flex-col min-h-screen overflow-x-hidden font-sans`}>
            {/* Hero Section (Dark Theme) */}
            <section className={`relative min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center ${colors.bgBase} overflow-hidden py-24 md:py-0`}>
                <motion.div 
                  className="absolute inset-0 z-0 opacity-5" // Subtle background pattern
                >
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="croHeroGrid" patternUnits="userSpaceOnUse" width="60" height="60">
                            <circle cx="30" cy="30" r="0.7" fill={colors.textSecondary} />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#croHeroGrid)" />
                  </svg>
                </motion.div>
                
                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        className="w-full"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer(0.08, 0.3)}
                    >
                        <motion.div variants={fadeInUp} className={`inline-flex items-center gap-2.5 text-sm font-semibold ${colors.textAccent} bg-teal-800/70 border ${colors.borderAccent} px-5 py-2.5 rounded-full mb-10 backdrop-blur-md shadow-xl`}>
                            <Target className="w-4.5 h-4.5" />
                            <span>Conversion Rate Optimization Audits</span>
                        </motion.div>

                        <motion.h1 
                            variants={fadeInUp} 
                            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold ${colors.highlightStrong} mb-8 leading-tight tracking-tight`}
                        >
                            Unlock Your Website's <br/>
                            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} via-emerald-400`}>
                                Full Conversion Potential
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            variants={fadeInUp}
                            className={`text-lg md:text-xl ${colors.textSecondary} mb-12 max-w-3xl mx-auto leading-relaxed`}
                        >
                            Uncover hidden bottlenecks and actionable opportunities with our comprehensive CRO audits, designed to significantly boost your website's performance and ROI.
                        </motion.p>

                        <motion.div 
                            variants={fadeInUp}
                            whileHover={buttonHover}
                        >
                        <Button
                            onClick={() => navigateToContact('cro-audits', 'consultation', 'hero-cta')}
                            className={`${colors.buttonPrimaryBg} hover:${colors.buttonPrimaryHoverBg} ${colors.buttonPrimaryText} text-lg font-bold px-10 py-4 rounded-xl transition duration-300 shadow-2xl`}
                        >
                            Get a Free CRO Audit Consultation <ArrowRight className="inline-block ml-2.5 w-5 h-5"/>
                        </Button>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div 
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                    initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2, duration:1}}
                >
                    <ChevronRight className={`w-8 h-8 ${colors.textSecondary} opacity-30 animate-bounce-vertical transform rotate-90`} />
                </motion.div>
            </section>

            {/* Section 1: Improve Your Website's Conversion Rates (Light Theme) */}
            <section className={`py-20 md:py-28 ${lightThemeColors.bgSection}`}>
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0.2)}
                        className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
                    >
                        {/* Left Content */}
                        <motion.div variants={fadeInUp}>
                            <h2 className={`text-3xl md:text-4xl font-bold ${lightThemeColors.textHeader} mb-8`}>Improve Your Website's Conversion Rates</h2>
                            <p className={`${lightThemeColors.textBody} text-lg mb-6 leading-relaxed`}>
                                Our CRO audit process delivers actionable insights to help you identify and fix conversion bottlenecks. We analyze your website's performance metrics, user behavior, and design elements to uncover optimization opportunities.
                            </p>
                            <p className={`${lightThemeColors.textBody} text-lg mb-10 leading-relaxed`}>
                                With our data-driven approach, we help you make informed decisions that lead to higher conversion rates, better ROI, and improved user experience.
                            </p>
                            <motion.div whileHover={buttonHover}>
                            <Button 
                                onClick={() => navigateToContact('cro-audits', 'free-consultation', 'improve-rates-cta')}
                                className={`${lightThemeColors.buttonPrimaryBg} hover:${lightThemeColors.buttonPrimaryHoverBg} ${lightThemeColors.buttonPrimaryText} text-md font-semibold px-8 py-3.5 rounded-lg shadow-lg transition-all`}
                            >
                                Schedule a Free Consultation
                            </Button>
                            </motion.div>
                        </motion.div>
                        {/* Right: Adapted Illustration */}
                        <motion.div variants={fadeInUp} className="flex justify-center items-center mt-10 md:mt-0">
                            <div className={`w-full max-w-md h-72 ${lightThemeColors.textAccent}/10 p-6 rounded-xl flex items-center justify-center relative shadow-lg border-2 border-teal-200/50`}>
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <motion.div 
                                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, type: spring, stiffness: 150 }}
                                        className={`absolute -top-10 -left-10 w-28 h-28 rounded-full ${lightThemeColors.textAccent}/20 flex items-center justify-center backdrop-blur-sm border border-teal-300/50`}>
                                        <BarChart className={`w-12 h-12 ${lightThemeColors.textAccent}`} />
                                    </motion.div>
                                    <motion.div 
                                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.7, type: spring, stiffness: 150 }}
                                        className={`w-56 h-40 ${lightThemeColors.cardBg} rounded-lg shadow-2xl p-5 flex flex-col justify-between border ${lightThemeColors.cardBorder}`}>
                                        <div className="flex justify-between items-center">
                                            <div className={`${lightThemeColors.textAccent} font-bold text-md`}>Conversion Rate</div>
                                            <TrendingUp className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div className={`text-4xl font-bold ${lightThemeColors.textAccent}`}>+47%</div>
                                        <div className={`text-sm ${lightThemeColors.textBody} opacity-80`}>After optimization</div>
                                    </motion.div>
                                    <motion.div 
                                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.9, type: spring, stiffness: 150 }}
                                        className={`absolute -bottom-10 -right-10 w-28 h-28 rounded-full ${lightThemeColors.textAccent}/20 flex items-center justify-center backdrop-blur-sm border border-teal-300/50`}>
                                        <Zap className={`w-12 h-12 ${lightThemeColors.textAccent}`} />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Our CRO Audit Process (Dark Theme) */}
            <section className={`py-20 md:py-28 ${colors.bgSectionDark}`}>
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center ${colors.textPrimary} mb-16 md:mb-20`}
                    >
                        Our <span className={`${colors.textAccent} decoration-emerald-500/70`}>CRO Audit Process</span>
                    </motion.h2>
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.2)}
                        className="grid md:grid-cols-3 gap-8 md:gap-10"
                    >
                        {[
                            { icon: <LineChart />, title: "Data Analysis & Discovery", description: "We dive deep into your website's analytics, heatmaps, and user recordings to understand behavior patterns and pinpoint critical issues." },
                            { icon: <BarChart3 />, title: "Conversion Funnel Review", description: "We meticulously examine your entire conversion funnel to identify drop-off points and recommend improvements for a seamless user journey." },
                            { icon: <Lightbulb />, title: "Actionable Recommendations", description: "You receive clear, prioritized recommendations based on potential impact and ease of implementation, empowering you to act decisively." }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeInUp}
                                className={`${colors.bgCard} p-8 rounded-xl shadow-2xl text-center flex flex-col items-center hover:shadow-emerald-500/20 transition-all duration-300`}
                                whileHover={cardHoverDark}
                            >
                                <div className={`mb-6 p-5 bg-teal-700 rounded-full shadow-lg inline-block`}>
                                    {React.cloneElement(item.icon, {className: `w-10 h-10 ${colors.textAccent}`})}
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${colors.textPrimary}`}>{item.title}</h3>
                                <p className={`${colors.textSecondary} leading-relaxed`}>{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Benefits of CRO Audits (Light Theme) */}
            <section className={`py-20 md:py-28 ${lightThemeColors.bgSection}`}>
                <div className="container mx-auto px-6 max-w-6xl">
                     <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center ${lightThemeColors.textHeader} mb-16 md:mb-20`}
                    >
                        Key Benefits of Our <span className={lightThemeColors.textAccent}>CRO Audits</span>
                    </motion.h2>
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.15)}
                        className="grid md:grid-cols-2 gap-6 md:gap-8"
                    >
                        {[
                            "Identify crucial conversion barriers and bottlenecks",
                            "Improve user experience and overall satisfaction",
                            "Significantly increase conversion rates and ROI",
                            "Reduce customer acquisition costs effectively",
                            "Make data-driven design and strategy decisions",
                            "Prioritize website improvements for maximum impact"
                        ].map((benefit, index) => (
                            <motion.div 
                                variants={fadeInUp} 
                                key={index} 
                                className={`flex items-start p-5 rounded-xl ${lightThemeColors.cardBg} border ${lightThemeColors.cardBorder} shadow-lg hover:${lightThemeColors.cardHoverBorder} transition-all duration-300`}
                                whileHover={cardHoverLight}
                            >
                                <div className={`mr-4 flex-shrink-0 mt-1 bg-teal-600 rounded-full p-1.5 shadow-md`}>
                                    <CheckCircle className={`w-5 h-5 text-white`} />
                                </div>
                                <span className={`${lightThemeColors.textHeader} text-lg font-medium`}>{benefit}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* Section 4: Industry Expertise (Dark Theme) */}
            <section className={`py-20 md:py-28 ${colors.bgSectionMedium}`}>
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center ${colors.textPrimary} mb-16 md:mb-20`}
                    >
                       Tailored Audits Across <span className={`${colors.textAccent} underline decoration-wavy decoration-emerald-500/70`}>Key Industries</span>
                    </motion.h2>
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.2)}
                        className="grid md:grid-cols-3 gap-8 md:gap-10"
                    >
                        {[
                            { title: "E-Commerce", desc: "Boost online sales and reduce cart abandonment with specialized CRO audits for e-commerce platforms.", icon: <DollarSign/> },
                            { title: "SaaS & Tech", desc: "Optimize user onboarding, trial-to-paid conversions, and subscription flows for technology companies.", icon: <Zap/> },
                            { title: "Lead Generation", desc: "Increase qualified leads and enhance form conversion rates for B2B and service-based businesses.", icon: <Users/> }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                variants={fadeInUp}
                                className={`${colors.bgCardSolid} p-8 rounded-xl shadow-2xl text-center flex flex-col items-center border-2 ${colors.borderLight} hover:border-emerald-400 transition-all duration-300`}
                                whileHover={cardHoverDark}
                            >
                                <div className={`mb-6 p-5 bg-teal-900 rounded-full shadow-lg inline-block border border-teal-700`}>
                                    {React.cloneElement(item.icon, {className: `w-10 h-10 ${colors.textAccent}`})}
                                </div>
                                <h3 className={`text-xl font-bold text-${colors.textPrimary} mb-3`}>{item.title}</h3>
                                <p className={`${colors.textSecondary} leading-relaxed`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 5: Why Choose Us (Light Theme) */}
             <section className={`py-20 md:py-28 ${lightThemeColors.bgSection}`}>
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center ${lightThemeColors.textHeader} mb-16 md:mb-20`}
                    >
                        Why Choose Our <span className={lightThemeColors.textAccent}>CRO Audit Services?</span>
                    </motion.h2>
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.2)}
                        className="grid md:grid-cols-3 gap-8 md:gap-10"
                    >
                        {[
                            { icon: <BarChart2 />, title: "Data-Driven Approach", desc: "We leverage advanced analytics and proven methodologies to deliver insights that translate into measurable results." },
                            { icon: <Eye />, title: "Transparent Reporting", desc: "You receive comprehensive, easy-to-understand reports with clear, prioritized recommendations and ongoing support." },
                            { icon: <TrendingUp />, title: "Proven Track Record", desc: "Our expert audits have consistently helped diverse brands achieve significant, double-digit conversion growth." }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                variants={fadeInUp}
                                className={`${lightThemeColors.cardBg} p-8 rounded-xl shadow-xl text-center flex flex-col items-center border ${lightThemeColors.cardBorder} hover:${lightThemeColors.cardHoverBorder} transition-all duration-300`}
                                whileHover={cardHoverLight}
                            >
                                <div className={`mb-6 p-5 bg-teal-100 rounded-full shadow-md inline-block`}>
                                   {React.cloneElement(item.icon, {className: `w-10 h-10 ${lightThemeColors.textAccent}`})}
                                </div>
                                <h3 className={`text-xl font-bold ${lightThemeColors.textHeader} mb-3`}>{item.title}</h3>
                                <p className={`${lightThemeColors.textBody} leading-relaxed`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 6: What Our Clients Say (Dark Theme - using bgBase for contrast) */}
            <section className={`py-20 md:py-28 ${colors.bgBase}`}>
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.h2 
                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className={`text-3xl md:text-4xl font-bold text-center ${colors.textPrimary} mb-6`}
                >
                  Hear From Our <span className={colors.textAccent}>Satisfied Clients</span>
                </motion.h2>
                <motion.p 
                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className={`text-center ${colors.textSecondary} text-lg mb-16 md:mb-20`}
                >
                  Discover how our CRO audits have empowered businesses to boost conversions and achieve remarkable ROI.
                </motion.p>
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.2)}
                    className="grid md:grid-cols-3 gap-8"
                >
                  {[
                    { quote: "The CRO audit from MarkovWeb was a game-changer. They pinpointed issues we'd overlooked for months. Our conversion rate soared by 30%!", name: "Emily Carter", title: "Head of Marketing, ShopEase", stars: 5 },
                    { quote: "MarkovWeb's team provided exceptionally clear and actionable insights. The audit paid for itself within the first few weeks. Truly impressive.", name: "James Lee", title: "E-Commerce Director, TechNest", stars: 5 },
                    { quote: "We saw a significant drop in cart abandonment and a much smoother user journey after implementing their recommendations. Highly recommended!", name: "Priya Singh", title: "Growth Manager, HomeStyle", stars: 5 }
                  ].map((t, i) => (
                    <motion.div 
                        key={i} 
                        variants={fadeInUp}
                        className={`${colors.bgCardSolid} p-8 rounded-xl shadow-2xl flex flex-col h-full border-2 ${colors.borderLight} hover:border-emerald-400 transition-all duration-300`}
                        whileHover={cardHoverDark}
                    >
                      <div className="flex mb-3">
                        {Array.from({ length: t.stars }).map((_, idx) => (
                          <span key={idx} className="text-yellow-400 text-2xl">★</span>
                        ))}
                      </div>
                      <p className={`${colors.textSecondary} italic text-md mb-6 flex-1`}>"{t.quote}"</p>
                      <div className="mt-auto pt-4 border-t ${colors.borderLight}">
                        <span className={`font-semibold text-lg ${colors.textPrimary}`}>{t.name}</span>
                        <div className={`text-sm ${colors.textSecondary} opacity-80`}>{t.title}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Section 7: CRO Audit Essentials (Light Theme) */}
            <section className={`py-20 md:py-28 ${lightThemeColors.bgSection}`}>
              <div className="container mx-auto px-6 max-w-6xl">
                <motion.h2 
                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className={`text-3xl md:text-4xl font-bold text-center ${lightThemeColors.textHeader} mb-16 md:mb-20`}
                >
                  The Essentials of a <span className={lightThemeColors.textAccent}>Successful CRO Audit</span>
                </motion.h2>
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.2)}
                    className="grid md:grid-cols-3 gap-8 md:gap-10"
                >
                  {[
                    {icon: <BarChart3/>, title: "Comprehensive Data Review", desc: "We meticulously analyze all key metrics, from bounce rates to funnel drop-offs, to uncover hidden opportunities and patterns."},
                    {icon: <Users/>, title: "User-Centric Approach", desc: "Our audits are deeply rooted in understanding real user behavior, ensuring recommendations are practical, empathetic, and impactful."},
                    {icon: <TrendingUp/>, title: "Actionable Roadmap", desc: "You receive a clear, prioritized action plan, detailing exactly what to do next for maximum ROI and sustainable growth."}
                  ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        variants={fadeInUp}
                        className={`${lightThemeColors.cardBg} p-8 rounded-xl shadow-xl flex flex-col items-center text-center border ${lightThemeColors.cardBorder} hover:${lightThemeColors.cardHoverBorder} transition-all duration-300`}
                        whileHover={cardHoverLight}
                    >
                        <div className={`mb-6 p-5 bg-teal-100 rounded-full shadow-md inline-block`}>
                           {React.cloneElement(item.icon, {className: `w-10 h-10 ${lightThemeColors.textAccent}`})}
                        </div>
                        <h3 className={`text-xl font-bold ${lightThemeColors.textHeader} mb-3`}>{item.title}</h3>
                        <p className={`${lightThemeColors.textBody} leading-relaxed`}>{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div 
                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="text-center mt-16 md:mt-20"
                >
                  <motion.div whileHover={buttonHover}>
                  <Button
                    className={`${lightThemeColors.buttonPrimaryBg} hover:${lightThemeColors.buttonPrimaryHoverBg} ${lightThemeColors.buttonPrimaryText} text-lg font-bold px-10 py-4 rounded-xl transition duration-300 shadow-xl`}
                    onClick={() => navigateToContact('cro-audits', 'free-assessment', 'essentials-cta')}
                  >
                    Get Your Free CRO Audit Assessment
                  </Button>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Final CTA Section (Dark Gradient Theme) */}
            <section className={`py-20 md:py-28 bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} via-teal-700`}>
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${colors.highlightStrong} mb-8`}
                    >
                        Ready to Improve Your Conversion Rates?
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textPrimary} text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90`}
                    >
                        Partner with us for a comprehensive CRO audit and start turning more of your website visitors into loyal customers today.
                    </motion.p>
                    <motion.div 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        whileHover={buttonHover}
                    >
                    <Button 
                        onClick={() => navigateToContact('cro-audits', 'get-started', 'final-cta')}
                        className={`${colors.buttonSecondaryBg} ${colors.buttonSecondaryText} hover:${colors.buttonSecondaryHoverBg} text-lg font-bold px-12 py-4 rounded-xl transition-all duration-300 shadow-2xl transform hover:shadow-teal-300/30`}
                    >
                        Get Started Now
                    </Button>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

/* 
  Ensure these animations are in your global CSS if they are not already 
  from the EnterpriseDigitalMarketingPage's setup.
  If they are already global, you don't need to add them again.
*/
/*
@keyframes bounce-vertical { 
  0%, 100% { transform: translateY(-25%) rotate(90deg); animation-timing-function: cubic-bezier(0.8,0,1,1); } 
  50% { transform: translateY(0) rotate(90deg); animation-timing-function: cubic-bezier(0,0,0.2,1); } 
}
.animate-bounce-vertical { animation: bounce-vertical 1.5s infinite; }
*/