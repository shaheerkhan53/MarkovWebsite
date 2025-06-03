'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  AlertTriangle, 
  TrendingUp, 
  ShieldCheck, 
  Landmark, 
  CreditCard, 
  LineChart,
  BarChart4,
  BadgeDollarSign,
  Lock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function FinanceIndustryPage() {
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
      <section className="relative py-20 bg-gradient-to-r from-emerald-800 to-emerald-900 text-white overflow-hidden">
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
              <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold rounded-full bg-emerald-600 text-white">
                Finance Industry
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tailored Solutions for the Financial Sector
              </h1>
              <p className="text-lg text-emerald-100 mb-8 max-w-xl">
                We empower financial institutions with secure, reliable solutions that enhance operational efficiency, 
                improve customer experience, and ensure regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-emerald-900 hover:bg-emerald-50">
                  Explore Solutions
                </Button>
                <Button variant="outline" className="text-[#065942] border-white hover:bg-emerald-800/30">
                  Contact Us
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-700/20 rounded-xl transform rotate-3"></div>
                <Image
                  src="/financial.png"
                  alt="Financial Solutions"
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
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
              Industry Challenges
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Navigating Financial Industry Complexities
            </h2>
            <p className="text-gray-600">
              The financial industry faces unique challenges that require specialized solutions.
              At Markov International, we understand these complexities and offer tailored services to address them.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-red-100 rounded-lg mr-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Regulatory Compliance</h3>
              </div>
              <p className="text-gray-600">
                Navigating complex financial regulations including PCI-DSS, KYC, AML, and GDPR requirements while maintaining operational efficiency.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-orange-100 rounded-lg mr-4">
                  <Lock className="w-6 h-6 text-orange-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Cybersecurity Threats</h3>
              </div>
              <p className="text-gray-600">
                Protecting sensitive financial data from increasingly sophisticated cyber threats and fraud attempts while ensuring 24/7 service availability.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-purple-100 rounded-lg mr-4">
                  <LineChart className="w-6 h-6 text-purple-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Market Volatility</h3>
              </div>
              <p className="text-gray-600">
                Adapting to rapidly changing market conditions with flexible systems that enable quick adaptation to new financial products and services.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-green-100 rounded-lg mr-4">
                  <BadgeDollarSign className="w-6 h-6 text-green-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Cost Efficiency</h3>
              </div>
              <p className="text-gray-600">
                Balancing operational costs with the need for advanced technology and service quality in a competitive financial marketplace.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-teal-100 rounded-lg mr-4">
                  <CreditCard className="w-6 h-6 text-teal-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Digital Transformation</h3>
              </div>
              <p className="text-gray-600">
                Modernizing legacy systems while maintaining seamless service delivery and managing the transition to digital banking and fintech innovations.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <span className="p-2 bg-blue-100 rounded-lg mr-4">
                  <BarChart4 className="w-6 h-6 text-blue-600" />
                </span>
                <h3 className="text-xl font-semibold text-gray-800">Customer Expectations</h3>
              </div>
              <p className="text-gray-600">
                Meeting evolving customer demands for personalized, real-time financial services with omnichannel accessibility and enhanced user experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
              Tailored Solutions
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How Markov Empowers Financial Institutions
            </h2>
            <p className="text-gray-600">
              Our specialized services address the unique challenges of the financial industry, 
              helping you enhance security, improve efficiency, and deliver exceptional customer service.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center mb-4">
                    <BadgeDollarSign className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>BPO for Financial Services</CardTitle>
                  <CardDescription>Streamlined customer service and back-office operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Customer support for banking inquiries and issue resolution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Account management and transaction processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Financial data entry and document processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Claims processing and management</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link 
                    href="/services/bpo" 
                    className="text-green-600 hover:text-green-800 flex items-center"
                  >
                    Learn more about our BPO Services
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>IT Solutions for Finance</CardTitle>
                  <CardDescription>Secure and compliant financial technology infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>PCI-DSS compliant payment processing systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Secure banking software implementation and support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Financial data security and encryption solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Fraud detection and prevention systems</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link 
                    href="/services/it-solutions" 
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Learn more about our IT Solutions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Digital Marketing for Finance</CardTitle>
                  <CardDescription>Customer acquisition and engagement strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                      <span>Financial service-specific SEO and content marketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                      <span>Compliance-aware digital marketing campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                      <span>Financial education content development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                      <span>Conversion optimization for financial services</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link 
                    href="/services/digital-marketing" 
                    className="text-purple-600 hover:text-purple-800 flex items-center"
                  >
                    Learn more about our Digital Marketing Services
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center mb-4">
                    <Landmark className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Telecommunications for Finance</CardTitle>
                  <CardDescription>Reliable and secure communication infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                      <span>Secure call center solutions for financial customer service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                      <span>Encrypted communication networks for financial institutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                      <span>Mobile banking communication infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-2"></span>
                      <span>Disaster recovery communication systems</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link 
                    href="/services/telecommunication" 
                    className="text-amber-600 hover:text-amber-800 flex items-center"
                  >
                    Learn more about our Telecommunication Services
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

      {/* Compliance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
              Financial Compliance
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Security and Compliance
            </h2>
            <p className="text-gray-600">
              Our solutions meet the highest standards in financial compliance, ensuring your data remains secure 
              while your operations stay efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">PCI-DSS Compliant</h3>
              <p className="text-gray-600 text-sm">
                Our payment processing solutions adhere to all requirements of the Payment Card Industry Data Security Standard.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">KYC/AML Compliance</h3>
              <p className="text-gray-600 text-sm">
                Our processes support Know Your Customer and Anti-Money Laundering compliance requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600 text-sm">
                Advanced encryption ensures all financial data is protected both in transit and at rest.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Audit & Reporting</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive audit trails and reporting tools for regulatory compliance and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
              Client Success
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Trusted by Financial Leaders
            </h2>
            <p className="text-gray-600">
              Here's what our financial industry clients have to say about their experience working with Markov International.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 font-bold">FG</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">First Global Bank</h4>
                  <p className="text-sm text-gray-500">Retail Banking Services</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Markov International's IT solutions have transformed our digital banking infrastructure. Their security-first approach ensures our customers' data remains protected, while their BPO services have significantly improved our customer service efficiency."
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
                  <span className="text-blue-600 font-bold">PI</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Premier Investments</h4>
                  <p className="text-sm text-gray-500">Investment Management Firm</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The security solutions provided by Markov have been instrumental in our compliance with financial regulations. Their comprehensive approach to data protection gives us and our clients confidence that sensitive financial information is in safe hands."
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

      {/* CTA Section */}
      <section className="py-20 text-white bg-gradient-to-r from-emerald-900 to-emerald-800 relative overflow-hidden">
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
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-emerald-800/50 text-emerald-200 border border-emerald-700">
              Ready to Transform Your Financial Operations?
            </span>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Secure Your Financial Services</h2>
            <p className="max-w-2xl mx-auto mb-10 text-emerald-100 text-lg leading-relaxed">
              Contact us today to discuss how our tailored solutions can help your financial institution enhance security, 
              ensure compliance, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="px-8 py-4 text-lg font-medium text-white rounded-md bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transition-all">
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 text-lg font-medium bg-transparent border-white text-white hover:bg-white/10 transition-all"
              >
                View Financial Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 