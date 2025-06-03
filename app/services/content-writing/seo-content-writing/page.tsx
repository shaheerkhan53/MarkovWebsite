"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { 
    FileText, Search, BarChart2, Award, Target, BookOpen, ArrowRight,
    Users, Brain, Zap, TrendingUp, ShieldCheck, MessageSquareHeart, Lightbulb, Palette, Share2, Star
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
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

export default function SEOContentWritingPageModern() {
    const router = useRouter();
    
    const navigateToContact = () => {
        router.push('/contact?service=seo-content-writing&utm_source=seocontentpage');
    };

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-slate-50 text-gray-800">

            {/* 1. Dynamic Hero Section */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#28a745] to-[#228f3b] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    {/* Subtle pattern or abstract shapes */}
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroPattern" patternUnits="userSpaceOnUse" width="40" height="40"><path d="M0 40L40 0M20 0L0 20M40 20L20 40" strokeWidth="0.5" stroke="currentColor" fill="none"></path></pattern></defs><rect width="100%" height="100%" fill="url(#heroPattern)"></rect></svg>
                </div>
                <motion.div 
                    className="container mx-auto px-6 relative z-10 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeIn} className="mb-6 inline-block p-4 bg-white/20 rounded-full backdrop-blur-sm">
                        <FileText className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </motion.div>
                    <motion.h1 
                        variants={fadeIn}
                        className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
                    >
                        Amplify Your Voice, Dominate Search.
                    </motion.h1>
                    <motion.p 
                        variants={fadeIn}
                        className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto"
                    >
                        We craft compelling, SEO-driven content that captivates audiences and catapults your brand to the top of search results.
                    </motion.p>
                    <motion.div variants={fadeIn}>
                        <Button 
                            onClick={navigateToContact}
                            size="lg"
                            className="bg-white text-[#28a745] hover:bg-gray-100 transition-all font-bold text-base px-10 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Unlock Your Content Potential
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. The Content Challenge Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Is Your Content Getting Lost in the Noise?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            In today's digital ocean, generic content sinks. You need a strategy that makes waves and pulls your ideal customers to shore.
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
                            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnRlbnQlMjB3cml0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Content challenge" className="rounded-xl shadow-xl w-full h-auto object-cover"/>
                        </motion.div>
                        <motion.div variants={fadeIn} className="space-y-6">
                            {[
                                { icon: <Search className="w-6 h-6 text-red-500" />, text: "Struggling to rank for competitive keywords?" },
                                { icon: <Users className="w-6 h-6 text-red-500" />, text: "Low engagement and high bounce rates?" },
                                { icon: <TrendingUp className="w-6 h-6 text-red-500 transform scale-y-[-1]" />, text: "Content not converting visitors into leads?" },
                                { icon: <Brain className="w-6 h-6 text-red-500" />, text: "Lacking a clear content strategy or voice?" },
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

            {/* 3. Our Solution: The Markov Advantage Section */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                         <span className="inline-block px-4 py-1.5 bg-[#28a745]/20 text-[#28a745] rounded-full text-sm font-semibold mb-3">Our Approach</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Content That Connects, Converts, and Climbs.</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We blend data-driven SEO with creative storytelling to craft content that search engines love and humans adore.
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
                            { icon: <Zap className="w-10 h-10 text-[#28a745]" />, title: "Precision SEO", description: "Deep keyword research, competitor analysis, and on-page optimization to ensure maximum visibility." },
                            { icon: <Palette className="w-10 h-10 text-[#28a745]" />, title: "Creative Storytelling", description: "Engaging narratives, clear messaging, and a unique brand voice that resonates with your audience." },
                            { icon: <Target className="w-10 h-10 text-[#28a745]" />, title: "Conversion-Focused", description: "Strategically placed CTAs and persuasive language designed to drive action and achieve business goals." }
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                variants={fadeIn}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 flex flex-col items-center text-center"
                            >
                                <motion.div 
                                  className="mb-6 p-4 bg-[#28a745]/10 rounded-full"
                                  variants={iconVariants}
                                  whileHover="hover"
                                  whileTap="tap"
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-3 text-[#28a745]">{item.title}</h3>
                                <p className="text-gray-700 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. Core Benefits Reimagined Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Unlock Tangible Business Growth</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Beyond just words, our SEO content writing delivers measurable results that impact your bottom line.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <TrendingUp className="w-8 h-8" />, title: "Skyrocket Rankings", description: "Climb search engine results pages for valuable keywords.", color: "text-green-500", bgColor: "bg-green-500/10" },
                            { icon: <Users className="w-8 h-8" />, title: "Boost Organic Traffic", description: "Attract more qualified visitors without paid ads.", color: "text-blue-500", bgColor: "bg-blue-500/10" },
                            { icon: <Award className="w-8 h-8" />, title: "Build Authority", description: "Become the go-to resource in your industry.", color: "text-purple-500", bgColor: "bg-purple-500/10" },
                            { icon: <ShieldCheck className="w-8 h-8" />, title: "Enhance Brand Trust", description: "Credible content builds lasting customer relationships.", color: "text-yellow-500", bgColor: "bg-yellow-500/10" }
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

            {/* 5. Our SEO Content Spectrum (Types of Content) Section */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">A Universe of Content, Tailored for You</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            From foundational blog posts to in-depth guides, we craft every piece with SEO and engagement in mind.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Strategic Blog Posts", description: "Targeted articles that answer questions and build authority.", icon: <BookOpen /> },
                            { title: "Compelling Web Pages", description: "Optimized service & product pages that convert.", icon: <FileText /> },
                            { title: "In-Depth Guides & eBooks", description: "Lead magnets that establish expertise and capture leads.", icon: <BookOpen /> },
                            { title: "Engaging Product Descriptions", description: "Persuasive copy that turns browsers into buyers.", icon: <Award /> },
                            { title: "Localized Content", description: "Connect with local customers through geo-targeted content.", icon: <Target /> },
                            { title: "Content Refresh & Optimization", description: "Revitalize existing content for peak performance.", icon: <Zap /> }
                        ].map((type, index) => (
                            <motion.div 
                                key={index} 
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1, transition: { delay: index * 0.1, duration: 0.4 } }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-[#28a745]/10 text-[#28a745] rounded-full mr-4 group-hover:bg-[#28a745] group-hover:text-white transition-colors">
                                        {React.cloneElement(type.icon, { className: "w-6 h-6" })}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#28a745]">{type.title}</h3>
                                </div>
                                <p className="text-gray-700 text-sm">{type.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Our Strategic Content Creation Process (Visualized) Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Blueprint for Content Success</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A transparent, collaborative process designed for maximum impact and efficiency.
                        </p>
                    </motion.div>
                    <div className="relative">
                        {/* Connecting line (optional, can be complex for responsive) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2 -z-10"></div>
                        
                        <motion.div 
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={staggerContainer}
                        >
                        {[
                            { number: "01", title: "Discovery & Strategy", description: "Understanding your goals, audience, and competitive landscape." },
                            { number: "02", title: "Keyword Alchemy", description: "Uncovering high-intent keywords that drive qualified traffic." },
                            { number: "03", title: "Creative Crafting", description: "Writing engaging, valuable content optimized for search and users." },
                            { number: "04", title: "Refine & Amplify", description: "Review, optimize, and track performance for continuous improvement." }
                        ].map((step, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 text-center z-0"
                            >
                                <div className="mb-4 flex items-center justify-center w-14 h-14 bg-[#28a745] rounded-full text-white font-bold text-2xl mx-auto">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#28a745]">{step.title}</h3>
                                <p className="text-gray-700 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 7. Technology & Human Expertise Section */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-[#28a745]/20 text-[#28a745] rounded-full text-sm font-semibold mb-3">Our Edge</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The Perfect Blend: AI-Powered Insights, Human Creativity</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                We leverage cutting-edge SEO tools for data analysis and trend identification, while our experienced writers bring the human touch, empathy, and creativity that AI can't replicate.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center"><ShieldCheck className="w-5 h-5 text-[#28a745] mr-2" /><span>Advanced SEO Analytics Platforms</span></div>
                                <div className="flex items-center"><Lightbulb className="w-5 h-5 text-[#28a745] mr-2" /><span>Seasoned Content Strategists & Writers</span></div>
                                <div className="flex items-center"><BarChart2 className="w-5 h-5 text-[#28a745] mr-2" /><span>Data-Driven Content Optimization</span></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Tech and human expertise" className="rounded-xl shadow-xl w-full h-auto object-cover"/>
                             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tr from-[#28a745] to-[#52c76f] rounded-full opacity-70 blur-md -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* 8. Industry Spotlights Section */}
            <section className="py-16 md:py-24 bg-white">
                 <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Expertise Across Diverse Industries</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We adapt our SEO content strategies to the unique nuances and audiences of various sectors.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {["Tech & SaaS", "Healthcare", "E-commerce", "Real Estate", "Finance", "Manufacturing", "Education", "Travel", "Legal", "Local Businesses"].map((industry, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-slate-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-center"
                            >
                                <p className="font-medium text-gray-700 text-sm">{industry}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.p 
                        className="text-center mt-10 text-gray-600"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        ...and many more. We love a new challenge!
                    </motion.p>
                </div>
            </section>

            {/* 9. Success Snippets (Mini Case Studies) Section */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <span className="inline-block px-4 py-1.5 bg-[#28a745]/20 text-[#28a745] rounded-full text-sm font-semibold mb-3">Proven Results</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">See The Impact We've Made</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Real results from businesses like yours.
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
                            { company: "Tech Startup", result: "+150% Organic Traffic", detail: "Achieved in 6 months via targeted blog content." },
                            { company: "E-commerce Store", result: "+65% Conversion Rate", detail: "From optimized product descriptions and landing pages." },
                            { company: "Local Service Biz", result: "#1 for Key Local Terms", detail: "Dominating local search through geo-specific content." }
                        ].map((story, index) => (
                             <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-200"
                            >
                                <div className="flex items-center mb-3">
                                    <BarChart2 className="w-6 h-6 text-[#28a745] mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-800">{story.company}</h3>
                                </div>
                                <p className="text-2xl font-bold text-[#28a745] mb-2">{story.result}</p>
                                <p className="text-gray-600 text-sm">{story.detail}</p>
                                <Link href="/case-studies" className="text-sm text-[#28a745] hover:underline mt-4 inline-block">Read Full Story <ArrowRight className="w-3 h-3 inline"/></Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 10. Client Voices (Testimonials) Section */}
            <section className="py-16 md:py-24 bg-white">
                 <div className="container mx-auto px-6 max-w-5xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Don't just take our word for it. Hear from those we've helped succeed.
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
                            { name: "Sarah L., CEO of BloomTech", quote: "The SEO content they delivered was game-changing. Our organic leads have tripled!", avatar: "/t6.jpg" },
                            { name: "Mike R., Owner of FreshFinds", quote: "Markov International understands e-commerce SEO like no one else. Our sales from search are through the roof.", avatar: "/t1.jpg" }
                        ].map((testimonial, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-slate-50 p-8 rounded-xl shadow-lg border border-gray-200"
                            >
                                <div className="flex items-start mb-4">
                                    <img src={testimonial.avatar || `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=28a745&color=fff&rounded=true`} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                            </motion.div>
                        ))}
                    </motion.div>
                 </div>
            </section>

            {/* 11. Why Markov International? (Differentiators) Section */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Partner in Content Excellence</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choosing Markov International means choosing a dedicated team committed to your success.
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
                            { icon: <Brain className="w-8 h-8 text-[#28a745]" />, title: "Strategic Thinkers", description: "We go beyond keywords to understand your business and market." },
                            { icon: <MessageSquareHeart className="w-8 h-8 text-[#28a745]" />, title: "Client-Centric", description: "Your goals are our goals. We're transparent and communicative." },
                            { icon: <Share2 className="w-8 h-8 text-[#28a745]" />, title: "Holistic Approach", description: "Content is part of a bigger picture; we integrate with your overall marketing." }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 text-center"
                            >
                                <div className="mb-4 inline-block p-3 bg-[#28a745]/10 rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#28a745]">{item.title}</h3>
                                <p className="text-gray-700 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* 12. Let's Get Started (Enhanced CTA & Next Steps) Section */}
            <section className="py-24 md:py-32 bg-gradient-to-r from-[#28a745] to-[#20c997] text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                     <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <FileText className="w-16 h-16 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Content?</h2>
                        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                            Let's discuss how our tailored SEO content writing services can elevate your brand and drive remarkable growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={navigateToContact}
                                size="lg"
                                className="bg-white text-[#28a745] hover:bg-gray-100 transition-all font-bold text-base px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Request a Free Consultation
                            </Button>
                            <Button 
                                onClick={() => router.push('/services')}
                                size="lg"
                                variant="outline"
                                className="border-white text-green-500 hover:bg-white/10 transition-all font-bold text-base px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Explore All Services
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}