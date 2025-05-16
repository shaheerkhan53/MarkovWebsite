"use client";

import React, { useState, useEffect, useRef } from 'react';
// import { Metadata } from 'next'; // Metadata is usually defined in page.tsx or layout.tsx in App Router
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Added for consistency if used in forms
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'; // For potential FAQ section
import { 
    MapPin, BarChart3, CheckCircle, Zap, Globe2, FileText, Mail, Users, ArrowRight, 
    Search, Target, Award, Briefcase, Building, DollarSign, Eye, Edit3, Lightbulb,
    TrendingUp, ShieldCheck, MessageSquare, Users2, Settings2, Star, Check
} from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Define the new color palette
const colors = {
    primary: "#626F47",        // Main green
    primaryDark: "#4F5A3A",    // Darker green for hovers, deep accents
    primaryLight: "#7E8C5E",   // Lighter green for highlights
    primaryLightest: "#A5B08A", // Even lighter green

    bgBase: "bg-white", 
    bgLight: "bg-[#F7F9F5]", // Very light off-white/greenish tint
    bgMedium: "bg-[#E9EDEB]", // Light gray-green
    bgDarkSection: "bg-[#F0F3EE]", // A slightly darker green-tinted bg for sections

    textDark: "text-[#2C3E50]", // Darker gray for primary text
    textMedium: "text-[#5F6A6A]", // Medium gray for secondary text
    textLight: "text-white", 
    textAccent: "text-[#626F47]", 

    borderLight: "border-gray-200", 
    borderMedium: "border-[#D8DCD5]", 
    borderAccent: "border-[#626F47]",

    buttonPrimaryBg: "bg-[#626F47]",
    buttonPrimaryHoverBg: "bg-[#4F5A3A]",
    buttonPrimaryText: "text-white",

    buttonSecondaryBg: "bg-transparent",
    buttonSecondaryHoverBg: "bg-[#626F47]/10",
    buttonSecondaryText: "text-[#626F47]",
    buttonSecondaryBorder: "border-[#626F47]",

    gradientFrom: "from-[#626F47]",
    gradientTo: "to-[#4F5A3A]",

    cardResultBg: "bg-[#F0F3EE]", 
    cardResultBorder: "border-[#D8DCD5]",
    cardResultTagBg: "bg-[#DAE0D4]",
    cardResultTagText: "text-[#4F5A3A]",

    inputBg: "bg-white",
    inputBorder: "border-gray-300",
    inputFocusRing: "focus:ring-[#626F47]",
    placeholderText: "placeholder-gray-500",
};

// Animation Variants
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.9, ease: "circOut" } } };
const fadeInUp = { 
  hidden: { opacity: 0, y: 50 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "circOut", delay: 0.1 } 
  } 
};
const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "circOut" } } };
const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "circOut" } } };

const staggerContainer = (staggerAmount = 0.15, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: staggerAmount, delayChildren: delayChildren } }
});
const cardHover = { 
  scale: 1.03, 
  y: -6, 
  boxShadow: `0px 15px 25px rgba(98, 111, 71, 0.15)`, // Adjusted shadow color
  transition: { type: "spring", stiffness: 300, damping: 15 } 
};
const buttonHover = { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 }};

const heroTitleContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } }
};
const heroTitleWord = {
    hidden: { opacity: 0, y: 25, skewY: 3 },
    visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } }
};
const heroSubtitle = {
    hidden: { opacity:0, y:20},
    visible: {opacity:1, y:0, transition: {duration:0.6, delay:0.8, ease:"easeOut"}}
}
const heroCTAs = {
    hidden: { opacity:0, y:20},
    visible: {opacity:1, y:0, transition: {duration:0.6, delay:1.0, ease:"easeOut"}}
}

export default function LocalSEOPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const heroBgPatternY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    // Removed unused 'scrolled' and 'isMenuOpen' states and effect

    return (
        <main className={`flex flex-col min-h-screen overflow-x-hidden font-sans ${colors.textDark}`}>
            {/* Hero Section */}
            <section ref={heroRef} className={`relative py-24 md:py-32 ${colors.bgLight} flex flex-col items-center justify-center overflow-hidden min-h-[80vh] md:min-h-[90vh]`}>
                <motion.div 
                    className="absolute inset-0 z-0"
                    style={{ y: heroBgPatternY }}
                >
                    {/* Subtle background pattern */}
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
                        <defs>
                        <pattern id="heroPattern" patternUnits="userSpaceOnUse" width="60" height="60" className="text-gray-300/50">
                            <path d="M50 10L10 50M10 10L50 50" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="5" cy="5" r="0.5" fill="currentColor" />
                            <circle cx="55" cy="55" r="0.5" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#heroPattern)" />
                    </svg>
                </motion.div>
                
                <motion.div 
                    className="relative z-10 flex flex-col items-center w-full container mx-auto px-4 text-center"
                    style={{y: heroElementsY}}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={heroTitleContainer}>
                        <motion.h1 variants={heroTitleWord} className={`text-4xl md:text-6xl font-extrabold ${colors.textAccent} mb-4 tracking-tight drop-shadow-sm`}>
                            Local Search Engine Optimization
                        </motion.h1>
                    </motion.div>
                    <motion.p variants={heroSubtitle} className={`text-lg md:text-xl ${colors.textMedium} mb-10 max-w-2xl mx-auto`}>
                        Grow Your Online Visibility Within Your Target Locations & Dominate Local Search Results.
                    </motion.p>
                    <motion.form 
                        variants={heroCTAs}
                        className="w-full max-w-xl mx-auto flex flex-col md:flex-row items-center gap-4 p-2"
                        onSubmit={(e) => e.preventDefault()} // Prevent actual form submission for demo
                    >
                        <div className="relative flex-1 w-full">
                            <span className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${colors.textMedium} opacity-80`}>
                                <Globe2 size={20} />
                            </span>
                            <Input
                                type="text"
                                placeholder="Enter your website (e.g., yourbusiness.com)"
                                className={`pl-11 pr-4 py-3.5 rounded-lg border ${colors.inputBorder} ${colors.inputFocusRing} text-lg ${colors.inputBg} shadow-sm w-full transition-all ${colors.textDark} ${colors.placeholderText}`}
                            />
                        </div>
                        <Link href="/contact?type=local-seo-audit" legacyBehavior>
                            <motion.a whileHover={buttonHover} className="w-full md:w-auto">
                                <Button 
                                    type="submit" 
                                    className={`w-full md:w-auto font-semibold text-base px-8 py-3.5 rounded-lg shadow-md ${colors.buttonPrimaryBg} ${colors.buttonPrimaryText} hover:${colors.buttonPrimaryHoverBg} transition-all`}
                                >
                                    GET A FREE SEO AUDIT
                                </Button>
                            </motion.a>
                        </Link>
                    </motion.form>
                </motion.div>
            </section>

            {/* Results/Case Studies Section */}
            <section className={`py-16 md:py-24 ${colors.bgBase}`}>
                <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold ${colors.textAccent} text-center mb-3`}
                    >
                        Local SEO Services With Proven Results
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-center mb-12 text-lg max-w-2xl`}
                    >
                        Stand Out in Today's Competitive Marketplace and See Tangible Growth.
                    </motion.p>
                    <motion.div 
                        variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="w-full grid md:grid-cols-3 gap-8 mb-12"
                    >
                        {[
                            { 
                                svg: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="6" y="18" width="44" height="20" rx="6" fill={colors.primary} fillOpacity="0.08" />
                                        <rect x="10" y="22" width="36" height="12" rx="3" fill={colors.primary} fillOpacity="0.18" />
                                        <rect x="14" y="26" width="12" height="4" rx="2" fill={colors.primary} />
                                        <circle cx="16" cy="40" r="3" fill={colors.primary} />
                                        <circle cx="40" cy="40" r="3" fill={colors.primary} />
                                    </svg>,
                                tag: "RV REPAIR SHOP", 
                                stats: [{val: "+3,478", label: "New Leads"}, {val: "+32.4%", label: "Organic SEO Traffic"}],
                                quote: "“Our experience with Thrive has been top-notch! We felt we could create a tight line of communication... transparency... continual improvement/development.”"
                            },
                            { 
                                svg: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="12" y="24" width="32" height="8" rx="2" fill={colors.primary} fillOpacity="0.18" />
                                        <rect x="18" y="32" width="20" height="4" rx="2" fill={colors.primary} fillOpacity="0.10" />
                                        <rect x="24" y="36" width="8" height="8" rx="2" fill={colors.primary} />
                                        <rect x="26" y="16" width="4" height="8" rx="2" fill={colors.primary} />
                                        <circle cx="28" cy="14" r="4" fill={colors.primary} fillOpacity="0.18" />
                                    </svg>,
                                tag: "LAW FIRM",
                                stats: [{val: "+663.7%", label: "Search Traffic"}, {val: "+360%", label: "Online Leads"}],
                                quote: "“Thank you so much for the report! I appreciate all the details... Our company wouldn't be what it is without you guys. Keep up the good work!”"
                            },
                            { 
                                svg: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="14" y="24" width="28" height="8" rx="4" fill={colors.primary} fillOpacity="0.10" />
                                        <rect x="18" y="32" width="20" height="4" rx="2" fill={colors.primary} fillOpacity="0.18" />
                                        <rect x="24" y="20" width="8" height="12" rx="2" fill={colors.primary} />
                                        <circle cx="28" cy="40" r="6" fill={colors.primary} fillOpacity="0.18" />
                                        <rect x="26" y="12" width="4" height="8" rx="2" fill={colors.primary} />
                                    </svg>,
                                tag: "PLUMBING COMPANY",
                                stats: [{val: "+3,137%", label: "Goal Completions"}, {val: "+80.9%", label: "Website Traffic"}],
                                quote: "“Very happy and the results have been great! Thrive has helped us focus on the areas we need to... SEO ranked high in a market that is very competitive.”"
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                variants={fadeInUp} 
                                whileHover={cardHover}
                                className={`${colors.cardResultBg} border ${colors.cardResultBorder} rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-300`}
                            >
                                <div className="mb-4">{item.svg}</div>
                                <div className={`${colors.cardResultTagBg} ${colors.cardResultTagText} font-semibold text-xs px-3 py-1.5 rounded-md mb-4`}>{item.tag}</div>
                                <div className="flex gap-6 text-center mb-4">
                                    {item.stats.map(stat => (
                                        <div key={stat.label}>
                                            <div className={`text-xl font-bold ${colors.textAccent}`}>{stat.val}</div>
                                            <div className={`text-xs ${colors.textMedium}`}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className={`text-xs ${colors.textMedium} italic mb-2`}>From the Client:</div>
                                <blockquote className={`text-sm ${colors.textMedium} text-center`}>{item.quote}</blockquote>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-md ${colors.textMedium} text-center max-w-3xl mb-10 leading-relaxed`}
                    >
                        At Markov Digital, we work tirelessly to be the leading local SEO company. Our efforts have consistently paid off.<br /><br />
                        We've helped businesses achieve <span className={`font-bold ${colors.textAccent}`}>thousands of first-page Google Search rankings</span> across numerous cities, significantly boosting their local visibility and reaching a vast percentage of their target audience.
                    </motion.div>
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={buttonHover}>
                        <Link href="/contact?type=local-seo-consultation" legacyBehavior>
                            <Button 
                                className={`font-semibold text-base px-10 py-3.5 rounded-lg shadow-md ${colors.buttonPrimaryBg} ${colors.buttonPrimaryText} hover:${colors.buttonPrimaryHoverBg} transition-all mt-2`}
                            >
                                SCHEDULE A CONSULTATION
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
            
            {/* Enhanced "Why Local SEO Matters" Section (combines factors & importance) */}
            <section className={`py-16 md:py-24 ${colors.bgLight}`}>
                <div className="container mx-auto px-4">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center mb-4 ${colors.textAccent}`}
                    >
                        Why Local SEO is <span className="underline decoration-wavy decoration-current/50">Crucial</span> For Your Business
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center mb-16 max-w-3xl mx-auto`}
                    >
                        In today's digital-first world, being visible to local customers is paramount. Effective Local SEO turns searches into sales.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                        <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <div className="flex items-center mb-4">
                                <TrendingUp className={`w-8 h-8 ${colors.textAccent} mr-3`} />
                                <h3 className={`text-2xl font-semibold ${colors.textDark}`}>Key Local SEO Ranking Factors</h3>
                            </div>
                            <p className={`${colors.textMedium} mb-6`}>Google considers several factors to rank your business locally:</p>
                            <ul className="space-y-3">
                                {["Google Business Profile (GBP) optimization", "NAP (Name, Address, Phone) consistency", "Quality of local citations & backlinks", "Positive online reviews & ratings", "Website relevance & user experience (UX)", "Targeted local keywords & content", "Mobile-friendliness & site speed"].map(item => (
                                    <li key={item} className="flex items-center">
                                        <CheckCircle className={`w-5 h-5 ${colors.primaryLight} mr-3 flex-shrink-0`} />
                                        <span className={colors.textMedium}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <div className="flex items-center mb-4">
                                <Settings2 className={`w-8 h-8 ${colors.textAccent} mr-3`} />
                                <h3 className={`text-2xl font-semibold ${colors.textDark}`}>Effective Local SEO Tactics</h3>
                            </div>
                            <p className={`${colors.textMedium} mb-6`}>We leverage proven tactics to boost your local rankings:</p>
                            <ul className="space-y-3">
                                {["Comprehensive GBP management", "Strategic local keyword research", "Building high-quality local citations", "Active online reputation management", "Localized content creation & marketing", "On-page SEO for local relevance", "Local link building strategies", "Technical SEO for local performance"].map(item => (
                                    <li key={item} className="flex items-center">
                                        <CheckCircle className={`w-5 h-5 ${colors.primaryLight} mr-3 flex-shrink-0`} />
                                        <span className={colors.textMedium}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`mt-12 max-w-4xl mx-auto ${colors.bgBase} rounded-xl shadow-xl p-8 md:p-10 border ${colors.borderMedium}`}
                    >
                        <h3 className={`text-xl font-semibold ${colors.textAccent} mb-6 text-center`}>Unlock Tangible Benefits with Local SEO:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {[
                                "Increased local visibility & brand awareness", "Higher rankings in local search & Maps",
                                "More qualified website traffic", "Greater foot traffic to your physical location",
                                "More phone calls & online inquiries", "Improved online reputation & customer trust",
                                "Enhanced competitive advantage locally", "Higher conversion rates & sales revenue",
                                "Better ROI on marketing spend", "Stronger community engagement"
                            ].map(benefit => (
                                <div key={benefit} className="flex items-center">
                                    <Star className={`w-5 h-5 text-yellow-500 mr-3 flex-shrink-0`} />
                                    <span className={colors.textMedium}>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Local SEO Services (Features Section) */}
            <section className={`py-16 md:py-24 ${colors.bgBase}`}>
                <div className="container mx-auto px-4">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center mb-4 ${colors.textAccent}`}
                    >
                        Comprehensive Local SEO Solutions
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center mb-16 max-w-3xl mx-auto`}
                    >
                        We offer a full suite of services designed to elevate your local search presence and drive growth.
                    </motion.p>
                    <motion.div 
                        variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    >
                        {[
                            { icon: <MapPin className={`w-10 h-10 ${colors.textAccent}`} />, title: "Google Business Profile Optimization", desc: "Maximize your GBP listing for peak visibility, engagement, and conversions." },
                            { icon: <Building className={`w-10 h-10 ${colors.textAccent}`} />, title: "Local Citation Building & Management", desc: "Ensure consistent and accurate business listings across key online directories." },
                            { icon: <FileText className={`w-10 h-10 ${colors.textAccent}`} />, title: "Localized Content Strategy", desc: "Create compelling, geo-targeted content that resonates with local customers." },
                            { icon: <MessageSquare className={`w-10 h-10 ${colors.textAccent}`} />, title: "Online Review & Reputation Management", desc: "Build trust and credibility by actively managing your online reviews." },
                            { icon: <TrendingUp className={`w-10 h-10 ${colors.textAccent}`} />, title: "Local Link Building", desc: "Acquire high-quality local backlinks to boost authority and rankings." },
                            { icon: <BarChart3 className={`w-10 h-10 ${colors.textAccent}`} />, title: "Analytics & Performance Reporting", desc: "Transparently track your local SEO progress with detailed, easy-to-understand reports." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={cardHover}
                                className={`${colors.bgLight} p-8 rounded-xl shadow-lg transition-all duration-300 border ${colors.borderMedium}`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`mb-5 p-4 ${colors.bgMedium} rounded-full shadow-sm`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className={`text-xl font-semibold mb-2 ${colors.textDark}`}>{feature.title}</h3>
                                    <p className={`${colors.textMedium} text-sm`}>{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* Why Choose Markov Digital for Local SEO */}
            <section className={`py-16 md:py-24 ${colors.bgDarkSection}`}>
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold ${colors.textAccent} text-center mb-4`}
                    >
                        Why Partner with Markov Digital for Local SEO?
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center max-w-3xl mx-auto mb-16`}
                    >
                        We combine expertise, transparency, and a client-centric approach to deliver exceptional Local SEO results.
                    </motion.p>
                    <motion.div 
                        variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-10"
                    >
                        {[
                            { icon: <DollarSign/>, title: "Tailored & Affordable Services", desc: "Customized Local SEO packages that fit your budget and deliver high ROI. We analyze your needs to propose solutions that truly work." },
                            { icon: <BarChart3/>, title: "Data-Driven Reporting", desc: "Utilizing Google Analytics and other tools to track performance, identify issues, and provide actionable insights for campaign success." },
                            { icon: <Lightbulb/>, title: "Expert Consultations & Strategy", desc: "Regular consultations to discuss results, brainstorm ideas, and ensure your campaign aligns with your business objectives. Your dedicated specialist is always available." },
                            { icon: <Briefcase/>, title: "Holistic Digital Marketing", desc: "Beyond Local SEO, we offer comprehensive digital marketing services including PPC, content marketing, and social media, for a complete online strategy." },
                            { icon: <ShieldCheck/>, title: "Transparent Processes", desc: "Clear communication about our work. You'll receive regular updates and reports, keeping you informed every step of the way." },
                            { icon: <Users2/>, title: "Client-Centric Approach", desc: "Your success is our priority. We listen to your needs and work collaboratively to achieve your local marketing goals." }
                        ].map(feature => (
                            <motion.div 
                                key={feature.title}
                                variants={fadeInUp}
                                className="flex items-start gap-5 p-6 bg-white rounded-lg shadow-md border border-gray-200"
                            >
                                <div className={`p-3 ${colors.primaryLightest}/30 rounded-md mt-1`}>
                                    {React.cloneElement(feature.icon, { className: `w-7 h-7 ${colors.textAccent}` })}
                                </div>
                                <div>
                                    <h3 className={`font-semibold text-xl ${colors.textDark} mb-2`}>{feature.title}</h3>
                                    <p className={`${colors.textMedium} text-sm leading-relaxed`}>{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className={`py-20 md:py-28 bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} relative overflow-hidden`}>
                <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                    {/* You can use an SVG grid pattern here if you have one, or keep it simple */}
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="ctaPattern" patternUnits="userSpaceOnUse" width="40" height="40"><circle cx="5" cy="5" r="0.8" fill="white"/><path d="M0 20L40 20M20 0L20 40" stroke="white" strokeWidth="0.3"/></pattern></defs><rect width="100%" height="100%" fill="url(#ctaPattern)"/></svg>
                    </div>
                </motion.div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to Dominate Local Search?
                        </h2>
                        <p className="text-xl text-white/90 mb-10">
                            Let our local SEO experts help you attract more customers from your area and achieve sustainable growth.
                        </p>
                        <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                            <Link href="/contact?type=local-seo-strategy" legacyBehavior>
                                <Button
                                    className={`bg-white ${colors.textAccent} hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg shadow-xl`}
                                >
                                    Get Started Today <ArrowRight className="inline-block ml-2 w-5 h-5"/>
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Get My FREE Local SEO Proposal Section - Simplified and Themed */}
            <section className={`py-16 md:py-24 ${colors.bgLight}`}>
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center mb-3 ${colors.textAccent}`}
                    >
                        Get Your <span className="underline decoration-wavy decoration-current/50">FREE</span> Local SEO Proposal
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-center mb-12 text-lg max-w-2xl mx-auto`}
                    >
                        Discover how Markov Digital can transform your local search presence. Fill out the form below to receive a no-obligation proposal tailored to your business.
                    </motion.p>
                    
                    <motion.div 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.bgBase} rounded-xl shadow-xl p-8 md:p-10 border ${colors.borderMedium}`}
                    >
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                            <div className="md:col-span-1">
                                <label htmlFor="firstName" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>First Name*</label>
                                <Input id="firstName" type="text" placeholder="John" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="lastName" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Last Name*</label>
                                <Input id="lastName" type="text" placeholder="Doe" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="company" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Company/Organization*</label>
                                <Input id="company" type="text" placeholder="Your Company LLC" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="website" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Website</label>
                                <Input id="website" type="text" placeholder="www.yourcompany.com" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="email" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Email Address*</label>
                                <Input id="email" type="email" placeholder="you@example.com" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="phone" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Phone*</label>
                                <Input id="phone" type="tel" placeholder="(555) 123-4567" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                             <div className="md:col-span-2">
                                <label htmlFor="services" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Services Interested In*</label>
                                <select id="services" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.textDark} bg-white`} required>
                                    <option value="">Select a service...</option>
                                    <option value="Local SEO">Local SEO</option>
                                    <option value="GBP Optimization">Google Business Profile Optimization</option>
                                    <option value="Content Marketing">Local Content Marketing</option>
                                    <option value="Full Audit">Comprehensive SEO Audit</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="message" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Tell us about your business & goals</label>
                                <textarea id="message" placeholder="Briefly describe your business and what you hope to achieve..." rows={4} className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText} min-h-[100px]`} />
                            </div>
                            <motion.div className="md:col-span-2 mt-4" whileHover={buttonHover}>
                                <Button 
                                    type="submit" 
                                    className={`w-full font-semibold text-base px-8 py-3.5 rounded-lg shadow-md ${colors.buttonPrimaryBg} ${colors.buttonPrimaryText} hover:${colors.buttonPrimaryHoverBg} transition-all`}
                                >
                                    SEND MY FREE PROPOSAL
                                </Button>
                            </motion.div>
                            <div className={`md:col-span-2 text-xs ${colors.textMedium} mt-3 text-center`}>
                                In a hurry? Give us a call: <a href="tel:8669084748" className={`${colors.textAccent} font-semibold hover:underline`}>866.908.4748</a><br />
                                By submitting, you agree to our terms and privacy policy.
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}