"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming you have this from shadcn/ui
import { 
    BarChart3, CheckCircle, Zap, Globe2, FileText, Mail, Users, ArrowRight, 
    Search, Target, Award, Shield, Clock, TrendingUp, Layers, Settings2,
    Briefcase, Building, DollarSign, Eye, Edit3, Lightbulb, MessageSquare, Users2, Star, Cog, Server, Smartphone, Link2
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

// Define the new color palette based on #4A102A (Deep Maroon/Burgundy)
const colors = {
    primary: "#4A102A",        // Deep Maroon
    primaryDark: "#380C20",    // Darker Maroon
    primaryLight: "#6E183F",   // Lighter, more vibrant Maroon
    primaryLightest: "#F8E7EF", // Very pale pinkish/maroon tint

    bgBase: "bg-white", 
    bgLight: "bg-[#FDF9FB]",    // Very light off-white with a hint of pink/maroon
    bgMedium: "bg-[#F6EFF3]",   // Slightly more pronounced tint for cards or section accents
    bgDarkSection: "bg-[#FBEFF4]", // A slightly more saturated light background for sections

    textDark: "#300B1B", // Dark maroon, almost black for primary body text
    textMedium: "#52102A",  // Medium maroon for secondary text
    textLight: "text-white", 
    textAccent: "text-[#4A102A]",  // Primary Maroon for headings, key highlights

    borderLight: "border-gray-200", 
    borderMedium: "border-[#EAD8E1]", // Light maroon tint
    borderAccent: "border-[#4A102A]",

    buttonPrimaryBg: "bg-[#4A102A]",
    buttonPrimaryHoverBg: "bg-[#380C20]",
    buttonPrimaryText: "text-white",

    buttonSecondaryBg: "bg-transparent",
    buttonSecondaryHoverBg: "bg-[#4A102A]/10", 
    buttonSecondaryText: "text-[#4A102A]",
    buttonSecondaryBorder: "border-[#4A102A]",
    
    buttonAccentBg: "bg-[#F28C1F]", // The orange button from original
    buttonAccentHoverBg: "bg-[#D97706]", // Darker orange

    gradientFrom: "from-[#4A102A]",
    gradientTo: "to-[#6E183F]", // Brighter maroon for gradient end
    
    cardDefaultBg: "bg-white", 
    cardLightBg: "bg-[#FDF9FB]", 

    cardResultBg: "bg-[#FBEFF4]", 
    cardResultBorder: "border-[#EAD8E1]",
    cardResultTagBg: "bg-[#EAD8E1]",
    cardResultTagText: "text-[#380C20]",

    inputBg: "bg-white",
    inputBorder: "border-gray-300",
    inputFocusRing: "focus:ring-[#4A102A]",
    placeholderText: "placeholder-gray-500",
};

// Animation Variants (consistent with previous examples)
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.9, ease: "circOut" } } };
const fadeInUp = { 
  hidden: { opacity: 0, y: 50 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "circOut", delay: 0.1 } 
  } 
};
const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "circOut", delay: 0.1 } } };
const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "circOut", delay: 0.1 } } };

const staggerContainer = (staggerAmount = 0.15, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: staggerAmount, delayChildren: delayChildren } }
});
const cardHover = { 
  scale: 1.03, 
  y: -6, 
  boxShadow: `0px 15px 25px rgba(74, 16, 42, 0.15)`, // Adjusted shadow for maroon
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


export default function TechnicalSEOPage() {
    const router = useRouter();
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const heroBgPatternY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    
    const websiteInputRef = React.useRef<HTMLInputElement>(null);

    const handleHeroSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const website = websiteInputRef.current?.value.trim();
        if (!website) {
            router.push(`/contact?service=technical-seo`); // Go to contact even if no website
            return;
        }
        router.push(`/contact?service=technical-seo&website=${encodeURIComponent(website)}`);
    };

    const handleProposalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // const website = formData.get('website') as string; // If website is in this form
        router.push(`/contact?service=technical-seo-proposal`); // General proposal
        console.log("Proposal form submitted. Data:", Object.fromEntries(formData));
    };


    return (
        <main className={`flex flex-col min-h-screen overflow-x-hidden font-sans ${colors.textDark}`}>
            {/* Hero Section */}
            <section ref={heroRef} className={`relative py-24 md:py-32 bg-gradient-to-br from-[#4A102A]/5 to-[#6E183F]/10 flex flex-col items-center justify-center overflow-hidden min-h-[80vh] md:min-h-[90vh]`}>
                <motion.div 
                    className="absolute inset-0 z-0"
                    style={{ y: heroBgPatternY }}
                >
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                        <defs>
                        <pattern id="heroPatternTech" patternUnits="userSpaceOnUse" width="60" height="60" className="text-[#4A102A]/20">
                            <path d="M0 0 L60 60 M60 0 L0 60 M30 15 L30 45 M15 30 L45 30" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="30" cy="30" r="1" fill="currentColor" />
                            <circle cx="0" cy="0" r="0.5" fill="currentColor" />
                            <circle cx="60" cy="60" r="0.5" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#heroPatternTech)" />
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
                            Technical SEO Services
                        </motion.h1>
                    </motion.div>
                    <motion.p variants={heroSubtitle} className={`text-lg md:text-xl ${colors.textMedium} mb-10 max-w-2xl mx-auto`}>
                        Boost Your Website's Performance, Crawlability, and Indexability for Lasting Organic Success.
                    </motion.p>
                    <motion.form 
                        variants={heroCTAs}
                        onSubmit={handleHeroSubmit} 
                        className="w-full max-w-xl mx-auto flex flex-col md:flex-row items-center gap-4 p-2"
                    >
                        <div className="relative flex-1 w-full">
                            <span className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${colors.textMedium} opacity-80`}>
                                <Globe2 size={20} />
                            </span>
                            <Input
                                ref={websiteInputRef}
                                type="text"
                                placeholder="Enter Your Website Address"
                                className={`pl-11 pr-4 py-3.5 rounded-lg border ${colors.inputBorder} ${colors.inputFocusRing} text-lg ${colors.inputBg} shadow-sm w-full transition-all ${colors.textDark} ${colors.placeholderText}`}
                            />
                        </div>
                        <motion.div whileHover={buttonHover} className="w-full md:w-auto">
                            <Button 
                                type="submit" 
                                className={`w-full md:w-auto font-semibold text-base px-8 py-3.5 rounded-lg shadow-md ${colors.buttonPrimaryBg} ${colors.buttonPrimaryText} hover:${colors.buttonPrimaryHoverBg} transition-all`}
                            >
                                GET MY FREE PROPOSAL
                            </Button>
                        </motion.div>
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
                        Technical SEO Services With Proven Impact
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-center mb-12 text-lg max-w-2xl`}
                    >
                        Stand Out in a Competitive Digital Landscape with a Technically Flawless Website.
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
                                tag: "SITE AUDIT & FIXES", 
                                stats: [{val: "+3,478", label: "Critical Issues Resolved"}, {val: "+32.4%", label: "Crawl Budget Efficiency"}],
                                quote: "“Markov's technical team transformed our site's health. The improvement in crawlability and issue resolution was outstanding.”"
                            },
                            { 
                                svg: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="12" y="24" width="32" height="8" rx="2" fill={colors.primary} fillOpacity="0.18" />
                                        <rect x="18" y="32" width="20" height="4" rx="2" fill={colors.primary} fillOpacity="0.10" />
                                        <rect x="24" y="36" width="8" height="8" rx="2" fill={colors.primary} />
                                        <rect x="26" y="16" width="4" height="8" rx="2" fill={colors.primary} />
                                        <circle cx="28" cy="14" r="4" fill={colors.primary} fillOpacity="0.18" />
                                    </svg>,
                                tag: "STRUCTURED DATA MARKUP",
                                stats: [{val: "+663.7%", label: "Rich Results Impressions"}, {val: "+360%", label: "Schema Validated Pages"}],
                                quote: "“The detailed technical audit and perfect structured data implementation led to significant gains in rich results and indexation.”"
                            },
                            { 
                                svg: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="14" y="24" width="28" height="8" rx="4" fill={colors.primary} fillOpacity="0.10" />
                                        <rect x="18" y="32" width="20" height="4" rx="2" fill={colors.primary} fillOpacity="0.18" />
                                        <rect x="24" y="20" width="8" height="12" rx="2" fill={colors.primary} />
                                        <circle cx="28" cy="40" r="6" fill={colors.primary} fillOpacity="0.18" />
                                        <rect x="26" y="12" width="4" height="8" rx="2" fill={colors.primary} />
                                    </svg>,
                                tag: "PAGE SPEED OPTIMIZATION",
                                stats: [{val: "-1.8s", label: "Avg. Load Time Reduction"}, {val: "92.5% Pass", label: "Core Web Vitals Score"}],
                                quote: "“Our website is now blazing fast and scores exceptionally on Core Web Vitals. The technical SEO team at Markov is truly amazing!”"
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                variants={fadeInUp} 
                                whileHover={cardHover}
                                className={`${colors.cardResultBg} border ${colors.cardResultBorder} rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-300`}
                            >
                                <div className="mb-4">{item.svg}</div>
                                <div className={`${colors.cardResultTagBg} ${colors.cardResultTagText} font-semibold text-xs px-3 py-1.5 rounded-md mb-4 text-center`}>{item.tag}</div>
                                <div className="flex flex-col sm:flex-row gap-4 text-center mb-4">
                                    {item.stats.map(stat => (
                                        <div key={stat.label} className="flex-1">
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
                        At Markov Digital, we are dedicated to being the premier technical SEO company. Our focused efforts and expertise have yielded significant results for our clients year after year.
                    </motion.div>
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={buttonHover}>
                        <Button 
                            className={`font-semibold text-base px-10 py-3.5 rounded-lg shadow-md ${colors.buttonPrimaryBg} ${colors.buttonPrimaryText} hover:${colors.buttonPrimaryHoverBg} transition-all mt-2`}
                            onClick={() => router.push('/contact?service=technical-seo-results')}
                        >
                            ACHIEVE TECHNICAL EXCELLENCE
                        </Button>
                    </motion.div>
                </div>
            </section>
            
            {/* Enhanced "Why Technical SEO Matters" Section */}
            <section className={`py-16 md:py-24 ${colors.bgLight}`}>
                <div className="container mx-auto px-4">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center mb-4 ${colors.textAccent}`}
                    >
                        Why Technical SEO is <span className="underline decoration-wavy decoration-current/50">Fundamental</span> For Success
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center mb-16 max-w-3xl mx-auto`}
                    >
                        A robust technical SEO foundation is non-negotiable for visibility, user experience, and achieving your online business goals.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                        <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <div className="flex items-center mb-4">
                                <Cog className={`w-8 h-8 ${colors.textAccent} mr-3`} />
                                <h3 className={`text-2xl font-semibold ${colors.textDark}`}>Key Technical SEO Pillars</h3>
                            </div>
                            <p className={`${colors.textMedium} mb-6`}>Search engines prioritize websites that offer a seamless experience. Key technical factors include:</p>
                            <ul className="space-y-3">
                                {["Site Speed & Core Web Vitals", "Mobile-Friendliness & Responsiveness", "Clean XML Sitemaps & Robots.txt", "Effective Structured Data/Schema Markup", "Secure HTTPS Implementation", "Canonicalization & Duplicate Content Management", "Crawlability & Indexability Optimization", "Efficient Site Architecture & Navigation"].map(item => (
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
                                <h3 className={`text-2xl font-semibold ${colors.textDark}`}>Our Technical SEO Approach</h3>
                            </div>
                            <p className={`${colors.textMedium} mb-6`}>We employ a meticulous approach to optimize your site's technical health:</p>
                            <ul className="space-y-3">
                                {["Comprehensive Technical Site Audits", "Rectifying Crawl Errors & Broken Links", "Performance Optimization (Speed, CWV)", "Schema Markup Implementation & Validation", "Mobile Usability Enhancements", "Site Architecture Refinements", "Redirect Strategy & Canonical Tag Management", "Log File Analysis & Crawl Budget Optimization"].map(item => (
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
                        <h3 className={`text-xl font-semibold ${colors.textAccent} mb-6 text-center`}>Unlock Tangible Benefits with Technical SEO:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {[
                                "Improved Search Engine Rankings", "Enhanced Website Crawlability & Indexation",
                                "Faster Page Load Speeds (Core Web Vitals)", "Better Mobile User Experience",
                                "Increased Organic Traffic & Visibility", "Reduced Bounce Rates & Higher Engagement",
                                "Stronger Site Authority & Trust", "Improved Conversion Rates",
                                "Resolution of Technical Errors", "Future-Proofing Against Algorithm Updates"
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

            {/* Our Technical SEO Services (Features Section) */}
            <section className={`py-16 md:py-24 ${colors.bgBase}`}>
                <div className="container mx-auto px-4">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center mb-4 ${colors.textAccent}`}
                    >
                        Comprehensive Technical SEO Solutions
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center mb-16 max-w-3xl mx-auto`}
                    >
                        We offer a full suite of specialized services to ensure your website's technical foundation is impeccable.
                    </motion.p>
                    <motion.div 
                        variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    >
                        {[
                            { icon: <Search className={`w-10 h-10 ${colors.textAccent}`} />, title: "In-Depth Site Audits", desc: "Uncovering hidden technical issues that hinder performance and visibility." },
                            { icon: <Server className={`w-10 h-10 ${colors.textAccent}`} />, title: "Crawl & Index Optimization", desc: "Ensuring search engines can efficiently find and index your valuable content." },
                            { icon: <Zap className={`w-10 h-10 ${colors.textAccent}`} />, title: "Speed & Performance Tuning", desc: "Optimizing load times and Core Web Vitals for superior user experience and rankings." },
                            { icon: <Smartphone className={`w-10 h-10 ${colors.textAccent}`} />, title: "Mobile-First Optimization", desc: "Guaranteeing a flawless experience for users on all mobile devices." },
                            { icon: <Layers className={`w-10 h-10 ${colors.textAccent}`} />, title: "Structured Data Implementation", desc: "Leveraging schema markup for enhanced SERP features and visibility." },
                            { icon: <Link2 className={`w-10 h-10 ${colors.textAccent}`} />, title: "Link Health & Redirects", desc: "Managing broken links, redirect chains, and canonicalization effectively." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={cardHover}
                                className={`${colors.cardLightBg} p-8 rounded-xl shadow-lg transition-all duration-300 border ${colors.borderMedium} flex flex-col`}
                            >
                                <div className={`mb-5 p-4 ${colors.bgMedium} rounded-full shadow-sm self-center`}>
                                    {feature.icon}
                                </div>
                                <h3 className={`text-xl font-semibold mb-2 ${colors.textDark} text-center`}>{feature.title}</h3>
                                <p className={`${colors.textMedium} text-sm text-center flex-grow`}>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* Why Partner with Markov Digital (was "Technical SEO Company that Gets Results") */}
            <section className={`py-16 md:py-24 ${colors.bgDarkSection}`}>
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold ${colors.textAccent} text-center mb-4`}
                    >
                        Why Markov Digital for Technical SEO?
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center max-w-3xl mx-auto mb-16`}
                    >
                        Our expert team, data-driven strategies, and commitment to results make us the ideal partner for your technical SEO needs.
                    </motion.p>
                    <motion.div 
                        variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: <Search/>, title: "In-Depth Website Audits", desc: "Comprehensive site audits flag issues and guide data-driven improvements." },
                            { icon: <Users2/>, title: "Specialized SEO Experts", desc: "Certified technical SEO specialists oversee your project from assessment to completion." },
                            { icon: <Globe2/>, title: "Full-Service Solutions", desc: "Tailored technical SEO for eCommerce, Shopify, franchises, Amazon, and local businesses." },
                            { icon: <BarChart3/>, title: "Advanced Analytics & Reporting", desc: "Track campaign performance and gain actionable insights with detailed reports." },
                            { icon: <Target/>, title: "Goal-Oriented Strategies", desc: "We align technical SEO tactics with your business goals for measurable growth." },
                            { icon: <Award/>, title: "Proven Track Record of Success", desc: "Hundreds of companies trust us to fix technical issues and implement results-driven SEO." }
                        ].map(feature => (
                            <motion.div 
                                key={feature.title}
                                variants={fadeInUp}
                                whileHover={cardHover}
                                className={`${colors.cardDefaultBg} p-6 rounded-xl shadow-lg border ${colors.borderMedium} flex flex-col items-center text-center transition-all`}
                            >
                                 <div className={`p-4 ${colors.bgMedium} rounded-full mb-5 shadow-sm`}>
                                    {React.cloneElement(feature.icon, { className: `w-8 h-8 ${colors.textAccent}` })}
                                </div>
                                <h3 className={`font-semibold text-lg ${colors.textDark} mb-2`}>{feature.title}</h3>
                                <p className={`${colors.textMedium} text-sm leading-relaxed`}>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Awards/Call to Action Row - "Choose Thrive" section simplified */}
            <section className={`py-12 md:py-16 ${colors.bgBase}`}>
                <div className="container mx-auto px-4 text-center">
                     <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-2xl md:text-3xl font-bold ${colors.textAccent} mb-4`}
                    >
                        Elevate Your Site with Expert Technical SEO
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg mb-8 max-w-2xl mx-auto`}
                    >
                        Achieve top search engine rankings and a superior user experience with our robust technical SEO strategies.
                    </motion.p>
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={buttonHover} className="mb-12">
                        <Button
                            className={`${colors.buttonAccentBg} hover:${colors.buttonAccentHoverBg} text-white font-bold py-3.5 px-10 rounded-full text-lg shadow-md transition-all`}
                            onClick={() => router.push('/contact?service=technical-seo-consultation')}
                        >
                            LET'S TALK TECHNICAL SEO
                        </Button>
                    </motion.div>
                    <motion.div 
                        variants={staggerContainer(0.05)} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
                    >
                        {[1,2,3,4,5,6].map((i) => ( // Reduced number for better spacing
                            <motion.div variants={fadeInUp} key={i} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Award className={`w-16 h-16 text-gray-400`} /> 
                                {/* Replace with actual award SVGs or images */}
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
                    animate={{ opacity: 0.08 }} 
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                    <div className="absolute inset-0 opacity-25 mix-blend-overlay"> 
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="finalCtaPatternTech" patternUnits="userSpaceOnUse" width="45" height="45"><circle cx="8" cy="8" r="0.7" fill="white"/><path d="M0 22.5L45 22.5M22.5 0L22.5 45" stroke="white" strokeWidth="0.25"/></pattern></defs><rect width="100%" height="100%" fill="url(#finalCtaPatternTech)"/></svg>
                    </div>
                </motion.div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to Optimize Your Website's Technical Core?
                        </h2>
                        <p className="text-xl text-white/90 mb-10">
                            Let our technical SEO experts build a stronger, faster, and more discoverable website for sustained organic growth.
                        </p>
                        <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                             <Button
                                className={`bg-white ${colors.textAccent} hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg shadow-xl`}
                                onClick={() => router.push("/contact?service=technical-seo-start")}
                            >
                                Start Your Technical Transformation <ArrowRight className="inline-block ml-2 w-5 h-5"/>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Get My FREE Technical SEO Proposal Section */}
            <section className={`py-16 md:py-24 ${colors.bgLight}`}>
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center mb-3 ${colors.textAccent}`}
                    >
                        Get Your <span className="underline decoration-wavy decoration-current/50">FREE</span> Technical SEO Proposal
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center mb-12 max-w-2xl mx-auto`}
                    >
                        Understand your website's technical health and opportunities. Fill out the form for a complimentary, no-obligation proposal from our experts.
                    </motion.p>
                    
                    <motion.div 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.bgBase} rounded-2xl shadow-xl p-8 md:p-10 border ${colors.borderMedium} flex flex-col lg:flex-row gap-8 items-stretch`}
                    >
                        <div className={`lg:w-2/5 flex flex-col justify-center items-center ${colors.bgDarkSection} rounded-xl p-8 text-center`}>
                             <div className={`p-4 ${colors.bgMedium} rounded-full mb-5 shadow-sm self-center`}>
                                <Cog className={`w-12 h-12 ${colors.textAccent}`} />
                            </div>
                            <h3 className={`${colors.textAccent} text-2xl font-bold mb-3`}>Unlock Technical Excellence</h3>
                            <p className={`${colors.textMedium} mb-6 text-sm`}>Partner with Markov Digital to ensure your website foundation is built for peak performance and visibility.</p>
                            <div className="space-y-3 w-full">
                                {[
                                    { stat: "+810%", label: "Improvement in Site Health Score" },
                                    { stat: "+257%", label: "Increase in Crawl Efficiency" },
                                    { stat: "Top Scores", label: "Core Web Vitals Performance" }
                                ].map(item => (
                                    <div key={item.label} className="text-left p-3 bg-white/50 rounded-md border border-white/70">
                                        <div className={`${colors.textAccent} text-lg font-bold`}>{item.stat}</div>
                                        <div className={`${colors.textMedium} text-xs`}>{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <form onSubmit={handleProposalSubmit} className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                            <div className="md:col-span-1">
                                <label htmlFor="propTechFirstName" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>First Name*</label>
                                <Input name="firstName" id="propTechFirstName" type="text" placeholder="Jane" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="propTechLastName" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Last Name*</label>
                                <Input name="lastName" id="propTechLastName" type="text" placeholder="Smith" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="propTechCompany" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Company/Organization*</label>
                                <Input name="company" id="propTechCompany" type="text" placeholder="Tech Solutions Inc." className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="propTechWebsite" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Website*</label>
                                <Input name="website" id="propTechWebsite" type="text" placeholder="www.yoursite.com" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required/>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="propTechEmail" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Email Address*</label>
                                <Input name="email" id="propTechEmail" type="email" placeholder="jane.smith@example.com" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                             <div className="md:col-span-2">
                                <label htmlFor="propTechService" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Primary Technical Concern*</label>
                                <select name="serviceConcern" id="propTechService" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.textDark} bg-white`} required>
                                    <option value="">Select concern...</option>
                                    <option value="Site Speed">Site Speed / Core Web Vitals</option>
                                    <option value="Indexation Issues">Indexation / Crawlability</option>
                                    <option value="Technical Audit">Comprehensive Technical Audit</option>
                                    <option value="Mobile Friendliness">Mobile Friendliness</option>
                                    <option value="Structured Data">Structured Data / Schema</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="propTechMessage" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Additional Details or Goals</label>
                                <textarea name="message" id="propTechMessage" placeholder="Briefly describe any specific technical issues or SEO goals..." rows={3} className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText} min-h-[80px]`} />
                            </div>
                            <motion.div className="md:col-span-2 mt-3" whileHover={buttonHover}>
                                <Button 
                                    type="submit" 
                                    className={`w-full font-semibold text-base px-8 py-3.5 rounded-lg shadow-md ${colors.buttonPrimaryBg} ${colors.buttonPrimaryText} hover:${colors.buttonPrimaryHoverBg} transition-all`}
                                >
                                    SEND MY FREE TECHNICAL PROPOSAL
                                </Button>
                            </motion.div>
                            <div className={`md:col-span-2 text-xs ${colors.textMedium} mt-2 text-center`}>
                                For urgent technical SEO inquiries, call <a href="tel:8664344748" className={`${colors.textAccent} font-semibold hover:underline`}>866-434-4748</a><br />
                                Your information is handled with strict confidentiality.
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}