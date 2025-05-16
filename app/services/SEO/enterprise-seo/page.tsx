"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming you have this from shadcn/ui
import { 
    BarChart3, CheckCircle, Zap, Globe2, FileText, Mail, Users, ArrowRight, 
    Search, Target, Award, Shield, Clock, TrendingUp, Layers, Settings2,
    Briefcase, Building, DollarSign, Eye, Edit3, Lightbulb, MessageSquare, Users2, Star
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

// Define the new color palette based on #2E5077
const colors = {
    primary: "#2E5077",        // Navy Blue
    primaryDark: "#1D395C",    // Darker Navy
    primaryLight: "#4A6992",   // Lighter Navy
    primaryLightest: "#8DA3C0", // Even lighter Navy / Pale Blue

    bgBase: "bg-white", 
    bgLight: "bg-[#F5F7FA]",    // Very light off-white/blueish tint
    bgMedium: "bg-[#EFF3F8]",   // Light gray-blue for card elements
    bgDarkSection: "bg-[#F0F4F9]", // A slightly darker blue-tinted bg for sections

    textDark: "#2A3A4D",       // Dark Navy Blue / Dark Gray-Blue
    textMedium: "text-[#465A73]",  // Medium Navy Blue / Gray-Blue
    textLight: "text-white", 
    textAccent: "text-[#2E5077]",  // Primary Navy Blue

    borderLight: "border-gray-200", 
    borderMedium: "border-[#D8E0E9]", 
    borderAccent: "border-[#2E5077]",

    buttonPrimaryBg: "bg-[#2E5077]",
    buttonPrimaryHoverBg: "bg-[#1D395C]",
    buttonPrimaryText: "text-white",

    buttonSecondaryBg: "bg-transparent",
    buttonSecondaryHoverBg: "bg-[#2E5077]/10", // Light blue tint on hover
    buttonSecondaryText: "text-[#2E5077]",
    buttonSecondaryBorder: "border-[#2E5077]",

    gradientFrom: "from-[#2E5077]",
    gradientTo: "to-[#1D395C]",
    
    cardDefaultBg: "bg-white", 
    cardLightBg: "bg-[#F5F7FA]", 

    cardResultBg: "bg-[#F0F4F9]", 
    cardResultBorder: "border-[#D8E0E9]",
    cardResultTagBg: "bg-[#D7E0EB]",
    cardResultTagText: "text-[#1D395C]",

    inputBg: "bg-white",
    inputBorder: "border-gray-300",
    inputFocusRing: "focus:ring-[#2E5077]",
    placeholderText: "placeholder-gray-500",
};

// Animation Variants (same as the LocalSEOPage example)
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
  boxShadow: `0px 15px 25px rgba(136, 158, 115, 0.15)`, // Adjusted shadow color for #889E73
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
const heroInfoTags = {
    hidden: { opacity:0, y:20},
    visible: {opacity:1, y:0, transition: {duration:0.6, delay:1.0, ease:"easeOut"}}
}
const heroCTAs = {
    hidden: { opacity:0, y:20},
    visible: {opacity:1, y:0, transition: {duration:0.6, delay:1.2, ease:"easeOut"}}
}


export default function EnterpriseSEOPage() {
    const router = useRouter();
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const heroBgPatternY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    
    const websiteInputRef = React.useRef<HTMLInputElement>(null);
    // Assuming proposalWebsiteInputRef might be used in the proposal form later.
    // const proposalWebsiteInputRef = React.useRef<HTMLInputElement>(null);

    const handleHeroSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const website = websiteInputRef.current?.value.trim();
        // For demo, just log. Replace with actual navigation.
        // router.push(`/contact?service=enterprise-seo&website=${encodeURIComponent(website || "")}`);
        console.log("Hero form submitted with website:", website);
    };

    // Proposal form handler
    const handleProposalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const website = formData.get('website') as string;
        // For demo, just log. Replace with actual navigation.
        // router.push(`/contact?service=enterprise-seo-proposal&website=${encodeURIComponent(website || "")}`);
        console.log("Proposal form submitted. Data:", Object.fromEntries(formData));
    };


    return (
        <main className={`flex flex-col min-h-screen overflow-x-hidden font-sans ${colors.textDark}`}>
            {/* Hero Section */}
            <section ref={heroRef} className={`relative py-24 md:py-32 ${colors.bgLight} flex flex-col items-center justify-center overflow-hidden min-h-[85vh] md:min-h-[95vh]`}>
                <motion.div 
                    className="absolute inset-0 z-0"
                    style={{ y: heroBgPatternY }}
                >
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                        <defs>
                        <pattern id="heroPatternEnterprise" patternUnits="userSpaceOnUse" width="70" height="70" className="text-gray-300/40">
                            <path d="M70 0L0 70M0 0l70 70M35 0v70M0 35h70" stroke="currentColor" strokeWidth="0.4" />
                            <circle cx="10" cy="10" r="0.6" fill="currentColor" />
                            <circle cx="60" cy="60" r="0.6" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#heroPatternEnterprise)" />
                    </svg>
                </motion.div>
                
                <motion.div 
                    className="relative z-10 flex flex-col items-center w-full container mx-auto px-4 text-center"
                    style={{y: heroElementsY}}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={heroTitleContainer}>
                        <motion.h1 variants={heroTitleWord} className={`text-4xl md:text-6xl font-extrabold ${colors.textAccent} mb-5 tracking-tight drop-shadow-sm`}>
                            Enterprise SEO Services
                        </motion.h1>
                    </motion.div>
                    <motion.p variants={heroSubtitle} className={`text-lg md:text-xl ${colors.textMedium} mb-8 max-w-3xl mx-auto`}>
                        Scale Your Organic Growth with Proven, Data-Driven Enterprise SEO Solutions Designed for Large Organizations.
                    </motion.p>
                    <motion.div 
                        variants={heroInfoTags}
                        className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
                    >
                        {[
                            { icon: <CheckCircle className={`w-5 h-5 ${colors.textAccent}`} />, text: "Expert Strategic Team" },
                            { icon: <BarChart3 className={`w-5 h-5 ${colors.textAccent}`} />, text: "Measurable, Proven Results" },
                            { icon: <Target className={`w-5 h-5 ${colors.textAccent}`} />, text: "Custom Enterprise Solutions" },
                        ].map(tag => (
                            <div key={tag.text} className={`flex items-center gap-2 ${colors.cardDefaultBg} px-4 py-2.5 rounded-full shadow-sm border ${colors.borderMedium} hover:shadow-md transition-shadow`}>
                                {tag.icon}
                                <span className={`${colors.textDark} text-sm font-medium`}>{tag.text}</span>
                            </div>
                        ))}
                    </motion.div>
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

            {/* Services Section */}
            <section className={`py-16 md:py-24 ${colors.bgBase}`}>
                <div className="container mx-auto px-4">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center mb-4 ${colors.textAccent}`}
                    >
                        Our Core Enterprise SEO Services
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center mb-16 max-w-3xl mx-auto`}
                    >
                        Comprehensive solutions designed for large-scale businesses to achieve sustainable growth in organic search and market leadership.
                    </motion.p>
                    <motion.div 
                        variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    >
                        {[
                            { icon: <Shield className={`w-10 h-10 ${colors.textAccent}`} />, title: "Advanced Technical SEO Audits", desc: "In-depth analysis of your website's technical infrastructure, identifying critical issues impacting crawlability, indexation, and performance at scale.", points: ["Site Architecture Optimization", "Crawl Budget Management", "Log File Analysis"] },
                            { icon: <FileText className={`w-10 h-10 ${colors.textAccent}`} />, title: "Enterprise Content Strategy", desc: "Data-driven content planning, creation, and optimization to establish authority, engage diverse audience segments, and drive significant organic traffic.", points: ["Scalable Keyword Research", "Content Gap Analysis", "Topic Cluster Modeling"] },
                            { icon: <Layers className={`w-10 h-10 ${colors.textAccent}`} />, title: "Strategic Link Portfolio Development", desc: "Ethical and authoritative backlink acquisition to improve domain strength, enhance brand credibility, and boost search rankings for competitive terms.", points: ["Digital PR & Outreach", "High-Authority Placements", "Competitive Link Analysis"] }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={cardHover}
                                className={`${colors.cardLightBg} p-8 rounded-xl shadow-lg transition-all duration-300 border ${colors.borderMedium} flex flex-col`}
                            >
                                <div className={`mb-6 p-4 ${colors.bgMedium} rounded-full shadow-sm self-center`}>
                                    {service.icon}
                                </div>
                                <h3 className={`text-xl font-semibold mb-3 ${colors.textDark} text-center`}>{service.title}</h3>
                                <p className={`${colors.textMedium} text-sm mb-6 text-center flex-grow`}>{service.desc}</p>
                                <ul className="space-y-2.5 text-sm">
                                    {service.points.map(point => (
                                        <li key={point} className="flex items-center gap-2.5">
                                            <CheckCircle className={`w-5 h-5 ${colors.primaryLight} flex-shrink-0`} />
                                            <span className={colors.textMedium}>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Proven Results Section */}
            <section className={`py-16 md:py-24 ${colors.bgDarkSection}`}>
                <div className="container mx-auto px-4">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center mb-4 ${colors.textAccent}`}
                    >
                        Demonstrable Enterprise Impact
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center mb-16 max-w-3xl mx-auto`}
                    >
                        See how our tailored enterprise SEO strategies have translated into significant, measurable growth for our clients.
                    </motion.p>
                    <motion.div 
                        variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    >
                        {[
                            { value: "+250%", label: "Organic Traffic Growth", client: "Leading E-commerce Platform" },
                            { value: "+180%", label: "Top 3 Keyword Rankings", client: "Global Technology Company" },
                            { value: "+300%", label: "Enterprise Lead Generation", client: "B2B Solutions Provider" }
                        ].map((result, index) => (
                             <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={cardHover}
                                className={`${colors.cardDefaultBg} rounded-xl p-8 shadow-xl text-center border ${colors.borderMedium} transition-all duration-300`}
                            >
                                <div className={`text-5xl font-extrabold ${colors.textAccent} mb-3`}>{result.value}</div>
                                <div className={`text-lg font-semibold ${colors.textDark} mb-2`}>{result.label}</div>
                                <p className={`${colors.textMedium} text-sm`}>For a {result.client}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* Our Process Section */}
            <section className={`py-16 md:py-24 ${colors.bgBase}`}>
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center mb-4 ${colors.textAccent}`}
                    >
                        Our Strategic Enterprise SEO Process
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center mb-16 max-w-3xl mx-auto`}
                    >
                        A meticulously structured approach to deliver exceptional and sustainable results for your enterprise.
                    </motion.p>
                    <motion.div 
                        variants={staggerContainer(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }} 
                        className="space-y-10 relative"
                    >
                         {/* Optional: Vertical line for timeline effect */}
                        <div className={`absolute left-6 top-2 bottom-2 w-0.5 ${colors.primaryLightest} hidden md:block`}></div>
                        {[
                            { num: "1", title: "Deep Dive Discovery & Analysis", desc: "Comprehensive audit of your current SEO posture, technical health, competitive landscape, and untapped market opportunities specific to enterprise scale." },
                            { num: "2", title: "Bespoke Strategy Formulation", desc: "Development of a customized, multi-faceted SEO strategy that aligns precisely with your overarching business objectives and KPIs." },
                            { num: "3", title: "Precision Implementation & Execution", desc: "Our expert team meticulously executes the strategy, ensuring all technical optimizations, content enhancements, and off-page initiatives are flawlessly deployed." },
                            { num: "4", title: "Continuous Monitoring & Iterative Optimization", desc: "Ongoing performance tracking, advanced analytics, and data-driven adjustments to maximize ROI and adapt to evolving search landscapes." }
                        ].map((step, index) => (
                            <motion.div 
                                key={index}
                                variants={fadeInLeft}
                                className="flex items-start gap-6 relative pl-0 md:pl-16" // Adjust padding for line
                            >
                                <div className={`flex-shrink-0 w-12 h-12 ${colors.bgMedium} rounded-full flex items-center justify-center border-2 ${colors.borderAccent} shadow-md`}>
                                    <span className={`text-xl font-bold ${colors.textAccent}`}>{step.num}</span>
                                </div>
                                <div>
                                    <h3 className={`text-xl font-semibold ${colors.textDark} mb-2`}>{step.title}</h3>
                                    <p className={`${colors.textMedium} leading-relaxed`}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className={`py-16 md:py-24 ${colors.bgDarkSection}`}>
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold ${colors.textAccent} text-center mb-4`}
                    >
                        Your Partner for Enterprise SEO Dominance
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center max-w-3xl mx-auto mb-16`}
                    >
                        We deliver enterprise-grade SEO services combining technical prowess, strategic insight, and unwavering commitment to your success.
                    </motion.p>
                    <motion.div 
                        variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: <Users2/>, title: "Dedicated Expert Team", desc: "Seasoned SEO specialists with extensive experience in managing complex, large-scale enterprise projects." },
                            { icon: <Settings2/>, title: "Customized Solutions", desc: "Tailored strategies meticulously designed to meet your unique business goals, industry nuances, and market demands." },
                            { icon: <TrendingUp/>, title: "Proven, Measurable Results", desc: "A strong track record of delivering significant improvements in organic traffic, search rankings, and ROI for enterprise clients." },
                            { icon: <Globe2/>, title: "Global & Multi-Market Expertise", desc: "Strategies adaptable for international SEO, multi-lingual sites, and diverse geographic targeting." },
                            { icon: <Shield/>, title: "Advanced Technical Proficiency", desc: "Cutting-edge solutions for complex technical SEO challenges inherent in large enterprise websites." },
                            { icon: <BarChart3/>, title: "Transparent & Actionable Reporting", desc: "Clear, insightful analytics and regular progress reports, keeping you informed every step of the way." },
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
            
            {/* Enterprise SEO Success Stories Section */}
            <section className={`py-16 md:py-24 ${colors.bgBase}`}>
                <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center">
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold ${colors.textAccent} text-center mb-3`}
                    >
                        Enterprise SEO Success Stories
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center mb-12 max-w-2xl`}
                    >
                        See How We Deliver Transformative Results for Large-Scale Brands and Complex Websites.
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
                                tag: "SITE AUDIT & REMEDIATION", 
                                stats: [{val: "+12,000", label: "Critical Issues Fixed"}, {val: "+45.2%", label: "Crawl Efficiency"}],
                                quote: "“Our enterprise site saw a dramatic improvement in technical health and organic reach after their thorough audit.”"
                            },
                            { 
                                svg: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="12" y="24" width="32" height="8" rx="2" fill={colors.primary} fillOpacity="0.18" />
                                        <rect x="18" y="32" width="20" height="4" rx="2" fill={colors.primary} fillOpacity="0.10" />
                                        <rect x="24" y="36" width="8" height="8" rx="2" fill={colors.primary} />
                                        <rect x="26" y="16" width="4" height="8" rx="2" fill={colors.primary} />
                                        <circle cx="28" cy="14" r="4" fill={colors.primary} fillOpacity="0.18" />
                                    </svg>,
                                tag: "STRUCTURED DATA IMPLEMENTATION",
                                stats: [{val: "+900%", label: "Rich Results Visibility"}, {val: "+500%", label: "Enhanced Index Coverage"}],
                                quote: "“Their structured data overhaul led to a huge increase in search features and valuable impressions for our key product lines.”"
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
                                stats: [{val: "-2.1s Avg.", label: "Page Load Time"}, {val: "90.1% Pass", label: "Core Web Vitals"}],
                                quote: "“Our enterprise site is now lightning fast, passing all Core Web Vitals, thanks to their meticulous page speed work.”"
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
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={buttonHover}>
                         <Button 
                            className={`font-semibold text-base px-10 py-3.5 rounded-lg shadow-md ${colors.buttonPrimaryBg} ${colors.buttonPrimaryText} hover:${colors.buttonPrimaryHoverBg} transition-all mt-2`}
                            onClick={() => router.push('/contact?service=enterprise-seo-casestudies')}
                        >
                            EXPLORE MORE SUCCESS STORIES
                        </Button>
                    </motion.div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className={`py-20 md:py-28 bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} relative overflow-hidden`}>
                <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.07 }} // Subtle opacity
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                    <div className="absolute inset-0 opacity-25 mix-blend-overlay"> {/* Adjusted for subtlety */}
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="finalCtaPatternEnterprise" patternUnits="userSpaceOnUse" width="50" height="50"><circle cx="10" cy="10" r="0.7" fill="white"/><path d="M0 25L50 25M25 0L25 50" stroke="white" strokeWidth="0.25"/></pattern></defs><rect width="100%" height="100%" fill="url(#finalCtaPatternEnterprise)"/></svg>
                    </div>
                </motion.div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to Scale Your Enterprise SEO Performance?
                        </h2>
                        <p className="text-xl text-white/90 mb-10">
                            Partner with Markov Digital's enterprise SEO experts to dominate search at scale and achieve lasting organic growth.
                        </p>
                        <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                             <Button
                                className={`bg-white ${colors.textAccent} hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg shadow-xl`}
                                onClick={() => router.push("/contact?service=enterprise-seo-consultation")}
                            >
                                Request Your Consultation <ArrowRight className="inline-block ml-2 w-5 h-5"/>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Get My FREE Enterprise SEO Proposal Section */}
            <section className={`py-16 md:py-24 ${colors.bgLight}`}>
                <div className="container mx-auto px-4 max-w-5xl"> {/* Increased max-width for better layout */}
                    <motion.h2 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`text-3xl md:text-4xl font-bold text-center mb-3 ${colors.textAccent}`}
                    >
                        Get Your <span className="underline decoration-wavy decoration-current/50">FREE</span> Enterprise SEO Proposal
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.textMedium} text-lg text-center mb-12 max-w-2xl mx-auto`}
                    >
                        Discover how Markov Digital can elevate your enterprise search strategy. Complete the form for a tailored, no-obligation proposal.
                    </motion.p>
                    
                    <motion.div 
                        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`${colors.bgBase} rounded-2xl shadow-xl p-8 md:p-10 border ${colors.borderMedium} flex flex-col lg:flex-row gap-8 items-stretch`}
                    >
                        {/* Left: Results Graphic */}
                        <div className={`lg:w-2/5 flex flex-col justify-center items-center ${colors.bgDarkSection} rounded-xl p-8 text-center`}>
                             <div className={`p-4 ${colors.bgMedium} rounded-full mb-5 shadow-sm self-center`}>
                                <TrendingUp className={`w-12 h-12 ${colors.textAccent}`} />
                            </div>
                            <h3 className={`${colors.textAccent} text-2xl font-bold mb-3`}>Experience Real Enterprise Growth</h3>
                            <p className={`${colors.textMedium} mb-6 text-sm`}>Partner with our Enterprise SEO team to unlock your website's full potential and scale your business.</p>
                            <div className="space-y-3">
                                <div className="text-left">
                                    <div className={`${colors.textAccent} text-lg font-bold`}>+810%</div>
                                    <div className={`${colors.textMedium} text-xs`}>Increase in Organic Impressions</div>
                                </div>
                                <div className="text-left">
                                    <div className={`${colors.textAccent} text-lg font-bold`}>+257%</div>
                                    <div className={`${colors.textMedium} text-xs`}>Growth in Organic Page Views</div>
                                </div>
                                 <div className="text-left">
                                    <div className={`${colors.textAccent} text-lg font-bold`}>+150%</div>
                                    <div className={`${colors.textMedium} text-xs`}>Boost in High-Value Conversions</div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Lead Form */}
                        <form onSubmit={handleProposalSubmit} className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                            <div className="md:col-span-1">
                                <label htmlFor="propFirstName" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>First Name*</label>
                                <Input name="firstName" id="propFirstName" type="text" placeholder="John" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="propLastName" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Last Name*</label>
                                <Input name="lastName" id="propLastName" type="text" placeholder="Doe" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="propCompany" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Company/Organization*</label>
                                <Input name="company" id="propCompany" type="text" placeholder="Your Company LLC" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="propWebsite" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Website</label>
                                <Input name="website" id="propWebsite" type="text" placeholder="www.yourcompany.com" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="propEmail" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Email Address*</label>
                                <Input name="email" id="propEmail" type="email" placeholder="you@example.com" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} required />
                            </div>
                             <div className="md:col-span-1">
                                <label htmlFor="propCompanySize" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Company Size*</label>
                                <select name="companySize" id="propCompanySize" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.textDark} bg-white`} required>
                                    <option value="">Select size...</option>
                                    <option value="1-50">1-50 Employees</option>
                                    <option value="51-200">51-200 Employees</option>
                                    <option value="201-1000">201-1,000 Employees</option>
                                    <option value="1000+">1,000+ Employees</option>
                                </select>
                            </div>
                            <div className="md:col-span-1">
                                <label htmlFor="propHearAbout" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>How Did You Hear About Us?</label>
                                <Input name="hearAbout" id="propHearAbout" type="text" placeholder="e.g., LinkedIn, Referral" className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText}`} />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="propMessage" className={`block text-sm font-medium ${colors.textMedium} mb-1`}>Key SEO Challenges or Goals</label>
                                <textarea name="message" id="propMessage" placeholder="Briefly describe your main SEO challenges or objectives..." rows={3} className={`w-full px-4 py-3 rounded-md border ${colors.inputBorder} ${colors.inputFocusRing} ${colors.placeholderText} min-h-[80px]`} />
                            </div>
                            <motion.div className="md:col-span-2 mt-3" whileHover={buttonHover}>
                                <Button 
                                    type="submit" 
                                    className={`w-full font-semibold text-base px-8 py-3.5 rounded-lg shadow-md ${colors.buttonPrimaryBg} ${colors.buttonPrimaryText} hover:${colors.buttonPrimaryHoverBg} transition-all`}
                                >
                                    SEND MY FREE ENTERPRISE PROPOSAL
                                </Button>
                            </motion.div>
                            <div className={`md:col-span-2 text-xs ${colors.textMedium} mt-2 text-center`}>
                                For immediate assistance, call us at <a href="tel:8664344748" className={`${colors.textAccent} font-semibold hover:underline`}>866-434-4748</a><br />
                                Your information is confidential. We respect your privacy.
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}