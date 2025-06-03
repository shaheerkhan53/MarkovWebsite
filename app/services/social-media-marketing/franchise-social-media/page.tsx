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
  Facebook, Instagram, Linkedin, Twitter, Search, Store, MapPin, Network, Share2, Building
} from 'lucide-react'

// Animation Variants (same as previous example)
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


export default function FranchiseSocialMediaPage() {
  // Define primary and accent colors based on the franchise theme
  const primaryColor = "blue-600"; // like #4169E1
  const accentColor = "teal-600"; // like #077A7D
  const heroGradientText = "bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"; // Reinterpretation of original gradient

  const processSteps = [
    { id: 1, title: "Franchise Discovery", description: "Understand corporate goals, local market nuances, and existing brand guidelines.", icon: <Building className={`w-10 h-10 text-${primaryColor} mb-3`} /> },
    { id: 2, title: "Unified Strategy", description: "Develop a master strategy with adaptable frameworks for local franchisee execution.", icon: <Network className={`w-10 h-10 text-${primaryColor} mb-3`} /> },
    { id: 3, title: "Content & Asset Creation", description: "Produce corporate-approved content & templates for local customization.", icon: <Sparkles className={`w-10 h-10 text-${primaryColor} mb-3`} /> },
    { id: 4, title: "Multi-Level Execution", description: "Deploy campaigns at corporate and local levels, ensuring brand consistency.", icon: <Share2 className={`w-10 h-10 text-${primaryColor} mb-3`} /> },
    { id: 5, title: "Performance Tracking", description: "Monitor overall and location-specific KPIs, providing consolidated reports.", icon: <BarChartHorizontal className={`w-10 h-10 text-${primaryColor} mb-3`} /> },
  ];

  const benefits = [
    { title: "Brand Consistency Across Locations", description: "Ensure a unified brand voice and visual identity everywhere.", icon: <ShieldCheck className={`w-10 h-10 text-${accentColor}`} /> },
    { title: "Empowered Local Engagement", description: "Enable franchisees to connect authentically with their local communities.", icon: <MapPin className={`w-10 h-10 text-${accentColor}`} /> },
    { title: "Scalable Growth", description: "Implement strategies that grow with your franchise network.", icon: <TrendingUp className={`w-10 h-10 text-${accentColor}`} /> },
    { title: "Centralized Oversight", description: "Maintain corporate control while fostering local initiative.", icon: <Brain className={`w-10 h-10 text-${accentColor}`} /> },
    { title: "Increased Lead Generation", description: "Drive qualified leads to both corporate and individual franchise units.", icon: <Target className={`w-10 h-10 text-${accentColor}`} /> },
    { title: "Enhanced Reputation Management", description: "Monitor and manage online reputation across all franchise locations.", icon: <MessageSquareHeart className={`w-10 h-10 text-${accentColor}`} /> },
  ];

  const platforms = [
    { name: "Facebook", description: "Corporate pages for brand announcements, local pages for community engagement and localized ads.", icon: <Facebook className={`w-10 h-10 text-${primaryColor}`} /> },
    { name: "Instagram", description: "Visually consistent brand storytelling with localized content from franchisees.", icon: <Instagram className={`w-10 h-10 text-${primaryColor}`} /> },
    { name: "LinkedIn", description: "Corporate branding, B2B outreach, and attracting potential franchisees.", icon: <Linkedin className={`w-10 h-10 text-${primaryColor}`} /> },
    { name: "Google Business Profile", description: "Essential for local SEO, reviews, and location-specific information for each franchise.", icon: <Store className={`w-10 h-10 text-${primaryColor}`} /> },
    { name: "X (Twitter)", description: "Corporate news dissemination and customer service, with local handles for regional updates.", icon: <Twitter className={`w-10 h-10 text-${primaryColor}`} /> },
    { name: "Local Review Sites", description: "Managing Yelp, TripAdvisor etc., reputation for individual franchise locations.", icon: <Star className={`w-10 h-10 text-${primaryColor}`} /> },
  ];

  const services = [
    { title: "Franchise Brand Guidelines", description: "Establishing social media playbooks for consistent corporate and local branding.", icon: <FileText className={`w-8 h-8 text-${primaryColor}`} /> },
    { title: "Corporate & Local Content Strategy", description: "Developing global themes and adaptable local content pillars.", icon: <Lightbulb className={`w-8 h-8 text-${primaryColor}`} /> },
    { title: "Multi-Location Ad Campaigns", description: "Running geo-targeted ads for national reach and local impact.", icon: <Target className={`w-8 h-8 text-${primaryColor}`} /> },
    { title: "Franchisee Training & Support", description: "Equipping local teams with the tools and knowledge for social success.", icon: <UsersRound className={`w-8 h-8 text-${primaryColor}`} /> },
    { title: "Network-Wide Analytics", description: "Consolidated reporting on overall brand performance and individual franchise metrics.", icon: <PieChart className={`w-8 h-8 text-${primaryColor}`} /> },
    { title: "Reputation Management", description: "Monitoring and responding to reviews and mentions across all locations.", icon: <ShieldCheck className={`w-8 h-8 text-${primaryColor}`} /> },
  ];
  
  const caseStudies = [
    { 
      title: "Multi-Location ABA Therapy Center", 
      image: "/franchise-case-study-1.jpg", // Using provided image
      results: [
        { stat: "+668K", desc: "People Reached via Social" },
        { stat: "+1300%", desc: "Contact Form Submissions" }
      ],
      summary: "Enhanced lead acquisition for 60 locations through paid social, video, and PPC, dramatically increasing website visits and leads."
    },
    { 
      title: "Multi-Location Restoration Firm", 
      image: "/franchise-case-study-2.jpg", // Using provided image
      results: [
        { stat: "+20M", desc: "Impressions Generated" },
        { stat: "+4.3M", desc: "People Reached by Ads" }
      ],
      summary: "Boosted brand recognition and traffic for 22 locations, achieving over 60,000 total traffic in a key month."
    },
    { 
      title: "National QSR Franchise", 
      image: "/franchise-case-study-3.webp", // Placeholder for new case study
      results: [
        { stat: "+45%", desc: "Local Store Foot Traffic" },
        { stat: "+200%", desc: "Engagement on Local Pages" }
      ],
      summary: "Implemented a hyper-local content strategy that drove significant increases in foot traffic and local engagement."
    },
  ];

  const faqs = [
    { q: "How do you ensure brand consistency across all franchise locations?", a: "We develop comprehensive social media guidelines and provide franchisees with approved assets and training. Regular audits and centralized reporting also help maintain consistency." },
    { q: "Can local franchisees still have control over their social media?", a: "Yes, our model encourages local authenticity within a corporate framework. We define what's fixed (brand voice, core messaging) and what's flexible (local events, community news)." },
    { q: "How do you measure success for a franchise network?", a: "We track both corporate-level KPIs (overall brand reach, sentiment) and local-level KPIs (engagement per location, local leads, foot traffic attribution where possible)." },
    { q: "What's the cost for franchise social media management?", a: "Pricing depends on the number of locations, scope of services, and level of support required. We offer custom packages after an initial consultation." },
  ];


  return (
    // Using bg-amber-50 for a light cream background similar to #F5EEDD
    <div className="bg-amber-50 text-slate-800 antialiased">

      {/* 1. Hero Section */}
      <motion.section 
        className="relative py-20 md:py-28 bg-blue-50 text-slate-900 overflow-hidden" // bg-blue-50 like #f3f6ff
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 {...fadeIn} transition={{ delay: 0.2 }} className={`text-4xl md:text-6xl font-extrabold mb-4 ${heroGradientText} text-transparent bg-clip-text`}>
            Franchise Social Media Marketing
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.4 }} className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-slate-700">
            Unify Your Brand. Empower Local Growth. Maximize Customer Engagement Across Corporate and Franchise Locations.
          </motion.p>
          
          <motion.div {...fadeIn} transition={{ delay: 0.6 }} className="h-1 w-32 bg-teal-500 mx-auto mb-10"></motion.div> {/* Accent line */}
          
          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.8 }} 
            className="bg-white p-6 rounded-lg shadow-xl max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
              <div className="relative flex-1 w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Enter Your Franchise Website" 
                  className={`pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${primaryColor}`}
                />
              </div>
              <Button size="lg" className={`bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 whitespace-nowrap`}>
                Get My Free Proposal
              </Button>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 1.0 }} className="flex items-center justify-center text-sm text-slate-600 mt-10">
            <Link href="/" className={`hover:text-${primaryColor}`}>Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className={`hover:text-${primaryColor}`}>Digital Marketing Services</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Franchise Social Media Marketing</span>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. The Franchise SMM Imperative (Challenges & Solutions) */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={itemFadeInUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{once: true, amount: 0.2}}
          >
            {/* Using one of the user-provided images or a new placeholder */}
            <Image src="/frnachise-guide.jpg" alt="Franchise Social Media Challenges" width={500} height={450} className="rounded-xl shadow-2xl" />
          </motion.div>
          <motion.div 
            variants={itemFadeInUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{once: true, amount: 0.2}}
            transition={{ delay: 0.2 }}
          >
            <span className={`text-${accentColor} font-semibold uppercase tracking-wider`}>The Franchise Challenge</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 my-4">
              Balancing <span className={`text-${primaryColor}`}>Brand Unity</span> with <span className={`text-${primaryColor}`}>Local Agility</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Franchises face a unique social media dilemma: maintaining corporate brand consistency while empowering local franchisees to connect authentically with their communities. Inconsistent messaging can dilute brand value, while overly rigid control stifles local engagement and growth.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Markov Digital provides results-driven franchise social media solutions that create a cohesive strategy, ensuring brand recognition and trust at both corporate and local levels.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Establish <strong className="font-semibold">clear brand guidelines</strong> for all franchise locations.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Enable <strong className="font-semibold">localized content strategies</strong> that resonate with specific communities.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Implement <strong className="font-semibold">scalable systems</strong> for content distribution, advertising, and reporting.</span></li>
            </ul>
            <Button asChild size="lg" className={`mt-8 bg-${primaryColor} hover:bg-blue-700 text-white`}>
              <Link href="#contact">Solve Your Franchise SMM Challenges</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* 4. Franchise Social Media: The Numbers Don't Lie */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-blue-50"> {/* bg-blue-50 like #f3f6ff */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Impact of <span className={`text-${primaryColor}`}>Strategic Franchise SMM</span></h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Cohesive social media drives significant growth for multi-location businesses.</p>
          </div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { stat: "85%", text: "increase in brand recognition from consistent branding across platforms.", icon: <Award className={`w-8 h-8 text-${primaryColor}`}/> },
              { stat: "71%", text: "of consumers are more likely to purchase after a positive social media experience with a local branch.", icon: <ThumbsUp className={`w-8 h-8 text-${primaryColor}`}/> },
              { stat: "65%", text: "of franchise leads can be generated or influenced by hyper-local social media efforts.", icon: <MapPin className={`w-8 h-8 text-${primaryColor}`}/> },
            ].map((item, index) => (
              <motion.div key={index} variants={itemFadeInUp}>
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-white">
                  <CardHeader className="items-center">
                    {/* Using bg-teal-100 (like #7AE2CF background for stats) */}
                    <div className="p-3 bg-teal-100 rounded-full mb-3">{item.icon}</div>
                    <CardTitle className={`text-4xl font-bold text-${primaryColor}`}>{item.stat}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 5. Our Tailored Franchise SMM Process */}
      <motion.section id="process" {...fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Blueprint for <span className={`text-${primaryColor}`}>Franchise-Wide Success</span></h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">A collaborative process designed for brand consistency and local market penetration.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2 z-0"></div>
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
                    <div className="p-4 bg-blue-100 rounded-full mb-4 inline-block">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{index + 1}. {step.title}</h3>
                    <p className="text-sm text-slate-600 flex-grow">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* 6. Comprehensive Franchise SMM Services */}
      <motion.section id="services" {...fadeInUp} className="py-16 md:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-5 bg-[url('/geometric-pattern-dark.svg')] bg-repeat"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Total Social Solutions for Your Franchise Network</h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">From corporate strategy to local execution, we manage every facet of your franchise's social media.</p>
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
                    {/* Using a blue accent for icons on dark bg */}
                    <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">{service.icon}</div>
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

      {/* 7. Platform Strategy: Corporate & Localized */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-white"> {/* Cream background */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Strategic Platform Use for <span className={`text-${primaryColor}`}>Maximum Impact</span></h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Leveraging each platform's strengths for both national brand building and local customer acquisition.</p>
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
                <Card className="shadow-lg hover:shadow-xl transition-shadow h-full bg-white">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-blue-100 rounded-md">{platform.icon}</div>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{platform.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 10. Unlocking Franchise Potential: Key Benefits */}
       <motion.section {...fadeInUp} className="py-16 md:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Drive Sustainable Growth Across <span className={`text-blue-400`}>Your Entire Network</span>
            </h2>
            <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto">
              Partner with Markov Digital to unlock these tangible benefits for your franchise system.
            </p>
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
                <div className="flex-shrink-0 p-3 bg-teal-400/20 rounded-full">
                  {React.cloneElement(benefit.icon, { className: "w-10 h-10 text-teal-200" })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-slate-200">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 11. Markov's Franchise-First Philosophy */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-blue-50"> {/* Light blue bg */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={itemFadeInUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{once: true, amount: 0.2}}
          >
            <Image src="/franchise-approach.jpg" alt="Markov's Franchise Approach" width={500} height={450} className="rounded-xl shadow-2xl" />
          </motion.div>
          <motion.div 
            variants={itemFadeInUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{once: true, amount: 0.2}}
            transition={{ delay: 0.2 }}
          >
            <span className={`text-${accentColor} font-semibold uppercase tracking-wider`}>Our Guiding Principles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 my-4">
              Global Vision, <span className={`text-${primaryColor}`}>Local Precision</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              We understand that franchise success hinges on a delicate balance. Our philosophy centers on building a strong, unified national brand while equipping local franchisees with the tools and flexibility to thrive in their unique markets.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              We combine data-driven insights with a deep understanding of local consumer behavior, fostering collaboration between corporate and franchisees for synergistic growth.
            </p>
             <ul className="space-y-3 text-slate-700 mb-8">
              <li className="flex items-center gap-3"><Network className={`w-5 h-5 text-${primaryColor}`} /> Centralized strategy, decentralized execution.</li>
              <li className="flex items-center gap-3"><Sparkles className={`w-5 h-5 text-${primaryColor}`} /> Empowering local authenticity within brand standards.</li>
              <li className="flex items-center gap-3"><Handshake className={`w-5 h-5 text-${primaryColor}`} /> True partnership with corporate and franchisees.</li>
            </ul>
            <Button asChild size="lg" className={`bg-${primaryColor} hover:bg-blue-700 text-white`}>
              <Link href="#contact">Learn About Our Franchise Focus</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* 12. Customized Solutions for Your Franchise Network */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-white"> {/* Cream background */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Solutions Built for <span className={`text-${primaryColor}`}>Your Franchise Scale</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Whether you have 5 locations or 500, we offer scalable packages and custom strategies to meet the unique needs of your franchise system.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {["Emerging Network (5-25 Locations)", "Growth Stage (26-100 Locations)", "Enterprise Franchise (100+ Locations)"].map((tier, index) => (
              <motion.div key={index} variants={itemFadeInUp}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow p-6 h-full bg-white">
                  <CardHeader>
                    <CardTitle className={`text-2xl text-${primaryColor}`}>{tier.split('(')[0]}</CardTitle>
                    <CardDescription className="text-sm">{tier.split('(')[1]?.replace(')','') || "All Locations"}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-left text-slate-600 mb-6">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> Core Brand Guidelines</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> Local Content Templates</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> {index > 0 ? "Advanced" : "Basic"} Reporting Dashboard</li>
                      {index > 0 && <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> Franchisee Support Portal</li>}
                      {index > 1 && <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500"/> Dedicated Account Manager</li>}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full bg-${accentColor} hover:bg-teal-700 text-white`}>Explore Package</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-slate-600">
            Need a bespoke solution? <Link href="#contact" className={`text-${primaryColor} font-semibold hover:underline`}>Request a Custom Franchise Proposal.</Link>
          </p>
        </div>
      </motion.section>

      {/* 13. Franchise Social Media FAQs */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Common Questions from <span className={`text-${primaryColor}`}>Franchise Leaders</span></h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">Addressing your key concerns about social media for multi-location businesses.</p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemFadeInUp}>
                <AccordionItem value={`item-${index}`} className="bg-white shadow-sm rounded-lg mb-4 px-6 py-2 border border-gray-200 hover:border-blue-300 transition-colors">
                  <AccordionTrigger className={`text-lg font-medium text-slate-800 hover:text-${primaryColor} text-left`}>{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-2 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.section>

      {/* 15. Our Commitment to Your Franchise's Success */}
      <motion.section {...fadeInUp} className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-white opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Partner in Franchise Expansion & Success</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
            At Markov Digital, we're more than a vendor; we're a strategic partner invested in the growth of your entire franchise network. We commit to transparency, results-driven strategies, and unwavering support for both corporate and individual franchisees.
          </p>
          <Button size="lg" variant="outline" className="text-[#354DDA] border-white hover:bg-white/10 font-semibold text-lg px-8 py-3">
            Discover Our Partnership Approach
          </Button>
        </div>
      </motion.section>

      {/* 16. Final CTA Section */}
      <motion.section id="contact" {...fadeInUp} className="py-20 md:py-28 bg-white"> {/* Cream background */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Store className={`w-12 h-12 text-${primaryColor} mx-auto mb-4`} />
          <h2 className={`text-3xl md:text-5xl font-extrabold mb-6 ${heroGradientText} text-transparent bg-clip-text`}>
             Ready to Revolutionize Your Franchise's Social Media?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Let Markov Digital craft a cohesive, high-performing social media strategy that drives growth across all your locations. Schedule your free franchise consultation today.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button size="lg" className={`bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl px-12 py-4 rounded-lg shadow-xl`}>
              Request Your Free Franchise Proposal
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}