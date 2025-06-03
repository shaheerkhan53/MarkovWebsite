"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Share2, MapPin, Users, BarChart4, ShieldCheck, MessageSquare, CheckCircle, TrendingUp, Lightbulb, PlayCircle, ArrowRight, Settings, Eye, ThumbsUp, Star } from "lucide-react"; // Added more icons
import Link from "next/link";
import { ContactLinkButton } from "@/components/ui/contact-link-button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image"; // For case study images
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"; // For case studies

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function FranchiseDigitalMarketingPage() {
  // Placeholder for data that might come from an API or CMS in a real app
  const services = [
    {
      title: "Franchise Local SEO",
      description: "Optimize each franchise location for local search, ensuring high visibility in Google Maps and local SERPs to attract nearby customers.",
      icon: <MapPin className="w-10 h-10 text-orange-600 mb-4" />, // Changed icon style
    },
    {
      title: "Multi-Location PPC Campaigns",
      description: "Run targeted pay-per-click campaigns tailored to individual franchise territories, maximizing ad spend ROI and driving qualified leads.",
      icon: <Users className="w-10 h-10 text-orange-600 mb-4" />,
    },
    {
      title: "Franchise Social Media Management",
      description: "Develop cohesive brand messaging with localized content strategies for each franchise, fostering community engagement and brand loyalty.",
      icon: <MessageSquare className="w-10 h-10 text-orange-600 mb-4" />,
    },
    {
      title: "Reputation Management for Franchises",
      description: "Monitor and manage online reviews and brand sentiment across all franchise locations, protecting your brand's integrity and building trust.",
      icon: <ShieldCheck className="w-10 h-10 text-orange-600 mb-4" />,
    },
    {
      title: "Content Marketing & Strategy",
      description: "Create compelling, SEO-friendly content that supports both the national brand and local franchise initiatives, driving organic traffic and engagement.",
      icon: <Lightbulb className="w-10 h-10 text-orange-600 mb-4" />,
    },
    {
      title: "Centralized Analytics & Reporting",
      description: "Provide comprehensive dashboards and reports that offer insights into individual franchise performance and overall brand metrics.",
      icon: <BarChart4 className="w-10 h-10 text-orange-600 mb-4" />,
    },
  ];

  const benefits = [
    {
      title: "Consistent Brand Voice",
      description: "Ensure a unified brand message across all franchise locations while allowing for localized marketing efforts.",
      icon: <ThumbsUp className="w-7 h-7 text-white" />, // Adjusted size
      gradientFrom: "from-green-500", // Tailwind gradient classes
      gradientTo: "to-green-700",
    },
    {
      title: "Increased Local Leads",
      description: "Drive more qualified leads and foot traffic to individual franchise units through targeted local marketing strategies.",
      icon: <TrendingUp className="w-7 h-7 text-white" />,
      gradientFrom: "from-orange-500",
      gradientTo: "to-orange-700",
    },
    {
      title: "Scalable Growth Solutions",
      description: "Our strategies are designed to scale as your franchise network grows, accommodating new locations seamlessly.",
      icon: <Share2 className="w-7 h-7 text-white" />,
      gradientFrom: "from-teal-500",
      gradientTo: "to-teal-700",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Franchise Discovery & Audit",
      description: "We start by understanding your overall brand, individual franchise needs, competitive landscape, and current digital performance.",
      icon: <Search className="w-6 h-6 text-white" />
    },
    {
      step: 2,
      title: "Customized Strategy Development",
      description: "Based on the audit, we develop a comprehensive digital marketing strategy that aligns national brand goals with local franchise objectives.",
      icon: <Settings className="w-6 h-6 text-white" />
    },
    {
      step: 3,
      title: "Campaign Execution & Management",
      description: "Our team implements and manages campaigns across chosen channels, ensuring brand consistency and optimizing for local performance.",
      icon: <PlayCircle className="w-6 h-6 text-white" />
    },
    {
      step: 4,
      title: "Performance Monitoring & Reporting",
      description: "We provide regular, transparent reports on key metrics for both individual locations and the overall franchise network, making data-driven adjustments.",
      icon: <Eye className="w-6 h-6 text-white" />
    },
  ];

  const caseStudies = [
    {
      title: "Nationwide Fast-Food Franchise",
      description: "Implemented a hyper-local SEO and PPC strategy resulting in a 40% increase in online orders and a 25% rise in foot traffic across 150+ locations.",
      image: "/fast-food.webp", // Replace with your image
      tag: "Local SEO & PPC",
    },
    {
      title: "Home Services Franchise Network",
      description: "Revamped social media presence and reputation management, leading to a 5-star average rating increase and 60% more service inquiries via social channels.",
      image: "/home-services.jpg", // Replace with your image
      tag: "Social & Reputation",
    },
  ];


  return (
    <div className="min-h-screen bg-white"> {/* Base background */}
      <main>
        {/* Hero Section */}
        <section className="relative text-white py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/green-pattern.png"
              alt="Background Pattern"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-800/80 via-green-900/90 to-green-950/95"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight"
              >
                Franchise Digital Marketing Services {/* Updated Title */}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-green-200 mb-10 max-w-3xl mx-auto"
              >
                Unify Your Brand Presence and Maximize Revenue at Every Site
              </motion.p>
              <motion.div variants={fadeInUp} className="mb-12 flex justify-center">
                <Share2 className="w-14 h-14 text-green-400" />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-xl shadow-2xl max-w-xl mx-auto"
              >
                <p className="text-md font-semibold text-green-700 mb-4">
                  Analyze Your Franchise's Online Performance:
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2">
                  <div className="relative w-full flex-grow">
                    <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                    <Input
                      type="text"
                      placeholder="Enter Your Main Franchise Website"
                      className="w-full pl-10 pr-4 py-3 text-gray-700 bg-white text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <ContactLinkButton
                    href="/contact?type=digital-marketing&service=franchise"
                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
                  >
                    GET MY FREE PROPOSAL
                  </ContactLinkButton>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Offerings/Services Section */}
        <section className="py-16 md:py-24 bg-gray-50"> {/* Light gray background */}
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                Comprehensive Digital Solutions for Franchises
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-lg">
                We provide a full suite of digital marketing services designed to elevate your franchise network, from individual location visibility to overall brand strength.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="h-full" // Ensure cards in a row have same height if content differs
                  >
                    <Card className="bg-white hover:shadow-xl transition-shadow duration-300 h-full flex flex-col text-center p-6 rounded-lg border border-gray-200">
                      <CardHeader className="items-center"> {/* Center icon */}
                        {service.icon}
                        <CardTitle className="text-xl font-semibold text-gray-800">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-16 text-center" // Increased margin
            >
              Why Partner With Us for Franchise Marketing?
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12" // Increased gap
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center p-4" // Added padding
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${benefit.gradientFrom} ${benefit.gradientTo} shadow-lg`}> {/* Larger icon circle, shadow */}
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">{benefit.title}</h3> {/* Increased font size */}
                  <p className="text-gray-600 leading-relaxed text-base">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* "How It Works" / Our Process Section */}
        <section className="py-16 md:py-24 bg-green-50/50"> {/* Very light green tint */}
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true }}
              transition={{ duration:0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-16 text-center"
            >
              Our Proven Franchise Marketing Process
            </motion.h2>
            <div className="max-w-3xl mx-auto"> {/* Centered content */}
              <motion.div
                className="space-y-10 md:space-y-12"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {processSteps.map((item, index, arr) => (
                  <motion.div key={index} className="flex items-start" variants={fadeInUp}>
                    <div className="flex-shrink-0 mr-6 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl shadow-md mb-2">
                        {/* {item.step} */}
                        {item.icon}
                      </div>
                      {index < arr.length - 1 && (
                        <div className="w-1 h-16 bg-orange-300 rounded-full"></div> 
                      )}
                    </div>
                    <div className="pt-1"> {/* Align text with top of circle */}
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* "Success Stories" / Mini Case Studies Section */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.5}}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
            >
              Franchise Marketing Success Stories
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount:0.1}}
            >
              {caseStudies.map((study, index) => (
                <motion.div key={index} variants={fadeInUp} className="h-full">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col rounded-lg bg-white border border-gray-200">
                    <div className="relative h-56 sm:h-64"> {/* Responsive image height */}
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                        {study.tag}
                      </div>
                    </div>
                    <CardHeader className="pb-3"> {/* Reduced padding */}
                      <CardTitle className="text-xl text-gray-800">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 text-sm leading-relaxed">{study.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.5, delay:0.2}}
              className="text-center mt-16"
            >
              <Link href="/contact?type=digital-marketing&service=franchise&source=franchise-success-cta" passHref>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                    Contact Our Digital Marketing Experts
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to Action (CTA) Section */}
        <section className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white py-20 md:py-28"> {/* Darker green gradient */}
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Elevate Your Entire Franchise Network?
              </h2>
              <p className="text-green-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's build a powerful, unified digital marketing strategy that drives growth for every franchisee and strengthens your overall brand.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <ContactLinkButton
                  href="/contact?type=digital-marketing&service=franchise&source=final-cta"
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                  REQUEST A FRANCHISE STRATEGY CALL
                </ContactLinkButton>
                <Link href="/services/digital-marketing" passHref>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-lg text-[#166133] hover:bg-white/10 hover:text-white px-8 py-3 rounded-lg transition-colors">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}