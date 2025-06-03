"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import { 
  CheckCircle, Star, Users, TrendingUp, Globe2, ThumbsUp, BarChartHorizontal, 
  ShieldCheck, MessageCircle, CalendarCheck, Lock, ArrowRight, Lightbulb, Target, 
  Brain, UsersRound, Briefcase, MessageSquareHeart, Sparkles, PieChart, FileText, Handshake, Award,
  Facebook, Instagram, Linkedin, Twitter
} from 'lucide-react'

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemFadeInUp = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};


export default function SocialMediaBrandManagementPage() {
  const trustPartners = [
    { name: "Google Partner", rating: "5.0 Rating", icon: <Star className="text-yellow-400 w-7 h-7 mb-1" /> },
    { name: "Meta Business Partner", rating: "Certified", icon: <Star className="text-blue-500 w-7 h-7 mb-1" /> },
    { name: "Clutch Leader", rating: "Top Agency 2024", icon: <Star className="text-red-500 w-7 h-7 mb-1" /> },
    { name: "UpCity Excellence", rating: "National Winner", icon: <Star className="text-green-500 w-7 h-7 mb-1" /> },
  ];

  const processSteps = [
    { id: 1, title: "Discovery & Audit", description: "Deep dive into your brand, audience, competitors, and current social presence.", icon: <PieChart className="w-10 h-10 text-primary mb-3" /> },
    { id: 2, title: "Strategic Blueprint", description: "Develop a custom strategy: voice, tone, content pillars, platform mix, and KPIs.", icon: <FileText className="w-10 h-10 text-primary mb-3" /> },
    { id: 3, title: "Creative Production", description: "Craft compelling content (visuals, copy, videos) that resonates and engages.", icon: <Sparkles className="w-10 h-10 text-primary mb-3" /> },
    { id: 4, title: "Execution & Management", description: "Schedule, publish, monitor, engage with your community, and manage campaigns.", icon: <CalendarCheck className="w-10 h-10 text-primary mb-3" /> },
    { id: 5, title: "Analyze & Optimize", description: "Track performance, provide transparent reports, and continuously refine for ROI.", icon: <BarChartHorizontal className="w-10 h-10 text-primary mb-3" /> },
  ];

  const benefits = [
    { title: "Enhanced Brand Recognition", description: "Consistent, memorable branding across platforms.", icon: <Award className="w-10 h-10 text-sky-500" /> },
    { title: "Increased Audience Loyalty", description: "Build genuine connections and foster a loyal community.", icon: <MessageSquareHeart className="w-10 h-10 text-sky-500" /> },
    { title: "Higher Conversion Rates", description: "Turn followers into customers with targeted messaging.", icon: <TrendingUp className="w-10 h-10 text-sky-500" /> },
    { title: "Improved Brand Authority", description: "Position yourself as a thought leader in your industry.", icon: <Brain className="w-10 h-10 text-sky-500" /> },
    { title: "Data-Driven Decisions", description: "Leverage analytics for continuous improvement and ROI.", icon: <PieChart className="w-10 h-10 text-sky-500" /> },
    { title: "Proactive Reputation Management", description: "Monitor sentiment and manage your online image effectively.", icon: <ShieldCheck className="w-10 h-10 text-sky-500" /> },
  ];

  const platforms = [
    { name: "Facebook", description: "Community building, targeted ads, comprehensive analytics.", icon: <Facebook className="w-10 h-10 text-sky-600" /> },
    { name: "Instagram", description: "Visual storytelling, influencer marketing, Reels & Stories.", icon: <Instagram className="w-10 h-10 text-sky-600" /> },
    { name: "LinkedIn", description: "B2B networking, thought leadership, professional branding.", icon: <Linkedin className="w-10 h-10 text-sky-600" /> },
     ];

  const services = [
    { title: "Comprehensive Brand Strategy", description: "Defining your unique voice, visual identity, and audience targeting.", icon: <Lightbulb className="w-8 h-8 text-primary" /> },
    { title: "Content Creation & Curation", description: "Engaging posts, stunning visuals, compelling video content, and curated shares.", icon: <Sparkles className="w-8 h-8 text-primary" /> },
    { title: "Community Management", description: "Active engagement, fostering discussions, and building brand loyalty.", icon: <UsersRound className="w-8 h-8 text-primary" /> },
    { title: "Social Media Advertising", description: "Targeted ad campaigns on all major platforms to maximize reach and ROI.", icon: <Target className="w-8 h-8 text-primary" /> },
    { title: "Analytics & Reporting", description: "Transparent, detailed performance tracking and actionable insights.", icon: <BarChartHorizontal className="w-8 h-8 text-primary" /> },
    { title: "Influencer Marketing", description: "Connecting your brand with authentic voices to expand your reach.", icon: <Handshake className="w-8 h-8 text-primary" /> },
  ];
  
  const testimonials = [
    { name: "Sarah L., CEO of Bloom Co.", quote: "Markov transformed our social presence! Engagement is up 150%, and we've seen a direct impact on sales. Their strategic approach is unmatched.", industry: "E-commerce", image: "/t8.jpg", result: "+150% Engagement" },
    { name: "John B., Founder of TechSpark", quote: "We needed to build authority in a crowded B2B space. Markov's LinkedIn strategy positioned us as thought leaders, generating significant leads.", industry: "Tech Solutions", image: "/t4.jpg", result: "+75% Qualified Leads" },
    { name: "Maria P., Owner of The Cozy Corner Cafe", quote: "Our local cafe's Instagram is now buzzing! Markov captured our essence perfectly, and foot traffic has noticeably increased.", industry: "Hospitality", image: "/t9.jpg", result: "+40% Foot Traffic" },
  ];

  const faqs = [
    { q: "How long does it take to see results?", a: "While some positive effects like increased engagement can be seen within weeks, significant brand growth and ROI typically develop over 3-6 months as we build momentum and optimize strategies." },
    { q: "What platforms are best for my business?", a: "This depends on your industry, target audience, and goals. We conduct thorough research in our initial discovery phase to recommend the most effective platforms for your brand." },
    { q: "How much does social media brand management cost?", a: "Our services are tailored to your specific needs. We offer various packages and can create custom solutions. We recommend scheduling a free consultation to discuss your goals and receive a detailed proposal." },
    { q: "Do I still have control over my social media accounts?", a: "Absolutely! We work collaboratively. You'll have full transparency and final approval on strategies and major content pieces. Our goal is to be an extension of your team." },
  ];


  return (
    <div className="bg-slate-50 text-gray-800 antialiased">

      {/* 1. Hero Section */}
      <motion.section 
        className="relative py-24 md:py-32 bg-gradient-to-br from-sky-500 to-indigo-700 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          {/* Subtle background pattern or graphic */}
          {/* <Image src="/hero-background-pattern.svg" layout="fill" objectFit="cover" alt="" /> */}
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span {...fadeIn} className="inline-block px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-white/20 text-white shadow-md">
            Social Media Brand Management
          </motion.span>
          <motion.h1 {...fadeIn} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Elevate Your Brand. <span className="block md:inline">Engage Audiences. Drive Growth.</span>
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.4 }} className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Markov Digital crafts compelling social media narratives that build trust, foster loyalty, and deliver measurable results.
          </motion.p>
          <motion.div {...fadeIn} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-slate-100 font-semibold text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-transform">
              Request Your Free Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white/10 font-semibold text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-transform">
              Explore Our Services
            </Button>
          </motion.div>
        </div>
         {/* Optional: Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-slate-50 [clip-path:polygon(0_100%,100%_0,100%_100%)] md:[clip-path:polygon(0_100%,100%_20%,100%_100%)]"></div>
      </motion.section>

      {/* 3. What is Social Media Branding & Why It Matters (Problem/Solution) */}
      <motion.section {...fadeInUp} className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemFadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <Image src="/social-media-branding-illustration.webp" alt="Social Media Branding Illustration" width={500} height={450} className="rounded-xl shadow-2xl" />
          </motion.div>
          <motion.div
            variants={itemFadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sky-600 font-semibold uppercase tracking-wider">The Markov Difference</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-4">
              More Than Just Posts: <span className="text-sky-600">Strategic Brand Building</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              In today's digital landscape, social media isn't just a marketing channel—it's where your brand's perception is forged. Effective social media branding goes beyond sporadic updates. It's about crafting a consistent, authentic, and engaging presence that deeply resonates with your target audience, differentiates you from competitors, and builds lasting trust.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Develop a <strong className="font-semibold">unique brand voice & visual identity</strong> that captivates.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Foster <strong className="font-semibold">meaningful audience engagement</strong> and build a loyal community.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Implement <strong className="font-semibold">data-driven content strategies</strong> for measurable growth and impact.</span></li>
            </ul>
            <Button asChild size="lg" className="mt-8 bg-sky-600 hover:bg-sky-700 text-white">
              <Link href="#contact">Let's Define Your Brand Voice</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* 4. Key Statistics Section */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-sky-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Power of <span className="text-sky-600">Strategic Social Branding</span></h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Unlock tangible business growth through expert social media brand management.</p>
          </div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { stat: "71%", text: "of consumers who have had a positive experience with a brand on social media are likely to recommend it.", icon: <ThumbsUp className="w-8 h-8 text-sky-500"/> },
              { stat: "54%", text: "of social browsers use social media to research products.", icon: <Globe2 className="w-8 h-8 text-sky-500"/> },
              { stat: "90%", text: "of Instagram users follow at least one business.", icon: <Users className="w-8 h-8 text-sky-500"/> },
            ].map((item, index) => (
              <motion.div key={index} variants={itemFadeInUp}>
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader className="items-center">
                    <div className="p-3 bg-sky-100 rounded-full mb-3">{item.icon}</div>
                    <CardTitle className="text-4xl font-bold text-sky-600">{item.stat}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 5. Our Proven Process */}
      <motion.section id="process" {...fadeInUp} className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Methodical Path to <span className="text-sky-600">Your Social Success</span></h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">A transparent, collaborative process designed for maximum impact and sustainable growth.</p>
          </div>
          <div className="relative">
            {/* Desktop Connector Line - simplified */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-sky-200 -translate-y-1/2 z-0"></div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {processSteps.map((step, index) => (
                <motion.div key={step.id} variants={itemFadeInUp}>
                  <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow bg-white p-6 flex flex-col items-center">
                    <div className="p-4 bg-sky-100 rounded-full mb-4 inline-block">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{index + 1}. {step.title}</h3>
                    <p className="text-sm text-gray-600 flex-grow">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* 6. Core Service Pillars */}
      <motion.section id="services" {...fadeInUp} className="py-16 md:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
         <div className="absolute inset-0 opacity-5 bg-[url('/geometric-pattern.svg')] bg-repeat"></div> {/* Add a subtle pattern */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Social Media Solutions</h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">From strategy to execution, we cover every aspect of your social media brand presence.</p>
          </div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemFadeInUp}>
                <Card className="bg-slate-700/50 backdrop-blur-sm border-slate-600 shadow-xl h-full hover:bg-slate-600/70 transition-colors">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-sky-500/20 text-sky-400 rounded-lg">{service.icon}</div>
                    <CardTitle className="text-xl text-slate-100">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 7. Platform Expertise */}
      <motion.section {...fadeInUp} className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mastering the Platforms <span className="text-sky-600">That Matter</span></h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We tailor strategies to the unique strengths of each social media channel.</p>
          </div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {platforms.map((platform, index) => (
              <motion.div key={index} variants={itemFadeInUp}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {platform.icon}
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{platform.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* 9. Transformative Results (Testimonials) */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Real Brands, <span className="text-sky-400">Real Results</span></h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Don't just take our word for it. See how we've helped businesses like yours thrive.</p>
          </div>
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemFadeInUp}>
                <Card className="bg-slate-700/60 backdrop-blur-sm border border-slate-600 shadow-xl h-full flex flex-col p-6 rounded-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-3">
                      <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full object-cover w-[50px] h-[50px] mr-4 border-2 border-sky-400" />
                      <div>
                        <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sky-300 text-sm">{testimonial.industry}</CardDescription>
                      </div>
                    </div>
                     <p className="text-2xl font-semibold text-sky-400">{testimonial.result}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-slate-200 italic leading-relaxed">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 10. Benefits Unlocked */}
       <motion.section {...fadeInUp} className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Unlock the Full Potential of <span className="text-sky-600">Your Social Presence</span></h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Partner with Markov Digital and experience tangible benefits that drive your business forward.</p>
          </div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemFadeInUp} className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-sky-100 rounded-full">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 11. Our Unique Approach/Philosophy */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-sky-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemFadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <Image src="/approach.webp" alt="Our Approach Illustration" width={500} height={450} className="rounded-xl shadow-2xl" />
          </motion.div>
          <motion.div
            variants={itemFadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sky-600 font-semibold uppercase tracking-wider">Markov's Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-4">
              Data-Driven Creativity, <span className="text-sky-600">Human-Centric Engagement</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe that the most powerful social media strategies are born at the intersection of art and science. Our approach combines meticulous data analysis and market research with genuine creativity and an empathetic understanding of human connection. 
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We don't believe in one-size-fits-all. We're committed to transparency, collaboration, and continuous learning, ensuring your brand not only keeps pace but sets the pace in the ever-evolving social landscape.
            </p>
             <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-center gap-3"><Brain className="w-5 h-5 text-sky-500" /> Strategic thinking, not just posting.</li>
              <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-sky-500" /> Authentic creativity that converts.</li>
              <li className="flex items-center gap-3"><Handshake className="w-5 h-5 text-sky-500" /> True partnership and collaboration.</li>
            </ul>
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
              <Link href="#contact">Discover Our Approach</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>


      {/* 12. Tailored Solutions (Packages/Consultation) */}
      <motion.section {...fadeInUp} className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Solutions Tailored to <span className="text-sky-600">Your Unique Needs</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Whether you're a startup finding your voice or an established brand aiming for new heights, we offer flexible packages and custom strategies designed to achieve your specific social media objectives.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {["Starter Growth", "Pro Engagement", "Enterprise Scale"].map((tier, index) => (
              <motion.div key={index} variants={itemFadeInUp}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow p-6 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-sky-600">{tier}</CardTitle>
                    <CardDescription>Ideal for {index === 0 ? "new brands" : index === 1 ? "growing businesses" : "large organizations"}.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-left text-gray-600 mb-6">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> Platform-specific strategy</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> Content calendar</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> {index > 0 ? "Advanced" : "Basic"} analytics</li>
                      {index > 0 && <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> Community management</li>}
                      {index > 1 && <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> Ad campaign management</li>}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">Learn More</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-gray-600">
            Don't see a perfect fit? <Link href="#contact" className="text-sky-600 font-semibold hover:underline">Contact us for a custom proposal.</Link>
          </p>
        </div>
      </motion.section>

      {/* 13. Frequently Asked Questions (FAQ) */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Your Questions, <span className="text-sky-600">Answered</span></h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">We believe in transparency. Here are some common queries about our social media brand management services.</p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemFadeInUp}>
                <AccordionItem value={`item-${index}`} className="bg-white shadow-sm rounded-lg mb-4 px-6 py-2 border border-gray-200 hover:border-sky-300 transition-colors">
                  <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-sky-600 text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.section>

      {/* 15. Risk-Free Guarantee / Our Commitment */}
       <motion.section {...fadeInUp} className="py-16 md:py-24 bg-gradient-to-r from-sky-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-white opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Your Success</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
            At Markov Digital, your growth is our priority. We are committed to delivering exceptional service, transparent communication, and strategies that yield real results. We stand by the quality of our work and are dedicated to forging long-term partnerships built on trust and mutual success.
          </p>
          <Button size="lg" variant="outline" className="text-[#255AC8] border-white hover:bg-white/10 font-semibold text-lg px-8 py-3">
            Learn About Our Client-First Approach
          </Button>
        </div>
      </motion.section>


      {/* 16. Final CTA Section */}
      <motion.section id="contact" {...fadeInUp} className="py-20 md:py-28 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lightbulb className="w-12 h-12 text-sky-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Ready to Ignite Your Brand's Social Presence?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Let Markov Digital's experts craft a bespoke social media brand strategy that captivates your audience and accelerates your growth. Schedule your free, no-obligation consultation today.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-xl px-12 py-4 rounded-lg shadow-xl">
              Get Your Free Proposal Now
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}