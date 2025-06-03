'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  TrendingUp,
  ShieldCheck,
  ShoppingCart, // Changed from Landmark
  CreditCard,
  UserCheck,    // Changed from BarChart4
  Package,      // Changed from LineChart (for Logistics)
  BadgeDollarSign,
  Lock,
  Headset,      // Changed from BadgeDollarSign (for BPO)
  Server,       // For IT infrastructure
  BarChartHorizontal, // For Analytics/Reporting
  Phone         // Changed from Landmark (for Telecom)
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function EcommerceIndustryPage() { // Renamed Component
  // Animation variants
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#FBC183] to-[#FDD4A8] text-white overflow-hidden">
        {/* Background Grid Pattern */}
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
              {/* Updated Badge Text */}
              <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold rounded-full bg-white text-[#D97706]">
               E-commerce Industry
              </span>
              {/* Updated Headline and Description */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering Your <br /> E-commerce Growth with Tailored Solutions
              </h1>
              <p className="text-lg text-white opacity-90 mb-8 max-w-xl">
                We empower e-commerce businesses with secure, reliable solutions that optimize operations, enhance customer experience, and drive growth.
              </p>
              {/* Updated Button Styling (Optional, but fits theme) */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#D97706] hover:bg-gray-100">
                  Explore Solutions
                </Button>
                <Button variant="outline" className="text-[#D97706] border-white hover:bg-white/20">
                  Contact Us
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl transform rotate-3"></div>
                {/* Updated Image and Alt Text */}
                <Image
                  src="/ecommerce_site.png" // Replace with a relevant e-commerce image
                  alt="E-commerce Platform Solutions"
                  width={600}
                  height={400}
                  className="relative z-10 rounded-xl shadow-xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges Section - Adapted for E-commerce */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            {/* Using theme color */}
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
              Industry Challenges
            </span>
            {/* Updated Headline and Description */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Navigating E-commerce Complexities
            </h2>
            <p className="text-gray-600">
              The e-commerce landscape presents unique challenges requiring specialized solutions.
              At Markov International, we understand these complexities and offer tailored services to drive your success.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Challenge Card 1: Cybersecurity */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-orange-100 rounded-lg mr-4">
                  <Lock className="w-6 h-6 text-orange-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Cybersecurity & Fraud</h3>
              </div>
              <p className="text-gray-600">
                Protecting customer data and payment information from breaches and sophisticated online fraud attempts while ensuring platform uptime.
              </p>
            </motion.div>

            {/* Challenge Card 2: Customer Expectations */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-blue-100 rounded-lg mr-4">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Rising Customer Expectations</h3>
              </div>
              <p className="text-gray-600">
                Meeting demands for seamless omnichannel experiences, personalization, fast shipping, and hassle-free returns.
              </p>
            </motion.div>

             {/* Challenge Card 3: Competition */}
             <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-purple-100 rounded-lg mr-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Intense Competition</h3>
              </div>
              <p className="text-gray-600">
                Standing out in a crowded online marketplace, acquiring customers cost-effectively, and adapting to rapidly changing market trends.
              </p>
            </motion.div>

            {/* Challenge Card 4: Logistics & Fulfillment */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-teal-100 rounded-lg mr-4">
                  <Package className="w-6 h-6 text-teal-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Logistics & Fulfillment</h3>
              </div>
              <p className="text-gray-600">
                Managing inventory efficiently, optimizing supply chains, and ensuring timely, cost-effective order fulfillment and delivery.
              </p>
            </motion.div>

            {/* Challenge Card 5: Technology Integration */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-green-100 rounded-lg mr-4">
                  <Server className="w-6 h-6 text-green-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Technology Integration</h3>
              </div>
              <p className="text-gray-600">
                Integrating various platforms (CRM, ERP, marketing tools) seamlessly and scaling technology infrastructure to support growth.
              </p>
            </motion.div>

            {/* Challenge Card 6: Regulatory Compliance */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-red-100 rounded-lg mr-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Data Privacy & Compliance</h3>
              </div>
              <p className="text-gray-600">
                Adhering to data privacy regulations like GDPR and CCPA, managing consents, and ensuring secure payment processing (PCI-DSS).
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Solutions Section - Adapted for E-commerce */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
              Tailored Solutions
            </span>
            {/* Updated Headline and Description */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How Markov Powers E-commerce Success
            </h2>
            <p className="text-gray-600">
              Our specialized services address the unique challenges of e-commerce, helping you boost sales, improve efficiency, and deliver exceptional customer experiences.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Solution Card 1: BPO for E-commerce */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center mb-4">
                    {/* Changed Icon */}
                    <Headset className="w-6 h-6 text-white" />
                  </div>
                  {/* Updated Title and Description */}
                  <CardTitle>E-commerce Customer Support & BPO</CardTitle>
                  <CardDescription>Seamless support and back-office operations</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Updated List Items */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Multi-channel customer service (chat, email, phone) for inquiries, orders, returns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Order processing and fulfillment support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Product information management and catalog updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Chargeback management and dispute resolution</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/bpo"
                    className="text-green-600 hover:text-green-800 flex items-center font-medium"
                  >
                    Learn about BPO for E-commerce
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Solution Card 2: IT Solutions for E-commerce */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mb-4">
                    {/* Kept Icon */}
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                   {/* Updated Title and Description */}
                  <CardTitle>E-commerce Platform & Security</CardTitle>
                  <CardDescription>Robust, secure, and scalable online stores</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Updated List Items */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Custom e-commerce website development and platform migration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Secure payment gateway integration (PCI-DSS compliant)</span>
                    </li>
                     <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Website performance optimization for speed and conversions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Cybersecurity assessments and data protection implementation</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/it-solutions"
                    className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                  >
                    Learn about E-commerce IT Solutions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Solution Card 3: Digital Marketing for E-commerce */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center mb-4">
                    {/* Kept Icon */}
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  {/* Updated Title and Description */}
                  <CardTitle>E-commerce Growth Marketing</CardTitle>
                  <CardDescription>Driving traffic, conversions, and customer loyalty</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Updated List Items */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>SEO for product pages and category optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Paid advertising (Google Shopping, Social Media Ads)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Email marketing automation and personalization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Conversion Rate Optimization (CRO) and A/B testing</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/digital-marketing"
                    className="text-purple-600 hover:text-purple-800 flex items-center font-medium"
                  >
                    Learn about E-commerce Marketing
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Solution Card 4: Telecommunications for E-commerce */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center mb-4">
                    {/* Changed Icon */}
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                   {/* Updated Title and Description */}
                  <CardTitle>Reliable E-commerce Communications</CardTitle>
                  <CardDescription>Scalable communication for support and operations</CardDescription>
                </CardHeader>
                <CardContent>
                   {/* Updated List Items */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Cloud-based call center solutions for customer support teams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>VoIP and unified communications for internal collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Integration with CRM for seamless customer interaction history</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span>Reliable network infrastructure ensuring service availability</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/telecommunication"
                    className="text-amber-600 hover:text-amber-800 flex items-center font-medium"
                  >
                    Learn about Telecom for E-commerce
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

      {/* Compliance Section - Adapted for E-commerce Trust & Security */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
              Trust & Security
            </span>
             {/* Updated Headline and Description */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Building Trust Through Security & Compliance
            </h2>
            <p className="text-gray-600">
              Our solutions meet stringent security standards, protecting customer data and ensuring secure transactions to build shopper confidence.
            </p>
          </div>

          {/* Updated Compliance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">PCI-DSS Compliant</h3>
              <p className="text-gray-600 text-sm">
                Secure payment processing adhering to Payment Card Industry Data Security Standards for safe online transactions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Changed Icon */}
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              {/* Updated Title and Description */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Privacy Ready</h3>
              <p className="text-gray-600 text-sm">
                Solutions designed to help you comply with GDPR, CCPA, and other data protection regulations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Encryption</h3>
              <p className="text-gray-600 text-sm">
                Protecting sensitive customer information using advanced encryption, both in transit and at rest.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                 {/* Changed Icon */}
                <BarChartHorizontal className="w-8 h-8 text-orange-600" />
              </div>
               {/* Updated Title and Description */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fraud Prevention</h3>
              <p className="text-gray-600 text-sm">
                Implementing tools and processes to detect and mitigate fraudulent activities and transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Adapted for E-commerce */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
              Client Success
            </span>
             {/* Updated Headline and Description */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Trusted by Leading E-commerce Brands
            </h2>
            <p className="text-gray-600">
              Here's what our e-commerce clients say about partnering with Markov International to achieve their online business goals.
            </p>
          </div>

          {/* Updated Testimonials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold">FH</span>
                </div>
                <div>
                  {/* Example E-commerce Client */}
                  <h4 className="text-lg font-semibold">Fashion Hub Online</h4>
                  <p className="text-sm text-gray-500">Online Apparel Retailer</p>
                </div>
              </div>
              {/* Example E-commerce Quote */}
              <p className="text-gray-700 italic mb-4">
                "Markov International's BPO team handles our customer service flawlessly, improving satisfaction scores. Their digital marketing strategies significantly boosted our online sales and visibility in a competitive market."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">GT</span>
                </div>
                <div>
                   {/* Example E-commerce Client */}
                  <h4 className="text-lg font-semibold">Gadget Tech Store</h4>
                  <p className="text-sm text-gray-500">Electronics E-tailer</p>
                </div>
              </div>
              {/* Example E-commerce Quote */}
              <p className="text-gray-700 italic mb-4">
                "The IT solutions provided by Markov ensured our e-commerce platform is fast, reliable, and secure, especially during peak sales periods. Their expertise in PCI compliance gives us peace of mind for every transaction."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Adapted for E-commerce */}
      <section className="py-20 text-white bg-gradient-to-r from-[#F79C42] to-[#FDBC78] relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid3" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid3)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
             {/* Updated Badge Text */}
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-white/20 text-white border border-white/50">
              Ready to Elevate Your E-commerce Business?
            </span>
             {/* Updated Headline and Description */}
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Boost Your Online Sales & Efficiency</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white opacity-90 text-lg leading-relaxed">
              Contact us today to explore how our customized solutions can help your e-commerce business boost performance, streamline operations, and deliver exceptional shopping experiences.
            </p>
            {/* Updated Button Styles and Text */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="px-8 py-3 text-lg font-medium text-[#D97706] rounded-md bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 text-lg font-medium bg-transparent border-white text-white hover:bg-white/20 transition-all"
              >
                View E-commerce Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}