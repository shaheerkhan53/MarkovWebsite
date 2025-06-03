"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp, ShieldCheck, Users, BarChartHorizontal, MessageCircle, Globe2, ThumbsUp, CalendarCheck, Lock, Star, CheckCircle,
  Share2, Target, Brain, Palette, Zap, Users2, Mic, Edit3, PieChart, Gift, Settings, Package, Tag, MessageSquareHeart, Lightbulb, Heart, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight, Clock, Award // Removed Tiktok, Pinterest
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming Card components are available
import { useRouter } from 'next/navigation'; // For navigation

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

const platformIcons = {
  Facebook: <Facebook className="w-8 h-8" />,
  Instagram: <Instagram className="w-8 h-8" />,
  LinkedIn: <Linkedin className="w-8 h-8" />,
  Twitter: <Twitter className="w-8 h-8" />,
  TikTok: <img src="/tiktok.svg" alt="TikTok" className="w-8 h-8" />,
  Pinterest: <img src="/pinterest.svg" alt="Pinterest" className="w-8 h-8" />,
  YouTube: <Youtube className="w-8 h-8" />,
};

export default function SocialMediaManagementPageModern() {
  const router = useRouter();
  const primaryColor = "#205A59"; // Dark Teal
  const secondaryColor = "#8BA640"; // Olive Green
  const accentColor = "#F2C94C"; // A complementary warm yellow/gold for highlights

  const navigateToContact = (service?: string) => {
    let path = '/contact';
    if (service) {
        path += `?service=${encodeURIComponent(service)}&utm_source=smm_page`;
    } else {
        path += `?service=social-media-management&utm_source=smm_page`;
    }
    router.push(path);
  };

  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden bg-slate-50 text-gray-800">

      {/* 1. Dynamic Hero Section */}
      <section 
        className="relative py-24 md:py-32 text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)` }}
      >
        <div className="absolute inset-0 opacity-5">
          {/* Subtle pattern of social icons */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="socialPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                {/* Simplified social media-like icons */}
                <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.5"/>
                <rect x="50" y="15" width="10" height="10" fill="currentColor" opacity="0.5"/>
                <path d="M70 70 L80 75 L70 80 Z" fill="currentColor" opacity="0.5"/>
                <circle cx="20" cy="70" r="4" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5"/>
                <rect x="60" y="50" width="15" height="3" fill="currentColor" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#socialPattern)" />
          </svg>
        </div>
        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="mb-6 inline-block p-4 bg-white/20 rounded-full backdrop-blur-sm">
            <Share2 className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </motion.div>
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Ignite Your Social Presence. Drive Real Growth.
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Markov International crafts data-driven social media strategies that build communities, boost engagement, and deliver measurable results.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button 
              onClick={() => navigateToContact("Social Media Strategy Consultation")}
              size="lg"
              className="font-bold text-base px-10 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ backgroundColor: accentColor, color: primaryColor }}
            >
              Get Your Free Social Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. The Social Media Maze (Problem Framing) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Navigating the Ever-Changing Social Landscape?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Algorithms shift, trends evolve, and your audience's attention is finite. Standing out requires more than just posting – it demands strategy.
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
              <Image src="/social-media.jpg" alt="Social media challenges" width={600} height={450} className="rounded-xl shadow-xl w-full h-auto object-cover"/>
            </motion.div>
            <motion.div variants={fadeIn} className="space-y-6">
              {[
                { icon: <TrendingUp className="w-6 h-6 text-red-500 transform scale-y-[-1]" />, text: "Struggling to see tangible ROI from social efforts?" },
                { icon: <Users2 className="w-6 h-6 text-red-500" />, text: "Low engagement despite consistent posting?" },
                { icon: <Clock className="w-6 h-6 text-red-500" />, text: "Overwhelmed by content creation and platform management?" },
                { icon: <Target className="w-6 h-6 text-red-500" />, text: "Unsure which platforms to focus on for your audience?" },
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

      {/* 3. Our Solution: The Markov Social Success System */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F0F5F4' /* Light primary color tint */ }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3" style={{ backgroundColor: `${secondaryColor}33`, color: primaryColor }}>Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryColor }}>Strategic Social. Powerful Results.</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We combine deep audience insights, creative content, and performance analytics to build a thriving social media presence for your brand.
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
              { icon: <Brain className="w-10 h-10" style={{ color: primaryColor }} />, title: "Audience-First Strategy", description: "Understanding your ideal customer deeply to craft messages that resonate and engage." },
              { icon: <Palette className="w-10 h-10" style={{ color: primaryColor }} />, title: "Compelling Content Creation", description: "Developing thumb-stopping visuals and copy tailored for each platform's unique strengths." },
              { icon: <BarChartHorizontal className="w-10 h-10" style={{ color: primaryColor }} />, title: "Data-Driven Optimization", description: "Continuously monitoring, analyzing, and refining campaigns for maximum impact and ROI." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 flex flex-col items-center text-center"
              >
                <motion.div 
                  className="mb-6 p-4 rounded-full"
                  style={{ backgroundColor: `${primaryColor}20` }}
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Core Benefits Reimagined: "Your Social ROI Engine" */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Transform Your Social Media into a Growth Engine</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our SMM services go beyond likes and shares to deliver real, measurable business outcomes.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, title: "Boost Brand Awareness", description: "Expand your reach and get your brand in front of your target audience.", color: primaryColor, bgColor: `${primaryColor}1A`},
              { icon: <Users className="w-8 h-8" />, title: "Grow Engaged Communities", description: "Foster loyalty and turn followers into passionate brand advocates.", color: secondaryColor, bgColor: `${secondaryColor}1A` },
              { icon: <Target className="w-8 h-8" />, title: "Drive Qualified Leads", description: "Generate high-quality leads and sales through strategic social funnels.", color: accentColor, bgColor: `${accentColor}1A` },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Enhance Brand Reputation", description: "Build trust and manage your online perception effectively.", color: primaryColor, bgColor: `${primaryColor}1A`}
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200`}
                style={{ backgroundColor: benefit.bgColor }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }}
                viewport={{ once: true }}
              >
                <div className={`mb-4 inline-block p-3 rounded-full`} style={{ color: benefit.color, backgroundColor: benefit.bgColor.replace('1A', '33') }}>
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2`} style={{ color: benefit.color === accentColor ? '#c89d28' : benefit.color /* Darker yellow for text */ }}>{benefit.title}</h3>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Comprehensive Social Media Services */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F0F5F4' /* Light primary color tint */ }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryColor }}>Full-Suite Social Media Management</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From strategy development to daily execution, we offer a complete range of services to elevate your social game.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Social Media Strategy", description: "Custom-tailored plans identifying target audiences, key platforms, content pillars, and KPIs.", icon: <Brain /> },
              { title: "Content Creation & Curation", description: "Engaging posts, stunning visuals, captivating videos, and user-generated content campaigns.", icon: <Palette /> },
              { title: "Community Management", description: "Proactive engagement, timely responses, fostering discussions, and building brand loyalty.", icon: <MessageCircle /> },
              { title: "Paid Social Advertising", description: "Targeted ad campaigns on platforms like Facebook, Instagram, LinkedIn to drive specific outcomes.", icon: <Zap /> },
              { title: "Influencer Marketing", description: "Identifying and collaborating with relevant influencers to amplify your brand message.", icon: <Users2 /> },
              { title: "Analytics & Performance Reporting", description: "Transparent tracking of key metrics, providing actionable insights for continuous improvement.", icon: <PieChart /> }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1, transition: { delay: index * 0.1, duration: 0.4 } }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full mr-4 group-hover:text-white transition-colors" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                    {React.cloneElement(service.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: primaryColor }}>{service.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Social Success Process (Visualized) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Blueprint for Social Domination</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven, agile methodology to ensure your social media efforts are strategic, effective, and constantly evolving.
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
              { number: "01", title: "Deep Dive & Strategy", description: "Understanding your brand, audience, competitors, and goals to craft a bespoke strategy." },
              { number: "02", title: "Content & Campaign Plan", description: "Developing content calendars, ad strategies, and engagement initiatives." },
              { number: "03", title: "Execution & Engagement", description: "Publishing content, running ads, and actively managing your communities." },
              { number: "04", title: "Analyze, Iterate, Scale", description: "Tracking performance, refining tactics, and scaling successful approaches for growth." }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 text-center z-0"
              >
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full text-white font-bold text-2xl mx-auto" style={{backgroundColor: primaryColor}}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </motion.div>
            ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 8. Success Stories: Social Proof */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3" style={{ backgroundColor: `${secondaryColor}33`, color: primaryColor }}>Client Triumphs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How We've Transformed Brands on Social</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world examples of our social media management making a difference.
            </p>
          </motion.div>
          {/* Re-using the structure from your original code, but with motion */}
          <motion.div 
            className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              { title: "Twitter Impressions: 724,000 mon-avg", company: "Financial Company", details: "For over 5 years, Markov's strategies have delivered consistent high engagement for this finance leader, proving validity across sectors.", color: primaryColor },
              { title: "Instagram Engagement: +180%", company: "Manufacturing Co.", details: "Boosted online presence significantly. Achieved +83% Facebook impressions YOY and record ad sales days.", color: secondaryColor },
              { title: "Paid Impressions: +185K MoM", company: "Recreation Company", details: "Saw 9,570 total clicks and a 49.4% conversion rate, dramatically increasing brand visibility.", color: accentColor }
            ].map((story, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="bg-slate-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-200"
              >
                <div className="mb-4">
                    <div className="px-3 py-1 rounded-full text-sm font-bold text-white inline-block" style={{backgroundColor: story.color}}>
                        {story.title}
                    </div>
                </div>
                <p className="text-gray-700 mb-4 text-sm">{story.details}</p>
                <div className="border-t border-gray-300 pt-4 mt-4">
                  <h3 className="font-bold" style={{color: primaryColor}}>{story.company}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. Why Markov International for SMM? */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F0F5F4' /* Light primary color tint */ }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryColor }}>Your Strategic Social Media Partner</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're not just a service provider; we're an extension of your team, dedicated to your social success.
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
              { icon: <Brain className="w-8 h-8" style={{color: primaryColor}} />, title: "Customized Strategies", description: "No cookie-cutter approaches. We tailor every plan to your unique brand and goals." },
              { icon: <Heart className="w-8 h-8" style={{color: primaryColor}} />, title: "Passionate Experts", description: "Our team lives and breathes social media, staying ahead of trends and platform updates." },
              { icon: <BarChartHorizontal className="w-8 h-8" style={{color: primaryColor}} />, title: "Transparent Reporting", description: "Clear, concise reports on what matters, demonstrating real ROI." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 text-center"
              >
                <div className="mb-4 inline-block p-3 rounded-full" style={{backgroundColor: `${primaryColor}20`}}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
            
      {/* 10. Social Media Management Packages/Tiers (Optional but good for clarity) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Flexible Plans for Every Business</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the social media management package that best fits your needs and budget.
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 items-stretch" // items-stretch to make cards same height
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Example Package Cards - Customize these heavily */}
            {[
              { name: "Starter Spark", price: "$XXX/mo", features: ["2 Platforms", "Content Calendar", "Basic Engagement", "Monthly Reporting"], popular: false, color: primaryColor },
              { name: "Growth Igniter", price: "$XXXX/mo", features: ["4 Platforms", "Advanced Strategy", "Full Community Mgmt", "Paid Ad Management (small budget)", "Bi-Weekly Reporting"], popular: true, color: secondaryColor },
              { name: "Pro Accelerator", price: "$XXXXX/mo", features: ["All Platforms", "Dedicated Strategist", "Influencer Outreach", "Advanced Ad Campaigns", "Weekly Reporting & Insights"], popular: false, color: accentColor }
            ].map((pkg, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className={`bg-slate-50 rounded-xl shadow-xl border-2 flex flex-col ${pkg.popular ? 'border-yellow-400' : 'border-gray-200'}`}
              >
                {pkg.popular && <div className="text-center py-1 text-sm font-semibold text-white rounded-t-lg" style={{backgroundColor: pkg.color}}>Most Popular</div>}
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-center" style={{color: pkg.color}}>{pkg.name}</h3>
                  <p className="text-3xl font-extrabold text-center mb-6 text-gray-800">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map(feature => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" style={{color: pkg.color}} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0">
                   <Button 
                    onClick={() => navigateToContact(`SMM Package - ${pkg.name}`)}
                    className="w-full font-bold" 
                    style={{backgroundColor: pkg.color, color: pkg.color === accentColor ? primaryColor : 'white'}}>
                      Choose Plan
                  </Button>
                </div>
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
            Need a custom solution? <Link href="/contact?service=custom-smm" className="font-semibold hover:underline" style={{color: primaryColor}}>Let's talk!</Link>
          </motion.p>
        </div>
      </section>

      {/* 11. Trust & Credibility (Reusing your badges but enhancing section) */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F0F5F4' }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryColor }}>Award-Winning Social Media Expertise</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Recognized by industry leaders for delivering exceptional social media management and results.
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              { name: "Google", rating: "5.0 Rating", icon: <Star className="w-10 h-10 mb-1" style={{color: accentColor}} /> },
              { name: "Clutch", rating: "Top Agency", icon: <Award className="w-10 h-10 mb-1" style={{color: accentColor}} /> },
              { name: "UpCity", rating: "National Excellence", icon: <ThumbsUp className="w-10 h-10 mb-1" style={{color: accentColor}} /> }
            ].map((badge, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md"
              >
                {badge.icon}
                <span className="font-bold text-xl" style={{color: primaryColor}}>{badge.name}</span>
                <span className="text-sm text-gray-600">{badge.rating}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
            
      {/* 12. Final Call to Action: "Let's Get Social" */}
      <section 
        className="py-24 md:py-32 text-white"
        style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)` }}
      >
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <Share2 className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Elevate Your Social Game?</h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Let Markov International's social media experts craft a strategy that drives engagement, builds your brand, and achieves your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigateToContact("Free Social Media Audit")}
                size="lg"
                className="font-bold text-base px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ backgroundColor: accentColor, color: primaryColor }}
              >
                Request Your Free Social Audit
              </Button>
              <Button 
                onClick={() => router.push('/case-studies/social-media')}
                size="lg"
                variant="outline"
                className="border-white text-[#648A49] hover:bg-white/10 transition-all font-bold text-base px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                See Our Social Successes
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}