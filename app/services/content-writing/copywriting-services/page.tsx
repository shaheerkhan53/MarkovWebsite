"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { 
    PenTool, MessageCircle, Target, Star, Lightbulb, BarChart2, ArrowRight,
    Users, Brain, Zap, TrendingUp, ShieldCheck, Palette, Share2,
    BookOpen, Feather, Mic, Edit3, Users2, Award // Added more relevant icons
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

export default function CopywritingServicesPageModern() {
    const router = useRouter();
    
    const navigateToContact = () => {
        router.push('/contact?service=copywriting&utm_source=copywritingpage');
    };

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-slate-50 text-gray-800">

            {/* 1. Dynamic Hero Section */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#ff9f1c] to-[#ffb74b] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroPatternOrange" patternUnits="userSpaceOnUse" width="50" height="50"><circle cx="25" cy="25" r="1.5" fill="currentColor"/></pattern></defs><rect width="100%" height="100%" fill="url(#heroPatternOrange)"></rect></svg>
                </div>
                <motion.div 
                    className="container mx-auto px-6 relative z-10 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeIn} className="mb-6 inline-block p-4 bg-white/20 rounded-full backdrop-blur-sm">
                        <PenTool className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </motion.div>
                    <motion.h1 
                        variants={fadeIn}
                        className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
                    >
                        Words That Ignite Action.
                    </motion.h1>
                    <motion.p 
                        variants={fadeIn}
                        className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto"
                    >
                        We craft persuasive copy that captivates, convinces, and converts – turning prospects into loyal customers.
                    </motion.p>
                    <motion.div variants={fadeIn}>
                        <Button 
                            onClick={navigateToContact}
                            size="lg"
                            className="bg-white text-[#ff9f1c] hover:bg-gray-100 transition-all font-bold text-base px-10 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Unleash Your Brand's Voice
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. The "Silent Sabotage" Section (Problem Framing) */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Is Your Copy Costing You Customers?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Dull, uninspired, or confusing words can be the silent saboteurs of your growth. It's time for a verbal upgrade.
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
                            <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZnVzaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Confusing message" className="rounded-xl shadow-xl w-full h-auto object-cover"/>
                        </motion.div>
                        <motion.div variants={fadeIn} className="space-y-6">
                            {[
                                { icon: <MessageCircle className="w-6 h-6 text-red-500" />, text: "Your message isn't resonating or clear?" },
                                { icon: <Users2 className="w-6 h-6 text-red-500" />, text: "Visitors leave without taking action?" },
                                { icon: <BarChart2 className="w-6 h-6 text-red-500 transform scale-y-[-1]" />, text: "Sales copy failing to convert prospects?" },
                                { icon: <Mic className="w-6 h-6 text-red-500" />, text: "Brand voice feels inconsistent or weak?" },
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

            {/* 3. Our Solution: The Markov Copywriting Alchemy */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                         <span className="inline-block px-4 py-1.5 bg-[#ff9f1c]/20 text-[#ff9f1c] rounded-full text-sm font-semibold mb-3">Our Craft</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Transforming Ideas into Irresistible Copy.</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We don't just write; we engineer words that build desire, inspire trust, and compel action.
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
                            { icon: <Brain className="w-10 h-10 text-[#ff9f1c]" />, title: "Psychology-Infused", description: "Leveraging consumer behavior insights to create copy that truly connects and persuades." },
                            { icon: <Palette className="w-10 h-10 text-[#ff9f1c]" />, title: "Brand Voice Mastery", description: "Capturing your unique essence and communicating it consistently and authentically." },
                            { icon: <Target className="w-10 h-10 text-[#ff9f1c]" />, title: "Conversion-Driven", description: "Every word is chosen with a purpose: to guide your audience towards your desired outcome." }
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                variants={fadeIn}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 flex flex-col items-center text-center"
                            >
                                <motion.div 
                                  className="mb-6 p-4 bg-[#ff9f1c]/10 rounded-full"
                                  variants={iconVariants}
                                  whileHover="hover"
                                  whileTap="tap"
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-3 text-[#ff9f1c]">{item.title}</h3>
                                <p className="text-gray-700 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. Core Benefits Reimagined: "The Power of Persuasion" */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Unlock the Full Potential of Your Message</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our copywriting services deliver more than just words; they deliver tangible business growth.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <TrendingUp className="w-8 h-8" />, title: "Maximize Conversions", description: "Turn more visitors into leads and sales with compelling calls to action.", color: "text-orange-500", bgColor: "bg-orange-500/10" },
                            { icon: <MessageCircle className="w-8 h-8" />, title: "Enhance Engagement", description: "Capture attention and keep your audience hooked from the first word to the last.", color: "text-amber-500", bgColor: "bg-amber-500/10" },
                            { icon: <Star className="w-8 h-8" />, title: "Solidify Brand Identity", description: "Craft a consistent, memorable brand voice that resonates and builds trust.", color: "text-yellow-500", bgColor: "bg-yellow-500/10" },
                            { icon: <Zap className="w-8 h-8" />, title: "Accelerate Growth", description: "Fuel your marketing efforts with copy that drives results across all channels.", color: "text-red-500", bgColor: "bg-red-500/10" }
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

            {/* 5. Our Copywriting Canvas (Types of Copywriting) */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">A Spectrum of Persuasive Solutions</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Whatever your communication need, we have the copywriting expertise to meet it with flair and precision.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Website & Landing Pages", description: "Engaging, conversion-focused copy that turns visitors into customers.", icon: <BookOpen /> },
                            { title: "Advertising & Sales Copy", description: "Compelling ad creatives and sales letters that generate immediate response.", icon: <Target /> },
                            { title: "Email Marketing Campaigns", description: "Nurturing sequences and promotional emails that build loyalty and drive sales.", icon: <Zap /> },
                            { title: "Brand Story & Messaging", description: "Crafting your unique value proposition and a consistent brand voice.", icon: <Feather /> },
                            { title: "Product Descriptions", description: "Persuasive details that highlight benefits and entice purchases.", icon: <Award /> },
                            { title: "Social Media & Content", description: "Captivating posts and articles that spark engagement and build community.", icon: <Share2 /> }
                        ].map((type, index) => (
                            <motion.div 
                                key={index} 
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1, transition: { delay: index * 0.1, duration: 0.4 } }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-[#ff9f1c]/10 text-[#ff9f1c] rounded-full mr-4 group-hover:bg-[#ff9f1c] group-hover:text-white transition-colors">
                                        {React.cloneElement(type.icon, { className: "w-6 h-6" })}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#ff9f1c]">{type.title}</h3>
                                </div>
                                <p className="text-gray-700 text-sm">{type.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Our "Wordsmithing" Process (Visualized) */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Blueprint for Brilliant Copy</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A meticulous, collaborative journey from concept to conversion-driving copy.
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
                            { number: "01", title: "Deep Dive Discovery", description: "Understanding your brand, audience, goals, and competitive landscape." },
                            { number: "02", title: "Strategic Messaging", description: "Defining key messages, tone of voice, and persuasive angles." },
                            { number: "03", title: "Creative Composition", description: "Crafting compelling, engaging copy with precision and flair." },
                            { number: "04", title: "Refine & Polish", description: "Iterative review, A/B testing insights, and optimization for peak performance." }
                        ].map((step, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 text-center z-0"
                            >
                                <div className="mb-4 flex items-center justify-center w-14 h-14 bg-[#ff9f1c] rounded-full text-white font-bold text-2xl mx-auto">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#ff9f1c]">{step.title}</h3>
                                <p className="text-gray-700 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 7. The Human Element: Artistry & Empathy */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-[#ff9f1c]/20 text-[#ff9f1c] rounded-full text-sm font-semibold mb-3">Our Difference</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Beyond AI: The Power of Human Connection</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                While tools can assist, true persuasive copywriting comes from human empathy, understanding nuance, and creative intuition – qualities our writers bring to every project.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center"><Lightbulb className="w-5 h-5 text-[#ff9f1c] mr-2" /><span>Deep Audience Understanding</span></div>
                                <div className="flex items-center"><Feather className="w-5 h-5 text-[#ff9f1c] mr-2" /><span>Nuanced Tone & Style Adaptation</span></div>
                                <div className="flex items-center"><Edit3 className="w-5 h-5 text-[#ff9f1c] mr-2" /><span>Original, Creative Storytelling</span></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlYXRpdmUlMjB3cml0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Creative writing process" className="rounded-xl shadow-xl w-full h-auto object-cover"/>
                             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tr from-[#ff9f1c] to-[#ffcf91] rounded-full opacity-70 blur-md -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* 8. Industry-Tailored Copy */}
            <section className="py-16 md:py-24 bg-white">
                 <div className="container mx-auto px-6 max-w-6xl">
                     <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Copy That Speaks Your Industry's Language</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We adapt our copywriting style to resonate with the specific needs and expectations of your sector.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {["B2B Technology", "Consumer Goods", "Professional Services", "Healthcare & Wellness", "Finance & Fintech", "Real Estate", "Non-Profit", "Hospitality", "Fashion & Beauty", "Startups"].map((industry, index) => (
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
                        ...and more. We tailor our approach to your unique context.
                    </motion.p>
                </div>
            </section>

            {/* 9. "The Proof is in the Persuasion" (Mini Case Studies) */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <span className="inline-block px-4 py-1.5 bg-[#ff9f1c]/20 text-[#ff9f1c] rounded-full text-sm font-semibold mb-3">Success Stories</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">See How Our Copy Drives Results</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Real-world examples of our copywriting in action.
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
                            { company: "SaaS Platform", result: "+35% Trial Sign-ups", detail: "From a revamped website and targeted landing pages." },
                            { company: "Retail Brand", result: "+20% Average Order Value", detail: "Via compelling product descriptions and email campaigns." },
                            { company: "Service Provider", result: "50% More Qualified Leads", detail: "Through persuasive sales pages and ad copy." }
                        ].map((story, index) => (
                             <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-200"
                            >
                                <div className="flex items-center mb-3">
                                    <BarChart2 className="w-6 h-6 text-[#ff9f1c] mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-800">{story.company}</h3>
                                </div>
                                <p className="text-2xl font-bold text-[#ff9f1c] mb-2">{story.result}</p>
                                <p className="text-gray-600 text-sm">{story.detail}</p>
                                <Link href="/case-studies/copywriting" className="text-sm text-[#ff9f1c] hover:underline mt-4 inline-block">Discover More <ArrowRight className="w-3 h-3 inline"/></Link>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Voices of Our Valued Clients</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Hear directly from businesses who've experienced the Markov copywriting difference.
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
                            { name: "Alex P., Founder of Innovate Solutions", quote: "The new website copy is phenomenal! It perfectly captures our brand and has already boosted inquiries.", avatar: "/t2.jpg" },
                            { name: "Maria G., Marketing Lead at StyleHub", quote: "Markov's email copy consistently outperforms our previous campaigns. Their understanding of our audience is spot on.", avatar: "/t7.jpg" }
                        ].map((testimonial, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-slate-50 p-8 rounded-xl shadow-lg border border-gray-200"
                            >
                                <div className="flex items-start mb-4">
                                    <img src={testimonial.avatar || `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=ff9f1c&color=fff&rounded=true`} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
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

            {/* 11. Why Choose Markov for Copywriting? */}
            <section className="py-16 md:py-24 bg-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Strategic Copywriting Partner</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We're more than just writers; we're architects of persuasion, dedicated to your brand's success.
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
                            { icon: <Brain className="w-8 h-8 text-[#ff9f1c]" />, title: "Deep Strategic Insight", description: "We delve into your market and audience for truly effective copy." },
                            { icon: <Feather className="w-8 h-8 text-[#ff9f1c]" />, title: "Exceptional Craftsmanship", description: "Our writers are masters of language, tone, and persuasive techniques." },
                            { icon: <BarChart2 className="w-8 h-8 text-[#ff9f1c]" />, title: "Measurable Results", description: "We focus on copy that doesn't just sound good, but delivers tangible outcomes." }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeIn}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 text-center"
                            >
                                <div className="mb-4 inline-block p-3 bg-[#ff9f1c]/10 rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#ff9f1c]">{item.title}</h3>
                                <p className="text-gray-700 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* 12. Let's Craft Your Success Story (Enhanced CTA) */}
            <section className="py-24 md:py-32 bg-gradient-to-r from-[#ff9f1c] to-[#ff7f08] text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                     <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <PenTool className="w-16 h-16 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Make Every Word Count?</h2>
                        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                            Partner with us to create copy that not only tells your story but sells it effectively. Let's discuss your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={navigateToContact}
                                size="lg"
                                className="bg-white text-[#ff9f1c] hover:bg-gray-100 transition-all font-bold text-base px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Get a Free Copy Quote
                            </Button>
                            <Button 
                                onClick={() => router.push('/portfolio/copywriting')}
                                size="lg"
                                variant="outline"
                                className="border-white text-orange-500 hover:bg-white/10 transition-all font-bold text-base px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                View Our Work
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}