"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useRouter } from "next/navigation";

export default function DigitalMarketingStrategyPage() {
  const router = useRouter();
  
  // Function to navigate to contact page
  const navigateToContact = (serviceType: string = 'digital-marketing', service: string = 'strategy') => {
    router.push(`/contact?type=${serviceType}&service=${service}`);
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
    <div className="bg-white">
      {/* Hero Section with Free Proposal */}
      <section className="relative bg-white overflow-hidden py-16">
        {/* Background Pattern */}
       
        {/* Main Content */}
        <motion.div 
          className="relative z-10 max-w-3xl mx-auto text-center px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Title */}
          <motion.h1 
            className="text-4xl font-bold text-gray-800 mb-3"
            variants={fadeInUp}
          >
            Digital Marketing Strategy Development
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg text-purple-700 mb-8"
            variants={fadeInUp}
          >
            Custom Strategies to Grow Your Business in the Digital Landscape
          </motion.p>

          {/* Input and Button */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center bg-[#F8FBF6] p-2 rounded-lg shadow-md max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <div className="relative w-full mb-2 md:mb-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Enter Website Address"
                className="pl-10 pr-4 py-2 bg-[#F8FBF6] text-sm border border-purple-200 focus:ring-2 focus:ring-purple-300 focus:border-purple-400 w-full"
              />
            </div>

            <Button
              className="w-full md:w-auto md:ml-2 bg-[#205655] hover:bg-[#1A1A1A] text-white text-sm font-semibold px-5 py-2 rounded-md transition"
              onClick={() => navigateToContact('digital-marketing', 'strategy')}
            >
              GET MY FREE STRATEGY
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Banner */}
      <motion.div 
        className="bg-[#205655] text-white text-center py-3 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold tracking-wide">DATA-DRIVEN STRATEGY DEVELOPMENT</h2>
      </motion.div>

      {/* Features Section */}
      <section className="py-16 bg-[#F8FBF6]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Strategic Approach to Digital Marketing
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Feature 1 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#e6f7f6] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#205655]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Market Analysis</h3>
              <p className="text-gray-600">Comprehensive analysis of your industry, competitors, and target audience to inform strategic decisions.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#e6f7f6] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#205655]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Custom Strategy Development</h3>
              <p className="text-gray-600">Tailored marketing plans aligned with your business goals, timeline, and budget constraints.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#e6f7f6] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#205655]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Performance Tracking</h3>
              <p className="text-gray-600">Real-time monitoring and reporting of campaign performance with actionable insights.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#e6f7f6] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#205655]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Audience Targeting</h3>
              <p className="text-gray-600">Precision targeting to reach the right audience segments at the right time with the right message.</p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#e6f7f6] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#205655]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Strategic Planning</h3>
              <p className="text-gray-600">Long-term roadmaps with clear milestones to achieve sustainable growth and competitive advantage.</p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md transition"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#e6f7f6] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#205655]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Multi-Channel Integration</h3>
              <p className="text-gray-600">Seamless coordination across digital channels for consistent brand messaging and customer experience.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Strategy Development Process
          </motion.h2>
          
          <motion.div 
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Step 1 */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-6"
              variants={fadeInUp}
            >
              <div className="bg-purple-100 text-purple-800 text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Discovery & Research</h3>
                <p className="text-gray-600">We start by understanding your business, goals, and current digital presence. Our team conducts thorough market research to identify opportunities and challenges.</p>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-6"
              variants={fadeInUp}
            >
              <div className="bg-purple-100 text-purple-800 text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Strategy Formulation</h3>
                <p className="text-gray-600">Based on our research, we develop a comprehensive digital marketing strategy tailored to your specific needs and business objectives.</p>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-6"
              variants={fadeInUp}
            >
              <div className="bg-purple-100 text-purple-800 text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Implementation</h3>
                <p className="text-gray-600">Our expert team executes the strategy across all relevant digital channels, ensuring consistency and quality throughout.</p>
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-6"
              variants={fadeInUp}
            >
              <div className="bg-purple-100 text-purple-800 text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Monitoring & Optimization</h3>
                <p className="text-gray-600">We continuously track performance and make data-driven adjustments to maximize ROI and achieve your business goals.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* You Know What You Want Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                You Know What You Want,<br />
                But You're Not Sure How to Get There
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We'll show you exactly how the strategy we've built will deliver results.
              </p>
              
              <div className="mb-6">
                <p className="mb-4 text-gray-700">
                  A recent report revealed that <span className="font-semibold text-purple-700">90 percent</span> of 
                  businesses know they need a strong digital marketing presence. Yet many are 
                  operating without clear digital marketing services and strategies.
                </p>
                <p className="mb-4 text-gray-700">
                  This means too many market leaders are meeting their team, trying their 
                  best, testing out different digital marketing services without a real 
                  roadmap to lead digital marketing ventures, which wastes time, money, and 
                  prioritizes, working direction and budget and resources allocation.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Where are you now? Where do you want to be? What is the best approach to achieve your business goals? Where does your digital marketing budget go?
                </h3>
                <p className="text-gray-700">
                  Our digital strategy company addresses these questions to help you pinpoint solutions.
                </p>
              </div>
              
              <p className="text-gray-700 mb-6">
                Let us assist you in building a robust digital marketing strategy framework for your brand. Get your digital marketing campaign rolling with Three Internet Marketing Agency's <span className="font-semibold">marketing strategy services</span>.
              </p>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/how-to-get.jpg" 
                alt="Digital Marketing Strategy Path" 
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400?text=Digital+Marketing+Strategy";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategy Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-800">MarkovWeb's Strategy Approach</h2>
            <p className="text-lg text-purple-600">Visualize a Clear Marketing Direction</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 mb-6">
                Our internet marketing consultant services are designed to help you get from your existing market position (point A) to a competitive industry standing (point B).
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600 mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Where does your business stand in the sales-marketing spectrum? What's your current marketing approach? Does it get you to your desired destination?
                </h3>
                <p className="text-gray-700">
                  Our digital marketing strategy consultants conduct research and analysis to understand your market challenges and craft data-driven recommendations to accomplish your goals.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Road Map Visualization */}
              <div className="bg-gray-100 rounded-lg p-4 relative">
                <div className="h-24 bg-gray-300 rounded-lg relative overflow-hidden">
                  {/* Road */}
                  <div className="absolute w-full h-8 bg-gray-600 top-8"></div>
                  {/* Road Markings */}
                  <div className="absolute w-full h-8 top-8 flex items-center justify-around">
                    <div className="h-1 w-10 bg-white"></div>
                    <div className="h-1 w-10 bg-white"></div>
                    <div className="h-1 w-10 bg-white"></div>
                    <div className="h-1 w-10 bg-white"></div>
                    <div className="h-1 w-10 bg-white"></div>
                  </div>
                  {/* Point A */}
                  <div className="absolute left-8 top-2 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center border-4 border-purple-600">
                    <span className="font-bold text-purple-800">A</span>
                  </div>
                  {/* Point B */}
                  <div className="absolute right-8 top-2 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-600">
                    <span className="font-bold text-green-800">B</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Strategy Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Goal Setting */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute w-full h-3 bg-gray-500 top-4.5"></div>
                    <div className="absolute left-2 top-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center border-2 border-purple-600">
                      <span className="font-bold text-purple-800">A</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">No Defined Goal</h3>
                  <p className="text-gray-600">
                    A good marketing strategy starts with a clearly defined objective. Goal setting allows you to measure success, gain a deeper understanding of the consequences of your decisions and reassess your priorities.
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Our internet marketing strategy company helps you determine your primary objectives to set your marketing efforts in the right direction.
              </p>
            </motion.div>
            
            {/* Efforts Not Reaching Goals */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute w-full h-3 bg-gray-500 top-4.5"></div>
                    <div className="absolute left-2 top-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center border-2 border-purple-600">
                      <span className="font-bold text-purple-800">B</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Efforts Not Getting to Goal</h3>
                  <p className="text-gray-600">
                    Have you rolled out your web marketing campaigns but are still not seeing results? We can help you identify strategic marketing plans to ensure your efforts generate profitable outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Limited Budget */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute w-full h-3 bg-gray-500 top-4.5"></div>
                    <div className="absolute left-2 top-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center border-2 border-purple-600">
                      <span className="font-bold text-purple-800">C</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Too Many Goals, Limited Resources</h3>
                  <p className="text-gray-600">
                    Does your business have a limited digital marketing budget? At MarkovWeb, we help you set realistic goals and create an online marketing strategy that fits your financial capacity and marketing capabilities.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Call to Action Card */}
            <motion.div
              className="bg-purple-50 p-6 rounded-lg shadow-md border-t-4 border-purple-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Ready to Chart Your Path to Success?</h3>
              <p className="text-gray-700 mb-6">
                Get in touch with our digital strategy company and let's talk about how to best achieve your marketing objectives, depending on your unique situation.
              </p>
              <Button 
                className="bg-[#205655] hover:bg-[#1A1A1A] text-white font-semibold px-6 py-3 rounded-md transition w-full"
                onClick={() => navigateToContact('digital-marketing', 'strategy')}
              >
                GET MY FREE PROPOSAL
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Strategy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-800">Our Marketing Strategy Agency Considers Your Unique Industry</h2>
            <p className="text-lg text-purple-600">Choose a Reliable Firm That Maps Out Every Step</p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 mb-6 text-center">
              Given the plethora of marketing strategy agencies that offer website audit services, online marketing and social media strategy solutions, it can be challenging to find the right agency that fits your business. In some cases, you might fall into the trap of an internet marketing and content strategy agency that over-promises but under-delivers.
            </p>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600 mb-6">
              <p className="text-gray-800 font-semibold italic mb-2">
                Need a second opinion on your enterprise marketing strategy? Searching for another social media strategy agency to handle your digital marketing planning? Looking to grow or pitch for investors?
              </p>
              <p className="text-gray-700">
                Six top considerations when choosing a digital strategy partner:
              </p>
            </div>
          </motion.div>

          {/* Strategy Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Web Audit Practices */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Web Audit Practices</h3>
              </div>
              <p className="text-gray-700 mb-4">
                A reputable marketing strategy company runs a complete digital marketing audit, provides transparent site audit results and clarifies website issues and technical processes. Additionally, a reliable digital strategy firm uses advanced SEO audit tools to ensure all campaign details and recommendations are accurate.
              </p>
              <p className="text-gray-700">
                At MarkovWeb, we explain technical jargon and drill down your website audit report so you have a clear understanding of where your money goes and what's happening in your campaign.
              </p>
            </motion.div>

            {/* eCommerce Marketing Strategy */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">eCommerce Marketing Strategy</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Many marketers have entered the eCommerce marketplace, but only a few truly understand its demands, limitations and potential. If you're building your eCommerce strategy or still solidifying your social media marketing plan for your online store, it's imperative that you choose a digital marketing strategy agency with years of experience in eCommerce optimization.
              </p>
              <p className="text-gray-700">
                Our marketing strategy company has more than <span className="font-semibold">15 years of experience</span> in various areas of eCommerce marketing strategy development, including <span className="text-purple-700">eCommerce PPC</span>, <span className="text-purple-700">eCommerce SEO</span> and <span className="text-purple-700">eCommerce web design</span>.
              </p>
            </motion.div>

            {/* Online Marketplace Advertising */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Online Marketplace Advertising Plan</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Are you a third-party retailer on Amazon, Target Plus or Walmart Marketplace? To improve your profitability and ensure your Amazon marketing strategy adheres to the marketplace standards, be sure to consult with a digital strategy firm that is well-versed in the demands and restrictions of various online marketplace platforms.
              </p>
              <p className="text-gray-700">
                More importantly, partner with a digital marketing agency with proven expertise and experience in developing and executing Amazon PPC strategy, Amazon branding strategy and online marketplace advertising plans.
              </p>
            </motion.div>

            {/* Marketing Flexibility */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Marketing Flexibility</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Do you cater to other businesses, investors, decision-makers or consumers? A trustworthy digital strategy consultant formulates a social media marketing business plan and digital marketing techniques that adapt to client demands and changing market conditions.
              </p>
              <p className="text-gray-700">
                Whether you need help developing a B2B social media strategy, B2C social media strategy or other digital marketing strategies, our internet marketing strategy consultants can assist you.
              </p>
            </motion.div>

            {/* Advertising Strategy */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Advertising Strategy</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Promoting your products and services online requires cutting-edge organic and paid search strategies to rise above the din and attract customer attention. However, only a few marketing strategy agencies can effectively produce and implement both Google AdWords strategy and organic digital marketing techniques.
              </p>
              <p className="text-gray-700">
                MarkovWeb comprises a team of industry specialists knowledgeable in various online advertising solutions, including Facebook Ads strategy, social media content strategy and SEM strategy creation.
              </p>
            </motion.div>

            {/* SEO Website Strategy */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">SEO Website Strategy</h3>
              </div>
              <p className="text-gray-700 mb-4">
                A dependable internet strategy consultant examines all aspects of your <span className="text-purple-700">web design</span> and SEO performance to determine all factors that affect your website accessibility and hinder your online growth. Beware of a digital strategy agency that delves right into search optimization without discussing your responsive web design issues.
              </p>
              <p className="text-gray-700">
                At MarkovWeb, our SEO website strategy recommendations also tackle the important tasks of fixing website problems and preventing them.
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button 
              className="bg-[#205655] hover:bg-[#1A1A1A] text-white font-semibold px-8 py-3 rounded-md transition"
              onClick={() => navigateToContact('digital-marketing', 'strategy')}
            >
              GET YOUR FREE PROPOSAL
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Decision Guide Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">We Help You Decide Which Approach Is Right for You</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              When making significant digital marketing investments, you need to understand <span className="text-purple-700">unified digital marketing strategies</span> for increased web presence and optimal growth. These are some of the components that might be integrated into your marketing solution depending on your business needs, budget and industry.
            </p>
          </motion.div>

          {/* Strategy Options - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-16">
            {/* Website Audit Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 002 2v5m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Website Audit Strategy</h3>
                <p className="text-gray-700 mb-3">
                  We start with a complete audit of all marketing strategies and online activities to determine where growth areas exist. This ensures our strategy plan team understands your business challenges, current market position, strengths and weaknesses.
                </p>
                <p className="text-gray-700">
                  Our website audit includes a review of technical issues, site speed, website structure, landing page design, competitive analysis, keyword opportunities and much more. These audits help us understand the current situation and capabilities, which is crucial for building successful marketing strategies.
                </p>
              </div>
            </motion.div>

            {/* SEO Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">SEO Strategy</h3>
                <p className="text-gray-700 mb-3">
                  Build better customer relationships and website trust through search engine optimization (SEO). Our expert SEO company team analyzes the full online spectrum to ensure SEO can improve your website visibility and generate high-quality leads based on search intention. We use content and link-building to boost your website ranking.
                </p>
                <p className="text-gray-700">
                  Our approach integrates on-site, off-site, local and technical needs. We synchronize SEO and SEM, content strategy, schema markup and SEO copywriting. This comprehensive SEO strategy ensures maximum search visibility and drives qualified traffic to your website.
                </p>
              </div>
            </motion.div>

            {/* SEO Keyword Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">SEO Keyword Strategy</h3>
                <p className="text-gray-700 mb-3">
                  Conduct in-depth keyword and topic research to identify visitor search intent. Research related keywords, study search volume updated search term rankings while leveraging advanced SEO audit tools during market analysis and competitor research.
                </p>
                <p className="text-gray-700">
                  Our expert optimization specialists perform a full content inventory of your site and SEO content strategy for your other layers of your web development efforts. As part of our strategic analysis, we prioritize technical SEO to ensure search engines can fully access and index your entire website.
                </p>
              </div>
            </motion.div>

            {/* SEO Content Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">SEO Content Strategy</h3>
                <p className="text-gray-700 mb-3">
                  Develop SEO content strategy from consultation with digital marketing consultants who understand keyword research and trending content before writing for content strategy. SEO only works when the content delivers what visitors are looking for, so we combine SEO best practices with superior content.
                </p>
                <p className="text-gray-700">
                  Our experts help you determine what kind of content is more successful when addressing your target market. From content consulting services such as editorial planning to considering page rank and the amount of content, we cover all aspects of your content strategy to ensure you rank for the topics that matter to you.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Strategy Options - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-16">
            {/* PPC Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">PPC Strategy</h3>
                <p className="text-gray-700 mb-3">
                  Transform PPC performance with our expert analysis of both Google and Bing PPC programs. We set up Google Analytics on digital marketing tracking for any PPC campaigns for optimal return on investment.
                </p>
                <p className="text-gray-700">
                  Competitive research and analysis of PPC advertising develop your landing page strategy. These experts deliver an in-depth, all-encompassing, actionable roadmap to literally move the needle on paid search. Remarketing campaigns help target website visitors who showed interest but didn't convert or purchase.
                </p>
              </div>
            </motion.div>

            {/* Email Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Email Strategy</h3>
                <p className="text-gray-700 mb-3">
                  Whether your target audience are consumers who shop at times out of a typical day or business executives who only do research during work hours, email marketing strategy keeps a constant eye on existing customer relationships with continuous campaign optimization.
                </p>
                <p className="text-gray-700">
                  Email marketing is still the most cost-effective marketing channel with best ROI, and with social media integration delivers promotional messages to targeted prospects. Our experts know how to test headlines, CTAs, design elements, and layout to ensure every email campaign is optimized for maximum engagement.
                </p>
              </div>
            </motion.div>

            {/* Content Marketing Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Content Marketing Strategy</h3>
                <p className="text-gray-700 mb-3">
                  Build and implement a content marketing strategy and work with providers to create engaging content. Outline content marketing strategy for your company's existing strategy and future plans. Identify key success factors for content marketing and conversion opportunities.
                </p>
                <p className="text-gray-700">
                  We leverage content marketing through blog articles, guest posting, eBooks, webinars, videos, case studies and more. Whether you're developing a content marketing strategy, optimizing existing content, or distributing content across various platforms, our team will ensure every piece contributes to your marketing goals.
                </p>
              </div>
            </motion.div>

            {/* Link Building Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Link Building Strategy</h3>
                <p className="text-gray-700 mb-3">
                  Build your organic SEO by building trust in your site authority and your traffic. Market research and competitor analysis used to focused content strategy to attract links to develop and build your business reputation online.
                </p>
                <p className="text-gray-700">
                  We also analyze your competitor link building performance, create a custom website link profile, and qualify content that generates natural links. Our goal is to develop a sophisticated approach to link building that increases your site credibility, improves your search rankings, and drives qualified leads to your website.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Additional Strategies - Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Development Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Development Strategy</h3>
                <p className="text-gray-700 mb-3">
                  Implementation of the entire online marketing strategy benefits and goals. From a solid design to an advanced strategy, website design and development work together for better results.
                </p>
                <p className="text-gray-700">
                  The strategy includes choosing the right website platform, UX/UI design with user flow optimization, navigation design, integration with CRMs and marketing software, mobile responsiveness, page load speed, and technical SEO. We ensure your website not only looks great but also functions as a powerful marketing tool for your entire organization.
                </p>
              </div>
            </motion.div>

            {/* Reputation Management Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Reputation Management Strategy</h3>
                <p className="text-gray-700 mb-3">
                  Your online reputation strategy component for both social media reputation and in search? Protect your business reputation with our proactive approach to tracking, monitoring, and feedback management.
                </p>
                <p className="text-gray-700">
                  These reputation management experts develop tracking systems for reviews, social media mentions, and create a response plan for both positive and negative feedback. Whether your facing a reputation crisis or building a solid reputation from the ground up, our digital strategy team has the expertise and process to help you succeed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">
              Client Success Stories
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Strategy Clients Say
            </h2>
            <p className="text-gray-600">
              Hear from businesses that have transformed their digital presence with our strategic marketing solutions.
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
              className="bg-white p-6 rounded-xl shadow-md"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">BT</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Bright Tech Solutions</h4>
                  <p className="text-sm text-gray-500">SaaS Company</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The digital marketing strategy developed by MarkovWeb completely transformed our online presence. Their data-driven approach helped us identify untapped market segments and optimize our customer acquisition funnel. Within 6 months, we saw a 135% increase in qualified leads and a 40% reduction in cost per acquisition."
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
              className="bg-white p-6 rounded-xl shadow-md"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">EC</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Elite Crafts</h4>
                  <p className="text-sm text-gray-500">E-commerce Retailer</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "MarkovWeb's comprehensive digital marketing strategy has been instrumental in our e-commerce growth. Their multi-channel approach seamlessly integrated our social media, email marketing, and paid advertising efforts. The results have been outstanding – a 92% increase in online sales and a 45% improvement in customer retention rates within just one quarter."
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-purple-100 text-purple-700">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Get answers to common questions about our digital marketing strategy services.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-50 rounded-xl p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-purple-600">
                    How long does it take to develop a digital marketing strategy?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    The timeline for developing a comprehensive digital marketing strategy typically ranges from 2-4 weeks, depending on the complexity of your business, competition, and objectives. Our process includes thorough market research, audience analysis, competitive assessment, and collaborative sessions with your team to ensure alignment with your business goals.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-purple-600">
                    How do you measure the success of a digital marketing strategy?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We establish clear KPIs aligned with your business objectives at the beginning of our engagement. These may include metrics such as conversion rates, customer acquisition costs, return on ad spend (ROAS), organic traffic growth, engagement rates, and revenue attribution. Our reporting dashboards provide real-time visibility into performance, and we conduct regular strategy reviews to assess progress and make data-driven adjustments.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-purple-600">
                    What makes your digital marketing strategies different?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Our approach is distinguished by three key factors: First, we prioritize data-driven decision making, using advanced analytics to inform every aspect of strategy development. Second, we take a truly integrated approach across channels, ensuring cohesive messaging and optimal resource allocation. Finally, we emphasize agility, with built-in mechanisms for rapid adaptation based on performance data and market changes.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-purple-600">
                    Do you offer strategy implementation services?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, we offer both strategy development and implementation services. Many clients choose to work with us through the entire process for seamless execution. However, we also work with organizations that have internal teams handling implementation. In those cases, we provide detailed execution plans and can offer training and advisory support to ensure successful implementation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-purple-600">
                    How often should a digital marketing strategy be updated?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    While the core elements of a well-designed strategy typically remain valid for 12-18 months, we recommend quarterly reviews and adjustments based on performance data and market changes. For rapidly evolving industries or during significant market shifts, more frequent tactical adjustments may be necessary. Our approach incorporates continuous monitoring and optimization to ensure your strategy remains effective and competitive.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ratings & Reviews Section */}
      <motion.section 
        className="bg-[#7E22CE] py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-8 md:space-y-0">
            {/* Google */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2" fill="#FFFFFF">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
                <span className="text-white text-2xl font-bold">Google</span>
              </div>
              <div className="flex mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-white text-sm font-medium">150+ Reviews</div>
            </div>
            
            {/* Clutch */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-2">
                <svg width="24" height="24" viewBox="0 0 78 86" className="mr-2" fill="#FFFFFF">
                  <path d="M0 85.7h17.5V36.1H0v49.6zm30.1-49.6v49.6h17.6v-27c0-9 6.3-15.9 15.2-15.9 3.9 0 7.7.8 11.4 2.4V30.1c-2.4-.9-5.1-1.4-7.5-1.4-5.8 0-14.3 3.2-18.9 12.4V36H30.1v.1zM0 22.7h17.5V6.8H0v15.9zm60.6 63h17.5V36.1h-17.5v49.6z"/>
                </svg>
                <span className="text-white text-2xl font-bold">Clutch</span>
              </div>
              <div className="flex mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-white text-sm font-medium">50+ Reviews</div>
            </div>
            
            {/* UpCity */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2" fill="#FFFFFF">
                  <path d="M12 0L0 12l12 12 12-12L12 0zm0 19.5L4.5 12 12 4.5 19.5 12 12 19.5z"/>
                  <path d="M12 6l-6 6 6 6 6-6-6-6zm0 9.5L8.5 12 12 8.5l3.5 3.5-3.5 3.5z"/>
                </svg>
                <span className="text-white text-2xl font-bold">UpCity</span>
              </div>
              <div className="flex mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-white text-sm font-medium">50+ Reviews</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 bg-[#205655]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Digital Marketing Strategy?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/80 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our team of expert strategists is ready to develop a customized plan that will help you achieve measurable results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              className="bg-white hover:bg-[#1A1A1A] hover:text-white text-[#205655] font-bold px-8 py-3 rounded-md text-lg shadow-lg transition-all"
              onClick={() => navigateToContact('digital-marketing', 'strategy')}
            >
              Schedule a Strategy Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3 text-white">Why Choose MarkovWeb for Your Digital Marketing Business Plan</h2>
            <p className="text-lg text-purple-100">Strategic, Goal-Focused, Data-driven Partnerships</p>
            
            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-white">
                The development of a digital marketing strategy is an involved process. MarkovWeb's approach to creating your solution will be methodical and precise to implement the appropriate approach to meet your goals and get you marketing results.
              </p>
              <p className="text-white mt-4">
                Let us help you identify the necessary steps to achieve business success. Here's what you can expect when you partner with our digital strategy agency:
              </p>
            </div>
          </motion.div>
          
          {/* Benefits Grid - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Multidisciplinary Team */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Multidisciplinary Team</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our digital marketing firm comprises a team of highly-credentialed consultants with expertise in various areas including web development, SEO, PPC marketing, social media, content marketing, email marketing strategy, conversion rate optimization (CRO) and much more.
              </p>
              <p className="text-gray-700">
                We provide full-stack marketing consulting services and an all-inclusive digital strategy development solution. Trust our diverse team of digital strategists to cover all aspects of your SEO strategy.
              </p>
            </motion.div>
            
            {/* SEO Experienced Resources */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">SEO Experienced Resources</h3>
              </div>
              <p className="text-gray-700 mb-4">
                With our digital marketing strategy agency, you don't have to worry about expertise and quality of work. We utilize in-house SEO consultants with years of specialized training in all things optimization, including content writing, conversion optimization and technical SEO.
              </p>
              <p className="text-gray-700">
                Our specialists are certified by top SEO firms, updated on current algorithm changes and constantly monitoring the industry. We provide detailed reporting and actionable data so you can see exactly what we're doing and why.
              </p>
            </motion.div>
            
            {/* Established Reputation */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Established Reputation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                At MarkovWeb, we're proud to be a digital marketing agency with a proven track record. For years, our firm has been creating highly-effective SEO strategies for organizations of all sizes in a wide range of industries.
              </p>
              <p className="text-gray-700">
                Our team of digital strategy consultants have earned awards and recognition for their ability to grow client revenue. These professionals are skilled in crafting marketing frameworks that deliver substantial, measurable results through building strategies for collaborative digital marketing campaigns with built-in flexibility.
              </p>
            </motion.div>
          </div>
          
          {/* Benefits Grid - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Unified Plan Across Delivery Teams */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Unified Plan Across Delivery Teams</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Even your SEO experts must integrate seamlessly with your content, web development, and social media specialists across your organization. We ensure consistency and seamless coordination in your existing project by creating a unified, holistic strategy.
              </p>
              <p className="text-gray-700">
                MarkovWeb eliminates silos, enabling your cross-departmental teams to work together to meet your strategic goals and create systems for delivering the strategic marketing results you need. Our collaborative approach results in reduced waste and focused marketing goals.
              </p>
            </motion.div>
            
            {/* Custom Marketing Strategy Packages */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Custom Marketing Strategy Packages</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our marketing and content strategy agency develops customized consultation packages based on your market, competitive advantage, and budget requirements. Our digital marketing strategies are designed to achieve your business objectives.
              </p>
              <p className="text-gray-700">
                We match your specific digital strategy needs with a perfect balance of resources and a tailored approach. Each digital strategy package comes with a comprehensive roadmap to give you immediate visibility into our approach, methodology, timelines and expected outcomes.
              </p>
            </motion.div>
            
            {/* Holistic Strategy Approach */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Holistic Strategy Approach</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We believe that a well-constructed digital marketing plan starts with a solid ROI analysis, thorough market research, and an analysis of your current situation. We take the time to evaluate the results of your SEO audit and your current marketing strategy carefully.
              </p>
              <p className="text-gray-700">
                This in-depth market research is key to building strategy foundations that drive results. SEO audit review, site audit, social media assessment, SEO strategy and competitor analysis are fundamental elements for creating a comprehensive, data-driven strategy framework.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-[#205655]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Digital Marketing Strategy?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/80 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our team of expert strategists is ready to develop a customized plan that will help you achieve measurable results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              className="bg-white hover:bg-[#1A1A1A] hover:text-white text-[#205655] font-bold px-8 py-3 rounded-md text-lg shadow-lg transition-all"
              onClick={() => navigateToContact('digital-marketing', 'strategy')}
            >
              Schedule a Strategy Consultation
            </Button>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Growth Formula Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-800">MarkovWeb's Growth Formula Delivers the Most Effective Results</h2>
            <p className="text-lg text-purple-600">Our battle-tested growth formula for success</p>
            
            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-gray-700">
                At MarkovWeb Marketing Agency, we aim to not only help our clients with <span className="text-purple-700">marketing</span>, but enable them to achieve a <span className="text-purple-700">sustainable competitive advantage</span> over others and have a marketing partner that can support them along the journey of scaling their business.
              </p>
              <p className="text-gray-700 mt-4">
                Our digital marketing agency's methodology is <span className="text-purple-700">proven to increase</span> our customers' digital marketing goals. We can prove exactly how our techniques will lead to improved bottom-line results.
              </p>
            </div>
          </motion.div>
          
          {/* Process Flow */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                {/* Process Steps */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                  <div className="text-center">
                    <div className="bg-purple-700 text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full mb-1">STRATEGY</div>
                    <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-700 text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full mb-1">ATTRACT</div>
                    <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-700 text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full mb-1">CONVERT</div>
                    <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-700 text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full mb-1">CLOSE</div>
                    <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-700 text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full mb-1">DELIGHT</div>
                    <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Results Bar */}
                <div className="w-full max-w-xl bg-purple-100 h-2 rounded-full mb-4"></div>
                <div className="text-sm font-semibold text-purple-700 uppercase mb-8">MEASURE RESULTS</div>
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-800 uppercase mb-4">STRATEGIZE</h3>
                  <p className="text-gray-700 mb-4">
                    The first and most important part of the growth formula is <span className="text-purple-700">creating a strategy implementation</span>.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Why do we start with strategy? To begin, we believe that having business stakeholders begin with investing in strategy will deliver much better results than jumping straight into tactics. Without strategy, businesses end up wasting money on marketing activities that don't produce a return on investment.
                  </p>
                  <p className="text-gray-700">
                    Strategic analysis of your workflow will identify various points where you need to focus on <span className="text-purple-700">integrated web marketing strategies</span> to achieve those goals given specific industry and competitive challenges.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Four-Step Process */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {/* Step 1 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 mx-auto">
                  1
                </div>
                <h3 className="text-center text-lg font-bold mt-2 mb-4">ATTRACT</h3>
                <div className="bg-white p-5 rounded-lg shadow-md max-w-xs">
                  <p className="text-gray-700 mb-3">
                    Attracting your ideal client requires a thoughtful research-based approach to creating high-quality website content.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Our digital marketing strategy process first identifies market opportunities through:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-2 mb-3">
                    <li>• Competitor analysis</li>
                    <li>• <span className="text-purple-700">Keyword research</span> to find opportunities to rank</li>
                    <li>• Developing evergreen content based on search intent</li>
                    <li>• Amplifying your lead magnet offers</li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 mx-auto">
                  2
                </div>
                <h3 className="text-center text-lg font-bold mt-2 mb-4">CONVERT</h3>
                <div className="bg-white p-5 rounded-lg shadow-md max-w-xs">
                  <p className="text-gray-700 mb-3">
                    We've helped clients create contact forms and landing pages that convert visitors to leads.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Design your customer journey with features like:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-2 mb-3">
                    <li>• Lead capture forms</li>
                    <li>• Website analytics implementation</li>
                    <li>• Email marketing automation</li>
                    <li>• Dynamic landing pages that speak to your target audience</li>
                    <li>• Engaging lead generation content</li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 mx-auto">
                  3
                </div>
                <h3 className="text-center text-lg font-bold mt-2 mb-4">CLOSE</h3>
                <div className="bg-white p-5 rounded-lg shadow-md max-w-xs">
                  <p className="text-gray-700 mb-3">
                    We develop CRM workflows and sales processes that help you close qualified leads and increase customer conversions.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Key elements include:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-2 mb-3">
                    <li>• Sales proposal process</li>
                    <li>• Email and messaging sequences</li>
                    <li>• CRM integration with marketing</li>
                    <li>• Lead scoring models</li>
                    <li>• Pipeline management optimization</li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 mx-auto">
                  4
                </div>
                <h3 className="text-center text-lg font-bold mt-2 mb-4">DELIGHT</h3>
                <div className="bg-white p-5 rounded-lg shadow-md max-w-xs">
                  <p className="text-gray-700 mb-3">
                    Digital marketing success requires long-term customer loyalty and ongoing engagement.
                  </p>
                  <p className="text-gray-700 mb-3">
                    We focus on:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-2 mb-3">
                    <li>• Customer experience improvements</li>
                    <li>• Referral programs</li>
                    <li>• Content marketing that educates existing clients</li>
                    <li>• Social proof gathering</li>
                    <li>• Renewal and upsell strategies</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Key Service Areas */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h4 className="text-purple-700 font-semibold text-lg mb-3">Search Engine Optimization</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• On-page optimization</li>
                <li>• Keyword research</li>
                <li>• SEO content creation</li>
                <li>• Local SEO</li>
                <li>• Backlink strategies</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h4 className="text-purple-700 font-semibold text-lg mb-3">Content Development</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Content strategy</li>
                <li>• Conversion copywriting</li>
                <li>• Content calendar creation</li>
                <li>• Blog writing services</li>
                <li>• SEO-optimized content</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h4 className="text-purple-700 font-semibold text-lg mb-3">Paid Search Marketing</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• PPC management</li>
                <li>• Social media advertising</li>
                <li>• Google Ads management</li>
                <li>• Ad copywriting</li>
                <li>• Retargeting campaigns</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h4 className="text-purple-700 font-semibold text-lg mb-3">Digital Strategy</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Digital transformation</li>
                <li>• Marketing automation</li>
                <li>• Social media planning</li>
                <li>• Customer journey mapping</li>
                <li>• Email marketing strategy</li>
              </ul>
            </div>
          </motion.div>
          
          <div className="text-center">
            <p className="text-gray-700 mb-6">
              Our goal is to transform your business with a growth-oriented <span className="text-purple-700">digital marketing strategy</span> that yields actual results and delivers profitable ROI. Our digital strategy firm can assist the practical side of strategy by taking a unified approach to how to execute on marketing, driving profitable growth.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button 
                className="bg-[#205655] hover:bg-[#1A1A1A] text-white font-semibold px-8 py-3 rounded-md transition"
                onClick={() => navigateToContact('digital-marketing', 'strategy')}
              >
                GET YOUR BUSINESS TO SUCCESS
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Strategy Simulator Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-purple-700 text-white overflow-hidden relative">
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
            <h2 className="text-3xl font-bold mb-3 text-white">AI-Powered Strategy Simulator</h2>
            <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-purple-200 mb-6">Visualize Your Future Marketing Success</p>
            
            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-white/90">
                MarkovWeb's exclusive AI Strategy Simulator leverages advanced machine learning algorithms to predict and visualize your marketing outcomes before implementation. By analyzing thousands of successful campaigns across your industry, our predictive models can forecast ROI, conversion rates, and customer acquisition costs with remarkable accuracy.
              </p>
            </div>
          </motion.div>

          {/* AI Simulator Visual */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="lg:w-1/2">
              <div className="bg-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-600/30 shadow-lg relative">
                <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full">
                  MarkovWeb Exclusive
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Multi-Scenario Projection</h3>
                <p className="text-white/80 mb-4">
                  Our simulator runs thousands of variations of your marketing strategy, providing a clear picture of potential outcomes based on different budget allocations, channel mixes, and market conditions.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-purple-700/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white">97%</div>
                    <div className="text-xs text-purple-200">Prediction Accuracy</div>
                  </div>
                  <div className="bg-purple-700/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white">3.2x</div>
                    <div className="text-xs text-purple-200">Avg. ROI Increase</div>
                  </div>
                  <div className="bg-purple-700/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white">40%</div>
                    <div className="text-xs text-purple-200">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                <div className="mb-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                  <div className="text-sm text-white/90">Live Simulation Dashboard</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-sm">Organic Traffic Growth</span>
                      <span className="text-white font-medium text-sm">+142%</span>
                    </div>
                    <div className="w-full bg-purple-900/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-sm">Conversion Rate Optimization</span>
                      <span className="text-white font-medium text-sm">+68%</span>
                    </div>
                    <div className="w-full bg-purple-900/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-sm">Customer Acquisition Cost</span>
                      <span className="text-white font-medium text-sm">-32%</span>
                    </div>
                    <div className="w-full bg-purple-900/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Benefits Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-purple-500/20">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Risk Mitigation</h3>
              <p className="text-white/70 text-sm">Test strategies virtually before investing resources, eliminating costly trial-and-error approaches.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-purple-500/20">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Edge</h3>
              <p className="text-white/70 text-sm">Gain insights into market opportunities your competitors haven't discovered yet with our advanced pattern recognition.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-purple-500/20">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Time Acceleration</h3>
              <p className="text-white/70 text-sm">Compress months of marketing experimentation into minutes with our real-time simulation engine.</p>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              className="bg-white hover:bg-purple-50 text-purple-800 font-semibold px-8 py-3 rounded-md transition"
              onClick={() => navigateToContact('digital-marketing', 'strategy')}
            >
              EXPERIENCE THE SIMULATOR
            </Button>
            <p className="text-purple-300 text-sm mt-4">Limited availability - Book your simulation session today</p>
          </motion.div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/10 rounded-full blur-3xl"></div>
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
            <h2 className="text-3xl font-bold mb-3 text-gray-800">Success Stories That Drive Results</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-purple-600 mb-4">Real Clients, Real Growth</p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our digital marketing strategies have transformed businesses across industries. See how our tailored approaches have helped these companies achieve remarkable growth.
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
              <div className="h-3 bg-purple-600 w-full absolute top-0"></div>
              <div className="p-6 pt-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Sarah Johnson</h3>
                    <p className="text-sm text-gray-600">CMO, TechSolutions Inc.</p>
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
                  "MarkovWeb's digital marketing strategy completely transformed our online presence. Within 6 months, our organic traffic increased by 215% and conversions doubled. Their data-driven approach and clear implementation roadmap made all the difference."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-purple-600 font-semibold text-sm">Result:</div>
                  <div className="text-green-600 font-bold">+187% ROI</div>
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
              <div className="h-3 bg-purple-600 w-full absolute top-0"></div>
              <div className="p-6 pt-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Michael Chen</h3>
                    <p className="text-sm text-gray-600">Founder, GreenLife E-Commerce</p>
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
                  "As a new e-commerce business, we were struggling to gain traction. MarkovWeb developed a comprehensive strategy that helped us identify our target audience and optimize our funnel. Their strategic guidance helped us grow from 20 orders per month to over 500!"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-purple-600 font-semibold text-sm">Result:</div>
                  <div className="text-green-600 font-bold">2,400% Growth</div>
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
              <div className="h-3 bg-purple-600 w-full absolute top-0"></div>
              <div className="p-6 pt-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Amanda Rodriguez</h3>
                    <p className="text-sm text-gray-600">Director, Coastal Services Group</p>
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
                  "The strategic marketing plan that MarkovWeb created for us was game-changing. They identified gaps in our digital approach that were costing us leads. Their analytics-driven insights and personalized recommendations delivered exceptional results."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-purple-600 font-semibold text-sm">Result:</div>
                  <div className="text-green-600 font-bold">43% Cost Reduction</div>
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
              <div className="text-4xl font-bold text-purple-700 mb-2">500+</div>
              <div className="text-gray-700">Successful Strategies</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-700 mb-2">92%</div>
              <div className="text-gray-700">Client Retention Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-700 mb-2">$50M+</div>
              <div className="text-gray-700">Client Revenue Generated</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-700 mb-2">12</div>
              <div className="text-gray-700">Industry Awards</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Assessment Tool */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full -mt-20 -mr-20 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200 rounded-full -mb-40 -ml-40 opacity-50"></div>
        
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Digital Marketing?</h2>
                <div className="w-20 h-1 bg-purple-600 mb-6"></div>
                
                <p className="text-gray-700 mb-6">
                  Get a personalized strategy assessment that identifies your biggest growth opportunities and provides actionable recommendations specifically for your business.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">Comprehensive Audit</span>
                      <p className="text-gray-600 text-sm">Complete analysis of your current digital presence</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">Custom Growth Roadmap</span>
                      <p className="text-gray-600 text-sm">Tailored strategy with actionable next steps</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">Competitor Analysis</span>
                      <p className="text-gray-600 text-sm">See how you stack up and where to gain advantage</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">ROI Projections</span>
                      <p className="text-gray-600 text-sm">See potential results and timeline to achieve them</p>
                    </div>
                  </li>
                </ul>
                
                <div className="inline-block bg-purple-600 text-white text-xl font-bold px-6 py-3 rounded-lg transform transition hover:scale-105 hover:bg-purple-700">
                  Schedule Your Free Assessment Call
                </div>
              </motion.div>
              
              {/* Right Column - Form */}
              <motion.div 
                className="bg-purple-600 p-8 lg:p-12 text-white"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Get Your Custom Strategy Plan</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Business Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-800 focus:outline-none" placeholder="Your Business Name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Website</label>
                    <input type="url" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-800 focus:outline-none" placeholder="yourwebsite.com" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-800 focus:outline-none" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input type="email" className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-800 focus:outline-none" placeholder="email@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Top Marketing Challenge</label>
                    <select className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-800 focus:outline-none">
                      <option>Generating qualified leads</option>
                      <option>Improving conversion rates</option>
                      <option>Increasing brand awareness</option>
                      <option>Reducing customer acquisition costs</option>
                      <option>Expanding to new markets</option>
                      <option>Other (please specify)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Monthly Marketing Budget</label>
                    <select className="w-full px-4 py-2 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-800 focus:outline-none">
                      <option>Under $2,000/month</option>
                      <option>$2,000 - $5,000/month</option>
                      <option>$5,000 - $10,000/month</option>
                      <option>$10,000 - $25,000/month</option>
                      <option>Over $25,000/month</option>
                    </select>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-white hover:bg-gray-100 text-purple-800 font-bold py-3 rounded-md transition"
                      onClick={() => navigateToContact('digital-marketing', 'strategy')}
                    >
                      GET MY FREE STRATEGY ASSESSMENT
                    </Button>
                    <p className="text-sm text-purple-200 mt-3 text-center">No obligation. We respect your privacy.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
