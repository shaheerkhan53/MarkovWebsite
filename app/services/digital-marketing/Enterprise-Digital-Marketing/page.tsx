"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function EnterpriseDigitalMarketingPage() {
  const router = useRouter();
  
  // Function to navigate to contact page with specific parameters
  const navigateToContact = (serviceType: string = 'enterprise-digital-marketing', service: string = 'general') => {
    router.push(`/contact?type=digital-marketing&service=${serviceType}`);
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
    <div className="text-white">
      {/* Hero Section with Free Proposal */}
      <section className="relative overflow-hidden py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Add subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-70"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Main Content */}
        <motion.div 
          className="relative z-10 max-w-3xl mx-auto text-center px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Title */}
          <motion.h1 
            className="text-5xl font-bold text-gray-800 mb-3"
            variants={fadeInUp}
          >
            Enterprise Digital Marketing
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl text-[#374548] mb-8 font-medium"
            variants={fadeInUp}
          >
            Strategic Solutions for Large-Scale Business Growth
          </motion.p>

          {/* Input and Button */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center bg-white p-3 rounded-lg shadow-lg max-w-2xl mx-auto border border-gray-200"
            variants={fadeInUp}
          >
            <div className="relative w-full mb-2 md:mb-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#374548] h-5 w-5" />
              <Input
                type="text"
                placeholder="Enter Website Address"
                className="pl-10 pr-4 py-3 bg-white text-gray-700 text-sm border border-gray-200 focus:ring-2 focus:ring-[#374548] focus:border-[#374548] w-full rounded-md"
              />
            </div>

            <Button
              className="w-full md:w-auto md:ml-2 bg-[#374548] hover:bg-[#1A1A1A] text-white text-sm font-semibold px-6 py-3 rounded-md transition transform hover:scale-105"
              onClick={() => navigateToContact('enterprise-strategy')}
            >
              GET MY FREE STRATEGY
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Banner */}
      <motion.div 
        className="bg-[#374548] text-white text-center py-4 px-4 shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold tracking-wide">ENTERPRISE-GRADE DIGITAL MARKETING SOLUTIONS</h2>
      </motion.div>

      {/* Why Your Business Needs Enterprise Digital Marketing Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#e7eaeb] text-[#374548] rounded-full mb-3">ENTERPRISE MARKETING</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Why Your Business Needs<br />
              <span className="text-[#374548]">Enterprise Digital Marketing Services</span>
            </h2>
            <div className="h-1 w-24 bg-[#374548] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">All You Need Under One Roof</p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 text-center text-lg mb-6">
              You're finally expanding, but can your digital marketing strategies keep up with your success?
            </p>
            <p className="text-gray-700 text-center mb-6">
              The U.S. Census Bureau data shows <span className="font-semibold">5,044,748 new businesses</span> were established in 2022 alone. With such stiff competition, big brands need a digital 
              marketing enterprise approach to stand out in a congested market.
            </p>
            <p className="text-gray-700 text-center mb-8 text-lg font-medium">
              Partner with a trusted enterprise digital marketing company to experience these advantages:
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Scalability */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg transition border border-gray-100 hover:border-[#374548]"
              variants={cardAnimation}
              whileHover="hover"
            >
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Scalability</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                As your business grows, so do your customer base and their needs. Enterprise digital marketing solutions are scalable, allowing you to accommodate increasing demand without any major overhaul.
              </p>
            </motion.div>

            {/* Data-Driven */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg transition border border-gray-100 hover:border-[#374548]"
              variants={cardAnimation}
              whileHover="hover"
            >
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Data-Driven</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Big companies have access to vast data from multiple sources. An enterprise digital marketing agency uses this information plus conducts market research to create targeted strategies that result in higher returns.
              </p>
            </motion.div>

            {/* Go Global */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg transition border border-gray-100 hover:border-[#374548]"
              variants={cardAnimation}
              whileHover="hover"
            >
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Go Global</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Leverage online channels like social media, email and paid search to engage a broader audience. With an enterprise marketing agency, you can expand your reach across borders and tap into new markets.
              </p>
            </motion.div>

            {/* Enterprise Lead Generation */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg transition border border-gray-100 hover:border-[#374548]"
              variants={cardAnimation}
              whileHover="hover"
            >
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Enterprise Lead Generation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Enterprise marketing demands a different approach from typical business-to-consumer (B2C) or business-to-business (B2B) lead generation. Dedicated enterprise lead generation experts tailor strategies to suit your industry and target audience, resulting in higher quality leads that convert.
              </p>
            </motion.div>

            {/* Brand Consistency */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg transition border border-gray-100 hover:border-[#374548]"
              variants={cardAnimation}
              whileHover="hover"
            >
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Brand Consistency</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                With a unified enterprise digital marketing strategy, your brand messaging remains consistent across all touchpoints. Whether it's your website, social media or email marketing – customers get the same experience no matter where they interact with your business.
              </p>
            </motion.div>

            {/* Laser-Focused Targeting */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg transition border border-gray-100 hover:border-[#374548]"
              variants={cardAnimation}
              whileHover="hover"
            >
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Laser-Focused Targeting</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Precise targeting options like demographics, interests and behavior save you money by reaching only those interested in your offerings. You can also remarket to potential customers who have previously shown interest, ensuring no crumbs are left behind.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              className="bg-[#374548] hover:bg-[#1A1A1A] text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
              onClick={() => navigateToContact('enterprise-growth')}
            >
              LAUNCH YOUR BRAND TO NEW HEIGHTS
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#F8FBF6]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Strategy Approach Section */}
          <motion.div
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              MarkovWeb's Strategy Approach
            </h2>
            <div className="h-1 w-24 bg-[#374548] mx-auto mb-6"></div>
            <p className="text-center text-[#374548] mb-16 text-lg font-medium">
              Visualize a Clear Marketing Direction
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  Our internet marketing consultant services are designed to help you get 
                  from your existing market position (point A) to a competitive industry 
                  standing (point B).
                </p>
                
                <div className="border-l-4 border-[#374548] pl-4 py-2 my-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Where does your business stand in the sales-marketing 
                    spectrum? What's your current marketing approach? Does 
                    it get you to your desired destination?
                  </h3>
                  <p className="text-gray-700">
                    Our digital marketing strategy consultants conduct research and 
                    analysis to understand your market challenges and craft data-driven 
                    recommendations to accomplish your goals.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="relative h-16 bg-gray-200 rounded-md">
                  <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#374548] rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    B
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#e7eaeb] rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#374548] font-semibold">A</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">No Defined Goal</h3>
                </div>
                <p className="text-gray-600">
                  A good marketing strategy starts with a clearly defined 
                  objective. Goal setting allows you to measure success, gain a 
                  deeper understanding of the consequences of your decisions 
                  and reassess your priorities.
                </p>
                <p className="text-gray-600 mt-4">
                  Our internet marketing strategy company helps you determine your 
                  primary objectives to set your marketing efforts in the right direction.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#e7eaeb] rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#374548] font-semibold">B</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Efforts Not Getting to Goal</h3>
                </div>
                <p className="text-gray-600">
                  Have you rolled out your web marketing campaigns but are 
                  still not seeing results? We can help you identify strategic 
                  marketing plans to ensure your efforts generate profitable 
                  outcomes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#e7eaeb] rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#374548] font-semibold">C</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Too Many Goals, Limited Resources</h3>
                </div>
                <p className="text-gray-600">
                  Does your business have a limited digital marketing budget? 
                  At MarkovWeb, we help you set realistic goals and create an 
                  online marketing strategy that fits your financial capacity and 
                  marketing capabilities.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Chart Your Path to Success?</h3>
                <p className="text-gray-600 mb-6">
                  Get in touch with our digital strategy company and let's talk about 
                  how to best achieve your marketing objectives, depending on your 
                  unique situation.
                </p>
                <Button 
                  className="bg-[#143d59] hover:bg-[#0b2234] text-white font-semibold px-6 py-3 rounded-md transition"
                  onClick={() => navigateToContact('enterprise-proposal')}
                >
                  GET MY FREE PROPOSAL
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-900 hover:text-white font-semibold px-6 py-3 rounded-md transition"
                  onClick={() => navigateToContact('enterprise-consultation')}
                >
                  SCHEDULE A CONSULTATION
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Enterprise Digital Marketing Benefits
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Scalable Solutions */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-white-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Scalable Solutions</h3>
              <p className="text-gray-600">
                Our enterprise digital marketing strategies are designed to scale with your business needs, adapting to changing markets, expanding product lines, and growing geographic footprints.
              </p>
            </motion.div>

            {/* Data-Driven Approach */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Data-Driven Approach</h3>
              <p className="text-gray-600">
                We leverage advanced analytics to track performance across multiple channels, providing actionable insights that drive continuous improvement and maximize ROI for your enterprise.
              </p>
            </motion.div>

            {/* Cross-Channel Integration */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12  bg-white-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Cross-Channel Integration</h3>
              <p className="text-gray-600">
                Our enterprise marketing strategies create seamless experiences across all digital touchpoints, ensuring consistent messaging and optimal user experiences regardless of channel.
              </p>
            </motion.div>

            {/* Enterprise SEO */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Enterprise SEO</h3>
              </div>
              <p className="text-gray-600">
                Our comprehensive SEO strategies address the complexities of enterprise websites, optimizing extensive content libraries, managing multiple domains, and implementing technical SEO at scale to drive organic visibility.
              </p>
            </motion.div>

            {/* Advanced Marketing Automation */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Advanced Marketing Automation</h3>
              </div>
              <p className="text-gray-600">
                We implement sophisticated marketing automation solutions that streamline campaign management, personalize customer journeys, and optimize lead nurturing processes for maximum efficiency at enterprise scale.
              </p>
            </motion.div>

            {/* Enterprise Analytics */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Enterprise Analytics</h3>
              </div>
              <p className="text-gray-600">
                Our custom analytics solutions consolidate data from multiple sources, providing comprehensive dashboards and reports that deliver actionable intelligence for strategic decision-making.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
              Client Success Stories
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Enterprise Clients Say
            </h2>
            <p className="text-gray-600">
              Hear from enterprise businesses that have transformed their digital presence and growth through our specialized marketing services.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-[#374548] p-6 rounded-xl shadow-md border border-gray-700"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-300 font-bold">GE</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Global Enterprises Ltd.</h4>
                  <p className="text-sm text-gray-300">Fortune 500 Technology Company</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The enterprise SEO strategy developed by MarkovWeb has significantly improved our organic search visibility across all our product lines. Their data-driven approach and ability to manage complex technical SEO challenges at scale has been impressive. Our organic traffic has increased by 78% year-over-year."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="bg-[#374548] p-6 rounded-xl shadow-md border border-gray-700"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-300 font-bold">MC</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Mega Commerce Inc.</h4>
                  <p className="text-sm text-gray-300">E-commerce Enterprise</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "MarkovWeb's integrated digital marketing approach has revolutionized how we engage with customers across channels. Their marketing automation implementation has increased our lead conversion rates by 45% while reducing our marketing operations costs. The ROI on our enterprise digital marketing investment has exceeded all expectations."
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

      {/* FAQ Section */}
      <section className="py-16 bg-[#374548]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-blue-900 text-blue-200">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300">
              Get answers to common questions about enterprise digital marketing strategies and services.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#2E3739] border border-gray-700 rounded-xl p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium text-white hover:text-blue-300">
                    How does enterprise digital marketing differ from standard digital marketing?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Enterprise digital marketing addresses the unique challenges of large organizations, including complex approval workflows, multiple stakeholders, extensive product lines, and global market presence. It requires scalable solutions, enterprise-grade analytics, integration with existing systems, and strategies that can be consistently implemented across large organizations while accommodating regional needs.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium text-white hover:text-blue-300">
                    How do you measure success for enterprise marketing campaigns?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    We establish comprehensive KPI frameworks tailored to your business objectives, typically including metrics across acquisition, engagement, conversion, and retention. Our enterprise analytics solutions consolidate data from multiple channels and business units, providing holistic views of performance while enabling drill-down capabilities for detailed analysis of specific campaigns, regions, or product lines.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium text-white hover:text-blue-300">
                    How do you handle SEO for enterprise websites with thousands of pages?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Our enterprise SEO approach includes comprehensive content auditing and categorization, scalable technical SEO solutions, automated monitoring systems, and prioritization frameworks to focus on high-impact opportunities. We implement structured content governance systems, scalable internal linking strategies, and enterprise-grade SEO tools to manage complex websites efficiently.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium text-white hover:text-blue-300">
                    How do you integrate with our existing marketing technologies?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    We conduct thorough assessments of your current martech stack and develop integration plans that leverage APIs, middleware solutions, and custom connectors as needed. Our team has experience working with enterprise platforms including Salesforce, Adobe Experience Cloud, HubSpot Enterprise, and many others. We prioritize seamless data flow between systems to ensure unified customer views and accurate reporting.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium text-white hover:text-blue-300">
                    How do you maintain brand consistency while targeting different markets?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    We develop comprehensive brand guidelines and templates that can be adapted for different markets. Our centralized content management and approval workflows ensure consistent messaging while allowing for regional customization. We implement global-local strategies that maintain core brand elements while adapting messaging, offers, and channels for local market relevance and cultural appropriateness.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Enterprise Marketing?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let our experts develop a comprehensive digital strategy tailored to your enterprise needs.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button className="bg-[#143d59] hover:bg-[#0b2234] text-white font-semibold px-6 py-3 rounded-md transition">
              REQUEST A CONSULTATION
            </Button>
            
            <Link href="/contact">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-900 hover:text-white font-semibold px-6 py-3 rounded-md transition">
                CONTACT OUR ENTERPRISE TEAM
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Additional features and content */}
      
      {/* AI Strategy Simulator Section */}
      <section className="py-16 bg-gradient-to-br from-[#2E3739] to-[#374548] text-white overflow-hidden relative">
        {/* Neural Network Background Animation */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3 text-white">Enterprise AI Strategy Simulator</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-200 mb-6">Forecast Enterprise-Scale Marketing Outcomes</p>
            
            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-white/90">
                MarkovWeb's exclusive Enterprise AI Strategy Simulator leverages advanced machine learning algorithms to predict and visualize marketing outcomes at scale. Designed specifically for enterprise organizations, our predictive models analyze diverse datasets across multiple business units, markets, and product lines.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-800">Enterprise Success Stories</h2>
            <div className="w-24 h-1 bg-[#2E3739] mx-auto mb-6"></div>
            <p className="text-lg text-[#2E3739] mb-4">Real Enterprise Clients, Real Growth</p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our enterprise digital marketing strategies have transformed businesses across industries. See how our tailored approaches have helped these enterprise organizations achieve remarkable growth at scale.
            </p>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-3 bg-[#2E3739] w-full absolute top-0"></div>
              <div className="p-6 pt-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#e9eced] rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2E3739]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Jennifer Williams</h3>
                    <p className="text-sm text-gray-600">VP of Digital, Global Retail Corp</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "MarkovWeb's enterprise digital marketing solutions helped us implement a cohesive strategy across our 120+ retail locations. Their multi-market approach increased our online-to-store conversion by 185% and delivered a consistent brand experience across all touchpoints."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-[#2E3739] font-semibold text-sm">Result:</div>
                  <div className="text-green-600 font-bold">+236% Enterprise ROI</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-3 bg-[#2E3739] w-full absolute top-0"></div>
              <div className="p-6 pt-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#e9eced] rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2E3739]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Robert Chandler</h3>
                    <p className="text-sm text-gray-600">CMO, TechEnterprise Solutions</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "The complexity of our enterprise product offerings required a sophisticated approach to digital marketing. MarkovWeb's data-driven strategy unified our marketing efforts across 7 business units and helped us achieve unprecedented growth in enterprise client acquisition."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-[#2E3739] font-semibold text-sm">Result:</div>
                  <div className="text-green-600 font-bold">3,200% Lead Growth</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-3 bg-[#2E3739] w-full absolute top-0"></div>
              <div className="p-6 pt-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#e9eced] rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2E3739]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Elena Dominguez</h3>
                    <p className="text-sm text-gray-600">Director of Marketing, Global Finance Group</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Working with regulated industries across 14 countries presented unique challenges for our enterprise marketing. MarkovWeb developed a comprehensive strategy that maintained compliance while driving significant engagement and conversion improvements across all markets."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-[#2E3739] font-semibold text-sm">Result:</div>
                  <div className="text-green-600 font-bold">52% CAC Reduction</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-[#2E3739] mb-2">200+</div>
              <div className="text-gray-700">Enterprise Clients</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-[#2E3739] mb-2">97%</div>
              <div className="text-gray-700">Client Retention Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-[#2E3739] mb-2">$120M+</div>
              <div className="text-gray-700">Revenue Generated</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-[#2E3739] mb-2">15</div>
              <div className="text-gray-700">Industry Awards</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Assessment Tool */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#e9eced] rounded-full -mt-20 -mr-20 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e9eced] rounded-full -mb-40 -ml-40 opacity-50"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Text */}
              <motion.div 
                className="p-8 lg:p-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Enterprise Digital Marketing?</h2>
                <div className="w-20 h-1 bg-[#2E3739] mb-6"></div>
                
                <p className="text-gray-700 mb-6">
                  Get a personalized enterprise strategy assessment that identifies your biggest growth opportunities across all markets and provides actionable recommendations for your organization.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-[#2E3739]">Enterprise-Wide Audit</span>
                      <p className="text-gray-600 text-sm">Complete analysis of your multi-channel, multi-market digital presence</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-[#2E3739]">Enterprise Growth Roadmap</span>
                      <p className="text-gray-600 text-sm">Tailored strategy with actionable next steps for each business unit</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-[#2E3739]">Industry-Specific Analysis</span>
                      <p className="text-gray-600 text-sm">See how your enterprise compares to industry leaders and opportunities to gain market share</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-[#2E3739]">Enterprise ROI Projections</span>
                      <p className="text-gray-600 text-sm">See potential results across all markets and timeline to achieve enterprise goals</p>
                    </div>
                  </li>
                </ul>
                
                <div 
                  className="inline-block bg-[#2E3739] text-white text-xl font-bold px-6 py-3 rounded-lg transform transition hover:scale-105 hover:bg-[#1A1A1A] cursor-pointer"
                  onClick={() => navigateToContact('enterprise-assessment')}
                >
                  Schedule Your Enterprise Assessment Call
                </div>
              </motion.div>
              
              {/* Right Column - Form */}
              <motion.div 
                className="bg-[#2E3739] p-8 lg:p-12 text-white"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Get Your Enterprise Strategy Plan</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Organization Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-gray-500 focus:outline-none" placeholder="Your Enterprise Organization" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Corporate Website</label>
                    <input type="url" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-gray-500 focus:outline-none" placeholder="yourenterprise.com" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-gray-500 focus:outline-none" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Corporate Email</label>
                      <input type="email" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-gray-500 focus:outline-none" placeholder="jsmith@enterprise.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Role</label>
                    <select className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-gray-500 focus:outline-none">
                      <option>Chief Marketing Officer</option>
                      <option>VP of Marketing</option>
                      <option>Digital Marketing Director</option>
                      <option>Marketing Manager</option>
                      <option>Other (please specify)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Annual Marketing Budget</label>
                    <select className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-gray-500 focus:outline-none">
                      <option>$100,000 - $250,000</option>
                      <option>$250,000 - $500,000</option>
                      <option>$500,000 - $1,000,000</option>
                      <option>$1,000,000 - $5,000,000</option>
                      <option>$5,000,000+</option>
                    </select>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-white hover:bg-[#1A1A1A] hover:text-white text-[#2E3739] font-bold py-3 rounded-md transition"
                      onClick={() => navigateToContact('enterprise-assessment')}
                    >
                      GET MY FREE STRATEGY ASSESSMENT
                    </Button>
                    <p className="text-sm text-gray-300 mt-3 text-center">Enterprise clients receive priority consultation with our senior strategists</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise SEO Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#e7eaeb] text-[#374548] rounded-full mb-3">COMPREHENSIVE SOLUTIONS</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#374548]">#1. Enterprise SEO</span>
            </h2>
            <div className="h-1 w-24 bg-[#374548] mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              A successful franchise needs a strong online presence to attract and retain customers. Our enterprise SEO helps you reach top search engine rankings, bringing more visibility and leads to your franchise.
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Enterprise Hyper-Local SEO */}
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#374548] mb-2">Enterprise Hyper-Local SEO</h3>
                  <p className="text-gray-700 mb-3">
                    Target customers in specific geographic areas with enterprise local SEO services. Our experts utilize location-specific keywords, local business listings and customer reviews to boost your visibility in local searches. This means potential customers searching for a franchise in their area will find your business first. Stand out from the competition and attract more foot traffic with our effective enterprise local SEO strategies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Technical SEO */}
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#374548] mb-2">Enterprise Technical SEO</h3>
                  <p className="text-gray-700 mb-3">
                    Poor site structure, slow load times and broken links can negatively impact your search engine rankings. Our enterprise technical SEO services fix any technical issues on your website to improve its overall performance. We optimize site speed, ensure mobile-friendliness and fix indexing errors for better usability. Our technical SEO solutions guarantee a better user experience and higher search engine rankings.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Link Building */}
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#374548] mb-2">Enterprise Link Building</h3>
                  <p className="text-gray-700 mb-3">
                    Create valuable, informative content that positions your franchise as an industry leader with Thrive's enterprise content marketing. Our team conducts extensive research to create engaging, relevant and shareable content for your target audience. We distribute this content through various channels to reach more potential customers and drive traffic to your website. Count on our enterprise content marketing team to establish thought leadership in your field and attract customers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Reputation Management */}
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#374548] mb-2">Enterprise Reputation Management</h3>
                  <p className="text-gray-700 mb-3">
                    Maintain a positive online reputation with Thrive's enterprise reputation management solution. We monitor, respond to and address customer feedback across various platforms using enterprise reputation management software. Our reputation management experts utilize review generation tactics to encourage satisfied customers to leave positive reviews while managing negative feedback effectively.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Conversion Rate Optimization */}
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#374548] mb-2">Enterprise Conversion Rate Optimization (CRO)</h3>
                  <p className="text-gray-700 mb-3">
                    Make sure you're not missing out on potential customers. Our team of franchise CRO experts implements strategic modifications to enhance your site's usability. This includes testing and optimizing landing pages, calls-to-action (CTA), forms, checkout processes and other website elements, ensuring a seamless user experience. With our CRO strategies, you can convert more visitors into devoted customers for your franchise.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              className="bg-[#374548] hover:bg-[#1A1A1A] text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
              onClick={() => navigateToContact('enterprise-seo')}
            >
              BOOST YOUR SEARCH ENGINE RANKINGS
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Web Design & Development Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#e7eaeb] text-[#374548] rounded-full mb-3">WEB SOLUTIONS</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#374548]">#2. Enterprise Web Design & Development</span>
            </h2>
            <div className="h-1 w-24 bg-[#374548] mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Partner with us to create a professional, high-performing website that reduces bounce rates and increases conversions for your brand. Our team creates visually appealing, user-friendly websites highlighting your unique value proposition and connecting with customers on a deeper level.
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Enterprise Custom Website Design */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#374548] mb-2">Enterprise Custom Website Design</h3>
                  <p className="text-gray-700 mb-3">
                    Cookie-cutter websites often lack the customization needed to stand out in a competitive market. Our enterprise custom website design services provide unique, tailor-made websites that reflect your franchise's brand and offerings. We work closely with you to understand your business goals and create a website that sets you apart from the competition. Make a lasting impression on your customers with a customized website that truly represents your business.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enterprise eCommerce Web Design */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#374548] mb-2">Enterprise eCommerce Web Design</h3>
                  <p className="text-gray-700 mb-3">
                    About <span className="font-semibold">75% of users</span> judge a business's credibility based on its website's design. Make a lasting impression on potential customers with an interactive, user-friendly website. Our enterprise eCommerce web design services include building custom, responsive websites that are optimized for both search engines and user experience. We provide ongoing maintenance to ensure your website is always up-to-date. Build a strong digital footprint for your franchise with a professional site.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Web Hosting */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#374548] mb-2">Enterprise Web Hosting</h3>
                  <p className="text-gray-700 mb-3">
                    Big brands host vast amounts of client data. Keep them protected with Thrive's secure and reliable enterprise web hosting services. We offer various hosting options, including dedicated servers, virtual private servers (VPS), managed hosting and cloud hosting. Our team ensures your website is always accessible and protected from security threats. Get scalable and cost-effective hosting solutions for your growing enterprise only at Thrive.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              className="bg-[#374548] hover:bg-[#1A1A1A] text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
              onClick={() => navigateToContact('enterprise-web-development')}
            >
              BUILD YOUR ENTERPRISE WEBSITE
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Social Media Marketing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#e7eaeb] text-[#374548] rounded-full mb-3">SOCIAL PRESENCE</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#374548]">#3. Enterprise Social Media Marketing</span>
            </h2>
            <div className="h-1 w-24 bg-[#374548] mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Engage with your target audience and build brand loyalty through innovative social media marketing strategies to boost your online visibility, presence, and customer attraction while driving lasting relationships. Expand your Thrive's digital marketing expertise to create compelling social media content that inspires trust in your enterprise and drives measurable results for your business goals.
            </p>
          </motion.div>

          {/* Paid Media Section */}
          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#374548] mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              #4. Enterprise Paid Media
            </h3>
            <p className="text-gray-700 mb-6">
              Win the internet with powerful advertisement through online-based channel on high traffic websites. Our team strategically places paid campaigns to maximize your brand's reach with consumers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Enterprise PPC Management */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#374548] mb-1">Enterprise PPC Management</h4>
                    <p className="text-gray-700 text-sm">
                      Drive more traffic to your website and convert visitors into customers. Our PPC advertising specialists analyze marketing opportunities, optimize target keywords, develop strategic plans and manage platforms through data tracking ROI. We also provide custom reports to track campaign performance and target strategies for maximum return on investment. Trust our results and generate more leads with expertly managed PPC campaigns all day from our platform.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Enterprise Display Marketing */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#374548] mb-1">Enterprise Display Marketing</h4>
                    <p className="text-gray-700 text-sm">
                      Target specific segments through display advertising banners with attractive ads aimed at increasing your brand's online visibility. Generate leads through high-quality banners that drive more customers to your campaign pages from all possible networks. Begin to reach your target audience faster. We use cookies to track visitors and deliver them targeted ads, strategic messaging and testing ads continuously to increase conversions on your display ads.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enterprise Content Marketing */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#e7eaeb] text-[#374548] rounded-full mb-3">ENGAGING CONTENT</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#374548]">#5. Enterprise Content Marketing</span>
            </h2>
            <div className="h-1 w-24 bg-[#374548] mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Increase your online visibility with well-researched, optimized enterprise content marketing that builds trust and credibility in the industry. Our SEO focused content for your target audience fits your brand guidelines. We strategically distribute this content through various channels like social media and enterprise-wide campaigns to drive consistent results for your business.
            </p>
          </motion.div>

          {/* Enterprise Video Marketing */}
          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#374548] mb-2">Enterprise Video Marketing</h3>
                <p className="text-gray-700 mb-3">
                  Implement multiple enterprise video marketing projects to deliver the customer satisfaction you've built your practice on and increase ROI. Enhance lead generation and awareness using enterprise-level video editing, coding and distribution services. Digital platforms. We also create videos for B2B to spread your message to peers in your industry, which makes effective and consistent conversions with high-quality professional video for Thrive's enterprise clients.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enterprise eCommerce Marketing */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#e7eaeb] text-[#374548] rounded-full mb-3">E-COMMERCE SOLUTIONS</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#374548]">#6. Enterprise eCommerce Marketing</span>
            </h2>
            <div className="h-1 w-24 bg-[#374548] mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Generate more revenue for your online store with our customer-centered approach that delivers results. Our eCommerce SEO strategy takes the complexity out of multi-channel marketing efforts for large e-commerce stores. We optimize the checkout process, create strategic pricing and shipping marketing promotions relevant to your customers.
            </p>
          </motion.div>

          {/* Enterprise Stream Marketing Service */}
          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#374548] mb-2">Enterprise Stream Marketing Service (SMS)</h3>
                <p className="text-gray-700 mb-3">
                  ISMS (Global Service) focuses on delivering the global enterprise market campaign that reaches target customers both with complete features. Automatic updates, server space, dedicated system manager, and the collaboration and administrative offering to ensure minimal open rates. All domains should apply for marketing services with professional account management techniques.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Site Location & Subdomain Management */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#e7eaeb] text-[#374548] rounded-full mb-3">TECHNICAL OPTIMIZATION</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#374548]">#7. Site Location & Subdomain Management</span>
            </h2>
            <div className="h-1 w-24 bg-[#374548] mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Expand your capabilities with our locale and subdomain hosting services to stay ahead of the competition without dividing SEO to fit the strategic layout for businesses during expansion. It enables you to modify theme, layouts, copy and messaging functionality to align online with local branding directives.
            </p>
          </motion.div>

          {/* On-Page Content & Development */}
          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#374548] mb-2">On-Page Content & Development</h3>
                <p className="text-gray-700 mb-3">
                  Understand the specific pages needed for your franchise marketing plan to align with customer and audience intent in search rankings to stand out from the competition. We offer unique title tags, meta descriptions and custom redirects that tell search engines who you are. This consistency works with our keyword research. Store pages with URL structure that supports the overall impression of your business.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Analytics & Performance Measurement */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#e7eaeb] text-[#374548] rounded-full mb-3">DATA-DRIVEN INSIGHTS</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              <span className="text-[#374548]">#8. Analytics & Performance Measurement</span>
            </h2>
            <div className="h-1 w-24 bg-[#374548] mx-auto mb-6"></div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Our marketing system combines enterprise web insights, channel analytics for track to business in traffic, conversions and user data. This enables proper adjustments on AI learning whether to continue campaign or phase it down to a particular user segment and improve performance.
            </p>
          </motion.div>

          {/* Call Tracking & Monitoring - Updated content */}
          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-[#e7eaeb] rounded-lg flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#374548] mb-2">Call Tracking & Monitoring</h3>
                <p className="text-gray-700 mb-3">
                  Call Metrics and CallRail allow us to listen to calls and rate the quality of interactions while identifying the source of the calls. This information can help improve customer service, sales techniques and lead-generation strategies. When used with other analytics tools, we gain a comprehensive understanding of your overall marketing performance and make data-driven decisions for even better results.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            className="bg-[#f89828] text-white text-center py-6 px-4 rounded-lg shadow-md mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">INVEST IN CUSTOM SOLUTIONS THAT WORK</h3>
            <Button 
              className="bg-white hover:bg-[#1A1A1A] hover:text-white font-bold mt-2 px-8 py-3 rounded-md transition transform hover:scale-105"
              onClick={() => navigateToContact('enterprise-solutions')}
            >
              GET STARTED TODAY
            </Button>
          </motion.div>

          {/* What's Included Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              What's Included in Your <br />
              <span className="text-[#374548]">Enterprise Digital Marketing Strategy?</span>
            </h2>
            <p className="text-[#374548] text-lg mb-16">Access a Complete Bundle of Resources</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Thrive Score */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-40 bg-[#e7eaeb] rounded-md mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-semibold text-[#374548]">Thrive Score</h4>
                    <div className="w-32 h-8 bg-white mx-auto my-2 rounded"></div>
                    <div className="w-32 h-4 bg-white mx-auto my-1 rounded"></div>
                    <div className="w-32 h-4 bg-white mx-auto my-1 rounded"></div>
                    <div className="w-32 h-4 bg-white mx-auto my-1 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </motion.div>
              
              {/* Enterprise Marketing Solutions */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-40 bg-[#e7eaeb] rounded-md mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-semibold text-[#374548]">Enterprise Marketing<br />Solutions and Plan</h4>
                    <ul className="text-left text-sm mt-4 pl-6">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#374548] rounded-full mr-2"></div>
                        <span>Strategic recommendations</span>
                      </li>
                      <li className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-[#374548] rounded-full mr-2"></div>
                        <span>ROI for implementing the solution</span>
                      </li>
                      <li className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-[#374548] rounded-full mr-2"></div>
                        <span>Breakdown of tasks by budget tier</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </motion.div>
              
              {/* Worksheet and Investment */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-40 bg-[#e7eaeb] rounded-md mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-semibold text-[#374548]">Worksheet and Investment</h4>
                    <div className="mt-4 flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-[#374548] flex items-center justify-center relative">
                        <div className="absolute w-16 h-16 rounded-full border-4 border-white"></div>
                        <div className="absolute w-16 h-16 rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
                        <div className="absolute w-16 h-16 rounded-full bg-[#6a994e]" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#374548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Thrive Score Details Section */}
          <motion.div
            className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#374548] mb-6">Section 1: Thrive Score (Results and Recommendations)</h3>
            <p className="mb-4">A self-assessment questionnaire to gauge your brand's performance in six core areas:</p>
            
            <ul className="space-y-4">
              <li>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#374548] mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[#374548]">Brand and Business:</span> Assess your digital presence, including online reputation, competitive position and customer relationship management (CRM)
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#374548] mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[#374548]">Content and Engagement:</span> Evaluate your brand engagement, social media marketing strategy, content strategy and SEO performance, etc.
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#374548] mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[#374548]">Internal Team or Partners:</span> Measure your ability to generate online marketing ideas and execute essential web optimization processes
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#374548] mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[#374548]">Technology and Software Integration:</span> Pinpoint your brand's primary challenges in tracking campaign performance metrics
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#374548] mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[#374548]">Lead Sources:</span> Identify your primary traffic sources and assesses the availability of crucial marketing channels
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#374548] mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[#374548]">Success Measurement:</span> Assess campaign performance using factors like lead volume, customer lifetime value (LTV) and website traffic
                  </div>
                </div>
              </li>
            </ul>
            
            <p className="mt-6">An evaluation of your internet marketing performance using benchmark data to guide your position in the industry, growth phase and geographic location.</p>
          </motion.div>

          {/* Enterprise Digital Marketing Solutions Section */}
          <motion.div
            className="max-w-4xl mx-auto mb-20 bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#374548] mb-6">Section 2: Enterprise Digital Marketing Solutions and Plan</h3>
            <p className="mb-4">Strategic solutions for enterprise digital marketing implementation based on your specific needs.</p>
            
            <motion.div 
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                className="bg-[#374548] hover:bg-[#1A1A1A] text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
                onClick={() => navigateToContact('enterprise-proposal')}
              >
                GET YOUR FREE PROPOSAL
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              className="bg-[#374548] hover:bg-[#1A1A1A] text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
              onClick={() => navigateToContact('enterprise-strategy')}
            >
              GET A COMPREHENSIVE ENTERPRISE STRATEGY
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
              Client Success Stories
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Enterprise Clients Say
            </h2>
            <p className="text-gray-600">
              Hear from enterprise businesses that have transformed their digital presence and growth through our specialized marketing services.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-[#374548] p-6 rounded-xl shadow-md border border-gray-700"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-300 font-bold">GE</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Global Enterprises Ltd.</h4>
                  <p className="text-sm text-gray-300">Fortune 500 Technology Company</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The enterprise SEO strategy developed by MarkovWeb has significantly improved our organic search visibility across all our product lines. Their data-driven approach and ability to manage complex technical SEO challenges at scale has been impressive. Our organic traffic has increased by 78% year-over-year."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="bg-[#374548] p-6 rounded-xl shadow-md border border-gray-700"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-300 font-bold">MC</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Mega Commerce Inc.</h4>
                  <p className="text-sm text-gray-300">E-commerce Enterprise</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "MarkovWeb's integrated digital marketing approach has revolutionized how we engage with customers across channels. Their marketing automation implementation has increased our lead conversion rates by 45% while reducing our marketing operations costs. The ROI on our enterprise digital marketing investment has exceeded all expectations."
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
    </div>
  );
}
