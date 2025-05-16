"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
    Search, ChevronRight, Zap, Target, Brain, BarChart3, Lightbulb, Users, CheckCircle, 
    ShieldCheck, DollarSign, MessageSquare, ArrowRight, Layers, BookOpen, Handshake, 
    Settings2, Share2, SlidersHorizontal, RefreshCw, Award, Cpu, Eye, UserCheck, Mail,
    Building, Globe, UsersRound, Scaling, Store, MapPin, Network, Server
} from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import React, { useRef } from 'react';

export default function FranchiseDigitalMarketingPage() {
  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Hero Parallax/Scroll Effects
  const heroBgPatternY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroBgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.03, 0.1]); // Very subtle pattern
  const heroElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const heroImageOpacity = useTransform(scrollYProgress, [0, 0.6], [0.5, 0]); // Image starts dimmer
  const heroImageScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);

  const navigateToContact = (serviceType: string = 'franchise-digital-marketing', service: string = 'general', context?: string) => {
    const url = context
      ? `/contact?type=${serviceType}&service=${service}&context=${context}`
      : `/contact?type=${serviceType}&service=${service}`;
    router.push(url);
  };

  // Animation Variants
  const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
  const staggerContainer = (staggerAmount = 0.1, delayChildren = 0.15) => ({ // Faster stagger
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: staggerAmount, delayChildren: delayChildren } }
  });
  const cardHover = { 
    scale: 1.03, 
    y: -6, 
    boxShadow: "0px 15px 25px rgba(0,0,0,0.35)", // Darker shadow for depth
    transition: { type: "spring", stiffness: 280, damping: 15 } 
  };
  const buttonHover = { scale: 1.04, transition: { type: "spring", stiffness: 350, damping: 12 }};
  
  const heroTitleContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03, delayChildren: 0.4 } } 
  };
  const heroLetterVariant = {
    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 150, damping: 15, duration: 0.6 } }
  };
  const heroContentVariants = {
    hidden: { opacity:0, y:20},
    visible: {opacity:1, y:0, transition: {duration:0.7, ease:"easeOut"}}
  };

  // #2A4759 Slate Blue Theme
  const slate = {
    base: "bg-[#2A4759]", // Your primary color for main sections/cards
    darker: "bg-[#1E3340]", // For overall page background, very dark sections
    dark: "bg-[#243B4A]", // For slightly less dark sections or card backgrounds
    lighter: "bg-[#3B5998]", // Conceptual lighter shade, could be bg-[#2A4759]/70 for glassmorphism
    lightest: "bg-[#5C7DAA]", // For accents, borders, or very light elements

    textPrimary: "text-slate-100", // Off-white
    textSecondary: "text-slate-300",
    textAccent: "text-sky-300", // Using a cool light blue/cyan as the main accent against dark blue

    buttonPrimaryBg: "bg-sky-400", // Accent color for buttons
    buttonPrimaryText: "text-[#1E3340]", // Dark text on accent button
    buttonPrimaryHoverBg: "bg-sky-500",

    buttonSecondaryBg: "bg-[#3B5998]", // Lighter shade of main blue
    buttonSecondaryText: "text-slate-100",
    buttonSecondaryHoverBg: "bg-[#5C7DAA]",
    
    borderLight: "border-[#3B5998]/40", // Softer border
    borderAccent: "border-sky-400", // Accent border

    gradientFrom: "from-sky-400",
    gradientTo: "to-[#3B5998]", // Gradient using accent and lighter shade
  };

  const franchiseHeroTitle = "Unify. Amplify. Conquer.";

  return (
    <div className={`${slate.darker} ${slate.textPrimary} font-sans overflow-x-hidden`}>

      {/* 1. Hero Section - Franchise Focus (Dark Slate Blue Theme) */}
      <section ref={heroRef} className={`relative min-h-screen h-auto md:h-[120vh] flex flex-col justify-center ${slate.darker} overflow-hidden py-24 md:py-0`}>
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroBgPatternY, opacity: heroBgOpacity }} 
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
            <defs>
              <pattern id="franchiseHeroPatternSlate" patternUnits="userSpaceOnUse" width="100" height="100">
                <circle cx="20" cy="20" r="0.75" fill="rgba(100, 116, 139, 0.1)"/> {/* slate-500/10 */}
                <circle cx="70" cy="70" r="0.5" fill="rgba(100, 116, 139, 0.07)"/>
                <path d="M0 50 H100 M50 0 V100" stroke="rgba(100, 116, 139, 0.03)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#franchiseHeroPatternSlate)" />
          </svg>
        </motion.div>

        <motion.div className={`absolute -top-1/4 -left-1/3 w-3/4 h-3/4 bg-gradient-to-br from-[#2A4759]/30 to-transparent rounded-full filter blur-3xl animate-blob opacity-60`} />
        <motion.div className={`absolute -bottom-1/4 -right-1/3 w-3/4 h-3/4 bg-gradient-to-tl from-sky-500/15 to-transparent rounded-full filter blur-3xl animate-blob animation-delay-3500 opacity-50`} />
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <motion.div 
                className="w-full"
                style={{ y: heroElementsY }}
                initial="hidden"
                animate="visible"
                variants={heroTitleContainer}
            >
                <motion.div variants={heroLetterVariant} className={`inline-flex items-center gap-2.5 text-sm font-semibold ${slate.textAccent} bg-[#2A4759]/70 border ${slate.borderAccent} px-5 py-2 rounded-full mb-10 backdrop-blur-md shadow-lg`}>
                    <Store className="w-4.5 h-4.5" />
                    <span>MarkovWeb: Franchise Digital Command</span>
                </motion.div>

                <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-10 leading-tight tracking-tight">
                  { franchiseHeroTitle.split("").map((char, i) => <motion.span key={`fh-${i}`} variants={heroLetterVariant} className="inline-block">{char}</motion.span>) }
                </motion.h1>
                
                <motion.p 
                    variants={heroContentVariants} transition={{delay: franchiseHeroTitle.length * 0.03 + 0.2}} 
                    className={`text-xl md:text-2xl ${slate.textSecondary} mb-14 max-w-3xl mx-auto leading-relaxed`}
                >
                    Empower every franchise location with consistent branding and hyper-local strategies. MarkovWeb provides the centralized command and localized precision to maximize revenue across your entire network.
                </motion.p>

                <motion.div 
                    variants={heroContentVariants} transition={{delay: franchiseHeroTitle.length * 0.03 + 0.4}} 
                    className={`max-w-xl mx-auto bg-[#243B4A]/70 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-2xl border ${slate.borderLight}`}
                >
                    <p className={`${slate.textPrimary} text-lg font-semibold mb-5`}>Get a Free Franchise Marketing Blueprint:</p>
                    <form onSubmit={(e) => { e.preventDefault(); navigateToContact('franchise-digital-marketing', 'strategy', 'hero-email-submit'); }} className="flex flex-col sm:flex-row gap-4 items-center">
                        <div className="relative flex-grow w-full sm:w-auto">
                            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${slate.textSecondary} h-5 w-5 opacity-70`} />
                            <Input
                                type="text"
                                name="hero_franchise_website"
                                required
                                placeholder="Your Main Franchise Website"
                                className={`pl-12 pr-4 py-4 bg-[#1E3340]/80 ${slate.textPrimary} text-base border ${slate.borderLight} focus:ring-2 focus:ring-sky-400 focus:border-sky-500 w-full rounded-xl placeholder-slate-400 transition-all duration-300 text-lg`}
                            />
                        </div>
                        <motion.div whileHover={buttonHover} className="w-full sm:w-auto">
                        <Button
                            type="submit"
                            className={`${slate.buttonPrimaryBg} hover:${slate.buttonPrimaryHoverBg} ${slate.buttonPrimaryText} text-md font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg w-full sm:w-auto whitespace-nowrap`}
                        >
                            Analyze My Franchise <ArrowRight className="inline-block ml-2.5 w-5 h-5"/>
                        </Button>
                        </motion.div>
                    </form>
                     <p className={`text-xs ${slate.textSecondary} mt-5 opacity-70`}>Tailored analysis for multi-location businesses.</p>
                </motion.div>
            </motion.div>
        </div>
        
        <motion.div 
            className="absolute inset-x-0 bottom-0 h-1/3 md:h-1/2 lg:h-2/3 z-0 pointer-events-none"
            style={{ 
                opacity: heroImageOpacity,
                scale: heroImageScale,
                y: heroElementsY 
            }}
        >
            <Network 
                className="w-full h-full object-contain text-sky-500/10 animate-pulse-slow" 
                strokeWidth={0.25} // Even thinner for more abstract
            />
        </motion.div>
        
        <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay: franchiseHeroTitle.length * 0.03 + 1.2, duration:1}}
        >
            <ChevronRight className={`w-10 h-10 ${slate.textSecondary} opacity-30 animate-bounce-vertical transform rotate-90`} />
        </motion.div>
      </section>

      {/* --- SECTION 2: The Franchise Challenge (Still Dark, but slightly lighter shade) --- */}
      <section className={`py-24 ${slate.dark} ${slate.textPrimary}`}> {/* Using slate.dark */}
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${slate.textPrimary} mb-6`}>
            The Franchise Marketing <span className={slate.textAccent}>Tightrope</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-xl ${slate.textSecondary} opacity-90 mb-16 max-w-3xl mx-auto`}>
            Franchisors juggle brand consistency with local franchisee empowerment, manage diverse market needs, and ensure scalable, measurable growth across the entire network.
          </motion.p>
          <motion.div variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Brand Cohesion vs. Local Relevance", desc: "Maintaining a unified brand identity while enabling franchisees to connect authentically with their local communities.", icon: <Share2 /> },
              { title: "Scalable Support & Training", desc: "Providing consistent, high-quality marketing resources and training across a growing network of franchisees.", icon: <UsersRound /> },
              { title: "Network-Wide Performance Visibility", desc: "Aggregating data from all locations for a clear view of overall performance and individual franchisee success.", icon: <BarChart3 /> }
            ].map(item => (
              <motion.div 
                variants={fadeInUp} 
                key={item.title} 
                className={`${slate.base} p-10 rounded-2xl shadow-xl border ${slate.borderLight} hover:border-sky-400/60 transition-all duration-300`} 
                whileHover={cardHover}
              >
                <div className={`bg-[#1E3340]/50 p-4 inline-block rounded-xl mb-6`}>
                    {React.cloneElement(item.icon, {className: `w-10 h-10 ${slate.textAccent}`})}
                </div>
                <h3 className={`text-2xl font-semibold ${slate.textPrimary} mb-4`}>{item.title}</h3>
                <p className={`${slate.textSecondary} opacity-90 text-md leading-relaxed`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: Our Franchise-Centric Strategic Pillars (Darker Base Theme) --- */}
      <section className={`py-24 ${slate.darker}`}> {/* Using slate.darker for variation */}
        <div className="container mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${slate.textPrimary} text-center mb-20`}>
            Pillars of Our <span className={`${slate.textAccent} underline decoration-wavy decoration-sky-500`}>Franchise Success System</span>
          </motion.h2>
          <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Centralized Brand Management", desc: "Ensuring brand integrity and consistent messaging across all franchise touchpoints.", icon: <ShieldCheck /> },
              { title: "Hyper-Local Marketing Enablement", desc: "Empowering franchisees with tools and strategies for effective local market penetration.", icon: <MapPin /> },
              { title: "Network Performance Analytics", desc: "Providing franchisors with comprehensive data on system-wide and individual location performance.", icon: <BarChart3 /> },
              { title: "Scalable Growth Frameworks", desc: "Strategies designed to support rapid franchise expansion and new location onboarding.", icon: <Scaling /> }
            ].map(pillar => (
              <motion.div 
                variants={fadeInUp} 
                key={pillar.title} 
                className={`${slate.base} p-8 rounded-2xl shadow-2xl ${slate.borderLight} border-2 transform transition-all duration-300 hover:-translate-y-2.5`} 
                whileHover={cardHover} // Re-using cardHoverDark as cardHover
              >
                <div className={`bg-[#243B4A]/60 w-20 h-20 rounded-xl flex items-center justify-center mb-8 shadow-inner`}>
                    {React.cloneElement(pillar.icon, {className: `w-10 h-10 ${slate.textAccent}`})}
                </div>
                <h3 className={`text-2xl font-semibold ${slate.textPrimary} mb-4`}>{pillar.title}</h3>
                <p className={`${slate.textSecondary} text-md leading-relaxed`}>{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: The Franchise Marketing Blueprint (Slightly Lighter Dark Theme) --- */}
      <section id="our-franchise-blueprint" className={`py-28 ${slate.dark} ${slate.textPrimary} relative`}>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${slate.textPrimary} text-center mb-8`}>The MarkovWeb Franchise Blueprint</motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-xl ${slate.textSecondary} opacity-90 text-center mb-24 max-w-3xl mx-auto`}>
            A specialized methodology addressing the unique dynamics of franchise marketing, from national brand building to local franchisee success.
          </motion.p>
          <div className="relative">
             <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-0.5 bg-slate-700/50 transform -translate-y-1/2 -z-1"></div>

            <motion.div variants={staggerContainer(0.25)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-10">
              {[
                { num: "01", title: "Franchise System Audit", desc: "Holistic review of brand assets, current marketing efforts, franchisee capabilities, and competitive landscape.", icon: <Search/>},
                { num: "02", title: "Unified & Localized Strategy", desc: "Developing a core national strategy with adaptable frameworks for hyper-local execution by franchisees.", icon: <Network/>},
                { num: "03", title: "Franchisee Enablement Platform", desc: "Providing tools, training, and resources to empower franchisees for local marketing success.", icon: <UsersRound/>},
                { num: "04", title: "Network-Wide Performance & Growth", desc: "Implementing systems for tracking, reporting, and optimizing performance across the entire franchise network.", icon: <Zap/> }
              ].map((step) => (
                <motion.div 
                    variants={fadeInUp} 
                    key={step.num} 
                    className={`text-center relative flex flex-col items-center p-8 rounded-2xl ${slate.base} border-2 ${slate.borderLight} shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-sky-500`}
                    whileHover={cardHover}
                >
                    <div className={`absolute -top-px -left-px -right-px h-2 bg-gradient-to-r ${slate.gradientFrom} ${slate.gradientTo} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`w-24 h-24 rounded-full bg-[#1E3340] border-4 border-[#3B5998]/70 flex items-center justify-center mb-8 shadow-lg relative`}>
                        {React.cloneElement(step.icon, {className: `w-12 h-12 ${slate.textAccent}`})}
                        <span className={`absolute -top-3 -right-3 ${slate.buttonPrimaryBg} ${slate.buttonPrimaryText} text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#2A4759] shadow-md`}>{step.num}</span>
                    </div>
                  <h3 className={`text-2xl font-semibold ${slate.textPrimary} mb-4`}>{step.title}</h3>
                  <p className={`${slate.textSecondary} opacity-90 text-md leading-relaxed`}>{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections 5-12 will continue this pattern of using shades of #2A4759 */}
      {/* For brevity, I will not repeat all of them, but the principle is:
          - Use slate.darker, slate.dark, slate.base for section backgrounds to create subtle shifts.
          - Use slate.base, slate.lighter (often with backdrop-blur) for cards.
          - Use slate.textPrimary, slate.textSecondary for text.
          - Use slate.textAccent (sky-300/400) for key highlights and icons.
          - Buttons will use slate.buttonPrimaryBg (sky-400) or slate.buttonSecondaryBg (#3B5998 or similar)
      */}

      {/* --- SECTION 5: Franchise Brand Consistency & Local Adaptation (Darker Slate Blue Theme) --- */}
      <section className={`py-24 ${slate.darker}`}>
         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Share2 className={`w-24 h-24 ${slate.textAccent} mb-8 opacity-70`}/>
            <h2 className={`text-4xl md:text-5xl font-bold ${slate.textPrimary} mb-8`}>Brand Unity, <span className={slate.textAccent}>Local Impact</span></h2>
            <p className={`text-xl ${slate.textSecondary} mb-10 leading-relaxed`}>
              We empower your franchise network to maintain impeccable brand consistency while tailoring messaging and promotions that resonate deeply with local communities.
            </p>
            <ul className={`space-y-5 ${slate.textSecondary} mb-12 text-lg`}>
              {[
                "Centralized Digital Asset Management & Brand Guidelines.",
                "Customizable Local Marketing Templates & Campaign Kits.",
                "Franchisee Training on Localized Content Creation.",
                "Performance Monitoring for Brand Compliance & Local Effectiveness."
              ].map(item => (
                 <li key={item} className="flex items-start">
                    <CheckCircle className={`w-7 h-7 ${slate.textAccent} mr-4 mt-1 flex-shrink-0`} /> 
                    <span>{item}</span>
                </li>
              ))}
            </ul>
            <motion.div whileHover={buttonHover}>
            <Button
                className={`${slate.buttonSecondaryBg} hover:${slate.buttonSecondaryHoverBg} ${slate.buttonSecondaryText} text-lg font-bold px-10 py-4 rounded-xl transition duration-300 shadow-lg`}
                onClick={() => navigateToContact('franchise-digital-marketing', 'brand-consistency')}
              >
                Unify Your Franchise Brand
            </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={fadeInUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="hidden lg:block relative aspect-[4/3] max-w-lg mx-auto" // Adjusted aspect ratio
          >
            <img 
                src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Brand Consistency and Local Adaptation" 
                className="rounded-3xl shadow-2xl object-cover w-full h-full filter brightness-80"
            />
            <div className={`absolute inset-0 bg-gradient-to-br from-[#2A4759]/30 via-transparent to-sky-600/10 rounded-3xl`}></div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 6: Centralized Marketing Tech for Franchises (Slightly Lighter Dark Theme) --- */}
      <section className={`py-24 ${slate.dark}`}>
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Server className={`w-20 h-20 ${slate.textAccent} mx-auto mb-8 opacity-90`}/>
            <h2 className={`text-4xl md:text-5xl font-bold ${slate.textPrimary} mb-8`}>
              Centralized Tech, <span className={slate.textAccent}>Decentralized Success</span>
            </h2 >
            <p className={`text-xl ${slate.textSecondary} opacity-90 mb-16 max-w-3xl mx-auto`}>
              We implement and manage marketing technology solutions that provide franchisors with network-wide oversight while equipping franchisees with powerful, easy-to-use tools for local execution.
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
              { title: "Franchise CRM & Marketing Automation", desc: "Unified platforms for lead management, customer communication, and campaign automation across the network."},
              { title: "Network-Wide Analytics Dashboard", desc: "Centralized reporting that tracks KPIs for both individual locations and the entire franchise system."},
              { title: "Local Listing & Reputation Management Tools", desc: "Software to manage online reviews, local citations, and GMB profiles efficiently for all franchisees."}
            ].map(item => (
              <motion.div 
                variants={fadeInUp} 
                key={item.title} 
                className={`${slate.base} p-8 rounded-2xl shadow-xl border ${slate.borderLight} hover:border-sky-400/70 transition-all duration-300`}
                whileHover={cardHover}
              >
                <div className={`bg-[#1E3340]/60 p-4 inline-block rounded-xl mb-6`}>
                  <Settings2 className={`w-8 h-8 ${slate.textAccent}`}/>
                </div>
                <h3 className={`text-2xl font-semibold ${slate.textPrimary} mb-4`}>{item.title}</h3>
                <p className={`${slate.textSecondary} opacity-90 text-md leading-relaxed`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 7: Franchise Success Stories (Base Dark Theme) --- */}
      <section className={`py-24 ${slate.darker}`}>
        <div className="container mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${slate.textPrimary} text-center mb-20`}>
            Franchise <span className={`${slate.textAccent} underline decoration-wavy decoration-sky-500 decoration-2`}>Growth Realized</span>
          </motion.h2>
          <motion.div variants={staggerContainer(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-10">
            {[
              { client: "RapidFix Auto Centers", result: "+210% Service Bookings", image: "/reconstruction.png" },
              { client: "The Cozy Cafe Franchise", result: "70% Increase in Local Foot Traffic", image: "/therapy.jpg" },
              { client: "HealthyBites Meal Prep", result: "+400% Online Orders System-Wide", image: "/CareClinic.avif" }
            ].map(cs => (
              <motion.div 
                variants={fadeInUp} 
                key={cs.client} 
                className="group rounded-2xl overflow-hidden shadow-2xl relative border-2 border-[#243B4A] hover:${slate.borderAccent} transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{boxShadow: `0px 25px 40px rgba(103, 232, 249, 0.15)`}} // Cyan glow
              >
                <img src={cs.image} alt={cs.client} className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-70 group-hover:brightness-85"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-[#1E3340]/70 to-transparent p-8 flex flex-col justify-end">
                  <h3 className={`text-2xl font-bold ${slate.textPrimary} mb-2 drop-shadow-lg`}>{cs.client}</h3>
                  <p className={`text-xl ${slate.textAccent} font-semibold drop-shadow-lg`}>{cs.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
           <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-20">
                <Button
                    className={`${slate.buttonPrimaryBg} hover:${slate.buttonPrimaryHoverBg} ${slate.buttonPrimaryText} text-lg font-bold px-12 py-4 rounded-xl transition duration-300 shadow-xl`}
                    onClick={() => router.push('/franchise-case-studies')}
                >
                    View All Franchise Triumphs
                </Button>
            </motion.div>
        </div>
      </section>
      
      {/* --- SECTION 9: Franchise Marketing Health Check (Base Dark Theme - CTA) --- */}
      <section className={`py-28 ${slate.darker}`}>
         <div className="container mx-auto px-6">
          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={`bg-gradient-to-br ${slate.gradientFrom} ${slate.gradientTo} via-[#2A4759] p-12 md:p-20 rounded-3xl shadow-2xl text-center border-2 ${slate.borderAccent}`}
          >
            <CheckCircle className={`w-24 h-24 text-white mx-auto mb-10 opacity-90`}/>
            <h2 className={`text-4xl md:text-5xl font-bold ${slate.textPrimary} mb-10`}>Franchise Network <span className={`underline decoration-wavy decoration-sky-300 decoration-2`}>Health Audit</span></h2>
            <p className={`text-xl text-slate-200 mb-14 max-w-3xl mx-auto leading-relaxed`}>
              Is your franchise marketing system performing optimally? Our specialized audit for multi-location businesses identifies gaps in brand consistency, local engagement, and overall network performance.
            </p>
            <motion.div whileHover={buttonHover}>
            <Button
              className={`${slate.buttonSecondaryBg} ${slate.buttonSecondaryText} hover:${slate.buttonSecondaryHoverBg} hover:text-sky-100 text-lg font-bold px-14 py-4 rounded-xl transition duration-300 shadow-xl transform hover:shadow-sky-500/20`}
              onClick={() => navigateToContact('franchise-digital-marketing', 'strategy-audit', 'franchise-health-audit')}
            >
              Audit My Franchise Network
            </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 10: Franchise Marketing Program Tiers (Slightly Lighter Dark Theme) --- */}
      <section className={`py-24 ${slate.dark}`}>
        <div className="container mx-auto px-6">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${slate.textPrimary} text-center mb-8`}>
            Franchise Marketing <span className={slate.textAccent}>Program Tiers</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-xl ${slate.textSecondary} opacity-90 text-center mb-20 max-w-3xl mx-auto`}>
            Tailored programs designed to support your franchise network's growth, whether you're establishing foundational marketing or aiming for sophisticated multi-market dominance.
          </motion.p>
          <motion.div 
            variants={staggerContainer(0.15)} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid lg:grid-cols-3 gap-10 items-stretch"
          >
            {[
              { name: "Local Launchpad", focus: "For New & Emerging Franchisees", features: ["Local SEO Setup & GMB Optimization", "Core Social Media Presence Kit", "Localized Ad Campaign Blueprints", "Basic Performance Reporting"], ideal: "Individual Franchisees / Small Networks" },
              { name: "Network Navigator", focus: "For Growing Franchise Systems", features: ["Centralized Brand Asset Portal", "Co-op Marketing Program Setup", "Multi-Location Campaign Management", "Advanced Analytics & Benchmarking", "Franchisee Training Modules"], ideal: "Medium-Sized Networks", popular: true },
              { name: "System Optimizer", focus: "For Established Franchise Brands", features: ["Enterprise MarTech Integration", "National & Hyper-Local SEO Synergy", "AI-Driven Campaign Optimization", "Franchise Advisory & Governance", "Custom Performance Dashboards"], ideal: "Large & National Franchises" }
            ].map(tier => (
              <motion.div 
                variants={fadeInUp} 
                key={tier.name} 
                className={`${slate.base} p-10 rounded-2xl shadow-xl flex flex-col border-2 ${tier.popular ? slate.borderAccent : slate.borderLight} relative transition-all duration-300`}
                whileHover={cardHover}
              >
                {tier.popular && <div className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ${slate.buttonPrimaryBg} ${slate.buttonPrimaryText} px-5 py-1.5 rounded-full text-sm font-bold shadow-lg`}>Most Popular</div>}
                <h3 className={`text-3xl font-extrabold ${slate.textPrimary} mb-3`}>{tier.name}</h3>
                <p className={`${slate.textAccent} text-lg font-semibold mb-8`}>{tier.focus}</p>
                <ul className={`space-y-3.5 ${slate.textSecondary} opacity-90 mb-10 flex-grow text-sm`}>
                  {tier.features.map(f => <li key={f} className="flex items-start"><CheckCircle className={`w-5 h-5 ${slate.textAccent} mr-3 mt-0.5 flex-shrink-0`} /> {f}</li>)}
                </ul>
                <p className={`text-xs text-slate-400 mb-8 uppercase tracking-wider`}>Ideal for: {tier.ideal}</p>
                <motion.div whileHover={buttonHover} className="w-full">
                <Button
                  className={`w-full mt-auto ${tier.popular ? `${slate.buttonPrimaryBg} hover:${slate.buttonPrimaryHoverBg} ${slate.buttonPrimaryText}` : `${slate.buttonSecondaryBg} hover:${slate.buttonSecondaryHoverBg} ${slate.buttonSecondaryText}`} font-bold py-3.5 rounded-xl transition duration-300 text-md`}
                  onClick={() => navigateToContact('franchise-digital-marketing', 'program-tier', tier.name.toLowerCase().replace(/\s+/g, '-'))}
                >
                  Explore {tier.name}
                </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* --- SECTION 11: Franchise Marketing FAQs (Darker Base Theme) --- */}
      <section className={`py-24 ${slate.darker}`}>
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-4xl md:text-5xl font-bold ${slate.textPrimary} text-center mb-16`}>
            Franchise Marketing <span className={`${slate.textAccent} underline decoration-wavy decoration-sky-500 decoration-2`}>Q&A</span>
          </motion.h2>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            {[
              { q: "How do you ensure brand consistency across all franchise locations?", a: "We establish robust brand guidelines, provide centralized marketing assets, and implement approval workflows for localized content to maintain a unified brand voice while allowing for local adaptation." },
              { q: "Can franchisees manage their own local marketing with your system?", a: "Yes, our platform and strategies empower franchisees with easy-to-use tools and pre-approved templates for local campaigns, while franchisors maintain oversight and control." },
              { q: "How do you track performance for individual franchisees versus the entire network?", a: "We implement multi-layered analytics that provide granular data for each location, which can be aggregated for a network-wide view, allowing for comparative analysis and identification of best practices." },
              { q: "What support do you offer for new franchisee onboarding?", a: "We provide comprehensive marketing onboarding packages, training materials, and initial campaign setups to ensure new franchisees can hit the ground running effectively." }
            ].map((faq, i) => (
              <motion.div variants={fadeInUp} key={i}>
                <Accordion type="single" collapsible className={`w-full ${slate.base} rounded-xl shadow-xl border ${slate.borderLight} overflow-hidden`}>
                  <AccordionItem value={`item-${i}`} className="border-b-0">
                    <AccordionTrigger className={`text-left text-lg font-semibold ${slate.textPrimary} hover:text-sky-300 p-8 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-inset transition-colors duration-200`}>
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className={`${slate.textSecondary} p-8 pt-0 leading-relaxed text-md bg-[#243B4A]/50`}> {/* Slightly different bg for content */}
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 12: Grow Your Franchise Network (Final CTA - Main Dark Slate Blue Theme) --- */}
      <section className={`py-28 bg-gradient-to-r ${slate.gradientFrom} via-[#2A4759] ${slate.gradientTo} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="finalFranchiseCtaPattern" patternUnits="userSpaceOnUse" width="70" height="70" patternTransform="rotate(25)"><circle cx="10" cy="10" r="1" fill="white"/><path d="M0 35 H70" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#finalFranchiseCtaPattern)"/></svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Network className={`w-24 h-24 ${slate.textPrimary} mx-auto mb-10 opacity-70`}/>
          </motion.div>
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-5xl md:text-7xl font-extrabold ${slate.textPrimary} mb-10 leading-tight drop-shadow-xl`}>
            Expand Your Franchise. <br className="sm:hidden"/><span className={`bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-white`}>Amplify Your Impact.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`text-xl md:text-2xl ${slate.textSecondary} opacity-90 mb-16 max-w-3xl mx-auto leading-relaxed`}>
            Ready to streamline your multi-location marketing and drive unprecedented growth across your franchise network? Partner with MarkovWeb for strategies that scale with precision.
          </motion.p>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={buttonHover}>
            <Button
              className={`${slate.buttonSecondaryBg} hover:${slate.buttonSecondaryHoverBg} ${slate.buttonSecondaryText} text-xl font-bold px-16 py-5 rounded-2xl transition duration-300 shadow-2xl transform hover:shadow-sky-500/30`}
              onClick={() => navigateToContact('franchise-digital-marketing', 'strategy', 'final-franchise-cta')}
            >
              Build My Franchise Empire <ArrowRight className="inline-block ml-4 w-7 h-7"/>
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