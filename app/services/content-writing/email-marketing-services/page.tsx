"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { 
    Mail, Users, BarChart2, Target, Clock, Zap, ArrowRight, Repeat,
    Brain, Palette, Share2, ShieldCheck, MessageSquareHeart, Lightbulb,
    Filter, Users2, FileText, PieChart, Gift // Added more relevant icons
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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

export default function EmailMarketingServicesPageModern() {
    const router = useRouter();
    
    const navigateToContact = () => {
        router.push('/contact?service=email-marketing&utm_source=emailmarketingpage');
    };

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-slate-50 text-gray-800">

            {/* 1. Dynamic Hero Section */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#17a2b8] to-[#138496] text-white overflow-hidden">
                {/* <div className="absolute inset-0 opacity-10">
                    {/* Subtle pattern or abstract shapes */}
                    {/* <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroPatternTeal" patternUnits="userSpaceOnUse" width="60" height="60"><path d="M0 30 L30 60 L60 30 L30 0 Z" strokeWidth="0.5" stroke="currentColor" fill="none" opacity="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#heroPatternTeal)"></rect></svg> */}
                {/* </div> */}
                <motion.div 
                    className="container mx-auto px-6 relative z-10 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeIn} className="mb-6 inline-block p-4 bg-white/20 rounded-full backdrop-blur-sm">
                        <Mail className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </motion.div>
                    <motion.h1 
                        variants={fadeIn}
                        className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
                    >
                        Unlock the Power of the Inbox.
                    </motion.h1>
                    <motion.p 
                        variants={fadeIn}
                        className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto"
                    >
                        We design and execute strategic email marketing campaigns that nurture leads, build lasting relationships, and drive sustainable revenue.
                    </motion.p>
                    <motion.div variants={fadeIn}>
                        <Button 
                            onClick={navigateToContact}
                            size="lg"
                            className="bg-white text-[#17a2b8] hover:bg-gray-100 transition-all font-bold text-base px-10 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Elevate Your Email Strategy
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. The "Missed Opportunity" Section (Problem Framing) */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Is Your Email List an Untapped Goldmine?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Generic blasts and unsegmented lists lead to low engagement and lost revenue. It's time to get personal and strategic.
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
                            <img src="/ada-compliance.jpg" alt="Email marketing challenges" className="rounded-xl shadow-xl w-full h-auto object-cover"/>
                        </motion.div>
                        <motion.div variants={fadeIn} className="space-y-6">
                            {[
                                { icon: <Zap className="w-6 h-6 text-red-500" />, text: "Emails landing in spam or getting ignored?" },
                                { icon: <Users2 className="w-6 h-6 text-red-500" />, text: "Low open rates and even lower click-throughs?" },
                                { icon: <Repeat className="w-6 h-6 text-red-500" />, text: "Struggling to convert subscribers into loyal customers?" },
                                { icon: <Clock className="w-6 h-6 text-red-500" />, text: "Lacking time or expertise for effective automation?" },
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

            {/* 3. Our Solution: The Markov Email Engine */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                         <span className="inline-block px-4 py-1.5 bg-[#17a2b8]/20 text-[#17a2b8] rounded-full text-sm font-semibold mb-3">Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Fueling Growth, One Strategic Email at a Time.</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We combine data-driven strategy, compelling content, and intelligent automation to turn your email list into a revenue-generating machine.
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
                            { icon: <Brain className="w-10 h-10 text-[#17a2b8]" />, title: "Strategic Segmentation", description: "Delivering the right message to the right person at the right time for maximum impact." },
                            { icon: <Palette className="w-10 h-10 text-[#17a2b8]" />, title: "Engaging Content Craft", description: "Emails your audience actually wants to open, read, and act upon." },
                            { icon: <Zap className="w-10 h-10 text-[#17a2b8]" />, title: "Intelligent Automation", description: "Sophisticated workflows that nurture leads and drive sales on autopilot." }
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                variants={fadeIn}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 flex flex-col items-center text-center"
                            >
                                <motion.div 
                                  className="mb-6 p-4 bg-[#17a2b8]/10 rounded-full"
                                  variants={iconVariants}
                                  whileHover="hover"
                                  whileTap="tap"
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-3 text-[#17a2b8]">{item.title}</h3>
                                <p className="text-gray-700 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. Core Benefits Reimagined: "The Inbox Advantage" */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Reap the Rewards of Smart Email Marketing</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our targeted email strategies deliver exceptional ROI and cultivate lasting customer loyalty.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <BarChart2 className="w-8 h-8" />, title: "Maximize ROI", description: "Email marketing consistently delivers the highest return on investment.", color: "text-cyan-600", bgColor: "bg-cyan-600/10" },
                            { icon: <Users className="w-8 h-8" />, title: "Deepen Relationships", description: "Build direct, personal connections with your audience.", color: "text-sky-600", bgColor: "bg-sky-600/10" },
                            { icon: <Repeat className="w-8 h-8" />, title: "Drive Repeat Business", description: "Keep your brand top-of-mind and encourage customer loyalty.", color: "text-teal-600", bgColor: "bg-teal-600/10" },
                            { icon: <Target className="w-8 h-8" />, title: "Increase Conversions", description: "Guide subscribers through the sales funnel with targeted messaging.", color: "text-blue-600", bgColor: "bg-blue-600/10" }
                        ].map((benefit, index) => (
                            <motion.div 
                                key={index} 
                                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 ${benefit.bgColor}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }}
                                viewport={{ once: true }}
                            >
                                <div className={`mb-4 inline-block p-3 rounded-full ${benefit.color} ${benefit.bgColor.replace('/10', '/20')}`}>
                                    {benefit.icon}
                                </div>
                                <h3 className={`text-xl font-semibold mb-2 ${benefit.color}`}>{benefit.title}</h3>
                                <p className="text-gray-700 text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Our Email Marketing Toolkit (Types of Services) */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comprehensive Email Solutions</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            From strategy to execution and analysis, we cover every facet of successful email marketing.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Campaign Strategy & Planning", description: "Developing a roadmap for email success aligned with your business goals.", icon: <Brain /> },
                            { title: "Automation & Drip Campaigns", description: "Sophisticated sequences for lead nurturing, onboarding, and re-engagement.", icon: <Clock /> },
                            { title: "List Segmentation & Personalization", description: "Targeting subscribers with relevant content for higher engagement.", icon: <Filter /> },
                            { title: "Newsletter Design & Management", description: "Creating beautiful, value-packed newsletters that keep subscribers hooked.", icon: <Palette /> },
                            { title: "A/B Testing & Optimization", description: "Continuously improving performance through data-driven testing.", icon: <Repeat /> },
                            { title: "Analytics & Reporting", description: "Clear insights into campaign performance to measure ROI and inform strategy.", icon: <PieChart /> }
                        ].map((type, index) => (
                            <motion.div 
                                key={index} 
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1, transition: { delay: index * 0.1, duration: 0.4 } }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-[#17a2b8]/10 text-[#17a2b8] rounded-full mr-4 group-hover:bg-[#17a2b8] group-hover:text-white transition-colors">
                                        {React.cloneElement(type.icon, { className: "w-6 h-6" })}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#17a2b8]">{type.title}</h3>
                                </div>
                                <p className="text-gray-700 text-sm">{type.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Our Email Success Formula (Process Visualized) */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Path to Inbox Dominance</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A transparent and iterative process designed to deliver consistent results and optimal engagement.
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
                            { number: "01", title: "Immersive Discovery", description: "Understanding your audience, goals, and current email landscape." },
                            { number: "02", title: "Strategic Blueprint", description: "Crafting a tailored email strategy, content calendar, and automation flows." },
                            { number: "03", title: "Compelling Creation", description: "Designing and writing emails that engage, persuade, and convert." },
                            { number: "04", title: "Launch & Optimize", description: "Executing campaigns, monitoring results, and continuously refining for success." }
                        ].map((step, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 text-center z-0"
                            >
                                <div className="mb-4 flex items-center justify-center w-14 h-14 bg-[#17a2b8] rounded-full text-white font-bold text-2xl mx-auto">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#17a2b8]">{step.title}</h3>
                                <p className="text-gray-700 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 7. Technology & Expertise: The Perfect Blend */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-[#17a2b8]/20 text-[#17a2b8] rounded-full text-sm font-semibold mb-3">Our Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Smart Tools, Smarter Strategists</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                We combine leading email marketing platforms and analytics with the strategic insights of our experienced team to deliver campaigns that perform.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center"><Zap className="w-5 h-5 text-[#17a2b8] mr-2" /><span>Advanced Email Automation Platforms</span></div>
                                <div className="flex items-center"><Brain className="w-5 h-5 text-[#17a2b8] mr-2" /><span>Data-Driven Segmentation & Personalization</span></div>
                                <div className="flex items-center"><BarChart2 className="w-5 h-5 text-[#17a2b8] mr-2" /><span>In-Depth Performance Analytics</span></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFya2V0aW5nJTIwYXV0b21hdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Email marketing technology" className="rounded-xl shadow-xl w-full h-auto object-cover"/>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* 8. Email for Every Industry */}
            <section className="py-16 md:py-24 bg-white">
                 <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tailored Email Strategies for Your Niche</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            No matter your industry, we craft email campaigns that speak directly to your audience's needs and motivations.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {["E-commerce", "SaaS & Software", "B2B Services", "Education & Coaching", "Healthcare & Wellness", "Real Estate", "Travel & Hospitality", "Non-Profits", "Events & Conferences", "Local Businesses"].map((industry, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-slate-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-center"
                            >
                                <p className="font-medium text-gray-700 text-sm">{industry}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 9. Success Delivered to the Inbox (Mini Case Studies) */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <span className="inline-block px-4 py-1.5 bg-[#17a2b8]/20 text-[#17a2b8] rounded-full text-sm font-semibold mb-3">Proven Performance</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">See the Impact of Our Email Campaigns</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Real results demonstrating the power of strategic email marketing.
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
                            { company: "Online Retailer", result: "25% Increase in Repeat Purchases", detail: "Via personalized post-purchase automation series." },
                            { company: "Software Company", result: "40% More Demo Requests", detail: "From a targeted lead nurturing email sequence." },
                            { company: "Consulting Firm", result: "30% Higher Open Rates", detail: "Achieved through strategic A/B testing of subject lines and content." }
                        ].map((story, index) => (
                             <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-200"
                            >
                                <div className="flex items-center mb-3">
                                    <BarChart2 className="w-6 h-6 text-[#17a2b8] mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-800">{story.company}</h3>
                                </div>
                                <p className="text-2xl font-bold text-[#17a2b8] mb-2">{story.result}</p>
                                <p className="text-gray-600 text-sm">{story.detail}</p>
                                <Link href="/case-studies/email-marketing" className="text-sm text-[#17a2b8] hover:underline mt-4 inline-block">View Full Case Study <ArrowRight className="w-3 h-3 inline"/></Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 10. Client Testimonials */}
            <section className="py-16 md:py-24 bg-white">
                 <div className="container mx-auto px-6 max-w-5xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hear From Our Happy Clients</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Businesses thriving with Markov International's email marketing expertise.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="grid md:grid-cols-2 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {[
                            { name: "Jessica B., E-commerce Manager", quote: "Our email revenue has skyrocketed since partnering with Markov. Their strategic approach and automation expertise are top-notch!", avatar: "/t8.jpg" },
                            { name: "David K., SaaS Founder", quote: "The lead nurturing sequences they built have significantly shortened our sales cycle. Highly recommend their team!", avatar: "/t3.jpg" }
                        ].map((testimonial, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-slate-50 p-8 rounded-xl shadow-lg border border-gray-200"
                            >
                                <div className="flex items-start mb-4">
                                    <img src={testimonial.avatar || `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=17a2b8&color=fff&rounded=true`} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => <Gift key={i} className="w-4 h-4 fill-current" />)} {/* Using Gift as a stand-in for Star */}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                            </motion.div>
                        ))}
                    </motion.div>
                 </div>
            </section>

            {/* 11. Why Markov for Email Marketing? */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Partner for Inbox Success</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We're committed to transforming your email marketing from a task into a powerful growth engine.
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
                            { icon: <Brain className="w-8 h-8 text-[#17a2b8]" />, title: "Data-Driven Strategy", description: "Every decision is backed by data to ensure optimal performance." },
                            { icon: <Palette className="w-8 h-8 text-[#17a2b8]" />, title: "Creative Excellence", description: "Compelling design and copy that captures attention and drives action." },
                            { icon: <MessageSquareHeart className="w-8 h-8 text-[#17a2b8]" />, title: "Dedicated Partnership", description: "We work closely with you to understand your goals and deliver results." }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 text-center"
                            >
                                <div className="mb-4 inline-block p-3 bg-[#17a2b8]/10 rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#17a2b8]">{item.title}</h3>
                                <p className="text-gray-700 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* 12. Let's Amplify Your Email ROI (Enhanced CTA) */}
            <section className="py-24 md:py-32 bg-gradient-to-r from-[#17a2b8] to-[#117a8b] text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                     <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <Mail className="w-16 h-16 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Convert More Subscribers?</h2>
                        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                            Let's craft an email marketing strategy that delivers real results for your business. Schedule your free consultation today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={navigateToContact}
                                size="lg"
                                className="bg-white text-[#17a2b8] hover:bg-gray-100 transition-all font-bold text-base px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Get Your Free Email Audit
                            </Button>
                            <Button 
                                onClick={() => router.push('/resources/email-marketing-guides')}
                                size="lg"
                                variant="outline"
                                className="border-white text-[#17a2b8] hover:bg-white/10 transition-all font-bold text-base px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Learn More About Email
                            </Button>
                        </div>
                        <p className="mt-8 text-sm text-white/80">
                            Have questions? Email us at <a href="mailto:hello@markovinternational.com" className="font-semibold hover:underline">hello@markovinternational.com</a>
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}