"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { 
    Store, ShoppingCart, BarChart2, Target, Settings, Zap, ArrowRight, Users, 
    ShieldCheck, Lightbulb, Award, MessageSquareHeart, Brain, Palette, Share2, Package, Truck, Tag, PieChart
} from "lucide-react"; // Added more relevant icons
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // Make sure to import Image
import { motion } from "framer-motion";

// Animation variants (reusable)
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const iconVariants = {
  hover: { scale: 1.1, rotate: 5 },
  tap: { scale: 0.95 }
};

export default function WalmartMarketplacePageModern() {
    const router = useRouter();
    
    const navigateToContact = (service?: string) => { // Optional service parameter
        let path = '/contact';
        if (service) {
            path += `?service=${encodeURIComponent(service)}&platform=walmart&utm_source=walmartpage`;
        } else {
            path += `?platform=walmart&utm_source=walmartpage`;
        }
        router.push(path);
    };

    // Define Walmart blue and a complementary accent color
    const walmartBlue = "#0071ce"; // Walmart's primary blue
    const accentYellow = "#ffc120"; // Walmart's yellow accent

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-slate-50 text-gray-800">

            {/* 1. Dynamic Hero Section */}
            <section 
                className="relative py-24 md:py-32 text-white overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${walmartBlue} 0%, #005ea6 100%)` }} // Walmart blue gradient
            >
                <div className="absolute inset-0 opacity-10">
                    {/* Subtle pattern of shopping carts or Walmart sparks */}
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroPatternWalmart" patternUnits="userSpaceOnUse" width="80" height="80">
                        <path d="M20 20 L25 15 L30 20 L25 25 Z M50 50 L55 45 L60 50 L55 55 Z" strokeWidth="1" stroke={accentYellow} fill="none" opacity="0.3"></path>
                        <circle cx="40" cy="10" r="2" fill={accentYellow} opacity="0.3"/> <circle cx="10" cy="40" r="2" fill={accentYellow} opacity="0.3"/> <circle cx="70" cy="70" r="2" fill={accentYellow} opacity="0.3"/>
                    </pattern></defs><rect width="100%" height="100%" fill="url(#heroPatternWalmart)"></rect></svg>
                </div>
                <motion.div 
                    className="container mx-auto px-6 relative z-10 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeIn} className="mb-6 inline-block p-4 bg-white/20 rounded-full backdrop-blur-sm">
                        <Store className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </motion.div>
                    <motion.h1 
                        variants={fadeIn}
                        className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
                    >
                        Conquer the Walmart Marketplace.
                    </motion.h1>
                    <motion.p 
                        variants={fadeIn}
                        className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto"
                    >
                        Tap into millions of shoppers and accelerate your e-commerce growth with our expert Walmart Marketplace management services.
                    </motion.p>
                    <motion.div variants={fadeIn}>
                        <Button 
                            onClick={() => navigateToContact("Walmart Marketplace Consultation")}
                            size="lg"
                            className="text-white font-bold text-base px-10 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                            style={{ backgroundColor: accentYellow, color: walmartBlue }} // Accent color button
                        >
                            Start Selling Smarter on Walmart
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. The Walmart Opportunity: "Why Now?" Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Unlock a Universe of New Customers</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Walmart.com is a rapidly expanding e-commerce giant. Are you positioned to capitalize on its massive audience?
                        </p>
                    </motion.div>
                    <motion.div 
                        className="grid md:grid-cols-2 gap-8 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeIn}>
                            {/* Replace with a relevant Walmart Marketplace image */}
                            <Image src="/walmart.webp" alt="Walmart Marketplace shoppers" width={600} height={400} className="rounded-xl shadow-xl w-full h-auto object-cover"/>
                        </motion.div>
                        <motion.div variants={fadeIn} className="space-y-6">
                            {[
                                { icon: <Users className="w-6 h-6 text-red-500" />, text: "Struggling to gain traction beyond Amazon?" },
                                { icon: <BarChart2 className="w-6 h-6 text-red-500 transform scale-y-[-1]" />, text: "Overwhelmed by Walmart's seller requirements?" },
                                { icon: <Target className="w-6 h-6 text-red-500" />, text: "Listings not visible or converting effectively?" },
                                { icon: <ShoppingCart className="w-6 h-6 text-red-500" />, text: "Unsure how to leverage Walmart Connect ads?" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start p-4 bg-slate-50 rounded-lg">
                                    <div className="flex-shrink-0 mr-4">{item.icon}</div>
                                    <p className="text-gray-700">{item.text}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Our Solution: The Markov Walmart Accelerator */}
            <section className="py-16 md:py-24" style={{ backgroundColor: '#e9f3fb' }}> {/* Light Walmart Blue */}
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                         <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3" style={{ backgroundColor: `${accentYellow}40`, color: walmartBlue }}>Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: walmartBlue }}>Your Blueprint for Walmart Marketplace Success.</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            We provide end-to-end solutions to launch, optimize, and scale your business on Walmart.com.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="grid md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {[
                            { icon: <Settings className="w-10 h-10" style={{ color: walmartBlue }} />, title: "Seamless Onboarding", description: "Expert guidance through account setup, integration, and product catalog migration." },
                            { icon: <Target className="w-10 h-10" style={{ color: walmartBlue }} />, title: "Listing Supremacy", description: "Optimized titles, descriptions, images, and attributes for maximum visibility and conversion." },
                            { icon: <Zap className="w-10 h-10" style={{ color: walmartBlue }} />, title: "Strategic Advertising", description: "Data-driven Walmart Connect campaigns to boost sales and brand awareness." }
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                variants={fadeIn}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 flex flex-col items-center text-center"
                            >
                                <motion.div 
                                  className="mb-6 p-4 rounded-full"
                                  style={{ backgroundColor: `${walmartBlue}20` }}
                                  variants={iconVariants}
                                  whileHover="hover"
                                  whileTap="tap"
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: walmartBlue }}>{item.title}</h3>
                                <p className="text-gray-700 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. Core Benefits Reimagined: "The Walmart Advantage" */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Key Benefits of Partnering With Us</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Leverage our expertise to navigate the Walmart ecosystem and achieve significant e-commerce growth.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Users className="w-8 h-8" />, title: "Reach Millions of Shoppers", description: "Access Walmart's vast and loyal customer base.", color: walmartBlue, bgColor: `${walmartBlue}1A` }, // 1A for ~10% opacity hex
                            { icon: <ShoppingCart className="w-8 h-8" />, title: "Boost Sales Velocity", description: "Optimize listings and ads for higher conversion rates.", color: accentYellow, bgColor: `${accentYellow}1A` },
                            { icon: <Award className="w-8 h-8" />, title: "Enhance Brand Visibility", description: "Increase your brand's presence on a trusted platform.", color: walmartBlue, bgColor: `${walmartBlue}1A` },
                            { icon: <ShieldCheck className="w-8 h-8" />, title: "Navigate with Experts", description: "Overcome platform complexities with our seasoned guidance.", color: accentYellow, bgColor: `${accentYellow}1A` }
                        ].map((benefit, index) => (
                            <motion.div 
                                key={index} 
                                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200`}
                                style={{ backgroundColor: benefit.bgColor }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }}
                                viewport={{ once: true }}
                            >
                                <div className={`mb-4 inline-block p-3 rounded-full`} style={{ color: benefit.color, backgroundColor: benefit.bgColor.replace('1A', '33') /* ~20% opacity */ }}>
                                    {benefit.icon}
                                </div>
                                <h3 className={`text-xl font-semibold mb-2`} style={{ color: benefit.color === accentYellow ? '#b37400' : benefit.color /* Darker yellow for text */ }}>{benefit.title}</h3>
                                <p className="text-gray-700 text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Our Comprehensive Walmart Services Suite */}
            <section className="py-16 md:py-24" style={{ backgroundColor: '#e9f3fb' }}> {/* Light Walmart Blue */}
                <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: walmartBlue }}>Full-Spectrum Walmart Marketplace Solutions</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            From foundational setup to advanced growth strategies, we cover all your Walmart selling needs.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Account Setup & Integration", description: "Hassle-free onboarding, including Seller Center configuration and system integrations.", icon: <Settings /> },
                            { title: "Product Listing Optimization (SEO)", description: "Keyword-rich titles, compelling descriptions, and high-quality imagery for top search ranking.", icon: <Target /> },
                            { title: "Walmart Connect Ad Management", description: "Strategic Sponsored Products campaigns to maximize visibility and ROI.", icon: <BarChart2 /> },
                            { title: "Inventory & Order Management", description: "Guidance on fulfillment options (WFS, Seller-fulfilled) and inventory syncing.", icon: <Package /> },
                            { title: "Promotions & Pricing Strategy", description: "Leveraging Walmart's promotional tools and dynamic pricing to boost sales.", icon: <Tag /> },
                            { title: "Performance Analytics & Reporting", description: "Regular insights into sales, ad performance, and account health.", icon: <PieChart /> } // Using PieChart from Email Marketing
                        ].map((type, index) => (
                            <motion.div 
                                key={index} 
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1, transition: { delay: index * 0.1, duration: 0.4 } }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-full mr-4 group-hover:text-white transition-colors" style={{ backgroundColor: `${walmartBlue}20`, color: walmartBlue,  }}>
                                        {React.cloneElement(type.icon, { className: "w-6 h-6" })}
                                    </div>
                                    <h3 className="text-lg font-semibold" style={{ color: walmartBlue }}>{type.title}</h3>
                                </div>
                                <p className="text-gray-700 text-sm">{type.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Our Walmart Success Pathway (Process Visualized) */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Proven Path to Walmart Success</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A structured, results-oriented approach to maximizing your Walmart Marketplace potential.
                        </p>
                    </motion.div>
                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2 -z-10"></div>
                        
                        <motion.div 
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={staggerContainer}
                        >
                        {[
                            { number: "01", title: "Strategic Audit & Planning", description: "Assessing your brand, products, and competition to define a winning Walmart strategy." },
                            { number: "02", title: "Flawless Launch & Setup", description: "Efficiently setting up your store, listings, and operational integrations." },
                            { number: "03", title: "Aggressive Optimization", description: "Continuously refining listings, ads, and promotions for peak performance." },
                            { number: "04", title: "Scale & Dominate", description: "Expanding your catalog, leveraging advanced tools, and driving sustainable growth." }
                        ].map((step, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 text-center z-0"
                            >
                                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full text-white font-bold text-2xl mx-auto" style={{backgroundColor: walmartBlue}}>
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold mb-2" style={{ color: walmartBlue }}>{step.title}</h3>
                                <p className="text-gray-700 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 7. Technology & Walmart-Specific Expertise */}
            <section className="py-16 md:py-24" style={{ backgroundColor: '#e9f3fb' }}> {/* Light Walmart Blue */}
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3" style={{ backgroundColor: `${accentYellow}40`, color: walmartBlue }}>Our Edge</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: walmartBlue}}>Platform Mastery, Powerful Tools</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                We combine in-depth knowledge of Walmart's algorithms and seller tools with advanced analytics to give you a competitive advantage.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center"><Brain className="w-5 h-5 mr-2" style={{color: walmartBlue}} /><span>Walmart Algorithm Understanding</span></div>
                                <div className="flex items-center"><Settings className="w-5 h-5 mr-2" style={{color: walmartBlue}} /><span>Proficiency with Seller Center & APIs</span></div>
                                <div className="flex items-center"><BarChart2 className="w-5 h-5 mr-2" style={{color: walmartBlue}} /><span>Advanced Reporting & Analytics</span></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <Image src="/walmart-dashboard.png" alt="Walmart analytics dashboard" width={600} height={400} className="rounded-xl shadow-xl w-full h-auto object-cover"/>
                             <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-70 blur-md -z-10" style={{background: `linear-gradient(135deg, ${walmartBlue} 0%, ${accentYellow} 100%)`}}></div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* 8. Success Stories: Walmart Edition */}
             <section className="py-16 md:py-24 bg-white">
                 <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                         <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3" style={{ backgroundColor: `${walmartBlue}20`, color: walmartBlue }}>Client Successes</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Real Brands, Real Walmart Growth</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover how we've helped businesses like yours thrive on Walmart Marketplace.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="grid md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {[
                            { brand: "Home Goods Pro", result: "+200% Sales in 6 Months", detail: "Through optimized listings and strategic Walmart Connect ads." },
                            { brand: "Gadget Innovators", result: "Top Seller in Category", detail: "Achieved with expert inventory management and WFS adoption." },
                            { brand: "Fashion Finds Co.", result: "30% Lower ACoS", detail: "Via targeted ad campaigns and continuous bid optimization." }
                        ].map((story, index) => (
                             <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-slate-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-200"
                            >
                                <div className="flex items-center mb-3">
                                    <ShoppingCart className="w-6 h-6 mr-3" style={{color: walmartBlue}} />
                                    <h3 className="text-xl font-semibold text-gray-800">{story.brand}</h3>
                                </div>
                                <p className="text-2xl font-bold mb-2" style={{color: walmartBlue}}>{story.result}</p>
                                <p className="text-gray-600 text-sm">{story.detail}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 9. Why Markov International for Walmart? */}
            <section className="py-16 md:py-24" style={{ backgroundColor: '#e9f3fb' }}> {/* Light Walmart Blue */}
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: walmartBlue }}>Your Trusted Walmart Growth Partner</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            We combine deep platform knowledge with a commitment to your e-commerce success.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {[
                            { icon: <Brain className="w-8 h-8" style={{color: walmartBlue}} />, title: "Walmart-Focused Expertise", description: "Dedicated specialists who live and breathe the Walmart Marketplace." },
                            { icon: <Share2 className="w-8 h-8" style={{color: walmartBlue}} />, title: "Holistic E-commerce Strategy", description: "Integrating Walmart into your broader multichannel sales approach." },
                            { icon: <MessageSquareHeart className="w-8 h-8" style={{color: walmartBlue}} />, title: "Transparent Partnership", description: "Clear communication, regular reporting, and a focus on your KPIs." }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 text-center"
                            >
                                <div className="mb-4 inline-block p-3 rounded-full" style={{backgroundColor: `${walmartBlue}20`}}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2" style={{ color: walmartBlue }}>{item.title}</h3>
                                <p className="text-gray-700 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* 10. FAQs about Walmart Marketplace Services */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Your common queries about selling on Walmart.com, answered.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {[
                            { q: "What are the requirements to sell on Walmart Marketplace?", a: "Sellers typically need a US Business Tax ID, established e-commerce experience, a compelling product catalog, and integration capabilities. We can help you navigate these." },
                            { q: "How long does it take to get approved and start selling?", a: "The timeline can vary, but with our expertise, we aim to expedite the process, often within a few weeks post-application." },
                            { q: "What is Walmart Fulfillment Services (WFS)?", a: "WFS is similar to Amazon FBA, where Walmart handles storage, packing, shipping, and customer service for your products, often leading to better visibility and sales." },
                            { q: "How do you optimize product listings for Walmart search?", a: "We focus on Walmart-specific keyword research, high-quality images, detailed attributes, competitive pricing, and customer reviews." }
                        ].map((faq, index) => (
                            <motion.details 
                                key={index} 
                                variants={fadeIn}
                                className="bg-slate-50 p-6 rounded-lg shadow-md group"
                            >
                                <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center" style={{color: walmartBlue}}>
                                    {faq.q}
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-open:rotate-90" />
                                </summary>
                                <p className="mt-3 text-gray-700">{faq.a}</p>
                            </motion.details>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 11. Getting Started: Your Walmart Journey Begins Here */}
            <section className="py-16 md:py-24" style={{ backgroundColor: '#e9f3fb' }}> {/* Light Walmart Blue */}
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <Lightbulb className="w-12 h-12 mx-auto mb-6" style={{color: walmartBlue}} />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: walmartBlue}}>Ready to Launch or Scale on Walmart?</h2>
                        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                            Whether you're new to Walmart or looking to optimize your existing store, we have the expertise to help you succeed.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto items-stretch">
                            <div className="bg-white p-6 rounded-lg shadow-md text-left h-full flex flex-col">
                                <h3 className="font-semibold text-xl mb-2" style={{color: walmartBlue}}>New to Walmart?</h3>
                                <p className="text-sm text-gray-600 mb-3">We'll guide you through every step, from application to your first sale.</p>
                                <Button onClick={() => navigateToContact("Walmart New Seller Setup")}
                                        className="text-sm mt-auto" style={{backgroundColor: walmartBlue}}>Get Started</Button>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-left h-full flex flex-col">
                                <h3 className="font-semibold text-xl mb-2" style={{color: walmartBlue}}>Existing Seller?</h3>
                                <p className="text-sm text-gray-600 mb-3">Let's audit your account and identify growth opportunities.</p>
                                <Button onClick={() => navigateToContact("Walmart Account Audit")}
                                        className="text-sm mt-auto" style={{backgroundColor: walmartBlue}}>Optimize My Store</Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* 12. Final Call to Action */}
            <section 
                className="py-24 md:py-32 text-white"
                style={{ background: `linear-gradient(135deg, ${walmartBlue} 0%, #004785 100%)` }} // Darker Walmart blue gradient
            >
                <div className="container mx-auto px-6 max-w-4xl text-center">
                     <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <Store className="w-16 h-16 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Miss Out on Walmart's Growth.</h2>
                        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                            Let our specialists craft a winning Walmart Marketplace strategy for your brand. Your journey to e-commerce expansion starts now.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={() => navigateToContact("Free Walmart Consultation")}
                                size="lg"
                                className="font-bold text-base px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                                style={{ backgroundColor: accentYellow, color: walmartBlue }}
                            >
                                Schedule Your Free Consultation
                            </Button>
                            <Button 
                                onClick={() => router.push('/services/e-commerce')}
                                size="lg"
                                variant="outline"
                                className="border-white text-[#0071ce] hover:bg-white/10 transition-all font-bold text-base px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Explore All E-commerce Services
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}