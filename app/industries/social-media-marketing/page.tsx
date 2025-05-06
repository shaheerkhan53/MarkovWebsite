"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  TrendingUp,
  ShieldCheck,
  Users,
  BarChartHorizontal,
  MessageCircle,
  Globe2,
  ThumbsUp,
  CalendarCheck,
  Lock,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function SocialMediaManagementPage() {
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold rounded-full bg-white text-[#2563EB]">
                Social Media Management
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Elevate Your Brand with Expert Social Media Management
              </h1>
              <p className="text-lg text-white opacity-90 mb-8 max-w-xl">
                We help businesses grow their online presence, engage audiences, and drive results through strategic social media management and marketing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-white text-[#2563EB] hover:bg-gray-100">
                  <Link href="/services/social-media-marketing/social-media-management">
                    Explore Services
                  </Link>
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/20">
                  Contact Us
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-xl transform rotate-3"></div>
                <Image
                  src="/social_media_management.png"
                  alt="Social Media Management"
                  width={600}
                  height={400}
                  className="relative z-10 rounded-xl shadow-xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
              Industry Challenges
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Overcoming Social Media Management Hurdles
            </h2>
            <p className="text-gray-600">
              Social media is dynamic and competitive. Brands face unique challenges in building trust, maintaining engagement, and measuring ROI. Our expertise helps you navigate these complexities.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Challenge Card 1: Brand Reputation */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-blue-100 rounded-lg mr-4">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Brand Reputation Management</h3>
              </div>
              <p className="text-gray-600">
                Protecting your brand from negative publicity, managing crises, and ensuring consistent messaging across platforms.
              </p>
            </motion.div>
            {/* Challenge Card 2: Engagement */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-green-100 rounded-lg mr-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Audience Engagement</h3>
              </div>
              <p className="text-gray-600">
                Creating compelling content and fostering real-time interactions to keep your audience engaged and loyal.
              </p>
            </motion.div>
            {/* Challenge Card 3: Analytics */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-purple-100 rounded-lg mr-4">
                  <BarChartHorizontal className="w-6 h-6 text-purple-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Measuring ROI</h3>
              </div>
              <p className="text-gray-600">
                Tracking the effectiveness of campaigns, analyzing data, and demonstrating the value of social media investments.
              </p>
            </motion.div>
            {/* Challenge Card 4: Platform Changes */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-yellow-100 rounded-lg mr-4">
                  <Globe2 className="w-6 h-6 text-yellow-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Adapting to Platform Changes</h3>
              </div>
              <p className="text-gray-600">
                Keeping up with frequent algorithm updates, new features, and shifting audience behaviors across platforms.
              </p>
            </motion.div>
            {/* Challenge Card 5: Security */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-red-100 rounded-lg mr-4">
                  <Lock className="w-6 h-6 text-red-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Account Security</h3>
              </div>
              <p className="text-gray-600">
                Safeguarding your social media accounts from hacking, impersonation, and data breaches.
              </p>
            </motion.div>
            {/* Challenge Card 6: Content Volume */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-pink-100 rounded-lg mr-4">
                  <CalendarCheck className="w-6 h-6 text-pink-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Content Consistency</h3>
              </div>
              <p className="text-gray-600">
                Maintaining a steady stream of high-quality, on-brand content across multiple channels.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
              Our Solutions
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Social Media Management Services for Your Brand
            </h2>
            <p className="text-gray-600">
              We offer a full suite of social media management services to help you build, grow, and protect your brand online.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Solution Card 1: Strategy & Planning */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Strategy & Planning</CardTitle>
                  <CardDescription>Custom strategies for your brand goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Comprehensive social media audits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Competitor and audience analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Content calendars and campaign planning</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/social-media-strategy"
                    className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                  >
                    Learn about Strategy & Planning
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
            {/* Solution Card 2: Content Creation */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center mb-4">
                    <ThumbsUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Content Creation & Publishing</CardTitle>
                  <CardDescription>Engaging, on-brand content for every platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Graphic design, video, and copywriting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Platform-specific content optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Automated and scheduled publishing</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/content-creation"
                    className="text-green-600 hover:text-green-800 flex items-center font-medium"
                  >
                    Learn about Content Creation
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
            {/* Solution Card 3: Community Management */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Community Management</CardTitle>
                  <CardDescription>Building loyal, engaged communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Real-time monitoring and response</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Reputation and crisis management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Influencer and partnership outreach</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/community-management"
                    className="text-purple-600 hover:text-purple-800 flex items-center font-medium"
                  >
                    Learn about Community Management
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
            {/* Solution Card 4: Analytics & Reporting */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center mb-4">
                    <BarChartHorizontal className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Analytics & Reporting</CardTitle>
                  <CardDescription>Data-driven insights for continuous improvement</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Custom dashboards and KPI tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Campaign performance analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Actionable recommendations for growth</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/analytics"
                    className="text-amber-600 hover:text-amber-800 flex items-center font-medium"
                  >
                    Learn about Analytics & Reporting
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 