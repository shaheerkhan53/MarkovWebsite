"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AmazonAdvertisingPPCPage() {
  const router = useRouter();
  
  // Function to navigate to contact page with specific parameters
  const navigateToContact = (serviceType: string = 'amazon-ppc') => {
    router.push(`/contact?type=online-marketplace-marketing&service=${serviceType}`);
  };
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Combined animation for card with hover effect
  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
     
      {/* Lead Generation Form Section */}
      
      
      <main className="flex-grow text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e7eaeb] to-[#f5f7f8] opacity-70"></div>
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <motion.div 
            className="relative z-10 max-w-3xl mx-auto text-center px-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-5xl font-bold text-gray-800 mb-3"
              variants={fadeInUp}
            >
              Amazon Advertising PPC Services
            </motion.h1>

            <motion.p 
              className="text-xl text-[#374548] mb-8 font-medium"
              variants={fadeInUp}
            >
              Drive Sales and Grow Your Business with Strategic Amazon Advertising Campaigns
            </motion.p>

          </motion.div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Maximize Your <span className="text-[#4B5320]">Amazon Sales</span> with Strategic PPC Advertising
                </h2>
                
                <p className="text-gray-700 mb-4">
                  In today's competitive Amazon marketplace, a well-executed PPC (Pay-Per-Click) advertising strategy is essential for visibility, sales growth, and long-term success. Without it, even great products can get lost among millions of listings.
                </p>

                <p className="text-gray-700 mb-4">
                  At MarkovWeb, we specialize in creating and managing high-performing Amazon advertising campaigns that drive targeted traffic to your listings, increase conversions, and maximize your return on ad spend (ROAS).
                </p>

                <p className="text-gray-700 mb-6">
                  Our team of Amazon PPC experts leverages data-driven strategies, advanced analytics, and years of marketplace expertise to help your products stand out, rank higher, and sell more consistently.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-[#4B5320] hover:bg-[#394016] text-white"
                    onClick={() => navigateToContact('amazon-sales')}
                  >
                    Boost Your Amazon Sales
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-[#4B5320] text-[#4B5320]"
                    onClick={() => navigateToContact('case-studies')}
                  >
                    View Our Case Studies
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/amazon.jpg"
                    alt="Amazon PPC campaign management dashboard"
                    width={500}
                    height={350}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold">Average 350% ROAS</p>
                      <p className="text-gray-600 text-sm">for our PPC clients</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Amazon PPC Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Comprehensive <span className="text-[#4B5320]">Amazon PPC</span> Services
              </h2>
              <div className="h-1 w-32 bg-[#4B5320] mx-auto mb-6"></div>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Our end-to-end Amazon advertising solutions are designed to maximize visibility, drive sales, and grow your brand
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Sponsored Products",
                  icon: "📦",
                  description: "Strategic keyword-targeted ads that promote individual product listings to shoppers as they search for specific products or browse similar items.",
                  features: [
                    "Keyword research & optimization",
                    "Bid management & adjustments",
                    "Negative keyword implementation",
                    "Performance tracking & reporting"
                  ]
                },
                {
                  title: "Sponsored Brands",
                  icon: "🏷️",
                  description: "Custom headline ads featuring your brand logo, custom headline, and multiple products to help increase brand awareness and drive sales.",
                  features: [
                    "Custom headline creation",
                    "Product selection strategy",
                    "Landing page optimization",
                    "A/B testing for maximum performance"
                  ]
                },
                {
                  title: "Sponsored Display",
                  icon: "🎯",
                  description: "Retargeting and audience-based advertisements that reach relevant shoppers on and off Amazon based on shopping behavior.",
                  features: [
                    "Audience targeting strategies",
                    "Product targeting optimization",
                    "Cross-selling implementation",
                    "Off-Amazon retargeting"
                  ]
                },
                {
                  title: "Amazon DSP",
                  icon: "📊",
                  description: "Programmatic advertising solution to reach audiences on and off Amazon through display, video, and audio ads.",
                  features: [
                    "Custom audience creation",
                    "Cross-platform targeting",
                    "Advanced reporting & insights",
                    "Creative ad development"
                  ]
                },
                {
                  title: "PPC Audit & Strategy",
                  icon: "🔍",
                  description: "Comprehensive analysis of your current campaigns to identify opportunities for improvement and develop a customized strategy.",
                  features: [
                    "Competitor analysis",
                    "Keyword gap identification",
                    "ACOS/ROAS assessment",
                    "Custom strategy development"
                  ]
                },
                {
                  title: "Campaign Management",
                  icon: "⚙️",
                  description: "Ongoing optimization and management of your Amazon PPC campaigns to continuously improve performance and ROI.",
                  features: [
                    "Weekly performance reviews",
                    "Bid adjustments & optimization",
                    "Budget allocation management",
                    "Monthly reporting & recommendations"
                  ]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-[#4B5320] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <button 
                      className="text-[#4B5320] font-medium flex items-center"
                      onClick={() => navigateToContact(service.title.toLowerCase().replace(' ', '-'))}
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Amazon PPC Process */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Our Proven <span className="text-[#4B5320]">Amazon PPC</span> Process
              </h2>
              <div className="h-1 w-32 bg-[#4B5320] mx-auto mb-6"></div>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                A systematic approach to creating, optimizing, and scaling successful Amazon advertising campaigns
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4B5320] opacity-20 top-0 hidden md:block"></div>
              
              {/* Process Steps */}
              <div className="space-y-12 relative">
                {[
                  {
                    step: "01",
                    title: "Research & Analysis",
                    description: "We begin with comprehensive research into your products, competitors, and the marketplace to establish a solid foundation for your PPC strategy.",
                    details: [
                      "Product & competitor analysis",
                      "Keyword research & opportunity identification",
                      "Historical performance analysis (if available)",
                      "Market trend evaluation"
                    ]
                  },
                  {
                    step: "02",
                    title: "Strategy Development",
                    description: "Using insights from our research, we develop a tailored advertising strategy aligned with your business goals and budget.",
                    details: [
                      "Campaign structure planning",
                      "Keyword & targeting strategy",
                      "Budget allocation recommendations",
                      "Performance forecast & KPI setting"
                    ]
                  },
                  {
                    step: "03",
                    title: "Campaign Setup",
                    description: "We carefully build and launch your campaigns with optimized settings, targeting, and creatives to maximize initial performance.",
                    details: [
                      "Campaign creation & organization",
                      "Keyword implementation & bid setting",
                      "Ad copy & creative development",
                      "Tracking setup & integration"
                    ]
                  },
                  {
                    step: "04",
                    title: "Optimization & Management",
                    description: "Through continuous analysis and refinement, we optimize your campaigns to improve performance and efficiency over time.",
                    details: [
                      "Regular bid & budget adjustments",
                      "Keyword expansion & refinement",
                      "Negative keyword implementation",
                      "A/B testing of ad variables"
                    ]
                  },
                  {
                    step: "05",
                    title: "Reporting & Analysis",
                    description: "We provide comprehensive reporting with actionable insights to track progress and inform strategic decisions.",
                    details: [
                      "Weekly performance summaries",
                      "Monthly detailed analysis",
                      "ROAS & profitability tracking",
                      "Strategy recommendations & forecasting"
                    ]
                  },
                  {
                    step: "06",
                    title: "Scaling & Expansion",
                    description: "As your campaigns succeed, we implement strategies to scale performance and expand your Amazon advertising presence.",
                    details: [
                      "Budget scaling strategies",
                      "New product & campaign expansion",
                      "Advanced advertising format integration",
                      "Cross-selling & up-selling opportunities"
                    ]
                  }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                      <div className="h-10 w-10 bg-[#4B5320] rounded-full flex items-center justify-center text-white font-bold z-10">
                        {process.step}
                      </div>
                    </div>
                    
                    {/* Left/Right Content */}
                    <div className={`md:w-1/2 relative ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                      <div className="md:hidden mb-4 bg-[#4B5320] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mx-auto">
                        {process.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{process.title}</h3>
                      <p className="text-gray-600 mb-4">{process.description}</p>
                      <div className={`flex flex-col space-y-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        {process.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center">
                            <svg className={`w-5 h-5 text-[#4B5320] flex-shrink-0 ${index % 2 === 0 ? 'md:order-2 md:ml-2' : 'mr-2'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Empty div for spacing on the other side */}
                    <div className="md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results & Benefits */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                The <span className="text-[#4B5320]">Benefits</span> of Our Amazon PPC Services
              </h2>
              <div className="h-1 w-32 bg-[#4B5320] mx-auto mb-6"></div>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Tangible results that impact your bottom line and grow your Amazon business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Increased Sales & Revenue",
                  icon: "📈",
                  description: "Drive more qualified traffic to your listings, resulting in higher conversion rates and increased sales volume."
                },
                {
                  title: "Improved ACOS & ROAS",
                  icon: "💰",
                  description: "Optimize your advertising spend to achieve lower ACOS (Advertising Cost of Sale) and higher ROAS (Return on Ad Spend)."
                },
                {
                  title: "Enhanced Product Visibility",
                  icon: "👁️",
                  description: "Gain prime placement in search results and product pages to increase exposure to potential customers."
                },
                {
                  title: "Boosted Organic Rankings",
                  icon: "🚀",
                  description: "PPC success influences organic ranking algorithms, helping improve your products' natural visibility over time."
                },
                {
                  title: "Valuable Market Intelligence",
                  icon: "🔍",
                  description: "Gain insights into customer search behavior, competitive landscape, and product performance to inform broader strategy."
                },
                {
                  title: "Accelerated Product Launches",
                  icon: "🆕",
                  description: "Fast-track new product visibility and sales momentum with targeted advertising campaigns."
                },
                {
                  title: "Brand Awareness Growth",
                  icon: "🏆",
                  description: "Increase recognition and recall for your brand among Amazon shoppers through consistent, strategic advertising."
                },
                {
                  title: "Seasonal Sales Maximization",
                  icon: "🎁",
                  description: "Capitalize on peak shopping periods with strategically timed and scaled advertising campaigns."
                },
                {
                  title: "Inventory Management Support",
                  icon: "📦",
                  description: "Adjust advertising to help manage inventory levels, boosting slow-moving products or controlling demand for limited stock."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Amazon PPC <span className="text-[#4B5320]">Pricing Packages</span>
              </h2>
              <div className="h-1 w-32 bg-[#4B5320] mx-auto mb-6"></div>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Flexible options designed to match your business size, goals, and budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Starter",
                  price: "$997",
                  description: "Perfect for new Amazon sellers or those just starting with PPC advertising",
                  features: [
                    "Up to 50 SKUs",
                    "Sponsored Products campaigns",
                    "Weekly bid & budget adjustments",
                    "Basic keyword research",
                    "Monthly performance reports",
                    "Email support"
                  ],
                  cta: "Get Started",
                  popular: false
                },
                {
                  title: "Professional",
                  price: "$1,997",
                  description: "Ideal for established sellers looking to scale their Amazon advertising",
                  features: [
                    "Up to 150 SKUs",
                    "Sponsored Products & Brands campaigns",
                    "Weekly optimization & adjustments",
                    "Advanced keyword research",
                    "Competitor analysis",
                    "Bi-weekly performance calls",
                    "Priority email & phone support",
                    "Listing optimization recommendations"
                  ],
                  cta: "Choose Professional",
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "Custom",
                  description: "Comprehensive solution for large sellers with complex advertising needs",
                  features: [
                    "Unlimited SKUs",
                    "Full-suite advertising (Products, Brands, Display, DSP)",
                    "Daily campaign management",
                    "Advanced targeting strategies",
                    "Custom reporting dashboard",
                    "Weekly strategy calls",
                    "Dedicated account manager",
                    "Cross-marketplace management",
                    "Inventory forecasting support"
                  ],
                  cta: "Contact Us",
                  popular: false
                }
              ].map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`rounded-xl overflow-hidden shadow-lg border ${pkg.popular ? 'border-[#4B5320] scale-105 relative z-10' : 'border-gray-100'}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardAnimation}
                >
                  {pkg.popular && (
                    <div className="bg-[#4B5320] text-white text-center py-2 font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8 bg-white">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                    <div className="flex items-end mb-6">
                      <span className="text-4xl font-bold text-gray-800">{pkg.price}</span>
                      {pkg.price !== "Custom" && <span className="text-gray-600 ml-2">/month</span>}
                    </div>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-[#4B5320] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className={`w-full py-3 ${pkg.popular ? 'bg-[#4B5320] hover:bg-[#394016] text-white' : 'bg-white border-2 border-[#4B5320] text-[#4B5320] hover:bg-[#F8F9FA]'}`}
                      onClick={() => navigateToContact(`package-${pkg.title.toLowerCase()}`)}
                    >
                      {pkg.cta}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Not sure which package is right for you? Contact us for a custom solution tailored to your specific needs.
              </p>
              <Button 
                variant="outline" 
                className="border-[#4B5320] text-[#4B5320]"
                onClick={() => navigateToContact('custom-package')}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Frequently Asked <span className="text-[#4B5320]">Questions</span>
              </h2>
              <div className="h-1 w-32 bg-[#4B5320] mx-auto mb-6"></div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What is Amazon PPC advertising?",
                    answer: "Amazon PPC (Pay-Per-Click) is an advertising model where sellers pay a fee each time a shopper clicks on their ad. These ads appear in prominent positions on Amazon search results and product detail pages. Amazon offers several PPC advertising formats including Sponsored Products, Sponsored Brands, and Sponsored Display ads."
                  },
                  {
                    question: "How long does it take to see results from Amazon PPC campaigns?",
                    answer: "Initial results can be seen within the first week of launching campaigns as data begins to accumulate. However, the optimization process typically requires 4-6 weeks to gather sufficient data for meaningful optimizations and to start seeing significant improvements in performance metrics like ACOS (Advertising Cost of Sale) and conversion rates."
                  },
                  {
                    question: "What is a good ACOS for Amazon PPC?",
                    answer: "A 'good' ACOS varies significantly by product category, price point, profit margins, and business goals. Generally, most sellers aim for an ACOS between 15-30%. However, for new product launches or brand building, a higher ACOS might be acceptable as part of a strategic investment. We work with you to establish appropriate ACOS targets based on your specific profit margins and business objectives."
                  },
                  {
                    question: "How much should I budget for Amazon PPC advertising?",
                    answer: "Initial PPC budgets depend on your product category, competition level, goals, and current sales volume. As a general guideline, allocating 8-15% of your total revenue to PPC is common for established products. For new product launches, this percentage may be higher. We provide personalized budget recommendations based on your specific marketplace and competitive analysis."
                  },
                  {
                    question: "Do you require a minimum contract period?",
                    answer: "Our standard service agreements are month-to-month with no long-term commitment required. However, we recommend at least a 3-month initial period to allow sufficient time for campaign optimization and to see meaningful results. For clients who commit to longer terms, we offer preferred pricing options."
                  },
                  {
                    question: "Will PPC advertising help my organic rankings?",
                    answer: "Yes, successful PPC campaigns can positively influence organic rankings. When your products sell well through PPC, Amazon's algorithm recognizes increased sales velocity, conversion rates, and relevancy signals - all factors that can improve organic ranking. Additionally, PPC provides valuable keyword performance data that can be used to optimize your product listings for better organic visibility."
                  },
                  {
                    question: "How often will my Amazon PPC campaigns be optimized?",
                    answer: "Our campaign management includes weekly optimizations at minimum, with more frequent adjustments for higher-tier packages. Optimizations include bid adjustments, keyword refinement, negative keyword implementation, and budget allocation updates. For enterprise clients, we perform daily monitoring and adjustments to maximize performance."
                  },
                  {
                    question: "Can you manage PPC for international Amazon marketplaces?",
                    answer: "Yes, we provide PPC management services for all Amazon marketplaces globally, including North America (US, Canada, Mexico), Europe (UK, Germany, France, Italy, Spain, Netherlands, Sweden), Middle East (UAE, Saudi Arabia), and Asia-Pacific (Japan, Australia, Singapore, India). Our multilingual team ensures effective keyword research and ad copy in local languages."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-white text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section (Green) */}
        <section className="py-20 bg-[#4B5320]">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Boost Your Amazon Sales with Strategic PPC?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Get a customized Amazon advertising strategy designed to increase visibility, drive more sales, and maximize your return on investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-[#4B5320] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                  onClick={() => navigateToContact('consultation')}
                >
                  Schedule a Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="mb-8 border-white text-white bg-transparent hover:bg-[#FFD700]/10 px-8 py-6 text-lg font-semibold"
                  onClick={() => navigateToContact('free-ppc-audit')}
                >
                  Request a Free PPC Audit
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Proposal Form Section (White) */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto mt-12">
              <h3 className="text-2xl text-[#738e36] font-bold text-center mb-8">Get My FREE Digital Marketing Proposal</h3>
              <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-[#738e36] text-white p-6 rounded-l-lg lg:col-span-1">
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-2">Experience Real Results</h4>
                    <p className="text-sm">Partner with Thrive Internet Marketing Agency and scale your business.</p>
                  </div>
                  <div className="flex justify-center items-center h-64 relative">
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="flex items-end">
                        <img src="/marketingchart.jpg" alt="Marketing results chart" className="w-full" />
                      </div>
                      <div className="bg-white/10 rounded px-2 py-1 text-sm inline-block mt-2">
                        <span className="font-bold">+257%</span>
                        <span className="text-xs block">Focused Page Views</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 p-4">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        type="text" 
                        placeholder="First Name*"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <Input 
                        type="text" 
                        placeholder="Last Name*"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <Input 
                        type="text" 
                        placeholder="Company/Organization*"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <Input 
                        type="text" 
                        placeholder="Website"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Email Address*"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-100 px-2 py-2 rounded-l border border-gray-300">
                        <select className="bg-transparent text-sm">
                          <option>+1</option>
                        </select>
                      </div>
                      <Input 
                        type="tel" 
                        placeholder="Phone"
                        className="w-full p-2 border border-gray-300 rounded-r"
                      />
                    </div>
                    <div>
                      <select className="w-full p-2 border border-gray-300 rounded text-gray-500">
                        <option>Services*</option>
                      </select>
                    </div>
                    <div>
                      <select className="w-full p-2 border border-gray-300 rounded text-gray-500">
                        <option>Company Size*</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <Input 
                        type="text" 
                        placeholder="How Did You Hear About Thrive?"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <textarea 
                        placeholder="Tell us about your business"
                        className="w-full p-2 border border-gray-300 rounded resize-none h-24"
                      ></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <Button 
                        className="w-full bg-[#4B5320] hover:bg-[#394016] text-white font-bold py-3 rounded"
                        onClick={() => navigateToContact('proposal-form')}
                      >
                        SEND MY FREE PROPOSAL
                      </Button>
                      <p className="text-center text-sm mt-4 text-gray-600">
                        In a hurry? Give us a call now at <a href="tel:866-434-4748" className="text-blue-500">866-434-4748</a>
                        <br />
                        <span className="text-xs">By submitting your phone number, you agree to receiving texts from Thrive team.</span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
